import { useState } from 'react'
import { NavBarButton } from '../ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Progetti', href: '#projects' },
    { name: 'Contatti', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md border-b border-slate-800/80 z-40" data-lag="0">
      <div className="w-full mx-auto px-6 h-16 flex items-center">
        
        {/* LOGO / NOME */}
        <a href="#" className="font-mono font-bold hover:text-cyan-400 transition text-xl justify-self-start flex-1 text-black">
          LIUCH 
        </a>

        {/* LINK DESKTOP */}
        <div className="hidden md:flex items-center gap-8 flex-2 justify-center text-black">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
          
          
        </div>
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          
          <NavBarButton reference={"#contact"} contenuto={"Scrivimi"} />
        </div>
        {/* BOTTONE HAMBURGER MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENU DROPDOWN MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-cyan-400 font-medium transition py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-center px-4 py-2 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition mt-2"
          >
            Lavoriamo insieme
          </a>
        </div>
      )}
    </nav>
  )
}