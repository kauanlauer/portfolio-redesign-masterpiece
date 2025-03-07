
import React from 'react';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-container bg-gradient-to-b from-portfolio-dark to-portfolio-darkPurple/80">
      <div className="text-center animate-fade-in-up">
        <h2 className="section-title">Meus Projetos</h2>
        <p className="section-subtitle mx-auto">
          Confira alguns dos meus trabalhos recentes e em desenvolvimento
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Project 1 */}
        <div className="card group animate-fade-in-up">
          <div className="relative h-60 rounded-xl overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
              alt="Metálica Colombo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark to-transparent opacity-60"></div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-portfolio-light group-hover:text-portfolio-blue transition-colors duration-300">
            Metálica Colombo
          </h3>
          
          <p className="text-portfolio-light/70 mb-6">
            Desenvolvimento de uma solução web para gerenciamento de estoque e vendas para a empresa Metálica Colombo. O projeto incluiu interface responsiva, integração com banco de dados e automação de processos internos.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['HTML', 'CSS', 'JavaScript'].map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-3 py-1 rounded-full bg-portfolio-blue/10 text-portfolio-blue border border-portfolio-blue/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <a 
            href="https://metalica-colombo-kauanlauer.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-portfolio-blue hover:text-portfolio-purple transition-colors duration-300"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver projeto
            <ArrowRight className="h-4 w-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </div>
        
        {/* Project 2 */}
        <div className="card group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative h-60 rounded-xl overflow-hidden mb-6">
            <div className="w-full h-full flex items-center justify-center bg-portfolio-darkPurple/50">
              <Code className="h-16 w-16 text-portfolio-purple/50" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-md">
                <span className="text-white font-medium">Vídeo TCC disponível na seção abaixo</span>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-portfolio-light group-hover:text-portfolio-purple transition-colors duration-300">
            Meu TCC - Análise e Desenvolvimento de Sistemas
          </h3>
          
          <p className="text-portfolio-light/70 mb-6">
            Trabalho de Conclusão de Curso desenvolvido como parte da graduação em Análise e Desenvolvimento de Sistemas.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'].map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-3 py-1 rounded-full bg-portfolio-purple/10 text-portfolio-purple border border-portfolio-purple/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <a 
            href="#tcc" 
            className="inline-flex items-center text-portfolio-purple hover:text-portfolio-blue transition-colors duration-300"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver detalhes
            <ArrowRight className="h-4 w-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
