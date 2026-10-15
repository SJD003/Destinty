"use client";
import { Gate } from '@/types';
import { getGateStatusColor, cn } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GateCard({ gate }: { gate: Gate }){
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} className="glass rounded-[24px] p-6 glow group">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-full p-[2px] portal-ring"><div className="w-full h-full bg-[#0F1424] rounded-full flex items-center justify-center text-lg">◍</div></div>
        <span className={cn("text-[11px] px-3 py-1 rounded-full border font-bold tracking-widest", getGateStatusColor(gate.status))}>{gate.status}</span>
      </div>
      <h3 className="text-xl font-black mb-1">{gate.nameAr}</h3>
      <p className="text-xs text-zinc-500 mb-3">{gate.nameEn} • LVL {gate.level}</p>
      <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">{gate.descriptionAr}</p>
      <div className="mt-5 flex items-center justify-between">
        <div className="text-xs text-zinc-500">الطاقة: <span className="text-white font-mono">{gate.energy}%</span></div>
        <Link href={`/gates/${gate.id}`} className="text-xs bg-white text-black px-4 py-2 rounded-full font-bold group-hover:bg-cyan-400 transition">تفاصيل →</Link>
      </div>
    </motion.div>
  );
}
