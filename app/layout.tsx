import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raphael Zstone — Thoughtful things for the web',
  description: 'The personal site of Raphael Zstone: projects, games, experiments, and notes.',
  openGraph: { title: 'Raphael Zstone — Thoughtful things for the web', description: 'Projects, games, experiments, and notes.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Raphael Zstone — Thoughtful things for the web', description: 'Projects, games, experiments, and notes.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
