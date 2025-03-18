'use client';

import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../layout.config';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      {children}
    </HomeLayout>
  );
} 