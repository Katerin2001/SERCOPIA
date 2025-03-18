'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaMapMarkerAlt, FaEnvelope, FaHeadset } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sección principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Misión */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-black mb-4">
            Eficiencia y transparencia para ventas  inteligentes
            </h3>
            <p className="text-black leading-relaxed">
            Optimiza los procesos de adquisición, facilita la identificación de las mejores ofertas y garantiza la transparencia en cada compra, asegurando eficiencia y cumplimiento en cada etapa del proceso.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Ecuador - Perú - USA</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <a href="mailto:info@fonlescompany.com" className="text-black">
                  info@fonlescompany.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaHeadset className="text-orange-500" />
                <a href="tel:+593 98 796 3164" className="text-black">
                +593 98 796 3164
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces de Compañía */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4 font-bold">Compañía</h3>
            <ul className="space-y-2">
          
              <li>
                <Link href="/about" className="text-black">
                  Acerca de Fonles
                </Link>
              </li>
              <h3 className="text-lg font-semibold text-black mb-4 font-bold">Legal</h3>
              <li>
                <Link href="/terms" className="text-black">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-black">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces de Soporte */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4 font-bold">Soporte</h3>
            <ul className="space-y-2">
            
        
              <li>
                <Link href="/docs" className="text-black">
                  Documentación
                </Link>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2025 Fonles Studios, Corp. Todos los derechos reservados.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-6">
              <a 
                href="https://www.facebook.com/fonlesec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaFacebookF size={20} />
              </a>
              <a 
                href="https://www.instagram.com/fonles_ec?igsh=c2NvY3I0d3d3djVj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@fonleslegaltech?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;