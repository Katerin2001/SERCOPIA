'use client';

const MissionCard = () => {
  return (
    <div className="w-full border-1 border-black rounded-xl p-8 bg-white/90 backdrop-blur-sm shadow-xl mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Nuestra Misión
      </h2>
      
      <div className="space-y-4 text-lg text-gray-800 leading-relaxed flex">
        <p className="text-black text-base">
          En Fonles Studios Corp., nuestra misión es transformar el acceso y el uso de la información 
          en herramientas que potencien el crecimiento personal y profesional. Creemos en un mundo 
          donde el conocimiento es un derecho universal, no un privilegio, y trabajamos incansablemente 
          para eliminar las barreras que limitan su alcance. Nos enfocamos en desarrollar soluciones 
          tecnológicas avanzadas que no solo faciliten el trabajo de los profesionales, sino que también 
          generen un impacto positivo en las comunidades al democratizar el acceso a recursos esenciales.
          Innovamos con propósito, integrando la inteligencia artificial como un medio para cerrar 
          brechas, impulsar la productividad y fomentar el desarrollo inclusivo en todos los sectores.
        </p>
      </div>
    </div>
  );
};

export default MissionCard; 