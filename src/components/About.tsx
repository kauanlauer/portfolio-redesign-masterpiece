
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'HTML5',
    'CSS',
    'JavaScript',
    'Desenvolvimento Web',
    'VBA Excel',
    'PHP'
  ];

  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <h2 className="section-title">Sobre Mim</h2>
            <p className="section-subtitle">
              Conheça um pouco mais sobre minha trajetória e experiências profissionais
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-portfolio-blue">
            Nome completo: Erick Kauan dos Santos Pereira Lauer
          </h3>
          
          <div className="space-y-4 text-portfolio-light/80">
            <p>
              Olá! Sou apaixonado pelo mundo da tecnologia e desenvolvimento. Nascido em 24 de agosto de 1998, em Curitiba – PR, onde atualmente resido e construo minha carreira.
            </p>
            <p>
              Como estudante de Análise e Desenvolvimento de Sistemas pela UniEnsino – Centro Universitário do Paraná, tenho me dedicado a aprimorar minhas habilidades técnicas e conhecimentos na área.
            </p>
            <p>
              Minha paixão pela tecnologia começou na adolescência e se fortaleceu ao longo da minha jornada acadêmica, onde desenvolvi habilidades em lógica de programação, algoritmos e diversas linguagens como HTML, CSS, JavaScript, C e Java.
            </p>
            <p>
              Encontrei minha realização profissional no desenvolvimento web e na programação em VBA do Excel, onde pude criar planilhas totalmente sistematizadas. Atualmente, estou focado em aperfeiçoar meu inglês e agregar valor ao meu trabalho, com o objetivo futuro de encontrar oportunidades no exterior.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-blue">
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 text-portfolio-light/80"
                >
                  <CheckCircle className="h-5 w-5 text-portfolio-purple" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl shadow-portfolio-purple/20 border border-white/10 animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Kauan Lauer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-portfolio-blue/30 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-portfolio-purple/30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
