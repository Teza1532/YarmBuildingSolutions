import { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full py-6 px-4 bg-slate-950/80 justify-center fixed top-0 left-0 z-50 shadow flex items-center">
      <Link to="/" className="text-2xl mr-32 font-bold text-brand-gold">Yarm Building Solutions</Link>
      <button
        className="md:hidden text-brand-gold text-3xl focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <ul className={`flex-col md:flex-row md:flex gap-6 text-slate-200 font-medium absolute md:static top-full left-0 w-full md:w-auto bg-slate-950/95 md:bg-transparent transition-all duration-300 ${open ? 'flex' : 'hidden'} md:items-center md:justify-center`}>
        <li><Link to="/local-builders" className="hover:text-brand-gold block py-3 px-4" onClick={() => setOpen(false)}>Local Builders</Link></li>
        <li><Link to="/extension-builders" className="hover:text-brand-gold block py-3 px-4" onClick={() => setOpen(false)}>Extension Builders</Link></li>
        <li><Link to="/architects-teesside" className="hover:text-brand-gold block py-3 px-4" onClick={() => setOpen(false)}>Architects Teesside</Link></li>
        <li><Link to="/gallery" className="hover:text-brand-gold block py-3 px-4" onClick={() => setOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact" className="hover:text-brand-gold block py-3 px-4" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav