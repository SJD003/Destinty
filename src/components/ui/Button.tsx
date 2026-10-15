import { cn } from '@/lib/utils';
export function Button({ children, variant='primary', className, ...props }: any){
  return <button className={cn("px-6 py-3 rounded-full font-bold text-sm transition", variant==='primary' ? "bg-white text-black hover:bg-cyan-300" : "glass text-white hover:bg-white/10", className)} {...props}>{children}</button>
}
