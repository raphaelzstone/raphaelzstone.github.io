import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raphael Stone — Computational Materials Researcher',
  description: 'Raphael Stone is a computational materials science researcher, engineer, and builder.',
  openGraph: { title: 'Raphael Stone — Computational Materials Researcher', description: 'Research, engineering, and selected projects.' },
  twitter: { card: 'summary', title: 'Raphael Stone — Computational Materials Researcher', description: 'Research, engineering, and selected projects.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
