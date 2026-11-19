import { useState } from 'react'
import { NavBarButton } from '../ui/Button'
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Progetti', href: '#projects' },
    { name: 'Contatti', href: '#contact' },
  ]

  const HandleClick = (event, target) =>{
    const smoother = ScrollSmoother.get();
    if(!smoother) return;

    event.preventDefault();
    smoother.scrollTo(target, true);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20 grid grid-cols-[1fr_auto_1fr] items-center h-19 p-[0_clamp(24px,4.2vw,72px)] bg-white border-b border-b-black" data-lag="0">
      <div>  
        
        {/* LOGO / NOME */}
        <a href="#" className="w-fit text-[17px] font-bold tracking-[-0.06em]">
          LIUCH 
        </a>
      </div>
        {/* LINK DESKTOP */}
        <nav className="hidden md:flex items-center gap-6.75 text-[12px] font-medium">
          <span className='text-(--muted) text-[10px] tracking-[0.12em]'>00</span>
          <span className='w-9.5 h-px -ml-4 bg-(--line)' />
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black transition relative 
              after:absolute after:right-0 after:-bottom-1.75 after:left-0 after:h-px after:bg-(--current-color) after:scale-x-0 after:origin-right after:transition-transform after:duration-180 after:ease-[ease]
              hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
              onClick={(event) => HandleClick(event, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>
          
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
    </header>
  )
}