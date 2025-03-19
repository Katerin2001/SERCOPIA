'use client';

import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana María Suárez", // Corregido acentos
      position: "Gerente General", // Agregado cargo
      company: "Insumos Médicos", // Corregido acento
      testimonial: "Sercopia ha revolucionado la manera en que manejamos nuestras contrataciones públicas. La plataforma es intuitiva y nos ha ayudado a optimizar nuestros procesos significativamente.",
      image: "/ana.jpg"
    },
    {
      name: "Erika Sánchez", // Corregido ortografía del nombre
      position: "Directora de Operaciones",
      company: "Servicios Externos", // Corregido ortografía
      testimonial: "La inteligencia artificial de Sercopia nos ha permitido identificar oportunidades que antes pasábamos por alto. Es una herramienta indispensable para cualquier proveedor del estado.",
      image: "/eri.jpg"
    },
    {
      name: "Katerin Cecén", // Corregido ortografía del nombre y acento
      position: "CEO",
      company: "Servicios Tecnológicos",
      testimonial: "Desde que empezamos a usar Sercopia, nuestra participación en licitaciones públicas ha aumentado un 60%. La plataforma nos ha dado una ventaja competitiva invaluable.",
      image: "/kate.jpg"
    }
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Testimonios
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Historias de éxito de quienes confían en nosotros
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1440px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 flex flex-col justify-between"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
              <div className="text-center flex items-center justify-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  <p className="text-orange-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;