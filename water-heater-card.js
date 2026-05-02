/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const r=this.t;if(e&&void 0===t){const e=void 0!==r&&1===r.length;e&&(t=i.get(r)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(r,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new s(i,t,r)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,m=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},_=(t,e)=>!a(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);s?.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,i)=>{if(e)r.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const s=(void 0!==r.converter?.toAttribute?r.converter:v).toAttribute(e,r.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i;const o=s.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,r,i=!1,s){if(void 0!==t){const o=this.constructor;if(!1===i&&(s=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??_)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,r,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[y("elementProperties")]=new Map,b[y("finalized")]=new Map,g?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,x=t=>t,A=$.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,P=`<${C}>`,O=document,R=()=>O.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,T="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,H=/>/g,z=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,W=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),I=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),K=new WeakMap,V=O.createTreeWalker(O,129);function F(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Y=(t,e)=>{const r=t.length-1,i=[];let s,o=2===e?"<svg>":3===e?"<math>":"",n=j;for(let e=0;e<r;e++){const r=t[e];let a,c,l=-1,h=0;for(;h<r.length&&(n.lastIndex=h,c=n.exec(r),null!==c);)h=n.lastIndex,n===j?"!--"===c[1]?n=N:void 0!==c[1]?n=H:void 0!==c[2]?(L.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=z):void 0!==c[3]&&(n=z):n===z?">"===c[0]?(n=s??j,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?z:'"'===c[3]?W:D):n===W||n===D?n=z:n===N||n===H?n=j:(n=z,s=void 0);const d=n===z&&t[e+1].startsWith("/>")?" ":"";o+=n===j?r+P:l>=0?(i.push(a),r.slice(0,l)+E+r.slice(l)+S+d):r+S+(-2===l?e:d)}return[F(t,o+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,o=0;const n=t.length-1,a=this.parts,[c,l]=Y(t,e);if(this.el=Z.createElement(c,r),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[o++],r=i.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:r,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?rt:Q}),i.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],R()),V.nextNode(),a.push({type:2,index:++s});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const r=O.createElement("template");return r.innerHTML=t,r}}function J(t,e,r=t,i){if(e===I)return e;let s=void 0!==i?r._$Co?.[i]:r._$Cl;const o=U(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=s:r._$Cl=s),void 0!==s&&(e=J(t,s._$AS(t,e.values),s,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);V.currentNode=i;let s=V.nextNode(),o=0,n=0,a=r[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new G(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new it(s,this,t)),this._$AV.push(e),a=r[++n]}o!==a?.index&&(s=V.nextNode(),o++)}return V.currentNode=O,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),U(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Z.createElement(F(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Z(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new G(this.O(R()),this.O(R()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=q}_$AI(t,e=this,r,i){const s=this.strings;let o=!1;if(void 0===s)t=J(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const i=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=J(this,i[r+n],e,n),a===I&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class rt extends Q{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??q)===I)return;const r=this._$AH,i=t===q&&r!==q||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==q&&(r===q||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(Z,G),($.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=r?.renderBefore??null;i._$litPart$=s=new G(e.insertBefore(R(),t),t,void 0,r??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:_},ht=(t=lt,e,r)=>{const{kind:i,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const s=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,s,t,!0,r)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=r;return function(r){const s=this[i];e.call(this,r),this.requestUpdate(i,s,t,!0,r)}}throw Error("Unsupported decorator location: "+i)};
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
 */const mt="important",gt=" !"+mt,yt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ft{constructor(t){if(super(t),t.type!==ut||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const i=t[r];return null==i?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?r.removeProperty(t):r[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(gt);t.includes("-")||e?r.setProperty(t,e?i.slice(0,-11):i,e?mt:""):r[t]=i}}return I}}),vt=[];function _t(t){vt.push(t)}class wt{constructor(t,e){this.entity=t,this.ctx=e}get current(){return this.entity.attributes.current_temperature??0}get target(){return this.entity.attributes.temperature??0}get min(){return this.entity.attributes.min_temp??0}get max(){return this.entity.attributes.max_temp??100}get status(){const t=this.entity.state;return"off"===t?"off":"heating"===t||"heat"===t?"heating":this.current>=this.target-2&&this.target>0?"ready":"idle"}get keepWarm(){return{active:"heat_pump"===this.entity.state||"eco"===this.entity.state}}setTarget(t){return{domain:"water_heater",service:"set_temperature",serviceData:{entity_id:this.entity.entity_id,temperature:t}}}turnOn(){return{domain:"water_heater",service:"turn_on",serviceData:{entity_id:this.entity.entity_id}}}turnOff(){return{domain:"water_heater",service:"turn_off",serviceData:{entity_id:this.entity.entity_id}}}}const bt={id:"standard",matches:t=>t.entity_id.startsWith("water_heater.")&&!("kettle.status"in t.attributes),build:(t,e)=>new wt(t,e)};class $t{constructor(t,e){this.entity=t,this.ctx=e}get current(){return this.entity.attributes.current_temperature??0}get target(){return this.entity.attributes.temperature??0}get min(){return this.entity.attributes.min_temp??40}get max(){return this.entity.attributes.max_temp??99}get status(){const t=this.entity.attributes["kettle.status"],e=this.entity.attributes["kettle.fault"];if(e&&0!==e)return"fault";switch(t){case 1:case 2:return"heating";case 4:return"keeping_warm";case 0:return"off"===this.entity.state?"off":this.current>=this.target-2&&this.target>0?"ready":"idle";default:return"idle"}}get keepWarm(){const t=!0===this.entity.attributes["kettle.auto_keep_warm"],e=this.entity.attributes["function.keep_warm_time"],r=this.entity.attributes["kettle.keep_warm_temperature"];let i;if(this.ctx.keepWarmRemainingEntity){const t=parseFloat(this.ctx.keepWarmRemainingEntity.state);isNaN(t)||(i={minutes:t})}return{active:t,remaining:i,configured:e?{minutes:e}:void 0,holdTemperature:r}}get lifted(){return!0===this.entity.attributes["function.kettle_lifting"]}get fault(){const t=this.entity.attributes["kettle.fault"];return t&&0!==t?`Error ${t}`:null}setTarget(t){return{domain:"water_heater",service:"set_temperature",serviceData:{entity_id:this.entity.entity_id,temperature:t}}}turnOn(){return{domain:"water_heater",service:"turn_on",serviceData:{entity_id:this.entity.entity_id}}}turnOff(){return{domain:"water_heater",service:"turn_off",serviceData:{entity_id:this.entity.entity_id}}}setKeepWarmMinutes(t){return{domain:"xiaomi_miot",service:"set_property",serviceData:{entity_id:this.entity.entity_id,field:"function.keep_warm_time",value:t}}}}const xt={id:"xiaomi_miot",matches:t=>"kettle.status"in t.attributes,build:(t,e)=>new $t(t,e)},At=o`
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

  .menu {
    flex-shrink: 0;
    color: var(--secondary-text-color);
    opacity: 0.55;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    margin: -4px;
    border-radius: 8px;
    transition:
      opacity 0.18s ease,
      background-color 0.18s ease;
  }

  .menu:hover {
    opacity: 1;
    background: rgba(127, 127, 127, 0.08);
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

  ha-card.unavailable {
    opacity: 0.88;
  }
`;const kt={en:{"status.off":"Off","status.idle":"Idle","status.heating":"Heating","status.boiling":"Boiling","status.keeping_warm":"Keep warm","status.ready":"Ready","status.fault":"Error","chip.power":"Power","chip.lifted":"Lifted","chip.keep_warm_remaining":"{remaining} left","chip.keep_warm_configured":"Keep warm: {duration}","preset.boil":"Boil","preset.tea":"Tea","preset.coffee":"Coffee","preset.baby":"Baby","state.unavailable":"Unavailable","error.generic":"Error {code}"},he:{"status.off":"כבוי","status.idle":"במצב המתנה","status.heating":"מחמם","status.boiling":"רותח","status.keeping_warm":"שמירה על חום","status.ready":"מוכן","status.fault":"תקלה","chip.power":"הפעלה","chip.lifted":"הורם","chip.keep_warm_remaining":"{remaining} נותרו","chip.keep_warm_configured":"שמירת חום: {duration}","preset.boil":"רתיחה","preset.tea":"תה","preset.coffee":"קפה","preset.baby":"תינוק","state.unavailable":"לא זמין","error.generic":"שגיאה {code}"}};function Et(t,e,r){const i=e?e.toLowerCase().split("-")[0]:"en";return(kt[i]??kt.en)[t]??kt.en[t]??t}const St={off:"var(--whc-color-off, var(--disabled-color))",idle:"var(--whc-color-idle, var(--primary-text-color))",heating:"var(--whc-color-heating, #ff9800)",keeping_warm:"var(--whc-color-keeping_warm, #2196f3)",ready:"var(--whc-color-ready, var(--success-color))",fault:"var(--whc-color-fault, var(--error-color))"},Ct={off:"mdi:kettle-off",idle:"mdi:kettle",heating:"mdi:kettle-steam",keeping_warm:"mdi:kettle-steam",ready:"mdi:kettle",fault:"mdi:kettle-alert"};var Pt=function(t,e,r,i){var s,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ot=class extends nt{constructor(){super(...arguments),this.progress=0}render(){const t=this.status?St[this.status]:"var(--disabled-color)",e=this.icon||(this.status?Ct[this.status]:"mdi:kettle"),r=22.5,i=2*Math.PI*r,s=!1===Number.isFinite(this.progress)?i:i-this.progress/100*i;this.style.setProperty("--shape-color",t);const o="heating"===this.status||"keeping_warm"===this.status,n="heating"===this.status||"keeping_warm"===this.status;return this.classList.toggle("animated",n),B`
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

    :host(.animated) ha-icon {
      animation: shape-steam 2.25s ease-in-out infinite;
    }
  `,Pt([dt()],Ot.prototype,"icon",void 0),Pt([dt()],Ot.prototype,"status",void 0),Pt([dt({type:Number})],Ot.prototype,"progress",void 0),Ot=Pt([ct("whc-shape")],Ot);var Rt=function(t,e,r,i){var s,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ut=class extends nt{constructor(){super(...arguments),this.disabled=!1}render(){return B`
      ${this.icon?B`<ha-icon .icon=${this.icon}></ha-icon>`:""}
      ${this.label?B`<span class="label">${this.label}</span>`:""}
    `}};Ut.styles=o`
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
  `,Rt([dt()],Ut.prototype,"icon",void 0),Rt([dt()],Ut.prototype,"label",void 0),Rt([dt({type:Boolean})],Ut.prototype,"disabled",void 0),Ut=Rt([ct("whc-chip")],Ut);var Mt=function(t,e,r,i){var s,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Tt=class extends nt{constructor(){super(...arguments),this.active=!1,this.label="",this.color="var(--primary-text-color)"}render(){return this.style.setProperty("--active-color",this.color),B`
      <button type="button" part="button">
        ${this.label}
      </button>
    `}};Tt.styles=o`
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
  `,Mt([dt({type:Boolean,reflect:!0})],Tt.prototype,"active",void 0),Mt([dt()],Tt.prototype,"label",void 0),Mt([dt()],Tt.prototype,"color",void 0),Tt=Mt([ct("whc-preset-button")],Tt);var jt=function(t,e,r,i){var s,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};_t(xt),_t(bt);console.info("%cWATER-HEATER-CARD v0.2.0","color: #4fc3f7; font-weight: bold;");let Nt=class extends nt{static async getConfigElement(){return await Promise.resolve().then(function(){return Wt}),document.createElement("water-heater-card-editor")}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("water_heater."));return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this._config={show_slider:!0,show_presets:!0,show_power:!0,...t},this._config.layout?this.layout=this._config.layout:this.removeAttribute("layout"),this._config.roundness?this.roundness=this._config.roundness:this.removeAttribute("roundness"),!1===this._config.animations?this.animations="false":this.removeAttribute("animations")}shouldUpdate(t){if(!this._config||!this.hass)return!1;if(t.has("_config"))return!0;const e=t.get("hass");return!e||(e.states[this._config.entity]!==this.hass.states[this._config.entity]||!(!this._config.keep_warm_remaining_entity||e.states[this._config.keep_warm_remaining_entity]===this.hass.states[this._config.keep_warm_remaining_entity]))}updated(t){super.updated(t);["--whc-color-heating","--whc-color-keeping_warm","--whc-color-off","--whc-color-idle","--whc-color-ready","--whc-color-fault"].forEach(t=>this.style.removeProperty(t));const e=this._config?.theme_colors;if(!e)return;const r=(t,e)=>{t&&this.style.setProperty(e,t)};r(e.heating,"--whc-color-heating"),r(e.keeping_warm,"--whc-color-keeping_warm"),r(e.off,"--whc-color-off"),r(e.idle,"--whc-color-idle"),r(e.ready,"--whc-color-ready"),r(e.fault,"--whc-color-fault")}static get styles(){return At}_handleAction(t){console.log("Action handled:",t.detail.action)}_callService(t){this.hass&&t&&this.hass.callService(t.domain,t.service,t.serviceData)}render(){if(!this._config||!this.hass)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`
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
                <div class="secondary">${Et("state.unavailable",this.hass.locale?.language)}</div>
              </div>
            </div>
          </div>
        </ha-card>
      `;const r=function(t,e){if(e&&"auto"!==e){const t=vt.find(t=>t.id===e);if(!t)throw new Error(`No adapter registered with id "${e}"`);return t}const r=vt.find(e=>e.matches(t));if(!r)throw new Error(`No adapter matched entity "${t.entity_id}"`);return r}(e,this._config.adapter),i=this._config.keep_warm_remaining_entity?this.hass.states[this._config.keep_warm_remaining_entity]:void 0,s=r.build(e,{hass:this.hass,keepWarmRemainingEntity:i}),o=this._config.name||e.attributes.friendly_name||t,n=Et(`status.${s.status}`,this.hass.locale?.language);let a=n;if("keeping_warm"===s.status){const t=s.keepWarm.remaining?.minutes,e=s.keepWarm.configured?.minutes;null==t||Number.isNaN(Number(t))?null!=e&&(a=`${n} · ${e}m`):a=`${n} · ${t}m left`}const c=`state--${s.status}`;let l=0;"heating"===s.status?l=Math.min(100,Math.max(0,s.current/s.target*100)):"keeping_warm"===s.status&&(l=100);const h=this._config.temp_presets||[60,70,80,90,100],d=this._config.keep_warm_presets||[{label:"Off",value:0},{label:"15m",value:15},{label:"30m",value:30},{label:"45m",value:45},{label:"1h",value:60}];return B`
      <ha-card style=${yt({})} class=${c}>
        <div class="card">
          <div class="header-row">
            <whc-shape
              .status=${s.status}
              .progress=${l}
              .icon=${this._config.icon}
              @click=${()=>this._handleAction(new CustomEvent("action",{detail:{action:"tap"}}))}
            ></whc-shape>

            <div class="header-center">
              <div class="info">
                <div class="primary">${o}</div>
                <div class="secondary">${a}</div>
              </div>

              ${"heating"===s.status||"keeping_warm"===s.status?B`
                    <div class="temp-display" aria-live="polite">
                      <span class="temp-current">${s.current}°</span>
                      ${"keeping_warm"===s.status?"":B`<span class="temp-target">/ ${s.target}°</span>`}
                    </div>
                  `:""}
            </div>

            <div class="menu">
              <ha-icon .icon=${"mdi:dots-vertical"} @click=${()=>this._handleAction(new CustomEvent("action",{detail:{action:"hold"}}))}></ha-icon>
            </div>
          </div>

          <div class="control-section">
            <div class="preset-row">
              ${B`
                ${h.map(t=>B`
                    <whc-preset-button
                      .label="${t}°"
                      .active=${s.target===t}
                      ?active=${s.target===t}
                      .color="var(--whc-state-color)"
                      @click=${()=>this._callService(s.setTarget(t))}
                    ></whc-preset-button>
                  `)}
              `}
            </div>
          </div>

          <div class="control-section">
            <div class="section-label">Keep warm</div>
            <div class="preset-row">
              ${B`
                ${d.map(t=>{const e=s.keepWarm.active&&s.keepWarm.configured?.minutes===t.value;return B`
                    <whc-preset-button
                      .label="${t.label}"
                      .active=${e}
                      ?active=${e}
                      .color="var(--whc-state-color)"
                      @click=${()=>{0===t.value&&s.turnOff?this._callService(s.turnOff()):s.setKeepWarmMinutes&&this._callService(s.setKeepWarmMinutes(t.value))}}
                    ></whc-preset-button>
                  `})}
              `}
            </div>
          </div>
        </div>
      </ha-card>
    `}};jt([dt({attribute:!1})],Nt.prototype,"hass",void 0),jt([pt()],Nt.prototype,"_config",void 0),jt([dt({reflect:!0})],Nt.prototype,"layout",void 0),jt([dt({reflect:!0})],Nt.prototype,"roundness",void 0),jt([dt({reflect:!0})],Nt.prototype,"animations",void 0),Nt=jt([ct("water-heater-card")],Nt),window.customCards=window.customCards??[],window.customCards.push({type:"water-heater-card",name:"Water Heater Card",description:"Mushroom-inspired card for water_heater entities",preview:!1});var Ht=function(t,e,r,i){var s,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};const zt=[{name:"entity",selector:{entity:{domain:"water_heater"}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"adapter",selector:{select:{options:[{value:"auto",label:"Auto"},{value:"standard",label:"Standard"},{value:"xiaomi_miot",label:"Xiaomi MIoT"}]}}},{name:"keep_warm_remaining_entity",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"show_slider",selector:{boolean:{}}},{name:"show_presets",selector:{boolean:{}}},{name:"show_power",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}];let Dt=class extends nt{setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}render(){return this.hass&&this._config?B`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${zt}
        .computeLabel=${t=>t.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:B``}};Ht([dt({attribute:!1})],Dt.prototype,"hass",void 0),Ht([pt()],Dt.prototype,"_config",void 0),Dt=Ht([ct("water-heater-card-editor")],Dt);var Wt=Object.freeze({__proto__:null,get WaterHeaterCardEditor(){return Dt}});export{Nt as WaterHeaterCard};
