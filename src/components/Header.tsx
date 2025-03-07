
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, MessageSquare, Menu, X } from 'lucide-react';
import SmoothScroll from './SmoothScroll';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Sobre mim', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contatos', href: '#contact' },
    { label: 'Meu TCC A.D.S', href: '#tcc' }
  ];

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-portfolio-dark/70 before:backdrop-blur-sm">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-portfolio-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">
                Kauan Lauer
              </a>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="nav-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-portfolio-purple hover:bg-white/10 transition-colors duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 bg-portfolio-dark/90 backdrop-blur-lg flex flex-col justify-center items-center z-40">
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-portfolio-purple transition-colors duration-300"
              >
                <span className="sr-only">Close menu</span>
                <X className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-2xl font-medium text-white hover:text-portfolio-purple transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-portfolio-purple/50 shadow-lg shadow-portfolio-purple/20">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
              alt="Kauan Lauer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">Kauan Lauer</h1>
        <h2 className="text-xl md:text-2xl mb-8 text-white/80">Desenvolvedor Front-end & Analista de Sistemas</h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a href="#about" className="btn-primary">
            Vamos começar
          </a>
          <a href="mailto:erickkauanlauer@gmail.com" className="btn-secondary">
            Contato
          </a>
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          <a 
            href="https://github.com/kauanlauer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-white" />
          </a>
          <a 
            href="https://linkedin.com/in/kauanlauer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=554199426605" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <MessageSquare className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
      
      <SmoothScroll targetId="about" />
    </header>
  );
};

export default Header;
