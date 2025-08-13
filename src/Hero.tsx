import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url('/images/hero-kitchen.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Helmet>
        <title>Yarm Building Solutions | Extensions, Kitchens, Bathrooms & More</title>
        <meta name="description" content="Quality building work across Yarm & Teesside. Specialists in Extensions, Kitchens, Bathrooms, Orangeries & Bi‑Fold installations." />
        <meta name="keywords" content="Yarm, building, extensions, kitchens, bathrooms, orangeries, bi-fold, Teesside, renovations" />
      </Helmet>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(231,195,106,0.15),rgba(0,0,0,0.6))]"></div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow">
            Quality building work across <span className="text-brand-gold">Yarm</span> & Teesside
          </h1>
          <p className="mt-5 text-slate-300 text-lg drop-shadow">
            Specialists in <span className="text-brand-gold">Extensions</span>, Kitchens, Bathrooms, Orangeries & Bi‑Fold installations.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/contact" className="bg-brand-gold text-slate-900 rounded-full px-6 py-3 font-semibold shadow-soft">Get a quote</Link>
            <Link to="/gallery" className="rounded-full px-6 py-3 border border-white/20 hover:border-brand-gold text-white">See our work</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero