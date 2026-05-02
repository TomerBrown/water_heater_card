/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(r,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:o,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,m=g?g.emptyScript:"",f=u.reactiveElementPolyfillSupport,_=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!o(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(e)i.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of r){const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=r;const n=s.fromAttribute(e,t.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,i,r=!1,s){if(void 0!==t){const n=this.constructor;if(!1===r&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[_("elementProperties")]=new Map,w[_("finalized")]=new Map,f?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=t=>t,k=x.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+S,C=`<${P}>`,T=document,O=()=>T.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,z="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,U=/>/g,j=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),F=new WeakMap,q=T.createTreeWalker(T,129);function K(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,r=[];let s,n=2===e?"<svg>":3===e?"<math>":"",a=N;for(let e=0;e<i;e++){const i=t[e];let o,c,l=-1,h=0;for(;h<i.length&&(a.lastIndex=h,c=a.exec(i),null!==c);)h=a.lastIndex,a===N?"!--"===c[1]?a=H:void 0!==c[1]?a=U:void 0!==c[2]?(I.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=j):void 0!==c[3]&&(a=j):a===j?">"===c[0]?(a=s??N,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,o=c[1],a=void 0===c[3]?j:'"'===c[3]?D:W):a===D||a===W?a=j:a===H||a===U?a=N:(a=j,s=void 0);const d=a===j&&t[e+1].startsWith("/>")?" ":"";n+=a===N?i+C:l>=0?(r.push(o),i.slice(0,l)+E+i.slice(l)+S+d):i+S+(-2===l?e:d)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class X{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const a=t.length-1,o=this.parts,[c,l]=Y(t,e);if(this.el=X.createElement(c,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=q.nextNode())&&o.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=l[n++],i=r.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:Q}),r.removeAttribute(t)}else t.startsWith(S)&&(o.push({type:6,index:s}),r.removeAttribute(t));if(I.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],O()),q.nextNode(),o.push({type:2,index:++s});r.append(t[e],O())}}}else if(8===r.nodeType)if(r.data===P)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)o.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,r){if(e===B)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const n=R(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=J(t,s._$AS(t,e.values),s,r)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??T).importNode(e,!0);q.currentNode=r;let s=q.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new G(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new rt(s,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(s=q.nextNode(),n++)}return q.currentNode=T,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),R(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new Z(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new X(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new G(this.O(O()),this.O(O()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(void 0===s)t=J(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const r=t;let a,o;for(t=s[0],a=0;a<s.length-1;a++)o=J(this,r[i+a],e,a),o===B&&(o=this._$AH[a]),n||=!R(o)||o!==this._$AH[a],o===V?t=V:t!==V&&(t+=(o??"")+s[a+1]),this._$AH[a]=o}n&&!r&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends Q{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??V)===B)return;const i=this._$AH,r=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==V&&(i===V||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=x.litHtmlPolyfillSupport;st?.(X,G),(x.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=i?.renderBefore??null;r._$litPart$=s=new G(e.insertBefore(O(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ot=nt.litElementPolyfillSupport;ot?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ht=(t=lt,e,i)=>{const{kind:r,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,s,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const s=this[r];e.call(this,i),this.requestUpdate(r,s,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return dt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=1,gt=t=>(...e)=>({_$litDirective$:t,values:e});let mt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=gt(class extends mt{constructor(t){if(super(t),t.type!==ut||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return B}}),_t="important",vt=" !"+_t,yt=gt(class extends mt{constructor(t){if(super(t),t.type!==ut||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(vt);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?_t:""):i[t]=r}}return B}}),bt=["minimal","full","compact","comfort","focus_target","chips_first"],wt=[];
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xt(t){wt.push(t)}class $t{constructor(t,e){this.entity=t,this.ctx=e}get current(){return this.entity.attributes.current_temperature??0}get target(){return this.entity.attributes.temperature??0}get min(){return this.entity.attributes.min_temp??0}get max(){return this.entity.attributes.max_temp??100}get status(){const t=this.entity.state;return"off"===t?"off":"heating"===t||"heat"===t?"heating":this.current>=this.target-2&&this.target>0?"ready":"idle"}get keepWarm(){return{active:"heat_pump"===this.entity.state||"eco"===this.entity.state}}setTarget(t){return{domain:"water_heater",service:"set_temperature",serviceData:{entity_id:this.entity.entity_id,temperature:t}}}turnOn(){if(8&(this.entity.attributes.supported_features??0))return{domain:"water_heater",service:"turn_on",serviceData:{entity_id:this.entity.entity_id}};const t="number"==typeof this.target&&this.target>=this.min&&this.target<=this.max&&this.target>0?this.target:Math.min(this.max,Math.max(this.min,95));return this.setTarget(Math.round(t))}turnOff(){return{domain:"water_heater",service:"turn_off",serviceData:{entity_id:this.entity.entity_id}}}}const kt={id:"standard",matches:t=>t.entity_id.startsWith("water_heater.")&&!("kettle.status"in t.attributes),build:(t,e)=>new $t(t,e)};class At{constructor(t,e){this.entity=t,this.ctx=e}get current(){return this.entity.attributes.current_temperature??0}get target(){return this.entity.attributes.temperature??0}get min(){return this.entity.attributes.min_temp??40}get max(){return this.entity.attributes.max_temp??99}get status(){const t=this.entity.attributes["kettle.status"],e=this.entity.attributes["kettle.fault"];if(e&&0!==e)return"fault";switch(t){case 1:case 2:return"heating";case 4:return"keeping_warm";case 0:return"off"===this.entity.state?"off":this.current>=this.target-2&&this.target>0?"ready":"idle";default:return"idle"}}get keepWarm(){const t=!0===this.entity.attributes["kettle.auto_keep_warm"],e=this.entity.attributes["function.keep_warm_time"],i=this.entity.attributes["kettle.keep_warm_temperature"];let r;if(this.ctx.keepWarmRemainingEntity){const t=parseFloat(this.ctx.keepWarmRemainingEntity.state);isNaN(t)||(r={minutes:t})}return{active:t,remaining:r,configured:e?{minutes:e}:void 0,holdTemperature:i}}get lifted(){return!0===this.entity.attributes["function.kettle_lifting"]}get fault(){const t=this.entity.attributes["kettle.fault"];return t&&0!==t?`Error ${t}`:null}setTarget(t){return{domain:"water_heater",service:"set_temperature",serviceData:{entity_id:this.entity.entity_id,temperature:t}}}turnOn(){const t="number"==typeof this.target&&this.target>=this.min&&this.target<=this.max&&this.target>0?this.target:this.max;return this.setTarget(Math.round(t))}turnOff(){return{domain:"water_heater",service:"turn_off",serviceData:{entity_id:this.entity.entity_id}}}setKeepWarmMinutes(t){return{domain:"xiaomi_miot",service:"set_property",serviceData:{entity_id:this.entity.entity_id,field:"function.keep_warm_time",value:t}}}}const Et={id:"xiaomi_miot",matches:t=>"kettle.status"in t.attributes,build:(t,e)=>new At(t,e)},St=n`
  :host {
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
    --whc-radius-md: 8px;
    --whc-radius-card: calc(var(--ha-card-border-radius, 16px));
    /* Mushroom-like tile density: icon row + slim affordance (~44px shapes are common there). */
    --whc-padding: clamp(10px, 2vw, 14px);
    --whc-color-heating: #ff8c00;
    --whc-color-keeping_warm: #4285f4;
    --whc-color-idle: var(--primary-text-color);
    --whc-color-off: #757575;
    --whc-color-fault: var(--error-color);
    --whc-shape-size: 44px;
  }

  ha-card {
    height: 100%;
    box-sizing: border-box;
    padding: var(--whc-padding);
    border-radius: var(--whc-radius-card);
    overflow: clip;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    gap: 7px;
  }

  /* Header */
  .header-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11px;
    min-height: calc(var(--whc-shape-size) + 2px);
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
    gap: 10px;
    min-width: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1px;
    min-width: 0;
    flex: 1;
    text-align: start;
  }

  .primary {
    font-weight: 700;
    font-size: 0.9375rem;
    line-height: 1.2;
    letter-spacing: -0.015em;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .secondary {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.2;
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
    font-size: 1.05rem;
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
    margin-top: 1px;
  }

  .extras-toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 6px;
    padding: 5px 8px;
    border-radius: var(--whc-radius-md);
    border: 1px solid color-mix(in srgb, var(--primary-text-color) 11%, transparent);
    background: color-mix(in srgb, var(--primary-text-color) 5%, transparent);
    color: var(--primary-text-color);
    font: inherit;
    font-size: 0.6875rem;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 0.18s ease,
      border-color 0.18s ease;
    text-align: start;
    min-height: 30px;
    box-sizing: border-box;
  }

  .extras-toggle:hover {
    background: color-mix(in srgb, var(--primary-text-color) 9%, transparent);
    border-color: color-mix(in srgb, var(--primary-text-color) 18%, transparent);
  }

  .extras-toggle ha-icon.extras-chevron {
    flex-shrink: 0;
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .extras-toggle ha-icon.extras-chevron.open {
    transform: rotate(-180deg);
  }

  .extras-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 8px;
    margin-top: 2px;
    border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 8%, transparent);
    animation: whcExtrasIn 0.22s ease;
  }

  .focus-target-row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    padding: 7px 10px;
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
    font-size: 1.55rem;
    font-weight: 700;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
  }

  @keyframes whcExtrasIn {
    from {
      opacity: 0;
      transform: translateY(-3px);
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
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .temp-target {
    font-size: 0.8125rem;
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
    gap: 5px;
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
    gap: 14px;
  }

  :host([layout="dense"]) .card {
    gap: 5px;
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
    --whc-padding: 8px 10px;
    --whc-shape-size: 40px;
  }

  :host([ui_variant="compact"]) .card {
    gap: 5px;
  }

  :host([ui_variant="compact"]) .primary {
    font-size: 0.875rem;
  }

  :host([ui_variant="compact"]) .temp-current,
  :host([ui_variant="compact"]) .focus-target-value {
    font-size: 1.35rem;
  }

  :host([ui_variant="compact"]) .extras-toggle {
    min-height: 28px;
    padding: 3px 6px;
    font-size: 0.625rem;
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

  /* Pending: command sent, waiting for entity to reflect new hardware state */
  @keyframes whc-pending-scan {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }

  @keyframes whc-shape-pending {
    0%,
    100% {
      transform: scale(1);
      filter: brightness(1);
    }
    50% {
      transform: scale(1.015);
      filter: brightness(1.05);
    }
  }

  @keyframes whc-label-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.82;
    }
  }

  :host([data-pending]) ha-card.whc-card--pending {
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--primary-color, rgb(92, 158, 255)) 42%, transparent),
      var(--ha-card-box-shadow, 0 4px 24px rgba(0, 0, 0, 0.06));
    transition: box-shadow 0.25s ease;
  }

  :host([data-pending]) .card {
    position: relative;
  }

  :host([data-pending]) .card::after {
    content: "";
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 0;
    height: 2px;
    border-radius: 99px;
    pointer-events: none;
    opacity: 0.58;
    background: linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, var(--primary-color, rgb(92, 158, 255)) 45%, transparent) 48%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: whc-pending-scan 2.4s ease-in-out infinite;
  }

  :host([data-pending]) .header-row whc-shape {
    animation: whc-shape-pending 1.75s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    will-change: transform, filter;
  }

  .secondary.secondary--pending {
    color: color-mix(in srgb, var(--primary-color, rgb(92, 158, 255)) 92%, var(--primary-text-color));
    font-weight: 650;
  }

  .info .secondary.secondary--pending {
    animation: whc-label-pulse 1.45s ease-in-out infinite;
  }

  ha-card.unavailable {
    opacity: 0.88;
  }
`;const Pt={en:{"status.off":"Off","status.idle":"Idle","status.heating":"Heating","status.boiling":"Boiling","status.keeping_warm":"Keep warm","status.ready":"Ready","status.fault":"Error","chip.power":"Power","chip.turn_on":"Turn on","chip.turn_off":"Turn off","panel.expand_controls":"Temperature & keep warm","panel.heating_toward":"Target","section.keep_warm":"Keep warm","aria.shape_start":"Start heating to target temperature","chip.lifted":"Lifted","chip.keep_warm_remaining":"{remaining} left","chip.keep_warm_configured":"Keep warm: {duration}","preset.boil":"Boil","preset.tea":"Tea","preset.coffee":"Coffee","preset.baby":"Baby","state.unavailable":"Unavailable","state.pending":"Updating…","error.generic":"Error {code}"},he:{"status.off":"כבוי","status.idle":"במצב המתנה","status.heating":"מחמם","status.boiling":"רותח","status.keeping_warm":"שמירה על חום","status.ready":"מוכן","status.fault":"תקלה","chip.power":"הפעלה","chip.turn_on":"להדליק","chip.turn_off":"לכבות","panel.expand_controls":"טמפרטורה ושמירת חום","panel.heating_toward":"יעד","section.keep_warm":"שמירת חום","aria.shape_start":"התחל חימום ליעד הנוכחי","chip.lifted":"הורם","chip.keep_warm_remaining":"{remaining} נותרו","chip.keep_warm_configured":"שמירת חום: {duration}","preset.boil":"רתיחה","preset.tea":"תה","preset.coffee":"קפה","preset.baby":"תינוק","state.unavailable":"לא זמין","state.pending":"מעדכן…","error.generic":"שגיאה {code}"}};function Ct(t,e,i){const r=e?e.toLowerCase().split("-")[0]:"en";return(Pt[r]??Pt.en)[t]??Pt.en[t]??t}const Tt={off:"var(--whc-color-off, var(--disabled-color))",idle:"var(--whc-color-idle, var(--primary-text-color))",heating:"var(--whc-color-heating, #ff9800)",keeping_warm:"var(--whc-color-keeping_warm, #2196f3)",ready:"var(--whc-color-ready, var(--success-color))",fault:"var(--whc-color-fault, var(--error-color))"},Ot={off:"mdi:kettle-off",idle:"mdi:kettle",heating:"mdi:kettle-steam",keeping_warm:"mdi:kettle-steam",ready:"mdi:kettle",fault:"mdi:kettle-alert"};var Rt=function(t,e,i,r){var s,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let Mt=class extends at{constructor(){super(...arguments),this.progress=0,this.clickable=!1}updated(t){super.updated(t),t.has("clickable")&&(this.clickable?(this.setAttribute("role","button"),this.setAttribute("tabindex","0")):(this.removeAttribute("role"),this.removeAttribute("tabindex")))}render(){const t=this.status?Tt[this.status]:"var(--disabled-color)",e=this.icon||(this.status?Ot[this.status]:"mdi:kettle"),i=22.5,r=2*Math.PI*i,s=!1===Number.isFinite(this.progress)?r:r-this.progress/100*r;this.style.setProperty("--shape-color",t);const n="heating"===this.status||"keeping_warm"===this.status,a="heating"===this.status||"keeping_warm"===this.status;return this.classList.toggle("animated",a),L`
      <div class="shape-background"></div>
      ${n?L`
            <svg viewBox="0 0 52 52" aria-hidden="true">
              <circle class="ring-bg" cx="26" cy="26" r="${i}"></circle>
              <circle
                class="ring-progress"
                cx="26"
                cy="26"
                r="${i}"
                stroke-dasharray="${r}"
                stroke-dashoffset="${s}"
              ></circle>
            </svg>
          `:""}
      <ha-icon .icon=${e}></ha-icon>
    `}};Mt.styles=n`
    :host {
      --shape-color: var(--disabled-color);
      box-sizing: border-box;
      width: var(--whc-shape-size, 44px);
      height: var(--whc-shape-size, 44px);
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
      --mdc-icon-size: calc(var(--whc-shape-size, 44px) * 0.48);
      z-index: 1;
    }

    @keyframes shape-steam {
      0%,
      100% {
        transform: scale(1) translateY(0);
      }
      50% {
        transform: scale(1.012) translateY(-0.6px);
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

    :host(.animated) .shape-background {
      animation: shape-steam 3.2s ease-in-out infinite;
    }
  `,Rt([dt()],Mt.prototype,"icon",void 0),Rt([dt()],Mt.prototype,"status",void 0),Rt([dt({type:Number})],Mt.prototype,"progress",void 0),Rt([dt({type:Boolean,reflect:!0})],Mt.prototype,"clickable",void 0),Mt=Rt([ct("whc-shape")],Mt);var zt=function(t,e,i,r){var s,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let Nt=class extends at{constructor(){super(...arguments),this.disabled=!1}render(){return L`
      ${this.icon?L`<ha-icon .icon=${this.icon}></ha-icon>`:""}
      ${this.label?L`<span class="label">${this.label}</span>`:""}
    `}};Nt.styles=n`
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
  `,zt([dt()],Nt.prototype,"icon",void 0),zt([dt()],Nt.prototype,"label",void 0),zt([dt({type:Boolean})],Nt.prototype,"disabled",void 0),Nt=zt([ct("whc-chip")],Nt);var Ht=function(t,e,i,r){var s,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let Ut=class extends at{constructor(){super(...arguments),this.active=!1,this.label="",this.color="var(--primary-text-color)"}render(){return this.style.setProperty("--active-color",this.color),L`
      <button type="button" part="button">
        ${this.label}
      </button>
    `}};Ut.styles=n`
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
  `,Ht([dt({type:Boolean,reflect:!0})],Ut.prototype,"active",void 0),Ht([dt()],Ut.prototype,"label",void 0),Ht([dt()],Ut.prototype,"color",void 0),Ut=Ht([ct("whc-preset-button")],Ut);var jt=function(t,e,i,r){var s,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let Wt=class extends at{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1}_emitValue(t){this.value=t,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}_onInput(t){const e=parseFloat(t.target.value);Number.isNaN(e)||(this.value=e)}_onChange(t){const e=parseFloat(t.target.value);Number.isNaN(e)||this._emitValue(e)}render(){const t=(this.value-this.min)/(this.max-this.min)*100;return L`
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
    `}};Wt.styles=n`
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
  `,jt([dt({type:Number})],Wt.prototype,"value",void 0),jt([dt({type:Number})],Wt.prototype,"min",void 0),jt([dt({type:Number})],Wt.prototype,"max",void 0),jt([dt({type:Number})],Wt.prototype,"step",void 0),Wt=jt([ct("whc-slider")],Wt);var Dt=function(t,e,i,r){var s,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};xt(Et),xt(kt);function It(t){const e=String(t??"minimal").toLowerCase().trim().replace(/-/g,"_");return bt.includes(e)?e:"minimal"}console.info("%cWATER-HEATER-CARD v0.3.5","color: #4fc3f7; font-weight: bold;");let Lt=class extends at{constructor(){super(...arguments),this.uiVariant="minimal",this._extrasExpanded=!1,this._actionPending=!1,this._longPressConsumed=!1}static async getConfigElement(){return await Promise.resolve().then(function(){return qt}),document.createElement("water-heater-card-editor")}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("water_heater."));return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");const e={...t,type:"custom:water-heater-card",hold_action:t.hold_action??{action:"more-info",entity:t.entity},show_slider:t.show_slider??!0,show_presets:t.show_presets??!0,show_power:t.show_power??!0,collapse_controls:t.collapse_controls??!0,controls_expanded:t.controls_expanded??!1,compact:t.compact??!1,ui_variant:It(t.ui_variant)};e.hold_ms="number"==typeof e.hold_ms&&e.hold_ms>=200&&e.hold_ms<=5e3?e.hold_ms:550,this._config=e,this._extrasExpanded=!0===this._config.controls_expanded,this.uiVariant=this._config.ui_variant,this._config.layout?this.layout=this._config.layout:this.removeAttribute("layout"),this._config.roundness?this.roundness=this._config.roundness:this.removeAttribute("roundness"),!1===this._config.animations?this.animations="false":this.removeAttribute("animations"),this.compact=!!this._config.compact}disconnectedCallback(){this._clearHoldTimer(),this._clearPendingTimers(),super.disconnectedCallback()}shouldUpdate(t){if(!this._config||!this.hass)return!1;if(t.has("_config"))return!0;const e=t.get("hass");return!e||(e.states[this._config.entity]!==this.hass.states[this._config.entity]||!(!this._config.keep_warm_remaining_entity||e.states[this._config.keep_warm_remaining_entity]===this.hass.states[this._config.keep_warm_remaining_entity]))}updated(t){super.updated(t);["--whc-color-heating","--whc-color-keeping_warm","--whc-color-off","--whc-color-idle","--whc-color-ready","--whc-color-fault"].forEach(t=>this.style.removeProperty(t));const e=this._config?.theme_colors;if(e){const t=(t,e)=>{t&&this.style.setProperty(e,t)};t(e.heating,"--whc-color-heating"),t(e.keeping_warm,"--whc-color-keeping_warm"),t(e.off,"--whc-color-off"),t(e.idle,"--whc-color-idle"),t(e.ready,"--whc-color-ready"),t(e.fault,"--whc-color-fault")}this._maybeClearPendingFromEntity(),this.toggleAttribute("data-pending",this._actionPending)}static get styles(){return St}_clearHoldTimer(){void 0!==this._holdTimer&&(window.clearTimeout(this._holdTimer),this._holdTimer=void 0),this._holdStart=void 0}_clearPendingTimers(){void 0!==this._pendingTimer&&(window.clearTimeout(this._pendingTimer),this._pendingTimer=void 0)}_entityReactiveSignature(t){if(!t)return"";const e=t.attributes??{},i={st:t.state,tp:e.temperature,ct:e.current_temperature,ks:e["kettle.status"],kaw:e["kettle.auto_keep_warm"],kwt:e["function.keep_warm_time"],kf:e["kettle.fault"]};return JSON.stringify(i)}_pendingContextSignature(){const t=this._config,e=this.hass;if(!t||!e)return"";const i=this._entityReactiveSignature(e.states[t.entity]);if(!t.keep_warm_remaining_entity)return i;const r=e.states[t.keep_warm_remaining_entity];return`${i}|kw:${r?.state??""}`}_beginPending(){this._pendingSnapshot=this._pendingContextSignature(),this._clearPendingTimers(),this._actionPending=!0,this._pendingTimer=window.setTimeout(()=>{this._pendingTimer=void 0,this._pendingSnapshot=void 0,this._actionPending=!1},34e3)}_maybeClearPendingFromEntity(){if(!this._actionPending||void 0===this._pendingSnapshot||!this._config||!this.hass)return;this._pendingContextSignature()!==this._pendingSnapshot&&(this._clearPendingTimers(),this._pendingSnapshot=void 0,this._actionPending=!1)}_isHoldCancelledByMovement(t){if(!this._holdStart||void 0===this._holdTimer)return!1;const e=t.clientX-this._holdStart.clientX,i=t.clientY-this._holdStart.clientY;return e*e+i*i>100}_composedPathTouchesInteractive(t){const e=t.composedPath();for(let i=0;i<e.length;i++){const r=e[i];if(r===t.currentTarget)break;if(!(r instanceof Element))continue;const s=r.tagName;if("BUTTON"===s||"INPUT"===s||"SELECT"===s||"TEXTAREA"===s||"WHC-PRESET-BUTTON"===s||"WHC-CHIP"===s||"WHC-SLIDER"===s||"WHC-SHAPE"===s)return!0;const n=r;if(n.closest?.("button,input,select,textarea,whc-preset-button,whc-chip,whc-slider,whc-shape"))return!0}return!1}_cardPointerDown(t){if(this._clearHoldTimer(),this._longPressConsumed=!1,"mouse"===t.pointerType&&0!==t.button)return;if(!this.hass||!this._config)return;if(this._composedPathTouchesInteractive(t))return;const e="number"==typeof this._config.hold_ms&&this._config.hold_ms>=200&&this._config.hold_ms<=5e3?this._config.hold_ms:550;this._holdStart={clientX:t.clientX,clientY:t.clientY},this._holdTimer=window.setTimeout(()=>{this._holdTimer=void 0,this._holdStart=void 0,this._runHoldAction().then(()=>{this._longPressConsumed=!0})},e)}_cardPointerMove(t){this._isHoldCancelledByMovement(t)&&this._clearHoldTimer()}_cardPointerEnd(t){const e=this._longPressConsumed;this._clearHoldTimer(),e&&(t.preventDefault(),this._longPressConsumed=!1)}async _runHoldAction(){const t=this._config,e=this.hass;if(!t||!e)return;const i=t.hold_action??{action:"more-info",entity:t.entity};if("none"!==i.action){if("more-info"===i.action)return r=this,s="hass-more-info",n={entityId:i.entity??t.entity},void r.dispatchEvent(new CustomEvent(s,{bubbles:!0,composed:!0,detail:n??{}}));var r,s,n;if("toggle"===i.action)return this._beginPending(),await e.callService("homeassistant","toggle",{entity_id:i.entity??t.entity}),void await this._refreshTrackedEntities();if("call-service"===i.action){const t=i.service.split(".").filter(Boolean);if(t.length>=2){const r=t.shift(),s=t.join(".");this._beginPending(),await e.callService(r,s,i.service_data??{}).catch(()=>{}),await this._refreshTrackedEntities()}return}}}async _refreshTrackedEntities(){const t=this.hass,e=this._config;if(!t||!e)return;const i=[e.entity];e.keep_warm_remaining_entity&&i.push(e.keep_warm_remaining_entity);for(const e of i)await t.callService("homeassistant","update_entity",{entity_id:e}).catch(()=>{})}async _callServiceWithRefresh(t){const e=this.hass;e&&t?.domain&&t?.service&&(this._beginPending(),await e.callService(t.domain,t.service,t.serviceData).catch(()=>{}),await this._refreshTrackedEntities())}render(){if(!this._config||!this.hass)return L``;const t=this._config.entity,e=this.hass.states[t];if(!e)return L`
        <ha-card>
          <div class="card">
            <div class="secondary">Entity not found: ${t}</div>
          </div>
        </ha-card>
      `;if("unavailable"===e.state)return L`
        <ha-card class="unavailable">
          <div class="card">
            <div class="header-row">
              <whc-shape status="off" .icon=${this._config.icon}></whc-shape>
              <div class="info">
                <div class="primary">${this._config.name||e.attributes.friendly_name||t}</div>
                <div class="secondary">${Ct("state.unavailable",this.hass.locale?.language)}</div>
              </div>
            </div>
          </div>
        </ha-card>
      `;const i=function(t,e){if(e&&"auto"!==e){const t=wt.find(t=>t.id===e);if(!t)throw new Error(`No adapter registered with id "${e}"`);return t}const i=wt.find(e=>e.matches(t));if(!i)throw new Error(`No adapter matched entity "${t.entity_id}"`);return i}(e,this._config.adapter),r=this._config.keep_warm_remaining_entity?this.hass.states[this._config.keep_warm_remaining_entity]:void 0,s=i.build(e,{hass:this.hass,keepWarmRemainingEntity:r}),n=this._config.name||e.attributes.friendly_name||t,a=Ct(`status.${s.status}`,this.hass.locale?.language);let o=a;if("keeping_warm"===s.status){const t=s.keepWarm.remaining?.minutes,e=s.keepWarm.configured?.minutes;null==t||Number.isNaN(Number(t))?null!=e&&(o=`${a} · ${e}m`):o=`${a} · ${t}m left`}const c=`state--${s.status}`;let l=0;"heating"===s.status?l=Math.min(100,Math.max(0,s.current/s.target*100)):"keeping_warm"===s.status&&(l=100);const h=this._config.temp_presets||[60,70,80,90,100],d=this._config.keep_warm_presets||[{label:"Off",value:0},{label:"15m",value:15},{label:"30m",value:30},{label:"45m",value:45},{label:"1h",value:60}],p=!1!==this._config.show_presets,u=!1!==this._config.show_slider,g="heating"===s.status||"keeping_warm"===s.status||"ready"===s.status,m=!(!s.turnOff||!g),f=!1!==this._config.show_power&&!(!s.turnOff&&!s.turnOn),_=!(!s.turnOn||g||"off"!==s.status&&"idle"!==s.status&&"fault"!==s.status),v=It(this._config.ui_variant),y="full"!==v&&!1!==this._config.collapse_controls,b="chips_first"===v,w="focus_target"===v,x=this.hass.locale?.language,$=this._actionPending?Ct("state.pending",x):o,k=f&&m&&s.turnOff?L`
            <div class="power-row">
              <whc-chip
                .label=${Ct("chip.turn_off",x)}
                .icon=${"mdi:power-plug-off"}
                @click=${t=>{t.stopPropagation(),this._callServiceWithRefresh(s.turnOff())}}
              ></whc-chip>
            </div>
          `:L``,A=u?L`
          <div class="control-section">
            <whc-slider
              .value=${s.target}
              .min=${s.min}
              .max=${s.max}
              .step=${1}
              @value-changed=${t=>{t.stopPropagation(),this._callServiceWithRefresh(s.setTarget(t.detail.value))}}
            ></whc-slider>
          </div>
        `:L``,E=p&&h.length>0?L`
            <div class="control-section">
              <div class="preset-row">
                ${h.map(t=>L`
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
          `:L``,S=p&&d.length>0?L`
            <div class="control-section">
              <div class="section-label">${Ct("section.keep_warm",x)}</div>
              <div class="preset-row">
                ${d.map(t=>{const e=s.keepWarm.active&&s.keepWarm.configured?.minutes===t.value;return L`
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
          `:L``,P=!!(u||p||f&&m),C=b?L`${k}${A}${S}`:L`${k}${A}${E}${S}`,T=b?!!(f&&m||u||p&&d.length>0):P,O=!!(b&&p&&h.length>0),R=y&&T?L`
          <div class="extras-wrap">
            <button
              type="button"
              class="extras-toggle"
              aria-expanded=${this._extrasExpanded}
              @click=${t=>{t.stopPropagation(),this._extrasExpanded=!this._extrasExpanded}}
            >
              <span>${Ct("panel.expand_controls",x)}</span>
              <ha-icon
                class="extras-chevron ${this._extrasExpanded?"open":""}"
                icon="mdi:chevron-down"
              ></ha-icon>
            </button>
            ${this._extrasExpanded?L`<div class="extras-panel">${C}</div>`:""}
          </div>
        `:L``,M=!y&&P?L`
            <div class="extras-inline">
              ${b?L`${E}${C}`:C}
            </div>
          `:L``,z=w&&P?L`
            <div class="focus-target-row" aria-live="polite">
              <span class="focus-target-label">${Ct("panel.heating_toward",x)}</span>
              <span class="focus-target-value">${s.target}°</span>
            </div>
          `:L``,N=y&&O?E:L``;return L`
      <ha-card
        style=${yt({})}
        class=${ft({[c]:!0,"whc-card--pending":this._actionPending})}
        aria-busy=${this._actionPending?"true":"false"}
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
              aria-label=${(t=>t??V)(_?Ct("aria.shape_start",x):void 0)}
              @pointerdown=${t=>{_&&t.stopPropagation()}}
              @click=${()=>{_&&s.turnOn&&this._callServiceWithRefresh(s.turnOn())}}
            ></whc-shape>

            <div class="header-center">
              <div class="info">
                <div class="primary">${n}</div>
                <div class=${ft({secondary:!0,"secondary--pending":this._actionPending})}>
                  ${$}
                </div>
              </div>

              ${"heating"===s.status||"keeping_warm"===s.status?L`
                    <div class="temp-display" aria-live="polite">
                      <span class="temp-current">${s.current}°</span>
                      ${"keeping_warm"===s.status?"":L`<span class="temp-target">/ ${s.target}°</span>`}
                    </div>
                  `:L`
                    <div class="temp-display temp-display--ambient" aria-live="polite">
                      <span class="temp-current--ambient">${s.current}°</span>
                    </div>
                  `}
            </div>
          </div>

          ${z}
          ${N}
          ${R}
          ${M}
        </div>
      </ha-card>
    `}};Dt([dt({attribute:!1})],Lt.prototype,"hass",void 0),Dt([pt()],Lt.prototype,"_config",void 0),Dt([dt({reflect:!0})],Lt.prototype,"layout",void 0),Dt([dt({reflect:!0})],Lt.prototype,"roundness",void 0),Dt([dt({reflect:!0})],Lt.prototype,"animations",void 0),Dt([dt({type:Boolean,reflect:!0})],Lt.prototype,"compact",void 0),Dt([dt({type:String,reflect:!0,attribute:"ui_variant"})],Lt.prototype,"uiVariant",void 0),Dt([pt()],Lt.prototype,"_extrasExpanded",void 0),Dt([pt()],Lt.prototype,"_actionPending",void 0),Lt=Dt([ct("water-heater-card")],Lt),window.customCards=window.customCards??[],window.customCards.push({type:"water-heater-card",name:"Water Heater Card",description:"Mushroom-inspired card for water_heater entities",preview:!1});var Bt=function(t,e,i,r){var s,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const Vt=[{name:"entity",selector:{entity:{domain:"water_heater"}}},{name:"ui_variant",selector:{select:{options:[{value:"minimal",label:"Minimal — collapsible panel"},{value:"full",label:"Full — always show controls"},{value:"compact",label:"Compact — tighter spacing & type"},{value:"comfort",label:"Comfort — larger tap targets & padding"},{value:"focus_target",label:"Focus target — hero target row + panel"},{value:"chips_first",label:"Chips first — temp presets outside panel"}]}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"adapter",selector:{select:{options:[{value:"auto",label:"Auto"},{value:"standard",label:"Standard"},{value:"xiaomi_miot",label:"Xiaomi MIoT"}]}}},{name:"keep_warm_remaining_entity",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"show_slider",selector:{boolean:{}}},{name:"show_presets",selector:{boolean:{}}},{name:"show_power",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}];let Ft=class extends at{setConfig(t){this._config=t}_computeLabel(t){switch(t.name){case"entity":return"Water heater entity";case"ui_variant":return"UI variant";case"name":return"Card name";case"icon":return"Icon";case"adapter":return"Adapter";case"keep_warm_remaining_entity":return"Keep-warm timer entity (optional)";case"show_slider":return"Show temperature slider";case"show_presets":return"Show preset rows";case"show_power":return"Show stop / power (in panel)";case"compact":return"Compact (legacy)";default:return t.name??""}}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}render(){return this.hass&&this._config?L`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Vt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:L``}};Bt([dt({attribute:!1})],Ft.prototype,"hass",void 0),Bt([pt()],Ft.prototype,"_config",void 0),Ft=Bt([ct("water-heater-card-editor")],Ft);var qt=Object.freeze({__proto__:null,get WaterHeaterCardEditor(){return Ft}});export{Lt as WaterHeaterCard};
