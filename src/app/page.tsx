"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import gates from '@/data/gates.json';
import { Button } from '@/components/ui/Button';

export default function Home(){
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[32px] glass p-10 md:p-16">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full"/>
        <div className="relative z-10 max-w-3xl">
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="text-5xl md:text-7xl font-black leading-[0.9]">نظام<br/><span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-300">DESTINTY</span></motion.h1>
          <p className="mt-6 text-zinc-400 leading-relaxed text-lg">مشروع لإدارة البوابات الغامضة، اللجان السرية، والمنظمات. من بوابة النور الى البوابات المغلقة، كل بوابة لها قصة، طاقة، ومستوى خطورة.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/gates"><Button>استكشاف البوابات</Button></Link>
            <Link href="/committees"><Button variant="ghost">اللجان النشطة</Button></Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div className="glass rounded-2xl p-4"><div className="text-2xl font-black">{gates.length}</div><div className="text-xs text-zinc-500">بوابة</div></div>
            <div className="glass rounded-2xl p-4"><div className="text-2xl font-black">3</div><div className="text-xs text-zinc-500">لجان</div></div>
            <div className="glass rounded-2xl p-4"><div className="text-2xl font-black">3</div><div className="text-xs text-zinc-500">منظمة</div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
