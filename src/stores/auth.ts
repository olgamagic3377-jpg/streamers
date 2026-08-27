import { reactive } from 'vue'
import { supabase } from '../services/supabase'
type Profile={full_name:string;phone:string;gender:string|null}|null
const state=reactive<{user:{id:string;email?:string}|null;profile:Profile}>({user:null,profile:null})
export function useAuthStore(){return{get user(){return state.user},get profile(){return state.profile},async initialize(){if(!supabase)return;const {data}=await supabase.auth.getUser();state.user=data.user;if(data.user){const r=await supabase.from('profiles').select('full_name,phone,gender').eq('id',data.user.id).single();state.profile=r.data}},async signOut(){await supabase?.auth.signOut();state.user=null;state.profile=null}}}

