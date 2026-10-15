import committees from '@/data/committees.json';
export default function CommitteesPage(){
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-black">اللجان</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {committees.map((c:any)=>(
          <div key={c.id} className="glass rounded-[24px] p-6">
            <div className="w-10 h-10 rounded-full mb-4" style={{background:c.color}}/>
            <h3 className="font-black text-xl">{c.nameAr}</h3>
            <p className="text-xs text-zinc-500">{c.nameEn}</p>
            <p className="text-sm text-zinc-400 mt-3">{c.descriptionAr}</p>
            <div className="mt-4 flex gap-2 text-xs"><span className="glass px-3 py-1 rounded-full">{c.members} عضو</span><span className="glass px-3 py-1 rounded-full">{c.gateCount} بوابة</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
