import { supabase } from './supabase'
export type AppItem={id:string;name:string;slug:string;description:string|null;gender:'women'|'men';logo_url:string|null;banner_url:string|null;agency_required:boolean;withdrawal_type:string|null}
export type Guide={id:string;title:string;summary:string|null;cover_url:string|null;is_general:boolean}
export async function getApps(gender?:'women'|'men'){if(!supabase)return [] as AppItem[];let q=supabase.from('apps').select('*').eq('status','active').order('sort_order');if(gender)q=q.eq('gender',gender);const {data,error}=await q;if(error)throw error;return(data??[])as AppItem[]}
export async function getGuides(){if(!supabase)return [] as Guide[];const {data,error}=await supabase.from('app_guides').select('*').eq('is_active',true).order('sort_order');if(error)throw error;return(data??[])as Guide[]}

