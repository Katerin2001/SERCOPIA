'use client';

import Image from 'next/image';

const DirectiveTeam = () => {
  const teamMembers = [
    {
      name: "Matias Fonseca",
      position: "Director Ejecutivo (CEO)", 
      image: "https://www.fonleslegaltech.com/es/matias.webp",
      description: "Ingeniero en Software, emprendedor visionario y fundador de Fonles Studios Corp., Matías lidera la empresa con un compromiso inquebrantable. Como Senior Developer y defensor de la democratización de la información, asegura que Fonles se mantenga a la vanguardia de los avances tecnológicos."
    },
    {
      name: "Dario Fonseca",
      position: "Gerente General FONLES CIA. LTDA. & Director de Operaciones (COO)",
      image: "https://www.fonleslegaltech.com/es/dario.webp", 
      description: "Doctor en jurisprudencia, abogado, árbitro y magíster en derecho procesal. Con un enfoque en la excelencia operativa, Darío supervisa las funciones de la empresa, asegurando la implementación eficaz de estrategias y la optimización de procesos para el éxito."
    },
    {
      name: "Enrique Chavarri",
      position: "Director de Estrategia (CSO)",
      image: "https://www.fonleslegaltech.com/es/enrique.webp",
      description: "Ingeniero y fuerza impulsora detrás de las iniciativas estratégicas de Fonles, Enrique utiliza su experiencia para expandir el alcance de la empresa y consolidar su posición como líder en soluciones impulsadas por IA."
    },
    {
      name: "Viviana Lescano",
      position: "Directora Académica",
      image: "https://www.fonleslegaltech.com//es/viviana.webp",
      description: "Doctora en jurisprudencia, Abogada, docente universitaria y magíster en Métodos Alternativos de Resolución de Conflictos. Viviana lidera la parte académica en Fonles Studios Corp., aportando su experiencia para desarrollar iniciativas que fortalezcan el conocimiento y la formación profesional en el ámbito legal y tecnológico."
    }
  ];

  return (
    <div className="w-full mt-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Nuestro Equipo Directivo
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="border border-black rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center bg-white transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            <div className="w-32 h-90 sm:w-40 sm:h-70 relative flex-shrink-0 overflow-hidden rounded-xl border-1 border-gray-200">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              ) : (
                <div className="w-full h-full rounded-xl bg-gradient-to-r from-orange-200 to-blue-200 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-700">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <h4 className="text-orange-600 font-semibold text-sm">{member.position}</h4>
              <p className="mt-3 text-black text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectiveTeam;