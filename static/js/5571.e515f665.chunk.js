"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[5571],{5571:(t,e,i)=>{i.d(e,{Emitters:()=>s});var a=i(4864);class s{constructor(t,e){this.container=e,this._engine=t,this.array=[],this.emitters=[],this.interactivityEmitters={random:{count:1,enable:!1},value:[]};e.getEmitter=t=>void 0===t||(0,a.Ib)(t)?this.array[null!==t&&void 0!==t?t:0]:this.array.find((e=>e.name===t)),e.addEmitter=async(t,e)=>this.addEmitter(t,e),e.removeEmitter=t=>{const i=e.getEmitter(t);i&&this.removeEmitter(i)},e.playEmitter=t=>{const i=e.getEmitter(t);i&&i.externalPlay()},e.pauseEmitter=t=>{const i=e.getEmitter(t);i&&i.externalPause()}}async addEmitter(t,e){const{Emitter:a}=await Promise.resolve().then(i.bind(i,1848)),{EmitterInstance:s}=await i.e(9576).then(i.bind(i,9576)),r=new a;r.load(t);const n=new s(this._engine,this,this.container,r,e);return await n.init(),this.array.push(n),n}handleClickMode(t){var e;const i=this.emitters,s=this.interactivityEmitters;if("emitter"!==t)return;let r;if(s&&(0,a.c7)(s.value)){const t=0;if(s.value.length>t&&s.random.enable){r=[];const t=[];for(let e=0;e<s.random.count;e++){const i=(0,a.aG)(s.value);t.includes(i)&&t.length<s.value.length?e--:(t.push(i),r.push((0,a.Gi)(s.value,i)))}}else r=s.value}else r=null===s||void 0===s?void 0:s.value;const n=null!==(e=r)&&void 0!==e?e:i,o=this.container.interactivity.mouse.clickPosition;(0,a.yW)(n,(async t=>{await this.addEmitter(t,o)}))}async init(){if(this.emitters=this.container.actualOptions.emitters,this.interactivityEmitters=this.container.actualOptions.interactivity.modes.emitters,this.emitters)if((0,a.c7)(this.emitters))for(const t of this.emitters)await this.addEmitter(t);else await this.addEmitter(this.emitters)}pause(){for(const t of this.array)t.pause()}play(){for(const t of this.array)t.play()}removeEmitter(t){const e=this.array.indexOf(t);e>=0&&this.array.splice(e,1)}resize(){for(const t of this.array)t.resize()}stop(){this.array=[]}async update(t){for(const e of this.array)await e.update(t)}}}}]);
//# sourceMappingURL=5571.e515f665.chunk.js.map