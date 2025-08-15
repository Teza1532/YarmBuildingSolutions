import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Helmet } from 'react-helmet-async'
import Nav from './Nav'
import Hero from './Hero'
import Services from './Services'
import Areas from './Areas'
import Gallery from './Gallery'
import Contact from './Contact'
import LocalBuilders from './LocalBuilders'
import ExtensionBuilders from './ExtensionBuilders'
import ArchitectsTeesside from './ArchitectsTeesside'
import Footer from './Footer'

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Yarm Building Solutions",
                "url": "https://www.yarmbuildingsolutions.com/",
                "logo": "https://www.yarmbuildingsolutions.com/images/ybs-logo-1.png",
                "description": "Quality building work across Yarm & Teesside. Specialists in Extensions, Orangeries & Bi‑Fold installations.",
                "address": {
                  "@type": "PostalAddress",

                  "addressLocality": "Yarm",
                  "addressRegion": "Teesside",
                  "addressCountry": "UK"
                },
                "telephone": "+44 7795 320891",
                "image": [
                  "https://yoursite.com/images/twostoryexstension.jpg",
                  "https://yoursite.com/images/SinglestoreyExtension.jpg",
                  "https://yoursite.com/images/KitchenExtension.jpg"
                ],
                "areaServed": "Teesside",
                "openingHours": "Mo-Fr 08:00-18:00",
                "priceRange": "Varies"
              }
            `}
          </script>
        </Helmet>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Areas />
                    <Services />
                  </>
                }
              />
              <Route path="/local-builders" element={<LocalBuilders />} />
              <Route path="/extension-builders" element={<ExtensionBuilders />} />
              <Route path="/architects-teesside" element={<ArchitectsTeesside />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}
