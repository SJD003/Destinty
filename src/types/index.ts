export type GateStatus = 'OPEN' | 'CLOSED' | 'UNSTABLE' | 'SEALED';
export interface Gate { id: string; nameAr: string; nameEn: string; status: GateStatus; level: number; location: string; descriptionAr: string; descriptionEn: string; committeeId: string; orgId: string; lastActivity: string; energy: number; }
export interface Committee { id: string; nameAr: string; nameEn: string; role: string; members: number; gateCount: number; descriptionAr: string; color: string; }
export interface Organization { id: string; nameAr: string; nameEn: string; type: 'RESEARCH'|'SECURITY'|'MEDIA'|'COMMERCIAL'; founded: string; descriptionAr: string; gatesManaged: number; }
