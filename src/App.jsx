import Cards from "./components/Cards"
export default function App() {
  const features = [
    {
        title: "Instant Server Start",
        description: "On demand file serving over native ESM, no bundling required!",
        icon: "⚡️"
    },
    {
        title: "Lightning Fast HMR",
        description: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
        icon: "⚡️"
    },
    {
        title: "Rich Features",
        description: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
        icon: "🛠️"
    },
    {
        title: "Optimized Build",
        description: "Pre-configured Rollup build with multi-page and library mode support.",
        icon: "📦"
    },
    {
        title: "Universal Plugins",
        description: "Rollup-superset plugin interface shared between dev and build.",
        icon: "🔩"
    },
    {
        title: "Fully Typed APIs",
        description: "Flexible programmatic APIs with full TypeScript typing.",
        icon: "🔑"
    }
];

  return(
    <>
    <div className="hero">
      <div className="hero-info">
        <h1 >
          <span className="degradate">  
          Vite
          </span>
          </h1>
          <p className="text">Next Generation Frontend Tooling</p>
          <p className="tagline">Get ready for a development environment that can finally catch up with you.</p>
          <div class="actions">
            <div class="action">
                <a class="VPButton medium brand" href="/guide/">Get Started</a>
            </div>
            <div class="action">
                <a class="VPButton medium alt" href="/guide/why">Why Vite?</a>
            </div>
            <div class="action">
                <a class="VPButton medium alt" href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
            <div class="action">
                <a class="VPButton medium brand" href="https://viteconf.org/23/replay?utm=vite-homepage" target="_blank" rel="noreferrer">🎉 ViteConf 23!</a>
            </div>
        </div>
      </div>
      <div className="logo">
        <img src="https://vitejs.dev/logo-with-shadow.png" alt="" />
        

      </div>
    </div>
    <div className="cards-container hero">
      {
        features.map((features)=>{
          return (<Cards key={`service-${features.title}`}  icon={features.icon} title={features.title} description={features.description} />)
        })
      }
      
    </div>
    </>
  )
}
