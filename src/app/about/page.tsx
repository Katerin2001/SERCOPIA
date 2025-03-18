'use client';

import Image from 'next/image';
import MissionCard from '@/components/MissionCard';
import DirectiveTeam from '@/components/DirectiveTeam';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-black">
          Fonles Studios Corp
        </h1>
        <p className="text-base sm:text-lg text-black text-justify mb-8 lg:mb-12">
          En Fonles Studios Corp. somos pioneros en innovación tecnológica, dedicados a democratizar la información y a crear soluciones impulsadas por Inteligencia Artificial de vanguardia. 
          Como una empresa ecuatoriana - estadunidense, nuestro enfoque es transformar industrias, 
          comenzando por el ámbito legal a través de Fonles LegalTech, una plataforma que empodera 
          a los profesionales legales con herramientas de IA, acceso a recursos legales y asistencia 
          especializada.
        </p>
        <div className="w-full rounded-2xl overflow-hidden shadow-xl mb-16 relative aspect-[16/9]">
          <Image 
            src="https://www.fonleslegaltech.com/es/team.webp"
            alt="Equipo Fonles"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <MissionCard />
        <DirectiveTeam />
        
      </div>
      <Footer/>
    </div>
  );
}