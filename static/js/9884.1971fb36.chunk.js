"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[9884],{9884:(e,i,t)=>{t.d(i,{BaseMover:()=>n});var a=t(4864);class n{async init(e){const i=e.options.move.gravity;e.gravity={enable:i.enable,acceleration:(0,a.qS)(i.acceleration),inverse:i.inverse};const{initSpin:n}=await t.e(2588).then(t.bind(t,2588));n(e),await Promise.resolve()}isEnabled(e){return!e.destroyed&&e.options.move.enable}async move(e,i){var n,o,s,r,c;const p=e.options,v=p.move;if(!v.enable)return;const d=e.container,l=d.retina.pixelRatio;null!==(o=(n=e.retina).moveSpeed)&&void 0!==o||(n.moveSpeed=(0,a.qS)(v.speed)*l),null!==(r=(s=e.retina).moveDrift)&&void 0!==r||(s.moveDrift=(0,a.qS)(e.options.move.drift)*l);const{getProximitySpeedFactor:m}=await t.e(2588).then(t.bind(t,2588)),b=m(e),u=e.retina.moveSpeed*d.retina.reduceFactor,h=e.retina.moveDrift,S=(0,a.GO)(p.size.value)*l,f=u*(v.size?e.getRadius()/S:1)*b*(i.factor||1)/2,w=null!==(c=e.retina.maxSpeed)&&void 0!==c?c:d.retina.maxSpeed;if(v.spin.enable){const{spin:i}=await t.e(2588).then(t.bind(t,2588));i(e,f)}else{const{move:a}=await t.e(2588).then(t.bind(t,2588));await a(e,v,f,w,h,i)}const{applyDistance:y}=await t.e(2588).then(t.bind(t,2588));y(e)}}}}]);
//# sourceMappingURL=9884.1971fb36.chunk.js.map