"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[5984],{3604:(e,i,t)=>{t.d(i,{updateLife:()=>r});var n=t(4864);const a=0,u=-1,l=0,o=0;function r(e,i,t){if(!e.life)return;const r=e.life;let s=!1;if(e.spawning){if(r.delayTime+=i.value,!(r.delayTime>=e.life.delay))return;s=!0,e.spawning=!1,r.delayTime=a,r.time=a}if(r.duration===u)return;if(e.spawning)return;if(s?r.time=a:r.time+=i.value,r.time<r.duration)return;if(r.time=a,e.life.count>l&&e.life.count--,e.life.count===l)return void e.destroy();const f=(0,n.Ws)(o,t.width),d=(0,n.Ws)(o,t.width);e.position.x=(0,n.jy)(f),e.position.y=(0,n.jy)(d),e.spawning=!0,r.delayTime=a,r.time=a,e.reset();const p=e.options.life;p&&(r.delay=(0,n.qS)(p.delay.value)*n.Ub,r.duration=(0,n.qS)(p.duration.value)*n.Ub)}}}]);
//# sourceMappingURL=5984.66d6d723.chunk.js.map