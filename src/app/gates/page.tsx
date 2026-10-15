import gates from '@/data/gates.json';
import GateCard from '@/components/gates/GateCard';
export default function GatesPage(){
  return (
    <div className="space-y-8">
      <div><h1 className="text-4xl font-black">البوابات</h1><p className="text-zinc-500 mt-2">قائمة البوابات المكتشفة وحالتها الحية</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gates.map((g:any)=><GateCard key={g.id} gate={g}/>)}
      </div>
    </div>
  );
}
