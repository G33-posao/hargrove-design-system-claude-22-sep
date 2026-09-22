// IDML generator for the Hargrove Ideal Client Profile brochure.
// Run via run_script: new Function(...helpers, body) — see notes in chat.
const spec = JSON.parse(await readFile('idml/spec4.json'));
const G = JSON.parse(await readFile('idml/glyphs.json'));
// merge consecutive same-style paragraphs into one frame (paragraph break + SpaceBefore)
for (const pg of spec.pages) {
  pg.texts.sort((a,b)=> a.y-b.y || a.x-b.x);
  const merged = [];
  for (const t of pg.texts) {
    const prev = merged[merged.length-1];
    const gap = prev ? +(t.y - (prev.y + prev.h)).toFixed(2) : 0;
    if (prev && Math.abs(prev.x-t.x)<1.5 && Math.abs(prev.w-t.w)<3 && prev.size===t.size &&
        prev.lead===t.lead && !t.caps && !prev.caps && gap>0 && gap<t.lead) {
      prev.paras.push({lines:t.lines, gap});
      prev.h = +((t.y+t.h)-prev.y).toFixed(2);
    } else { t.paras=[{lines:t.lines, gap:0}]; merged.push(t); }
  }
  pg.texts = merged;
}
// vector logo: parse the SVG wordmark into bezier subpaths
function parsePathD(d){
  const toks = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e[+-]?\d+)?/g) || [];
  let i=0, cmd='', x=0, y=0, sx=0, sy=0, lastC=null;
  const subs=[]; let cur=null;
  const num=()=>+toks[i++];
  const newPt=(px,py)=>({a:[px,py],l:[px,py],r:[px,py]});
  while(i<toks.length){
    const tk=toks[i];
    if(/[a-zA-Z]/.test(tk)){ cmd=tk; i++; if(cmd.toLowerCase()==='z'){ x=sx; y=sy; lastC=null; continue; } }
    const rel = cmd===cmd.toLowerCase();
    switch(cmd.toLowerCase()){
      case 'm': { const nx=(rel?x:0)+num(), ny=(rel?y:0)+num(); x=nx; y=ny; sx=nx; sy=ny;
        cur=[newPt(x,y)]; subs.push(cur); cmd = rel?'l':'L'; lastC=null; break; }
      case 'l': { const nx=(rel?x:0)+num(), ny=(rel?y:0)+num(); x=nx; y=ny; cur.push(newPt(x,y)); lastC=null; break; }
      case 'h': { x=(rel?x:0)+num(); cur.push(newPt(x,y)); lastC=null; break; }
      case 'v': { y=(rel?y:0)+num(); cur.push(newPt(x,y)); lastC=null; break; }
      case 'c': { const c1x=(rel?x:0)+num(), c1y=(rel?y:0)+num(), c2x=(rel?x:0)+num(), c2y=(rel?y:0)+num(), nx=(rel?x:0)+num(), ny=(rel?y:0)+num();
        cur[cur.length-1].r=[c1x,c1y]; const p=newPt(nx,ny); p.l=[c2x,c2y]; cur.push(p); x=nx; y=ny; lastC=[c2x,c2y]; break; }
      case 's': { const c1x = lastC? 2*x-lastC[0] : x, c1y = lastC? 2*y-lastC[1] : y;
        const c2x=(rel?x:0)+num(), c2y=(rel?y:0)+num(), nx=(rel?x:0)+num(), ny=(rel?y:0)+num();
        cur[cur.length-1].r=[c1x,c1y]; const p=newPt(nx,ny); p.l=[c2x,c2y]; cur.push(p); x=nx; y=ny; lastC=[c2x,c2y]; break; }
      default: throw new Error('unsupported SVG path command: '+cmd);
    }
  }
  return subs;
}
const logoSvg = await readFile('assets/logo-white.svg');
const LOGO = [];
for (const m of logoSvg.matchAll(/<polygon[^>]*points="([^"]+)"/g)) {
  const nums = m[1].trim().split(/[\s,]+/).map(Number);
  const pts = []; for (let j=0;j<nums.length;j+=2) pts.push({a:[nums[j],nums[j+1]],l:[nums[j],nums[j+1]],r:[nums[j],nums[j+1]]});
  LOGO.push([pts]);
}
for (const m of logoSvg.matchAll(/<path[^>]*d="([^"]+)"/g)) LOGO.push(parsePathD(m[1]));
const badges = [
  {page:2,num:'01',x:50.4,y:101.4,bbx:8.367,bby:7.75},
  {page:2,num:'02',x:50.4,y:175.395,bbx:7.172,bby:7.75},
  {page:2,num:'03',x:50.4,y:249.3975,bbx:7.078,bby:7.75},
  {page:2,num:'04',x:50.4,y:339.3975,bbx:6.895,bby:7.75}];

const W = spec.wpt, H = spec.hpt, OX = -W/2, OY = -H/2;
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const N = v => Math.round(v*1000)/1000;

const colors = new Map();
const cid = h => { if (!h) return 'Swatch/None'; const k = h.replace('#','');
  if (!colors.has(k)) colors.set(k, [parseInt(k.slice(0,2),16),parseInt(k.slice(2,4),16),parseInt(k.slice(4,6),16)]);
  return 'Color/c'+k; };

const FONT = { 400:['Inter','Regular'], 500:['Inter','Medium'], 600:['Inter','SemiBold'],
               700:['Inter','Bold'], 800:['Inter','ExtraBold'] };
const fontOf = w => FONT[w] || FONT[400];

const rectPath = (w,h,open) => `<PathGeometry><GeometryPathType PathOpen="${!!open}"><PathPointArray>`+
  [[0,0],[0,h],[w,h],[w,0]].map(([x,y])=>`<PathPointType Anchor="${N(x)} ${N(y)}" LeftDirection="${N(x)} ${N(y)}" RightDirection="${N(x)} ${N(y)}"/>`).join('')+
  `</PathPointArray></GeometryPathType></PathGeometry>`;
const xf = (x,y) => `1 0 0 1 ${N(x+OX)} ${N(y+OY)}`;

let uid = 0; const nid = p => p + (++uid);
const stories = [];

function textFrame(t) {
  const centered = Math.abs((t.x + t.w/2) - W/2) < 3 && t.w < 400;
  const rightAnchor = !centered && (t.x + t.w > W*0.55 && t.w < 70);
  const fw = centered ? W - 100.8 : t.w + 4;
  const fx = centered ? 50.4 : (rightAnchor ? (t.x + t.w - fw) : t.x);
  const fy = t.y - t.lead/2 + 0.364*t.size;
  const fh = t.h + t.lead + 2;
  const sid = nid('story');
  const just = centered ? 'CenterAlign' : (rightAnchor ? 'RightAlign' : 'LeftAlign');
  const psrs = t.paras.map((para, pi) => {
    const flat = [];
    para.lines.forEach((ln, li) => {
      ln.forEach(r => {
        const last = flat[flat.length-1];
        if (last && last.w===r.w && last.c===r.c && last.s===r.s) last.t += r.t;
        else flat.push({t:r.t, w:r.w, c:r.c, s:r.s});
      });
      if (li < para.lines.length-1) flat[flat.length-1].t += ' ';
    });
    const runs = flat.map((r, ri) => {
      const [fam,sty] = fontOf(r.w);
      const supSize = +(t.size*0.7).toFixed(1);
      const a = [`AppliedCharacterStyle="CharacterStyle/$ID/[No character style]"`,
        `FontStyle="${sty}"`, `PointSize="${r.s ? supSize : t.size}"`,
        `FillColor="${cid(r.c)}"`];
      if (t.track) a.push(`Tracking="${t.track}"`);
      if (t.caps) a.push(`Capitalization="AllCaps"`);
      if (r.s) a.push(`BaselineShift="${+(supSize*0.35).toFixed(2)}"`);
      const br = (pi < t.paras.length-1 && ri === flat.length-1) ? '<Br/>' : '';
      return `<CharacterStyleRange ${a.join(' ')}><Properties><AppliedFont type="string">${esc(fam)}</AppliedFont><Leading type="unit">${t.lead}</Leading></Properties><Content>${esc(r.t)}</Content>${br}</CharacterStyleRange>`;
    }).join('');
    return `<ParagraphStyleRange AppliedParagraphStyle="ParagraphStyle/$ID/NormalParagraphStyle" Justification="${just}" Composer="HL Single" Hyphenation="false" SpaceBefore="${pi ? para.gap : 0}" SpaceAfter="0" PointSize="${t.size}">${runs}</ParagraphStyleRange>`;
  }).join('');
  stories.push({ id: sid, xml:
`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:Story xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0">
<Story Self="${sid}" AppliedTOCStyle="n" TrackChanges="false" StoryTitle="" AppliedNamedGrid="n">
<StoryPreference OpticalMarginAlignment="false" OpticalMarginSize="12" FrameType="TextFrameType" StoryOrientation="Horizontal" StoryDirection="LeftToRightDirection"/>
<InCopyExportOption IncludeGraphicProxies="true" IncludeAllResources="false"/>
${psrs}
</Story></idPkg:Story>` });
  return `<TextFrame Self="${nid('tf')}" ParentStory="${sid}" ContentType="TextType" ItemLayer="ua" AppliedObjectStyle="ObjectStyle/$ID/[Normal Text Frame]" ItemTransform="${xf(fx,fy)}" StrokeWeight="0" StrokeColor="Swatch/None" FillColor="Swatch/None">`+
    `<Properties>${rectPath(fw,fh)}</Properties>`+
    `<TextFramePreference TextColumnCount="1" TextColumnGutter="12" FirstBaselineOffset="LeadingOffset" AutoSizingType="HeightOnly" AutoSizingReferencePoint="${rightAnchor?'TopRightPoint':'TopLeftPoint'}" VerticalJustification="TopAlign" IgnoreWrap="false"><Properties><InsetSpacing type="list"><ListItem type="unit">0</ListItem><ListItem type="unit">0</ListItem><ListItem type="unit">0</ListItem><ListItem type="unit">0</ListItem></InsetSpacing></Properties></TextFramePreference>`+
    `<TextWrapPreference Inverse="false" ApplyToMasterPageOnly="false" TextWrapSide="BothSides" TextWrapMode="None"/></TextFrame>`;
}

function rect(b) {
  const r = Math.min(b.radius||0, Math.min(b.w,b.h)/2);
  const corner = r > 0 ? ['Top','Bottom'].flatMap(v=>['Left','Right'].map(h=>
    `${v}${h}CornerOption="RoundedCorner" ${v}${h}CornerRadius="${N(r)}"`)).join(' ') : '';
  return `<Rectangle Self="${nid('rc')}" ContentType="Unassigned" ItemLayer="ua" AppliedObjectStyle="ObjectStyle/$ID/[None]" ItemTransform="${xf(b.x,b.y)}" FillColor="${cid(b.fill)}" StrokeColor="${cid(b.stroke)}" StrokeWeight="${b.stroke?0.75:0}" StrokeAlignment="CenterAlignment" ${corner}><Properties>${rectPath(b.w,b.h)}</Properties></Rectangle>`;
}

const line = l => `<GraphicLine Self="${nid('gl')}" ItemLayer="ua" AppliedObjectStyle="ObjectStyle/$ID/[None]" ItemTransform="${xf(l.x,l.y)}" StrokeColor="${cid(l.color)}" StrokeWeight="0.75" StrokeAlignment="CenterAlignment"><Properties><PathGeometry><GeometryPathType PathOpen="true"><PathPointArray><PathPointType Anchor="0 0" LeftDirection="0 0" RightDirection="0 0"/><PathPointType Anchor="${N(l.w)} 0" LeftDirection="${N(l.w)} 0" RightDirection="${N(l.w)} 0"/></PathPointArray></GeometryPathType></PathGeometry></Properties></GraphicLine>`;

function imageFrame(b, href, natW, natH, oval, fmt) {
  const s = b.w/natW, tag = oval ? 'Oval' : 'Rectangle';
  let path;
  if (oval) {
    const rx = b.w/2, ry = b.h/2, cx = rx, cy = ry, k = 0.552284749831;
    const pts = [
      {a:[cx,0],    l:[cx-rx*k,0],  r:[cx+rx*k,0]},
      {a:[b.w,cy],  l:[b.w,cy-ry*k],r:[b.w,cy+ry*k]},
      {a:[cx,b.h],  l:[cx+rx*k,b.h],r:[cx-rx*k,b.h]},
      {a:[0,cy],    l:[0,cy+ry*k],  r:[0,cy-ry*k]}];
    path = `<PathGeometry><GeometryPathType PathOpen="false"><PathPointArray>`+
      pts.map(p=>`<PathPointType Anchor="${N(p.a[0])} ${N(p.a[1])}" LeftDirection="${N(p.l[0])} ${N(p.l[1])}" RightDirection="${N(p.r[0])} ${N(p.r[1])}"/>`).join('')+
      `</PathPointArray></GeometryPathType></PathGeometry>`;
  } else path = rectPath(b.w,b.h);
  return `<${tag} Self="${nid('im')}" ContentType="GraphicType" ItemLayer="ua" AppliedObjectStyle="ObjectStyle/$ID/[Normal Graphics Frame]" ItemTransform="${xf(b.x,b.y)}" FillColor="Swatch/None" StrokeColor="Swatch/None" StrokeWeight="0">`+
    `<Properties>${path}</Properties>`+
    `<Image Self="${nid('img')}" ItemTransform="${N(s)} 0 0 ${N(b.h/natH)} 0 0" ImageTypeName="$ID/${fmt}" ActualPpi="72 72" EffectivePpi="${Math.round(72/s)} ${Math.round(72/s)}">`+
    `<Properties><Profile type="string">$ID/Embedded</Profile><GraphicBounds Left="0" Top="0" Right="${natW}" Bottom="${natH}"/></Properties>`+
    `<Link Self="${nid('lnk')}" LinkResourceURI="file:${href}" LinkResourceFormat="$ID/${fmt}" StoredState="Normal" LinkClassID="35906" LinkClientID="257" LinkResourceModified="false" LinkObjectModified="false" ShowInUI="true" CanEmbed="true" CanUnembed="true" CanPackage="true" ImportPolicy="NoAutoImport"/>`+
    `</Image></${tag}>`;
}

function logoVector(b) {
  const sc = b.w/406;
  return LOGO.map(sub => {
    const paths = sub.map(pts => `<GeometryPathType PathOpen="false"><PathPointArray>`+
      pts.map(p => {
        const m = c => `${N(c[0]*sc)} ${N(c[1]*sc)}`;
        return `<PathPointType Anchor="${m(p.a)}" LeftDirection="${m(p.l)}" RightDirection="${m(p.r)}"/>`;
      }).join('')+`</PathPointArray></GeometryPathType>`).join('');
    return `<Polygon Self="${nid('lg')}" ContentType="Unassigned" ItemLayer="ua" AppliedObjectStyle="ObjectStyle/$ID/[None]" ItemTransform="${xf(b.x,b.y)}" FillColor="${cid('#FFFFFF')}" StrokeColor="Swatch/None" StrokeWeight="0"><Properties><PathGeometry>${paths}</PathGeometry></Properties></Polygon>`;
  }).join('\n');
}

function badgePoly(bd) {
  const sc = 12/G.upem, base = bd.bby + (G.ascender/G.upem)*12;
  let pen = bd.bbx, paths = '';
  for (const ch of bd.num) {
    const g = G.digits[ch];
    for (const c of g.contours) {
      paths += `<GeometryPathType PathOpen="false"><PathPointArray>` + c.map(p => {
        const m = ([fx,fy]) => `${N(pen + fx*sc)} ${N(base - fy*sc)}`;
        return `<PathPointType Anchor="${m(p.a)}" LeftDirection="${m(p.l)}" RightDirection="${m(p.r)}"/>`;
      }).join('') + `</PathPointArray></GeometryPathType>`;
    }
    pen += g.adv*sc;
  }
  return `<Polygon Self="${nid('pg')}" ContentType="Unassigned" ItemLayer="ua" AppliedObjectStyle="ObjectStyle/$ID/[None]" ItemTransform="${xf(bd.x,bd.y)}" FillColor="${cid('#FFFFFF')}" StrokeColor="Swatch/None" StrokeWeight="0"><Properties><PathGeometry>${paths}</PathGeometry></Properties></Polygon>`;
}

const spreads = [];
spec.pages.forEach((pg, i) => {
  const items = [];
  if (pg.bg && pg.bg !== '#FFFFFF') items.push(rect({x:0,y:0,w:W,h:H,fill:pg.bg,radius:0,stroke:null}));
  pg.boxes.forEach(b => items.push(rect(b)));
  pg.lines.forEach(l => items.push(line(l)));
  pg.svgs.filter(s=>s.kind==='logo').forEach(s => items.push(logoVector(s)));
  pg.imgs.forEach(im => items.push(imageFrame(im,'Links/Mo-Zoubi.jpg',1000,1000,true,'JPEG')));
  badges.filter(b=>b.page===i).forEach(b => items.push(badgePoly(b)));
  pg.texts.forEach(t => items.push(textFrame(t)));
  const sid = `spread${i+1}`;
  spreads.push({ id: sid, xml:
`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:Spread xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0">
<Spread Self="${sid}" FlattenerOverride="Default" ShowMasterItems="true" PageCount="1" BindingLocation="0" AllowPageShuffle="true" ItemTransform="1 0 0 1 0 0">
<FlattenerPreference LineArtAndTextResolution="300" GradientAndMeshResolution="150" ClipComplexRegions="false" ConvertAllStrokesToOutlines="false" ConvertAllTextToOutlines="false"><Properties><RasterVectorBalance type="double">50</RasterVectorBalance></Properties></FlattenerPreference>
<Page Self="${sid}p" AppliedMaster="n" OverrideList="" AppliedTrapPreset="TrapPreset/$ID/kDefaultTrapStyleName" Name="${i+1}" ItemTransform="1 0 0 1 ${OX} ${OY}" GeometricBounds="0 0 ${H} ${W}" UseMasterGrid="true"><MarginPreference ColumnCount="1" ColumnGutter="12" Top="50.4" Bottom="50.4" Left="50.4" Right="50.4" ColumnDirection="Horizontal" ColumnsPositions="0 511.2"/></Page>
${items.join('\n')}
</Spread></idPkg:Spread>` });
});

const colorXml = [...colors.entries()].map(([k,rgb]) =>
  `<Color Self="Color/c${k}" Model="Process" Space="RGB" ColorValue="${rgb.join(' ')}" ColorOverride="Normal" AlternateSpace="NoAlternateColor" AlternateColorValue="" Name="c${k}" ColorEditable="true" ColorRemovable="true" Visible="true" SwatchCreatorID="7937"/>`).join('\n');

const famXml = `<FontFamily Self="fam0" Name="Inter">` +
  ['Regular','Medium','SemiBold','Bold','ExtraBold'].map((st,j)=>
    `<Font Self="fam0f${j}" FontFamily="Inter" Name="Inter ${st}" PostScriptName="Inter-${st}" Status="Installed" FontStyleName="${st}" FontType="TrueType" WritingScript="0" FullName="Inter ${st}" FullNameNative="Inter ${st}" FontStyleNameNative="${st}" PlatformName="" Version="4.000"/>`).join('') + `</FontFamily>`;

const files = {};
files['mimetype'] = 'application/vnd.adobe.indesign-idml-package';
files['META-INF/container.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0"><rootfiles><rootfile full-path="designmap.xml" media-type="text/xml"/></rootfiles></container>`;
files['META-INF/metadata.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:Metadata xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0"><indesign xmlns="http://ns.adobe.com/xap/1.0/"/></idPkg:Metadata>`;
files['Resources/Graphic.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:Graphic xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0">
<Swatch Self="Swatch/None" Name="None" ColorEditable="false" ColorRemovable="false" Visible="true" SwatchCreatorID="7937"/>
<Color Self="Color/Black" Model="Process" Space="CMYK" ColorValue="0 0 0 100" ColorOverride="Normal" AlternateSpace="NoAlternateColor" AlternateColorValue="" Name="Black" ColorEditable="false" ColorRemovable="false" Visible="true" SwatchCreatorID="7937"/>
${colorXml}
<StrokeStyle Self="StrokeStyle/$ID/Solid" Name="$ID/Solid"/>
</idPkg:Graphic>`;
files['Resources/Fonts.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:Fonts xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0">
${famXml}
</idPkg:Fonts>`;
files['Resources/Styles.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:Styles xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0">
<RootCharacterStyleGroup Self="rcsg"><CharacterStyle Self="CharacterStyle/$ID/[No character style]" Name="$ID/[No character style]" Imported="false"/></RootCharacterStyleGroup>
<RootParagraphStyleGroup Self="rpsg">
<ParagraphStyle Self="ParagraphStyle/$ID/[No paragraph style]" Name="$ID/[No paragraph style]" Imported="false"/>
<ParagraphStyle Self="ParagraphStyle/$ID/NormalParagraphStyle" Name="$ID/NormalParagraphStyle" Imported="false" NextStyle="ParagraphStyle/$ID/NormalParagraphStyle" KeyboardShortcut="0 0" FontStyle="Regular" PointSize="10" Hyphenation="false"><Properties><AppliedFont type="string">Inter</AppliedFont></Properties></ParagraphStyle>
</RootParagraphStyleGroup>
<RootObjectStyleGroup Self="rosg">
<ObjectStyle Self="ObjectStyle/$ID/[None]" Name="$ID/[None]" AppliedParagraphStyle="n" EnableFill="false" EnableStroke="false" EnableParagraphStyle="false" EnableTextFrameGeneralOptions="false"/>
<ObjectStyle Self="ObjectStyle/$ID/[Normal Graphics Frame]" Name="$ID/[Normal Graphics Frame]" AppliedParagraphStyle="n" EnableFill="false" EnableStroke="false"/>
<ObjectStyle Self="ObjectStyle/$ID/[Normal Text Frame]" Name="$ID/[Normal Text Frame]" AppliedParagraphStyle="ParagraphStyle/$ID/NormalParagraphStyle" EnableFill="false" EnableStroke="false"/>
</RootObjectStyleGroup>
<RootCellStyleGroup Self="rcelsg"><CellStyle Self="CellStyle/$ID/[None]" Name="$ID/[None]"/></RootCellStyleGroup>
<RootTableStyleGroup Self="rtsg"><TableStyle Self="TableStyle/$ID/[No table style]" Name="$ID/[No table style]"/><TableStyle Self="TableStyle/$ID/[Basic Table]" Name="$ID/[Basic Table]"/></RootTableStyleGroup>
</idPkg:Styles>`;
files['Resources/Preferences.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:Preferences xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0">
<DocumentPreference PageHeight="${H}" PageWidth="${W}" PagesPerDocument="1" FacingPages="false" DocumentBleedTopOffset="0" DocumentBleedBottomOffset="0" DocumentBleedInsideOrLeftOffset="0" DocumentBleedOutsideOrRightOffset="0" PageOrientation="Portrait" ColumnGuideLocked="false" AllowPageShuffle="true" PreserveLayoutWhenShuffling="true"/>
<MarginPreference ColumnCount="1" ColumnGutter="12" Top="50.4" Bottom="50.4" Left="50.4" Right="50.4" ColumnDirection="Horizontal"/>
<ViewPreference HorizontalMeasurementUnits="Points" VerticalMeasurementUnits="Points" RulerOrigin="PageOrigin"/>
<TextDefault FontStyle="Regular" PointSize="10" Hyphenation="false"><Properties><AppliedFont type="string">Inter</AppliedFont><Leading type="unit">16</Leading></Properties></TextDefault>
</idPkg:Preferences>`;
files['XML/Tags.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:Tags xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0"><XMLTag Self="XMLTag/Root" Name="Root"><Properties><TagColor type="enumeration">LightBlue</TagColor></Properties></XMLTag></idPkg:Tags>`;
files['XML/BackingStory.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<idPkg:BackingStory xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0"><XmlStory Self="backing" AppliedTOCStyle="n" TrackChanges="false" StoryTitle="" AppliedNamedGrid="n"><StoryPreference OpticalMarginAlignment="false" OpticalMarginSize="12" FrameType="TextFrameType" StoryOrientation="Horizontal" StoryDirection="LeftToRightDirection"/><InCopyExportOption IncludeGraphicProxies="true" IncludeAllResources="false"/><ParagraphStyleRange AppliedParagraphStyle="ParagraphStyle/$ID/NormalParagraphStyle"><CharacterStyleRange AppliedCharacterStyle="CharacterStyle/$ID/[No character style]"/></ParagraphStyleRange></XmlStory></idPkg:BackingStory>`;
spreads.forEach(s => files[`Spreads/Spread_${s.id}.xml`] = s.xml);
stories.forEach(s => files[`Stories/Story_${s.id}.xml`] = s.xml);
files['designmap.xml'] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<?aid style="50" type="document" readerVersion="6.0" featureSet="257" product="17.0(100)" ?>
<Document xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging" DOMVersion="17.0" Self="hargroveICP" StoryList="${stories.map(s=>s.id).join(' ')}" Name="Hargrove-Ideal-Client-Profile.indd" ZeroPoint="0 0" ActiveLayer="ua" CMYKProfile="U.S. Web Coated (SWOP) v2" RGBProfile="sRGB IEC61966-2.1">
<Language Self="Language/$ID/English%3a USA" Name="$ID/English: USA" SingleQuotes="''" DoubleQuotes="&quot;&quot;" PrimaryLanguageName="$ID/English" SublanguageName="$ID/USA" Id="1033" HyphenationVendor="Hunspell" SpellingVendor="Hunspell"/>
<idPkg:Graphic src="Resources/Graphic.xml"/>
<idPkg:Fonts src="Resources/Fonts.xml"/>
<idPkg:Styles src="Resources/Styles.xml"/>
<idPkg:Preferences src="Resources/Preferences.xml"/>
<Layer Self="ua" Name="Layer 1" Visible="true" Locked="false" IgnoreWrap="false" ShowGuides="true" LockGuides="false" UI="true" Expendable="true" Printable="true"/>
${spreads.map(s=>`<idPkg:Spread src="Spreads/Spread_${s.id}.xml"/>`).join('\n')}
<idPkg:BackingStory src="XML/BackingStory.xml"/>
${stories.map(s=>`<idPkg:Story src="Stories/Story_${s.id}.xml"/>`).join('\n')}
<idPkg:Tags src="XML/Tags.xml"/>
</Document>`;

const T=[]; for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;T[n]=c>>>0;}
const crc32 = u=>{let c=0xFFFFFFFF;for(let i=0;i<u.length;i++)c=T[(c^u[i])&255]^(c>>>8);return (c^0xFFFFFFFF)>>>0;};
const enc = new TextEncoder();
const order = ['mimetype','META-INF/container.xml','META-INF/metadata.xml','designmap.xml',
  'Resources/Graphic.xml','Resources/Fonts.xml','Resources/Styles.xml','Resources/Preferences.xml',
  ...Object.keys(files).filter(k=>k.startsWith('Spreads/')), ...Object.keys(files).filter(k=>k.startsWith('Stories/')),
  'XML/BackingStory.xml','XML/Tags.xml'];
const parts=[], cd=[]; let off=0;
for (const name of order) {
  const nb = enc.encode(name), data = enc.encode(files[name]), c = crc32(data);
  const lh = new DataView(new ArrayBuffer(30));
  lh.setUint32(0,0x04034b50,true); lh.setUint16(4,20,true); lh.setUint16(6,0,true); lh.setUint16(8,0,true);
  lh.setUint16(10,0,true); lh.setUint16(12,0x5721,true); lh.setUint32(14,c,true);
  lh.setUint32(18,data.length,true); lh.setUint32(22,data.length,true);
  lh.setUint16(26,nb.length,true); lh.setUint16(28,0,true);
  parts.push(new Uint8Array(lh.buffer), nb, data);
  const ch = new DataView(new ArrayBuffer(46));
  ch.setUint32(0,0x02014b50,true); ch.setUint16(4,20,true); ch.setUint16(6,20,true);
  ch.setUint16(10,0,true); ch.setUint16(12,0,true); ch.setUint16(14,0x5721,true); ch.setUint32(16,c,true);
  ch.setUint32(20,data.length,true); ch.setUint32(24,data.length,true);
  ch.setUint16(28,nb.length,true); ch.setUint32(42,off,true);
  cd.push(new Uint8Array(ch.buffer), nb);
  off += 30 + nb.length + data.length;
}
const cdBytes = cd.reduce((n,a)=>n+a.length,0);
const eo = new DataView(new ArrayBuffer(22));
eo.setUint32(0,0x06054b50,true); eo.setUint16(8,order.length,true); eo.setUint16(10,order.length,true);
eo.setUint32(12,cdBytes,true); eo.setUint32(16,off,true);
const blob = new Blob([...parts, ...cd, new Uint8Array(eo.buffer)], {type:'application/zip'});
await saveFile('idml/Hargrove-Ideal-Client-Profile-IDML-Package/Hargrove-Ideal-Client-Profile.idml', blob);
log('entries', order.length, 'stories', stories.length, 'colors', colors.size, 'size', blob.size);
