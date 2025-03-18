'use client';
import { Bot, Brain,FileText} from 'lucide-react';

// Resto de tu componente...
const FeaturesSection = () => {
  return (
    <div className="w-full relative pt-8 pb-20">
      {/* Fondo con gradiente suave */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: 'linear-gradient(to right, rgba(255, 237, 213, 0.8), rgba(219, 234, 254, 0.8))'
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Mil herramientas, un solo objetivo: <br />
          <span className="text-orange-600">tu éxito como proveedor</span>
        </h2>

        {/* Cards */}
        <div className=" justify-center flex flex-wrap md:grid-cols-3 gap-8 ">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer w-72">
  <div className="flex flex-col items-center">
    <div className="bg-orange-500 rounded-full p-4 mb-4">
      {/* Asegúrate de importar el componente Bot */}
      <Bot className="w-8 h-8 text-white" />
    </div>
    <div className="text-center">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Administrar Agentes</h3>
      <p className="text-sm text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer w-72">
      <div className="flex flex-col items-center">
        <div className="bg-orange-500 rounded-full p-4 mb-4">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Administrar informes</h3>
          <p className="text-sm text-gray-600 leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer w-72">
      <div className="flex flex-col items-center">
        <div className="bg-orange-500 rounded-full p-4 mb-4">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">IA especialista en compras publicas</h3>
          <p className="text-sm text-gray-600 leading-relaxed">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 