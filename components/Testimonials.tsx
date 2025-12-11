import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Lo que dicen nuestros fundadores
        </h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              <Quote className="quote-icon" />
              <p className="quote-text">"{t.quote}"</p>
              <div className="author-info">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name} 
                  className="author-avatar"
                />
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--slate-900)' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)' }}>{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;