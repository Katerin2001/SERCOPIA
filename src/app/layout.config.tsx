import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
      </>
    ),
  },
  links: [
    {
      text: 'Inicio',
      url: '/#hero',
      active: 'nested-url',
    },
    {
      text: 'Precio',
      url: '/#PricingSection',
      active: 'nested-url',
    },
    {
      text: 'Sobre Nosotros',
      url: '/about',
      active: 'nested-url',
    },
    {
      text: 'Manual',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};

