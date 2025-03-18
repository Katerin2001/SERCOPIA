'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 z-0" 
       
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-800">
          Política de Privacidad
        </h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 leading-relaxed">
              En Sercopia, recopilamos información necesaria para proporcionar nuestros servicios. 
              Esto incluye información de registro como nombre, correo electrónico, información de 
              contacto y detalles de la empresa. También podemos recopilar información sobre cómo 
              utiliza nuestros servicios para mejorar su experiencia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Uso de la Información</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Personalizar su experiencia</li>
              <li>Procesar sus transacciones</li>
              <li>Enviar comunicaciones importantes sobre el servicio</li>
              <li>Mejorar nuestros servicios y desarrollar nuevas características</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Protección de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información 
              personal. Esto incluye encriptación de datos, firewalls, y procedimientos de seguridad 
              física en nuestras instalaciones. Sin embargo, ningún método de transmisión por Internet 
              es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Compartir Información</h2>
            <p className="text-gray-700 leading-relaxed">
              No vendemos ni alquilamos su información personal a terceros. Podemos compartir su 
              información con proveedores de servicios que nos ayudan a operar nuestro negocio, 
              siempre bajo estrictos acuerdos de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Sus Derechos</h2>
            <p className="text-gray-700 leading-relaxed">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>Acceder a su información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Recibir una copia de sus datos en formato electrónico</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el 
              tráfico y personalizar el contenido. Puede controlar el uso de cookies a través de 
              la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cambios en la Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos 
              cualquier cambio significativo a través de nuestro sitio web o por correo electrónico.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Última actualización: Marzo 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 