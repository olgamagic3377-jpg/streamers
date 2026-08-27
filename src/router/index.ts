import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppsView from '../views/AppsView.vue'
import GuidesView from '../views/GuidesView.vue'
import AuthView from '../views/AuthView.vue'
import InfoView from '../views/InfoView.vue'
export default createRouter({ history:createWebHistory(), scrollBehavior:()=>({top:0}), routes:[{path:'/',component:HomeView},{path:'/apps/:audience(mujeres|hombres)',component:AppsView,props:true},{path:'/guias',component:GuidesView,},{path:'/ser-agente',component:InfoView,props:{title:'Quiero ser agente',kind:'agent'}},{path:'/contacto',component:InfoView,props:{title:'Hablemos',kind:'contact'}},{path:'/politicas',component:InfoView,props:{title:'Políticas de la plataforma',kind:'policies'}},{path:'/ingresar',component:AuthView,props:{mode:'login'}},{path:'/registro',component:AuthView,props:{mode:'register'}},{path:'/perfil',component:InfoView,props:{title:'Mi perfil',kind:'profile'}},{path:'/:pathMatch(.*)*',redirect:'/'}]})

