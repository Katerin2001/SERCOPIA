'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-[6px] flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente suave y panel de cuadros */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.5)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.5)_2px,transparent_2px)] bg-[size:20px_20px] [background-position:center]" />

      <video
        className="absolute inset-0 z-0 object-cover w-full h-full opacity-25"
        src="/bg3.mp4"
        autoPlay
        loop
        muted
      />

      {/* Contenido principal */}
      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          {/* Contenido del lado izquierdo */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-center">
            <div className="relative w-[150px] h-[150px] self-center -ml-8">
              <Image
                src="/logo2.png"
                alt="Sercopia Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="object-center"
              />
            </div>
            <div className="flex flex-col items-start gap-4 mt-8">
              <p className="text-2xl text-orange-500 leading-snug text-left font-bold">
                CADA MINUTO QUE PIERDES BUSCANDO, ES DINERO QUE NO ESTÁS GANANDO
              </p>
              <p className="text-sm text-gray-950">
                Los proveedores que usan SERCOPIA están capturando contratos públicos por miles de dólares mientras tú sigues revisando documentos manualmente.
                Automatiza, gana tiempo y multiplica tus ingresos desde hoy.
              </p>
            </div>
            <div>
  <a
    href="https://app.sercopia.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-transparent text-black px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold text-lg border-2 border-orange-500 hover:shadow-lg hover:shadow-orange-200 transform hover:scale-105 active:scale-95"
  >
    Ingresar
  </a>
</div>
          </div>
          

          {/* Logo del lado derecho */}
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <div className="relative w-[600px] h-[600px] -ml-32">
              <Image
                src="/img2.png"
                alt="Sercopia Logo"
                fill
                style={{ objectFit: 'contain', transform: 'scale(1.7)' }}
                priority
                className="object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;