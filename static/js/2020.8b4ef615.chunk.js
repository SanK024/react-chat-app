"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[2020],{2020:(e,a,i)=>{i.d(a,{ImageDrawer:()=>n});var t=i(4864);class n{constructor(e){this.loadImageShape=async e=>{var a;if(!this._engine.loadImage)throw new Error("".concat(t.iQ," image shape not initialized"));await this._engine.loadImage({gif:e.gif,name:e.name,replaceColor:null!==(a=e.replaceColor)&&void 0!==a&&a,src:e.src})},this._engine=e}addImage(e){this._engine.images||(this._engine.images=[]),this._engine.images.push(e)}async draw(e){const{context:a,radius:t,particle:n,opacity:s}=e,o=n.image,l=null===o||void 0===o?void 0:o.element;if(o){if(a.globalAlpha=s,o.gif&&o.gifData){const{drawGif:a}=await i.e(2840).then(i.bind(i,459));a(e)}else if(l){const e=o.ratio,i={x:-t,y:-t},n=2*t;a.drawImage(l,i.x,i.y,n,n/e)}a.globalAlpha=1}}getSidesCount(){return 12}async init(e){const a=e.actualOptions;if(a.preload&&this._engine.loadImage)for(const i of a.preload)await this._engine.loadImage(i)}async loadShape(e){if("image"!==e.shape&&"images"!==e.shape)return;this._engine.images||(this._engine.images=[]);const a=e.shapeData;if(!a)return;this._engine.images.find((e=>e.name===a.name||e.source===a.src))||(await this.loadImageShape(a),await this.loadShape(e))}async particleInit(e,a){var t,n,s;if("image"!==a.shape&&"images"!==a.shape)return;this._engine.images||(this._engine.images=[]);const o=this._engine.images,l=a.shapeData;if(!l)return;const r=a.getFillColor(),g=o.find((e=>e.name===l.name||e.source===l.src));if(!g)return;const c=null!==(t=l.replaceColor)&&void 0!==t?t:g.replaceColor;if(g.loading)return void setTimeout((()=>{this.particleInit(e,a)}));let h;if(g.svgData&&r){const{replaceImageColor:e}=await Promise.resolve().then(i.bind(i,2360));h=await e(g,l,r,a)}else{var p;h={color:r,data:g,element:g.element,gif:g.gif,gifData:g.gifData,gifLoopCount:g.gifLoopCount,loaded:!0,ratio:l.width&&l.height?l.width/l.height:null!==(p=g.ratio)&&void 0!==p?p:1,replaceColor:c,source:l.src}}h.ratio||(h.ratio=1);const m={image:h,fill:null!==(n=l.fill)&&void 0!==n?n:a.shapeFill,close:null!==(s=l.close)&&void 0!==s?s:a.shapeClose};a.image=m.image,a.shapeFill=m.fill,a.shapeClose=m.close}}}}]);
//# sourceMappingURL=2020.8b4ef615.chunk.js.map