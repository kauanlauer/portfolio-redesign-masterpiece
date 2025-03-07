
import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'erickkauanlauer@gmail.com',
      href: 'mailto:erickkauanlauer@gmail.com'
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      value: 'github.com/kauanlauer',
      href: 'https://github.com/kauanlauer'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kauanlauer',
      href: 'https://linkedin.com/in/kauanlauer'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      label: 'WhatsApp',
      value: '+55 (41) 99426-6605',
      href: 'https://api.whatsapp.com/send?phone=554199426605'
    }
  ];

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-portfolio-darkPurple/80 to-portfolio-dark relative overflow-hidden">
      <div className="text-center animate-fade-in-up">
        <h2 className="section-title">Contatos</h2>
        <p className="section-subtitle mx-auto">
          Entre em contato para oportunidades de trabalho, parcerias ou para conversar sobre tecnologia
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactItems.map((item, index) => (
          <a 
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-center p-6 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-gradient-to-br from-portfolio-blue to-portfolio-purple p-4 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
              {React.cloneElement(item.icon, { className: 'h-6 w-6 text-white' })}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-portfolio-light">{item.label}</h3>
              <p className="text-portfolio-light/70">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <p className="text-portfolio-light/50 text-sm">© 2024 Kauan Lauer. Todos os direitos reservados.</p>
      </div>
      
      {/* Background decoration elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-portfolio-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-portfolio-purple/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Contact;
