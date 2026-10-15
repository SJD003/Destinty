import gates from '@/data/gates.json';
import { notFound } from 'next/navigation';
export function generateStaticParams(){ return (gates as any[]).map(g=>({id:g.id})); }
export default function GateDetail({ params }: { params: { id: string } }){
  const gate = (gates as any[]).find(g=>g.id===params.id);
  if(!gate) return notFound();
  return (
    <div className="max-w-3xl space-y-6">
      <div className="glass rounded-[32px] p-10">
        <div className="text-sm text-zinc-500">{gate.id} • {gate.status}</div>
        <h1 className="text-5xl font-black mt-2">{gate.nameAr}</h1>
        <p className="text-zinc-500 mt-1">{gate.nameEn}</p>
        <div className="mt-6 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400"/>
        <p className="mt-6 leading-relaxed text-zinc-300">{gate.descriptionAr}</p>
        <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
          <div className="glass rounded-xl p-4"><span className="text-zinc-500">الموقع</span><div className="font-bold mt-1">{gate.location}</div></div>
          <div className="glass rounded-xl p-4"><span className="text-zinc-500">الطاقة</span><div className="font-bold mt-1 font-mono">{gate.energy}%</div></div>
          <div className="glass rounded-xl p-4"><span className="text-zinc-500">المستوى</span><div className="font-bold mt-1">LVL {gate.level}</div></div>
          <div className="glass rounded-xl p-4"><span className="text-zinc-500">آخر نشاط</span><div className="font-bold mt-1 text-xs">{gate.lastActivity}</div></div>
        </div>
      </div>
    </div>
  );
}
