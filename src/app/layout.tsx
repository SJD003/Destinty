import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'DESTINTY - نظام البوابات',
  description: 'منصة إدارة البوابات واللجان والمنظمات - بوابة النور، البوابات المغلقة، والمجهول',
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar/>
        <main className="max-w-7xl mx-auto px-6 py-8 min-h-[70vh]">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
