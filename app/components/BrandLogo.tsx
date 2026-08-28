export default function BrandLogo({ variant="horizontal", label=true }: { variant?: "horizontal"|"stacked"|"mark"; label?: boolean }){
  const mark=<g className="brand-mark">
    <path className="mark-stroke mark-main" d="M8 10 28 66 56 14 84 66 104 10"/>
    <path className="mark-stroke mark-curve" d="M28 66c4 14 14 22 28 22s24-8 28-22"/>
  </g>;
  if(variant==="mark") return <svg className="brand-svg brand-svg-mark" viewBox="0 0 112 94" role="img" aria-label={label?"Wavora":undefined}>{mark}</svg>;
  if(variant==="stacked") return <svg className="brand-svg brand-svg-stacked" viewBox="0 0 250 205" role="img" aria-label={label?"Wavora":undefined}><g transform="translate(69 6)">{mark}</g><text className="brand-word" x="125" y="182" textAnchor="middle">Wavora</text></svg>;
  return <svg className="brand-svg brand-svg-horizontal" viewBox="0 0 300 82" role="img" aria-label={label?"Wavora":undefined}><g transform="translate(2 3) scale(.78)">{mark}</g><text className="brand-word" x="104" y="57">Wavora</text></svg>;
}
