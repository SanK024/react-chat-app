"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[1176],{1176:(t,c,i)=>{i.d(c,{clickAttract:()=>r,hoverAttract:()=>u});var n=i(4864);const a=1,e=1,o=0;function s(t,c,i,o,s){const r=t.actualOptions.interactivity.modes.attract;if(!r)return;const u=t.particles.quadTree.query(o,s);for(const p of u){const{dx:t,dy:o,distance:s}=(0,n.If)(p.position,c),u=r.speed*r.factor,f=(0,n.qk)((0,n.Q3)(r.easing)(e-s/i)*u,a,r.maxSpeed),l=n.Cg.create(s?t/s*f:u,s?o/s*f:u);p.position.subFrom(l)}}function r(t,c){t.attract||(t.attract={particles:[]});const{attract:i}=t;if(i.finish||(i.count||(i.count=0),i.count++,i.count===t.particles.count&&(i.finish=!0)),i.clicking){const i=t.interactivity.mouse.clickPosition,a=t.retina.attractModeDistance;if(!a||a<o||!i)return;s(t,i,a,new n.um(i.x,i.y,a),(t=>c(t)))}else!1===i.clicking&&(i.particles=[])}function u(t,c){const i=t.interactivity.mouse.position,a=t.retina.attractModeDistance;!a||a<o||!i||s(t,i,a,new n.um(i.x,i.y,a),(t=>c(t)))}}}]);
//# sourceMappingURL=1176.54999fab.chunk.js.map