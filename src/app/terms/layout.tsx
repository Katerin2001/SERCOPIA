'use client';

import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../layout.config';
import Footer from '@/components/Footer';

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HomeLayout {...baseOptions}>
        {children}
      </HomeLayout>
      <Footer />
    </>
  );
} 