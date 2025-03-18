'use client';

const PricingSection = () => {
  return (
    <div id="PricingSection" className="relative w-full py-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, rgba(255, 237, 213, 0.8), rgba(219, 234, 254, 0.8))'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Precios y Planes
        </h2>
        <div className="text-center text-black mb-16">
          <p className="text-justify">
            Todos los planes están sujetos a IVA si el pago se realiza mediante transferencia bancaria.
            Si eliges pagar con tarjeta de crédito o débito con débitos automáticos mensuales, el valor será sin IVA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Básico */}
          <div className="bg-white rounded-xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-center flex flex-col mb-8 justify-items-center">
              <h3 className="text-2xl font-semibold text-gray-700">Plan Básico</h3>
              <div className="mt-4 flex flex-row items-end gap-1 w-full justify-center">
                <div className="text-4xl font-regular text-orange-500">
                  <p>$20+IVA</p>
                </div>
                <div>
                  <span className="block text-base font-normal text-black">/mes</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">IA Compras 20</span>
              </div>
              <div className="flex items-center space-x-2 pb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">15 Informes</span>
              </div>
              <div className="flex items-center space-x-2 pb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">5 Consultas de documentos</span>
              </div>
            </div>
          </div>
          {/* Plan Premium */}
          <div className="bg-white rounded-xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-stale-700">PLAN PREMIUM</h3>
              <div className="mt-4 flex flex-row items-end gap-1 w-full justify-center">
                <div className="text-4xl font-regular text-orange-500">
                  <p>$40+IVA</p>
                </div>
                <div>
                  <span className="block text-base font-normal text-black">/mes</span>
                </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">IA Compras Ilimitada</span>
                </div>
                <div className="flex items-center space-x-2 pb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">100 Informes</span>
                </div>
                <div className="flex items-center space-x-2 pb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">50 Consultas de documentos</span>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/5930987963164?text=Quiero%20contratar%20Sercopia"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit mx-auto mt-8 px-35 py-4 bg-orange-500 text-white text-lg font-semibold text-center rounded-lg hover:animate-pulse hover:scale-110 hover:shadow-lg transition-all duration-300"
          >
            Empezar
          </a>
        </div>
      </div>

      );
};

      export default PricingSection;