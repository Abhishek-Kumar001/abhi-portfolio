import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold gradient-text hover:opacity-80">
            AK.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-blue-400 animated-line text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="gradient-btn px-6 py-2 rounded-lg text-white font-medium text-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-1 w-6 bg-slate-300 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-1 w-6 bg-slate-300 rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-1 w-6 bg-slate-300 rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slideInUp">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block gradient-btn px-6 py-2 rounded-lg text-white font-medium text-sm text-center"
            >
              Let's Talk
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
