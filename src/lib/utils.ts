import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function getGateStatusColor(status: string) {
  switch(status){ case 'OPEN': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'; case 'CLOSED': return 'text-zinc-400 bg-zinc-500/10 border-zinc-500/30'; case 'UNSTABLE': return 'text-amber-400 bg-amber-500/10 border-amber-500/30'; case 'SEALED': return 'text-red-400 bg-red-500/10 border-red-500/30'; default: return ''; }
}
