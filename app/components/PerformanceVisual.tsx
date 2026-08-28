export default function PerformanceVisual(){return <div className="performance-canvas current-terminal" aria-label="Visualisation d’un flux opérationnel Wavora qui relie quatre expertises">
  <div className="canvas-header"><span>Courant opérationnel · 01</span><span className="canvas-status"><i/>Synchronisé</span></div>
  <div className="current-stage">
    <svg className="current-orb" viewBox="0 0 520 360" aria-hidden="true">
      <defs>
        <linearGradient id="wavora-current-a" x1="40" y1="250" x2="480" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41c7ae"/><stop offset=".54" stopColor="#9cddd1"/><stop offset="1" stopColor="#5876e8"/>
        </linearGradient>
        <linearGradient id="wavora-current-b" x1="70" y1="110" x2="455" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e8b744"/><stop offset=".52" stopColor="#ffb5a8"/><stop offset="1" stopColor="#ff775f"/>
        </linearGradient>
        <radialGradient id="wavora-depth" cx="50%" cy="46%" r="54%">
          <stop offset="0" stopColor="#41c7ae" stopOpacity=".14"/><stop offset=".58" stopColor="#5876e8" stopOpacity=".06"/><stop offset="1" stopColor="#061c25" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <ellipse className="current-depth" cx="260" cy="180" rx="208" ry="147" fill="url(#wavora-depth)"/>
      <g className="current-rings"><ellipse cx="260" cy="180" rx="202" ry="142"/><ellipse cx="260" cy="180" rx="152" ry="105"/><ellipse cx="260" cy="180" rx="92" ry="62"/><path d="M260 38c-52 35-78 82-78 142s26 107 78 142M260 38c52 35 78 82 78 142s-26 107-78 142"/></g>
      <path className="orb-stream orb-stream-a" d="M49 220C108 104 178 290 258 170s145 42 218-64"/>
      <path className="orb-stream orb-stream-b" d="M66 110c78 126 144-53 216 70s124-56 178 70"/>
      <g className="orb-particles">
        <circle cx="76" cy="207" r="3"/><circle cx="111" cy="169" r="2"/><circle cx="150" cy="184" r="4"/><circle cx="194" cy="210" r="2"/><circle cx="231" cy="194" r="3"/><circle cx="281" cy="142" r="4"/><circle cx="320" cy="139" r="2"/><circle cx="359" cy="162" r="3"/><circle cx="402" cy="170" r="2"/><circle cx="448" cy="130" r="4"/>
      </g>
      <g className="orb-service-nodes"><circle className="node-compta" cx="76" cy="207" r="7"/><circle className="node-auto" cx="281" cy="142" r="7"/><circle className="node-strategie" cx="402" cy="170" r="7"/><circle className="node-formation" cx="460" cy="250" r="7"/></g>
    </svg>
    <div className="orb-core"><small>Opérations reliées</small><strong>1 flux</strong><span>4 leviers actifs</span></div>
    <div className="current-legend" aria-hidden="true"><span><i className="dot-compta"/>Compta</span><span><i className="dot-auto"/>Automatisation</span><span><i className="dot-strategie"/>Stratégie</span><span><i className="dot-formation"/>Formation</span></div>
  </div>
  <div className="canvas-metrics"><div><strong>↓</strong><span>Friction</span></div><div><strong>↑</strong><span>Temps utile</span></div><div><strong>≈</strong><span>Flux continu</span></div></div>
</div>}
