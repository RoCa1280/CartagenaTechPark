import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
  }
}

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Mailchimp integration
    console.log(`Sending email to mailchimp: ${email}`);
    // Simulate Analytics event
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        'event_category': 'form',
        'event_label': 'newsletter_signup'
      });
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#0ea5e9" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">Conecta con el Futuro</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Estamos buscando la próxima generación de unicornios. Agenda una visita guiada o suscríbete para recibir noticias de nuestros eventos y convocatorias.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Ubicación</h4>
                  <p className="text-slate-400">Anillo Vial Km 12, Zona Norte<br />Cartagena de Indias, Colombia</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-brand-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-slate-400">hola@cartagenatech.co</p>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <div className="bg-[#5865F2] p-1 rounded-md mt-1">
                    {/* Discord Mock Icon */}
                     <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Comunidad</h4>
                  <p className="text-slate-400">Únete a nuestro servidor de Discord</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-4">Mantente Informado</h3>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="tu@startup.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center space-x-2 bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  <Send className="h-4 w-4" />
                  <span>Suscribirse al Newsletter</span>
                </button>
                <p className="text-xs text-slate-500 mt-4 text-center">
                  Al suscribirte aceptas nuestros términos de uso y política de privacidad.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 text-green-500 mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">¡Gracias por suscribirte!</h4>
                <p className="text-slate-400">Pronto recibirás noticias nuestras.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-400 hover:text-brand-300 text-sm font-medium"
                >
                  Volver al formulario
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;