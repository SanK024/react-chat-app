"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[3552],{3552:(t,e,a)=>{a.d(e,{Attractor:()=>i});var o=a(4864);class i extends o.Cm{constructor(t){super(t)}clear(){}init(){}async interact(t){const e=this.container;void 0===t.attractDistance&&(t.attractDistance=(0,o.qS)(t.options.move.attract.distance)*e.retina.pixelRatio);const a=t.attractDistance,i=t.getPosition(),c=e.particles.quadTree.queryCircle(i,a);for(const s of c){if(t===s||!s.options.move.attract.enable||s.destroyed||s.spawning)continue;const e=s.getPosition(),{dx:a,dy:c}=(0,o.If)(i,e),n=t.options.move.attract.rotate,r=a/(1e3*n.x),l=c/(1e3*n.y),p=s.size.value/t.size.value,v=1/p;t.velocity.x-=r*p,t.velocity.y-=l*p,s.velocity.x+=r*v,s.velocity.y+=l*v}await Promise.resolve()}isEnabled(t){return t.options.move.attract.enable}reset(){}}}}]);
//# sourceMappingURL=3552.c4526a8a.chunk.js.map