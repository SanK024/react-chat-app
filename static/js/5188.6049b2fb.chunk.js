"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[5188],{5188:(t,o,i)=>{i.d(o,{Slower:()=>n});var s=i(4864);class a{constructor(){this.factor=3,this.radius=200}load(t){t&&(void 0!==t.factor&&(this.factor=t.factor),void 0!==t.radius&&(this.radius=t.radius))}}class n extends s.Ef{constructor(t){super(t)}clear(t,o,i){t.slow.inRange&&!i||(t.slow.factor=1)}init(){const t=this.container,o=t.actualOptions.interactivity.modes.slow;o&&(t.retina.slowModeRadius=o.radius*t.retina.pixelRatio)}async interact(){}isEnabled(t){var o;const i=this.container,a=i.interactivity.mouse,n=(null!==(o=null===t||void 0===t?void 0:t.interactivity)&&void 0!==o?o:i.actualOptions.interactivity).events;return n.onHover.enable&&!!a.position&&(0,s.Sc)("slow",n.onHover.mode)}loadModeOptions(t){t.slow||(t.slow=new a);for(var o=arguments.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];for(const a of i)t.slow.load(null===a||void 0===a?void 0:a.slow)}reset(t){t.slow.inRange=!1;const o=this.container,i=o.actualOptions,a=o.interactivity.mouse.position,n=o.retina.slowModeRadius,e=i.interactivity.modes.slow;if(!e||!n||n<0||!a)return;const r=t.getPosition(),c=(0,s.c$)(a,r),l=c/n,d=e.factor,{slow:u}=t;c>n||(u.inRange=!0,u.factor=l/d)}}}}]);
//# sourceMappingURL=5188.6049b2fb.chunk.js.map