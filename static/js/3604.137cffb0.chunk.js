"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[3604],{5984:(t,n,e)=>{e.d(n,{Bouncer:()=>c});var i=e(4864);class o{constructor(){this.distance=200}load(t){t&&void 0!==t.distance&&(this.distance=t.distance)}}const a="bounce";class c extends i.Ef{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.bounce;n&&(t.retina.bounceModeDistance=n.distance*t.retina.pixelRatio)}async interact(){const t=this.container,n=t.actualOptions.interactivity.events,o=t.interactivity.status===i.yG,c=n.onHover.enable,s=n.onHover.mode,r=n.onDiv;if(o&&c&&(0,i.Sc)(a,s)){const{mouseBounce:t}=await e.e(4056).then(e.bind(e,4056));t(this.container,(t=>this.isEnabled(t)))}else{const{divBounce:t}=await e.e(4056).then(e.bind(e,4056));t(this.container,r,a,(t=>this.isEnabled(t)))}}isEnabled(t){var n;const e=this.container,o=e.actualOptions,c=e.interactivity.mouse,s=(null!==(n=null===t||void 0===t?void 0:t.interactivity)&&void 0!==n?n:o.interactivity).events,r=s.onDiv;return!!c.position&&s.onHover.enable&&(0,i.Sc)(a,s.onHover.mode)||(0,i.CY)(a,r)}loadModeOptions(t){t.bounce||(t.bounce=new o);for(var n=arguments.length,e=new Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];for(const o of e)t.bounce.load(null===o||void 0===o?void 0:o.bounce)}reset(){}}}}]);
//# sourceMappingURL=3604.137cffb0.chunk.js.map