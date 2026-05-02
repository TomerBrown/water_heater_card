/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(r,t,i)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,m=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,_=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!a(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const o=r?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(e)i.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of r){const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=r;const o=s.fromAttribute(e,t.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(t,e,i,r=!1,s){if(void 0!==t){const o=this.constructor;if(!1===r&&(s=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[_("elementProperties")]=new Map,b[_("finalized")]=new Map,g?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,x=t=>t,A=$.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+S,C=`<${P}>`,O=document,T=()=>O.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,H="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,j=/>/g,z=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,W=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,K=O.createTreeWalker(O,129);function Y(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(n.lastIndex=h,c=n.exec(i),null!==c);)h=n.lastIndex,n===U?"!--"===c[1]?n=M:void 0!==c[1]?n=j:void 0!==c[2]?(B.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=z):void 0!==c[3]&&(n=z):n===z?">"===c[0]?(n=s??U,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?z:'"'===c[3]?W:D):n===W||n===D?n=z:n===M||n===j?n=U:(n=z,s=void 0);const d=n===z&&t[e+1].startsWith("/>")?" ":"";o+=n===U?i+C:l>=0?(r.push(a),i.slice(0,l)+E+i.slice(l)+S+d):i+S+(-2===l?e:d)}return[Y(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class X{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const n=t.length-1,a=this.parts,[c,l]=F(t,e);if(this.el=X.createElement(c,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=K.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=l[o++],i=r.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Q}),r.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),r.removeAttribute(t));if(B.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],T()),K.nextNode(),a.push({type:2,index:++s});r.append(t[e],T())}}}else if(8===r.nodeType)if(r.data===P)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,r){if(e===L)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const o=R(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=Z(t,s._$AS(t,e.values),s,r)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??O).importNode(e,!0);K.currentNode=r;let s=K.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new G(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new rt(s,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(s=K.nextNode(),o++)}return K.currentNode=O,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),R(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new J(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new X(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new G(this.O(T()),this.O(T()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=Z(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const r=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=Z(this,r[i+n],e,n),a===L&&(a=this._$AH[n]),o||=!R(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}o&&!r&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends Q{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===L)return;const i=this._$AH,r=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==q&&(i===q||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(X,G),($.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=i?.renderBefore??null;r._$litPart$=s=new G(e.insertBefore(T(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ht=(t=lt,e,i)=>{const{kind:r,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,s,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const s=this[r];e.call(this,i),this.requestUpdate(r,s,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};
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
 */const ut=1;let ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt="important",gt=" !"+mt,_t=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ft{constructor(t){if(super(t),t.type!==ut||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(gt);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?mt:""):i[t]=r}}return L}}),vt=[];function yt(t){vt.push(t)}class wt{constructor(t,e){this.entity=t,this.ctx=e}get current(){return this.entity.attributes.current_temperature??0}get target(){return this.entity.attributes.temperature??0}get min(){return this.entity.attributes.min_temp??0}get max(){return this.entity.attributes.max_temp??100}get status(){const t=this.entity.state;return"off"===t?"off":"heating"===t||"heat"===t?"heating":this.current>=this.target-2&&this.target>0?"ready":"idle"}get keepWarm(){return{active:"heat_pump"===this.entity.state||"eco"===this.entity.state}}setTarget(t){return{domain:"water_heater",service:"set_temperature",serviceData:{entity_id:this.entity.entity_id,temperature:t}}}turnOn(){return{domain:"water_heater",service:"turn_on",serviceData:{entity_id:this.entity.entity_id}}}turnOff(){return{domain:"water_heater",service:"turn_off",serviceData:{entity_id:this.entity.entity_id}}}}const bt={id:"standard",matches:t=>t.entity_id.startsWith("water_heater.")&&!("kettle.status"in t.attributes),build:(t,e)=>new wt(t,e)};class $t{constructor(t,e){this.entity=t,this.ctx=e}get current(){return this.entity.attributes.current_temperature??0}get target(){return this.entity.attributes.temperature??0}get min(){return this.entity.attributes.min_temp??40}get max(){return this.entity.attributes.max_temp??99}get status(){const t=this.entity.attributes["kettle.status"],e=this.entity.attributes["kettle.fault"];if(e&&0!==e)return"fault";switch(t){case 1:case 2:return"heating";case 4:return"keeping_warm";case 0:return"off"===this.entity.state?"off":this.current>=this.target-2&&this.target>0?"ready":"idle";default:return"idle"}}get keepWarm(){const t=!0===this.entity.attributes["kettle.auto_keep_warm"],e=this.entity.attributes["function.keep_warm_time"],i=this.entity.attributes["kettle.keep_warm_temperature"];let r;if(this.ctx.keepWarmRemainingEntity){const t=parseFloat(this.ctx.keepWarmRemainingEntity.state);isNaN(t)||(r={minutes:t})}return{active:t,remaining:r,configured:e?{minutes:e}:void 0,holdTemperature:i}}get lifted(){return!0===this.entity.attributes["function.kettle_lifting"]}get fault(){const t=this.entity.attributes["kettle.fault"];return t&&0!==t?`Error ${t}`:null}setTarget(t){return{domain:"water_heater",service:"set_temperature",serviceData:{entity_id:this.entity.entity_id,temperature:t}}}turnOn(){return{domain:"water_heater",service:"turn_on",serviceData:{entity_id:this.entity.entity_id}}}turnOff(){return{domain:"water_heater",service:"turn_off",serviceData:{entity_id:this.entity.entity_id}}}setKeepWarmMinutes(t){return{domain:"xiaomi_miot",service:"set_property",serviceData:{entity_id:this.entity.entity_id,field:"function.keep_warm_time",value:t}}}}const xt={id:"xiaomi_miot",matches:t=>"kettle.status"in t.attributes,build:(t,e)=>new $t(t,e)},At=o`
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

  ha-card.unavailable {
    opacity: 0.88;
  }
`;const kt={en:{"status.off":"Off","status.idle":"Idle","status.heating":"Heating","status.boiling":"Boiling","status.keeping_warm":"Keep warm","status.ready":"Ready","status.fault":"Error","chip.power":"Power","chip.turn_on":"Turn on","chip.turn_off":"Turn off","chip.lifted":"Lifted","chip.keep_warm_remaining":"{remaining} left","chip.keep_warm_configured":"Keep warm: {duration}","preset.boil":"Boil","preset.tea":"Tea","preset.coffee":"Coffee","preset.baby":"Baby","state.unavailable":"Unavailable","error.generic":"Error {code}"},he:{"status.off":"כבוי","status.idle":"במצב המתנה","status.heating":"מחמם","status.boiling":"רותח","status.keeping_warm":"שמירה על חום","status.ready":"מוכן","status.fault":"תקלה","chip.power":"הפעלה","chip.turn_on":"להדליק","chip.turn_off":"כיבוי","chip.lifted":"הורם","chip.keep_warm_remaining":"{remaining} נותרו","chip.keep_warm_configured":"שמירת חום: {duration}","preset.boil":"רתיחה","preset.tea":"תה","preset.coffee":"קפה","preset.baby":"תינוק","state.unavailable":"לא זמין","error.generic":"שגיאה {code}"}};function Et(t,e,i){const r=e?e.toLowerCase().split("-")[0]:"en";return(kt[r]??kt.en)[t]??kt.en[t]??t}const St={off:"var(--whc-color-off, var(--disabled-color))",idle:"var(--whc-color-idle, var(--primary-text-color))",heating:"var(--whc-color-heating, #ff9800)",keeping_warm:"var(--whc-color-keeping_warm, #2196f3)",ready:"var(--whc-color-ready, var(--success-color))",fault:"var(--whc-color-fault, var(--error-color))"},Pt={off:"mdi:kettle-off",idle:"mdi:kettle",heating:"mdi:kettle-steam",keeping_warm:"mdi:kettle-steam",ready:"mdi:kettle",fault:"mdi:kettle-alert"};var Ct=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Ot=class extends nt{constructor(){super(...arguments),this.progress=0}render(){const t=this.status?St[this.status]:"var(--disabled-color)",e=this.icon||(this.status?Pt[this.status]:"mdi:kettle"),i=22.5,r=2*Math.PI*i,s=!1===Number.isFinite(this.progress)?r:r-this.progress/100*r;this.style.setProperty("--shape-color",t);const o="heating"===this.status||"keeping_warm"===this.status,n="heating"===this.status||"keeping_warm"===this.status;return this.classList.toggle("animated",n),I`
      <div class="shape-background"></div>
      ${o?I`
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
  `,Ct([dt()],Ot.prototype,"icon",void 0),Ct([dt()],Ot.prototype,"status",void 0),Ct([dt({type:Number})],Ot.prototype,"progress",void 0),Ot=Ct([ct("whc-shape")],Ot);var Tt=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Rt=class extends nt{constructor(){super(...arguments),this.disabled=!1}render(){return I`
      ${this.icon?I`<ha-icon .icon=${this.icon}></ha-icon>`:""}
      ${this.label?I`<span class="label">${this.label}</span>`:""}
    `}};Rt.styles=o`
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
  `,Tt([dt()],Rt.prototype,"icon",void 0),Tt([dt()],Rt.prototype,"label",void 0),Tt([dt({type:Boolean})],Rt.prototype,"disabled",void 0),Rt=Tt([ct("whc-chip")],Rt);var Nt=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Ht=class extends nt{constructor(){super(...arguments),this.active=!1,this.label="",this.color="var(--primary-text-color)"}render(){return this.style.setProperty("--active-color",this.color),I`
      <button type="button" part="button">
        ${this.label}
      </button>
    `}};Ht.styles=o`
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
  `,Nt([dt({type:Boolean,reflect:!0})],Ht.prototype,"active",void 0),Nt([dt()],Ht.prototype,"label",void 0),Nt([dt()],Ht.prototype,"color",void 0),Ht=Nt([ct("whc-preset-button")],Ht);var Ut=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Mt=class extends nt{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1}_emitValue(t){this.value=t,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}_onInput(t){const e=parseFloat(t.target.value);Number.isNaN(e)||(this.value=e)}_onChange(t){const e=parseFloat(t.target.value);Number.isNaN(e)||this._emitValue(e)}render(){const t=(this.value-this.min)/(this.max-this.min)*100;return I`
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
    `}};Mt.styles=o`
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
  `,Ut([dt({type:Number})],Mt.prototype,"value",void 0),Ut([dt({type:Number})],Mt.prototype,"min",void 0),Ut([dt({type:Number})],Mt.prototype,"max",void 0),Ut([dt({type:Number})],Mt.prototype,"step",void 0),Mt=Ut([ct("whc-slider")],Mt);var jt=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};yt(xt),yt(bt);console.info("%cWATER-HEATER-CARD v0.2.1","color: #4fc3f7; font-weight: bold;");let zt=class extends nt{constructor(){super(...arguments),this._longPressConsumed=!1}static async getConfigElement(){return await Promise.resolve().then(function(){return It}),document.createElement("water-heater-card-editor")}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("water_heater."));return{entity:e[0]||""}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");const e={...t,type:"custom:water-heater-card",hold_action:t.hold_action??{action:"more-info",entity:t.entity},show_slider:t.show_slider??!0,show_presets:t.show_presets??!0,show_power:t.show_power??!0,compact:t.compact??!1};e.hold_ms="number"==typeof e.hold_ms&&e.hold_ms>=200&&e.hold_ms<=5e3?e.hold_ms:550,this._config=e,this._config.layout?this.layout=this._config.layout:this.removeAttribute("layout"),this._config.roundness?this.roundness=this._config.roundness:this.removeAttribute("roundness"),!1===this._config.animations?this.animations="false":this.removeAttribute("animations"),this.compact=!!this._config.compact}disconnectedCallback(){super.disconnectedCallback(),this._clearHoldTimer()}shouldUpdate(t){if(!this._config||!this.hass)return!1;if(t.has("_config"))return!0;const e=t.get("hass");return!e||(e.states[this._config.entity]!==this.hass.states[this._config.entity]||!(!this._config.keep_warm_remaining_entity||e.states[this._config.keep_warm_remaining_entity]===this.hass.states[this._config.keep_warm_remaining_entity]))}updated(t){super.updated(t);["--whc-color-heating","--whc-color-keeping_warm","--whc-color-off","--whc-color-idle","--whc-color-ready","--whc-color-fault"].forEach(t=>this.style.removeProperty(t));const e=this._config?.theme_colors;if(!e)return;const i=(t,e)=>{t&&this.style.setProperty(e,t)};i(e.heating,"--whc-color-heating"),i(e.keeping_warm,"--whc-color-keeping_warm"),i(e.off,"--whc-color-off"),i(e.idle,"--whc-color-idle"),i(e.ready,"--whc-color-ready"),i(e.fault,"--whc-color-fault")}static get styles(){return At}_clearHoldTimer(){void 0!==this._holdTimer&&(window.clearTimeout(this._holdTimer),this._holdTimer=void 0),this._holdStart=void 0}_isHoldCancelledByMovement(t){if(!this._holdStart||void 0===this._holdTimer)return!1;const e=t.clientX-this._holdStart.clientX,i=t.clientY-this._holdStart.clientY;return e*e+i*i>100}_composedPathTouchesInteractive(t){const e=t.composedPath();for(let i=0;i<e.length;i++){const r=e[i];if(r===t.currentTarget)break;if(!(r instanceof Element))continue;const s=r.tagName;if("BUTTON"===s||"INPUT"===s||"SELECT"===s||"TEXTAREA"===s||"WHC-PRESET-BUTTON"===s||"WHC-CHIP"===s||"WHC-SLIDER"===s)return!0;const o=r;if(o.closest?.("button,input,select,textarea,whc-preset-button,whc-chip,whc-slider"))return!0}return!1}_cardPointerDown(t){if(this._clearHoldTimer(),this._longPressConsumed=!1,"mouse"===t.pointerType&&0!==t.button)return;if(!this.hass||!this._config)return;if(this._composedPathTouchesInteractive(t))return;const e="number"==typeof this._config.hold_ms&&this._config.hold_ms>=200&&this._config.hold_ms<=5e3?this._config.hold_ms:550;this._holdStart={clientX:t.clientX,clientY:t.clientY},this._holdTimer=window.setTimeout(()=>{this._holdTimer=void 0,this._holdStart=void 0,this._runHoldAction().then(()=>{this._longPressConsumed=!0})},e)}_cardPointerMove(t){this._isHoldCancelledByMovement(t)&&this._clearHoldTimer()}_cardPointerEnd(t){const e=this._longPressConsumed;this._clearHoldTimer(),e&&(t.preventDefault(),this._longPressConsumed=!1)}async _runHoldAction(){const t=this._config,e=this.hass;if(!t||!e)return;const i=t.hold_action??{action:"more-info",entity:t.entity};if("none"!==i.action){if("more-info"===i.action)return r=this,s="hass-more-info",o={entityId:i.entity??t.entity},void r.dispatchEvent(new CustomEvent(s,{bubbles:!0,composed:!0,detail:o??{}}));var r,s,o;if("toggle"===i.action)return await e.callService("homeassistant","toggle",{entity_id:i.entity??t.entity}),void await this._refreshTrackedEntities();if("call-service"===i.action){const t=i.service.split(".").filter(Boolean);if(t.length>=2){const r=t.shift(),s=t.join(".");await e.callService(r,s,i.service_data??{}).catch(()=>{}),await this._refreshTrackedEntities()}return}}}async _refreshTrackedEntities(){const t=this.hass,e=this._config;if(!t||!e)return;const i=[e.entity];e.keep_warm_remaining_entity&&i.push(e.keep_warm_remaining_entity);for(const e of i)await t.callService("homeassistant","update_entity",{entity_id:e}).catch(()=>{})}async _callServiceWithRefresh(t){const e=this.hass;e&&t?.domain&&t?.service&&(await e.callService(t.domain,t.service,t.serviceData).catch(()=>{}),await this._refreshTrackedEntities())}render(){if(!this._config||!this.hass)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`
        <ha-card>
          <div class="card">
            <div class="secondary">Entity not found: ${t}</div>
          </div>
        </ha-card>
      `;if("unavailable"===e.state)return I`
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
      `;const i=function(t,e){if(e&&"auto"!==e){const t=vt.find(t=>t.id===e);if(!t)throw new Error(`No adapter registered with id "${e}"`);return t}const i=vt.find(e=>e.matches(t));if(!i)throw new Error(`No adapter matched entity "${t.entity_id}"`);return i}(e,this._config.adapter),r=this._config.keep_warm_remaining_entity?this.hass.states[this._config.keep_warm_remaining_entity]:void 0,s=i.build(e,{hass:this.hass,keepWarmRemainingEntity:r}),o=this._config.name||e.attributes.friendly_name||t,n=Et(`status.${s.status}`,this.hass.locale?.language);let a=n;if("keeping_warm"===s.status){const t=s.keepWarm.remaining?.minutes,e=s.keepWarm.configured?.minutes;null==t||Number.isNaN(Number(t))?null!=e&&(a=`${n} · ${e}m`):a=`${n} · ${t}m left`}const c=`state--${s.status}`;let l=0;"heating"===s.status?l=Math.min(100,Math.max(0,s.current/s.target*100)):"keeping_warm"===s.status&&(l=100);const h=this._config.temp_presets||[60,70,80,90,100],d=this._config.keep_warm_presets||[{label:"Off",value:0},{label:"15m",value:15},{label:"30m",value:30},{label:"45m",value:45},{label:"1h",value:60}],p=!1!==this._config.show_presets,u=!1!==this._config.show_slider,f=!1!==this._config.show_power&&!(!s.turnOn&&!s.turnOff),m="heating"===s.status||"keeping_warm"===s.status||"ready"===s.status,g=!(!s.turnOff||!m),_=!(!s.turnOn||m||"off"!==s.status&&"idle"!==s.status&&"fault"!==s.status),v=this.hass.locale?.language;return I`
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
            <whc-shape .status=${s.status} .progress=${l} .icon=${this._config.icon}></whc-shape>

            <div class="header-center">
              <div class="info">
                <div class="primary">${o}</div>
                <div class="secondary">${a}</div>
              </div>

              ${"heating"===s.status||"keeping_warm"===s.status?I`
                    <div class="temp-display" aria-live="polite">
                      <span class="temp-current">${s.current}°</span>
                      ${"keeping_warm"===s.status?"":I`<span class="temp-target">/ ${s.target}°</span>`}
                    </div>
                  `:I`
                    <div class="temp-display temp-display--ambient" aria-live="polite">
                      <span class="temp-current--ambient">${s.current}°</span>
                    </div>
                  `}
            </div>
          </div>

          ${f&&(g||_)?I`
                <div class="power-row">
                  ${g&&s.turnOff?I`
                        <whc-chip
                          .label=${Et("chip.turn_off",v)}
                          .icon=${"mdi:power-plug-off"}
                          @click=${t=>{t.stopPropagation(),this._callServiceWithRefresh(s.turnOff())}}
                        ></whc-chip>
                      `:""}
                  ${_&&s.turnOn?I`
                        <whc-chip
                          .label=${Et("chip.turn_on",v)}
                          .icon=${"mdi:kettle-outline"}
                          @click=${t=>{t.stopPropagation(),this._callServiceWithRefresh(s.turnOn())}}
                        ></whc-chip>
                      `:""}
                </div>
              `:""}

          ${u?I`
                <div class="control-section">
                  <whc-slider
                    .value=${s.target}
                    .min=${s.min}
                    .max=${s.max}
                    .step=${1}
                    @value-changed=${t=>{t.stopPropagation(),this._callServiceWithRefresh(s.setTarget(t.detail.value))}}
                  ></whc-slider>
                </div>
              `:""}

          ${p?I`
                <div class="control-section">
                  <div class="preset-row">
                    ${I`
                      ${h.map(t=>I`
                          <whc-preset-button
                            .label="${t}°"
                            .active=${s.target===t}
                            ?active=${s.target===t}
                            .color="var(--whc-state-color)"
                            @click=${e=>{e.stopPropagation(),this._callServiceWithRefresh(s.setTarget(t))}}
                          ></whc-preset-button>
                        `)}
                    `}
                  </div>
                </div>

                <div class="control-section">
                  <div class="section-label">Keep warm</div>
                  <div class="preset-row">
                    ${I`
                      ${d.map(t=>{const e=s.keepWarm.active&&s.keepWarm.configured?.minutes===t.value;return I`
                          <whc-preset-button
                            .label="${t.label}"
                            .active=${e}
                            ?active=${e}
                            .color="var(--whc-state-color)"
                            @click=${e=>{e.stopPropagation(),0===t.value&&s.turnOff?this._callServiceWithRefresh(s.turnOff()):s.setKeepWarmMinutes&&this._callServiceWithRefresh(s.setKeepWarmMinutes(t.value))}}
                          ></whc-preset-button>
                        `})}
                    `}
                  </div>
                </div>
              `:""}
        </div>
      </ha-card>
    `}};jt([dt({attribute:!1})],zt.prototype,"hass",void 0),jt([pt()],zt.prototype,"_config",void 0),jt([dt({reflect:!0})],zt.prototype,"layout",void 0),jt([dt({reflect:!0})],zt.prototype,"roundness",void 0),jt([dt({reflect:!0})],zt.prototype,"animations",void 0),jt([dt({type:Boolean,reflect:!0})],zt.prototype,"compact",void 0),zt=jt([ct("water-heater-card")],zt),window.customCards=window.customCards??[],window.customCards.push({type:"water-heater-card",name:"Water Heater Card",description:"Mushroom-inspired card for water_heater entities",preview:!1});var Dt=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const Wt=[{name:"entity",selector:{entity:{domain:"water_heater"}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"adapter",selector:{select:{options:[{value:"auto",label:"Auto"},{value:"standard",label:"Standard"},{value:"xiaomi_miot",label:"Xiaomi MIoT"}]}}},{name:"keep_warm_remaining_entity",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"show_slider",selector:{boolean:{}}},{name:"show_presets",selector:{boolean:{}}},{name:"show_power",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}];let Bt=class extends nt{setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}render(){return this.hass&&this._config?I`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Wt}
        .computeLabel=${t=>t.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:I``}};Dt([dt({attribute:!1})],Bt.prototype,"hass",void 0),Dt([pt()],Bt.prototype,"_config",void 0),Bt=Dt([ct("water-heater-card-editor")],Bt);var It=Object.freeze({__proto__:null,get WaterHeaterCardEditor(){return Bt}});export{zt as WaterHeaterCard};
