import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo">
            <Hexagon className="logo-icon" size={32} />
            <span>
              Cartagena<span style={{ color: 'var(--brand-600)' }}>Tech</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Unirse al Hub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-nav-link"
            style={{ backgroundColor: 'var(--brand-600)', color: 'white' }}
            onClick={() => setIsOpen(false)}
          >
            Unirse al Hub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;