
import React from 'react';
import { FileDown } from 'lucide-react';

const TCC: React.FC = () => {
  return (
    <section id="tcc" className="section-container bg-portfolio-dark">
      <div className="text-center animate-fade-in-up">
        <h2 className="section-title">Meu TCC</h2>
        <p className="section-subtitle mx-auto">
          Confira o pré-projeto do meu Trabalho de Conclusão de Curso em Análise e Desenvolvimento de Sistemas
        </p>
      </div>
      
      <div className="glass p-8 mt-8 animate-fade-in-up">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-portfolio-light">Vídeo de apresentação</h3>
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden bg-portfolio-darkPurple/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-portfolio-light/60 block mb-4">
                  Substitua com o player de vídeo "tcc.webm"
                </span>
                <div className="inline-block bg-portfolio-purple/20 text-portfolio-purple px-4 py-2 rounded-md border border-portfolio-purple/30">
                  Video Player
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-portfolio-light">Documentação do Projeto</h3>
          <div className="relative w-full h-[800px] rounded-lg overflow-hidden bg-white/5">
            <iframe 
              src="about:blank" 
              className="w-full h-full" 
              title="Pre-projeto TCC"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-portfolio-light/60 block mb-4">
                  Substitua com o iframe do arquivo "preprojeto_tcc.pdf"
                </span>
                <div className="inline-block bg-portfolio-blue/20 text-portfolio-blue px-4 py-2 rounded-md border border-portfolio-blue/30">
                  PDF Preview
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <a 
              href="preprojeto_tcc.pdf" 
              download="PreProjeto_TCC_Kauan_Lauer.pdf" 
              className="btn-primary flex items-center"
            >
              <FileDown className="h-5 w-5 mr-2" />
              Baixar PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TCC;
