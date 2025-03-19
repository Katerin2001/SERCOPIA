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
        Encuentra, Analiza y Gana: Así de Simple <br />
        </h2>

        {/* Cards */}
        <div className="flex flex-row justify-between gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer w-1/3">
  <div className="flex flex-col items-center">
    <div className="bg-orange-500 rounded-full p-4 mb-4">
      {/* Asegúrate de importar el componente Bot */}
      <Bot className="w-8 h-8 text-white" />
    </div>
    <div className="text-center">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Administrar Agentes</h3>
      <p className="text-sm flex  text-gray-600 leading-relaxed text-justify">
  Asistentes virtuales que entienden tu negocio como tú mismo.  
  Crea agentes personalizados que se convierten en extensiones de tu experiencia profesional. Cada agente aprende exactamente a qué te dedicas, analiza miles de documentos y encuentra solo las oportunidades que realmente encajan con tus capacidades.  
  A diferencia de búsquedas genéricas, tus agentes conocen tus fortalezas específicas, eliminando las falsas oportunidades y destacando contratos donde tu propuesta tendría ventaja. Crea múltiples agentes especializados para cada área de tu negocio y multiplica tus posibilidades de éxito.  
  "Como tener a tu mejor analista trabajando 24/7, sin descansos ni distracciones."
</p>

    </div>
  </div>
</div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer w-1/3">
      <div className="flex flex-col items-center">
        <div className="bg-orange-500 rounded-full p-4 mb-4">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Administrar informes</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">De datos dispersos a decisiones estratégicas en minutos
Transforma el caos de información del SERCOP en informes claros, estructurados y accionables. En solo 3-5 minutos, obtén un análisis completo que normalmente tomaría horas o días.
Cada informe identifica procesos relevantes, extrae requisitos clave, analiza documentación completa y te señala exactamente dónde tienes mayor probabilidad de adjudicación. Con datos exportables a Excel y la capacidad de interrogar cualquier documento mediante IA, tus decisiones serán más rápidas, informadas y precisas.
"Lo que antes te tomaba un día completo, ahora lo tienes antes de terminar tu café de la mañana."</p>
        </div>
      </div>
    </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer w-1/3">
      <div className="flex flex-col items-center">
        <div className="bg-orange-500 rounded-full p-4 mb-4">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">IA especialista en compras publicas</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">Tu experto legal disponible 24/7, sin honorarios por consulta
Olvídate de interpretaciones ambiguas o búsquedas interminables en la legislación. Nuestro asistente de IA especializado en compras públicas responde instantáneamente cualquier duda sobre normativas, procesos o requisitos.
Actualizado constantemente con las últimas reformas legales, te ofrece respuestas precisas, contextualizadas y aplicables a tu situación específica. Desde consultas básicas hasta casos complejos, obtén claridad inmediata sin necesidad de asesoría legal adicional.
"Como tener un abogado especializado en tu bolsillo, disponible en cualquier momento y sin costo por hora.".</p>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 