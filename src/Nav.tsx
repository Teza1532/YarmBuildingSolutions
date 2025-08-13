import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="w-full py-6 px-4 flex justify-center items-center bg-slate-950/80 fixed top-0 left-0 z-50 shadow">
      <Link to="/" className="text-2xl font-bold text-brand-gold mr-10">Yarm Building Solutions</Link>
      <ul className="flex gap-6 text-slate-200 font-medium">
        <li><Link to="/local-builders" className="hover:text-brand-gold">Local Builders</Link></li>
        <li><Link to="/extension-builders" className="hover:text-brand-gold">Extension Builders</Link></li>
        <li><Link to="/architects-teesside" className="hover:text-brand-gold">Architects Teesside</Link></li>
        <li><Link to="/gallery" className="hover:text-brand-gold">Gallery</Link></li>
        <li><Link to="/contact" className="hover:text-brand-gold">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav