/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const r=this.t;if(e&&void 0===t){const e=void 0!==r&&1===r.length;e&&(t=i.get(r)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(r,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new s(i,t,r)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,m=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,_=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},y=(t,e)=>!n(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);s?.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,i)=>{if(e)r.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const s=(void 0!==r.converter?.toAttribute?r.converter:v).toAttribute(e,r.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i;const o=s.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,r,i=!1,s){if(void 0!==t){const o=this.constructor;if(!1===i&&(s=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??y)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,r,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[_("elementProperties")]=new Map,w[_("finalized")]=new Map,g?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=t=>t,k=x.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,P=`<${C}>`,T=document,O=()=>T.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,M="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,z=/>/g,j=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),L=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Y=new WeakMap,q=T.createTreeWalker(T,129);function K(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const F=(t,e)=>{const r=t.length-1,i=[];let s,o=2===e?"<svg>":3===e?"<math>":"",a=N;for(let e=0;e<r;e++){const r=t[e];let n,c,l=-1,h=0;for(;h<r.length&&(a.lastIndex=h,c=a.exec(r),null!==c);)h=a.lastIndex,a===N?"!--"===c[1]?a=U:void 0!==c[1]?a=z:void 0!==c[2]?(I.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=j):void 0!==c[3]&&(a=j):a===j?">"===c[0]?(a=s??N,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?j:'"'===c[3]?D:W):a===D||a===W?a=j:a===U||a===z?a=N:(a=j,s=void 0);const d=a===j&&t[e+1].startsWith("/>")?" ":"";o+=a===N?r+P:l>=0?(i.push(n),r.slice(0,l)+E+r.slice(l)+S+d):r+S+(-2===l?e:d)}return[K(t,o+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,n=this.parts,[c,l]=F(t,e);if(this.el=X.createElement(c,r),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=q.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[o++],r=i.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:s,name:a[2],strings:r,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?rt:Q}),i.removeAttribute(t)}else t.startsWith(S)&&(n.push({type:6,index:s}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],O()),q.nextNode(),n.push({type:2,index:++s});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===C)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)n.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const r=T.createElement("template");return r.innerHTML=t,r}}function Z(t,e,r=t,i){if(e===L)return e;let s=void 0!==i?r._$Co?.[i]:r._$Cl;const o=R(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=s:r._$Cl=s),void 0!==s&&(e=Z(t,s._$AS(t,e.values),s,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);q.currentNode=i;let s=q.nextNode(),o=0,a=0,n=r[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new G(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new it(s,this,t)),this._$AV.push(e),n=r[++a]}o!==n?.index&&(s=q.nextNode(),o++)}return q.currentNode=T,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),R(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=X.createElement(K(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new J(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new X(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new G(this.O(O()),this.O(O()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=V}_$AI(t,e=this,r,i){const s=this.strings;let o=!1;if(void 0===s)t=Z(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const i=t;let a,n;for(t=s[0],a=0;a<s.length-1;a++)n=Z(this,i[r+a],e,a),n===L&&(n=this._$AH[a]),o||=!R(n)||n!==this._$AH[a],n===V?t=V:t!==V&&(t+=(n??"")+s[a+1]),this._$AH[a]=n}o&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class rt extends Q{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??V)===L)return;const r=this._$AH,i=t===V&&r!==V||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==V&&(r===V||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const st=x.litHtmlPolyfillSupport;st?.(X,G),(x.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=r?.renderBefore??null;i._$litPart$=s=new G(e.insertBefore(O(),t),t,void 0,r??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const nt=ot.litElementPolyfillSupport;nt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ht=(t=lt,e,r)=>{const{kind:i,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const s=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,s,t,!0,r)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=r;return function(r){const s=this[i];e.call(this,r),this.requestUpdate(i,s,t,!0,r)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,r)=>"object"==typeof r?ht(t,e,r):((t,e,r)=>{const i=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return dt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=1;let ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt="important",gt=" !"+mt,_t=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ft{constructor(t){if(super(t),t.type!==ut||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const i=t[r];return null==i?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?r.removeProperty(t):r[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(gt);t.includes("-")||e?r.setProperty(t,e?i.slice(0,-11):i,e?mt:""):r[t]=i}}return L}}),vt=["minimal","full","compact","comfort","focus_target","chips_first"],yt=[];
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(t){yt.push(t)}class wt{constructor(t,e){this.entity=t,this.ctx=e}get current(){return this.entity.attributes.current_temperature??0}get target(){return this.entity.attributes.temperature??0}get min(){return this.entity.attributes.min_temp??0}get max(){return this.entity.attributes.max_temp??100}get status(){const t=this.entity.state;return"off"===t?"off":"heating"===t||"heat"===t?"heating":this.current>=this.target-2&&this.target>0?"ready":"idle"}get keepWarm(){return{active:"heat_pump"===this.entity.state||"eco"===this.entity.state}}setTarget(t){return{domain:"water_heater",service:"set_temperature",serviceData:{entity_id:this.entity.entity_id,temperature:t}}}turnOn(){if(8&(this.entity.attributes.supported_features??0))return{domain:"water_heater",service:"turn_on",serviceData:{entity_id:this.entity.entity_id}};const t="number"==typeof this.target&&this.target>=this.min&&this.target<=this.max&&this.target>0?this.target:Math.min(this.max,Math.max(this.min,95));return this.setTarget(Math.round(t))}turnOff(){return{domain:"water_heater",service:"turn_off",serviceData:{entity_id:this.entity.entity_id}}}}const xt={id:"standard",matches:t=>t.entity_id.startsWith("water_heater.")&&!("kettle.status"in t.attributes),build:(t,e)=>new wt(t,e)};class $t{constructor(t,e){this.entity=t,this.ctx=e}get current(){return this.entity.attributes.current_temperature??0}get target(){return this.entity.attributes.temperature??0}get min(){return this.entity.attributes.min_temp??40}get max(){return this.entity.attributes.max_temp??99}get status(){const t=this.entity.attributes["kettle.status"],e=this.entity.attributes["kettle.fault"];if(e&&0!==e)return"fault";switch(t){case 1:case 2:return"heating";case 4:return"keeping_warm";case 0:return"off"===this.entity.state?"off":this.current>=this.target-2&&this.target>0?"ready":"idle";default:return"idle"}}get keepWarm(){const t=!0===this.entity.attributes["kettle.auto_keep_warm"],e=this.entity.attributes["function.keep_warm_time"],r=this.entity.attributes["kettle.keep_warm_temperature"];let i;if(this.ctx.keepWarmRemainingEntity){const t=parseFloat(this.ctx.keepWarmRemainingEntity.state);isNaN(t)||(i={minutes:t})}return{active:t,remaining:i,configured:e?{minutes:e}:void 0,holdTemperature:r}}get lifted(){return!0===this.entity.attributes["function.kettle_lifting"]}get fault(){const t=this.entity.attributes["kettle.fault"];return t&&0!==t?`Error ${t}`:null}setTarget(t){return{domain:"water_heater",service:"set_temperature",serviceData:{entity_id:this.entity.entity_id,temperature:t}}}turnOn(){const t="number"==typeof this.target&&this.target>=this.min&&this.target<=this.max&&this.target>0?this.target:this.max;return this.setTarget(Math.round(t))}turnOff(){return{domain:"water_heater",service:"turn_off",serviceData:{entity_id:this.entity.entity_id}}}setKeepWarmMinutes(t){return{domain:"xiaomi_miot",service:"set_property",serviceData:{entity_id:this.entity.entity_id,field:"function.keep_warm_time",value:t}}}}const kt={id:"xiaomi_miot",matches:t=>"kettle.status"in t.attributes,build:(t,e)=>new $t(t,e)},At=o`
  :host {
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
    --whc-radius-md: 10px;
    --whc-radius-card: calc(var(--ha-card-border-radius, 16px));
    --whc-padding: clamp(14px, 2.5vw, 18px);
    --whc-color-heating: #ff8c00;
    --whc-color-keeping_warm: #4285f4;
    --whc-color-idle: var(--primary-text-color);
    --whc-color-off: #757575;
    --whc-color-fault: var(--error-color);
    --whc-shape-size: 52px;
  }

  ha-card {
    height: 100%;
    box-sizing: border-box;
    padding: var(--whc-padding);
    border-radius: var(--whc-radius-card);
    overflow: clip;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(
      --ha-card-background-color,
      var(--card-background-color, var(--primary-background-color, #fff))
    );
    border: none;
    box-shadow: var(
      --ha-card-box-shadow,
      0 4px 24px rgba(0, 0, 0, 0.06),
      0 1px 3px rgba(0, 0, 0, 0.04)
    );
  }

  ha-card:focus-within {
    outline: none;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Header */
  .header-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
    min-height: calc(var(--whc-shape-size) + 6px);
  }

  .header-row whc-shape {
    flex-shrink: 0;
    width: var(--whc-shape-size);
    height: var(--whc-shape-size);
  }

  .header-center {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-width: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    min-width: 0;
    flex: 1;
    text-align: start;
  }

  .primary {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25;
    letter-spacing: -0.015em;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .secondary {
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.3;
    color: var(--whc-state-muted, var(--secondary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .state--heating .secondary {
    color: var(--whc-state-color);
  }

  .state--keeping_warm .secondary {
    color: var(--whc-state-color);
  }

  .state--fault .secondary {
    color: var(--whc-color-fault);
  }

  .state--off .secondary {
    color: var(--whc-color-off);
  }

  .state--idle .secondary {
    color: var(--secondary-text-color);
  }

  .temp-display--ambient {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
    flex-shrink: 0;
    margin-inline-start: auto;
    font-variant-numeric: tabular-nums;
  }

  .temp-current--ambient {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--secondary-text-color);
    line-height: 1;
  }

  .power-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .extras-wrap {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: -4px;
  }

  .extras-toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
    padding: 8px 10px;
    border-radius: var(--whc-radius-md);
    border: 1px solid color-mix(in srgb, var(--primary-text-color) 12%, transparent);
    background: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    color: var(--primary-text-color);
    font: inherit;
    font-size: 0.8125rem;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 0.18s ease,
      border-color 0.18s ease;
    text-align: start;
    min-height: 40px;
    box-sizing: border-box;
  }

  .extras-toggle:hover {
    background: color-mix(in srgb, var(--primary-text-color) 9%, transparent);
    border-color: color-mix(in srgb, var(--primary-text-color) 18%, transparent);
  }

  .extras-toggle ha-icon.extras-chevron {
    flex-shrink: 0;
    --mdc-icon-size: 22px;
    color: var(--secondary-text-color);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .extras-toggle ha-icon.extras-chevron.open {
    transform: rotate(-180deg);
  }

  .extras-panel {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 12px;
    margin-top: 4px;
    border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 8%, transparent);
    animation: whcExtrasIn 0.2s ease;
  }

  .focus-target-row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 12px;
    border-radius: var(--whc-radius-md);
    background: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  }

  .focus-target-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .focus-target-value {
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
  }

  @keyframes whcExtrasIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .temp-display {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
    flex-shrink: 0;
    gap: 3px;
    color: var(--whc-state-color, var(--primary-text-color));
    font-variant-numeric: tabular-nums;
    margin-inline-start: auto;
  }

  .temp-current {
    font-size: 1.875rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .temp-target {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--secondary-text-color);
    opacity: 0.72;
    align-self: baseline;
    margin-inline-start: 1px;
  }

  .state--keeping_warm .temp-target {
    display: none;
  }

  /* Controls */
  .control-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .section-label {
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    opacity: 0.85;
    margin-inline-start: 2px;
  }

  /* Flex row survives narrow HA columns better than grid in some masonry layouts */
  .preset-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 8px;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  .preset-row > whc-preset-button {
    flex: 1 1 0%;
    min-width: 0;
    max-width: 100%;
  }

  /* Accent tokens */
  .state--heating {
    --whc-state-color: var(--whc-color-heating);
    --whc-state-muted: color-mix(in srgb, var(--whc-color-heating) 55%, var(--secondary-text-color));
  }
  .state--keeping_warm {
    --whc-state-color: var(--whc-color-keeping_warm);
    --whc-state-muted: color-mix(in srgb, var(--whc-color-keeping_warm) 50%, var(--secondary-text-color));
  }
  .state--idle {
    --whc-state-color: var(--whc-color-idle);
  }
  .state--off {
    --whc-state-color: var(--whc-color-off);
  }
  .state--fault {
    --whc-state-color: var(--whc-color-fault);
  }

  :host([layout="sparse"]) .card {
    gap: 22px;
  }

  :host([layout="dense"]) .card {
    gap: 10px;
  }

  :host([roundness="square"]) {
    --whc-radius-md: 6px;
    --whc-radius-card: 10px;
  }

  :host([roundness="pill"]) {
    --whc-radius-md: 999px;
  }

  :host([compact]) .card {
    gap: 10px;
  }

  :host([compact]) ha-card {
    padding: 10px 12px;
  }

  :host([ui_variant="compact"]) {
    --whc-padding: 10px 12px;
    --whc-shape-size: 46px;
  }

  :host([ui_variant="compact"]) .card {
    gap: 10px;
  }

  :host([ui_variant="compact"]) .primary {
    font-size: 0.9rem;
  }

  :host([ui_variant="compact"]) .temp-current,
  :host([ui_variant="compact"]) .focus-target-value {
    font-size: 1.55rem;
  }

  :host([ui_variant="compact"]) .extras-toggle {
    min-height: 36px;
    padding: 6px 8px;
    font-size: 0.75rem;
  }

  :host([ui_variant="comfort"]) {
    --whc-padding: clamp(18px, 3vw, 24px);
    --whc-shape-size: 58px;
  }

  :host([ui_variant="comfort"]) .card {
    gap: 22px;
  }

  :host([ui_variant="comfort"]) .preset-row {
    gap: 10px;
  }

  :host([ui_variant="comfort"]) .extras-toggle {
    min-height: 48px;
    padding: 12px 14px;
    font-size: 0.875rem;
  }

  ha-card.unavailable {
    opacity: 0.88;
  }
`;const Et={en:{"status.off":"Off","status.idle":"Idle","status.heating":"Heating","status.boiling":"Boiling","status.keeping_warm":"Keep warm","status.ready":"Ready","status.fault":"Error","chip.power":"Power","chip.turn_on":"Turn on","chip.turn_off":"Turn off","panel.expand_controls":"Temperature & keep warm","panel.heating_toward":"Target","section.keep_warm":"Keep warm","aria.shape_start":"Start heating to target temperature","chip.lifted":"Lifted","chip.keep_warm_remaining":"{remaining} left","chip.keep_warm_configured":"Keep warm: {duration}","preset.boil":"Boil","preset.tea":"Tea","preset.coffee":"Coffee","preset.baby":"Baby","state.unavailable":"Unavailable","error.generic":"Error {code}"},he:{"status.off":"כבוי","status.idle":"במצב המתנה","status.heating":"מחמם","status.boiling":"רותח","status.keeping_warm":"שמירה על חום","status.ready":"מוכן","status.fault":"תקלה","chip.power":"הפעלה","chip.turn_on":"להדליק","chip.turn_off":"לכבות","panel.expand_controls":"טמפרטורה ושמירת חום","panel.heating_toward":"יעד","section.keep_warm":"שמירת חום","aria.shape_start":"התחל חימום ליעד הנוכחי","chip.lifted":"הורם","chip.keep_warm_remaining":"{remaining} נותרו","chip.keep_warm_configured":"שמירת חום: {duration}","preset.boil":"רתיחה","preset.tea":"תה","preset.coffee":"קפה","preset.baby":"תינוק","state.unavailable":"לא זמין","error.generic":"שגיאה {code}"}};function St(t,e,r){const i=e?e.toLowerCase().split("-")[0]:"en";return(Et[i]??Et.en)[t]??Et.en[t]??t}const Ct={off:"var(--whc-color-off, var(--disabled-color))",idle:"var(--whc-color-idle, var(--primary-text-color))",heating:"var(--whc-color-heating, #ff9800)",keeping_warm:"var(--whc-color-keeping_warm, #2196f3)",ready:"var(--whc-color-ready, var(--success-color))",fault:"var(--whc-color-fault, var(--error-color))"},Pt={off:"mdi:kettle-off",idle:"mdi:kettle",heating:"mdi:kettle-steam",keeping_warm:"mdi:kettle-steam",ready:"mdi:kettle",fault:"mdi:kettle-alert"};var Tt=function(t,e,r,i){var s,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,r,a):s(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a};let Ot=class extends at{constructor(){super(...arguments),this.progress=0,this.clickable=!1}updated(t){super.updated(t),t.has("clickable")&&(this.clickable?(this.setAttribute("role","button"),this.setAttribute("tabindex","0")):(this.removeAttribute("role"),this.removeAttribute("tabindex")))}render(){const t=this.status?Ct[this.status]:"var(--disabled-color)",e=this.icon||(this.status?Pt[this.status]:"mdi:kettle"),r=22.5,i=2*Math.PI*r,s=!1===Number.isFinite(this.progress)?i:i-this.progress/100*i;this.style.setProperty("--shape-color",t);const o="heating"===this.status||"keeping_warm"===this.status,a="heating"===this.status||"keeping_warm"===this.status;return this.classList.toggle("animated",a),B`
      <div class="shape-background"></div>
      ${o?B`
            <svg viewBox="0 0 52 52" aria-hidden="true">
              <circle class="ring-bg" cx="26" cy="26" r="${r}"></circle>
              <circle
                class="ring-progress"
                cx="26"
                cy="26"
                r="${r}"
                stroke-dasharray="${i}"
                stroke-dashoffset="${s}"
              ></circle>
            </svg>
          `:""}
      <ha-icon .icon=${e}></ha-icon>
    `}};Ot.styles=o`
    :host {
      --shape-color: var(--disabled-color);
      width: 52px;
      height: 52px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      position: relative;
    }

    .shape-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: color-mix(in srgb, var(--shape-color) 14%, transparent);
      border: 1px solid color-mix(in srgb, var(--shape-color) 12%, transparent);
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
      pointer-events: none;
    }

    circle {
      fill: none;
      stroke-linecap: round;
      stroke-width: 2.75;
      transition:
        stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.25s ease;
    }

    .ring-bg {
      stroke: var(--shape-color);
      opacity: 0.22;
    }

    .ring-progress {
      stroke: var(--shape-color);
      opacity: 1;
    }

    ha-icon {
      color: var(--shape-color);
      --mdc-icon-size: 26px;
      z-index: 1;
    }

    @keyframes shape-steam {
      0% {
        transform: scale(1) translateY(0);
      }
      50% {
        transform: scale(1.04) translateY(-1.5px);
      }
      100% {
        transform: scale(1) translateY(0);
      }
    }

    :host([clickable]) {
      cursor: pointer;
    }

    :host([clickable]) .shape-background {
      transition:
        transform 0.12s ease,
        filter 0.15s ease,
        background 0.2s;
    }

    :host([clickable]:active) .shape-background {
      transform: scale(0.93);
      filter: brightness(0.92);
    }

      animation: shape-steam 2.25s ease-in-out infinite;
    }
  `,Tt([dt()],Ot.prototype,"icon",void 0),Tt([dt()],Ot.prototype,"status",void 0),Tt([dt({type:Number})],Ot.prototype,"progress",void 0),Tt([dt({type:Boolean,reflect:!0})],Ot.prototype,"clickable",void 0),Ot=Tt([ct("whc-shape")],Ot);var Rt=function(t,e,r,i){var s,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,r,a):s(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a};let Ht=class extends at{constructor(){super(...arguments),this.disabled=!1}render(){return B`
      ${this.icon?B`<ha-icon .icon=${this.icon}></ha-icon>`:""}
      ${this.label?B`<span class="label">${this.label}</span>`:""}
    `}};Ht.styles=o`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 32px;
      padding: 0 10px;
      border-radius: 16px;
      background: var(--chip-background-color, rgba(127, 127, 127, 0.12));
      cursor: pointer;
      user-select: none;
      transition: background 0.2s, filter 0.2s;
    }

    :host(:hover) {
      filter: brightness(1.1);
    }

    :host(:active) {
      filter: brightness(0.9);
    }

    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
      filter: none;
    }

    ha-icon {
      --mdc-icon-size: 16px;
    }

    .label {
      font-size: 0.9em;
      font-weight: 500;
    }
  `,Rt([dt()],Ht.prototype,"icon",void 0),Rt([dt()],Ht.prototype,"label",void 0),Rt([dt({type:Boolean})],Ht.prototype,"disabled",void 0),Ht=Rt([ct("whc-chip")],Ht);var Mt=function(t,e,r,i){var s,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,r,a):s(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a};let Nt=class extends at{constructor(){super(...arguments),this.active=!1,this.label="",this.color="var(--primary-text-color)"}render(){return this.style.setProperty("--active-color",this.color),B`
      <button type="button" part="button">
        ${this.label}
      </button>
    `}};Nt.styles=o`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      min-height: 38px;
      padding: 0 6px;
      background: transparent;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 14%, transparent);
      border-radius: var(--whc-radius-md, 10px);
      color: var(--primary-text-color);
      font-size: 0.8125rem;
      font-weight: 650;
      font-variant-numeric: tabular-nums;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        border-color 0.18s ease,
        background-color 0.18s ease,
        color 0.18s ease,
        box-shadow 0.18s ease,
        transform 0.14s ease;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      box-sizing: border-box;
    }


    button:hover {
      background: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      border-color: color-mix(in srgb, var(--primary-text-color) 22%, transparent);
    }

    button:active {
      transform: scale(0.97);
    }

    :host([active]) button {
      background: color-mix(in srgb, var(--active-color) 13%, transparent) !important;
      border-color: color-mix(in srgb, var(--active-color) 65%, transparent) !important;
      color: var(--active-color) !important;
      box-shadow: 0 0 0 1px color-mix(in srgb, var(--active-color), transparent 92%);
    }

    :host([active]:hover) button {
      filter: brightness(1.03);
    }
  `,Mt([dt({type:Boolean,reflect:!0})],Nt.prototype,"active",void 0),Mt([dt()],Nt.prototype,"label",void 0),Mt([dt()],Nt.prototype,"color",void 0),Nt=Mt([ct("whc-preset-button")],Nt);var Ut=function(t,e,r,i){var s,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,r,a):s(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a};let zt=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1}_emitValue(t){this.value=t,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}_onInput(t){const e=parseFloat(t.target.value);Number.isNaN(e)||(this.value=e)}_onChange(t){const e=parseFloat(t.target.value);Number.isNaN(e)||this._emitValue(e)}render(){const t=(this.value-this.min)/(this.max-this.min)*100;return B`
      <div class="container">
        <div class="progress" style="width: ${t}%"></div>
        <input
          type="range"
          .value=${String(this.value)}
          .min=${String(this.min)}
          .max=${String(this.max)}
          .step=${String(this.step)}
          @input=${this._onInput}
          @change=${this._onChange}
        />
      </div>
    `}};zt.styles=o`
    :host {
      display: block;
      height: 42px;
      --slider-color: var(--primary-color);
      --slider-bg: rgba(var(--rgb-primary-color), 0.2);
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      height: 100%;
      appearance: none;
      background: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      z-index: 1;
      border-radius: 12px;
    }

    input::-webkit-slider-runnable-track {
      width: 100%;
      height: 42px;
      background: var(--slider-bg);
      border-radius: 12px;
    }

    input::-webkit-slider-thumb {
      appearance: none;
      width: 12px;
      height: 42px;
      background: var(--slider-color);
      border-radius: 6px;
      border: 2px solid var(--card-background-color);
      margin-top: 0;
    }

    .progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: var(--slider-color);
      border-radius: 12px;
      pointer-events: none;
      opacity: 0.3;
    }
  `,Ut([dt({type:Number})],zt.prototype,"value",void 0),Ut([dt({type:Number})],zt.prototype,"min",void 0),Ut([dt({type:Number})],zt.prototype,"max",void 0),Ut([dt({type:Number})],zt.prototype,"step",void 0),zt=Ut([ct("whc-slider")],zt);var jt=function(t,e,r,i){var s,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,r,a):s(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a};bt(kt),bt(xt);function Wt(t){const e=String(t??"minimal").toLowerCase().trim().replace(/-/g,"_");return vt.includes(e)?e:"minimal"}console.info("%cWATER-HEATER-CARD v0.3.1","color: #4fc3f7; font-weight: bold;");let Dt=class extends at{constructor(){super(...arguments),this.uiVariant="minimal",this._extrasExpanded=!1,this._longPressConsumed=!1}static async getConfigElement(){return await Promise.resolve().then(function(){return Vt}),document.createElement("water-heater-card-editor")}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("water_heater."));return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");const e={...t,type:"custom:water-heater-card",hold_action:t.hold_action??{action:"more-info",entity:t.entity},show_slider:t.show_slider??!0,show_presets:t.show_presets??!0,show_power:t.show_power??!0,collapse_controls:t.collapse_controls??!0,controls_expanded:t.controls_expanded??!1,compact:t.compact??!1,ui_variant:Wt(t.ui_variant)};e.hold_ms="number"==typeof e.hold_ms&&e.hold_ms>=200&&e.hold_ms<=5e3?e.hold_ms:550,this._config=e,this._extrasExpanded=!0===this._config.controls_expanded,this.uiVariant=this._config.ui_variant,this._config.layout?this.layout=this._config.layout:this.removeAttribute("layout"),this._config.roundness?this.roundness=this._config.roundness:this.removeAttribute("roundness"),!1===this._config.animations?this.animations="false":this.removeAttribute("animations"),this.compact=!!this._config.compact}disconnectedCallback(){super.disconnectedCallback(),this._clearHoldTimer()}shouldUpdate(t){if(!this._config||!this.hass)return!1;if(t.has("_config"))return!0;const e=t.get("hass");return!e||(e.states[this._config.entity]!==this.hass.states[this._config.entity]||!(!this._config.keep_warm_remaining_entity||e.states[this._config.keep_warm_remaining_entity]===this.hass.states[this._config.keep_warm_remaining_entity]))}updated(t){super.updated(t);["--whc-color-heating","--whc-color-keeping_warm","--whc-color-off","--whc-color-idle","--whc-color-ready","--whc-color-fault"].forEach(t=>this.style.removeProperty(t));const e=this._config?.theme_colors;if(!e)return;const r=(t,e)=>{t&&this.style.setProperty(e,t)};r(e.heating,"--whc-color-heating"),r(e.keeping_warm,"--whc-color-keeping_warm"),r(e.off,"--whc-color-off"),r(e.idle,"--whc-color-idle"),r(e.ready,"--whc-color-ready"),r(e.fault,"--whc-color-fault")}static get styles(){return At}_clearHoldTimer(){void 0!==this._holdTimer&&(window.clearTimeout(this._holdTimer),this._holdTimer=void 0),this._holdStart=void 0}_isHoldCancelledByMovement(t){if(!this._holdStart||void 0===this._holdTimer)return!1;const e=t.clientX-this._holdStart.clientX,r=t.clientY-this._holdStart.clientY;return e*e+r*r>100}_composedPathTouchesInteractive(t){const e=t.composedPath();for(let r=0;r<e.length;r++){const i=e[r];if(i===t.currentTarget)break;if(!(i instanceof Element))continue;const s=i.tagName;if("BUTTON"===s||"INPUT"===s||"SELECT"===s||"TEXTAREA"===s||"WHC-PRESET-BUTTON"===s||"WHC-CHIP"===s||"WHC-SLIDER"===s||"WHC-SHAPE"===s)return!0;const o=i;if(o.closest?.("button,input,select,textarea,whc-preset-button,whc-chip,whc-slider,whc-shape"))return!0}return!1}_cardPointerDown(t){if(this._clearHoldTimer(),this._longPressConsumed=!1,"mouse"===t.pointerType&&0!==t.button)return;if(!this.hass||!this._config)return;if(this._composedPathTouchesInteractive(t))return;const e="number"==typeof this._config.hold_ms&&this._config.hold_ms>=200&&this._config.hold_ms<=5e3?this._config.hold_ms:550;this._holdStart={clientX:t.clientX,clientY:t.clientY},this._holdTimer=window.setTimeout(()=>{this._holdTimer=void 0,this._holdStart=void 0,this._runHoldAction().then(()=>{this._longPressConsumed=!0})},e)}_cardPointerMove(t){this._isHoldCancelledByMovement(t)&&this._clearHoldTimer()}_cardPointerEnd(t){const e=this._longPressConsumed;this._clearHoldTimer(),e&&(t.preventDefault(),this._longPressConsumed=!1)}async _runHoldAction(){const t=this._config,e=this.hass;if(!t||!e)return;const r=t.hold_action??{action:"more-info",entity:t.entity};if("none"!==r.action){if("more-info"===r.action)return i=this,s="hass-more-info",o={entityId:r.entity??t.entity},void i.dispatchEvent(new CustomEvent(s,{bubbles:!0,composed:!0,detail:o??{}}));var i,s,o;if("toggle"===r.action)return await e.callService("homeassistant","toggle",{entity_id:r.entity??t.entity}),void await this._refreshTrackedEntities();if("call-service"===r.action){const t=r.service.split(".").filter(Boolean);if(t.length>=2){const i=t.shift(),s=t.join(".");await e.callService(i,s,r.service_data??{}).catch(()=>{}),await this._refreshTrackedEntities()}return}}}async _refreshTrackedEntities(){const t=this.hass,e=this._config;if(!t||!e)return;const r=[e.entity];e.keep_warm_remaining_entity&&r.push(e.keep_warm_remaining_entity);for(const e of r)await t.callService("homeassistant","update_entity",{entity_id:e}).catch(()=>{})}async _callServiceWithRefresh(t){const e=this.hass;e&&t?.domain&&t?.service&&(await e.callService(t.domain,t.service,t.serviceData).catch(()=>{}),await this._refreshTrackedEntities())}render(){if(!this._config||!this.hass)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`
        <ha-card>
          <div class="card">
            <div class="secondary">Entity not found: ${t}</div>
          </div>
        </ha-card>
      `;if("unavailable"===e.state)return B`
        <ha-card class="unavailable">
          <div class="card">
            <div class="header-row">
              <whc-shape status="off" .icon=${this._config.icon}></whc-shape>
              <div class="info">
                <div class="primary">${this._config.name||e.attributes.friendly_name||t}</div>
                <div class="secondary">${St("state.unavailable",this.hass.locale?.language)}</div>
              </div>
            </div>
          </div>
        </ha-card>
      `;const r=function(t,e){if(e&&"auto"!==e){const t=yt.find(t=>t.id===e);if(!t)throw new Error(`No adapter registered with id "${e}"`);return t}const r=yt.find(e=>e.matches(t));if(!r)throw new Error(`No adapter matched entity "${t.entity_id}"`);return r}(e,this._config.adapter),i=this._config.keep_warm_remaining_entity?this.hass.states[this._config.keep_warm_remaining_entity]:void 0,s=r.build(e,{hass:this.hass,keepWarmRemainingEntity:i}),o=this._config.name||e.attributes.friendly_name||t,a=St(`status.${s.status}`,this.hass.locale?.language);let n=a;if("keeping_warm"===s.status){const t=s.keepWarm.remaining?.minutes,e=s.keepWarm.configured?.minutes;null==t||Number.isNaN(Number(t))?null!=e&&(n=`${a} · ${e}m`):n=`${a} · ${t}m left`}const c=`state--${s.status}`;let l=0;"heating"===s.status?l=Math.min(100,Math.max(0,s.current/s.target*100)):"keeping_warm"===s.status&&(l=100);const h=this._config.temp_presets||[60,70,80,90,100],d=this._config.keep_warm_presets||[{label:"Off",value:0},{label:"15m",value:15},{label:"30m",value:30},{label:"45m",value:45},{label:"1h",value:60}],p=!1!==this._config.show_presets,u=!1!==this._config.show_slider,f="heating"===s.status||"keeping_warm"===s.status||"ready"===s.status,m=!(!s.turnOff||!f),g=!1!==this._config.show_power&&!(!s.turnOff&&!s.turnOn),_=!(!s.turnOn||f||"off"!==s.status&&"idle"!==s.status&&"fault"!==s.status),v=Wt(this._config.ui_variant),y="full"!==v&&!1!==this._config.collapse_controls,b="chips_first"===v,w="focus_target"===v,x=this.hass.locale?.language,$=g&&m&&s.turnOff?B`
            <div class="power-row">
              <whc-chip
                .label=${St("chip.turn_off",x)}
                .icon=${"mdi:power-plug-off"}
                @click=${t=>{t.stopPropagation(),this._callServiceWithRefresh(s.turnOff())}}
              ></whc-chip>
            </div>
          `:B``,k=u?B`
          <div class="control-section">
            <whc-slider
              .value=${s.target}
              .min=${s.min}
              .max=${s.max}
              .step=${1}
              @value-changed=${t=>{t.stopPropagation(),this._callServiceWithRefresh(s.setTarget(t.detail.value))}}
            ></whc-slider>
          </div>
        `:B``,A=p&&h.length>0?B`
            <div class="control-section">
              <div class="preset-row">
                ${h.map(t=>B`
                    <whc-preset-button
                      .label="${t}°"
                      .active=${s.target===t}
                      ?active=${s.target===t}
                      .color="var(--whc-state-color)"
                      @click=${e=>{e.stopPropagation(),this._callServiceWithRefresh(s.setTarget(t))}}
                    ></whc-preset-button>
                  `)}
              </div>
            </div>
          `:B``,E=p&&d.length>0?B`
            <div class="control-section">
              <div class="section-label">${St("section.keep_warm",x)}</div>
              <div class="preset-row">
                ${d.map(t=>{const e=s.keepWarm.active&&s.keepWarm.configured?.minutes===t.value;return B`
                    <whc-preset-button
                      .label="${t.label}"
                      .active=${e}
                      ?active=${e}
                      .color="var(--whc-state-color)"
                      @click=${e=>{e.stopPropagation(),0===t.value&&s.turnOff?this._callServiceWithRefresh(s.turnOff()):s.setKeepWarmMinutes&&this._callServiceWithRefresh(s.setKeepWarmMinutes(t.value))}}
                    ></whc-preset-button>
                  `})}
              </div>
            </div>
          `:B``,S=!!(u||p||g&&m),C=b?B`${$}${k}${E}`:B`${$}${k}${A}${E}`,P=b?!!(g&&m||u||p&&d.length>0):S,T=!!(b&&p&&h.length>0),O=y&&P?B`
          <div class="extras-wrap">
            <button
              type="button"
              class="extras-toggle"
              aria-expanded=${this._extrasExpanded}
              @click=${t=>{t.stopPropagation(),this._extrasExpanded=!this._extrasExpanded}}
            >
              <span>${St("panel.expand_controls",x)}</span>
              <ha-icon
                class="extras-chevron ${this._extrasExpanded?"open":""}"
                icon="mdi:chevron-down"
              ></ha-icon>
            </button>
            ${this._extrasExpanded?B`<div class="extras-panel">${C}</div>`:""}
          </div>
        `:B``,R=!y&&S?B`
            <div class="extras-inline">
              ${b?B`${A}${C}`:C}
            </div>
          `:B``,H=w&&S?B`
            <div class="focus-target-row" aria-live="polite">
              <span class="focus-target-label">${St("panel.heating_toward",x)}</span>
              <span class="focus-target-value">${s.target}°</span>
            </div>
          `:B``,M=y&&T?A:B``;return B`
      <ha-card
        style=${_t({})}
        class=${c}
        @pointerdown=${this._cardPointerDown}
        @pointermove=${this._cardPointerMove}
        @pointerup=${this._cardPointerEnd}
        @pointercancel=${this._cardPointerEnd}
      >
        <div class="card">
          <div class="header-row">
            <whc-shape
              .status=${s.status}
              .progress=${l}
              .icon=${this._config.icon}
              .clickable=${_}
              aria-label=${(t=>t??V)(_?St("aria.shape_start",x):void 0)}
              @pointerdown=${t=>{_&&t.stopPropagation()}}
              @click=${()=>{_&&s.turnOn&&this._callServiceWithRefresh(s.turnOn())}}
            ></whc-shape>

            <div class="header-center">
              <div class="info">
                <div class="primary">${o}</div>
                <div class="secondary">${n}</div>
              </div>

              ${"heating"===s.status||"keeping_warm"===s.status?B`
                    <div class="temp-display" aria-live="polite">
                      <span class="temp-current">${s.current}°</span>
                      ${"keeping_warm"===s.status?"":B`<span class="temp-target">/ ${s.target}°</span>`}
                    </div>
                  `:B`
                    <div class="temp-display temp-display--ambient" aria-live="polite">
                      <span class="temp-current--ambient">${s.current}°</span>
                    </div>
                  `}
            </div>
          </div>

          ${H}
          ${M}
          ${O}
          ${R}
        </div>
      </ha-card>
    `}};jt([dt({attribute:!1})],Dt.prototype,"hass",void 0),jt([pt()],Dt.prototype,"_config",void 0),jt([dt({reflect:!0})],Dt.prototype,"layout",void 0),jt([dt({reflect:!0})],Dt.prototype,"roundness",void 0),jt([dt({reflect:!0})],Dt.prototype,"animations",void 0),jt([dt({type:Boolean,reflect:!0})],Dt.prototype,"compact",void 0),jt([dt({type:String,reflect:!0,attribute:"ui_variant"})],Dt.prototype,"uiVariant",void 0),jt([pt()],Dt.prototype,"_extrasExpanded",void 0),Dt=jt([ct("water-heater-card")],Dt),window.customCards=window.customCards??[],window.customCards.push({type:"water-heater-card",name:"Water Heater Card",description:"Mushroom-inspired card for water_heater entities",preview:!1});var It=function(t,e,r,i){var s,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,r,a):s(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a};const Bt=[{name:"entity",selector:{entity:{domain:"water_heater"}}},{name:"ui_variant",selector:{select:{options:[{value:"minimal",label:"Minimal — collapsible panel"},{value:"full",label:"Full — always show controls"},{value:"compact",label:"Compact — tighter spacing & type"},{value:"comfort",label:"Comfort — larger tap targets & padding"},{value:"focus_target",label:"Focus target — hero target row + panel"},{value:"chips_first",label:"Chips first — temp presets outside panel"}]}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"adapter",selector:{select:{options:[{value:"auto",label:"Auto"},{value:"standard",label:"Standard"},{value:"xiaomi_miot",label:"Xiaomi MIoT"}]}}},{name:"keep_warm_remaining_entity",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"show_slider",selector:{boolean:{}}},{name:"show_presets",selector:{boolean:{}}},{name:"show_power",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}];let Lt=class extends at{setConfig(t){this._config=t}_computeLabel(t){switch(t.name){case"entity":return"Water heater entity";case"ui_variant":return"UI variant";case"name":return"Card name";case"icon":return"Icon";case"adapter":return"Adapter";case"keep_warm_remaining_entity":return"Keep-warm timer entity (optional)";case"show_slider":return"Show temperature slider";case"show_presets":return"Show preset rows";case"show_power":return"Show stop / power (in panel)";case"compact":return"Compact (legacy)";default:return t.name??""}}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}render(){return this.hass&&this._config?B`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Bt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:B``}};It([dt({attribute:!1})],Lt.prototype,"hass",void 0),It([pt()],Lt.prototype,"_config",void 0),Lt=It([ct("water-heater-card-editor")],Lt);var Vt=Object.freeze({__proto__:null,get WaterHeaterCardEditor(){return Lt}});export{Dt as WaterHeaterCard};
