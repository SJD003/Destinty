import orgs from '@/data/organizations.json';
export default function OrgsPage(){
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-black">المنظمات</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {orgs.map((o:any)=>(
          <div key={o.id} className="glass rounded-[24px] p-6">
            <div className="text-xs px-3 py-1 rounded-full bg-white/10 w-fit">{o.type}</div>
            <h3 className="font-black text-xl mt-3">{o.nameAr}</h3>
            <p className="text-xs text-zinc-500">{o.nameEn} • تأسست {o.founded}</p>
            <p className="text-sm text-zinc-400 mt-3">{o.descriptionAr}</p>
            <div className="mt-4 text-xs text-zinc-500">{o.gatesManaged} بوابات تحت الإدارة</div>
          </div>
        ))}
      </div>
    </div>
  );
}
