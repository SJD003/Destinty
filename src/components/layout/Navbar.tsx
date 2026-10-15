"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
const links = [{ href: '/', labelAr: 'الرئيسية', labelEn: 'Home' }, { href: '/gates', labelAr: 'البوابات', labelEn: 'Gates' }, { href: '/committees', labelAr: 'اللجان', labelEn: 'Committees' }, { href: '/organizations', labelAr: 'المنظمات', labelEn: 'Orgs' }];
export default function Navbar(){
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 glow"/><span className="font-black tracking-widest text-lg">DESTINTY</span></Link>
        <div className="flex gap-1">
          {links.map(l=> (<Link key={l.href} href={l.href} className={cn("px-4 py-2 rounded-full text-sm transition", pathname===l.href ? "bg-white text-black font-bold" : "text-zinc-400 hover:text-white hover:bg-white/10")}>{l.labelAr}</Link>))}
        </div>
      </div>
    </nav>
  );
}
