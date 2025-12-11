import React from 'react';
import { Hexagon, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <Hexagon size={24} color="var(--brand-600)" fill="var(--brand-900)" />
            <span style={{ color: 'var(--slate-200)', fontSize: '1.125rem' }}>
              Cartagena<span style={{ color: 'var(--brand-600)' }}>Tech</span>
            </span>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
          </div>

          <div style={{ fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Parque Tecnológico Cartagena.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;