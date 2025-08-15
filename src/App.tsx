import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
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
