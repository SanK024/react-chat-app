"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[9388],{9388:(e,s,n)=>{n.d(s,{WobbleUpdater:()=>t});var o=n(4864);class a{constructor(){this.angle=50,this.move=10}load(e){e&&(void 0!==e.angle&&(this.angle=(0,o.Ws)(e.angle)),void 0!==e.move&&(this.move=(0,o.Ws)(e.move)))}}class i{constructor(){this.distance=5,this.enable=!1,this.speed=new a}load(e){if(e&&(void 0!==e.distance&&(this.distance=(0,o.Ws)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,o.Ib)(e.speed))this.speed.load({angle:e.speed});else{const s=e.speed;void 0!==s.min?this.speed.load({angle:s}):this.speed.load(e.speed)}}}const l=2*Math.PI;class t{constructor(e){this.container=e}async init(e){var s;const n=e.options.wobble;null!==n&&void 0!==n&&n.enable?e.wobble={angle:(0,o.CE)()*l,angleSpeed:(0,o.qS)(n.speed.angle)/360,moveSpeed:(0,o.qS)(n.speed.move)/10}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,o.qS)(null!==(s=null===n||void 0===n?void 0:n.distance)&&void 0!==s?s:0)*this.container.retina.pixelRatio,await Promise.resolve()}isEnabled(e){var s;return!e.destroyed&&!e.spawning&&!(null===(s=e.options.wobble)||void 0===s||!s.enable)}loadOptions(e){e.wobble||(e.wobble=new i);for(var s=arguments.length,n=new Array(s>1?s-1:0),o=1;o<s;o++)n[o-1]=arguments[o];for(const a of n)e.wobble.load(null===a||void 0===a?void 0:a.wobble)}async update(e,s){if(!this.isEnabled(e))return;const{updateWobble:o}=await n.e(3592).then(n.bind(n,3592));o(e,s)}}}}]);
//# sourceMappingURL=9388.da0c927f.chunk.js.map