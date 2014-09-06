/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
}function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
}function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
}if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
}var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
}function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
});return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
}),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
}function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
});return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
}function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
}:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
}},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
},J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
(Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
});return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
})},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
},J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
})),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
},J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
}),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
},J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
},J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
},J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
}),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
},J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
},J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);;/*!
* ZeroClipboard
* The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* Copyright (c) 2014 Jon Rohan, James M. Greene
* Licensed MIT
* http://zeroclipboard.org/
* v1.3.5
*/
!function(a){"use strict";function b(a){return a.replace(/,/g,".").replace(/[^0-9\.]/g,"")}function c(a){return parseFloat(b(a))>=10}var d,e={bridge:null,version:"0.0.0",disabled:null,outdated:null,ready:null},f={},g=0,h={},i=0,j={},k=null,l=null,m=function(){var a,b,c,d,e="ZeroClipboard.swf";if(document.currentScript&&(d=document.currentScript.src));else{var f=document.getElementsByTagName("script");if("readyState"in f[0])for(a=f.length;a--&&("interactive"!==f[a].readyState||!(d=f[a].src)););else if("loading"===document.readyState)d=f[f.length-1].src;else{for(a=f.length;a--;){if(c=f[a].src,!c){b=null;break}if(c=c.split("#")[0].split("?")[0],c=c.slice(0,c.lastIndexOf("/")+1),null==b)b=c;else if(b!==c){b=null;break}}null!==b&&(d=b)}}return d&&(d=d.split("#")[0].split("?")[0],e=d.slice(0,d.lastIndexOf("/")+1)+e),e}(),n=function(){var a=/\-([a-z])/g,b=function(a,b){return b.toUpperCase()};return function(c){return c.replace(a,b)}}(),o=function(b,c){var d,e,f;return a.getComputedStyle?d=a.getComputedStyle(b,null).getPropertyValue(c):(e=n(c),d=b.currentStyle?b.currentStyle[e]:b.style[e]),"cursor"!==c||d&&"auto"!==d||(f=b.tagName.toLowerCase(),"a"!==f)?d:"pointer"},p=function(b){b||(b=a.event);var c;this!==a?c=this:b.target?c=b.target:b.srcElement&&(c=b.srcElement),K.activate(c)},q=function(a,b,c){a&&1===a.nodeType&&(a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c))},r=function(a,b,c){a&&1===a.nodeType&&(a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c))},s=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)||a.classList.add(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},t=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)&&a.classList.remove(b),a;if(b&&"string"==typeof b||void 0===b){var c=(b||"").split(/\s+/);if(1===a.nodeType&&a.className)if(b){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}else a.className=""}return a},u=function(){var a,b,c,d=1;return"function"==typeof document.body.getBoundingClientRect&&(a=document.body.getBoundingClientRect(),b=a.right-a.left,c=document.body.offsetWidth,d=Math.round(b/c*100)/100),d},v=function(b,c){var d={left:0,top:0,width:0,height:0,zIndex:B(c)-1};if(b.getBoundingClientRect){var e,f,g,h=b.getBoundingClientRect();"pageXOffset"in a&&"pageYOffset"in a?(e=a.pageXOffset,f=a.pageYOffset):(g=u(),e=Math.round(document.documentElement.scrollLeft/g),f=Math.round(document.documentElement.scrollTop/g));var i=document.documentElement.clientLeft||0,j=document.documentElement.clientTop||0;d.left=h.left+e-i,d.top=h.top+f-j,d.width="width"in h?h.width:h.right-h.left,d.height="height"in h?h.height:h.bottom-h.top}return d},w=function(a,b){var c=null==b||b&&b.cacheBust===!0&&b.useNoCache===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+(new Date).getTime():""},x=function(b){var c,d,e,f=[],g=[],h=[];if(b.trustedOrigins&&("string"==typeof b.trustedOrigins?g.push(b.trustedOrigins):"object"==typeof b.trustedOrigins&&"length"in b.trustedOrigins&&(g=g.concat(b.trustedOrigins))),b.trustedDomains&&("string"==typeof b.trustedDomains?g.push(b.trustedDomains):"object"==typeof b.trustedDomains&&"length"in b.trustedDomains&&(g=g.concat(b.trustedDomains))),g.length)for(c=0,d=g.length;d>c;c++)if(g.hasOwnProperty(c)&&g[c]&&"string"==typeof g[c]){if(e=E(g[c]),!e)continue;if("*"===e){h=[e];break}h.push.apply(h,[e,"//"+e,a.location.protocol+"//"+e])}return h.length&&f.push("trustedOrigins="+encodeURIComponent(h.join(","))),"string"==typeof b.jsModuleId&&b.jsModuleId&&f.push("jsModuleId="+encodeURIComponent(b.jsModuleId)),f.join("&")},y=function(a,b,c){if("function"==typeof b.indexOf)return b.indexOf(a,c);var d,e=b.length;for("undefined"==typeof c?c=0:0>c&&(c=e+c),d=c;e>d;d++)if(b.hasOwnProperty(d)&&b[d]===a)return d;return-1},z=function(a){if("string"==typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},A=function(b,c,d,e){e?a.setTimeout(function(){b.apply(c,d)},0):b.apply(c,d)},B=function(a){var b,c;return a&&("number"==typeof a&&a>0?b=a:"string"==typeof a&&(c=parseInt(a,10))&&!isNaN(c)&&c>0&&(b=c)),b||("number"==typeof N.zIndex&&N.zIndex>0?b=N.zIndex:"string"==typeof N.zIndex&&(c=parseInt(N.zIndex,10))&&!isNaN(c)&&c>0&&(b=c)),b||0},C=function(a,b){if(a&&b!==!1&&"undefined"!=typeof console&&console&&(console.warn||console.log)){var c="`"+a+"` is deprecated. See docs for more info:\n    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";console.warn?console.warn(c):console.log(c)}},D=function(){var a,b,c,d,e,f,g=arguments[0]||{};for(a=1,b=arguments.length;b>a;a++)if(null!=(c=arguments[a]))for(d in c)if(c.hasOwnProperty(d)){if(e=g[d],f=c[d],g===f)continue;void 0!==f&&(g[d]=f)}return g},E=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},F=function(){var a=function(a,b){var c,d,e;if(null!=a&&"*"!==b[0]&&("string"==typeof a&&(a=[a]),"object"==typeof a&&"length"in a))for(c=0,d=a.length;d>c;c++)if(a.hasOwnProperty(c)&&(e=E(a[c]))){if("*"===e){b.length=0,b.push("*");break}-1===y(e,b)&&b.push(e)}},b={always:"always",samedomain:"sameDomain",never:"never"};return function(c,d){var e,f=d.allowScriptAccess;if("string"==typeof f&&(e=f.toLowerCase())&&/^always|samedomain|never$/.test(e))return b[e];var g=E(d.moviePath);null===g&&(g=c);var h=[];a(d.trustedOrigins,h),a(d.trustedDomains,h);var i=h.length;if(i>0){if(1===i&&"*"===h[0])return"always";if(-1!==y(c,h))return 1===i&&c===g?"sameDomain":"always"}return"never"}}(),G=function(a){if(null==a)return[];if(Object.keys)return Object.keys(a);var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b},H=function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&delete a[b];return a},I=function(){try{return document.activeElement}catch(a){}return null},J=function(){var a=!1;if("boolean"==typeof e.disabled)a=e.disabled===!1;else{if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){}!a&&navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0)}return a},K=function(a,b){return this instanceof K?(this.id=""+g++,h[this.id]={instance:this,elements:[],handlers:{}},a&&this.clip(a),"undefined"!=typeof b&&(C("new ZeroClipboard(elements, options)",N.debug),K.config(b)),this.options=K.config(),"boolean"!=typeof e.disabled&&(e.disabled=!J()),e.disabled===!1&&e.outdated!==!0&&null===e.bridge&&(e.outdated=!1,e.ready=!1,O()),void 0):new K(a,b)};K.prototype.setText=function(a){return a&&""!==a&&(f["text/plain"]=a,e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setText?e.bridge.setText(a):e.ready=!1),this},K.prototype.setSize=function(a,b){return e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setSize?e.bridge.setSize(a,b):e.ready=!1,this};var L=function(a){e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setHandCursor?e.bridge.setHandCursor(a):e.ready=!1};K.prototype.destroy=function(){this.unclip(),this.off(),delete h[this.id]};var M=function(){var a,b,c,d=[],e=G(h);for(a=0,b=e.length;b>a;a++)c=h[e[a]].instance,c&&c instanceof K&&d.push(c);return d};K.version="1.3.5";var N={swfPath:m,trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceHandCursor:!1,zIndex:999999999,debug:!0,title:null,autoActivate:!0};K.config=function(a){"object"==typeof a&&null!==a&&D(N,a);{if("string"!=typeof a||!a){var b={};for(var c in N)N.hasOwnProperty(c)&&(b[c]="object"==typeof N[c]&&null!==N[c]?"length"in N[c]?N[c].slice(0):D({},N[c]):N[c]);return b}if(N.hasOwnProperty(a))return N[a]}},K.destroy=function(){K.deactivate();for(var a in h)if(h.hasOwnProperty(a)&&h[a]){var b=h[a].instance;b&&"function"==typeof b.destroy&&b.destroy()}var c=P(e.bridge);c&&c.parentNode&&(c.parentNode.removeChild(c),e.ready=null,e.bridge=null)},K.activate=function(a){d&&(t(d,N.hoverClass),t(d,N.activeClass)),d=a,s(a,N.hoverClass),Q();var b=N.title||a.getAttribute("title");if(b){var c=P(e.bridge);c&&c.setAttribute("title",b)}var f=N.forceHandCursor===!0||"pointer"===o(a,"cursor");L(f)},K.deactivate=function(){var a=P(e.bridge);a&&(a.style.left="0px",a.style.top="-9999px",a.removeAttribute("title")),d&&(t(d,N.hoverClass),t(d,N.activeClass),d=null)};var O=function(){var b,c,d=document.getElementById("global-zeroclipboard-html-bridge");if(!d){var f=K.config();f.jsModuleId="string"==typeof k&&k||"string"==typeof l&&l||null;var g=F(a.location.host,N),h=x(f),i=N.moviePath+w(N.moviePath,N),j='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+i+'"/>         <param name="allowScriptAccess" value="'+g+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+h+'"/>         <embed src="'+i+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="'+g+'"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+h+'"           scale="exactfit">         </embed>       </object>';d=document.createElement("div"),d.id="global-zeroclipboard-html-bridge",d.setAttribute("class","global-zeroclipboard-container"),d.style.position="absolute",d.style.left="0px",d.style.top="-9999px",d.style.width="15px",d.style.height="15px",d.style.zIndex=""+B(N.zIndex),document.body.appendChild(d),d.innerHTML=j}b=document["global-zeroclipboard-flash-bridge"],b&&(c=b.length)&&(b=b[c-1]),e.bridge=b||d.children[0].lastElementChild},P=function(a){for(var b=/^OBJECT|EMBED$/,c=a&&a.parentNode;c&&b.test(c.nodeName)&&c.parentNode;)c=c.parentNode;return c||null},Q=function(){if(d){var a=v(d,N.zIndex),b=P(e.bridge);b&&(b.style.top=a.top+"px",b.style.left=a.left+"px",b.style.width=a.width+"px",b.style.height=a.height+"px",b.style.zIndex=a.zIndex+1),e.ready===!0&&e.bridge&&"function"==typeof e.bridge.setSize?e.bridge.setSize(a.width,a.height):e.ready=!1}return this};K.prototype.on=function(a,b){var c,d,f,g={},i=h[this.id]&&h[this.id].handlers;if("string"==typeof a&&a)f=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)a.hasOwnProperty(c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.on(c,a[c]);if(f&&f.length){for(c=0,d=f.length;d>c;c++)a=f[c].replace(/^on/,""),g[a]=!0,i[a]||(i[a]=[]),i[a].push(b);g.noflash&&e.disabled&&T.call(this,"noflash",{}),g.wrongflash&&e.outdated&&T.call(this,"wrongflash",{flashVersion:e.version}),g.load&&e.ready&&T.call(this,"load",{flashVersion:e.version})}return this},K.prototype.off=function(a,b){var c,d,e,f,g,i=h[this.id]&&h[this.id].handlers;if(0===arguments.length)f=G(i);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)a.hasOwnProperty(c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=i[a],g&&g.length)if(b)for(e=y(b,g);-1!==e;)g.splice(e,1),e=y(b,g,e);else i[a].length=0;return this},K.prototype.handlers=function(a){var b,c=null,d=h[this.id]&&h[this.id].handlers;if(d){if("string"==typeof a&&a)return d[a]?d[a].slice(0):null;c={};for(b in d)d.hasOwnProperty(b)&&d[b]&&(c[b]=d[b].slice(0))}return c};var R=function(b,c,d,e){var f=h[this.id]&&h[this.id].handlers[b];if(f&&f.length){var g,i,j,k=c||this;for(g=0,i=f.length;i>g;g++)j=f[g],c=k,"string"==typeof j&&"function"==typeof a[j]&&(j=a[j]),"object"==typeof j&&j&&"function"==typeof j.handleEvent&&(c=j,j=j.handleEvent),"function"==typeof j&&A(j,c,d,e)}return this};K.prototype.clip=function(a){a=z(a);for(var b=0;b<a.length;b++)if(a.hasOwnProperty(b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===y(this.id,j[a[b].zcClippingId])&&j[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+i++,j[a[b].zcClippingId]=[this.id],N.autoActivate===!0&&q(a[b],"mouseover",p));var c=h[this.id].elements;-1===y(a[b],c)&&c.push(a[b])}return this},K.prototype.unclip=function(a){var b=h[this.id];if(b){var c,d=b.elements;a="undefined"==typeof a?d.slice(0):z(a);for(var e=a.length;e--;)if(a.hasOwnProperty(e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=y(a[e],d,c));)d.splice(c,1);var f=j[a[e].zcClippingId];if(f){for(c=0;-1!==(c=y(this.id,f,c));)f.splice(c,1);0===f.length&&(N.autoActivate===!0&&r(a[e],"mouseover",p),delete a[e].zcClippingId)}}}return this},K.prototype.elements=function(){var a=h[this.id];return a&&a.elements?a.elements.slice(0):[]};var S=function(a){var b,c,d,e,f,g=[];if(a&&1===a.nodeType&&(b=a.zcClippingId)&&j.hasOwnProperty(b)&&(c=j[b],c&&c.length))for(d=0,e=c.length;e>d;d++)f=h[c[d]].instance,f&&f instanceof K&&g.push(f);return g};N.hoverClass="zeroclipboard-is-hover",N.activeClass="zeroclipboard-is-active",N.trustedOrigins=null,N.allowScriptAccess=null,N.useNoCache=!0,N.moviePath="ZeroClipboard.swf",K.detectFlashSupport=function(){return C("ZeroClipboard.detectFlashSupport",N.debug),J()},K.dispatch=function(a,b){if("string"==typeof a&&a){var c=a.toLowerCase().replace(/^on/,"");if(c)for(var e=d&&N.autoActivate===!0?S(d):M(),f=0,g=e.length;g>f;f++)T.call(e[f],c,b)}},K.prototype.setHandCursor=function(a){return C("ZeroClipboard.prototype.setHandCursor",N.debug),a="boolean"==typeof a?a:!!a,L(a),N.forceHandCursor=a,this},K.prototype.reposition=function(){return C("ZeroClipboard.prototype.reposition",N.debug),Q()},K.prototype.receiveEvent=function(a,b){if(C("ZeroClipboard.prototype.receiveEvent",N.debug),"string"==typeof a&&a){var c=a.toLowerCase().replace(/^on/,"");c&&T.call(this,c,b)}},K.prototype.setCurrent=function(a){return C("ZeroClipboard.prototype.setCurrent",N.debug),K.activate(a),this},K.prototype.resetBridge=function(){return C("ZeroClipboard.prototype.resetBridge",N.debug),K.deactivate(),this},K.prototype.setTitle=function(a){if(C("ZeroClipboard.prototype.setTitle",N.debug),a=a||N.title||d&&d.getAttribute("title")){var b=P(e.bridge);b&&b.setAttribute("title",a)}return this},K.setDefaults=function(a){C("ZeroClipboard.setDefaults",N.debug),K.config(a)},K.prototype.addEventListener=function(a,b){return C("ZeroClipboard.prototype.addEventListener",N.debug),this.on(a,b)},K.prototype.removeEventListener=function(a,b){return C("ZeroClipboard.prototype.removeEventListener",N.debug),this.off(a,b)},K.prototype.ready=function(){return C("ZeroClipboard.prototype.ready",N.debug),e.ready===!0};var T=function(a,g){a=a.toLowerCase().replace(/^on/,"");var h=g&&g.flashVersion&&b(g.flashVersion)||null,i=d,j=!0;switch(a){case"load":if(h){if(!c(h))return T.call(this,"onWrongFlash",{flashVersion:h}),void 0;e.outdated=!1,e.ready=!0,e.version=h}break;case"wrongflash":h&&!c(h)&&(e.outdated=!0,e.ready=!1,e.version=h);break;case"mouseover":s(i,N.hoverClass);break;case"mouseout":N.autoActivate===!0&&K.deactivate();break;case"mousedown":s(i,N.activeClass);break;case"mouseup":t(i,N.activeClass);break;case"datarequested":if(i){var k=i.getAttribute("data-clipboard-target"),l=k?document.getElementById(k):null;if(l){var m=l.value||l.textContent||l.innerText;m&&this.setText(m)}else{var n=i.getAttribute("data-clipboard-text");n&&this.setText(n)}}j=!1;break;case"complete":H(f),i&&i!==I()&&i.focus&&i.focus()}var o=i,p=[this,g];return R.call(this,a,o,p,j)};"function"==typeof define&&define.amd?define(["require","exports","module"],function(a,b,c){return k=c&&c.id||null,K}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports&&"function"==typeof a.require?(l=module.id||null,module.exports=K):a.ZeroClipboard=K}(function(){return this}());;//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function c(a,b){function c(){ib.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}var d=!0;return i(function(){return d&&(c(),d=!1),b.apply(this,arguments)},b)}function d(a,b){return function(c){return l(a.call(this,c),b)}}function e(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function f(){}function g(a){y(a),i(this,a)}function h(a){var b=r(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._bubble()}function i(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function j(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&wb.hasOwnProperty(b)&&(c[b]=a[b]);return c}function k(a){return 0>a?Math.ceil(a):Math.floor(a)}function l(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function m(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&db(a,"Date",cb(a,"Date")+f*c),g&&bb(a,cb(a,"Month")+g*c),d&&ib.updateOffset(a,f||g)}function n(a){return"[object Array]"===Object.prototype.toString.call(a)}function o(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function p(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function q(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Zb[a]||$b[b]||b}return a}function r(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=q(c),b&&(d[b]=a[c]));return d}function s(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}ib[b]=function(e,f){var g,h,i=ib.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=ib().utc().set(d,a);return i.call(ib.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function u(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function v(a,b,c){return $(ib([a,11,31+b-c]),b,c).week}function w(a){return x(a)?366:365}function x(a){return a%4===0&&a%100!==0||a%400===0}function y(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[pb]<0||a._a[pb]>11?pb:a._a[qb]<1||a._a[qb]>u(a._a[ob],a._a[pb])?qb:a._a[rb]<0||a._a[rb]>23?rb:a._a[sb]<0||a._a[sb]>59?sb:a._a[tb]<0||a._a[tb]>59?tb:a._a[ub]<0||a._a[ub]>999?ub:-1,a._pf._overflowDayOfYear&&(ob>b||b>qb)&&(b=qb),a._pf.overflow=b)}function z(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function A(a){return a?a.toLowerCase().replace("_","-"):a}function B(a,b){return b._isUTC?ib(a).zone(b._offset||0):ib(a).local()}function C(a,b){return b.abbr=a,vb[a]||(vb[a]=new f),vb[a].set(b),vb[a]}function D(a){delete vb[a]}function E(a){var b,c,d,e,f=0,g=function(a){if(!vb[a]&&xb)try{require("./lang/"+a)}catch(b){}return vb[a]};if(!a)return ib.fn._lang;if(!n(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=A(a[f]).split("-"),b=e.length,d=A(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&p(e,d,!0)>=b-1)break;b--}f++}return ib.fn._lang}function F(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function G(a){var b,c,d=a.match(Bb);for(b=0,c=d.length;c>b;b++)d[b]=cc[d[b]]?cc[d[b]]:F(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function H(a,b){return a.isValid()?(b=I(b,a.lang()),_b[b]||(_b[b]=G(b)),_b[b](a)):a.lang().invalidDate()}function I(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cb.lastIndex=0;d>=0&&Cb.test(a);)a=a.replace(Cb,c),Cb.lastIndex=0,d-=1;return a}function J(a,b){var c,d=b._strict;switch(a){case"Q":return Nb;case"DDDD":return Pb;case"YYYY":case"GGGG":case"gggg":return d?Qb:Fb;case"Y":case"G":case"g":return Sb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Rb:Gb;case"S":if(d)return Nb;case"SS":if(d)return Ob;case"SSS":if(d)return Pb;case"DDD":return Eb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ib;case"a":case"A":return E(b._l)._meridiemParse;case"X":return Lb;case"Z":case"ZZ":return Jb;case"T":return Kb;case"SSSS":return Hb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Ob:Db;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Db;case"Do":return Mb;default:return c=new RegExp(R(Q(a.replace("\\","")),"i"))}}function K(a){a=a||"";var b=a.match(Jb)||[],c=b[b.length-1]||[],d=(c+"").match(Xb)||["-",0,0],e=+(60*d[1])+t(d[2]);return"+"===d[0]?-e:e}function L(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[pb]=3*(t(b)-1));break;case"M":case"MM":null!=b&&(e[pb]=t(b)-1);break;case"MMM":case"MMMM":d=E(c._l).monthsParse(b),null!=d?e[pb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[qb]=t(b));break;case"Do":null!=b&&(e[qb]=t(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=t(b));break;case"YY":e[ob]=ib.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[ob]=t(b);break;case"a":case"A":c._isPm=E(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[rb]=t(b);break;case"m":case"mm":e[sb]=t(b);break;case"s":case"ss":e[tb]=t(b);break;case"S":case"SS":case"SSS":case"SSSS":e[ub]=t(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=K(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function M(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=O(a),a._w&&null==a._a[qb]&&null==a._a[pb]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[ob]?ib().weekYear():a._a[ob]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=_(f(g.GG),g.W||1,g.E,4,1):(i=E(a._l),j=null!=g.d?X(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=_(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[ob]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[ob]?d[ob]:a._a[ob],a._dayOfYear>w(e)&&(a._pf._overflowDayOfYear=!0),c=W(e,0,a._dayOfYear),a._a[pb]=c.getUTCMonth(),a._a[qb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[rb]+=t((a._tzm||0)/60),l[sb]+=t((a._tzm||0)%60),a._d=(a._useUTC?W:V).apply(null,l)}}function N(a){var b;a._d||(b=r(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],M(a))}function O(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function P(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=E(a._l),h=""+a._i,i=h.length,j=0;for(d=I(a._f,g).match(Bb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(J(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),cc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),L(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[rb]<12&&(a._a[rb]+=12),a._isPm===!1&&12===a._a[rb]&&(a._a[rb]=0),M(a),y(a)}function Q(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function R(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function S(a){var c,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,c=i({},a),c._pf=b(),c._f=a._f[f],P(c),z(c)&&(g+=c._pf.charsLeftOver,g+=10*c._pf.unusedTokens.length,c._pf.score=g,(null==e||e>g)&&(e=g,d=c));i(a,d||c)}function T(a){var b,c,d=a._i,e=Tb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Vb.length;c>b;b++)if(Vb[b][1].exec(d)){a._f=Vb[b][0]+(e[6]||" ");break}for(b=0,c=Wb.length;c>b;b++)if(Wb[b][1].exec(d)){a._f+=Wb[b][0];break}d.match(Jb)&&(a._f+="Z"),P(a)}else ib.createFromInputFallback(a)}function U(b){var c=b._i,d=yb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?T(b):n(c)?(b._a=c.slice(0),M(b)):o(c)?b._d=new Date(+c):"object"==typeof c?N(b):"number"==typeof c?b._d=new Date(c):ib.createFromInputFallback(b)}function V(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function W(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function X(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function Y(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Z(a,b,c){var d=nb(Math.abs(a)/1e3),e=nb(d/60),f=nb(e/60),g=nb(f/24),h=nb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",nb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,Y.apply({},i)}function $(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=ib(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function _(a,b,c,d,e){var f,g,h=W(a,0,1).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:w(a-1)+g}}function ab(b){var c=b._i,d=b._f;return null===c||d===a&&""===c?ib.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=E().preparse(c)),ib.isMoment(c)?(b=j(c),b._d=new Date(+c._d)):d?n(d)?S(b):P(b):U(b),new g(b))}function bb(a,b){var c;return"string"==typeof b&&(b=a.lang().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),u(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function cb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function db(a,b,c){return"Month"===b?bb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function eb(a,b){return function(c){return null!=c?(db(this,a,c),ib.updateOffset(this,b),this):cb(this,a)}}function fb(a){ib.duration.fn[a]=function(){return this._data[a]}}function gb(a,b){ib.duration.fn["as"+a]=function(){return+this/b}}function hb(a){"undefined"==typeof ender&&(jb=mb.moment,mb.moment=a?c("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",ib):ib)}for(var ib,jb,kb,lb="2.6.0",mb="undefined"!=typeof global?global:this,nb=Math.round,ob=0,pb=1,qb=2,rb=3,sb=4,tb=5,ub=6,vb={},wb={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},xb="undefined"!=typeof module&&module.exports,yb=/^\/?Date\((\-?\d+)/i,zb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ab=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Bb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Cb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Db=/\d\d?/,Eb=/\d{1,3}/,Fb=/\d{1,4}/,Gb=/[+\-]?\d{1,6}/,Hb=/\d+/,Ib=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Jb=/Z|[\+\-]\d\d:?\d\d/gi,Kb=/T/i,Lb=/[\+\-]?\d+(\.\d{1,3})?/,Mb=/\d{1,2}/,Nb=/\d/,Ob=/\d\d/,Pb=/\d{3}/,Qb=/\d{4}/,Rb=/[+-]?\d{6}/,Sb=/[+-]?\d+/,Tb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ub="YYYY-MM-DDTHH:mm:ssZ",Vb=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Wb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Xb=/([\+\-]|\d\d)/gi,Yb=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),Zb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},$b={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},_b={},ac="DDD w W M D d".split(" "),bc="M D H h m s w W".split(" "),cc={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return l(this.year()%100,2)},YYYY:function(){return l(this.year(),4)},YYYYY:function(){return l(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+l(Math.abs(a),6)},gg:function(){return l(this.weekYear()%100,2)},gggg:function(){return l(this.weekYear(),4)},ggggg:function(){return l(this.weekYear(),5)},GG:function(){return l(this.isoWeekYear()%100,2)},GGGG:function(){return l(this.isoWeekYear(),4)},GGGGG:function(){return l(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return t(this.milliseconds()/100)},SS:function(){return l(t(this.milliseconds()/10),2)},SSS:function(){return l(this.milliseconds(),3)},SSSS:function(){return l(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+l(t(a/60),2)+":"+l(t(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+l(t(a/60),2)+l(t(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},dc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];ac.length;)kb=ac.pop(),cc[kb+"o"]=e(cc[kb],kb);for(;bc.length;)kb=bc.pop(),cc[kb+kb]=d(cc[kb],2);for(cc.DDDD=d(cc.DDD,3),i(f.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=ib.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=ib([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return $(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),ib=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=c,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=b(),ab(g)},ib.suppressDeprecationWarnings=!1,ib.createFromInputFallback=c("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),ib.utc=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=c,g._f=d,g._strict=f,g._pf=b(),ab(g).utc()},ib.unix=function(a){return ib(1e3*a)},ib.duration=function(a,b){var c,d,e,f=a,g=null;return ib.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=zb.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[qb])*c,h:t(g[rb])*c,m:t(g[sb])*c,s:t(g[tb])*c,ms:t(g[ub])*c}):(g=Ab.exec(a))&&(c="-"===g[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(g[2]),M:e(g[3]),d:e(g[4]),h:e(g[5]),m:e(g[6]),s:e(g[7]),w:e(g[8])}),d=new h(f),ib.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},ib.version=lb,ib.defaultFormat=Ub,ib.momentProperties=wb,ib.updateOffset=function(){},ib.lang=function(a,b){var c;return a?(b?C(A(a),b):null===b?(D(a),a="en"):vb[a]||E(a),c=ib.duration.fn._lang=ib.fn._lang=E(a),c._abbr):ib.fn._lang._abbr},ib.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),E(a)},ib.isMoment=function(a){return a instanceof g||null!=a&&a.hasOwnProperty("_isAMomentObject")},ib.isDuration=function(a){return a instanceof h},kb=dc.length-1;kb>=0;--kb)s(dc[kb]);ib.normalizeUnits=function(a){return q(a)},ib.invalid=function(a){var b=ib.utc(0/0);return null!=a?i(b._pf,a):b._pf.userInvalidated=!0,b},ib.parseZone=function(){return ib.apply(null,arguments).parseZone()},ib.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)},i(ib.fn=g.prototype,{clone:function(){return ib(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=ib(this).utc();return 0<a.year()&&a.year()<=9999?H(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):H(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return z(this)},isDSTShifted:function(){return this._a?this.isValid()&&p(this._a,(this._isUTC?ib.utc(this._a):ib(this._a)).toArray())>0:!1},parsingFlags:function(){return i({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=H(this,a||ib.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?ib.duration(+b,a):ib.duration(a,b),m(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?ib.duration(+b,a):ib.duration(a,b),m(this,c,-1),this},diff:function(a,b,c){var d,e,f=B(a,this),g=6e4*(this.zone()-f.zone());return b=q(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-ib(this).startOf("month")-(f-ib(f).startOf("month")))/d,e-=6e4*(this.zone()-ib(this).startOf("month").zone()-(f.zone()-ib(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:k(e)},from:function(a,b){return ib.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(ib(),a)},calendar:function(){var a=B(ib(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return x(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=X(a,this.lang()),this.add({d:a-b})):b},month:eb("Month",!0),startOf:function(a){switch(a=q(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=q(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+ib(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+ib(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+B(a,this).startOf(b)},min:function(a){return a=ib.apply(null,arguments),this>a?this:a},max:function(a){return a=ib.apply(null,arguments),a>this?this:a},zone:function(a,b){var c=this._offset||0;return null==a?this._isUTC?c:this._d.getTimezoneOffset():("string"==typeof a&&(a=K(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,c!==a&&(!b||this._changeInProgress?m(this,ib.duration(c-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,ib.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?ib(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return u(this.year(),this.month())},dayOfYear:function(a){var b=nb((ib(this).startOf("day")-ib(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=$(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=$(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=$(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return v(this.year(),1,4)},weeksInYear:function(){var a=this._lang._week;return v(this.year(),a.dow,a.doy)},get:function(a){return a=q(a),this[a]()},set:function(a,b){return a=q(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=E(b),this)}}),ib.fn.millisecond=ib.fn.milliseconds=eb("Milliseconds",!1),ib.fn.second=ib.fn.seconds=eb("Seconds",!1),ib.fn.minute=ib.fn.minutes=eb("Minutes",!1),ib.fn.hour=ib.fn.hours=eb("Hours",!0),ib.fn.date=eb("Date",!0),ib.fn.dates=c("dates accessor is deprecated. Use date instead.",eb("Date",!0)),ib.fn.year=eb("FullYear",!0),ib.fn.years=c("years accessor is deprecated. Use year instead.",eb("FullYear",!0)),ib.fn.days=ib.fn.day,ib.fn.months=ib.fn.month,ib.fn.weeks=ib.fn.week,ib.fn.isoWeeks=ib.fn.isoWeek,ib.fn.quarters=ib.fn.quarter,ib.fn.toJSON=ib.fn.toISOString,i(ib.duration.fn=h.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=k(e/1e3),h.seconds=a%60,b=k(a/60),h.minutes=b%60,c=k(b/60),h.hours=c%24,f+=k(c/24),h.days=f%30,g+=k(f/30),h.months=g%12,d=k(g/12),h.years=d},weeks:function(){return k(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)},humanize:function(a){var b=+this,c=Z(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=ib.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=ib.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=q(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=q(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:ib.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(kb in Yb)Yb.hasOwnProperty(kb)&&(gb(kb,Yb[kb]),fb(kb.toLowerCase()));gb("Weeks",6048e5),ib.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},ib.lang("en",{ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),xb?module.exports=ib:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(mb.moment=jb),ib}),hb(!0)):hb()}).call(this);;/*! 1.4.0 */
!function(){function a(a){if(!a.__listeners){a.upload||(a.upload={}),a.__listeners=[];var b=a.upload.addEventListener;a.upload.addEventListener=function(c,d){a.__listeners[c]=d,b&&b.apply(this,arguments)}}}var b=function(){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(a)return!0}catch(b){if(void 0!=navigator.mimeTypes["application/x-shockwave-flash"])return!0}return!1},c=function(a,b){window.XMLHttpRequest.prototype[a]=b(window.XMLHttpRequest.prototype[a])};if(window.XMLHttpRequest&&(window.FormData?c("setRequestHeader",function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}):(c("open",function(b){return function(c,d,e){a(this),this.__url=d,b.apply(this,[c,d,e])}}),c("getResponseHeader",function(a){return function(b){return this.__fileApiXHR?this.__fileApiXHR.getResponseHeader(b):a.apply(this,[b])}}),c("getAllResponseHeaders",function(a){return function(){return this.__fileApiXHR?this.__fileApiXHR.abort():null==a?null:a.apply(this)}}),c("abort",function(a){return function(){return this.__fileApiXHR?this.__fileApiXHR.abort():null==a?null:a.apply(this)}}),c("setRequestHeader",function(b){return function(c,d){if("__setXHR_"===c){a(this);var e=d(this);e instanceof Function&&e(this)}else this.__requestHeaders=this.__requestHeaders||{},this.__requestHeaders[c]=d,b.apply(this,arguments)}}),c("send",function(a){return function(){var c=this;if(arguments[0]&&arguments[0].__isShim){var d=arguments[0],e={url:c.__url,complete:function(a,b){!a&&c.__listeners.load&&c.__listeners.load({type:"load",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),!a&&c.__listeners.loadend&&c.__listeners.loadend({type:"loadend",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),"abort"===a&&c.__listeners.abort&&c.__listeners.abort({type:"abort",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),void 0!==b.status&&Object.defineProperty(c,"status",{get:function(){return b.status}}),void 0!==b.statusText&&Object.defineProperty(c,"statusText",{get:function(){return b.statusText}}),Object.defineProperty(c,"readyState",{get:function(){return 4}}),void 0!==b.response&&Object.defineProperty(c,"response",{get:function(){return b.response}}),Object.defineProperty(c,"responseText",{get:function(){return b.responseText}}),c.__fileApiXHR=b,c.onreadystatechange()},fileprogress:function(a){a.target=c,c.__listeners.progress&&c.__listeners.progress(a),c.__total=a.total,c.__loaded=a.loaded},headers:c.__requestHeaders};e.data={},e.files={};for(var f=0;f<d.data.length;f++){var g=d.data[f];null!=g.val&&null!=g.val.name&&null!=g.val.size&&null!=g.val.type?e.files[g.key]=g.val:e.data[g.key]=g.val}setTimeout(function(){if(!b())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';c.__fileApiXHR=FileAPI.upload(e)},1)}else a.apply(c,arguments)}})),window.XMLHttpRequest.__isShim=!0),!window.FormData){var d=function(a){if(!b())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';if(!a.__isWrapped&&(null!=a.getAttribute("ng-file-select")||null!=a.getAttribute("data-ng-file-select"))){var c=document.createElement("div");c.innerHTML='<div class="js-fileapi-wrapper" style="position:relative; overflow:hidden"></div>',c=c.firstChild;var d=a.parentNode;d.insertBefore(c,a),d.removeChild(a),c.appendChild(a),a.__isWrapped=!0}},e=function(a){return function(b){var c=FileAPI.getFiles(b);b.target||(b.target={}),b.target.files=c,b.target.files.item=function(a){return b.target.files[a]||null},a(b)}},f=function(a,b){return("change"===b.toLowerCase()||"onchange"===b.toLowerCase())&&"file"==a.getAttribute("type")};HTMLInputElement.prototype.addEventListener&&(HTMLInputElement.prototype.addEventListener=function(a){return function(b,c,g,h){f(this,b)?(d(this),a.apply(this,[b,e(c),g,h])):a.apply(this,[b,c,g,h])}}(HTMLInputElement.prototype.addEventListener)),HTMLInputElement.prototype.attachEvent&&(HTMLInputElement.prototype.attachEvent=function(a){return function(b,c){f(this,b)?(d(this),a.apply(this,[b,e(c)])):a.apply(this,[b,c])}}(HTMLInputElement.prototype.attachEvent)),window.FormData=FormData=function(){return{append:function(a,b,c){this.data.push({key:a,val:b,name:c})},data:[],__isShim:!0}},function(){if(window.FileAPI||(window.FileAPI={}),!FileAPI.upload){var a,c,d,e,f,g=document.createElement("script"),h=document.getElementsByTagName("script");if(window.FileAPI.jsUrl)a=window.FileAPI.jsUrl;else if(window.FileAPI.jsPath)c=window.FileAPI.jsPath;else for(d=0;d<h.length;d++)if(f=h[d].src,e=f.indexOf("angular-file-upload-shim.js"),-1==e&&(e=f.indexOf("angular-file-upload-shim.min.js")),e>-1){c=f.substring(0,e);break}null==FileAPI.staticPath&&(FileAPI.staticPath=c),g.setAttribute("src",a||c+"FileAPI.min.js"),document.getElementsByTagName("head")[0].appendChild(g),FileAPI.hasFlash=b()}}()}window.FileReader||(window.FileReader=function(){function a(a,c){var d={type:a,target:b,loaded:c.loaded,total:c.total,error:c.error};return null!=c.result&&(d.target.result=c.result),d}var b=this,c=!1;this.listeners={},this.addEventListener=function(a,c){b.listeners[a]=b.listeners[a]||[],b.listeners[a].push(c)},this.removeEventListener=function(a,c){b.listeners[a]&&b.listeners[a].splice(b.listeners[a].indexOf(c),1)},this.dispatchEvent=function(a){var c=b.listeners[a.type];if(c)for(var d=0;d<c.length;d++)c[d].call(b,a)},this.onabort=this.onerror=this.onload=this.onloadstart=this.onloadend=this.onprogress=null;var d=function(d){if(c||(c=!0,b.onloadstart&&this.onloadstart(a("loadstart",d))),"load"===d.type){b.onloadend&&b.onloadend(a("loadend",d));var e=a("load",d);b.onload&&b.onload(e),b.dispatchEvent(e)}else if("progress"===d.type){var e=a("progress",d);b.onprogress&&b.onprogress(e),b.dispatchEvent(e)}else{var e=a("error",d);b.onerror&&b.onerror(e),b.dispatchEvent(e)}};this.readAsArrayBuffer=function(a){FileAPI.readAsBinaryString(a,d)},this.readAsBinaryString=function(a){FileAPI.readAsBinaryString(a,d)},this.readAsDataURL=function(a){FileAPI.readAsDataURL(a,d)},this.readAsText=function(a){FileAPI.readAsText(a,d)}})}();;// CodeMirror is the only global var we claim
window.CodeMirror = (function() {
  "use strict";

  // BROWSER SNIFFING

  // Crude, but necessary to handle a number of hard-to-feature-detect
  // bugs and behavior differences.
  var gecko = /gecko\/\d/i.test(navigator.userAgent);
  var ie = /MSIE \d/.test(navigator.userAgent);
  var ie_lt8 = ie && (document.documentMode == null || document.documentMode < 8);
  var ie_lt9 = ie && (document.documentMode == null || document.documentMode < 9);
  var webkit = /WebKit\//.test(navigator.userAgent);
  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(navigator.userAgent);
  var chrome = /Chrome\//.test(navigator.userAgent);
  var opera = /Opera\//.test(navigator.userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var khtml = /KHTML\//.test(navigator.userAgent);
  var mac_geLion = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent);
  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
  var phantom = /PhantomJS/.test(navigator.userAgent);

  var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
  // This is woefully incomplete. Suggestions for alternative methods welcome.
  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
  var mac = ios || /Mac/.test(navigator.platform);
  var windows = /win/i.test(navigator.platform);

  var opera_version = opera && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
  if (opera_version) opera_version = Number(opera_version[1]);
  if (opera_version && opera_version >= 15) { opera = false; webkit = true; }
  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
  var flipCtrlCmd = mac && (qtwebkit || opera && (opera_version == null || opera_version < 12.11));
  var captureMiddleClick = gecko || (ie && !ie_lt9);

  // Optimize some code when these features are not used
  var sawReadOnlySpans = false, sawCollapsedSpans = false;

  // CONSTRUCTOR

  function CodeMirror(place, options) {
    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

    this.options = options = options || {};
    // Determine effective options based on given values and defaults.
    for (var opt in defaults) if (!options.hasOwnProperty(opt) && defaults.hasOwnProperty(opt))
      options[opt] = defaults[opt];
    setGuttersForLineNumbers(options);

    var docStart = typeof options.value == "string" ? 0 : options.value.first;
    var display = this.display = makeDisplay(place, docStart);
    display.wrapper.CodeMirror = this;
    updateGutters(this);
    if (options.autofocus && !mobile) focusInput(this);

    this.state = {keyMaps: [],
                  overlays: [],
                  modeGen: 0,
                  overwrite: false, focused: false,
                  suppressEdits: false, pasteIncoming: false,
                  draggingText: false,
                  highlight: new Delayed()};

    themeChanged(this);
    if (options.lineWrapping)
      this.display.wrapper.className += " CodeMirror-wrap";

    var doc = options.value;
    if (typeof doc == "string") doc = new Doc(options.value, options.mode);
    operation(this, attachDoc)(this, doc);

    // Override magic textarea content restore that IE sometimes does
    // on our hidden textarea on reload
    if (ie) setTimeout(bind(resetInput, this, true), 20);

    registerEventHandlers(this);
    // IE throws unspecified error in certain cases, when
    // trying to access activeElement before onload
    var hasFocus; try { hasFocus = (document.activeElement == display.input); } catch(e) { }
    if (hasFocus || (options.autofocus && !mobile)) setTimeout(bind(onFocus, this), 20);
    else onBlur(this);

    operation(this, function() {
      for (var opt in optionHandlers)
        if (optionHandlers.propertyIsEnumerable(opt))
          optionHandlers[opt](this, options[opt], Init);
      for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
    })();
  }

  // DISPLAY CONSTRUCTOR

  function makeDisplay(place, docStart) {
    var d = {};

    var input = d.input = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none; font-size: 4px;");
    if (webkit) input.style.width = "1000px";
    else input.setAttribute("wrap", "off");
    // if border: 0; -- iOS fails to open keyboard (issue #1287)
    if (ios) input.style.border = "1px solid black";
    input.setAttribute("autocorrect", "off"); input.setAttribute("autocapitalize", "off"); input.setAttribute("spellcheck", "false");

    // Wraps and hides input textarea
    d.inputDiv = elt("div", [input], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    // The actual fake scrollbars.
    d.scrollbarH = elt("div", [elt("div", null, null, "height: 1px")], "CodeMirror-hscrollbar");
    d.scrollbarV = elt("div", [elt("div", null, null, "width: 1px")], "CodeMirror-vscrollbar");
    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
    // DIVs containing the selection and the actual code
    d.lineDiv = elt("div", null, "CodeMirror-code");
    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
    // Blinky cursor, and element used to ensure cursor fits at the end of a line
    d.cursor = elt("div", "\u00a0", "CodeMirror-cursor");
    // Secondary cursor, shown when on a 'jump' in bi-directional text
    d.otherCursor = elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor");
    // Used to measure text size
    d.measure = elt("div", null, "CodeMirror-measure");
    // Wraps everything that needs to exist inside the vertically-padded coordinate system
    d.lineSpace = elt("div", [d.measure, d.selectionDiv, d.lineDiv, d.cursor, d.otherCursor],
                         null, "position: relative; outline: none");
    // Moved around its parent to cover visible view
    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
    // Set to the height of the text, causes scrolling
    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
    // D is needed because behavior of elts with overflow: auto and padding is inconsistent across browsers
    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerCutOff + "px; width: 1px;");
    // Will contain the gutters, if any
    d.gutters = elt("div", null, "CodeMirror-gutters");
    d.lineGutter = null;
    // Provides scrolling
    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
    d.scroller.setAttribute("tabIndex", "-1");
    // The element in which the editor lives.
    d.wrapper = elt("div", [d.inputDiv, d.scrollbarH, d.scrollbarV,
                            d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
    // Work around IE7 z-index bug
    if (ie_lt8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
    if (place.appendChild) place.appendChild(d.wrapper); else place(d.wrapper);

    // Needed to hide big blue blinking cursor on Mobile Safari
    if (ios) input.style.width = "0px";
    if (!webkit) d.scroller.draggable = true;
    // Needed to handle Tab key in KHTML
    if (khtml) { d.inputDiv.style.height = "1px"; d.inputDiv.style.position = "absolute"; }
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    else if (ie_lt8) d.scrollbarH.style.minWidth = d.scrollbarV.style.minWidth = "18px";

    // Current visible range (may be bigger than the view window).
    d.viewOffset = d.lastSizeC = 0;
    d.showingFrom = d.showingTo = docStart;

    // Used to only resize the line number gutter when necessary (when
    // the amount of lines crosses a boundary that makes its width change)
    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
    // See readInput and resetInput
    d.prevInput = "";
    // Set to true when a non-horizontal-scrolling widget is added. As
    // an optimization, widget aligning is skipped when d is false.
    d.alignWidgets = false;
    // Flag that indicates whether we currently expect input to appear
    // (after some event like 'keypress' or 'input') and are polling
    // intensively.
    d.pollingFast = false;
    // Self-resetting timeout for the poller
    d.poll = new Delayed();

    d.cachedCharWidth = d.cachedTextHeight = null;
    d.measureLineCache = [];
    d.measureLineCachePos = 0;

    // Tracks when resetInput has punted to just putting a short
    // string instead of the (large) selection.
    d.inaccurateSelection = false;

    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    d.maxLine = null;
    d.maxLineLength = 0;
    d.maxLineChanged = false;

    // Used for measuring wheel scrolling granularity
    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

    return d;
  }

  // STATE UPDATES

  // Used to get the editor into a consistent state again when options change.

  function loadMode(cm) {
    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
    cm.doc.iter(function(line) {
      if (line.stateAfter) line.stateAfter = null;
      if (line.styles) line.styles = null;
    });
    cm.doc.frontier = cm.doc.first;
    startWorker(cm, 100);
    cm.state.modeGen++;
    if (cm.curOp) regChange(cm);
  }

  function wrappingChanged(cm) {
    if (cm.options.lineWrapping) {
      cm.display.wrapper.className += " CodeMirror-wrap";
      cm.display.sizer.style.minWidth = "";
    } else {
      cm.display.wrapper.className = cm.display.wrapper.className.replace(" CodeMirror-wrap", "");
      computeMaxLength(cm);
    }
    estimateLineHeights(cm);
    regChange(cm);
    clearCaches(cm);
    setTimeout(function(){updateScrollbars(cm);}, 100);
  }

  function estimateHeight(cm) {
    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
    return function(line) {
      if (lineIsHidden(cm.doc, line))
        return 0;
      else if (wrapping)
        return (Math.ceil(line.text.length / perLine) || 1) * th;
      else
        return th;
    };
  }

  function estimateLineHeights(cm) {
    var doc = cm.doc, est = estimateHeight(cm);
    doc.iter(function(line) {
      var estHeight = est(line);
      if (estHeight != line.height) updateLineHeight(line, estHeight);
    });
  }

  function keyMapChanged(cm) {
    var map = keyMap[cm.options.keyMap], style = map.style;
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") +
      (style ? " cm-keymap-" + style : "");
    cm.state.disableInput = map.disableInput;
  }

  function themeChanged(cm) {
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    clearCaches(cm);
  }

  function guttersChanged(cm) {
    updateGutters(cm);
    regChange(cm);
    setTimeout(function(){alignHorizontally(cm);}, 20);
  }

  function updateGutters(cm) {
    var gutters = cm.display.gutters, specs = cm.options.gutters;
    removeChildren(gutters);
    for (var i = 0; i < specs.length; ++i) {
      var gutterClass = specs[i];
      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
      if (gutterClass == "CodeMirror-linenumbers") {
        cm.display.lineGutter = gElt;
        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
      }
    }
    gutters.style.display = i ? "" : "none";
  }

  function lineLength(doc, line) {
    if (line.height == 0) return 0;
    var len = line.text.length, merged, cur = line;
    while (merged = collapsedSpanAtStart(cur)) {
      var found = merged.find();
      cur = getLine(doc, found.from.line);
      len += found.from.ch - found.to.ch;
    }
    cur = line;
    while (merged = collapsedSpanAtEnd(cur)) {
      var found = merged.find();
      len -= cur.text.length - found.from.ch;
      cur = getLine(doc, found.to.line);
      len += cur.text.length - found.to.ch;
    }
    return len;
  }

  function computeMaxLength(cm) {
    var d = cm.display, doc = cm.doc;
    d.maxLine = getLine(doc, doc.first);
    d.maxLineLength = lineLength(doc, d.maxLine);
    d.maxLineChanged = true;
    doc.iter(function(line) {
      var len = lineLength(doc, line);
      if (len > d.maxLineLength) {
        d.maxLineLength = len;
        d.maxLine = line;
      }
    });
  }

  // Make sure the gutters options contains the element
  // "CodeMirror-linenumbers" when the lineNumbers option is true.
  function setGuttersForLineNumbers(options) {
    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
    if (found == -1 && options.lineNumbers) {
      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
    } else if (found > -1 && !options.lineNumbers) {
      options.gutters = options.gutters.slice(0);
      options.gutters.splice(found, 1);
    }
  }

  // SCROLLBARS

  // Re-synchronize the fake scrollbars with the actual size of the
  // content. Optionally force a scrollTop.
  function updateScrollbars(cm) {
    var d = cm.display, docHeight = cm.doc.height;
    var totalHeight = docHeight + paddingVert(d);
    d.sizer.style.minHeight = d.heightForcer.style.top = totalHeight + "px";
    d.gutters.style.height = Math.max(totalHeight, d.scroller.clientHeight - scrollerCutOff) + "px";
    var scrollHeight = Math.max(totalHeight, d.scroller.scrollHeight);
    var needsH = d.scroller.scrollWidth > (d.scroller.clientWidth + 1);
    var needsV = scrollHeight > (d.scroller.clientHeight + 1);
    if (needsV) {
      d.scrollbarV.style.display = "block";
      d.scrollbarV.style.bottom = needsH ? scrollbarWidth(d.measure) + "px" : "0";
      d.scrollbarV.firstChild.style.height =
        (scrollHeight - d.scroller.clientHeight + d.scrollbarV.clientHeight) + "px";
    } else {
      d.scrollbarV.style.display = "";
      d.scrollbarV.firstChild.style.height = "0";
    }
    if (needsH) {
      d.scrollbarH.style.display = "block";
      d.scrollbarH.style.right = needsV ? scrollbarWidth(d.measure) + "px" : "0";
      d.scrollbarH.firstChild.style.width =
        (d.scroller.scrollWidth - d.scroller.clientWidth + d.scrollbarH.clientWidth) + "px";
    } else {
      d.scrollbarH.style.display = "";
      d.scrollbarH.firstChild.style.width = "0";
    }
    if (needsH && needsV) {
      d.scrollbarFiller.style.display = "block";
      d.scrollbarFiller.style.height = d.scrollbarFiller.style.width = scrollbarWidth(d.measure) + "px";
    } else d.scrollbarFiller.style.display = "";
    if (needsH && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
      d.gutterFiller.style.display = "block";
      d.gutterFiller.style.height = scrollbarWidth(d.measure) + "px";
      d.gutterFiller.style.width = d.gutters.offsetWidth + "px";
    } else d.gutterFiller.style.display = "";

    if (mac_geLion && scrollbarWidth(d.measure) === 0) {
      d.scrollbarV.style.minWidth = d.scrollbarH.style.minHeight = mac_geMountainLion ? "18px" : "12px";
      d.scrollbarV.style.pointerEvents = d.scrollbarH.style.pointerEvents = "none";
    }
  }

  function visibleLines(display, doc, viewPort) {
    var top = display.scroller.scrollTop, height = display.wrapper.clientHeight;
    if (typeof viewPort == "number") top = viewPort;
    else if (viewPort) {top = viewPort.top; height = viewPort.bottom - viewPort.top;}
    top = Math.floor(top - paddingTop(display));
    var bottom = Math.ceil(top + height);
    return {from: lineAtHeight(doc, top), to: lineAtHeight(doc, bottom)};
  }

  // LINE NUMBERS

  function alignHorizontally(cm) {
    var display = cm.display;
    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
    var gutterW = display.gutters.offsetWidth, l = comp + "px";
    for (var n = display.lineDiv.firstChild; n; n = n.nextSibling) if (n.alignable) {
      for (var i = 0, a = n.alignable; i < a.length; ++i) a[i].style.left = l;
    }
    if (cm.options.fixedGutter)
      display.gutters.style.left = (comp + gutterW) + "px";
  }

  function maybeUpdateLineNumberWidth(cm) {
    if (!cm.options.lineNumbers) return false;
    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
    if (last.length != display.lineNumChars) {
      var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
      display.lineGutter.style.width = "";
      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding);
      display.lineNumWidth = display.lineNumInnerWidth + padding;
      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
      display.lineGutter.style.width = display.lineNumWidth + "px";
      return true;
    }
    return false;
  }

  function lineNumberFor(options, i) {
    return String(options.lineNumberFormatter(i + options.firstLineNumber));
  }
  function compensateForHScroll(display) {
    return getRect(display.scroller).left - getRect(display.sizer).left;
  }

  // DISPLAY DRAWING

  function updateDisplay(cm, changes, viewPort, forced) {
    var oldFrom = cm.display.showingFrom, oldTo = cm.display.showingTo, updated;
    var visible = visibleLines(cm.display, cm.doc, viewPort);
    for (var first = true;; first = false) {
      var oldWidth = cm.display.scroller.clientWidth;
      if (!updateDisplayInner(cm, changes, visible, forced)) break;
      updated = true;
      changes = [];
      updateSelection(cm);
      updateScrollbars(cm);
      if (first && cm.options.lineWrapping && oldWidth != cm.display.scroller.clientWidth) {
        forced = true;
        continue;
      }
      forced = false;

      // Clip forced viewport to actual scrollable area
      if (viewPort)
        viewPort = Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight,
                            typeof viewPort == "number" ? viewPort : viewPort.top);
      visible = visibleLines(cm.display, cm.doc, viewPort);
      if (visible.from >= cm.display.showingFrom && visible.to <= cm.display.showingTo)
        break;
    }

    if (updated) {
      signalLater(cm, "update", cm);
      if (cm.display.showingFrom != oldFrom || cm.display.showingTo != oldTo)
        signalLater(cm, "viewportChange", cm, cm.display.showingFrom, cm.display.showingTo);
    }
    return updated;
  }

  // Uses a set of changes plus the current scroll position to
  // determine which DOM updates have to be made, and makes the
  // updates.
  function updateDisplayInner(cm, changes, visible, forced) {
    var display = cm.display, doc = cm.doc;
    if (!display.wrapper.clientWidth) {
      display.showingFrom = display.showingTo = doc.first;
      display.viewOffset = 0;
      return;
    }

    // Bail out if the visible area is already rendered and nothing changed.
    if (!forced && changes.length == 0 &&
        visible.from > display.showingFrom && visible.to < display.showingTo)
      return;

    if (maybeUpdateLineNumberWidth(cm))
      changes = [{from: doc.first, to: doc.first + doc.size}];
    var gutterW = display.sizer.style.marginLeft = display.gutters.offsetWidth + "px";
    display.scrollbarH.style.left = cm.options.fixedGutter ? gutterW : "0";

    // Used to determine which lines need their line numbers updated
    var positionsChangedFrom = Infinity;
    if (cm.options.lineNumbers)
      for (var i = 0; i < changes.length; ++i)
        if (changes[i].diff && changes[i].from < positionsChangedFrom) { positionsChangedFrom = changes[i].from; }

    var end = doc.first + doc.size;
    var from = Math.max(visible.from - cm.options.viewportMargin, doc.first);
    var to = Math.min(end, visible.to + cm.options.viewportMargin);
    if (display.showingFrom < from && from - display.showingFrom < 20) from = Math.max(doc.first, display.showingFrom);
    if (display.showingTo > to && display.showingTo - to < 20) to = Math.min(end, display.showingTo);
    if (sawCollapsedSpans) {
      from = lineNo(visualLine(doc, getLine(doc, from)));
      while (to < end && lineIsHidden(doc, getLine(doc, to))) ++to;
    }

    // Create a range of theoretically intact lines, and punch holes
    // in that using the change info.
    var intact = [{from: Math.max(display.showingFrom, doc.first),
                   to: Math.min(display.showingTo, end)}];
    if (intact[0].from >= intact[0].to) intact = [];
    else intact = computeIntact(intact, changes);
    // When merged lines are present, we might have to reduce the
    // intact ranges because changes in continued fragments of the
    // intact lines do require the lines to be redrawn.
    if (sawCollapsedSpans)
      for (var i = 0; i < intact.length; ++i) {
        var range = intact[i], merged;
        while (merged = collapsedSpanAtEnd(getLine(doc, range.to - 1))) {
          var newTo = merged.find().from.line;
          if (newTo > range.from) range.to = newTo;
          else { intact.splice(i--, 1); break; }
        }
      }

    // Clip off the parts that won't be visible
    var intactLines = 0;
    for (var i = 0; i < intact.length; ++i) {
      var range = intact[i];
      if (range.from < from) range.from = from;
      if (range.to > to) range.to = to;
      if (range.from >= range.to) intact.splice(i--, 1);
      else intactLines += range.to - range.from;
    }
    if (!forced && intactLines == to - from && from == display.showingFrom && to == display.showingTo) {
      updateViewOffset(cm);
      return;
    }
    intact.sort(function(a, b) {return a.from - b.from;});

    // Avoid crashing on IE's "unspecified error" when in iframes
    try {
      var focused = document.activeElement;
    } catch(e) {}
    if (intactLines < (to - from) * .7) display.lineDiv.style.display = "none";
    patchDisplay(cm, from, to, intact, positionsChangedFrom);
    display.lineDiv.style.display = "";
    if (focused && document.activeElement != focused && focused.offsetHeight) focused.focus();

    var different = from != display.showingFrom || to != display.showingTo ||
      display.lastSizeC != display.wrapper.clientHeight;
    // This is just a bogus formula that detects when the editor is
    // resized or the font size changes.
    if (different) {
      display.lastSizeC = display.wrapper.clientHeight;
      startWorker(cm, 400);
    }
    display.showingFrom = from; display.showingTo = to;

    updateHeightsInViewport(cm);
    updateViewOffset(cm);

    return true;
  }

  function updateHeightsInViewport(cm) {
    var display = cm.display;
    var prevBottom = display.lineDiv.offsetTop;
    for (var node = display.lineDiv.firstChild, height; node; node = node.nextSibling) if (node.lineObj) {
      if (ie_lt8) {
        var bot = node.offsetTop + node.offsetHeight;
        height = bot - prevBottom;
        prevBottom = bot;
      } else {
        var box = getRect(node);
        height = box.bottom - box.top;
      }
      var diff = node.lineObj.height - height;
      if (height < 2) height = textHeight(display);
      if (diff > .001 || diff < -.001) {
        updateLineHeight(node.lineObj, height);
        var widgets = node.lineObj.widgets;
        if (widgets) for (var i = 0; i < widgets.length; ++i)
          widgets[i].height = widgets[i].node.offsetHeight;
      }
    }
  }

  function updateViewOffset(cm) {
    var off = cm.display.viewOffset = heightAtLine(cm, getLine(cm.doc, cm.display.showingFrom));
    // Position the mover div to align with the current virtual scroll position
    cm.display.mover.style.top = off + "px";
  }

  function computeIntact(intact, changes) {
    for (var i = 0, l = changes.length || 0; i < l; ++i) {
      var change = changes[i], intact2 = [], diff = change.diff || 0;
      for (var j = 0, l2 = intact.length; j < l2; ++j) {
        var range = intact[j];
        if (change.to <= range.from && change.diff) {
          intact2.push({from: range.from + diff, to: range.to + diff});
        } else if (change.to <= range.from || change.from >= range.to) {
          intact2.push(range);
        } else {
          if (change.from > range.from)
            intact2.push({from: range.from, to: change.from});
          if (change.to < range.to)
            intact2.push({from: change.to + diff, to: range.to + diff});
        }
      }
      intact = intact2;
    }
    return intact;
  }

  function getDimensions(cm) {
    var d = cm.display, left = {}, width = {};
    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
      left[cm.options.gutters[i]] = n.offsetLeft;
      width[cm.options.gutters[i]] = n.offsetWidth;
    }
    return {fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth};
  }

  function patchDisplay(cm, from, to, intact, updateNumbersFrom) {
    var dims = getDimensions(cm);
    var display = cm.display, lineNumbers = cm.options.lineNumbers;
    if (!intact.length && (!webkit || !cm.display.currentWheelTarget))
      removeChildren(display.lineDiv);
    var container = display.lineDiv, cur = container.firstChild;

    function rm(node) {
      var next = node.nextSibling;
      if (webkit && mac && cm.display.currentWheelTarget == node) {
        node.style.display = "none";
        node.lineObj = null;
      } else {
        node.parentNode.removeChild(node);
      }
      return next;
    }

    var nextIntact = intact.shift(), lineN = from;
    cm.doc.iter(from, to, function(line) {
      if (nextIntact && nextIntact.to == lineN) nextIntact = intact.shift();
      if (lineIsHidden(cm.doc, line)) {
        if (line.height != 0) updateLineHeight(line, 0);
        if (line.widgets && cur && cur.previousSibling) for (var i = 0; i < line.widgets.length; ++i) {
          var w = line.widgets[i];
          if (w.showIfHidden) {
            var prev = cur.previousSibling;
            if (/pre/i.test(prev.nodeName)) {
              var wrap = elt("div", null, null, "position: relative");
              prev.parentNode.replaceChild(wrap, prev);
              wrap.appendChild(prev);
              prev = wrap;
            }
            var wnode = prev.appendChild(elt("div", [w.node], "CodeMirror-linewidget"));
            if (!w.handleMouseEvents) wnode.ignoreEvents = true;
            positionLineWidget(w, wnode, prev, dims);
          }
        }
      } else if (nextIntact && nextIntact.from <= lineN && nextIntact.to > lineN) {
        // This line is intact. Skip to the actual node. Update its
        // line number if needed.
        while (cur.lineObj != line) cur = rm(cur);
        if (lineNumbers && updateNumbersFrom <= lineN && cur.lineNumber)
          setTextContent(cur.lineNumber, lineNumberFor(cm.options, lineN));
        cur = cur.nextSibling;
      } else {
        // For lines with widgets, make an attempt to find and reuse
        // the existing element, so that widgets aren't needlessly
        // removed and re-inserted into the dom
        if (line.widgets) for (var j = 0, search = cur, reuse; search && j < 20; ++j, search = search.nextSibling)
          if (search.lineObj == line && /div/i.test(search.nodeName)) { reuse = search; break; }
        // This line needs to be generated.
        var lineNode = buildLineElement(cm, line, lineN, dims, reuse);
        if (lineNode != reuse) {
          container.insertBefore(lineNode, cur);
        } else {
          while (cur != reuse) cur = rm(cur);
          cur = cur.nextSibling;
        }

        lineNode.lineObj = line;
      }
      ++lineN;
    });
    while (cur) cur = rm(cur);
  }

  function buildLineElement(cm, line, lineNo, dims, reuse) {
    var built = buildLineContent(cm, line), lineElement = built.pre;
    var markers = line.gutterMarkers, display = cm.display, wrap;

    var bgClass = built.bgClass ? built.bgClass + " " + (line.bgClass || "") : line.bgClass;
    if (!cm.options.lineNumbers && !markers && !bgClass && !line.wrapClass && !line.widgets)
      return lineElement;

    // Lines with gutter elements, widgets or a background class need
    // to be wrapped again, and have the extra elements added to the
    // wrapper div

    if (reuse) {
      reuse.alignable = null;
      var isOk = true, widgetsSeen = 0, insertBefore = null;
      for (var n = reuse.firstChild, next; n; n = next) {
        next = n.nextSibling;
        if (!/\bCodeMirror-linewidget\b/.test(n.className)) {
          reuse.removeChild(n);
        } else {
          for (var i = 0; i < line.widgets.length; ++i) {
            var widget = line.widgets[i];
            if (widget.node == n.firstChild) {
              if (!widget.above && !insertBefore) insertBefore = n;
              positionLineWidget(widget, n, reuse, dims);
              ++widgetsSeen;
              break;
            }
          }
          if (i == line.widgets.length) { isOk = false; break; }
        }
      }
      reuse.insertBefore(lineElement, insertBefore);
      if (isOk && widgetsSeen == line.widgets.length) {
        wrap = reuse;
        reuse.className = line.wrapClass || "";
      }
    }
    if (!wrap) {
      wrap = elt("div", null, line.wrapClass, "position: relative");
      wrap.appendChild(lineElement);
    }
    // Kludge to make sure the styled element lies behind the selection (by z-index)
    if (bgClass)
      wrap.insertBefore(elt("div", null, bgClass + " CodeMirror-linebackground"), wrap.firstChild);
    if (cm.options.lineNumbers || markers) {
      var gutterWrap = wrap.insertBefore(elt("div", null, null, "position: absolute; left: " +
                                             (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"),
                                         wrap.firstChild);
      if (cm.options.fixedGutter) (wrap.alignable || (wrap.alignable = [])).push(gutterWrap);
      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
        wrap.lineNumber = gutterWrap.appendChild(
          elt("div", lineNumberFor(cm.options, lineNo),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
              + display.lineNumInnerWidth + "px"));
      if (markers)
        for (var k = 0; k < cm.options.gutters.length; ++k) {
          var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
          if (found)
            gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
                                       dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
        }
    }
    if (ie_lt8) wrap.style.zIndex = 2;
    if (line.widgets && wrap != reuse) for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
      if (!widget.handleMouseEvents) node.ignoreEvents = true;
      positionLineWidget(widget, node, wrap, dims);
      if (widget.above)
        wrap.insertBefore(node, cm.options.lineNumbers && line.height != 0 ? gutterWrap : lineElement);
      else
        wrap.appendChild(node);
      signalLater(widget, "redraw");
    }
    return wrap;
  }

  function positionLineWidget(widget, node, wrap, dims) {
    if (widget.noHScroll) {
      (wrap.alignable || (wrap.alignable = [])).push(node);
      var width = dims.wrapperWidth;
      node.style.left = dims.fixedPos + "px";
      if (!widget.coverGutter) {
        width -= dims.gutterTotalWidth;
        node.style.paddingLeft = dims.gutterTotalWidth + "px";
      }
      node.style.width = width + "px";
    }
    if (widget.coverGutter) {
      node.style.zIndex = 5;
      node.style.position = "relative";
      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
    }
  }

  // SELECTION / CURSOR

  function updateSelection(cm) {
    var display = cm.display;
    var collapsed = posEq(cm.doc.sel.from, cm.doc.sel.to);
    if (collapsed || cm.options.showCursorWhenSelecting)
      updateSelectionCursor(cm);
    else
      display.cursor.style.display = display.otherCursor.style.display = "none";
    if (!collapsed)
      updateSelectionRange(cm);
    else
      display.selectionDiv.style.display = "none";

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      var headPos = cursorCoords(cm, cm.doc.sel.head, "div");
      var wrapOff = getRect(display.wrapper), lineOff = getRect(display.lineDiv);
      display.inputDiv.style.top = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                                        headPos.top + lineOff.top - wrapOff.top)) + "px";
      display.inputDiv.style.left = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                                         headPos.left + lineOff.left - wrapOff.left)) + "px";
    }
  }

  // No selection, plain cursor
  function updateSelectionCursor(cm) {
    var display = cm.display, pos = cursorCoords(cm, cm.doc.sel.head, "div");
    display.cursor.style.left = pos.left + "px";
    display.cursor.style.top = pos.top + "px";
    display.cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";
    display.cursor.style.display = "";

    if (pos.other) {
      display.otherCursor.style.display = "";
      display.otherCursor.style.left = pos.other.left + "px";
      display.otherCursor.style.top = pos.other.top + "px";
      display.otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
    } else { display.otherCursor.style.display = "none"; }
  }

  // Highlight selection
  function updateSelectionRange(cm) {
    var display = cm.display, doc = cm.doc, sel = cm.doc.sel;
    var fragment = document.createDocumentFragment();
    var clientWidth = display.lineSpace.offsetWidth, pl = paddingLeft(cm.display);

    function add(left, top, width, bottom) {
      if (top < 0) top = 0;
      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
                               "px; top: " + top + "px; width: " + (width == null ? clientWidth - left : width) +
                               "px; height: " + (bottom - top) + "px"));
    }

    function drawForLine(line, fromArg, toArg) {
      var lineObj = getLine(doc, line);
      var lineLen = lineObj.text.length;
      var start, end;
      function coords(ch, bias) {
        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
      }

      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
        var leftPos = coords(from, "left"), rightPos, left, right;
        if (from == to) {
          rightPos = leftPos;
          left = right = leftPos.left;
        } else {
          rightPos = coords(to - 1, "right");
          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
          left = leftPos.left;
          right = rightPos.right;
        }
        if (fromArg == null && from == 0) left = pl;
        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
          add(left, leftPos.top, null, leftPos.bottom);
          left = pl;
          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
        }
        if (toArg == null && to == lineLen) right = clientWidth;
        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
          start = leftPos;
        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
          end = rightPos;
        if (left < pl + 1) left = pl;
        add(left, rightPos.top, right - left, rightPos.bottom);
      });
      return {start: start, end: end};
    }

    if (sel.from.line == sel.to.line) {
      drawForLine(sel.from.line, sel.from.ch, sel.to.ch);
    } else {
      var fromLine = getLine(doc, sel.from.line), toLine = getLine(doc, sel.to.line);
      var singleVLine = visualLine(doc, fromLine) == visualLine(doc, toLine);
      var leftEnd = drawForLine(sel.from.line, sel.from.ch, singleVLine ? fromLine.text.length : null).end;
      var rightStart = drawForLine(sel.to.line, singleVLine ? 0 : null, sel.to.ch).start;
      if (singleVLine) {
        if (leftEnd.top < rightStart.top - 2) {
          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
          add(pl, rightStart.top, rightStart.left, rightStart.bottom);
        } else {
          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
        }
      }
      if (leftEnd.bottom < rightStart.top)
        add(pl, leftEnd.bottom, null, rightStart.top);
    }

    removeChildrenAndAdd(display.selectionDiv, fragment);
    display.selectionDiv.style.display = "";
  }

  // Cursor-blinking
  function restartBlink(cm) {
    if (!cm.state.focused) return;
    var display = cm.display;
    clearInterval(display.blinker);
    var on = true;
    display.cursor.style.visibility = display.otherCursor.style.visibility = "";
    if (cm.options.cursorBlinkRate > 0)
      display.blinker = setInterval(function() {
        display.cursor.style.visibility = display.otherCursor.style.visibility = (on = !on) ? "" : "hidden";
      }, cm.options.cursorBlinkRate);
  }

  // HIGHLIGHT WORKER

  function startWorker(cm, time) {
    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.showingTo)
      cm.state.highlight.set(time, bind(highlightWorker, cm));
  }

  function highlightWorker(cm) {
    var doc = cm.doc;
    if (doc.frontier < doc.first) doc.frontier = doc.first;
    if (doc.frontier >= cm.display.showingTo) return;
    var end = +new Date + cm.options.workTime;
    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
    var changed = [], prevChange;
    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.showingTo + 500), function(line) {
      if (doc.frontier >= cm.display.showingFrom) { // Visible
        var oldStyles = line.styles;
        line.styles = highlightLine(cm, line, state);
        var ischange = !oldStyles || oldStyles.length != line.styles.length;
        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
        if (ischange) {
          if (prevChange && prevChange.end == doc.frontier) prevChange.end++;
          else changed.push(prevChange = {start: doc.frontier, end: doc.frontier + 1});
        }
        line.stateAfter = copyState(doc.mode, state);
      } else {
        processLine(cm, line, state);
        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
      }
      ++doc.frontier;
      if (+new Date > end) {
        startWorker(cm, cm.options.workDelay);
        return true;
      }
    });
    if (changed.length)
      operation(cm, function() {
        for (var i = 0; i < changed.length; ++i)
          regChange(this, changed[i].start, changed[i].end);
      })();
  }

  // Finds the line to start with when starting a parse. Tries to
  // find a line with a stateAfter, so that it can start with a
  // valid state. If that fails, it returns the line with the
  // smallest indentation, which tends to need the least context to
  // parse correctly.
  function findStartLine(cm, n, precise) {
    var minindent, minline, doc = cm.doc;
    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
    for (var search = n; search > lim; --search) {
      if (search <= doc.first) return doc.first;
      var line = getLine(doc, search - 1);
      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
      var indented = countColumn(line.text, null, cm.options.tabSize);
      if (minline == null || minindent > indented) {
        minline = search - 1;
        minindent = indented;
      }
    }
    return minline;
  }

  function getStateBefore(cm, n, precise) {
    var doc = cm.doc, display = cm.display;
    if (!doc.mode.startState) return true;
    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
    if (!state) state = startState(doc.mode);
    else state = copyState(doc.mode, state);
    doc.iter(pos, n, function(line) {
      processLine(cm, line, state);
      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.showingFrom && pos < display.showingTo;
      line.stateAfter = save ? copyState(doc.mode, state) : null;
      ++pos;
    });
    if (precise) doc.frontier = pos;
    return state;
  }

  // POSITION MEASUREMENT

  function paddingTop(display) {return display.lineSpace.offsetTop;}
  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
  function paddingLeft(display) {
    var e = removeChildrenAndAdd(display.measure, elt("pre", null, null, "text-align: left")).appendChild(elt("span", "x"));
    return e.offsetLeft;
  }

  function measureChar(cm, line, ch, data, bias) {
    var dir = -1;
    data = data || measureLine(cm, line);
    if (data.crude) {
      var left = data.left + ch * data.width;
      return {left: left, right: left + data.width, top: data.top, bottom: data.bottom};
    }

    for (var pos = ch;; pos += dir) {
      var r = data[pos];
      if (r) break;
      if (dir < 0 && pos == 0) dir = 1;
    }
    bias = pos > ch ? "left" : pos < ch ? "right" : bias;
    if (bias == "left" && r.leftSide) r = r.leftSide;
    else if (bias == "right" && r.rightSide) r = r.rightSide;
    return {left: pos < ch ? r.right : r.left,
            right: pos > ch ? r.left : r.right,
            top: r.top,
            bottom: r.bottom};
  }

  function findCachedMeasurement(cm, line) {
    var cache = cm.display.measureLineCache;
    for (var i = 0; i < cache.length; ++i) {
      var memo = cache[i];
      if (memo.text == line.text && memo.markedSpans == line.markedSpans &&
          cm.display.scroller.clientWidth == memo.width &&
          memo.classes == line.textClass + "|" + line.wrapClass)
        return memo;
    }
  }

  function clearCachedMeasurement(cm, line) {
    var exists = findCachedMeasurement(cm, line);
    if (exists) exists.text = exists.measure = exists.markedSpans = null;
  }

  function measureLine(cm, line) {
    // First look in the cache
    var cached = findCachedMeasurement(cm, line);
    if (cached) return cached.measure;

    // Failing that, recompute and store result in cache
    var measure = measureLineInner(cm, line);
    var cache = cm.display.measureLineCache;
    var memo = {text: line.text, width: cm.display.scroller.clientWidth,
                markedSpans: line.markedSpans, measure: measure,
                classes: line.textClass + "|" + line.wrapClass};
    if (cache.length == 16) cache[++cm.display.measureLineCachePos % 16] = memo;
    else cache.push(memo);
    return measure;
  }

  function measureLineInner(cm, line) {
    if (!cm.options.lineWrapping && line.text.length >= cm.options.crudeMeasuringFrom)
      return crudelyMeasureLine(cm, line);

    var display = cm.display, measure = emptyArray(line.text.length);
    var pre = buildLineContent(cm, line, measure, true).pre;

    // IE does not cache element positions of inline elements between
    // calls to getBoundingClientRect. This makes the loop below,
    // which gathers the positions of all the characters on the line,
    // do an amount of layout work quadratic to the number of
    // characters. When line wrapping is off, we try to improve things
    // by first subdividing the line into a bunch of inline blocks, so
    // that IE can reuse most of the layout information from caches
    // for those blocks. This does interfere with line wrapping, so it
    // doesn't work when wrapping is on, but in that case the
    // situation is slightly better, since IE does cache line-wrapping
    // information and only recomputes per-line.
    if (ie && !ie_lt8 && !cm.options.lineWrapping && pre.childNodes.length > 100) {
      var fragment = document.createDocumentFragment();
      var chunk = 10, n = pre.childNodes.length;
      for (var i = 0, chunks = Math.ceil(n / chunk); i < chunks; ++i) {
        var wrap = elt("div", null, null, "display: inline-block");
        for (var j = 0; j < chunk && n; ++j) {
          wrap.appendChild(pre.firstChild);
          --n;
        }
        fragment.appendChild(wrap);
      }
      pre.appendChild(fragment);
    }

    removeChildrenAndAdd(display.measure, pre);

    var outer = getRect(display.lineDiv);
    var vranges = [], data = emptyArray(line.text.length), maxBot = pre.offsetHeight;
    // Work around an IE7/8 bug where it will sometimes have randomly
    // replaced our pre with a clone at this point.
    if (ie_lt9 && display.measure.first != pre)
      removeChildrenAndAdd(display.measure, pre);

    function measureRect(rect) {
      var top = rect.top - outer.top, bot = rect.bottom - outer.top;
      if (bot > maxBot) bot = maxBot;
      if (top < 0) top = 0;
      for (var i = vranges.length - 2; i >= 0; i -= 2) {
        var rtop = vranges[i], rbot = vranges[i+1];
        if (rtop > bot || rbot < top) continue;
        if (rtop <= top && rbot >= bot ||
            top <= rtop && bot >= rbot ||
            Math.min(bot, rbot) - Math.max(top, rtop) >= (bot - top) >> 1) {
          vranges[i] = Math.min(top, rtop);
          vranges[i+1] = Math.max(bot, rbot);
          break;
        }
      }
      if (i < 0) { i = vranges.length; vranges.push(top, bot); }
      return {left: rect.left - outer.left,
              right: rect.right - outer.left,
              top: i, bottom: null};
    }
    function finishRect(rect) {
      rect.bottom = vranges[rect.top+1];
      rect.top = vranges[rect.top];
    }

    for (var i = 0, cur; i < measure.length; ++i) if (cur = measure[i]) {
      var node = cur, rect = null;
      // A widget might wrap, needs special care
      if (/\bCodeMirror-widget\b/.test(cur.className) && cur.getClientRects) {
        if (cur.firstChild.nodeType == 1) node = cur.firstChild;
        var rects = node.getClientRects();
        if (rects.length > 1) {
          rect = data[i] = measureRect(rects[0]);
          rect.rightSide = measureRect(rects[rects.length - 1]);
        }
      }
      if (!rect) rect = data[i] = measureRect(getRect(node));
      if (cur.measureRight) rect.right = getRect(cur.measureRight).left;
      if (cur.leftSide) rect.leftSide = measureRect(getRect(cur.leftSide));
    }
    removeChildren(cm.display.measure);
    for (var i = 0, cur; i < data.length; ++i) if (cur = data[i]) {
      finishRect(cur);
      if (cur.leftSide) finishRect(cur.leftSide);
      if (cur.rightSide) finishRect(cur.rightSide);
    }
    return data;
  }

  function crudelyMeasureLine(cm, line) {
    var copy = new Line(line.text.slice(0, 100), null);
    if (line.textClass) copy.textClass = line.textClass;
    var measure = measureLineInner(cm, copy);
    var left = measureChar(cm, copy, 0, measure, "left");
    var right = measureChar(cm, copy, 99, measure, "right");
    return {crude: true, top: left.top, left: left.left, bottom: left.bottom, width: (right.right - left.left) / 100};
  }

  function measureLineWidth(cm, line) {
    var hasBadSpan = false;
    if (line.markedSpans) for (var i = 0; i < line.markedSpans; ++i) {
      var sp = line.markedSpans[i];
      if (sp.collapsed && (sp.to == null || sp.to == line.text.length)) hasBadSpan = true;
    }
    var cached = !hasBadSpan && findCachedMeasurement(cm, line);
    if (cached || line.text.length >= cm.options.crudeMeasuringFrom)
      return measureChar(cm, line, line.text.length, cached && cached.measure, "right").right;

    var pre = buildLineContent(cm, line, null, true).pre;
    var end = pre.appendChild(zeroWidthElement(cm.display.measure));
    removeChildrenAndAdd(cm.display.measure, pre);
    return getRect(end).right - getRect(cm.display.lineDiv).left;
  }

  function clearCaches(cm) {
    cm.display.measureLineCache.length = cm.display.measureLineCachePos = 0;
    cm.display.cachedCharWidth = cm.display.cachedTextHeight = null;
    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
    cm.display.lineNumChars = null;
  }

  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

  // Context is one of "line", "div" (display.lineDiv), "local"/null (editor), or "page"
  function intoCoordSystem(cm, lineObj, rect, context) {
    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
      var size = widgetHeight(lineObj.widgets[i]);
      rect.top += size; rect.bottom += size;
    }
    if (context == "line") return rect;
    if (!context) context = "local";
    var yOff = heightAtLine(cm, lineObj);
    if (context == "local") yOff += paddingTop(cm.display);
    else yOff -= cm.display.viewOffset;
    if (context == "page" || context == "window") {
      var lOff = getRect(cm.display.lineSpace);
      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
      rect.left += xOff; rect.right += xOff;
    }
    rect.top += yOff; rect.bottom += yOff;
    return rect;
  }

  // Context may be "window", "page", "div", or "local"/null
  // Result is in "div" coords
  function fromCoordSystem(cm, coords, context) {
    if (context == "div") return coords;
    var left = coords.left, top = coords.top;
    // First move into "page" coordinate system
    if (context == "page") {
      left -= pageScrollX();
      top -= pageScrollY();
    } else if (context == "local" || !context) {
      var localBox = getRect(cm.display.sizer);
      left += localBox.left;
      top += localBox.top;
    }

    var lineSpaceBox = getRect(cm.display.lineSpace);
    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
  }

  function charCoords(cm, pos, context, lineObj, bias) {
    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, null, bias), context);
  }

  function cursorCoords(cm, pos, context, lineObj, measurement) {
    lineObj = lineObj || getLine(cm.doc, pos.line);
    if (!measurement) measurement = measureLine(cm, lineObj);
    function get(ch, right) {
      var m = measureChar(cm, lineObj, ch, measurement, right ? "right" : "left");
      if (right) m.left = m.right; else m.right = m.left;
      return intoCoordSystem(cm, lineObj, m, context);
    }
    function getBidi(ch, partPos) {
      var part = order[partPos], right = part.level % 2;
      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
        part = order[--partPos];
        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
        right = true;
      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
        part = order[++partPos];
        ch = bidiLeft(part) - part.level % 2;
        right = false;
      }
      if (right && ch == part.to && ch > part.from) return get(ch - 1);
      return get(ch, right);
    }
    var order = getOrder(lineObj), ch = pos.ch;
    if (!order) return get(ch);
    var partPos = getBidiPartAt(order, ch);
    var val = getBidi(ch, partPos);
    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
    return val;
  }

  function PosWithInfo(line, ch, outside, xRel) {
    var pos = new Pos(line, ch);
    pos.xRel = xRel;
    if (outside) pos.outside = true;
    return pos;
  }

  // Coords must be lineSpace-local
  function coordsChar(cm, x, y) {
    var doc = cm.doc;
    y += cm.display.viewOffset;
    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
    var lineNo = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
    if (lineNo > last)
      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
    if (x < 0) x = 0;

    for (;;) {
      var lineObj = getLine(doc, lineNo);
      var found = coordsCharInner(cm, lineObj, lineNo, x, y);
      var merged = collapsedSpanAtEnd(lineObj);
      var mergedPos = merged && merged.find();
      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
        lineNo = mergedPos.to.line;
      else
        return found;
    }
  }

  function coordsCharInner(cm, lineObj, lineNo, x, y) {
    var innerOff = y - heightAtLine(cm, lineObj);
    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
    var measurement = measureLine(cm, lineObj);

    function getX(ch) {
      var sp = cursorCoords(cm, Pos(lineNo, ch), "line",
                            lineObj, measurement);
      wrongLine = true;
      if (innerOff > sp.bottom) return sp.left - adjust;
      else if (innerOff < sp.top) return sp.left + adjust;
      else wrongLine = false;
      return sp.left;
    }

    var bidi = getOrder(lineObj), dist = lineObj.text.length;
    var from = lineLeft(lineObj), to = lineRight(lineObj);
    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
    // Do a binary search between these bounds.
    for (;;) {
      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
        var ch = x < fromX || x - fromX <= toX - x ? from : to;
        var xDiff = x - (ch == from ? fromX : toX);
        while (isExtendingChar.test(lineObj.text.charAt(ch))) ++ch;
        var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
                              xDiff < 0 ? -1 : xDiff ? 1 : 0);
        return pos;
      }
      var step = Math.ceil(dist / 2), middle = from + step;
      if (bidi) {
        middle = from;
        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
      }
      var middleX = getX(middle);
      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
    }
  }

  var measureText;
  function textHeight(display) {
    if (display.cachedTextHeight != null) return display.cachedTextHeight;
    if (measureText == null) {
      measureText = elt("pre");
      // Measure a bunch of lines, for browsers that compute
      // fractional heights.
      for (var i = 0; i < 49; ++i) {
        measureText.appendChild(document.createTextNode("x"));
        measureText.appendChild(elt("br"));
      }
      measureText.appendChild(document.createTextNode("x"));
    }
    removeChildrenAndAdd(display.measure, measureText);
    var height = measureText.offsetHeight / 50;
    if (height > 3) display.cachedTextHeight = height;
    removeChildren(display.measure);
    return height || 1;
  }

  function charWidth(display) {
    if (display.cachedCharWidth != null) return display.cachedCharWidth;
    var anchor = elt("span", "x");
    var pre = elt("pre", [anchor]);
    removeChildrenAndAdd(display.measure, pre);
    var width = anchor.offsetWidth;
    if (width > 2) display.cachedCharWidth = width;
    return width || 10;
  }

  // OPERATIONS

  // Operations are used to wrap changes in such a way that each
  // change won't have to update the cursor and display (which would
  // be awkward, slow, and error-prone), but instead updates are
  // batched and then all combined and executed at once.

  var nextOpId = 0;
  function startOperation(cm) {
    cm.curOp = {
      // An array of ranges of lines that have to be updated. See
      // updateDisplay.
      changes: [],
      forceUpdate: false,
      updateInput: null,
      userSelChange: null,
      textChanged: null,
      selectionChanged: false,
      cursorActivity: false,
      updateMaxLine: false,
      updateScrollPos: false,
      id: ++nextOpId
    };
    if (!delayedCallbackDepth++) delayedCallbacks = [];
  }

  function endOperation(cm) {
    var op = cm.curOp, doc = cm.doc, display = cm.display;
    cm.curOp = null;

    if (op.updateMaxLine) computeMaxLength(cm);
    if (display.maxLineChanged && !cm.options.lineWrapping && display.maxLine) {
      var width = measureLineWidth(cm, display.maxLine);
      display.sizer.style.minWidth = Math.max(0, width + 3 + scrollerCutOff) + "px";
      display.maxLineChanged = false;
      var maxScrollLeft = Math.max(0, display.sizer.offsetLeft + display.sizer.offsetWidth - display.scroller.clientWidth);
      if (maxScrollLeft < doc.scrollLeft && !op.updateScrollPos)
        setScrollLeft(cm, Math.min(display.scroller.scrollLeft, maxScrollLeft), true);
    }
    var newScrollPos, updated;
    if (op.updateScrollPos) {
      newScrollPos = op.updateScrollPos;
    } else if (op.selectionChanged && display.scroller.clientHeight) { // don't rescroll if not visible
      var coords = cursorCoords(cm, doc.sel.head);
      newScrollPos = calculateScrollPos(cm, coords.left, coords.top, coords.left, coords.bottom);
    }
    if (op.changes.length || op.forceUpdate || newScrollPos && newScrollPos.scrollTop != null) {
      updated = updateDisplay(cm, op.changes, newScrollPos && newScrollPos.scrollTop, op.forceUpdate);
      if (cm.display.scroller.offsetHeight) cm.doc.scrollTop = cm.display.scroller.scrollTop;
    }
    if (!updated && op.selectionChanged) updateSelection(cm);
    if (op.updateScrollPos) {
      display.scroller.scrollTop = display.scrollbarV.scrollTop = doc.scrollTop = newScrollPos.scrollTop;
      display.scroller.scrollLeft = display.scrollbarH.scrollLeft = doc.scrollLeft = newScrollPos.scrollLeft;
      alignHorizontally(cm);
      if (op.scrollToPos)
        scrollPosIntoView(cm, clipPos(cm.doc, op.scrollToPos.from),
                          clipPos(cm.doc, op.scrollToPos.to), op.scrollToPos.margin);
    } else if (newScrollPos) {
      scrollCursorIntoView(cm);
    }
    if (op.selectionChanged) restartBlink(cm);

    if (cm.state.focused && op.updateInput)
      resetInput(cm, op.userSelChange);

    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
    if (hidden) for (var i = 0; i < hidden.length; ++i)
      if (!hidden[i].lines.length) signal(hidden[i], "hide");
    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

    var delayed;
    if (!--delayedCallbackDepth) {
      delayed = delayedCallbacks;
      delayedCallbacks = null;
    }
    if (op.textChanged)
      signal(cm, "change", cm, op.textChanged);
    if (op.cursorActivity) signal(cm, "cursorActivity", cm);
    if (delayed) for (var i = 0; i < delayed.length; ++i) delayed[i]();
  }

  // Wraps a function in an operation. Returns the wrapped function.
  function operation(cm1, f) {
    return function() {
      var cm = cm1 || this, withOp = !cm.curOp;
      if (withOp) startOperation(cm);
      try { var result = f.apply(cm, arguments); }
      finally { if (withOp) endOperation(cm); }
      return result;
    };
  }
  function docOperation(f) {
    return function() {
      var withOp = this.cm && !this.cm.curOp, result;
      if (withOp) startOperation(this.cm);
      try { result = f.apply(this, arguments); }
      finally { if (withOp) endOperation(this.cm); }
      return result;
    };
  }
  function runInOp(cm, f) {
    var withOp = !cm.curOp, result;
    if (withOp) startOperation(cm);
    try { result = f(); }
    finally { if (withOp) endOperation(cm); }
    return result;
  }

  function regChange(cm, from, to, lendiff) {
    if (from == null) from = cm.doc.first;
    if (to == null) to = cm.doc.first + cm.doc.size;
    cm.curOp.changes.push({from: from, to: to, diff: lendiff});
  }

  // INPUT HANDLING

  function slowPoll(cm) {
    if (cm.display.pollingFast) return;
    cm.display.poll.set(cm.options.pollInterval, function() {
      readInput(cm);
      if (cm.state.focused) slowPoll(cm);
    });
  }

  function fastPoll(cm) {
    var missed = false;
    cm.display.pollingFast = true;
    function p() {
      var changed = readInput(cm);
      if (!changed && !missed) {missed = true; cm.display.poll.set(60, p);}
      else {cm.display.pollingFast = false; slowPoll(cm);}
    }
    cm.display.poll.set(20, p);
  }

  // prevInput is a hack to work with IME. If we reset the textarea
  // on every change, that breaks IME. So we look for changes
  // compared to the previous content instead. (Modern browsers have
  // events that indicate IME taking place, but these are not widely
  // supported or compatible enough yet to rely on.)
  function readInput(cm) {
    var input = cm.display.input, prevInput = cm.display.prevInput, doc = cm.doc, sel = doc.sel;
    if (!cm.state.focused || hasSelection(input) || isReadOnly(cm) || cm.state.disableInput) return false;
    if (cm.state.pasteIncoming && cm.state.fakedLastChar) {
      input.value = input.value.substring(0, input.value.length - 1);
      cm.state.fakedLastChar = false;
    }
    var text = input.value;
    if (text == prevInput && posEq(sel.from, sel.to)) return false;
    if (ie && !ie_lt9 && cm.display.inputHasSelection === text) {
      resetInput(cm, true);
      return false;
    }

    var withOp = !cm.curOp;
    if (withOp) startOperation(cm);
    sel.shift = false;
    var same = 0, l = Math.min(prevInput.length, text.length);
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;
    var from = sel.from, to = sel.to;
    if (same < prevInput.length)
      from = Pos(from.line, from.ch - (prevInput.length - same));
    else if (cm.state.overwrite && posEq(from, to) && !cm.state.pasteIncoming)
      to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + (text.length - same)));

    var updateInput = cm.curOp.updateInput;
    var changeEvent = {from: from, to: to, text: splitLines(text.slice(same)),
                       origin: cm.state.pasteIncoming ? "paste" : "+input"};
    makeChange(cm.doc, changeEvent, "end");
    cm.curOp.updateInput = updateInput;
    signalLater(cm, "inputRead", cm, changeEvent);

    if (text.length > 1000 || text.indexOf("\n") > -1) input.value = cm.display.prevInput = "";
    else cm.display.prevInput = text;
    if (withOp) endOperation(cm);
    cm.state.pasteIncoming = false;
    return true;
  }

  function resetInput(cm, user) {
    var minimal, selected, doc = cm.doc;
    if (!posEq(doc.sel.from, doc.sel.to)) {
      cm.display.prevInput = "";
      minimal = hasCopyEvent &&
        (doc.sel.to.line - doc.sel.from.line > 100 || (selected = cm.getSelection()).length > 1000);
      var content = minimal ? "-" : selected || cm.getSelection();
      cm.display.input.value = content;
      if (cm.state.focused) selectInput(cm.display.input);
      if (ie && !ie_lt9) cm.display.inputHasSelection = content;
    } else if (user) {
      cm.display.prevInput = cm.display.input.value = "";
      if (ie && !ie_lt9) cm.display.inputHasSelection = null;
    }
    cm.display.inaccurateSelection = minimal;
  }

  function focusInput(cm) {
    if (cm.options.readOnly != "nocursor" && (!mobile || document.activeElement != cm.display.input))
      cm.display.input.focus();
  }

  function isReadOnly(cm) {
    return cm.options.readOnly || cm.doc.cantEdit;
  }

  // EVENT HANDLERS

  function registerEventHandlers(cm) {
    var d = cm.display;
    on(d.scroller, "mousedown", operation(cm, onMouseDown));
    if (ie)
      on(d.scroller, "dblclick", operation(cm, function(e) {
        if (signalDOMEvent(cm, e)) return;
        var pos = posFromMouse(cm, e);
        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
        e_preventDefault(e);
        var word = findWordAt(getLine(cm.doc, pos.line).text, pos);
        extendSelection(cm.doc, word.from, word.to);
      }));
    else
      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
    on(d.lineSpace, "selectstart", function(e) {
      if (!eventInWidget(d, e)) e_preventDefault(e);
    });
    // Gecko browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for Gecko.
    if (!captureMiddleClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

    on(d.scroller, "scroll", function() {
      if (d.scroller.clientHeight) {
        setScrollTop(cm, d.scroller.scrollTop);
        setScrollLeft(cm, d.scroller.scrollLeft, true);
        signal(cm, "scroll", cm);
      }
    });
    on(d.scrollbarV, "scroll", function() {
      if (d.scroller.clientHeight) setScrollTop(cm, d.scrollbarV.scrollTop);
    });
    on(d.scrollbarH, "scroll", function() {
      if (d.scroller.clientHeight) setScrollLeft(cm, d.scrollbarH.scrollLeft);
    });

    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

    function reFocus() { if (cm.state.focused) setTimeout(bind(focusInput, cm), 0); }
    on(d.scrollbarH, "mousedown", reFocus);
    on(d.scrollbarV, "mousedown", reFocus);
    // Prevent wrapper from ever scrolling
    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

    var resizeTimer;
    function onResize() {
      if (resizeTimer == null) resizeTimer = setTimeout(function() {
        resizeTimer = null;
        // Might be a text scaling operation, clear size caches.
        d.cachedCharWidth = d.cachedTextHeight = knownScrollbarWidth = null;
        clearCaches(cm);
        runInOp(cm, bind(regChange, cm));
      }, 100);
    }
    on(window, "resize", onResize);
    // Above handler holds on to the editor and its data structures.
    // Here we poll to unregister it when the editor is no longer in
    // the document, so that it can be garbage-collected.
    function unregister() {
      for (var p = d.wrapper.parentNode; p && p != document.body; p = p.parentNode) {}
      if (p) setTimeout(unregister, 5000);
      else off(window, "resize", onResize);
    }
    setTimeout(unregister, 5000);

    on(d.input, "keyup", operation(cm, function(e) {
      if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
      if (e.keyCode == 16) cm.doc.sel.shift = false;
    }));
    on(d.input, "input", function() {
      if (ie && !ie_lt9 && cm.display.inputHasSelection) cm.display.inputHasSelection = null;
      fastPoll(cm);
    });
    on(d.input, "keydown", operation(cm, onKeyDown));
    on(d.input, "keypress", operation(cm, onKeyPress));
    on(d.input, "focus", bind(onFocus, cm));
    on(d.input, "blur", bind(onBlur, cm));

    function drag_(e) {
      if (signalDOMEvent(cm, e) || cm.options.onDragEvent && cm.options.onDragEvent(cm, addStop(e))) return;
      e_stop(e);
    }
    if (cm.options.dragDrop) {
      on(d.scroller, "dragstart", function(e){onDragStart(cm, e);});
      on(d.scroller, "dragenter", drag_);
      on(d.scroller, "dragover", drag_);
      on(d.scroller, "drop", operation(cm, onDrop));
    }
    on(d.scroller, "paste", function(e) {
      if (eventInWidget(d, e)) return;
      focusInput(cm);
      fastPoll(cm);
    });
    on(d.input, "paste", function() {
      // Workaround for webkit bug https://bugs.webkit.org/show_bug.cgi?id=90206
      // Add a char to the end of textarea before paste occur so that
      // selection doesn't span to the end of textarea.
      if (webkit && !cm.state.fakedLastChar && !(new Date - cm.state.lastMiddleDown < 200)) {
        var start = d.input.selectionStart, end = d.input.selectionEnd;
        d.input.value += "$";
        d.input.selectionStart = start;
        d.input.selectionEnd = end;
        cm.state.fakedLastChar = true;
      }
      cm.state.pasteIncoming = true;
      fastPoll(cm);
    });

    function prepareCopy() {
      if (d.inaccurateSelection) {
        d.prevInput = "";
        d.inaccurateSelection = false;
        d.input.value = cm.getSelection();
        selectInput(d.input);
      }
    }
    on(d.input, "cut", prepareCopy);
    on(d.input, "copy", prepareCopy);

    // Needed to handle Tab key in KHTML
    if (khtml) on(d.sizer, "mouseup", function() {
        if (document.activeElement == d.input) d.input.blur();
        focusInput(cm);
    });
  }

  function eventInWidget(display, e) {
    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
      if (!n || n.ignoreEvents || n.parentNode == display.sizer && n != display.mover) return true;
    }
  }

  function posFromMouse(cm, e, liberal) {
    var display = cm.display;
    if (!liberal) {
      var target = e_target(e);
      if (target == display.scrollbarH || target == display.scrollbarH.firstChild ||
          target == display.scrollbarV || target == display.scrollbarV.firstChild ||
          target == display.scrollbarFiller || target == display.gutterFiller) return null;
    }
    var x, y, space = getRect(display.lineSpace);
    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
    try { x = e.clientX; y = e.clientY; } catch (e) { return null; }
    return coordsChar(cm, x - space.left, y - space.top);
  }

  var lastClick, lastDoubleClick;
  function onMouseDown(e) {
    if (signalDOMEvent(this, e)) return;
    var cm = this, display = cm.display, doc = cm.doc, sel = doc.sel;
    sel.shift = e.shiftKey;

    if (eventInWidget(display, e)) {
      if (!webkit) {
        display.scroller.draggable = false;
        setTimeout(function(){display.scroller.draggable = true;}, 100);
      }
      return;
    }
    if (clickInGutter(cm, e)) return;
    var start = posFromMouse(cm, e);

    switch (e_button(e)) {
    case 3:
      if (captureMiddleClick) onContextMenu.call(cm, cm, e);
      return;
    case 2:
      if (webkit) cm.state.lastMiddleDown = +new Date;
      if (start) extendSelection(cm.doc, start);
      setTimeout(bind(focusInput, cm), 20);
      e_preventDefault(e);
      return;
    }
    // For button 1, if it was clicked inside the editor
    // (posFromMouse returning non-null), we have to adjust the
    // selection.
    if (!start) {if (e_target(e) == display.scroller) e_preventDefault(e); return;}

    if (!cm.state.focused) onFocus(cm);

    var now = +new Date, type = "single";
    if (lastDoubleClick && lastDoubleClick.time > now - 400 && posEq(lastDoubleClick.pos, start)) {
      type = "triple";
      e_preventDefault(e);
      setTimeout(bind(focusInput, cm), 20);
      selectLine(cm, start.line);
    } else if (lastClick && lastClick.time > now - 400 && posEq(lastClick.pos, start)) {
      type = "double";
      lastDoubleClick = {time: now, pos: start};
      e_preventDefault(e);
      var word = findWordAt(getLine(doc, start.line).text, start);
      extendSelection(cm.doc, word.from, word.to);
    } else { lastClick = {time: now, pos: start}; }

    var last = start;
    if (cm.options.dragDrop && dragAndDrop && !isReadOnly(cm) && !posEq(sel.from, sel.to) &&
        !posLess(start, sel.from) && !posLess(sel.to, start) && type == "single") {
      var dragEnd = operation(cm, function(e2) {
        if (webkit) display.scroller.draggable = false;
        cm.state.draggingText = false;
        off(document, "mouseup", dragEnd);
        off(display.scroller, "drop", dragEnd);
        if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
          e_preventDefault(e2);
          extendSelection(cm.doc, start);
          focusInput(cm);
        }
      });
      // Let the drag handler handle this.
      if (webkit) display.scroller.draggable = true;
      cm.state.draggingText = dragEnd;
      // IE's approach to draggable
      if (display.scroller.dragDrop) display.scroller.dragDrop();
      on(document, "mouseup", dragEnd);
      on(display.scroller, "drop", dragEnd);
      return;
    }
    e_preventDefault(e);
    if (type == "single") extendSelection(cm.doc, clipPos(doc, start));

    var startstart = sel.from, startend = sel.to, lastPos = start;

    function doSelect(cur) {
      if (posEq(lastPos, cur)) return;
      lastPos = cur;

      if (type == "single") {
        extendSelection(cm.doc, clipPos(doc, start), cur);
        return;
      }

      startstart = clipPos(doc, startstart);
      startend = clipPos(doc, startend);
      if (type == "double") {
        var word = findWordAt(getLine(doc, cur.line).text, cur);
        if (posLess(cur, startstart)) extendSelection(cm.doc, word.from, startend);
        else extendSelection(cm.doc, startstart, word.to);
      } else if (type == "triple") {
        if (posLess(cur, startstart)) extendSelection(cm.doc, startend, clipPos(doc, Pos(cur.line, 0)));
        else extendSelection(cm.doc, startstart, clipPos(doc, Pos(cur.line + 1, 0)));
      }
    }

    var editorSize = getRect(display.wrapper);
    // Used to ensure timeout re-tries don't fire when another extend
    // happened in the meantime (clearTimeout isn't reliable -- at
    // least on Chrome, the timeouts still happen even when cleared,
    // if the clear happens after their scheduled firing time).
    var counter = 0;

    function extend(e) {
      var curCount = ++counter;
      var cur = posFromMouse(cm, e, true);
      if (!cur) return;
      if (!posEq(cur, last)) {
        if (!cm.state.focused) onFocus(cm);
        last = cur;
        doSelect(cur);
        var visible = visibleLines(display, doc);
        if (cur.line >= visible.to || cur.line < visible.from)
          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
      } else {
        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
        if (outside) setTimeout(operation(cm, function() {
          if (counter != curCount) return;
          display.scroller.scrollTop += outside;
          extend(e);
        }), 50);
      }
    }

    function done(e) {
      counter = Infinity;
      e_preventDefault(e);
      focusInput(cm);
      off(document, "mousemove", move);
      off(document, "mouseup", up);
    }

    var move = operation(cm, function(e) {
      if (!ie && !e_button(e)) done(e);
      else extend(e);
    });
    var up = operation(cm, done);
    on(document, "mousemove", move);
    on(document, "mouseup", up);
  }

  function gutterEvent(cm, e, type, prevent, signalfn) {
    try { var mX = e.clientX, mY = e.clientY; }
    catch(e) { return false; }
    if (mX >= Math.floor(getRect(cm.display.gutters).right)) return false;
    if (prevent) e_preventDefault(e);

    var display = cm.display;
    var lineBox = getRect(display.lineDiv);

    if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
    mY -= lineBox.top - display.viewOffset;

    for (var i = 0; i < cm.options.gutters.length; ++i) {
      var g = display.gutters.childNodes[i];
      if (g && getRect(g).right >= mX) {
        var line = lineAtHeight(cm.doc, mY);
        var gutter = cm.options.gutters[i];
        signalfn(cm, type, cm, line, gutter, e);
        return e_defaultPrevented(e);
      }
    }
  }

  function contextMenuInGutter(cm, e) {
    if (!hasHandler(cm, "gutterContextMenu")) return false;
    return gutterEvent(cm, e, "gutterContextMenu", false, signal);
  }

  function clickInGutter(cm, e) {
    return gutterEvent(cm, e, "gutterClick", true, signalLater);
  }

  // Kludge to work around strange IE behavior where it'll sometimes
  // re-fire a series of drag-related events right after the drop (#1551)
  var lastDrop = 0;

  function onDrop(e) {
    var cm = this;
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e) || (cm.options.onDragEvent && cm.options.onDragEvent(cm, addStop(e))))
      return;
    e_preventDefault(e);
    if (ie) lastDrop = +new Date;
    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
    if (!pos || isReadOnly(cm)) return;
    if (files && files.length && window.FileReader && window.File) {
      var n = files.length, text = Array(n), read = 0;
      var loadFile = function(file, i) {
        var reader = new FileReader;
        reader.onload = function() {
          text[i] = reader.result;
          if (++read == n) {
            pos = clipPos(cm.doc, pos);
            makeChange(cm.doc, {from: pos, to: pos, text: splitLines(text.join("\n")), origin: "paste"}, "around");
          }
        };
        reader.readAsText(file);
      };
      for (var i = 0; i < n; ++i) loadFile(files[i], i);
    } else {
      // Don't do a replace if the drop happened inside of the selected text.
      if (cm.state.draggingText && !(posLess(pos, cm.doc.sel.from) || posLess(cm.doc.sel.to, pos))) {
        cm.state.draggingText(e);
        // Ensure the editor is re-focused
        setTimeout(bind(focusInput, cm), 20);
        return;
      }
      try {
        var text = e.dataTransfer.getData("Text");
        if (text) {
          var curFrom = cm.doc.sel.from, curTo = cm.doc.sel.to;
          setSelection(cm.doc, pos, pos);
          if (cm.state.draggingText) replaceRange(cm.doc, "", curFrom, curTo, "paste");
          cm.replaceSelection(text, null, "paste");
          focusInput(cm);
          onFocus(cm);
        }
      }
      catch(e){}
    }
  }

  function onDragStart(cm, e) {
    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

    var txt = cm.getSelection();
    e.dataTransfer.setData("Text", txt);

    // Use dummy image instead of default browsers image.
    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
    if (e.dataTransfer.setDragImage && !safari) {
      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      if (opera) {
        img.width = img.height = 1;
        cm.display.wrapper.appendChild(img);
        // Force a relayout, or Opera won't use our image for some obscure reason
        img._top = img.offsetTop;
      }
      e.dataTransfer.setDragImage(img, 0, 0);
      if (opera) img.parentNode.removeChild(img);
    }
  }

  function setScrollTop(cm, val) {
    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
    cm.doc.scrollTop = val;
    if (!gecko) updateDisplay(cm, [], val);
    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
    if (cm.display.scrollbarV.scrollTop != val) cm.display.scrollbarV.scrollTop = val;
    if (gecko) updateDisplay(cm, []);
    startWorker(cm, 100);
  }
  function setScrollLeft(cm, val, isScroller) {
    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
    cm.doc.scrollLeft = val;
    alignHorizontally(cm);
    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
    if (cm.display.scrollbarH.scrollLeft != val) cm.display.scrollbarH.scrollLeft = val;
  }

  // Since the delta values reported on mouse wheel events are
  // unstandardized between browsers and even browser versions, and
  // generally horribly unpredictable, this code starts by measuring
  // the scroll effect that the first few mouse wheel events have,
  // and, from that, detects the way it can convert deltas to pixel
  // offsets afterwards.
  //
  // The reason we want to know the amount a wheel event will scroll
  // is that it gives us a chance to update the display before the
  // actual scrolling happens, reducing flickering.

  var wheelSamples = 0, wheelPixelsPerUnit = null;
  // Fill in a browser-detected starting value on browsers where we
  // know one. These don't have to be accurate -- the result of them
  // being wrong would just be a slight flicker on the first wheel
  // scroll (if it is large enough).
  if (ie) wheelPixelsPerUnit = -.53;
  else if (gecko) wheelPixelsPerUnit = 15;
  else if (chrome) wheelPixelsPerUnit = -.7;
  else if (safari) wheelPixelsPerUnit = -1/3;

  function onScrollWheel(cm, e) {
    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
    else if (dy == null) dy = e.wheelDelta;

    var display = cm.display, scroll = display.scroller;
    // Quit if there's nothing to scroll here
    if (!(dx && scroll.scrollWidth > scroll.clientWidth ||
          dy && scroll.scrollHeight > scroll.clientHeight)) return;

    // Webkit browsers on OS X abort momentum scrolls when the target
    // of the scroll event is removed from the scrollable element.
    // This hack (see related code in patchDisplay) makes sure the
    // element is kept around.
    if (dy && mac && webkit) {
      for (var cur = e.target; cur != scroll; cur = cur.parentNode) {
        if (cur.lineObj) {
          cm.display.currentWheelTarget = cur;
          break;
        }
      }
    }

    // On some browsers, horizontal scrolling will cause redraws to
    // happen before the gutter has been realigned, causing it to
    // wriggle around in a most unseemly way. When we have an
    // estimated pixels/delta value, we just handle horizontal
    // scrolling entirely here. It'll be slightly off from native, but
    // better than glitching out.
    if (dx && !gecko && !opera && wheelPixelsPerUnit != null) {
      if (dy)
        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
      e_preventDefault(e);
      display.wheelStartX = null; // Abort measurement, if in progress
      return;
    }

    if (dy && wheelPixelsPerUnit != null) {
      var pixels = dy * wheelPixelsPerUnit;
      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
      if (pixels < 0) top = Math.max(0, top + pixels - 50);
      else bot = Math.min(cm.doc.height, bot + pixels + 50);
      updateDisplay(cm, [], {top: top, bottom: bot});
    }

    if (wheelSamples < 20) {
      if (display.wheelStartX == null) {
        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
        display.wheelDX = dx; display.wheelDY = dy;
        setTimeout(function() {
          if (display.wheelStartX == null) return;
          var movedX = scroll.scrollLeft - display.wheelStartX;
          var movedY = scroll.scrollTop - display.wheelStartY;
          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
            (movedX && display.wheelDX && movedX / display.wheelDX);
          display.wheelStartX = display.wheelStartY = null;
          if (!sample) return;
          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
          ++wheelSamples;
        }, 200);
      } else {
        display.wheelDX += dx; display.wheelDY += dy;
      }
    }
  }

  function doHandleBinding(cm, bound, dropShift) {
    if (typeof bound == "string") {
      bound = commands[bound];
      if (!bound) return false;
    }
    // Ensure previous input has been read, so that the handler sees a
    // consistent view of the document
    if (cm.display.pollingFast && readInput(cm)) cm.display.pollingFast = false;
    var doc = cm.doc, prevShift = doc.sel.shift, done = false;
    try {
      if (isReadOnly(cm)) cm.state.suppressEdits = true;
      if (dropShift) doc.sel.shift = false;
      done = bound(cm) != Pass;
    } finally {
      doc.sel.shift = prevShift;
      cm.state.suppressEdits = false;
    }
    return done;
  }

  function allKeyMaps(cm) {
    var maps = cm.state.keyMaps.slice(0);
    if (cm.options.extraKeys) maps.push(cm.options.extraKeys);
    maps.push(cm.options.keyMap);
    return maps;
  }

  var maybeTransition;
  function handleKeyBinding(cm, e) {
    // Handle auto keymap transitions
    var startMap = getKeyMap(cm.options.keyMap), next = startMap.auto;
    clearTimeout(maybeTransition);
    if (next && !isModifierKey(e)) maybeTransition = setTimeout(function() {
      if (getKeyMap(cm.options.keyMap) == startMap) {
        cm.options.keyMap = (next.call ? next.call(null, cm) : next);
        keyMapChanged(cm);
      }
    }, 50);

    var name = keyName(e, true), handled = false;
    if (!name) return false;
    var keymaps = allKeyMaps(cm);

    if (e.shiftKey) {
      // First try to resolve full name (including 'Shift-'). Failing
      // that, see if there is a cursor-motion command (starting with
      // 'go') bound to the keyname without 'Shift-'.
      handled = lookupKey("Shift-" + name, keymaps, function(b) {return doHandleBinding(cm, b, true);})
             || lookupKey(name, keymaps, function(b) {
                  if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                    return doHandleBinding(cm, b);
                });
    } else {
      handled = lookupKey(name, keymaps, function(b) { return doHandleBinding(cm, b); });
    }

    if (handled) {
      e_preventDefault(e);
      restartBlink(cm);
      if (ie_lt9) { e.oldKeyCode = e.keyCode; e.keyCode = 0; }
      signalLater(cm, "keyHandled", cm, name, e);
    }
    return handled;
  }

  function handleCharBinding(cm, e, ch) {
    var handled = lookupKey("'" + ch + "'", allKeyMaps(cm),
                            function(b) { return doHandleBinding(cm, b, true); });
    if (handled) {
      e_preventDefault(e);
      restartBlink(cm);
      signalLater(cm, "keyHandled", cm, "'" + ch + "'", e);
    }
    return handled;
  }

  var lastStoppedKey = null;
  function onKeyDown(e) {
    var cm = this;
    if (!cm.state.focused) onFocus(cm);
    if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
    if (ie && e.keyCode == 27) e.returnValue = false;
    var code = e.keyCode;
    // IE does strange things with escape.
    cm.doc.sel.shift = code == 16 || e.shiftKey;
    // First give onKeyEvent option a chance to handle this.
    var handled = handleKeyBinding(cm, e);
    if (opera) {
      lastStoppedKey = handled ? code : null;
      // Opera has no cut event... we try to at least catch the key combo
      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
        cm.replaceSelection("");
    }
  }

  function onKeyPress(e) {
    var cm = this;
    if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
    var keyCode = e.keyCode, charCode = e.charCode;
    if (opera && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
    if (((opera && (!e.which || e.which < 10)) || khtml) && handleKeyBinding(cm, e)) return;
    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
    if (this.options.electricChars && this.doc.mode.electricChars &&
        this.options.smartIndent && !isReadOnly(this) &&
        this.doc.mode.electricChars.indexOf(ch) > -1)
      setTimeout(operation(cm, function() {indentLine(cm, cm.doc.sel.to.line, "smart");}), 75);
    if (handleCharBinding(cm, e, ch)) return;
    if (ie && !ie_lt9) cm.display.inputHasSelection = null;
    fastPoll(cm);
  }

  function onFocus(cm) {
    if (cm.options.readOnly == "nocursor") return;
    if (!cm.state.focused) {
      signal(cm, "focus", cm);
      cm.state.focused = true;
      if (cm.display.wrapper.className.search(/\bCodeMirror-focused\b/) == -1)
        cm.display.wrapper.className += " CodeMirror-focused";
      if (!cm.curOp) {
        resetInput(cm, true);
        if (webkit) setTimeout(bind(resetInput, cm, true), 0); // Issue #1730
      }
    }
    slowPoll(cm);
    restartBlink(cm);
  }
  function onBlur(cm) {
    if (cm.state.focused) {
      signal(cm, "blur", cm);
      cm.state.focused = false;
      cm.display.wrapper.className = cm.display.wrapper.className.replace(" CodeMirror-focused", "");
    }
    clearInterval(cm.display.blinker);
    setTimeout(function() {if (!cm.state.focused) cm.doc.sel.shift = false;}, 150);
  }

  var detectingSelectAll;
  function onContextMenu(cm, e) {
    if (signalDOMEvent(cm, e, "contextmenu")) return;
    var display = cm.display, sel = cm.doc.sel;
    if (eventInWidget(display, e) || contextMenuInGutter(cm, e)) return;

    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
    if (!pos || opera) return; // Opera is difficult.

    // Reset the current text selection only if the click is done outside of the selection
    // and 'resetSelectionOnContextMenu' option is true.
    var reset = cm.options.resetSelectionOnContextMenu;
    if (reset && (posEq(sel.from, sel.to) || posLess(pos, sel.from) || !posLess(pos, sel.to)))
      operation(cm, setSelection)(cm.doc, pos, pos);

    var oldCSS = display.input.style.cssText;
    display.inputDiv.style.position = "absolute";
    display.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
      "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: white; outline: none;" +
      "border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);";
    focusInput(cm);
    resetInput(cm, true);
    // Adds "Select all" to context menu in FF
    if (posEq(sel.from, sel.to)) display.input.value = display.prevInput = " ";

    function prepareSelectAllHack() {
      if (display.input.selectionStart != null) {
        var extval = display.input.value = "\u200b" + (posEq(sel.from, sel.to) ? "" : display.input.value);
        display.prevInput = "\u200b";
        display.input.selectionStart = 1; display.input.selectionEnd = extval.length;
      }
    }
    function rehide() {
      display.inputDiv.style.position = "relative";
      display.input.style.cssText = oldCSS;
      if (ie_lt9) display.scrollbarV.scrollTop = display.scroller.scrollTop = scrollPos;
      slowPoll(cm);

      // Try to detect the user choosing select-all
      if (display.input.selectionStart != null) {
        if (!ie || ie_lt9) prepareSelectAllHack();
        clearTimeout(detectingSelectAll);
        var i = 0, poll = function(){
          if (display.prevInput == " " && display.input.selectionStart == 0)
            operation(cm, commands.selectAll)(cm);
          else if (i++ < 10) detectingSelectAll = setTimeout(poll, 500);
          else resetInput(cm);
        };
        detectingSelectAll = setTimeout(poll, 200);
      }
    }

    if (ie && !ie_lt9) prepareSelectAllHack();
    if (captureMiddleClick) {
      e_stop(e);
      var mouseup = function() {
        off(window, "mouseup", mouseup);
        setTimeout(rehide, 20);
      };
      on(window, "mouseup", mouseup);
    } else {
      setTimeout(rehide, 50);
    }
  }

  // UPDATING

  var changeEnd = CodeMirror.changeEnd = function(change) {
    if (!change.text) return change.to;
    return Pos(change.from.line + change.text.length - 1,
               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
  };

  // Make sure a position will be valid after the given change.
  function clipPostChange(doc, change, pos) {
    if (!posLess(change.from, pos)) return clipPos(doc, pos);
    var diff = (change.text.length - 1) - (change.to.line - change.from.line);
    if (pos.line > change.to.line + diff) {
      var preLine = pos.line - diff, lastLine = doc.first + doc.size - 1;
      if (preLine > lastLine) return Pos(lastLine, getLine(doc, lastLine).text.length);
      return clipToLen(pos, getLine(doc, preLine).text.length);
    }
    if (pos.line == change.to.line + diff)
      return clipToLen(pos, lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0) +
                       getLine(doc, change.to.line).text.length - change.to.ch);
    var inside = pos.line - change.from.line;
    return clipToLen(pos, change.text[inside].length + (inside ? 0 : change.from.ch));
  }

  // Hint can be null|"end"|"start"|"around"|{anchor,head}
  function computeSelAfterChange(doc, change, hint) {
    if (hint && typeof hint == "object") // Assumed to be {anchor, head} object
      return {anchor: clipPostChange(doc, change, hint.anchor),
              head: clipPostChange(doc, change, hint.head)};

    if (hint == "start") return {anchor: change.from, head: change.from};

    var end = changeEnd(change);
    if (hint == "around") return {anchor: change.from, head: end};
    if (hint == "end") return {anchor: end, head: end};

    // hint is null, leave the selection alone as much as possible
    var adjustPos = function(pos) {
      if (posLess(pos, change.from)) return pos;
      if (!posLess(change.to, pos)) return end;

      var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
      if (pos.line == change.to.line) ch += end.ch - change.to.ch;
      return Pos(line, ch);
    };
    return {anchor: adjustPos(doc.sel.anchor), head: adjustPos(doc.sel.head)};
  }

  function filterChange(doc, change, update) {
    var obj = {
      canceled: false,
      from: change.from,
      to: change.to,
      text: change.text,
      origin: change.origin,
      cancel: function() { this.canceled = true; }
    };
    if (update) obj.update = function(from, to, text, origin) {
      if (from) this.from = clipPos(doc, from);
      if (to) this.to = clipPos(doc, to);
      if (text) this.text = text;
      if (origin !== undefined) this.origin = origin;
    };
    signal(doc, "beforeChange", doc, obj);
    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

    if (obj.canceled) return null;
    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
  }

  // Replace the range from from to to by the strings in replacement.
  // change is a {from, to, text [, origin]} object
  function makeChange(doc, change, selUpdate, ignoreReadOnly) {
    if (doc.cm) {
      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, selUpdate, ignoreReadOnly);
      if (doc.cm.state.suppressEdits) return;
    }

    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
      change = filterChange(doc, change, true);
      if (!change) return;
    }

    // Possibly split or suppress the update based on the presence
    // of read-only spans in its range.
    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
    if (split) {
      for (var i = split.length - 1; i >= 1; --i)
        makeChangeNoReadonly(doc, {from: split[i].from, to: split[i].to, text: [""]});
      if (split.length)
        makeChangeNoReadonly(doc, {from: split[0].from, to: split[0].to, text: change.text}, selUpdate);
    } else {
      makeChangeNoReadonly(doc, change, selUpdate);
    }
  }

  function makeChangeNoReadonly(doc, change, selUpdate) {
    if (change.text.length == 1 && change.text[0] == "" && posEq(change.from, change.to)) return;
    var selAfter = computeSelAfterChange(doc, change, selUpdate);
    addToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
    var rebased = [];

    linkedDocs(doc, function(doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }
      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
    });
  }

  function makeChangeFromHistory(doc, type) {
    if (doc.cm && doc.cm.state.suppressEdits) return;

    var hist = doc.history;
    var event = (type == "undo" ? hist.done : hist.undone).pop();
    if (!event) return;

    var anti = {changes: [], anchorBefore: event.anchorAfter, headBefore: event.headAfter,
                anchorAfter: event.anchorBefore, headAfter: event.headBefore,
                generation: hist.generation};
    (type == "undo" ? hist.undone : hist.done).push(anti);
    hist.generation = event.generation || ++hist.maxGeneration;

    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

    for (var i = event.changes.length - 1; i >= 0; --i) {
      var change = event.changes[i];
      change.origin = type;
      if (filter && !filterChange(doc, change, false)) {
        (type == "undo" ? hist.done : hist.undone).length = 0;
        return;
      }

      anti.changes.push(historyChangeFromChange(doc, change));

      var after = i ? computeSelAfterChange(doc, change, null)
                    : {anchor: event.anchorBefore, head: event.headBefore};
      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
      var rebased = [];

      linkedDocs(doc, function(doc, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
          rebaseHist(doc.history, change);
          rebased.push(doc.history);
        }
        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
      });
    }
  }

  function shiftDoc(doc, distance) {
    function shiftPos(pos) {return Pos(pos.line + distance, pos.ch);}
    doc.first += distance;
    if (doc.cm) regChange(doc.cm, doc.first, doc.first, distance);
    doc.sel.head = shiftPos(doc.sel.head); doc.sel.anchor = shiftPos(doc.sel.anchor);
    doc.sel.from = shiftPos(doc.sel.from); doc.sel.to = shiftPos(doc.sel.to);
  }

  function makeChangeSingleDoc(doc, change, selAfter, spans) {
    if (doc.cm && !doc.cm.curOp)
      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

    if (change.to.line < doc.first) {
      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
      return;
    }
    if (change.from.line > doc.lastLine()) return;

    // Clip the change to the size of this doc
    if (change.from.line < doc.first) {
      var shift = change.text.length - 1 - (doc.first - change.from.line);
      shiftDoc(doc, shift);
      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                text: [lst(change.text)], origin: change.origin};
    }
    var last = doc.lastLine();
    if (change.to.line > last) {
      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
                text: [change.text[0]], origin: change.origin};
    }

    change.removed = getBetween(doc, change.from, change.to);

    if (!selAfter) selAfter = computeSelAfterChange(doc, change, null);
    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans, selAfter);
    else updateDoc(doc, change, spans, selAfter);
  }

  function makeChangeSingleDocInEditor(cm, change, spans, selAfter) {
    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

    var recomputeMaxLength = false, checkWidthStart = from.line;
    if (!cm.options.lineWrapping) {
      checkWidthStart = lineNo(visualLine(doc, getLine(doc, from.line)));
      doc.iter(checkWidthStart, to.line + 1, function(line) {
        if (line == display.maxLine) {
          recomputeMaxLength = true;
          return true;
        }
      });
    }

    if (!posLess(doc.sel.head, change.from) && !posLess(change.to, doc.sel.head))
      cm.curOp.cursorActivity = true;

    updateDoc(doc, change, spans, selAfter, estimateHeight(cm));

    if (!cm.options.lineWrapping) {
      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
        var len = lineLength(doc, line);
        if (len > display.maxLineLength) {
          display.maxLine = line;
          display.maxLineLength = len;
          display.maxLineChanged = true;
          recomputeMaxLength = false;
        }
      });
      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
    }

    // Adjust frontier, schedule worker
    doc.frontier = Math.min(doc.frontier, from.line);
    startWorker(cm, 400);

    var lendiff = change.text.length - (to.line - from.line) - 1;
    // Remember that these lines changed, for updating the display
    regChange(cm, from.line, to.line + 1, lendiff);

    if (hasHandler(cm, "change")) {
      var changeObj = {from: from, to: to,
                       text: change.text,
                       removed: change.removed,
                       origin: change.origin};
      if (cm.curOp.textChanged) {
        for (var cur = cm.curOp.textChanged; cur.next; cur = cur.next) {}
        cur.next = changeObj;
      } else cm.curOp.textChanged = changeObj;
    }
  }

  function replaceRange(doc, code, from, to, origin) {
    if (!to) to = from;
    if (posLess(to, from)) { var tmp = to; to = from; from = tmp; }
    if (typeof code == "string") code = splitLines(code);
    makeChange(doc, {from: from, to: to, text: code, origin: origin}, null);
  }

  // POSITION OBJECT

  function Pos(line, ch) {
    if (!(this instanceof Pos)) return new Pos(line, ch);
    this.line = line; this.ch = ch;
  }
  CodeMirror.Pos = Pos;

  function posEq(a, b) {return a.line == b.line && a.ch == b.ch;}
  function posLess(a, b) {return a.line < b.line || (a.line == b.line && a.ch < b.ch);}
  function copyPos(x) {return Pos(x.line, x.ch);}

  // SELECTION

  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
  function clipPos(doc, pos) {
    if (pos.line < doc.first) return Pos(doc.first, 0);
    var last = doc.first + doc.size - 1;
    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
    return clipToLen(pos, getLine(doc, pos.line).text.length);
  }
  function clipToLen(pos, linelen) {
    var ch = pos.ch;
    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
    else if (ch < 0) return Pos(pos.line, 0);
    else return pos;
  }
  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}

  // If shift is held, this will move the selection anchor. Otherwise,
  // it'll set the whole selection.
  function extendSelection(doc, pos, other, bias) {
    if (doc.sel.shift || doc.sel.extend) {
      var anchor = doc.sel.anchor;
      if (other) {
        var posBefore = posLess(pos, anchor);
        if (posBefore != posLess(other, anchor)) {
          anchor = pos;
          pos = other;
        } else if (posBefore != posLess(pos, other)) {
          pos = other;
        }
      }
      setSelection(doc, anchor, pos, bias);
    } else {
      setSelection(doc, pos, other || pos, bias);
    }
    if (doc.cm) doc.cm.curOp.userSelChange = true;
  }

  function filterSelectionChange(doc, anchor, head) {
    var obj = {anchor: anchor, head: head};
    signal(doc, "beforeSelectionChange", doc, obj);
    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
    obj.anchor = clipPos(doc, obj.anchor); obj.head = clipPos(doc, obj.head);
    return obj;
  }

  // Update the selection. Last two args are only used by
  // updateDoc, since they have to be expressed in the line
  // numbers before the update.
  function setSelection(doc, anchor, head, bias, checkAtomic) {
    if (!checkAtomic && hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange")) {
      var filtered = filterSelectionChange(doc, anchor, head);
      head = filtered.head;
      anchor = filtered.anchor;
    }

    var sel = doc.sel;
    sel.goalColumn = null;
    if (bias == null) bias = posLess(head, sel.head) ? -1 : 1;
    // Skip over atomic spans.
    if (checkAtomic || !posEq(anchor, sel.anchor))
      anchor = skipAtomic(doc, anchor, bias, checkAtomic != "push");
    if (checkAtomic || !posEq(head, sel.head))
      head = skipAtomic(doc, head, bias, checkAtomic != "push");

    if (posEq(sel.anchor, anchor) && posEq(sel.head, head)) return;

    sel.anchor = anchor; sel.head = head;
    var inv = posLess(head, anchor);
    sel.from = inv ? head : anchor;
    sel.to = inv ? anchor : head;

    if (doc.cm)
      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged =
        doc.cm.curOp.cursorActivity = true;

    signalLater(doc, "cursorActivity", doc);
  }

  function reCheckSelection(cm) {
    setSelection(cm.doc, cm.doc.sel.from, cm.doc.sel.to, null, "push");
  }

  function skipAtomic(doc, pos, bias, mayClear) {
    var flipped = false, curPos = pos;
    var dir = bias || 1;
    doc.cantEdit = false;
    search: for (;;) {
      var line = getLine(doc, curPos.line);
      if (line.markedSpans) {
        for (var i = 0; i < line.markedSpans.length; ++i) {
          var sp = line.markedSpans[i], m = sp.marker;
          if ((sp.from == null || (m.inclusiveLeft ? sp.from <= curPos.ch : sp.from < curPos.ch)) &&
              (sp.to == null || (m.inclusiveRight ? sp.to >= curPos.ch : sp.to > curPos.ch))) {
            if (mayClear) {
              signal(m, "beforeCursorEnter");
              if (m.explicitlyCleared) {
                if (!line.markedSpans) break;
                else {--i; continue;}
              }
            }
            if (!m.atomic) continue;
            var newPos = m.find()[dir < 0 ? "from" : "to"];
            if (posEq(newPos, curPos)) {
              newPos.ch += dir;
              if (newPos.ch < 0) {
                if (newPos.line > doc.first) newPos = clipPos(doc, Pos(newPos.line - 1));
                else newPos = null;
              } else if (newPos.ch > line.text.length) {
                if (newPos.line < doc.first + doc.size - 1) newPos = Pos(newPos.line + 1, 0);
                else newPos = null;
              }
              if (!newPos) {
                if (flipped) {
                  // Driven in a corner -- no valid cursor position found at all
                  // -- try again *with* clearing, if we didn't already
                  if (!mayClear) return skipAtomic(doc, pos, bias, true);
                  // Otherwise, turn off editing until further notice, and return the start of the doc
                  doc.cantEdit = true;
                  return Pos(doc.first, 0);
                }
                flipped = true; newPos = pos; dir = -dir;
              }
            }
            curPos = newPos;
            continue search;
          }
        }
      }
      return curPos;
    }
  }

  // SCROLLING

  function scrollCursorIntoView(cm) {
    var coords = scrollPosIntoView(cm, cm.doc.sel.head, null, cm.options.cursorScrollMargin);
    if (!cm.state.focused) return;
    var display = cm.display, box = getRect(display.sizer), doScroll = null;
    if (coords.top + box.top < 0) doScroll = true;
    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
    if (doScroll != null && !phantom) {
      var hidden = display.cursor.style.display == "none";
      if (hidden) {
        display.cursor.style.display = "";
        display.cursor.style.left = coords.left + "px";
        display.cursor.style.top = (coords.top - display.viewOffset) + "px";
      }
      display.cursor.scrollIntoView(doScroll);
      if (hidden) display.cursor.style.display = "none";
    }
  }

  function scrollPosIntoView(cm, pos, end, margin) {
    if (margin == null) margin = 0;
    for (;;) {
      var changed = false, coords = cursorCoords(cm, pos);
      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
      var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
                                         Math.min(coords.top, endCoords.top) - margin,
                                         Math.max(coords.left, endCoords.left),
                                         Math.max(coords.bottom, endCoords.bottom) + margin);
      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
      if (scrollPos.scrollTop != null) {
        setScrollTop(cm, scrollPos.scrollTop);
        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
      }
      if (scrollPos.scrollLeft != null) {
        setScrollLeft(cm, scrollPos.scrollLeft);
        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
      }
      if (!changed) return coords;
    }
  }

  function scrollIntoView(cm, x1, y1, x2, y2) {
    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
  }

  function calculateScrollPos(cm, x1, y1, x2, y2) {
    var display = cm.display, snapMargin = textHeight(cm.display);
    if (y1 < 0) y1 = 0;
    var screen = display.scroller.clientHeight - scrollerCutOff, screentop = display.scroller.scrollTop, result = {};
    var docBottom = cm.doc.height + paddingVert(display);
    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
    if (y1 < screentop) {
      result.scrollTop = atTop ? 0 : y1;
    } else if (y2 > screentop + screen) {
      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
      if (newTop != screentop) result.scrollTop = newTop;
    }

    var screenw = display.scroller.clientWidth - scrollerCutOff, screenleft = display.scroller.scrollLeft;
    x1 += display.gutters.offsetWidth; x2 += display.gutters.offsetWidth;
    var gutterw = display.gutters.offsetWidth;
    var atLeft = x1 < gutterw + 10;
    if (x1 < screenleft + gutterw || atLeft) {
      if (atLeft) x1 = 0;
      result.scrollLeft = Math.max(0, x1 - 10 - gutterw);
    } else if (x2 > screenw + screenleft - 3) {
      result.scrollLeft = x2 + 10 - screenw;
    }
    return result;
  }

  function updateScrollPos(cm, left, top) {
    cm.curOp.updateScrollPos = {scrollLeft: left == null ? cm.doc.scrollLeft : left,
                                scrollTop: top == null ? cm.doc.scrollTop : top};
  }

  function addToScrollPos(cm, left, top) {
    var pos = cm.curOp.updateScrollPos || (cm.curOp.updateScrollPos = {scrollLeft: cm.doc.scrollLeft, scrollTop: cm.doc.scrollTop});
    var scroll = cm.display.scroller;
    pos.scrollTop = Math.max(0, Math.min(scroll.scrollHeight - scroll.clientHeight, pos.scrollTop + top));
    pos.scrollLeft = Math.max(0, Math.min(scroll.scrollWidth - scroll.clientWidth, pos.scrollLeft + left));
  }

  // API UTILITIES

  function indentLine(cm, n, how, aggressive) {
    var doc = cm.doc;
    if (how == null) how = "add";
    if (how == "smart") {
      if (!cm.doc.mode.indent) how = "prev";
      else var state = getStateBefore(cm, n);
    }

    var tabSize = cm.options.tabSize;
    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
    if (how == "smart") {
      indentation = cm.doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
      if (indentation == Pass) {
        if (!aggressive) return;
        how = "prev";
      }
    }
    if (how == "prev") {
      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
      else indentation = 0;
    } else if (how == "add") {
      indentation = curSpace + cm.options.indentUnit;
    } else if (how == "subtract") {
      indentation = curSpace - cm.options.indentUnit;
    } else if (typeof how == "number") {
      indentation = curSpace + how;
    }
    indentation = Math.max(0, indentation);

    var indentString = "", pos = 0;
    if (cm.options.indentWithTabs)
      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
    if (pos < indentation) indentString += spaceStr(indentation - pos);

    if (indentString != curSpaceString)
      replaceRange(cm.doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
    line.stateAfter = null;
  }

  function changeLine(cm, handle, op) {
    var no = handle, line = handle, doc = cm.doc;
    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
    else no = lineNo(handle);
    if (no == null) return null;
    if (op(line, no)) regChange(cm, no, no + 1);
    else return null;
    return line;
  }

  function findPosH(doc, pos, dir, unit, visually) {
    var line = pos.line, ch = pos.ch, origDir = dir;
    var lineObj = getLine(doc, line);
    var possible = true;
    function findNextLine() {
      var l = line + dir;
      if (l < doc.first || l >= doc.first + doc.size) return (possible = false);
      line = l;
      return lineObj = getLine(doc, l);
    }
    function moveOnce(boundToLine) {
      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
      if (next == null) {
        if (!boundToLine && findNextLine()) {
          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
          else ch = dir < 0 ? lineObj.text.length : 0;
        } else return (possible = false);
      } else ch = next;
      return true;
    }

    if (unit == "char") moveOnce();
    else if (unit == "column") moveOnce(true);
    else if (unit == "word" || unit == "group") {
      var sawType = null, group = unit == "group";
      for (var first = true;; first = false) {
        if (dir < 0 && !moveOnce(!first)) break;
        var cur = lineObj.text.charAt(ch) || "\n";
        var type = isWordChar(cur) ? "w"
          : !group ? null
          : /\s/.test(cur) ? null
          : "p";
        if (sawType && sawType != type) {
          if (dir < 0) {dir = 1; moveOnce();}
          break;
        }
        if (type) sawType = type;
        if (dir > 0 && !moveOnce(!first)) break;
      }
    }
    var result = skipAtomic(doc, Pos(line, ch), origDir, true);
    if (!possible) result.hitSide = true;
    return result;
  }

  function findPosV(cm, pos, dir, unit) {
    var doc = cm.doc, x = pos.left, y;
    if (unit == "page") {
      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
    } else if (unit == "line") {
      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
    }
    for (;;) {
      var target = coordsChar(cm, x, y);
      if (!target.outside) break;
      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
      y += dir * 5;
    }
    return target;
  }

  function findWordAt(line, pos) {
    var start = pos.ch, end = pos.ch;
    if (line) {
      if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
      var startChar = line.charAt(start);
      var check = isWordChar(startChar) ? isWordChar
        : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
        : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
      while (start > 0 && check(line.charAt(start - 1))) --start;
      while (end < line.length && check(line.charAt(end))) ++end;
    }
    return {from: Pos(pos.line, start), to: Pos(pos.line, end)};
  }

  function selectLine(cm, line) {
    extendSelection(cm.doc, Pos(line, 0), clipPos(cm.doc, Pos(line + 1, 0)));
  }

  // PROTOTYPE

  // The publicly visible API. Note that operation(null, f) means
  // 'wrap f in an operation, performed on its `this` parameter'

  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function(){window.focus(); focusInput(this); onFocus(this); fastPoll(this);},

    setOption: function(option, value) {
      var options = this.options, old = options[option];
      if (options[option] == value && option != "mode") return;
      options[option] = value;
      if (optionHandlers.hasOwnProperty(option))
        operation(this, optionHandlers[option])(this, value, old);
    },

    getOption: function(option) {return this.options[option];},
    getDoc: function() {return this.doc;},

    addKeyMap: function(map, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"](map);
    },
    removeKeyMap: function(map) {
      var maps = this.state.keyMaps;
      for (var i = 0; i < maps.length; ++i)
        if (maps[i] == map || (typeof maps[i] != "string" && maps[i].name == map)) {
          maps.splice(i, 1);
          return true;
        }
    },

    addOverlay: operation(null, function(spec, options) {
      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
      if (mode.startState) throw new Error("Overlays may not be stateful.");
      this.state.overlays.push({mode: mode, modeSpec: spec, opaque: options && options.opaque});
      this.state.modeGen++;
      regChange(this);
    }),
    removeOverlay: operation(null, function(spec) {
      var overlays = this.state.overlays;
      for (var i = 0; i < overlays.length; ++i) {
        var cur = overlays[i].modeSpec;
        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1);
          this.state.modeGen++;
          regChange(this);
          return;
        }
      }
    }),

    indentLine: operation(null, function(n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
        else dir = dir ? "add" : "subtract";
      }
      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
    }),
    indentSelection: operation(null, function(how) {
      var sel = this.doc.sel;
      if (posEq(sel.from, sel.to)) return indentLine(this, sel.from.line, how);
      var e = sel.to.line - (sel.to.ch ? 0 : 1);
      for (var i = sel.from.line; i <= e; ++i) indentLine(this, i, how);
    }),

    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(pos, precise) {
      var doc = this.doc;
      pos = clipPos(doc, pos);
      var state = getStateBefore(this, pos.line, precise), mode = this.doc.mode;
      var line = getLine(doc, pos.line);
      var stream = new StringStream(line.text, this.options.tabSize);
      while (stream.pos < pos.ch && !stream.eol()) {
        stream.start = stream.pos;
        var style = mode.token(stream, state);
      }
      return {start: stream.start,
              end: stream.pos,
              string: stream.current(),
              className: style || null, // Deprecated, use 'type' instead
              type: style || null,
              state: state};
    },

    getTokenTypeAt: function(pos) {
      pos = clipPos(this.doc, pos);
      var styles = getLineStyles(this, getLine(this.doc, pos.line));
      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
      if (ch == 0) return styles[2];
      for (;;) {
        var mid = (before + after) >> 1;
        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
        else return styles[mid * 2 + 2];
      }
    },

    getModeAt: function(pos) {
      var mode = this.doc.mode;
      if (!mode.innerMode) return mode;
      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
    },

    getHelper: function(pos, type) {
      if (!helpers.hasOwnProperty(type)) return;
      var help = helpers[type], mode = this.getModeAt(pos);
      return mode[type] && help[mode[type]] ||
        mode.helperType && help[mode.helperType] ||
        help[mode.name];
    },

    getStateAfter: function(line, precise) {
      var doc = this.doc;
      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
      return getStateBefore(this, line + 1, precise);
    },

    cursorCoords: function(start, mode) {
      var pos, sel = this.doc.sel;
      if (start == null) pos = sel.head;
      else if (typeof start == "object") pos = clipPos(this.doc, start);
      else pos = start ? sel.from : sel.to;
      return cursorCoords(this, pos, mode || "page");
    },

    charCoords: function(pos, mode) {
      return charCoords(this, clipPos(this.doc, pos), mode || "page");
    },

    coordsChar: function(coords, mode) {
      coords = fromCoordSystem(this, coords, mode || "page");
      return coordsChar(this, coords.left, coords.top);
    },

    lineAtHeight: function(height, mode) {
      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
      return lineAtHeight(this.doc, height + this.display.viewOffset);
    },
    heightAtLine: function(line, mode) {
      var end = false, last = this.doc.first + this.doc.size - 1;
      if (line < this.doc.first) line = this.doc.first;
      else if (line > last) { line = last; end = true; }
      var lineObj = getLine(this.doc, line);
      return intoCoordSystem(this, getLine(this.doc, line), {top: 0, left: 0}, mode || "page").top +
        (end ? lineObj.height : 0);
    },

    defaultTextHeight: function() { return textHeight(this.display); },
    defaultCharWidth: function() { return charWidth(this.display); },

    setGutterMarker: operation(null, function(line, gutterID, value) {
      return changeLine(this, line, function(line) {
        var markers = line.gutterMarkers || (line.gutterMarkers = {});
        markers[gutterID] = value;
        if (!value && isEmpty(markers)) line.gutterMarkers = null;
        return true;
      });
    }),

    clearGutter: operation(null, function(gutterID) {
      var cm = this, doc = cm.doc, i = doc.first;
      doc.iter(function(line) {
        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
          line.gutterMarkers[gutterID] = null;
          regChange(cm, i, i + 1);
          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
        }
        ++i;
      });
    }),

    addLineClass: operation(null, function(handle, where, cls) {
      return changeLine(this, handle, function(line) {
        var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
        if (!line[prop]) line[prop] = cls;
        else if (new RegExp("(?:^|\\s)" + cls + "(?:$|\\s)").test(line[prop])) return false;
        else line[prop] += " " + cls;
        return true;
      });
    }),

    removeLineClass: operation(null, function(handle, where, cls) {
      return changeLine(this, handle, function(line) {
        var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
        var cur = line[prop];
        if (!cur) return false;
        else if (cls == null) line[prop] = null;
        else {
          var found = cur.match(new RegExp("(?:^|\\s+)" + cls + "(?:$|\\s+)"));
          if (!found) return false;
          var end = found.index + found[0].length;
          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
        }
        return true;
      });
    }),

    addLineWidget: operation(null, function(handle, node, options) {
      return addLineWidget(this, handle, node, options);
    }),

    removeLineWidget: function(widget) { widget.clear(); },

    lineInfo: function(line) {
      if (typeof line == "number") {
        if (!isLine(this.doc, line)) return null;
        var n = line;
        line = getLine(this.doc, line);
        if (!line) return null;
      } else {
        var n = lineNo(line);
        if (n == null) return null;
      }
      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
              widgets: line.widgets};
    },

    getViewport: function() { return {from: this.display.showingFrom, to: this.display.showingTo};},

    addWidget: function(pos, node, scroll, vert, horiz) {
      var display = this.display;
      pos = cursorCoords(this, clipPos(this.doc, pos));
      var top = pos.bottom, left = pos.left;
      node.style.position = "absolute";
      display.sizer.appendChild(node);
      if (vert == "over") {
        top = pos.top;
      } else if (vert == "above" || vert == "near") {
        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
        // Default to positioning above (if specified and possible); otherwise default to positioning below
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
          top = pos.top - node.offsetHeight;
        else if (pos.bottom + node.offsetHeight <= vspace)
          top = pos.bottom;
        if (left + node.offsetWidth > hspace)
          left = hspace - node.offsetWidth;
      }
      node.style.top = top + "px";
      node.style.left = node.style.right = "";
      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth;
        node.style.right = "0px";
      } else {
        if (horiz == "left") left = 0;
        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
        node.style.left = left + "px";
      }
      if (scroll)
        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
    },

    triggerOnKeyDown: operation(null, onKeyDown),

    execCommand: function(cmd) {return commands[cmd](this);},

    findPosH: function(from, amount, unit, visually) {
      var dir = 1;
      if (amount < 0) { dir = -1; amount = -amount; }
      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
        cur = findPosH(this.doc, cur, dir, unit, visually);
        if (cur.hitSide) break;
      }
      return cur;
    },

    moveH: operation(null, function(dir, unit) {
      var sel = this.doc.sel, pos;
      if (sel.shift || sel.extend || posEq(sel.from, sel.to))
        pos = findPosH(this.doc, sel.head, dir, unit, this.options.rtlMoveVisually);
      else
        pos = dir < 0 ? sel.from : sel.to;
      extendSelection(this.doc, pos, pos, dir);
    }),

    deleteH: operation(null, function(dir, unit) {
      var sel = this.doc.sel;
      if (!posEq(sel.from, sel.to)) replaceRange(this.doc, "", sel.from, sel.to, "+delete");
      else replaceRange(this.doc, "", sel.from, findPosH(this.doc, sel.head, dir, unit, false), "+delete");
      this.curOp.userSelChange = true;
    }),

    findPosV: function(from, amount, unit, goalColumn) {
      var dir = 1, x = goalColumn;
      if (amount < 0) { dir = -1; amount = -amount; }
      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
        var coords = cursorCoords(this, cur, "div");
        if (x == null) x = coords.left;
        else coords.left = x;
        cur = findPosV(this, coords, dir, unit);
        if (cur.hitSide) break;
      }
      return cur;
    },

    moveV: operation(null, function(dir, unit) {
      var sel = this.doc.sel;
      var pos = cursorCoords(this, sel.head, "div");
      if (sel.goalColumn != null) pos.left = sel.goalColumn;
      var target = findPosV(this, pos, dir, unit);

      if (unit == "page") addToScrollPos(this, 0, charCoords(this, target, "div").top - pos.top);
      extendSelection(this.doc, target, target, dir);
      sel.goalColumn = pos.left;
    }),

    toggleOverwrite: function(value) {
      if (value != null && value == this.state.overwrite) return;
      if (this.state.overwrite = !this.state.overwrite)
        this.display.cursor.className += " CodeMirror-overwrite";
      else
        this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", "");
    },
    hasFocus: function() { return this.state.focused; },

    scrollTo: operation(null, function(x, y) {
      updateScrollPos(this, x, y);
    }),
    getScrollInfo: function() {
      var scroller = this.display.scroller, co = scrollerCutOff;
      return {left: scroller.scrollLeft, top: scroller.scrollTop,
              height: scroller.scrollHeight - co, width: scroller.scrollWidth - co,
              clientHeight: scroller.clientHeight - co, clientWidth: scroller.clientWidth - co};
    },

    scrollIntoView: operation(null, function(range, margin) {
      if (range == null) range = {from: this.doc.sel.head, to: null};
      else if (typeof range == "number") range = {from: Pos(range, 0), to: null};
      else if (range.from == null) range = {from: range, to: null};
      if (!range.to) range.to = range.from;
      if (!margin) margin = 0;

      var coords = range;
      if (range.from.line != null) {
        this.curOp.scrollToPos = {from: range.from, to: range.to, margin: margin};
        coords = {from: cursorCoords(this, range.from),
                  to: cursorCoords(this, range.to)};
      }
      var sPos = calculateScrollPos(this, Math.min(coords.from.left, coords.to.left),
                                    Math.min(coords.from.top, coords.to.top) - margin,
                                    Math.max(coords.from.right, coords.to.right),
                                    Math.max(coords.from.bottom, coords.to.bottom) + margin);
      updateScrollPos(this, sPos.scrollLeft, sPos.scrollTop);
    }),

    setSize: operation(null, function(width, height) {
      function interpret(val) {
        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
      }
      if (width != null) this.display.wrapper.style.width = interpret(width);
      if (height != null) this.display.wrapper.style.height = interpret(height);
      if (this.options.lineWrapping)
        this.display.measureLineCache.length = this.display.measureLineCachePos = 0;
      this.curOp.forceUpdate = true;
    }),

    operation: function(f){return runInOp(this, f);},

    refresh: operation(null, function() {
      var badHeight = this.display.cachedTextHeight == null;
      clearCaches(this);
      updateScrollPos(this, this.doc.scrollLeft, this.doc.scrollTop);
      regChange(this);
      if (badHeight) estimateLineHeights(this);
    }),

    swapDoc: operation(null, function(doc) {
      var old = this.doc;
      old.cm = null;
      attachDoc(this, doc);
      clearCaches(this);
      resetInput(this, true);
      updateScrollPos(this, doc.scrollLeft, doc.scrollTop);
      signalLater(this, "swapDoc", this, old);
      return old;
    }),

    getInputField: function(){return this.display.input;},
    getWrapperElement: function(){return this.display.wrapper;},
    getScrollerElement: function(){return this.display.scroller;},
    getGutterElement: function(){return this.display.gutters;}
  };
  eventMixin(CodeMirror);

  // OPTION DEFAULTS

  var optionHandlers = CodeMirror.optionHandlers = {};

  // The default configuration options.
  var defaults = CodeMirror.defaults = {};

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt;
    if (handle) optionHandlers[name] =
      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
  }

  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", function(cm, val) {
    cm.setValue(val);
  }, true);
  option("mode", null, function(cm, val) {
    cm.doc.modeOption = val;
    loadMode(cm);
  }, true);

  option("indentUnit", 2, loadMode, true);
  option("indentWithTabs", false);
  option("smartIndent", true);
  option("tabSize", 4, function(cm) {
    loadMode(cm);
    clearCaches(cm);
    regChange(cm);
  }, true);
  option("electricChars", true);
  option("rtlMoveVisually", !windows);

  option("theme", "default", function(cm) {
    themeChanged(cm);
    guttersChanged(cm);
  }, true);
  option("keyMap", "default", keyMapChanged);
  option("extraKeys", null);

  option("onKeyEvent", null);
  option("onDragEvent", null);

  option("lineWrapping", false, wrappingChanged, true);
  option("gutters", [], function(cm) {
    setGuttersForLineNumbers(cm.options);
    guttersChanged(cm);
  }, true);
  option("fixedGutter", true, function(cm, val) {
    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
    cm.refresh();
  }, true);
  option("coverGutterNextToScrollbar", false, updateScrollbars, true);
  option("lineNumbers", false, function(cm) {
    setGuttersForLineNumbers(cm.options);
    guttersChanged(cm);
  }, true);
  option("firstLineNumber", 1, guttersChanged, true);
  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
  option("showCursorWhenSelecting", false, updateSelection, true);

  option("resetSelectionOnContextMenu", true);

  option("readOnly", false, function(cm, val) {
    if (val == "nocursor") {onBlur(cm); cm.display.input.blur();}
    else if (!val) resetInput(cm, true);
  });
  option("dragDrop", true);

  option("cursorBlinkRate", 530);
  option("cursorScrollMargin", 0);
  option("cursorHeight", 1);
  option("workTime", 100);
  option("workDelay", 100);
  option("flattenSpans", true);
  option("pollInterval", 100);
  option("undoDepth", 40, function(cm, val){cm.doc.history.undoDepth = val;});
  option("historyEventDelay", 500);
  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
  option("maxHighlightLength", 10000, function(cm){loadMode(cm); cm.refresh();}, true);
  option("crudeMeasuringFrom", 10000);
  option("moveInputWithCursor", true, function(cm, val) {
    if (!val) cm.display.inputDiv.style.top = cm.display.inputDiv.style.left = 0;
  });

  option("tabindex", null, function(cm, val) {
    cm.display.input.tabIndex = val || "";
  });
  option("autofocus", null);

  // MODE DEFINITION AND QUERYING

  // Known modes, by name and by MIME
  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

  CodeMirror.defineMode = function(name, mode) {
    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
    if (arguments.length > 2) {
      mode.dependencies = [];
      for (var i = 2; i < arguments.length; ++i) mode.dependencies.push(arguments[i]);
    }
    modes[name] = mode;
  };

  CodeMirror.defineMIME = function(mime, spec) {
    mimeModes[mime] = spec;
  };

  CodeMirror.resolveMode = function(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
      spec = mimeModes[spec];
    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
      var found = mimeModes[spec.name];
      spec = createObj(found, spec);
      spec.name = found.name;
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
      return CodeMirror.resolveMode("application/xml");
    }
    if (typeof spec == "string") return {name: spec};
    else return spec || {name: "null"};
  };

  CodeMirror.getMode = function(options, spec) {
    var spec = CodeMirror.resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
    var modeObj = mfactory(options, spec);
    if (modeExtensions.hasOwnProperty(spec.name)) {
      var exts = modeExtensions[spec.name];
      for (var prop in exts) {
        if (!exts.hasOwnProperty(prop)) continue;
        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
        modeObj[prop] = exts[prop];
      }
    }
    modeObj.name = spec.name;

    return modeObj;
  };

  CodeMirror.defineMode("null", function() {
    return {token: function(stream) {stream.skipToEnd();}};
  });
  CodeMirror.defineMIME("text/plain", "null");

  var modeExtensions = CodeMirror.modeExtensions = {};
  CodeMirror.extendMode = function(mode, properties) {
    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
    copyObj(properties, exts);
  };

  // EXTENSIONS

  CodeMirror.defineExtension = function(name, func) {
    CodeMirror.prototype[name] = func;
  };
  CodeMirror.defineDocExtension = function(name, func) {
    Doc.prototype[name] = func;
  };
  CodeMirror.defineOption = option;

  var initHooks = [];
  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

  var helpers = CodeMirror.helpers = {};
  CodeMirror.registerHelper = function(type, name, value) {
    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {};
    helpers[type][name] = value;
  };

  // UTILITIES

  CodeMirror.isWordChar = isWordChar;

  // MODE STATE HANDLING

  // Utility functions for working with state. Exported because modes
  // sometimes need to do this.
  function copyState(mode, state) {
    if (state === true) return state;
    if (mode.copyState) return mode.copyState(state);
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) val = val.concat([]);
      nstate[n] = val;
    }
    return nstate;
  }
  CodeMirror.copyState = copyState;

  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true;
  }
  CodeMirror.startState = startState;

  CodeMirror.innerMode = function(mode, state) {
    while (mode.innerMode) {
      var info = mode.innerMode(state);
      if (!info || info.mode == mode) break;
      state = info.state;
      mode = info.mode;
    }
    return info || {mode: mode, state: state};
  };

  // STANDARD COMMANDS

  var commands = CodeMirror.commands = {
    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()));},
    killLine: function(cm) {
      var from = cm.getCursor(true), to = cm.getCursor(false), sel = !posEq(from, to);
      if (!sel && cm.getLine(from.line).length == from.ch)
        cm.replaceRange("", from, Pos(from.line + 1, 0), "+delete");
      else cm.replaceRange("", from, sel ? to : Pos(from.line), "+delete");
    },
    deleteLine: function(cm) {
      var l = cm.getCursor().line;
      cm.replaceRange("", Pos(l, 0), Pos(l), "+delete");
    },
    delLineLeft: function(cm) {
      var cur = cm.getCursor();
      cm.replaceRange("", Pos(cur.line, 0), cur, "+delete");
    },
    undo: function(cm) {cm.undo();},
    redo: function(cm) {cm.redo();},
    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
    goLineStart: function(cm) {
      cm.extendSelection(lineStart(cm, cm.getCursor().line));
    },
    goLineStartSmart: function(cm) {
      var cur = cm.getCursor(), start = lineStart(cm, cur.line);
      var line = cm.getLineHandle(start.line);
      var order = getOrder(line);
      if (!order || order[0].level == 0) {
        var firstNonWS = Math.max(0, line.text.search(/\S/));
        var inWS = cur.line == start.line && cur.ch <= firstNonWS && cur.ch;
        cm.extendSelection(Pos(start.line, inWS ? 0 : firstNonWS));
      } else cm.extendSelection(start);
    },
    goLineEnd: function(cm) {
      cm.extendSelection(lineEnd(cm, cm.getCursor().line));
    },
    goLineRight: function(cm) {
      var top = cm.charCoords(cm.getCursor(), "div").top + 5;
      cm.extendSelection(cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div"));
    },
    goLineLeft: function(cm) {
      var top = cm.charCoords(cm.getCursor(), "div").top + 5;
      cm.extendSelection(cm.coordsChar({left: 0, top: top}, "div"));
    },
    goLineUp: function(cm) {cm.moveV(-1, "line");},
    goLineDown: function(cm) {cm.moveV(1, "line");},
    goPageUp: function(cm) {cm.moveV(-1, "page");},
    goPageDown: function(cm) {cm.moveV(1, "page");},
    goCharLeft: function(cm) {cm.moveH(-1, "char");},
    goCharRight: function(cm) {cm.moveH(1, "char");},
    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
    goColumnRight: function(cm) {cm.moveH(1, "column");},
    goWordLeft: function(cm) {cm.moveH(-1, "word");},
    goGroupRight: function(cm) {cm.moveH(1, "group");},
    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
    goWordRight: function(cm) {cm.moveH(1, "word");},
    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
    delCharAfter: function(cm) {cm.deleteH(1, "char");},
    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
    delWordAfter: function(cm) {cm.deleteH(1, "word");},
    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
    indentAuto: function(cm) {cm.indentSelection("smart");},
    indentMore: function(cm) {cm.indentSelection("add");},
    indentLess: function(cm) {cm.indentSelection("subtract");},
    insertTab: function(cm) {cm.replaceSelection("\t", "end", "+input");},
    defaultTab: function(cm) {
      if (cm.somethingSelected()) cm.indentSelection("add");
      else cm.replaceSelection("\t", "end", "+input");
    },
    transposeChars: function(cm) {
      var cur = cm.getCursor(), line = cm.getLine(cur.line);
      if (cur.ch > 0 && cur.ch < line.length - 1)
        cm.replaceRange(line.charAt(cur.ch) + line.charAt(cur.ch - 1),
                        Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1));
    },
    newlineAndIndent: function(cm) {
      operation(cm, function() {
        cm.replaceSelection("\n", "end", "+input");
        cm.indentLine(cm.getCursor().line, null, true);
      })();
    },
    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
  };

  // STANDARD KEYMAPS

  var keyMap = CodeMirror.keyMap = {};
  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite"
  };
  // Note that the save and find-related commands aren't defined by
  // default. Unknown commands are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Alt-Up": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Down": "goDocEnd",
    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    fallthrough: "basic"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineStart", "Cmd-Right": "goLineEnd", "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delLineLeft",
    fallthrough: ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
  };

  // KEYMAP DISPATCH

  function getKeyMap(val) {
    if (typeof val == "string") return keyMap[val];
    else return val;
  }

  function lookupKey(name, maps, handle) {
    function lookup(map) {
      map = getKeyMap(map);
      var found = map[name];
      if (found === false) return "stop";
      if (found != null && handle(found)) return true;
      if (map.nofallthrough) return "stop";

      var fallthrough = map.fallthrough;
      if (fallthrough == null) return false;
      if (Object.prototype.toString.call(fallthrough) != "[object Array]")
        return lookup(fallthrough);
      for (var i = 0, e = fallthrough.length; i < e; ++i) {
        var done = lookup(fallthrough[i]);
        if (done) return done;
      }
      return false;
    }

    for (var i = 0; i < maps.length; ++i) {
      var done = lookup(maps[i]);
      if (done) return done != "stop";
    }
  }
  function isModifierKey(event) {
    var name = keyNames[event.keyCode];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
  }
  function keyName(event, noShift) {
    if (opera && event.keyCode == 34 && event["char"]) return false;
    var name = keyNames[event.keyCode];
    if (name == null || event.altGraphKey) return false;
    if (event.altKey) name = "Alt-" + name;
    if (flipCtrlCmd ? event.metaKey : event.ctrlKey) name = "Ctrl-" + name;
    if (flipCtrlCmd ? event.ctrlKey : event.metaKey) name = "Cmd-" + name;
    if (!noShift && event.shiftKey) name = "Shift-" + name;
    return name;
  }
  CodeMirror.lookupKey = lookupKey;
  CodeMirror.isModifierKey = isModifierKey;
  CodeMirror.keyName = keyName;

  // FROMTEXTAREA

  CodeMirror.fromTextArea = function(textarea, options) {
    if (!options) options = {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabindex)
      options.tabindex = textarea.tabindex;
    if (!options.placeholder && textarea.placeholder)
      options.placeholder = textarea.placeholder;
    // Set autofocus to true if this textarea is focused, or if it has
    // autofocus and no other element is focused.
    if (options.autofocus == null) {
      var hasFocus = document.body;
      // doc.activeElement occasionally throws on IE
      try { hasFocus = document.activeElement; } catch(e) {}
      options.autofocus = hasFocus == textarea ||
        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
    }

    function save() {textarea.value = cm.getValue();}
    if (textarea.form) {
      on(textarea.form, "submit", save);
      // Deplorable hack to make the submit method do the right thing.
      if (!options.leaveSubmitMethodAlone) {
        var form = textarea.form, realSubmit = form.submit;
        try {
          var wrappedSubmit = form.submit = function() {
            save();
            form.submit = realSubmit;
            form.submit();
            form.submit = wrappedSubmit;
          };
        } catch(e) {}
      }
    }

    textarea.style.display = "none";
    var cm = CodeMirror(function(node) {
      textarea.parentNode.insertBefore(node, textarea.nextSibling);
    }, options);
    cm.save = save;
    cm.getTextArea = function() { return textarea; };
    cm.toTextArea = function() {
      save();
      textarea.parentNode.removeChild(cm.getWrapperElement());
      textarea.style.display = "";
      if (textarea.form) {
        off(textarea.form, "submit", save);
        if (typeof textarea.form.submit == "function")
          textarea.form.submit = realSubmit;
      }
    };
    return cm;
  };

  // STRING STREAM

  // Fed to the mode parsers, provides helper functions to make
  // parsers more succinct.

  // The character stream used by a mode's parser.
  function StringStream(string, tabSize) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
  }

  StringStream.prototype = {
    eol: function() {return this.pos >= this.string.length;},
    sol: function() {return this.pos == 0;},
    peek: function() {return this.string.charAt(this.pos) || undefined;},
    next: function() {
      if (this.pos < this.string.length)
        return this.string.charAt(this.pos++);
    },
    eat: function(match) {
      var ch = this.string.charAt(this.pos);
      if (typeof match == "string") var ok = ch == match;
      else var ok = ch && (match.test ? match.test(ch) : match(ch));
      if (ok) {++this.pos; return ch;}
    },
    eatWhile: function(match) {
      var start = this.pos;
      while (this.eat(match)){}
      return this.pos > start;
    },
    eatSpace: function() {
      var start = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
      return this.pos > start;
    },
    skipToEnd: function() {this.pos = this.string.length;},
    skipTo: function(ch) {
      var found = this.string.indexOf(ch, this.pos);
      if (found > -1) {this.pos = found; return true;}
    },
    backUp: function(n) {this.pos -= n;},
    column: function() {
      if (this.lastColumnPos < this.start) {
        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
        this.lastColumnPos = this.start;
      }
      return this.lastColumnValue;
    },
    indentation: function() {return countColumn(this.string, null, this.tabSize);},
    match: function(pattern, consume, caseInsensitive) {
      if (typeof pattern == "string") {
        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
        var substr = this.string.substr(this.pos, pattern.length);
        if (cased(substr) == cased(pattern)) {
          if (consume !== false) this.pos += pattern.length;
          return true;
        }
      } else {
        var match = this.string.slice(this.pos).match(pattern);
        if (match && match.index > 0) return null;
        if (match && consume !== false) this.pos += match[0].length;
        return match;
      }
    },
    current: function(){return this.string.slice(this.start, this.pos);}
  };
  CodeMirror.StringStream = StringStream;

  // TEXTMARKERS

  function TextMarker(doc, type) {
    this.lines = [];
    this.type = type;
    this.doc = doc;
  }
  CodeMirror.TextMarker = TextMarker;
  eventMixin(TextMarker);

  TextMarker.prototype.clear = function() {
    if (this.explicitlyCleared) return;
    var cm = this.doc.cm, withOp = cm && !cm.curOp;
    if (withOp) startOperation(cm);
    if (hasHandler(this, "clear")) {
      var found = this.find();
      if (found) signalLater(this, "clear", found.from, found.to);
    }
    var min = null, max = null;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (span.to != null) max = lineNo(line);
      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
      if (span.from != null)
        min = lineNo(line);
      else if (this.collapsed && !lineIsHidden(this.doc, line) && cm)
        updateLineHeight(line, textHeight(cm.display));
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
      var visual = visualLine(cm.doc, this.lines[i]), len = lineLength(cm.doc, visual);
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual;
        cm.display.maxLineLength = len;
        cm.display.maxLineChanged = true;
      }
    }

    if (min != null && cm) regChange(cm, min, max + 1);
    this.lines.length = 0;
    this.explicitlyCleared = true;
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false;
      if (cm) reCheckSelection(cm);
    }
    if (withOp) endOperation(cm);
  };

  TextMarker.prototype.find = function() {
    var from, to;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (span.from != null || span.to != null) {
        var found = lineNo(line);
        if (span.from != null) from = Pos(found, span.from);
        if (span.to != null) to = Pos(found, span.to);
      }
    }
    if (this.type == "bookmark") return from;
    return from && {from: from, to: to};
  };

  TextMarker.prototype.changed = function() {
    var pos = this.find(), cm = this.doc.cm;
    if (!pos || !cm) return;
    if (this.type != "bookmark") pos = pos.from;
    var line = getLine(this.doc, pos.line);
    clearCachedMeasurement(cm, line);
    if (pos.line >= cm.display.showingFrom && pos.line < cm.display.showingTo) {
      for (var node = cm.display.lineDiv.firstChild; node; node = node.nextSibling) if (node.lineObj == line) {
        if (node.offsetHeight != line.height) updateLineHeight(line, node.offsetHeight);
        break;
      }
      runInOp(cm, function() {
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = cm.curOp.updateMaxLine = true;
      });
    }
  };

  TextMarker.prototype.attachLine = function(line) {
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
    }
    this.lines.push(line);
  };
  TextMarker.prototype.detachLine = function(line) {
    this.lines.splice(indexOf(this.lines, line), 1);
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
    }
  };

  function markText(doc, from, to, options, type) {
    if (options && options.shared) return markTextShared(doc, from, to, options, type);
    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

    var marker = new TextMarker(doc, type);
    if (type == "range" && !posLess(from, to)) return marker;
    if (options) copyObj(options, marker);
    if (marker.replacedWith) {
      marker.collapsed = true;
      marker.replacedWith = elt("span", [marker.replacedWith], "CodeMirror-widget");
      if (!options.handleMouseEvents) marker.replacedWith.ignoreEvents = true;
    }
    if (marker.collapsed) sawCollapsedSpans = true;

    if (marker.addToHistory)
      addToHistory(doc, {from: from, to: to, origin: "markText"},
                   {head: doc.sel.head, anchor: doc.sel.anchor}, NaN);

    var curLine = from.line, size = 0, collapsedAtStart, collapsedAtEnd, cm = doc.cm, updateMaxLine;
    doc.iter(curLine, to.line + 1, function(line) {
      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(doc, line) == cm.display.maxLine)
        updateMaxLine = true;
      var span = {from: null, to: null, marker: marker};
      size += line.text.length;
      if (curLine == from.line) {span.from = from.ch; size -= from.ch;}
      if (curLine == to.line) {span.to = to.ch; size -= line.text.length - to.ch;}
      if (marker.collapsed) {
        if (curLine == to.line) collapsedAtEnd = collapsedSpanAt(line, to.ch);
        if (curLine == from.line) collapsedAtStart = collapsedSpanAt(line, from.ch);
        else updateLineHeight(line, 0);
      }
      addMarkedSpan(line, span);
      ++curLine;
    });
    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
    });

    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

    if (marker.readOnly) {
      sawReadOnlySpans = true;
      if (doc.history.done.length || doc.history.undone.length)
        doc.clearHistory();
    }
    if (marker.collapsed) {
      if (collapsedAtStart != collapsedAtEnd)
        throw new Error("Inserting collapsed marker overlapping an existing one");
      marker.size = size;
      marker.atomic = true;
    }
    if (cm) {
      if (updateMaxLine) cm.curOp.updateMaxLine = true;
      if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.collapsed)
        regChange(cm, from.line, to.line + 1);
      if (marker.atomic) reCheckSelection(cm);
    }
    return marker;
  }

  // SHARED TEXTMARKERS

  function SharedTextMarker(markers, primary) {
    this.markers = markers;
    this.primary = primary;
    for (var i = 0, me = this; i < markers.length; ++i) {
      markers[i].parent = this;
      on(markers[i], "clear", function(){me.clear();});
    }
  }
  CodeMirror.SharedTextMarker = SharedTextMarker;
  eventMixin(SharedTextMarker);

  SharedTextMarker.prototype.clear = function() {
    if (this.explicitlyCleared) return;
    this.explicitlyCleared = true;
    for (var i = 0; i < this.markers.length; ++i)
      this.markers[i].clear();
    signalLater(this, "clear");
  };
  SharedTextMarker.prototype.find = function() {
    return this.primary.find();
  };

  function markTextShared(doc, from, to, options, type) {
    options = copyObj(options);
    options.shared = false;
    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
    var widget = options.replacedWith;
    linkedDocs(doc, function(doc) {
      if (widget) options.replacedWith = widget.cloneNode(true);
      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
      for (var i = 0; i < doc.linked.length; ++i)
        if (doc.linked[i].isParent) return;
      primary = lst(markers);
    });
    return new SharedTextMarker(markers, primary);
  }

  // TEXTMARKER SPANS

  function getMarkedSpanFor(spans, marker) {
    if (spans) for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.marker == marker) return span;
    }
  }
  function removeMarkedSpan(spans, span) {
    for (var r, i = 0; i < spans.length; ++i)
      if (spans[i] != span) (r || (r = [])).push(spans[i]);
    return r;
  }
  function addMarkedSpan(line, span) {
    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
    span.marker.attachLine(line);
  }

  function markedSpansBefore(old, startCh, isInsert) {
    if (old) for (var i = 0, nw; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
      if (startsBefore || marker.type == "bookmark" && span.from == startCh && (!isInsert || !span.marker.insertLeft)) {
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
        (nw || (nw = [])).push({from: span.from,
                                to: endsAfter ? null : span.to,
                                marker: marker});
      }
    }
    return nw;
  }

  function markedSpansAfter(old, endCh, isInsert) {
    if (old) for (var i = 0, nw; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
      if (endsAfter || marker.type == "bookmark" && span.from == endCh && (!isInsert || span.marker.insertLeft)) {
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
        (nw || (nw = [])).push({from: startsBefore ? null : span.from - endCh,
                                to: span.to == null ? null : span.to - endCh,
                                marker: marker});
      }
    }
    return nw;
  }

  function stretchSpansOverChange(doc, change) {
    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
    if (!oldFirst && !oldLast) return null;

    var startCh = change.from.ch, endCh = change.to.ch, isInsert = posEq(change.from, change.to);
    // Get the spans that 'stick out' on both sides
    var first = markedSpansBefore(oldFirst, startCh, isInsert);
    var last = markedSpansAfter(oldLast, endCh, isInsert);

    // Next, merge those two ends
    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
    if (first) {
      // Fix up .to properties of first
      for (var i = 0; i < first.length; ++i) {
        var span = first[i];
        if (span.to == null) {
          var found = getMarkedSpanFor(last, span.marker);
          if (!found) span.to = startCh;
          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
        }
      }
    }
    if (last) {
      // Fix up .from in last (or move them into first in case of sameLine)
      for (var i = 0; i < last.length; ++i) {
        var span = last[i];
        if (span.to != null) span.to += offset;
        if (span.from == null) {
          var found = getMarkedSpanFor(first, span.marker);
          if (!found) {
            span.from = offset;
            if (sameLine) (first || (first = [])).push(span);
          }
        } else {
          span.from += offset;
          if (sameLine) (first || (first = [])).push(span);
        }
      }
    }
    if (sameLine && first) {
      // Make sure we didn't create any zero-length spans
      for (var i = 0; i < first.length; ++i)
        if (first[i].from != null && first[i].from == first[i].to && first[i].marker.type != "bookmark")
          first.splice(i--, 1);
      if (!first.length) first = null;
    }

    var newMarkers = [first];
    if (!sameLine) {
      // Fill gap with whole-line-spans
      var gap = change.text.length - 2, gapMarkers;
      if (gap > 0 && first)
        for (var i = 0; i < first.length; ++i)
          if (first[i].to == null)
            (gapMarkers || (gapMarkers = [])).push({from: null, to: null, marker: first[i].marker});
      for (var i = 0; i < gap; ++i)
        newMarkers.push(gapMarkers);
      newMarkers.push(last);
    }
    return newMarkers;
  }

  function mergeOldSpans(doc, change) {
    var old = getOldSpans(doc, change);
    var stretched = stretchSpansOverChange(doc, change);
    if (!old) return stretched;
    if (!stretched) return old;

    for (var i = 0; i < old.length; ++i) {
      var oldCur = old[i], stretchCur = stretched[i];
      if (oldCur && stretchCur) {
        spans: for (var j = 0; j < stretchCur.length; ++j) {
          var span = stretchCur[j];
          for (var k = 0; k < oldCur.length; ++k)
            if (oldCur[k].marker == span.marker) continue spans;
          oldCur.push(span);
        }
      } else if (stretchCur) {
        old[i] = stretchCur;
      }
    }
    return old;
  }

  function removeReadOnlyRanges(doc, from, to) {
    var markers = null;
    doc.iter(from.line, to.line + 1, function(line) {
      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
        var mark = line.markedSpans[i].marker;
        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
          (markers || (markers = [])).push(mark);
      }
    });
    if (!markers) return null;
    var parts = [{from: from, to: to}];
    for (var i = 0; i < markers.length; ++i) {
      var mk = markers[i], m = mk.find();
      for (var j = 0; j < parts.length; ++j) {
        var p = parts[j];
        if (posLess(p.to, m.from) || posLess(m.to, p.from)) continue;
        var newParts = [j, 1];
        if (posLess(p.from, m.from) || !mk.inclusiveLeft && posEq(p.from, m.from))
          newParts.push({from: p.from, to: m.from});
        if (posLess(m.to, p.to) || !mk.inclusiveRight && posEq(p.to, m.to))
          newParts.push({from: m.to, to: p.to});
        parts.splice.apply(parts, newParts);
        j += newParts.length - 1;
      }
    }
    return parts;
  }

  function collapsedSpanAt(line, ch) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) continue;
      if ((sp.from == null || sp.from < ch) &&
          (sp.to == null || sp.to > ch) &&
          (!found || found.width < sp.marker.width))
        found = sp.marker;
    }
    return found;
  }
  function collapsedSpanAtStart(line) { return collapsedSpanAt(line, -1); }
  function collapsedSpanAtEnd(line) { return collapsedSpanAt(line, line.text.length + 1); }

  function visualLine(doc, line) {
    var merged;
    while (merged = collapsedSpanAtStart(line))
      line = getLine(doc, merged.find().from.line);
    return line;
  }

  function lineIsHidden(doc, line) {
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) continue;
      if (sp.from == null) return true;
      if (sp.marker.replacedWith) continue;
      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
        return true;
    }
  }
  function lineIsHiddenInner(doc, line, span) {
    if (span.to == null) {
      var end = span.marker.find().to, endLine = getLine(doc, end.line);
      return lineIsHiddenInner(doc, endLine, getMarkedSpanFor(endLine.markedSpans, span.marker));
    }
    if (span.marker.inclusiveRight && span.to == line.text.length)
      return true;
    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
      sp = line.markedSpans[i];
      if (sp.marker.collapsed && !sp.marker.replacedWith && sp.from == span.to &&
          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
          lineIsHiddenInner(doc, line, sp)) return true;
    }
  }

  function detachMarkedSpans(line) {
    var spans = line.markedSpans;
    if (!spans) return;
    for (var i = 0; i < spans.length; ++i)
      spans[i].marker.detachLine(line);
    line.markedSpans = null;
  }

  function attachMarkedSpans(line, spans) {
    if (!spans) return;
    for (var i = 0; i < spans.length; ++i)
      spans[i].marker.attachLine(line);
    line.markedSpans = spans;
  }

  // LINE WIDGETS

  var LineWidget = CodeMirror.LineWidget = function(cm, node, options) {
    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
      this[opt] = options[opt];
    this.cm = cm;
    this.node = node;
  };
  eventMixin(LineWidget);
  function widgetOperation(f) {
    return function() {
      var withOp = !this.cm.curOp;
      if (withOp) startOperation(this.cm);
      try {var result = f.apply(this, arguments);}
      finally {if (withOp) endOperation(this.cm);}
      return result;
    };
  }
  LineWidget.prototype.clear = widgetOperation(function() {
    var ws = this.line.widgets, no = lineNo(this.line);
    if (no == null || !ws) return;
    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
    if (!ws.length) this.line.widgets = null;
    var aboveVisible = heightAtLine(this.cm, this.line) < this.cm.doc.scrollTop;
    updateLineHeight(this.line, Math.max(0, this.line.height - widgetHeight(this)));
    if (aboveVisible) addToScrollPos(this.cm, 0, -this.height);
    regChange(this.cm, no, no + 1);
  });
  LineWidget.prototype.changed = widgetOperation(function() {
    var oldH = this.height;
    this.height = null;
    var diff = widgetHeight(this) - oldH;
    if (!diff) return;
    updateLineHeight(this.line, this.line.height + diff);
    var no = lineNo(this.line);
    regChange(this.cm, no, no + 1);
  });

  function widgetHeight(widget) {
    if (widget.height != null) return widget.height;
    if (!widget.node.parentNode || widget.node.parentNode.nodeType != 1)
      removeChildrenAndAdd(widget.cm.display.measure, elt("div", [widget.node], null, "position: relative"));
    return widget.height = widget.node.offsetHeight;
  }

  function addLineWidget(cm, handle, node, options) {
    var widget = new LineWidget(cm, node, options);
    if (widget.noHScroll) cm.display.alignWidgets = true;
    changeLine(cm, handle, function(line) {
      var widgets = line.widgets || (line.widgets = []);
      if (widget.insertAt == null) widgets.push(widget);
      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
      widget.line = line;
      if (!lineIsHidden(cm.doc, line) || widget.showIfHidden) {
        var aboveVisible = heightAtLine(cm, line) < cm.doc.scrollTop;
        updateLineHeight(line, line.height + widgetHeight(widget));
        if (aboveVisible) addToScrollPos(cm, 0, widget.height);
      }
      return true;
    });
    return widget;
  }

  // LINE DATA STRUCTURE

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
    this.text = text;
    attachMarkedSpans(this, markedSpans);
    this.height = estimateHeight ? estimateHeight(this) : 1;
  };
  eventMixin(Line);

  function updateLine(line, text, markedSpans, estimateHeight) {
    line.text = text;
    if (line.stateAfter) line.stateAfter = null;
    if (line.styles) line.styles = null;
    if (line.order != null) line.order = null;
    detachMarkedSpans(line);
    attachMarkedSpans(line, markedSpans);
    var estHeight = estimateHeight ? estimateHeight(line) : 1;
    if (estHeight != line.height) updateLineHeight(line, estHeight);
  }

  function cleanUpLine(line) {
    line.parent = null;
    detachMarkedSpans(line);
  }

  // Run the given mode's parser over a line, update the styles
  // array, which contains alternating fragments of text and CSS
  // classes.
  function runMode(cm, text, mode, state, f) {
    var flattenSpans = mode.flattenSpans;
    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
    var curStart = 0, curStyle = null;
    var stream = new StringStream(text, cm.options.tabSize), style;
    if (text == "" && mode.blankLine) mode.blankLine(state);
    while (!stream.eol()) {
      if (stream.pos > cm.options.maxHighlightLength) {
        flattenSpans = false;
        stream.pos = text.length;
        style = null;
      } else {
        style = mode.token(stream, state);
      }
      if (!flattenSpans || curStyle != style) {
        if (curStart < stream.start) f(stream.start, curStyle);
        curStart = stream.start; curStyle = style;
      }
      stream.start = stream.pos;
    }
    while (curStart < stream.pos) {
      // Webkit seems to refuse to render text nodes longer than 57444 characters
      var pos = Math.min(stream.pos, curStart + 50000);
      f(pos, curStyle);
      curStart = pos;
    }
  }

  function highlightLine(cm, line, state) {
    // A styles array always starts with a number identifying the
    // mode/overlays that it is based on (for easy invalidation).
    var st = [cm.state.modeGen];
    // Compute the base array of styles
    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {st.push(end, style);});

    // Run overlays, adjust style array.
    for (var o = 0; o < cm.state.overlays.length; ++o) {
      var overlay = cm.state.overlays[o], i = 1, at = 0;
      runMode(cm, line.text, overlay.mode, true, function(end, style) {
        var start = i;
        // Ensure there's a token end at the current position, and that i points at it
        while (at < end) {
          var i_end = st[i];
          if (i_end > end)
            st.splice(i, 1, end, st[i+1], i_end);
          i += 2;
          at = Math.min(end, i_end);
        }
        if (!style) return;
        if (overlay.opaque) {
          st.splice(start, i - start, end, style);
          i = start + 2;
        } else {
          for (; start < i; start += 2) {
            var cur = st[start+1];
            st[start+1] = cur ? cur + " " + style : style;
          }
        }
      });
    }

    return st;
  }

  function getLineStyles(cm, line) {
    if (!line.styles || line.styles[0] != cm.state.modeGen)
      line.styles = highlightLine(cm, line, line.stateAfter = getStateBefore(cm, lineNo(line)));
    return line.styles;
  }

  // Lightweight form of highlight -- proceed over this line and
  // update state, but don't save a style array.
  function processLine(cm, line, state) {
    var mode = cm.doc.mode;
    var stream = new StringStream(line.text, cm.options.tabSize);
    if (line.text == "" && mode.blankLine) mode.blankLine(state);
    while (!stream.eol() && stream.pos <= cm.options.maxHighlightLength) {
      mode.token(stream, state);
      stream.start = stream.pos;
    }
  }

  var styleToClassCache = {};
  function interpretTokenStyle(style, builder) {
    if (!style) return null;
    for (;;) {
      var lineClass = style.match(/(?:^|\s)line-(background-)?(\S+)/);
      if (!lineClass) break;
      style = style.slice(0, lineClass.index) + style.slice(lineClass.index + lineClass[0].length);
      var prop = lineClass[1] ? "bgClass" : "textClass";
      if (builder[prop] == null)
        builder[prop] = lineClass[2];
      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(builder[prop]))
        builder[prop] += " " + lineClass[2];
    }
    return styleToClassCache[style] ||
      (styleToClassCache[style] = "cm-" + style.replace(/ +/g, " cm-"));
  }

  function buildLineContent(cm, realLine, measure, copyWidgets) {
    var merged, line = realLine, empty = true;
    while (merged = collapsedSpanAtStart(line))
      line = getLine(cm.doc, merged.find().from.line);

    var builder = {pre: elt("pre"), col: 0, pos: 0,
                   measure: null, measuredSomething: false, cm: cm,
                   copyWidgets: copyWidgets};

    do {
      if (line.text) empty = false;
      builder.measure = line == realLine && measure;
      builder.pos = 0;
      builder.addToken = builder.measure ? buildTokenMeasure : buildToken;
      if ((ie || webkit) && cm.getOption("lineWrapping"))
        builder.addToken = buildTokenSplitSpaces(builder.addToken);
      var next = insertLineContent(line, builder, getLineStyles(cm, line));
      if (measure && line == realLine && !builder.measuredSomething) {
        measure[0] = builder.pre.appendChild(zeroWidthElement(cm.display.measure));
        builder.measuredSomething = true;
      }
      if (next) line = getLine(cm.doc, next.to.line);
    } while (next);

    if (measure && !builder.measuredSomething && !measure[0])
      measure[0] = builder.pre.appendChild(empty ? elt("span", "\u00a0") : zeroWidthElement(cm.display.measure));
    if (!builder.pre.firstChild && !lineIsHidden(cm.doc, realLine))
      builder.pre.appendChild(document.createTextNode("\u00a0"));

    var order;
    // Work around problem with the reported dimensions of single-char
    // direction spans on IE (issue #1129). See also the comment in
    // cursorCoords.
    if (measure && ie && (order = getOrder(line))) {
      var l = order.length - 1;
      if (order[l].from == order[l].to) --l;
      var last = order[l], prev = order[l - 1];
      if (last.from + 1 == last.to && prev && last.level < prev.level) {
        var span = measure[builder.pos - 1];
        if (span) span.parentNode.insertBefore(span.measureRight = zeroWidthElement(cm.display.measure),
                                               span.nextSibling);
      }
    }

    var textClass = builder.textClass ? builder.textClass + " " + (realLine.textClass || "") : realLine.textClass;
    if (textClass) builder.pre.className = textClass;

    signal(cm, "renderLine", cm, realLine, builder.pre);
    return builder;
  }

  var tokenSpecialChars = /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\uFEFF]/g;
  function buildToken(builder, text, style, startStyle, endStyle, title) {
    if (!text) return;
    if (!tokenSpecialChars.test(text)) {
      builder.col += text.length;
      var content = document.createTextNode(text);
    } else {
      var content = document.createDocumentFragment(), pos = 0;
      while (true) {
        tokenSpecialChars.lastIndex = pos;
        var m = tokenSpecialChars.exec(text);
        var skipped = m ? m.index - pos : text.length - pos;
        if (skipped) {
          content.appendChild(document.createTextNode(text.slice(pos, pos + skipped)));
          builder.col += skipped;
        }
        if (!m) break;
        pos += skipped + 1;
        if (m[0] == "\t") {
          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
          content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
          builder.col += tabWidth;
        } else {
          var token = elt("span", "\u2022", "cm-invalidchar");
          token.title = "\\u" + m[0].charCodeAt(0).toString(16);
          content.appendChild(token);
          builder.col += 1;
        }
      }
    }
    if (style || startStyle || endStyle || builder.measure) {
      var fullStyle = style || "";
      if (startStyle) fullStyle += startStyle;
      if (endStyle) fullStyle += endStyle;
      var token = elt("span", [content], fullStyle);
      if (title) token.title = title;
      return builder.pre.appendChild(token);
    }
    builder.pre.appendChild(content);
  }

  function buildTokenMeasure(builder, text, style, startStyle, endStyle) {
    var wrapping = builder.cm.options.lineWrapping;
    for (var i = 0; i < text.length; ++i) {
      var ch = text.charAt(i), start = i == 0;
      if (ch >= "\ud800" && ch < "\udbff" && i < text.length - 1) {
        ch = text.slice(i, i + 2);
        ++i;
      } else if (i && wrapping && spanAffectsWrapping(text, i)) {
        builder.pre.appendChild(elt("wbr"));
      }
      var old = builder.measure[builder.pos];
      var span = builder.measure[builder.pos] =
        buildToken(builder, ch, style,
                   start && startStyle, i == text.length - 1 && endStyle);
      if (old) span.leftSide = old.leftSide || old;
      // In IE single-space nodes wrap differently than spaces
      // embedded in larger text nodes, except when set to
      // white-space: normal (issue #1268).
      if (ie && wrapping && ch == " " && i && !/\s/.test(text.charAt(i - 1)) &&
          i < text.length - 1 && !/\s/.test(text.charAt(i + 1)))
        span.style.whiteSpace = "normal";
      builder.pos += ch.length;
    }
    if (text.length) builder.measuredSomething = true;
  }

  function buildTokenSplitSpaces(inner) {
    function split(old) {
      var out = " ";
      for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
      out += " ";
      return out;
    }
    return function(builder, text, style, startStyle, endStyle, title) {
      return inner(builder, text.replace(/ {3,}/g, split), style, startStyle, endStyle, title);
    };
  }

  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
    var widget = !ignoreWidget && marker.replacedWith;
    if (widget) {
      if (builder.copyWidgets) widget = widget.cloneNode(true);
      builder.pre.appendChild(widget);
      if (builder.measure) {
        if (size) {
          builder.measure[builder.pos] = widget;
        } else {
          var elt = zeroWidthElement(builder.cm.display.measure);
          if (marker.type == "bookmark" && !marker.insertLeft)
            builder.measure[builder.pos] = builder.pre.appendChild(elt);
          else if (builder.measure[builder.pos])
            return;
          else
            builder.measure[builder.pos] = builder.pre.insertBefore(elt, widget);
        }
        builder.measuredSomething = true;
      }
    }
    builder.pos += size;
  }

  // Outputs a number of spans to make up a line, taking highlighting
  // and marked text into account.
  function insertLineContent(line, builder, styles) {
    var spans = line.markedSpans, allText = line.text, at = 0;
    if (!spans) {
      for (var i = 1; i < styles.length; i+=2)
        builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder));
      return;
    }

    var len = allText.length, pos = 0, i = 1, text = "", style;
    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
    for (;;) {
      if (nextChange == pos) { // Update current marker set
        spanStyle = spanEndStyle = spanStartStyle = title = "";
        collapsed = null; nextChange = Infinity;
        var foundBookmarks = [];
        for (var j = 0; j < spans.length; ++j) {
          var sp = spans[j], m = sp.marker;
          if (sp.from <= pos && (sp.to == null || sp.to > pos)) {
            if (sp.to != null && nextChange > sp.to) { nextChange = sp.to; spanEndStyle = ""; }
            if (m.className) spanStyle += " " + m.className;
            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
            if (m.endStyle && sp.to == nextChange) spanEndStyle += " " + m.endStyle;
            if (m.title && !title) title = m.title;
            if (m.collapsed && (!collapsed || collapsed.marker.size < m.size))
              collapsed = sp;
          } else if (sp.from > pos && nextChange > sp.from) {
            nextChange = sp.from;
          }
          if (m.type == "bookmark" && sp.from == pos && m.replacedWith) foundBookmarks.push(m);
        }
        if (collapsed && (collapsed.from || 0) == pos) {
          buildCollapsedSpan(builder, (collapsed.to == null ? len : collapsed.to) - pos,
                             collapsed.marker, collapsed.from == null);
          if (collapsed.to == null) return collapsed.marker.find();
        }
        if (!collapsed && foundBookmarks.length) for (var j = 0; j < foundBookmarks.length; ++j)
          buildCollapsedSpan(builder, 0, foundBookmarks[j]);
      }
      if (pos >= len) break;

      var upto = Math.min(len, nextChange);
      while (true) {
        if (text) {
          var end = pos + text.length;
          if (!collapsed) {
            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title);
          }
          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
          pos = end;
          spanStartStyle = "";
        }
        text = allText.slice(at, at = styles[i++]);
        style = interpretTokenStyle(styles[i++], builder);
      }
    }
  }

  // DOCUMENT DATA STRUCTURE

  function updateDoc(doc, change, markedSpans, selAfter, estimateHeight) {
    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
    function update(line, text, spans) {
      updateLine(line, text, spans, estimateHeight);
      signalLater(line, "change", line, change);
    }

    var from = change.from, to = change.to, text = change.text;
    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

    // First adjust the line structure
    if (from.ch == 0 && to.ch == 0 && lastText == "") {
      // This is a whole-line replace. Treated specially to make
      // sure line objects move the way they are supposed to.
      for (var i = 0, e = text.length - 1, added = []; i < e; ++i)
        added.push(new Line(text[i], spansFor(i), estimateHeight));
      update(lastLine, lastLine.text, lastSpans);
      if (nlines) doc.remove(from.line, nlines);
      if (added.length) doc.insert(from.line, added);
    } else if (firstLine == lastLine) {
      if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
      } else {
        for (var added = [], i = 1, e = text.length - 1; i < e; ++i)
          added.push(new Line(text[i], spansFor(i), estimateHeight));
        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        doc.insert(from.line + 1, added);
      }
    } else if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
      doc.remove(from.line + 1, nlines);
    } else {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
      for (var i = 1, e = text.length - 1, added = []; i < e; ++i)
        added.push(new Line(text[i], spansFor(i), estimateHeight));
      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
      doc.insert(from.line + 1, added);
    }

    signalLater(doc, "change", doc, change);
    setSelection(doc, selAfter.anchor, selAfter.head, null, true);
  }

  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    for (var i = 0, e = lines.length, height = 0; i < e; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }

  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length; },
    removeInner: function(at, n) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        this.height -= line.height;
        cleanUpLine(line);
        signalLater(line, "delete");
      }
      this.lines.splice(at, n);
    },
    collapse: function(lines) {
      lines.splice.apply(lines, [lines.length, 0].concat(this.lines));
    },
    insertInner: function(at, lines, height) {
      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0, e = lines.length; i < e; ++i) lines[i].parent = this;
    },
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        if (op(this.lines[at])) return true;
    }
  };

  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0, e = children.length; i < e; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }

  BranchChunk.prototype = {
    chunkSize: function() { return this.size; },
    removeInner: function(at, n) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.removeInner(at, rm);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) break;
          at = 0;
        } else at -= sz;
      }
      if (this.size - n < 25) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },
    collapse: function(lines) {
      for (var i = 0, e = this.children.length; i < e; ++i) this.children[i].collapse(lines);
    },
    insertInner: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertInner(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            while (child.lines.length > 50) {
              var spilled = child.lines.splice(child.lines.length - 25, 25);
              var newleaf = new LeafChunk(spilled);
              child.height -= newleaf.height;
              this.children.splice(i + 1, 0, newleaf);
              newleaf.parent = this;
            }
            this.maybeSpill();
          }
          break;
        }
        at -= sz;
      }
    },
    maybeSpill: function() {
      if (this.children.length <= 10) return;
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
        } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10);
      me.parent.maybeSpill();
    },
    iterN: function(at, n, op) {
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) return true;
          if ((n -= used) == 0) break;
          at = 0;
        } else at -= sz;
      }
    }
  };

  var nextDocId = 0;
  var Doc = CodeMirror.Doc = function(text, mode, firstLine) {
    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine);
    if (firstLine == null) firstLine = 0;

    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
    this.first = firstLine;
    this.scrollTop = this.scrollLeft = 0;
    this.cantEdit = false;
    this.history = makeHistory();
    this.cleanGeneration = 1;
    this.frontier = firstLine;
    var start = Pos(firstLine, 0);
    this.sel = {from: start, to: start, head: start, anchor: start, shift: false, extend: false, goalColumn: null};
    this.id = ++nextDocId;
    this.modeOption = mode;

    if (typeof text == "string") text = splitLines(text);
    updateDoc(this, {from: start, to: start, text: text}, null, {head: start, anchor: start});
  };

  Doc.prototype = createObj(BranchChunk.prototype, {
    constructor: Doc,
    iter: function(from, to, op) {
      if (op) this.iterN(from - this.first, to - from, op);
      else this.iterN(this.first, this.first + this.size, from);
    },

    insert: function(at, lines) {
      var height = 0;
      for (var i = 0, e = lines.length; i < e; ++i) height += lines[i].height;
      this.insertInner(at - this.first, lines, height);
    },
    remove: function(at, n) { this.removeInner(at - this.first, n); },

    getValue: function(lineSep) {
      var lines = getLines(this, this.first, this.first + this.size);
      if (lineSep === false) return lines;
      return lines.join(lineSep || "\n");
    },
    setValue: function(code) {
      var top = Pos(this.first, 0), last = this.first + this.size - 1;
      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                        text: splitLines(code), origin: "setValue"},
                 {head: top, anchor: top}, true);
    },
    replaceRange: function(code, from, to, origin) {
      from = clipPos(this, from);
      to = to ? clipPos(this, to) : from;
      replaceRange(this, code, from, to, origin);
    },
    getRange: function(from, to, lineSep) {
      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
      if (lineSep === false) return lines;
      return lines.join(lineSep || "\n");
    },

    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},
    setLine: function(line, text) {
      if (isLine(this, line))
        replaceRange(this, text, Pos(line, 0), clipPos(this, Pos(line)));
    },
    removeLine: function(line) {
      if (line) replaceRange(this, "", clipPos(this, Pos(line - 1)), clipPos(this, Pos(line)));
      else replaceRange(this, "", Pos(0, 0), clipPos(this, Pos(1, 0)));
    },

    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
    getLineNumber: function(line) {return lineNo(line);},

    getLineHandleVisualStart: function(line) {
      if (typeof line == "number") line = getLine(this, line);
      return visualLine(this, line);
    },

    lineCount: function() {return this.size;},
    firstLine: function() {return this.first;},
    lastLine: function() {return this.first + this.size - 1;},

    clipPos: function(pos) {return clipPos(this, pos);},

    getCursor: function(start) {
      var sel = this.sel, pos;
      if (start == null || start == "head") pos = sel.head;
      else if (start == "anchor") pos = sel.anchor;
      else if (start == "end" || start === false) pos = sel.to;
      else pos = sel.from;
      return copyPos(pos);
    },
    somethingSelected: function() {return !posEq(this.sel.head, this.sel.anchor);},

    setCursor: docOperation(function(line, ch, extend) {
      var pos = clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line);
      if (extend) extendSelection(this, pos);
      else setSelection(this, pos, pos);
    }),
    setSelection: docOperation(function(anchor, head, bias) {
      setSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), bias);
    }),
    extendSelection: docOperation(function(from, to, bias) {
      extendSelection(this, clipPos(this, from), to && clipPos(this, to), bias);
    }),

    getSelection: function(lineSep) {return this.getRange(this.sel.from, this.sel.to, lineSep);},
    replaceSelection: function(code, collapse, origin) {
      makeChange(this, {from: this.sel.from, to: this.sel.to, text: splitLines(code), origin: origin}, collapse || "around");
    },
    undo: docOperation(function() {makeChangeFromHistory(this, "undo");}),
    redo: docOperation(function() {makeChangeFromHistory(this, "redo");}),

    setExtending: function(val) {this.sel.extend = val;},

    historySize: function() {
      var hist = this.history;
      return {undo: hist.done.length, redo: hist.undone.length};
    },
    clearHistory: function() {this.history = makeHistory(this.history.maxGeneration);},

    markClean: function() {
      this.cleanGeneration = this.changeGeneration();
    },
    changeGeneration: function() {
      this.history.lastOp = this.history.lastOrigin = null;
      return this.history.generation;
    },
    isClean: function (gen) {
      return this.history.generation == (gen || this.cleanGeneration);
    },

    getHistory: function() {
      return {done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)};
    },
    setHistory: function(histData) {
      var hist = this.history = makeHistory(this.history.maxGeneration);
      hist.done = histData.done.slice(0);
      hist.undone = histData.undone.slice(0);
    },

    markText: function(from, to, options) {
      return markText(this, clipPos(this, from), clipPos(this, to), options, "range");
    },
    setBookmark: function(pos, options) {
      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                      insertLeft: options && options.insertLeft};
      pos = clipPos(this, pos);
      return markText(this, pos, pos, realOpts, "bookmark");
    },
    findMarksAt: function(pos) {
      pos = clipPos(this, pos);
      var markers = [], spans = getLine(this, pos.line).markedSpans;
      if (spans) for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if ((span.from == null || span.from <= pos.ch) &&
            (span.to == null || span.to >= pos.ch))
          markers.push(span.marker.parent || span.marker);
      }
      return markers;
    },
    getAllMarks: function() {
      var markers = [];
      this.iter(function(line) {
        var sps = line.markedSpans;
        if (sps) for (var i = 0; i < sps.length; ++i)
          if (sps[i].from != null) markers.push(sps[i].marker);
      });
      return markers;
    },

    posFromIndex: function(off) {
      var ch, lineNo = this.first;
      this.iter(function(line) {
        var sz = line.text.length + 1;
        if (sz > off) { ch = off; return true; }
        off -= sz;
        ++lineNo;
      });
      return clipPos(this, Pos(lineNo, ch));
    },
    indexFromPos: function (coords) {
      coords = clipPos(this, coords);
      var index = coords.ch;
      if (coords.line < this.first || coords.ch < 0) return 0;
      this.iter(this.first, coords.line, function (line) {
        index += line.text.length + 1;
      });
      return index;
    },

    copy: function(copyHistory) {
      var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first);
      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
      doc.sel = {from: this.sel.from, to: this.sel.to, head: this.sel.head, anchor: this.sel.anchor,
                 shift: this.sel.shift, extend: false, goalColumn: this.sel.goalColumn};
      if (copyHistory) {
        doc.history.undoDepth = this.history.undoDepth;
        doc.setHistory(this.getHistory());
      }
      return doc;
    },

    linkedDoc: function(options) {
      if (!options) options = {};
      var from = this.first, to = this.first + this.size;
      if (options.from != null && options.from > from) from = options.from;
      if (options.to != null && options.to < to) to = options.to;
      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from);
      if (options.sharedHist) copy.history = this.history;
      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
      return copy;
    },
    unlinkDoc: function(other) {
      if (other instanceof CodeMirror) other = other.doc;
      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
        var link = this.linked[i];
        if (link.doc != other) continue;
        this.linked.splice(i, 1);
        other.unlinkDoc(this);
        break;
      }
      // If the histories were shared, split them again
      if (other.history == this.history) {
        var splitIds = [other.id];
        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
        other.history = makeHistory();
        other.history.done = copyHistoryArray(this.history.done, splitIds);
        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
      }
    },
    iterLinkedDocs: function(f) {linkedDocs(this, f);},

    getMode: function() {return this.mode;},
    getEditor: function() {return this.cm;}
  });

  Doc.prototype.eachLine = Doc.prototype.iter;

  // The Doc methods that should be available on CodeMirror instances
  var dontDelegate = "iter insert remove copy getEditor".split(" ");
  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
    CodeMirror.prototype[prop] = (function(method) {
      return function() {return method.apply(this.doc, arguments);};
    })(Doc.prototype[prop]);

  eventMixin(Doc);

  function linkedDocs(doc, f, sharedHistOnly) {
    function propagate(doc, skip, sharedHist) {
      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
        var rel = doc.linked[i];
        if (rel.doc == skip) continue;
        var shared = sharedHist && rel.sharedHist;
        if (sharedHistOnly && !shared) continue;
        f(rel.doc, shared);
        propagate(rel.doc, doc, shared);
      }
    }
    propagate(doc, null, true);
  }

  function attachDoc(cm, doc) {
    if (doc.cm) throw new Error("This document is already in use.");
    cm.doc = doc;
    doc.cm = cm;
    estimateLineHeights(cm);
    loadMode(cm);
    if (!cm.options.lineWrapping) computeMaxLength(cm);
    cm.options.mode = doc.modeOption;
    regChange(cm);
  }

  // LINE UTILITIES

  function getLine(chunk, n) {
    n -= chunk.first;
    while (!chunk.lines) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break; }
        n -= sz;
      }
    }
    return chunk.lines[n];
  }

  function getBetween(doc, start, end) {
    var out = [], n = start.line;
    doc.iter(start.line, end.line + 1, function(line) {
      var text = line.text;
      if (n == end.line) text = text.slice(0, end.ch);
      if (n == start.line) text = text.slice(start.ch);
      out.push(text);
      ++n;
    });
    return out;
  }
  function getLines(doc, from, to) {
    var out = [];
    doc.iter(from, to, function(line) { out.push(line.text); });
    return out;
  }

  function updateLineHeight(line, height) {
    var diff = height - line.height;
    for (var n = line; n; n = n.parent) n.height += diff;
  }

  function lineNo(line) {
    if (line.parent == null) return null;
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0;; ++i) {
        if (chunk.children[i] == cur) break;
        no += chunk.children[i].chunkSize();
      }
    }
    return no + cur.first;
  }

  function lineAtHeight(chunk, h) {
    var n = chunk.first;
    outer: do {
      for (var i = 0, e = chunk.children.length; i < e; ++i) {
        var child = chunk.children[i], ch = child.height;
        if (h < ch) { chunk = child; continue outer; }
        h -= ch;
        n += child.chunkSize();
      }
      return n;
    } while (!chunk.lines);
    for (var i = 0, e = chunk.lines.length; i < e; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) break;
      h -= lh;
    }
    return n + i;
  }

  function heightAtLine(cm, lineObj) {
    lineObj = visualLine(cm.doc, lineObj);

    var h = 0, chunk = lineObj.parent;
    for (var i = 0; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i];
      if (line == lineObj) break;
      else h += line.height;
    }
    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
      for (var i = 0; i < p.children.length; ++i) {
        var cur = p.children[i];
        if (cur == chunk) break;
        else h += cur.height;
      }
    }
    return h;
  }

  function getOrder(line) {
    var order = line.order;
    if (order == null) order = line.order = bidiOrdering(line.text);
    return order;
  }

  // HISTORY

  function makeHistory(startGen) {
    return {
      // Arrays of history events. Doing something adds an event to
      // done and clears undo. Undoing moves events from done to
      // undone, redoing moves them in the other direction.
      done: [], undone: [], undoDepth: Infinity,
      // Used to track when changes can be merged into a single undo
      // event
      lastTime: 0, lastOp: null, lastOrigin: null,
      // Used by the isClean() method
      generation: startGen || 1, maxGeneration: startGen || 1
    };
  }

  function attachLocalSpans(doc, change, from, to) {
    var existing = change["spans_" + doc.id], n = 0;
    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
      if (line.markedSpans)
        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
      ++n;
    });
  }

  function historyChangeFromChange(doc, change) {
    var from = { line: change.from.line, ch: change.from.ch };
    var histChange = {from: from, to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
    return histChange;
  }

  function addToHistory(doc, change, selAfter, opId) {
    var hist = doc.history;
    hist.undone.length = 0;
    var time = +new Date, cur = lst(hist.done);

    if (cur &&
        (hist.lastOp == opId ||
         hist.lastOrigin == change.origin && change.origin &&
         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastTime > time - doc.cm.options.historyEventDelay) ||
          change.origin.charAt(0) == "*"))) {
      // Merge this change into the last event
      var last = lst(cur.changes);
      if (posEq(change.from, change.to) && posEq(change.from, last.to)) {
        // Optimized case for simple insertion -- don't want to add
        // new changesets for every character typed
        last.to = changeEnd(change);
      } else {
        // Add new sub-event
        cur.changes.push(historyChangeFromChange(doc, change));
      }
      cur.anchorAfter = selAfter.anchor; cur.headAfter = selAfter.head;
    } else {
      // Can not be merged, start a new event.
      cur = {changes: [historyChangeFromChange(doc, change)],
             generation: hist.generation,
             anchorBefore: doc.sel.anchor, headBefore: doc.sel.head,
             anchorAfter: selAfter.anchor, headAfter: selAfter.head};
      hist.done.push(cur);
      hist.generation = ++hist.maxGeneration;
      while (hist.done.length > hist.undoDepth)
        hist.done.shift();
    }
    hist.lastTime = time;
    hist.lastOp = opId;
    hist.lastOrigin = change.origin;
  }

  function removeClearedSpans(spans) {
    if (!spans) return null;
    for (var i = 0, out; i < spans.length; ++i) {
      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
      else if (out) out.push(spans[i]);
    }
    return !out ? spans : out.length ? out : null;
  }

  function getOldSpans(doc, change) {
    var found = change["spans_" + doc.id];
    if (!found) return null;
    for (var i = 0, nw = []; i < change.text.length; ++i)
      nw.push(removeClearedSpans(found[i]));
    return nw;
  }

  // Used both to provide a JSON-safe object in .getHistory, and, when
  // detaching a document, to split the history in two
  function copyHistoryArray(events, newGroup) {
    for (var i = 0, copy = []; i < events.length; ++i) {
      var event = events[i], changes = event.changes, newChanges = [];
      copy.push({changes: newChanges, anchorBefore: event.anchorBefore, headBefore: event.headBefore,
                 anchorAfter: event.anchorAfter, headAfter: event.headAfter});
      for (var j = 0; j < changes.length; ++j) {
        var change = changes[j], m;
        newChanges.push({from: change.from, to: change.to, text: change.text});
        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
          if (indexOf(newGroup, Number(m[1])) > -1) {
            lst(newChanges)[prop] = change[prop];
            delete change[prop];
          }
        }
      }
    }
    return copy;
  }

  // Rebasing/resetting history to deal with externally-sourced changes

  function rebaseHistSel(pos, from, to, diff) {
    if (to < pos.line) {
      pos.line += diff;
    } else if (from < pos.line) {
      pos.line = from;
      pos.ch = 0;
    }
  }

  // Tries to rebase an array of history events given a change in the
  // document. If the change touches the same lines as the event, the
  // event, and everything 'behind' it, is discarded. If the change is
  // before the event, the event's positions are updated. Uses a
  // copy-on-write scheme for the positions, to avoid having to
  // reallocate them all on every rebase, but also avoid problems with
  // shared position objects being unsafely updated.
  function rebaseHistArray(array, from, to, diff) {
    for (var i = 0; i < array.length; ++i) {
      var sub = array[i], ok = true;
      for (var j = 0; j < sub.changes.length; ++j) {
        var cur = sub.changes[j];
        if (!sub.copied) { cur.from = copyPos(cur.from); cur.to = copyPos(cur.to); }
        if (to < cur.from.line) {
          cur.from.line += diff;
          cur.to.line += diff;
        } else if (from <= cur.to.line) {
          ok = false;
          break;
        }
      }
      if (!sub.copied) {
        sub.anchorBefore = copyPos(sub.anchorBefore); sub.headBefore = copyPos(sub.headBefore);
        sub.anchorAfter = copyPos(sub.anchorAfter); sub.readAfter = copyPos(sub.headAfter);
        sub.copied = true;
      }
      if (!ok) {
        array.splice(0, i + 1);
        i = 0;
      } else {
        rebaseHistSel(sub.anchorBefore); rebaseHistSel(sub.headBefore);
        rebaseHistSel(sub.anchorAfter); rebaseHistSel(sub.headAfter);
      }
    }
  }

  function rebaseHist(hist, change) {
    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
    rebaseHistArray(hist.done, from, to, diff);
    rebaseHistArray(hist.undone, from, to, diff);
  }

  // EVENT OPERATORS

  function stopMethod() {e_stop(this);}
  // Ensure an event has a stop method.
  function addStop(event) {
    if (!event.stop) event.stop = stopMethod;
    return event;
  }

  function e_preventDefault(e) {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
  }
  function e_defaultPrevented(e) {
    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}
  CodeMirror.e_stop = e_stop;
  CodeMirror.e_preventDefault = e_preventDefault;
  CodeMirror.e_stopPropagation = e_stopPropagation;

  function e_target(e) {return e.target || e.srcElement;}
  function e_button(e) {
    var b = e.which;
    if (b == null) {
      if (e.button & 1) b = 1;
      else if (e.button & 2) b = 3;
      else if (e.button & 4) b = 2;
    }
    if (mac && e.ctrlKey && b == 1) b = 3;
    return b;
  }

  // EVENT HANDLING

  function on(emitter, type, f) {
    if (emitter.addEventListener)
      emitter.addEventListener(type, f, false);
    else if (emitter.attachEvent)
      emitter.attachEvent("on" + type, f);
    else {
      var map = emitter._handlers || (emitter._handlers = {});
      var arr = map[type] || (map[type] = []);
      arr.push(f);
    }
  }

  function off(emitter, type, f) {
    if (emitter.removeEventListener)
      emitter.removeEventListener(type, f, false);
    else if (emitter.detachEvent)
      emitter.detachEvent("on" + type, f);
    else {
      var arr = emitter._handlers && emitter._handlers[type];
      if (!arr) return;
      for (var i = 0; i < arr.length; ++i)
        if (arr[i] == f) { arr.splice(i, 1); break; }
    }
  }

  function signal(emitter, type /*, values...*/) {
    var arr = emitter._handlers && emitter._handlers[type];
    if (!arr) return;
    var args = Array.prototype.slice.call(arguments, 2);
    for (var i = 0; i < arr.length; ++i) arr[i].apply(null, args);
  }

  var delayedCallbacks, delayedCallbackDepth = 0;
  function signalLater(emitter, type /*, values...*/) {
    var arr = emitter._handlers && emitter._handlers[type];
    if (!arr) return;
    var args = Array.prototype.slice.call(arguments, 2);
    if (!delayedCallbacks) {
      ++delayedCallbackDepth;
      delayedCallbacks = [];
      setTimeout(fireDelayed, 0);
    }
    function bnd(f) {return function(){f.apply(null, args);};};
    for (var i = 0; i < arr.length; ++i)
      delayedCallbacks.push(bnd(arr[i]));
  }

  function signalDOMEvent(cm, e, override) {
    signal(cm, override || e.type, cm, e);
    return e_defaultPrevented(e) || e.codemirrorIgnore;
  }

  function fireDelayed() {
    --delayedCallbackDepth;
    var delayed = delayedCallbacks;
    delayedCallbacks = null;
    for (var i = 0; i < delayed.length; ++i) delayed[i]();
  }

  function hasHandler(emitter, type) {
    var arr = emitter._handlers && emitter._handlers[type];
    return arr && arr.length > 0;
  }

  CodeMirror.on = on; CodeMirror.off = off; CodeMirror.signal = signal;

  function eventMixin(ctor) {
    ctor.prototype.on = function(type, f) {on(this, type, f);};
    ctor.prototype.off = function(type, f) {off(this, type, f);};
  }

  // MISC UTILITIES

  // Number of pixels added to scroller and sizer to hide scrollbar
  var scrollerCutOff = 30;

  // Returned or thrown by various protocols to signal 'I'm not
  // handling this'.
  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

  function Delayed() {this.id = null;}
  Delayed.prototype = {set: function(ms, f) {clearTimeout(this.id); this.id = setTimeout(f, ms);}};

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end, tabSize, startIndex, startValue) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) end = string.length;
    }
    for (var i = startIndex || 0, n = startValue || 0; i < end; ++i) {
      if (string.charAt(i) == "\t") n += tabSize - (n % tabSize);
      else ++n;
    }
    return n;
  }
  CodeMirror.countColumn = countColumn;

  var spaceStrs = [""];
  function spaceStr(n) {
    while (spaceStrs.length <= n)
      spaceStrs.push(lst(spaceStrs) + " ");
    return spaceStrs[n];
  }

  function lst(arr) { return arr[arr.length-1]; }

  function selectInput(node) {
    if (ios) { // Mobile Safari apparently has a bug where select() is broken.
      node.selectionStart = 0;
      node.selectionEnd = node.value.length;
    } else {
      // Suppress mysterious IE10 errors
      try { node.select(); }
      catch(_e) {}
    }
  }

  function indexOf(collection, elt) {
    if (collection.indexOf) return collection.indexOf(elt);
    for (var i = 0, e = collection.length; i < e; ++i)
      if (collection[i] == elt) return i;
    return -1;
  }

  function createObj(base, props) {
    function Obj() {}
    Obj.prototype = base;
    var inst = new Obj();
    if (props) copyObj(props, inst);
    return inst;
  }

  function copyObj(obj, target) {
    if (!target) target = {};
    for (var prop in obj) if (obj.hasOwnProperty(prop)) target[prop] = obj[prop];
    return target;
  }

  function emptyArray(size) {
    for (var a = [], i = 0; i < size; ++i) a.push(undefined);
    return a;
  }

  function bind(f) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){return f.apply(null, args);};
  }

  var nonASCIISingleCaseWordChar = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function isWordChar(ch) {
    return /\w/.test(ch) || ch > "\x80" &&
      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
  }

  function isEmpty(obj) {
    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
    return true;
  }

  var isExtendingChar = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\uA670-\uA672\uA674-\uA67D\uA69F\udc00-\udfff]/;

  // DOM UTILITIES

  function elt(tag, content, className, style) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (style) e.style.cssText = style;
    if (typeof content == "string") setTextContent(e, content);
    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
    return e;
  }

  function removeChildren(e) {
    for (var count = e.childNodes.length; count > 0; --count)
      e.removeChild(e.firstChild);
    return e;
  }

  function removeChildrenAndAdd(parent, e) {
    return removeChildren(parent).appendChild(e);
  }

  function setTextContent(e, str) {
    if (ie_lt9) {
      e.innerHTML = "";
      e.appendChild(document.createTextNode(str));
    } else e.textContent = str;
  }

  function getRect(node) {
    return node.getBoundingClientRect();
  }
  CodeMirror.replaceGetRect = function(f) { getRect = f; };

  // FEATURE DETECTION

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie_lt9) return false;
    var div = elt('div');
    return "draggable" in div || "dragDrop" in div;
  }();

  // For a reason I have yet to figure out, some browsers disallow
  // word wrapping between certain characters *only* if a new inline
  // element is started between them. This makes it hard to reliably
  // measure the position of things, since that requires inserting an
  // extra span. This terribly fragile set of tests matches the
  // character combinations that suffer from this phenomenon on the
  // various browsers.
  function spanAffectsWrapping() { return false; }
  if (gecko) // Only for "$'"
    spanAffectsWrapping = function(str, i) {
      return str.charCodeAt(i - 1) == 36 && str.charCodeAt(i) == 39;
    };
  else if (safari && !/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent))
    spanAffectsWrapping = function(str, i) {
      return /\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(str.slice(i - 1, i + 1));
    };
  else if (webkit && /Chrome\/(?:29|[3-9]\d|\d\d\d)\./.test(navigator.userAgent))
    spanAffectsWrapping = function(str, i) {
      var code = str.charCodeAt(i - 1);
      return code >= 8208 && code <= 8212;
    };
  else if (webkit)
    spanAffectsWrapping = function(str, i) {
      if (i > 1 && str.charCodeAt(i - 1) == 45) {
        if (/\w/.test(str.charAt(i - 2)) && /[^\-?\.]/.test(str.charAt(i))) return true;
        if (i > 2 && /[\d\.,]/.test(str.charAt(i - 2)) && /[\d\.,]/.test(str.charAt(i))) return false;
      }
      return /[~!#%&*)=+}\]\\|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|…[\w~`@#$%\^&*(_=+{[><]/.test(str.slice(i - 1, i + 1));
    };

  var knownScrollbarWidth;
  function scrollbarWidth(measure) {
    if (knownScrollbarWidth != null) return knownScrollbarWidth;
    var test = elt("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
    removeChildrenAndAdd(measure, test);
    if (test.offsetWidth)
      knownScrollbarWidth = test.offsetHeight - test.clientHeight;
    return knownScrollbarWidth || 0;
  }

  var zwspSupported;
  function zeroWidthElement(measure) {
    if (zwspSupported == null) {
      var test = elt("span", "\u200b");
      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
      if (measure.firstChild.offsetHeight != 0)
        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !ie_lt8;
    }
    if (zwspSupported) return elt("span", "\u200b");
    else return elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
    var pos = 0, result = [], l = string.length;
    while (pos <= l) {
      var nl = string.indexOf("\n", pos);
      if (nl == -1) nl = string.length;
      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
      var rt = line.indexOf("\r");
      if (rt != -1) {
        result.push(line.slice(0, rt));
        pos += rt + 1;
      } else {
        result.push(line);
        pos = nl + 1;
      }
    }
    return result;
  } : function(string){return string.split(/\r\n?|\n/);};
  CodeMirror.splitLines = splitLines;

  var hasSelection = window.getSelection ? function(te) {
    try { return te.selectionStart != te.selectionEnd; }
    catch(e) { return false; }
  } : function(te) {
    try {var range = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range || range.parentElement() != te) return false;
    return range.compareEndPoints("StartToEnd", range) != 0;
  };

  var hasCopyEvent = (function() {
    var e = elt("div");
    if ("oncopy" in e) return true;
    e.setAttribute("oncopy", "return;");
    return typeof e.oncopy == 'function';
  })();

  // KEY NAMING

  var keyNames = {3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
                  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
                  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
                  46: "Delete", 59: ";", 91: "Mod", 92: "Mod", 93: "Mod", 109: "-", 107: "=", 127: "Delete",
                  186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
                  221: "]", 222: "'", 63276: "PageUp", 63277: "PageDown", 63275: "End", 63273: "Home",
                  63234: "Left", 63232: "Up", 63235: "Right", 63233: "Down", 63302: "Insert", 63272: "Delete"};
  CodeMirror.keyNames = keyNames;
  (function() {
    // Number keys
    for (var i = 0; i < 10; i++) keyNames[i + 48] = String(i);
    // Alphabetic keys
    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
    // Function keys
    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
  })();

  // BIDI HELPERS

  function iterateBidiSections(order, from, to, f) {
    if (!order) return f(from, to, "ltr");
    var found = false;
    for (var i = 0; i < order.length; ++i) {
      var part = order[i];
      if (part.from < to && part.to > from || from == to && part.to == from) {
        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
        found = true;
      }
    }
    if (!found) f(from, to, "ltr");
  }

  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
  function lineRight(line) {
    var order = getOrder(line);
    if (!order) return line.text.length;
    return bidiRight(lst(order));
  }

  function lineStart(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLine(cm.doc, line);
    if (visual != line) lineN = lineNo(visual);
    var order = getOrder(visual);
    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
    return Pos(lineN, ch);
  }
  function lineEnd(cm, lineN) {
    var merged, line;
    while (merged = collapsedSpanAtEnd(line = getLine(cm.doc, lineN)))
      lineN = merged.find().to.line;
    var order = getOrder(line);
    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
    return Pos(lineN, ch);
  }

  function compareBidiLevel(order, a, b) {
    var linedir = order[0].level;
    if (a == linedir) return true;
    if (b == linedir) return false;
    return a < b;
  }
  var bidiOther;
  function getBidiPartAt(order, pos) {
    for (var i = 0, found; i < order.length; ++i) {
      var cur = order[i];
      if (cur.from < pos && cur.to > pos) { bidiOther = null; return i; }
      if (cur.from == pos || cur.to == pos) {
        if (found == null) {
          found = i;
        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
          bidiOther = found;
          return i;
        } else {
          bidiOther = i;
          return found;
        }
      }
    }
    bidiOther = null;
    return found;
  }

  function moveInLine(line, pos, dir, byUnit) {
    if (!byUnit) return pos + dir;
    do pos += dir;
    while (pos > 0 && isExtendingChar.test(line.text.charAt(pos)));
    return pos;
  }

  // This is somewhat involved. It is needed in order to move
  // 'visually' through bi-directional text -- i.e., pressing left
  // should make the cursor go left, even when in RTL text. The
  // tricky part is the 'jumps', where RTL and LTR text touch each
  // other. This often requires the cursor offset to move more than
  // one unit, in order to visually move one unit.
  function moveVisually(line, start, dir, byUnit) {
    var bidi = getOrder(line);
    if (!bidi) return moveLogically(line, start, dir, byUnit);
    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

    for (;;) {
      if (target > part.from && target < part.to) return target;
      if (target == part.from || target == part.to) {
        if (getBidiPartAt(bidi, target) == pos) return target;
        part = bidi[pos += dir];
        return (dir > 0) == part.level % 2 ? part.to : part.from;
      } else {
        part = bidi[pos += dir];
        if (!part) return null;
        if ((dir > 0) == part.level % 2)
          target = moveInLine(line, part.to, -1, byUnit);
        else
          target = moveInLine(line, part.from, 1, byUnit);
      }
    }
  }

  function moveLogically(line, start, dir, byUnit) {
    var target = start + dir;
    if (byUnit) while (target > 0 && isExtendingChar.test(line.text.charAt(target))) target += dir;
    return target < 0 || target > line.text.length ? null : target;
  }

  // Bidirectional ordering algorithm
  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
  // that this (partially) implements.

  // One-char codes used for character types:
  // L (L):   Left-to-Right
  // R (R):   Right-to-Left
  // r (AL):  Right-to-Left Arabic
  // 1 (EN):  European Number
  // + (ES):  European Number Separator
  // % (ET):  European Number Terminator
  // n (AN):  Arabic Number
  // , (CS):  Common Number Separator
  // m (NSM): Non-Spacing Mark
  // b (BN):  Boundary Neutral
  // s (B):   Paragraph Separator
  // t (S):   Segment Separator
  // w (WS):  Whitespace
  // N (ON):  Other Neutrals

  // Returns null if characters are ordered as they appear
  // (left-to-right), or an array of sections ({from, to, level}
  // objects) in the order in which they occur visually.
  var bidiOrdering = (function() {
    // Character types for codepoints 0 to 0xff
    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL";
    // Character types for codepoints 0x600 to 0x6ff
    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr";
    function charType(code) {
      if (code <= 0xff) return lowTypes.charAt(code);
      else if (0x590 <= code && code <= 0x5f4) return "R";
      else if (0x600 <= code && code <= 0x6ff) return arabicTypes.charAt(code - 0x600);
      else if (0x700 <= code && code <= 0x8ac) return "r";
      else return "L";
    }

    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
    // Browsers seem to always treat the boundaries of block elements as being L.
    var outerType = "L";

    return function(str) {
      if (!bidiRE.test(str)) return false;
      var len = str.length, types = [];
      for (var i = 0, type; i < len; ++i)
        types.push(type = charType(str.charCodeAt(i)));

      // W1. Examine each non-spacing mark (NSM) in the level run, and
      // change the type of the NSM to the type of the previous
      // character. If the NSM is at the start of the level run, it will
      // get the type of sor.
      for (var i = 0, prev = outerType; i < len; ++i) {
        var type = types[i];
        if (type == "m") types[i] = prev;
        else prev = type;
      }

      // W2. Search backwards from each instance of a European number
      // until the first strong type (R, L, AL, or sor) is found. If an
      // AL is found, change the type of the European number to Arabic
      // number.
      // W3. Change all ALs to R.
      for (var i = 0, cur = outerType; i < len; ++i) {
        var type = types[i];
        if (type == "1" && cur == "r") types[i] = "n";
        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
      }

      // W4. A single European separator between two European numbers
      // changes to a European number. A single common separator between
      // two numbers of the same type changes to that type.
      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
        var type = types[i];
        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
        else if (type == "," && prev == types[i+1] &&
                 (prev == "1" || prev == "n")) types[i] = prev;
        prev = type;
      }

      // W5. A sequence of European terminators adjacent to European
      // numbers changes to all European numbers.
      // W6. Otherwise, separators and terminators change to Other
      // Neutral.
      for (var i = 0; i < len; ++i) {
        var type = types[i];
        if (type == ",") types[i] = "N";
        else if (type == "%") {
          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
          var replace = (i && types[i-1] == "!") || (end < len - 1 && types[end] == "1") ? "1" : "N";
          for (var j = i; j < end; ++j) types[j] = replace;
          i = end - 1;
        }
      }

      // W7. Search backwards from each instance of a European number
      // until the first strong type (R, L, or sor) is found. If an L is
      // found, then change the type of the European number to L.
      for (var i = 0, cur = outerType; i < len; ++i) {
        var type = types[i];
        if (cur == "L" && type == "1") types[i] = "L";
        else if (isStrong.test(type)) cur = type;
      }

      // N1. A sequence of neutrals takes the direction of the
      // surrounding strong text if the text on both sides has the same
      // direction. European and Arabic numbers act as if they were R in
      // terms of their influence on neutrals. Start-of-level-run (sor)
      // and end-of-level-run (eor) are used at level run boundaries.
      // N2. Any remaining neutrals take the embedding direction.
      for (var i = 0; i < len; ++i) {
        if (isNeutral.test(types[i])) {
          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
          var before = (i ? types[i-1] : outerType) == "L";
          var after = (end < len - 1 ? types[end] : outerType) == "L";
          var replace = before || after ? "L" : "R";
          for (var j = i; j < end; ++j) types[j] = replace;
          i = end - 1;
        }
      }

      // Here we depart from the documented algorithm, in order to avoid
      // building up an actual levels array. Since there are only three
      // levels (0, 1, 2) in an implementation that doesn't take
      // explicit embedding into account, we can build up the order on
      // the fly, without following the level-based algorithm.
      var order = [], m;
      for (var i = 0; i < len;) {
        if (countsAsLeft.test(types[i])) {
          var start = i;
          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
          order.push({from: start, to: i, level: 0});
        } else {
          var pos = i, at = order.length;
          for (++i; i < len && types[i] != "L"; ++i) {}
          for (var j = pos; j < i;) {
            if (countsAsNum.test(types[j])) {
              if (pos < j) order.splice(at, 0, {from: pos, to: j, level: 1});
              var nstart = j;
              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
              order.splice(at, 0, {from: nstart, to: j, level: 2});
              pos = j;
            } else ++j;
          }
          if (pos < i) order.splice(at, 0, {from: pos, to: i, level: 1});
        }
      }
      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
        order[0].from = m[0].length;
        order.unshift({from: 0, to: m[0].length, level: 0});
      }
      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
        lst(order).to -= m[0].length;
        order.push({from: len - m[0].length, to: len, level: 0});
      }
      if (order[0].level != lst(order).level)
        order.push({from: len, to: len, level: order[0].level});

      return order;
    };
  })();

  // THE END

  CodeMirror.version = "3.19.0";

  return CodeMirror;
})();
;(function() {
  if (!CodeMirror.modeURL) CodeMirror.modeURL = "../mode/%N/%N.js";

  var loading = {};
  function splitCallback(cont, n) {
    var countDown = n;
    return function() { if (--countDown == 0) cont(); };
  }
  function ensureDeps(mode, cont) {
    var deps = CodeMirror.modes[mode].dependencies;
    if (!deps) return cont();
    var missing = [];
    for (var i = 0; i < deps.length; ++i) {
      if (!CodeMirror.modes.hasOwnProperty(deps[i]))
        missing.push(deps[i]);
    }
    if (!missing.length) return cont();
    var split = splitCallback(cont, missing.length);
    for (var i = 0; i < missing.length; ++i)
      CodeMirror.requireMode(missing[i], split);
  }

  CodeMirror.requireMode = function(mode, cont) {
    if (typeof mode != "string") mode = mode.name;
    if (CodeMirror.modes.hasOwnProperty(mode)) return ensureDeps(mode, cont);
    if (loading.hasOwnProperty(mode)) return loading[mode].push(cont);

    var script = document.createElement("script");
    script.src = CodeMirror.modeURL.replace(/%N/g, mode);
    var others = document.getElementsByTagName("script")[0];
    others.parentNode.insertBefore(script, others);
    var list = loading[mode] = [cont];
    var count = 0, poll = setInterval(function() {
      if (++count > 100) return clearInterval(poll);
      if (CodeMirror.modes.hasOwnProperty(mode)) {
        clearInterval(poll);
        loading[mode] = null;
        ensureDeps(mode, function() {
          for (var i = 0; i < list.length; ++i) list[i]();
        });
      }
    }, 200);
  };

  CodeMirror.autoLoadMode = function(instance, mode) {
    if (!CodeMirror.modes.hasOwnProperty(mode))
      CodeMirror.requireMode(mode, function() {
        instance.setOption("mode", instance.getOption("mode"));
      });
  };
}());
;// Utility function that allows modes to be combined. The mode given
// as the base argument takes care of most of the normal mode
// functionality, but a second (typically simple) mode is used, which
// can override the style of text. Both modes get to parse all of the
// text, but when both assign a non-null style to a piece of code, the
// overlay wins, unless the combine argument was true, in which case
// the styles are combined.

// overlayParser is the old, deprecated name
CodeMirror.overlayMode = CodeMirror.overlayParser = function(base, overlay, combine) {
  return {
    startState: function() {
      return {
        base: CodeMirror.startState(base),
        overlay: CodeMirror.startState(overlay),
        basePos: 0, baseCur: null,
        overlayPos: 0, overlayCur: null
      };
    },
    copyState: function(state) {
      return {
        base: CodeMirror.copyState(base, state.base),
        overlay: CodeMirror.copyState(overlay, state.overlay),
        basePos: state.basePos, baseCur: null,
        overlayPos: state.overlayPos, overlayCur: null
      };
    },

    token: function(stream, state) {
      if (stream.start == state.basePos) {
        state.baseCur = base.token(stream, state.base);
        state.basePos = stream.pos;
      }
      if (stream.start == state.overlayPos) {
        stream.pos = stream.start;
        state.overlayCur = overlay.token(stream, state.overlay);
        state.overlayPos = stream.pos;
      }
      stream.pos = Math.min(state.basePos, state.overlayPos);
      if (stream.eol()) state.basePos = state.overlayPos = 0;

      if (state.overlayCur == null) return state.baseCur;
      if (state.baseCur != null && combine) return state.baseCur + " " + state.overlayCur;
      else return state.overlayCur;
    },

    indent: base.indent && function(state, textAfter) {
      return base.indent(state.base, textAfter);
    },
    electricChars: base.electricChars,

    innerMode: function(state) { return {state: state.base, mode: base}; },

    blankLine: function(state) {
      if (base.blankLine) base.blankLine(state.base);
      if (overlay.blankLine) overlay.blankLine(state.overlay);
    }
  };
};
;(function() {
  var DEFAULT_BRACKETS = "()[]{}''\"\"";
  var DEFAULT_EXPLODE_ON_ENTER = "[]{}";
  var SPACE_CHAR_REGEX = /\s/;

  CodeMirror.defineOption("autoCloseBrackets", false, function(cm, val, old) {
    if (old != CodeMirror.Init && old)
      cm.removeKeyMap("autoCloseBrackets");
    if (!val) return;
    var pairs = DEFAULT_BRACKETS, explode = DEFAULT_EXPLODE_ON_ENTER;
    if (typeof val == "string") pairs = val;
    else if (typeof val == "object") {
      if (val.pairs != null) pairs = val.pairs;
      if (val.explode != null) explode = val.explode;
    }
    var map = buildKeymap(pairs);
    if (explode) map.Enter = buildExplodeHandler(explode);
    cm.addKeyMap(map);
  });

  function charsAround(cm, pos) {
    var str = cm.getRange(CodeMirror.Pos(pos.line, pos.ch - 1),
                          CodeMirror.Pos(pos.line, pos.ch + 1));
    return str.length == 2 ? str : null;
  }

  function buildKeymap(pairs) {
    var map = {
      name : "autoCloseBrackets",
      Backspace: function(cm) {
        if (cm.somethingSelected()) return CodeMirror.Pass;
        var cur = cm.getCursor(), around = charsAround(cm, cur);
        if (around && pairs.indexOf(around) % 2 == 0)
          cm.replaceRange("", CodeMirror.Pos(cur.line, cur.ch - 1), CodeMirror.Pos(cur.line, cur.ch + 1));
        else
          return CodeMirror.Pass;
      }
    };
    var closingBrackets = "";
    for (var i = 0; i < pairs.length; i += 2) (function(left, right) {
      if (left != right) closingBrackets += right;
      function surround(cm) {
        var selection = cm.getSelection();
        cm.replaceSelection(left + selection + right);
      }
      function maybeOverwrite(cm) {
        var cur = cm.getCursor(), ahead = cm.getRange(cur, CodeMirror.Pos(cur.line, cur.ch + 1));
        if (ahead != right || cm.somethingSelected()) return CodeMirror.Pass;
        else cm.execCommand("goCharRight");
      }
      map["'" + left + "'"] = function(cm) {
        if (left == "'" && cm.getTokenAt(cm.getCursor()).type == "comment")
          return CodeMirror.Pass;
        if (cm.somethingSelected()) return surround(cm);
        if (left == right && maybeOverwrite(cm) != CodeMirror.Pass) return;
        var cur = cm.getCursor(), ahead = CodeMirror.Pos(cur.line, cur.ch + 1);
        var line = cm.getLine(cur.line), nextChar = line.charAt(cur.ch), curChar = cur.ch > 0 ? line.charAt(cur.ch - 1) : "";
        if (left == right && CodeMirror.isWordChar(curChar))
          return CodeMirror.Pass;
        if (line.length == cur.ch || closingBrackets.indexOf(nextChar) >= 0 || SPACE_CHAR_REGEX.test(nextChar))
          cm.replaceSelection(left + right, {head: ahead, anchor: ahead});
        else
          return CodeMirror.Pass;
      };
      if (left != right) map["'" + right + "'"] = maybeOverwrite;
    })(pairs.charAt(i), pairs.charAt(i + 1));
    return map;
  }

  function buildExplodeHandler(pairs) {
    return function(cm) {
      var cur = cm.getCursor(), around = charsAround(cm, cur);
      if (!around || pairs.indexOf(around) % 2 != 0) return CodeMirror.Pass;
      cm.operation(function() {
        var newPos = CodeMirror.Pos(cur.line + 1, 0);
        cm.replaceSelection("\n\n", {anchor: newPos, head: newPos}, "+input");
        cm.indentLine(cur.line + 1, null, true);
        cm.indentLine(cur.line + 2, null, true);
      });
    };
  }
})();
;CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

  var htmlFound = CodeMirror.modes.hasOwnProperty("xml");
  var htmlMode = CodeMirror.getMode(cmCfg, htmlFound ? {name: "xml", htmlMode: true} : "text/plain");
  var aliases = {
    html: "htmlmixed",
    js: "javascript",
    json: "application/json",
    c: "text/x-csrc",
    "c++": "text/x-c++src",
    java: "text/x-java",
    csharp: "text/x-csharp",
    "c#": "text/x-csharp",
    scala: "text/x-scala"
  };

  var getMode = (function () {
    var i, modes = {}, mimes = {}, mime;

    var list = [];
    for (var m in CodeMirror.modes)
      if (CodeMirror.modes.propertyIsEnumerable(m)) list.push(m);
    for (i = 0; i < list.length; i++) {
      modes[list[i]] = list[i];
    }
    var mimesList = [];
    for (var m in CodeMirror.mimeModes)
      if (CodeMirror.mimeModes.propertyIsEnumerable(m))
        mimesList.push({mime: m, mode: CodeMirror.mimeModes[m]});
    for (i = 0; i < mimesList.length; i++) {
      mime = mimesList[i].mime;
      mimes[mime] = mimesList[i].mime;
    }

    for (var a in aliases) {
      if (aliases[a] in modes || aliases[a] in mimes)
        modes[a] = aliases[a];
    }

    return function (lang) {
      return modes[lang] ? CodeMirror.getMode(cmCfg, modes[lang]) : null;
    };
  }());

  // Should underscores in words open/close em/strong?
  if (modeCfg.underscoresBreakWords === undefined)
    modeCfg.underscoresBreakWords = true;

  // Turn on fenced code blocks? ("```" to start/end)
  if (modeCfg.fencedCodeBlocks === undefined) modeCfg.fencedCodeBlocks = false;

  // Turn on task lists? ("- [ ] " and "- [x] ")
  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

  var codeDepth = 0;

  var header   = 'header'
  ,   code     = 'comment'
  ,   quote1   = 'atom'
  ,   quote2   = 'number'
  ,   list1    = 'variable-2'
  ,   list2    = 'variable-3'
  ,   list3    = 'keyword'
  ,   hr       = 'hr'
  ,   image    = 'tag'
  ,   linkinline = 'link'
  ,   linkemail = 'link'
  ,   linktext = 'link'
  ,   linkhref = 'string'
  ,   em       = 'em'
  ,   strong   = 'strong';

  var hrRE = /^([*\-=_])(?:\s*\1){2,}\s*$/
  ,   ulRE = /^[*\-+]\s+/
  ,   olRE = /^[0-9]+\.\s+/
  ,   taskListRE = /^\[(x| )\](?=\s)/ // Must follow ulRE or olRE
  ,   headerRE = /^(?:\={1,}|-{1,})$/
  ,   textRE = /^[^!\[\]*_\\<>` "'(]+/;

  function switchInline(stream, state, f) {
    state.f = state.inline = f;
    return f(stream, state);
  }

  function switchBlock(stream, state, f) {
    state.f = state.block = f;
    return f(stream, state);
  }


  // Blocks

  function blankLine(state) {
    // Reset linkTitle state
    state.linkTitle = false;
    // Reset EM state
    state.em = false;
    // Reset STRONG state
    state.strong = false;
    // Reset state.quote
    state.quote = 0;
    if (!htmlFound && state.f == htmlBlock) {
      state.f = inlineNormal;
      state.block = blockNormal;
    }
    // Reset state.trailingSpace
    state.trailingSpace = 0;
    state.trailingSpaceNewLine = false;
    // Mark this line as blank
    state.thisLineHasContent = false;
    return null;
  }

  function blockNormal(stream, state) {

    var prevLineIsList = (state.list !== false);
    if (state.list !== false && state.indentationDiff >= 0) { // Continued list
      if (state.indentationDiff < 4) { // Only adjust indentation if *not* a code block
        state.indentation -= state.indentationDiff;
      }
      state.list = null;
    } else if (state.list !== false && state.indentation > 0) {
      state.list = null;
      state.listDepth = Math.floor(state.indentation / 4);
    } else if (state.list !== false) { // No longer a list
      state.list = false;
      state.listDepth = 0;
    }

    if (state.indentationDiff >= 4) {
      state.indentation -= 4;
      stream.skipToEnd();
      return code;
    } else if (stream.eatSpace()) {
      return null;
    } else if (stream.peek() === '#' || (state.prevLineHasContent && stream.match(headerRE)) ) {
      state.header = true;
    } else if (stream.eat('>')) {
      state.indentation++;
      state.quote = 1;
      stream.eatSpace();
      while (stream.eat('>')) {
        stream.eatSpace();
        state.quote++;
      }
    } else if (stream.peek() === '[') {
      return switchInline(stream, state, footnoteLink);
    } else if (stream.match(hrRE, true)) {
      return hr;
    } else if ((!state.prevLineHasContent || prevLineIsList) && (stream.match(ulRE, true) || stream.match(olRE, true))) {
      state.indentation += 4;
      state.list = true;
      state.listDepth++;
      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
        state.taskList = true;
      }
    } else if (modeCfg.fencedCodeBlocks && stream.match(/^```([\w+#]*)/, true)) {
      // try switching mode
      state.localMode = getMode(RegExp.$1);
      if (state.localMode) state.localState = state.localMode.startState();
      switchBlock(stream, state, local);
      return code;
    }

    return switchInline(stream, state, state.inline);
  }

  function htmlBlock(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (htmlFound && style === 'tag' && state.htmlState.type !== 'openTag' && !state.htmlState.context) {
      state.f = inlineNormal;
      state.block = blockNormal;
    }
    if (state.md_inside && stream.current().indexOf(">")!=-1) {
      state.f = inlineNormal;
      state.block = blockNormal;
      state.htmlState.context = undefined;
    }
    return style;
  }

  function local(stream, state) {
    if (stream.sol() && stream.match(/^```/, true)) {
      state.localMode = state.localState = null;
      state.f = inlineNormal;
      state.block = blockNormal;
      return code;
    } else if (state.localMode) {
      return state.localMode.token(stream, state.localState);
    } else {
      stream.skipToEnd();
      return code;
    }
  }

  // Inline
  function getType(state) {
    var styles = [];

    if (state.taskOpen) { return "meta"; }
    if (state.taskClosed) { return "property"; }

    if (state.strong) { styles.push(strong); }
    if (state.em) { styles.push(em); }

    if (state.linkText) { styles.push(linktext); }

    if (state.code) { styles.push(code); }

    if (state.header) { styles.push(header); }
    if (state.quote) { styles.push(state.quote % 2 ? quote1 : quote2); }
    if (state.list !== false) {
      var listMod = (state.listDepth - 1) % 3;
      if (!listMod) {
        styles.push(list1);
      } else if (listMod === 1) {
        styles.push(list2);
      } else {
        styles.push(list3);
      }
    }

    if (state.trailingSpaceNewLine) {
      styles.push("trailing-space-new-line");
    } else if (state.trailingSpace) {
      styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
    }

    return styles.length ? styles.join(' ') : null;
  }

  function handleText(stream, state) {
    if (stream.match(textRE, true)) {
      return getType(state);
    }
    return undefined;
  }

  function inlineNormal(stream, state) {
    var style = state.text(stream, state);
    if (typeof style !== 'undefined')
      return style;

    if (state.list) { // List marker (*, +, -, 1., etc)
      state.list = null;
      return getType(state);
    }

    if (state.taskList) {
      var taskOpen = stream.match(taskListRE, true)[1] !== "x";
      if (taskOpen) state.taskOpen = true;
      else state.taskClosed = true;
      state.taskList = false;
      return getType(state);
    }

    state.taskOpen = false;
    state.taskClosed = false;

    var ch = stream.next();

    if (ch === '\\') {
      stream.next();
      return getType(state);
    }

    // Matches link titles present on next line
    if (state.linkTitle) {
      state.linkTitle = false;
      var matchCh = ch;
      if (ch === '(') {
        matchCh = ')';
      }
      matchCh = (matchCh+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
      if (stream.match(new RegExp(regex), true)) {
        return linkhref;
      }
    }

    // If this block is changed, it may need to be updated in GFM mode
    if (ch === '`') {
      var t = getType(state);
      var before = stream.pos;
      stream.eatWhile('`');
      var difference = 1 + stream.pos - before;
      if (!state.code) {
        codeDepth = difference;
        state.code = true;
        return getType(state);
      } else {
        if (difference === codeDepth) { // Must be exact
          state.code = false;
          return t;
        }
        return getType(state);
      }
    } else if (state.code) {
      return getType(state);
    }

    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
      stream.match(/\[[^\]]*\]/);
      state.inline = state.f = linkHref;
      return image;
    }

    if (ch === '[' && stream.match(/.*\](\(| ?\[)/, false)) {
      state.linkText = true;
      return getType(state);
    }

    if (ch === ']' && state.linkText) {
      var type = getType(state);
      state.linkText = false;
      state.inline = state.f = linkHref;
      return type;
    }

    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
      return switchInline(stream, state, inlineElement(linkinline, '>'));
    }

    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
      return switchInline(stream, state, inlineElement(linkemail, '>'));
    }

    if (ch === '<' && stream.match(/^\w/, false)) {
      if (stream.string.indexOf(">")!=-1) {
        var atts = stream.string.substring(1,stream.string.indexOf(">"));
        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) {
          state.md_inside = true;
        }
      }
      stream.backUp(1);
      return switchBlock(stream, state, htmlBlock);
    }

    if (ch === '<' && stream.match(/^\/\w*?>/)) {
      state.md_inside = false;
      return "tag";
    }

    var ignoreUnderscore = false;
    if (!modeCfg.underscoresBreakWords) {
      if (ch === '_' && stream.peek() !== '_' && stream.match(/(\w)/, false)) {
        var prevPos = stream.pos - 2;
        if (prevPos >= 0) {
          var prevCh = stream.string.charAt(prevPos);
          if (prevCh !== '_' && prevCh.match(/(\w)/, false)) {
            ignoreUnderscore = true;
          }
        }
      }
    }
    var t = getType(state);
    if (ch === '*' || (ch === '_' && !ignoreUnderscore)) {
      if (state.strong === ch && stream.eat(ch)) { // Remove STRONG
        state.strong = false;
        return t;
      } else if (!state.strong && stream.eat(ch)) { // Add STRONG
        state.strong = ch;
        return getType(state);
      } else if (state.em === ch) { // Remove EM
        state.em = false;
        return t;
      } else if (!state.em) { // Add EM
        state.em = ch;
        return getType(state);
      }
    } else if (ch === ' ') {
      if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
        if (stream.peek() === ' ') { // Surrounded by spaces, ignore
          return getType(state);
        } else { // Not surrounded by spaces, back up pointer
          stream.backUp(1);
        }
      }
    }

    if (ch === ' ') {
      if (stream.match(/ +$/, false)) {
        state.trailingSpace++;
      } else if (state.trailingSpace) {
        state.trailingSpaceNewLine = true;
      }
    }

    return getType(state);
  }

  function linkHref(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    var ch = stream.next();
    if (ch === '(' || ch === '[') {
      return switchInline(stream, state, inlineElement(linkhref, ch === '(' ? ')' : ']'));
    }
    return 'error';
  }

  function footnoteLink(stream, state) {
    if (stream.match(/^[^\]]*\]:/, true)) {
      state.f = footnoteUrl;
      return linktext;
    }
    return switchInline(stream, state, inlineNormal);
  }

  function footnoteUrl(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    // Match URL
    stream.match(/^[^\s]+/, true);
    // Check for link title
    if (stream.peek() === undefined) { // End of line, set flag to check next line
      state.linkTitle = true;
    } else { // More content on line, check if link title
      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
    }
    state.f = state.inline = inlineNormal;
    return linkhref;
  }

  var savedInlineRE = [];
  function inlineRE(endChar) {
    if (!savedInlineRE[endChar]) {
      // Escape endChar for RegExp (taken from http://stackoverflow.com/a/494122/526741)
      endChar = (endChar+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      // Match any non-endChar, escaped character, as well as the closing
      // endChar.
      savedInlineRE[endChar] = new RegExp('^(?:[^\\\\]|\\\\.)*?(' + endChar + ')');
    }
    return savedInlineRE[endChar];
  }

  function inlineElement(type, endChar, next) {
    next = next || inlineNormal;
    return function(stream, state) {
      stream.match(inlineRE(endChar));
      state.inline = state.f = next;
      return type;
    };
  }

  return {
    startState: function() {
      return {
        f: blockNormal,

        prevLineHasContent: false,
        thisLineHasContent: false,

        block: blockNormal,
        htmlState: CodeMirror.startState(htmlMode),
        indentation: 0,

        inline: inlineNormal,
        text: handleText,

        linkText: false,
        linkTitle: false,
        em: false,
        strong: false,
        header: false,
        taskList: false,
        list: false,
        listDepth: 0,
        quote: 0,
        trailingSpace: 0,
        trailingSpaceNewLine: false
      };
    },

    copyState: function(s) {
      return {
        f: s.f,

        prevLineHasContent: s.prevLineHasContent,
        thisLineHasContent: s.thisLineHasContent,

        block: s.block,
        htmlState: CodeMirror.copyState(htmlMode, s.htmlState),
        indentation: s.indentation,

        localMode: s.localMode,
        localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

        inline: s.inline,
        text: s.text,
        linkTitle: s.linkTitle,
        em: s.em,
        strong: s.strong,
        header: s.header,
        taskList: s.taskList,
        list: s.list,
        listDepth: s.listDepth,
        quote: s.quote,
        trailingSpace: s.trailingSpace,
        trailingSpaceNewLine: s.trailingSpaceNewLine,
        md_inside: s.md_inside
      };
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (stream.match(/^\s*$/, true)) {
          state.prevLineHasContent = false;
          return blankLine(state);
        } else {
          state.prevLineHasContent = state.thisLineHasContent;
          state.thisLineHasContent = true;
        }

        // Reset state.header
        state.header = false;

        // Reset state.taskList
        state.taskList = false;

        // Reset state.code
        state.code = false;

        // Reset state.trailingSpace
        state.trailingSpace = 0;
        state.trailingSpaceNewLine = false;

        state.f = state.block;
        var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, '    ').length;
        var difference = Math.floor((indentation - state.indentation) / 4) * 4;
        if (difference > 4) difference = 4;
        var adjustedIndentation = state.indentation + difference;
        state.indentationDiff = adjustedIndentation - state.indentation;
        state.indentation = adjustedIndentation;
        if (indentation > 0) return null;
      }
      return state.f(stream, state);
    },

    blankLine: blankLine,

    getType: getType
  };

}, "xml");

CodeMirror.defineMIME("text/x-markdown", "markdown");
;CodeMirror.defineMode("gfm", function(config) {
  var codeDepth = 0;
  function blankLine(state) {
    state.code = false;
    return null;
  }
  var gfmOverlay = {
    startState: function() {
      return {
        code: false,
        codeBlock: false,
        ateSpace: false
      };
    },
    copyState: function(s) {
      return {
        code: s.code,
        codeBlock: s.codeBlock,
        ateSpace: s.ateSpace
      };
    },
    token: function(stream, state) {
      // Hack to prevent formatting override inside code blocks (block and inline)
      if (state.codeBlock) {
        if (stream.match(/^```/)) {
          state.codeBlock = false;
          return null;
        }
        stream.skipToEnd();
        return null;
      }
      if (stream.sol()) {
        state.code = false;
      }
      if (stream.sol() && stream.match(/^```/)) {
        stream.skipToEnd();
        state.codeBlock = true;
        return null;
      }
      // If this block is changed, it may need to be updated in Markdown mode
      if (stream.peek() === '`') {
        stream.next();
        var before = stream.pos;
        stream.eatWhile('`');
        var difference = 1 + stream.pos - before;
        if (!state.code) {
          codeDepth = difference;
          state.code = true;
        } else {
          if (difference === codeDepth) { // Must be exact
            state.code = false;
          }
        }
        return null;
      } else if (state.code) {
        stream.next();
        return null;
      }
      // Check if space. If so, links can be formatted later on
      if (stream.eatSpace()) {
        state.ateSpace = true;
        return null;
      }
      if (stream.sol() || state.ateSpace) {
        state.ateSpace = false;
        if(stream.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/)) {
          // User/Project@SHA
          // User@SHA
          // SHA
          return "link";
        } else if (stream.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) {
          // User/Project#Num
          // User#Num
          // #Num
          return "link";
        }
      }
      if (stream.match(/^((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i) &&
         stream.string.slice(stream.start - 2, stream.start) != "](") {
        // URLs
        // Taken from http://daringfireball.net/2010/07/improved_regex_for_matching_urls
        // And then (issue #1160) simplified to make it not crash the Chrome Regexp engine
        return "link";
      }
      stream.next();
      return null;
    },
    blankLine: blankLine
  };
  CodeMirror.defineMIME("gfmBase", {
    name: "markdown",
    underscoresBreakWords: false,
    taskLists: true,
    fencedCodeBlocks: true
  });
  return CodeMirror.overlayMode(CodeMirror.getMode(config, "gfmBase"), gfmOverlay);
}, "markdown");
;/* mousetrap v1.4.6 craig.is/killing/mice */
(function(J,r,f){function s(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function A(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return h[a.which]?h[a.which]:B[a.which]?B[a.which]:String.fromCharCode(a.which).toLowerCase()}function t(a){a=a||{};var b=!1,d;for(d in n)a[d]?b=!0:n[d]=0;b||(u=!1)}function C(a,b,d,c,e,v){var g,k,f=[],h=d.type;if(!l[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(g=0;g<l[a].length;++g)if(k=
l[a][g],!(!c&&k.seq&&n[k.seq]!=k.level||h!=k.action||("keypress"!=h||d.metaKey||d.ctrlKey)&&b.sort().join(",")!==k.modifiers.sort().join(","))){var m=c&&k.seq==c&&k.level==v;(!c&&k.combo==e||m)&&l[a].splice(g,1);f.push(k)}return f}function K(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function x(a,b,d,c){m.stopCallback(b,b.target||b.srcElement,d,c)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?
b.stopPropagation():b.cancelBubble=!0)}function y(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=A(a);b&&("keyup"==a.type&&z===b?z=!1:m.handleKey(b,K(a),a))}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function L(a,b,d,c){function e(b){return function(){u=b;++n[a];clearTimeout(D);D=setTimeout(t,1E3)}}function v(b){x(d,b,a);"keyup"!==c&&(z=A(b));setTimeout(t,10)}for(var g=n[a]=0;g<b.length;++g){var f=g+1===b.length?v:e(c||E(b[g+1]).action);F(b[g],f,c,a,g)}}function E(a,b){var d,
c,e,f=[];d="+"===a?["+"]:a.split("+");for(e=0;e<d.length;++e)c=d[e],G[c]&&(c=G[c]),b&&"keypress"!=b&&H[c]&&(c=H[c],f.push("shift")),w(c)&&f.push(c);d=c;e=b;if(!e){if(!p){p={};for(var g in h)95<g&&112>g||h.hasOwnProperty(g)&&(p[h[g]]=g)}e=p[d]?"keydown":"keypress"}"keypress"==e&&f.length&&(e="keydown");return{key:c,modifiers:f,action:e}}function F(a,b,d,c,e){q[a+":"+d]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?L(a,f,b,d):(d=E(a,d),l[d.key]=l[d.key]||[],C(d.key,d.modifiers,{type:d.action},
c,a,e),l[d.key][c?"unshift":"push"]({callback:b,modifiers:d.modifiers,action:d.action,seq:c,level:e,combo:a}))}var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},B={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},H={"~":"`","!":"1",
"@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},G={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p,l={},q={},n={},D,z=!1,I=!1,u=!1;for(f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;s(r,"keypress",y);s(r,"keydown",y);s(r,"keyup",y);var m={bind:function(a,b,d){a=a instanceof Array?a:[a];for(var c=0;c<a.length;++c)F(a[c],b,d);return this},
unbind:function(a,b){return m.bind(a,function(){},b)},trigger:function(a,b){if(q[a+":"+b])q[a+":"+b]({},a);return this},reset:function(){l={};q={};return this},stopCallback:function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable},handleKey:function(a,b,d){var c=C(a,b,d),e;b={};var f=0,g=!1;for(e=0;e<c.length;++e)c[e].seq&&(f=Math.max(f,c[e].level));for(e=0;e<c.length;++e)c[e].seq?c[e].level==f&&(g=!0,
b[c[e].seq]=1,x(c[e].callback,d,c[e].combo,c[e].seq)):g||x(c[e].callback,d,c[e].combo);c="keypress"==d.type&&I;d.type!=u||w(a)||c||t(b);I=g&&"keydown"==d.type}};J.Mousetrap=m;"function"===typeof define&&define.amd&&define(m)})(window,document);
;/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,U,s){'use strict';function t(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.16/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function ab(b){if(null==b||Ca(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:w(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(ab(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Qb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Qb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Rb(b){return function(a,c){b(c,a)}}function bb(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Sb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Sb(b,a);return b}function Y(b){return parseInt(b,
10)}function Tb(b,a){return D(new (D(function(){},{prototype:b})),a)}function C(){}function Da(b){return b}function aa(b){return function(){return b}}function E(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function w(b){return"string"===typeof b}function vb(b){return"number"===typeof b}function Na(b){return"[object Date]"===wa.call(b)}function M(b){return"[object Array]"===wa.call(b)}function P(b){return"function"===typeof b}
function cb(b){return"[object RegExp]"===wa.call(b)}function Ca(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function db(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Oa(b,a){var c=db(b,a);0<=c&&b.splice(c,1);return a}function ba(b,a){if(Ca(b)||b&&b.$evalAsync&&b.$watch)throw Pa("cpws");
if(a){if(b===a)throw Pa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push(ba(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ba(b[d]);Sb(a,c)}}else(a=b)&&(M(b)?a=ba(b,[]):Na(b)?a=new Date(b.getTime()):cb(b)?a=RegExp(b.source):X(b)&&(a=ba(b,{})));return a}function Ub(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(Na(b))return Na(a)&&b.getTime()==a.getTime();if(cb(b)&&cb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ca(b)||Ca(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!xa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!P(a[d]))return!1;
return!0}return!1}function Vb(){return U.securityPolicy&&U.securityPolicy.isActive||U.querySelector&&!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"))}function eb(b,a){var c=2<arguments.length?ya.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Ca(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Vc,a?"  ":null)}function Wb(b){return w(b)?JSON.parse(b):b}function Qa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function Xb(b){try{return decodeURIComponent(b)}catch(a){}}function Yb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Xb(c[0]),B(d)&&(b=B(c[1])?Xb(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Zb(b){var a=[];q(b,function(b,d){M(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function wb(b){return za(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(U.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function $b(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===U?"document":ha(b);throw Pa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ac(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(O&&!d.test(O.name))return c();O.name=O.name.replace(d,"");Ea.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function fb(b,a){a=a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function xb(b,a,c){if(!b)throw Pa("areq",a||"?",c||"required");return b}function Ra(b,a,c){c&&M(b)&&(b=b[b.length-1]);xb(P(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Pa("badname",a);}function bc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&P(b)?eb(e,b):b}function yb(b){var a=b[0];b=b[b.length-1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function Yc(b){var a=t("$injector"),c=t("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||t;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};f&&m(f);return n}())}}())}function Zc(b){D(b,{bootstrap:$b,copy:ba,extend:D,equals:xa,element:y,forEach:q,injector:ac,noop:C,bind:eb,toJson:qa,fromJson:Wb,identity:Da,isUndefined:E,isDefined:B,isString:w,isFunction:P,isObject:X,isNumber:vb,isElement:Tc,isArray:M,
version:$c,isDate:Na,lowercase:K,uppercase:Fa,callbacks:{counter:0},$$minErr:t,$$csp:Vb});Sa=Yc(O);try{Sa("ngLocale")}catch(a){Sa("ngLocale",[]).provider("$locale",ad)}Sa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",cc).directive({a:cd,input:dc,textarea:dc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,
ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ec,ngRequired:ec,ngValue:Id}).directive({ngInclude:Jd}).directive(zb).directive(fc);a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:gc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,
$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function Ta(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Ab(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],l=a,k,m,n,p,r,z;if(!d||null!=b)for(;e.length;)for(k=e.shift(),m=0,n=k.length;m<n;m++)for(p=y(k[m]),l?p.triggerHandler("$destroy"):l=!l,r=0,p=(z=p.children()).length;r<p;r++)e.push(Ga(z[r]));return g.apply(this,arguments)}
var g=Ga.fn[b],g=g.$original||g;e.$original=g;Ga.fn[b]=e}function N(b){if(b instanceof N)return b;w(b)&&(b=ca(b));if(!(this instanceof N)){if(w(b)&&"<"!=b.charAt(0))throw Bb("nosel");return new N(b)}if(w(b)){var a=b;b=U;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();c=[];if(Cb.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];
d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Db(this,b);y(U.createDocumentFragment()).append(this)}else Db(this,b)}function Eb(b){return b.cloneNode(!0)}function Ha(b){hc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ha(b[a])}function ic(b,a,c,d){if(B(d))throw Bb("offargs");var e=la(b,"events");la(b,"handle")&&(E(a)?q(e,
function(a,c){Fb(b,c,a);delete e[c]}):q(a.split(" "),function(a){E(c)?(Fb(b,a,e[a]),delete e[a]):Oa(e[a]||[],c)}))}function hc(b,a){var c=b[gb],d=Ua[c];d&&(a?delete Ua[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),ic(b)),delete Ua[c],b[gb]=s))}function la(b,a,c){var d=b[gb],d=Ua[d||-1];if(B(c))d||(b[gb]=d=++me,d=Ua[d]={}),d[a]=c;else return d&&d[a]}function jc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!X(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];
D(d,a)}else return d}function Gb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function hb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ca((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ca(a)+" "," ")))})}function ib(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ca(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",ca(c))}}function Db(b,a){if(a){a=a.nodeName||!B(a.length)||Ca(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function kc(b,a){return jb(b,"$"+(a||"ngController")+"Controller")}function jb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,g=a.length;e<g;e++)if((c=b.data(a[e]))!==s)return c;b=y(d.parentNode||11===d.nodeType&&d.host)}}function lc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}
function mc(b,a){var c=kb[a.toLowerCase()];return c&&nc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||U);if(E(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Ub(a[e||
c.type]||[]);q(f,function(a){a.call(b,c)});8>=S?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=bb()):c=b;return a+":"+c}function Va(b){q(b,this.put,this)}function oc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,
""),c=c.match(pe),q(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Ra(b[c],"fn"),a=b.slice(0,c)):Ra(b,"fn",!0);return a}function ac(b){function a(a){return function(b,c){if(X(b))q(b,Rb(a));else return a(b,c)}}function c(a,b){Aa(a,"service");if(P(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Wa("pget",a);return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(w(a))for(c=
Sa(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],l=n.get(f[0]);l[f[1]].apply(l,f[2])}else P(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Ra(a,"module")}catch(m){throw M(a)&&(a=a[a.length-1]),m.message&&(m.stack&&-1==m.stack.indexOf(m.message))&&(m=m.message+"\n"+m.stack),Wa("modulerr",a,m.stack||m.message||m);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Wa("cdep",l.join(" <- "));return a[d]}try{return l.unshift(d),
a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{l.shift()}}function d(a,b,e){var g=[],h=oc(a),f,l,k;l=0;for(f=h.length;l<f;l++){k=h[l];if("string"!==typeof k)throw Wa("itkn",k);g.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||P(e)?e:c},get:c,annotate:oc,has:function(b){return m.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}
var f={},h="Provider",l=[],k=new Va,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,b){Aa(a,"constant");m[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=m.$injector=g(m,function(){throw Wa("unpr",l.join(" <- "));}),p={},r=p.$injector=g(p,function(a){a=n.get(a+
h);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||C)});return r}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},
function(){d.$evalAsync(g)});return g}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(z--,0===z)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function g(a,b){(function T(){q(F,function(a){a()});v=b(T,a)})()}function f(){x=null;J!=h.url()&&(J=h.url(),q(ma,function(a){a(h.url())}))}var h=this,l=a[0],k=b.location,m=b.history,
n=b.setTimeout,p=b.clearTimeout,r={};h.isMock=!1;var z=0,u=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){z++};h.notifyWhenNoOutstandingRequests=function(a){q(F,function(a){a()});0===z?a():u.push(a)};var F=[],v;h.addPollFn=function(a){E(v)&&g(100,n);F.push(a);return a};var J=k.href,A=a.find("base"),x=null;h.url=function(a,c){k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){if(J!=a)return J=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",
a),A.attr("href",A.attr("href"))):(x=a,c?k.replace(a):k.href=a),h}else return x||k.href.replace(/%27/g,"'")};var ma=[],L=!1;h.onUrlChange=function(a){if(!L){if(d.history)y(b).on("popstate",f);if(d.hashchange)y(b).on("hashchange",f);else h.addPollFn(f);L=!0}ma.push(a);return a};h.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var Q={},da="",H=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)b===s?l.cookie=escape(a)+"=;path="+H+";expires=Thu, 01 Jan 1970 00:00:00 GMT":
w(b)&&(d=(l.cookie=escape(a)+"="+escape(b)+";path="+H).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(l.cookie!==da)for(da=l.cookie,d=da.split("; "),Q={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),Q[a]===s&&(Q[a]=unescape(e.substring(h+1))));return Q}};h.defer=function(a,b){var c;z++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],
p(a),e(C),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw t("$cacheFactory")("iid",b);var f=0,h=D({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,p=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});
e(c)}if(!E(b))return a in l||f++,l[a]=b,f>k&&this.remove(p.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);g(b.n,b.p);delete m[a]}delete l[a];f--},removeAll:function(){l={};f=0;m={};n=p=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return D({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function cc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){Aa(a,"directive");w(a)?(xb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);P(f)?f={compile:aa(f)}:!f.compile&&f.link&&(f.compile=
aa(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(l){d(l)}});return e}])),c[a].push(e)):q(a,Rb(l));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,p,r,z,u,F,v,J,A){function x(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var g=L(a,b,a,c,d,e);ma(a,"ng-scope");return function(b,c,d){xb(b,"scope");var e=c?Ja.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var l=
e[d].nodeType;1!==l&&9!==l||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ma(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,g){function f(a,c,d,e){var g,k,m,r,n,p,z;g=c.length;var I=Array(g);for(n=0;n<g;n++)I[n]=c[n];z=n=0;for(p=l.length;n<p;z++)k=I[z],c=l[n++],g=l[n++],m=y(k),c?(c.scope?(r=a.$new(),m.data("$scope",r)):r=a,(m=c.transclude)||!e&&b?c(g,r,k,d,Q(a,m||b)):c(g,r,k,d,e)):g&&g(a,k.childNodes,s,e)}for(var l=[],k,m,r,n,p=0;p<a.length;p++)k=new Hb,m=da(a[p],[],k,
0===p?d:s,e),(g=m.length?ia(m,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ma(y(a[p]),"ng-scope"),k=g&&g.terminal||!(r=a[p].childNodes)||!r.length?null:L(r,g?g.transclude:b),l.push(g,k),n=n||g||k,g=null;return n?f:null}function Q(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",eb(c,c.$destroy));return d}}function da(a,b,c,d,f){var k=c.$attr,l;switch(a.nodeType){case 1:T(b,na(Ka(a).toLowerCase()),"E",d,f);var m,r,n;l=a.attributes;for(var p=0,z=
l&&l.length;p<z;p++){var u=!1,F=!1;m=l[p];if(!S||8<=S||m.specified){r=m.name;n=na(r);W.test(n)&&(r=fb(n.substr(6),"-"));var J=n.replace(/(Start|End)$/,"");n===J+"Start"&&(u=r,F=r.substr(0,r.length-5)+"end",r=r.substr(0,r.length-6));n=na(r.toLowerCase());k[n]=r;c[n]=m=ca(m.value);mc(a,n)&&(c[n]=!0);N(a,b,m,n);T(b,n,"A",d,f,u,F)}}a=a.className;if(w(a)&&""!==a)for(;l=g.exec(a);)n=na(l[2]),T(b,n,"C",d,f)&&(c[n]=ca(l[3])),a=a.substr(l.index+l[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(l=
e.exec(a.nodeValue))n=na(l[1]),T(b,n,"M",d,f)&&(c[n]=ca(l[2]))}catch(x){}}b.sort(E);return b}function H(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function R(a,b,c){return function(d,e,g,f,l){e=H(e[0],b,c);return a(d,e,g,f,l)}}function ia(a,c,d,e,g,f,l,n,p){function u(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=G.require;if(Q===
G||G.$$isolateScope)a=qc(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=R(b,c,d));b.require=G.require;if(Q===G||G.$$isolateScope)b=qc(b,{isolateScope:!0});n.push(b)}}function F(a,b,c){var d,e="data",g=!1;if(w(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ja("ctreq",a,t);}else M(a)&&(d=[],q(a,function(a){d.push(F(a,b,c))}));return d}function J(a,e,g,f,p){function u(a,b){var c;2>arguments.length&&
(b=a,a=s);D&&(c=lb);return p(a,b,c)}var I,x,v,A,R,H,lb={},da;I=c===g?d:Ub(d,new Hb(y(g),d.$attr));x=I.$$element;if(Q){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=y(g);H=e.$new(!0);ia&&ia===Q.$$originalDirective?f.data("$isolateScope",H):f.data("$isolateScopeNoTemplate",H);ma(f,"ng-isolate-scope");q(Q.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],l,m,n,p;H.$$isolateBindings[c]=d+g;switch(d){case "@":I.$observe(g,function(a){H[c]=a});I.$$observers[g].$$scope=e;I[g]&&(H[c]=b(I[g])(e));
break;case "=":if(f&&!I[g])break;m=r(I[g]);p=m.literal?xa:function(a,b){return a===b};n=m.assign||function(){l=H[c]=m(e);throw ja("nonassign",I[g],Q.name);};l=H[c]=m(e);H.$watch(function(){var a=m(e);p(a,H[c])||(p(a,l)?n(e,a=H[c]):H[c]=a);return l=a},null,m.literal);break;case "&":m=r(I[g]);H[c]=function(a){return m(e,a)};break;default:throw ja("iscp",Q.name,c,a);}})}da=p&&u;L&&q(L,function(a){var b={$scope:a===Q||a.$$isolateScope?H:e,$element:x,$attrs:I,$transclude:da},c;R=a.controller;"@"==R&&(R=
I[a.name]);c=z(R,b);lb[a.name]=c;D||x.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(v=l.length;f<v;f++)try{A=l[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(G){m(G,ha(x))}f=e;Q&&(Q.template||null===Q.templateUrl)&&(f=H);a&&a(f,g.childNodes,s,p);for(f=n.length-1;0<=f;f--)try{A=n[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(B){m(B,ha(x))}}p=p||{};for(var v=-Number.MAX_VALUE,A,L=p.controllerDirectives,Q=p.newIsolateScopeDirective,
ia=p.templateDirective,T=p.nonTlbTranscludeDirective,E=!1,D=p.hasElementTranscludeDirective,Z=d.$$element=y(c),G,t,V,Xa=e,O,N=0,S=a.length;N<S;N++){G=a[N];var ra=G.$$start,W=G.$$end;ra&&(Z=H(c,ra,W));V=s;if(v>G.priority)break;if(V=G.scope)A=A||G,G.templateUrl||(K("new/isolated scope",Q,G,Z),X(V)&&(Q=G));t=G.name;!G.templateUrl&&G.controller&&(V=G.controller,L=L||{},K("'"+t+"' controller",L[t],G,Z),L[t]=G);if(V=G.transclude)E=!0,G.$$tlb||(K("transclusion",T,G,Z),T=G),"element"==V?(D=!0,v=G.priority,
V=H(c,ra,W),Z=d.$$element=y(U.createComment(" "+t+": "+d[t]+" ")),c=Z[0],mb(g,y(ya.call(V,0)),c),Xa=x(V,e,v,f&&f.name,{nonTlbTranscludeDirective:T})):(V=y(Eb(c)).contents(),Z.empty(),Xa=x(V,e));if(G.template)if(K("template",ia,G,Z),ia=G,V=P(G.template)?G.template(Z,d):G.template,V=Y(V),G.replace){f=G;V=Cb.test(V)?y(V):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",t,"");mb(g,Z,c);S={$attr:{}};V=da(c,[],S);var $=a.splice(N+1,a.length-(N+1));Q&&pc(V);a=a.concat(V).concat($);B(d,S);S=a.length}else Z.html(V);
if(G.templateUrl)K("template",ia,G,Z),ia=G,G.replace&&(f=G),J=C(a.splice(N,a.length-N),Z,d,g,Xa,l,n,{controllerDirectives:L,newIsolateScopeDirective:Q,templateDirective:ia,nonTlbTranscludeDirective:T}),S=a.length;else if(G.compile)try{O=G.compile(Z,d,Xa),P(O)?u(null,O,ra,W):O&&u(O.pre,O.post,ra,W)}catch(aa){m(aa,ha(Z))}G.terminal&&(J.terminal=!0,v=Math.max(v,G.priority))}J.scope=A&&!0===A.scope;J.transclude=E&&Xa;p.hasElementTranscludeDirective=D;return J}function pc(a){for(var b=0,c=a.length;b<c;b++)a[b]=
Tb(a[b],{$$isolateScope:!0})}function T(b,e,g,f,k,n,r){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var z=0,u=e.length;z<u;z++)try{p=e[z],(f===s||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(n&&(p=Tb(p,{$$start:n,$$end:r})),b.push(p),k=p)}catch(F){m(F)}}return k}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ma(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function C(a,b,c,d,e,g,f,l){var k=[],m,r,z=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),x=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;b.empty();n.get(v.getTrustedResourceUrl(x),{cache:p}).success(function(n){var p,J;n=Y(n);if(u.replace){n=Cb.test(n)?y(n):[];p=n[0];if(1!=n.length||
1!==p.nodeType)throw ja("tplrt",u.name,x);n={$attr:{}};mb(d,b,p);var v=da(p,[],n);X(u.scope)&&pc(v);a=v.concat(a);B(c,n)}else p=z,b.html(n);a.unshift(F);m=ia(a,p,c,e,b,u,g,f,l);q(d,function(a,c){a==p&&(d[c]=b[0])});for(r=L(b[0].childNodes,e);k.length;){n=k.shift();J=k.shift();var A=k.shift(),R=k.shift(),v=b[0];if(J!==z){var H=J.className;l.hasElementTranscludeDirective&&u.replace||(v=Eb(p));mb(A,y(J),v);ma(y(v),H)}J=m.transclude?Q(n,m.transclude):R;m(r,n,v,d,J)}k=null}).error(function(a,b,c,d){throw ja("tpload",
d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):m(r,b,c,d,e)}}function E(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function K(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ha(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:aa(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ma(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function O(a,b){if("srcdoc"==
b)return v.HTML;var c=Ka(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function N(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ka(a))throw ja("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(f.test(e))throw ja("nodomevents");if(g=b(l[e],!0,O(a,e)))l[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===
e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function mb(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,l;if(a)for(f=0,l=a.length;f<l;f++)if(a[f]==d){a[f++]=c;l=f+e-1;for(var k=a.length;f<k;f++,l++)l<k?a[f]=a[l]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)g=b[d],y(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function qc(a,b){return D(function(){return a.apply(null,arguments)},
a,b)}var Hb=function(a,b){this.$$element=a;this.$attr=b||{}};Hb.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rc(a,b),d=rc(b,a);0===c.length?J.removeClass(this.$$element,d):0===d.length?J.addClass(this.$$element,c):J.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=mc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=
d:(d=this.$attr[a])||(this.$attr[a]=d=fb(a,"-"));e=Ka(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=A(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Z=b.startSymbol(),ra=b.endSymbol(),Y="{{"==Z||"}}"==ra?
Da:function(a){return a.replace(/\{\{/g,Z).replace(/}}/g,ra)},W=/^ngAttr[A-Z]/;return x}]}function na(b){return Ta(b.replace(te,""))}function rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");X(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,
h,l;w(e)&&(f=e.match(a),h=f[1],l=f[3],e=b.hasOwnProperty(h)?b[h]:bc(g.$scope,h,!0)||bc(d,h,!0),Ra(e,h,!0));f=c.instantiate(e,g);if(l){if(!g||"object"!=typeof g.$scope)throw t("$controller")("noscp",h||e.name,l);g.$scope[l]=f}return f}}]}function Pd(){this.$get=["$window",function(b){return y(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function sc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=K(ca(b.substr(0,
e)));d=ca(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function tc(b){var a=X(b)?b:s;return function(c){a||(a=sc(b));return c?a[K(c)]||null:a}}function uc(b,a,c){if(P(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){w(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Wb(d)));return d}],transformRequest:[function(a){return X(a)&&
"[object File]"!==wa.call(a)&&"[object Blob]"!==wa.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ba(d),put:ba(d),patch:ba(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function r(a){function c(a){var b=D({},a,{data:uc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?
b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,d){P(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=D({},a.headers),g,f,c=D({},c.common,c[K(a.method)]);b(c);b(d);a:for(g in c){a=K(g);for(f in d)if(K(f)===a)continue a;d[g]=c[g]}return d}(a);D(d,a);d.headers=g;d.method=Fa(d.method);(a=Ib(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=
a);var f=[function(a){g=a.headers;var b=uc(a.data,tc(g),a.transformRequest);E(a.data)&&q(g,function(a,b){"content-type"===K(b)&&delete g[b]});E(a.withCredentials)&&!E(e.withCredentials)&&(a.withCredentials=e.withCredentials);return z(a,b,g).then(c,c)},s],h=n.when(d);for(q(v,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,
b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function z(b,c,g){function f(a,b,c,e){v&&(200<=a&&300>a?v.put(s,[a,b,sc(c),e]):v.remove(s));l(b,a,c,e);d.$$phase||d.$apply()}function l(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:tc(d),config:b,statusText:e})}function k(){var a=db(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var p=n.defer(),z=p.promise,v,q,s=u(b.url,
b.params);r.pendingRequests.push(b);z.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(v=X(b.cache)?b.cache:X(e.cache)?e.cache:F);if(v)if(q=v.get(s),B(q)){if(q.then)return q.then(k,k),q;M(q)?l(q[1],q[0],ba(q[2]),q[3]):l(q,200,{},"OK")}else v.put(s,z);E(q)&&a(b.method,s,c,f,g,b.timeout,b.withCredentials,b.responseType);return z}function u(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||E(a)||(M(a)||(a=[a]),q(a,function(a){X(a)&&(a=qa(a));c.push(za(b)+"="+za(a))}))});0<c.length&&
(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var F=c("$http"),v=[];q(g,function(a){v.unshift(w(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=w(a)?p.get(a):p.invoke(a);v.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(D(d||
{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ue(b){if(8>=S&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!O.XMLHttpRequest))return new O.ActiveXObject("Microsoft.XMLHTTP");if(O.XMLHttpRequest)return new O.XMLHttpRequest;throw t("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ve(b,ue,b.defer,a.angular.callbacks,c[0])}]}function ve(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=
c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;S&&8>=S?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,l,k,m,n,p,r,z){function u(){v=f;A&&A();x&&x.abort()}function F(a,d,e,g,f){L&&c.cancel(L);A=x=null;0===d&&(d=e?200:"file"==sa(l).protocol?404:0);a(1223===d?204:d,e,g,f||"");b.$$completeOutstandingRequest(C)}var v;b.$$incOutstandingRequestCount();
l=l||b.url();if("jsonp"==K(e)){var J="_"+(d.counter++).toString(36);d[J]=function(a){d[J].data=a};var A=g(l.replace("JSON_CALLBACK","angular.callbacks."+J),function(){d[J].data?F(m,200,d[J].data):F(m,v||-2);d[J]=Ea.noop})}else{var x=a(e);x.open(e,l,!0);q(n,function(a,b){B(a)&&x.setRequestHeader(b,a)});x.onreadystatechange=function(){if(x&&4==x.readyState){var a=null,b=null;v!==f&&(a=x.getAllResponseHeaders(),b="response"in x?x.response:x.responseText);F(m,v||x.status,b,a,x.statusText||"")}};r&&(x.withCredentials=
!0);if(z)try{x.responseType=z}catch(s){if("json"!==z)throw s;}x.send(k||null)}if(0<p)var L=c(u,p);else p&&p.then&&p.then(u)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,m){for(var n,p,r=0,z=[],u=g.length,F=!1,v=[];r<u;)-1!=(n=g.indexOf(b,r))&&-1!=(p=g.indexOf(a,n+f))?(r!=n&&z.push(g.substring(r,n)),z.push(r=c(F=g.substring(n+f,p))),
r.exp=F,r=p+h,F=!0):(r!=u&&z.push(g.substring(r)),r=u);(u=z.length)||(z.push(""),u=1);if(m&&1<z.length)throw vc("noconcat",g);if(!k||F)return v.length=u,r=function(a){try{for(var b=0,c=u,f;b<c;b++)"function"==typeof(f=z[b])&&(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null===f||E(f)?f="":"string"!=typeof f&&(f=qa(f))),v[b]=f;return v.join("")}catch(h){a=vc("interr",g,h.toString()),d(a)}},r.exp=g,r.parts=z,r}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};
return g}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,l){var k=a.setInterval,m=a.clearInterval,n=c.defer(),p=n.promise,r=0,z=B(l)&&!l;h=B(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(r++);0<h&&r>=h&&(n.resolve(r),m(p.$$intervalId),delete e[p.$$intervalId]);z||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],
!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function wc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=wb(b[a]);return b.join("/")}function xc(b,a,c){b=sa(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Y(b.port)||we[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Yb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Jb(b){return b.substr(0,
Ya(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Jb(b);xc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!w(e))throw Kb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Zb(this.$$search),b=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=oa(b,d))!==s)return d=e,(e=oa(a,e))!==s?c+(oa("/",e)||e):b+d;if((e=oa(c,
d))!==s)return c+e;if(c==d+"/")return c}}function Lb(b,a){var c=Jb(b);xc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!w(e))throw Kb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Zb(this.$$search),e=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ya(b)==Ya(a))return a}}function Ac(b,a){this.$$html5=!0;Lb.apply(this,arguments);var c=Jb(b);this.$$rewrite=function(d){var e;if(b==Ya(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c}}function nb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=
function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,l=d.baseHref(),k=d.url();a?(l=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(l||"/"),e=e.history?zc:Ac):(l=Ya(k),e=Lb);h=new e(l,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=y(a.target);"a"!==K(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;
var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=sa(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),O.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||
c.$digest())});var m=0;c.$watch(function(){var a=d.url(),b=h.$$replace;m&&a==h.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return m});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:
a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function fa(b,a){if("constructor"===b)throw Ba("isecfld",a);return b}function Za(b,
a){if(b){if(b.constructor===b)throw Ba("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Ba("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ba("isecdom",a);}return b}function ob(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=fa(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(ta(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}g=fa(a.shift(),d);return b[g]=c}function Cc(b,
a,c,d,e,g,f){fa(b,g);fa(a,g);fa(c,g);fa(d,g);fa(e,g);return f.unwrapPromises?function(f,l){var k=l&&l.hasOwnProperty(b)?l:f,m;if(null==k)return k;(k=k[b])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!d)return k;if(null==
k)return s;(k=k[d])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function xe(b,a){fa(b,a);return function(a,
d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ye(b,a,c){fa(b,c);fa(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Dc(b,a,c){if(Mb.hasOwnProperty(b))return Mb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?Cc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=Cc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=s,b=h;while(f<e);return h};else{var f="var p;\n";
q(d,function(b,d){fa(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=aa(f);g=a.unwrapPromises?function(a,b){return h(a,b,ta)}:h}else g=ye(d[0],d[1],c);else g=xe(d[0],c);"hasOwnProperty"!==
b&&(Mb[b]=g);return g}function Xd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ta=function(b){a.logPromiseWarnings&&!Ec.hasOwnProperty(b)&&(Ec[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};
return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Nb(a);e=(new $a(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return C}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ze(function(a){b.$evalAsync(a)},a)}]}function ze(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var f=[],k,m;return m={resolve:function(a){if(f){var c=f;f=s;k=g(a);c.length&&b(function(){for(var a,
b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){m.resolve(h(a))},notify:function(a){if(f){var c=f;f.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,h){var m=e(),u=function(d){try{m.resolve((P(b)?b:c)(d))}catch(e){m.reject(e),a(e)}},F=function(b){try{m.resolve((P(g)?g:d)(b))}catch(c){m.reject(c),a(c)}},v=function(b){try{m.notify((P(h)?h:c)(b))}catch(d){a(d)}};f?f.push([u,F,v]):k.then(u,F,v);return m.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(h){return b(h,!1)}return f&&P(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(g,
f){var h=e();b(function(){try{h.resolve((P(f)?f:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:f,when:function(h,k,m,n){var p=e(),r,z=function(b){try{return(P(k)?k:c)(b)}catch(d){return a(d),f(d)}},u=function(b){try{return(P(m)?m:d)(b)}catch(c){return a(c),f(c)}},F=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){r||(r=!0,p.resolve(g(a).then(z,u,F)))},function(a){r||(r=!0,p.resolve(u(a)))},function(a){r||p.notify(F(a))})});return p.promise},
all:function(a){var b=e(),c=0,d=M(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,g=e?
function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};g.supported=e;return g}]}function Yd(){var b=10,a=t("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=bb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;
this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function l(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Ra(c,b);return c}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=
this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=bb());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!P(b)){var h=k(b||C,"listener");f.fn=function(a,
b,c){h(c)}}if("string"==typeof a&&e.constant){var l=f.fn;f.fn=function(a,b,c){l.call(this,a,b,c);Oa(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Oa(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,l=0,k=g(a),m=[],n={},p=!0,q=0;return this.$watch(function(){d=k(c);var a,b;if(X(d))if(ab(d))for(e!==m&&(e=m,q=e.length=0,l++),a=d.length,q!==a&&(l++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(l++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,l++);a=
0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(l++,e[b]=d[b]):(q++,e[b]=d[b],l++));if(q>a)for(b in l++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,l++);return l},function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(X(d))if(ab(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f={},d)Fc.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var d,g,f,h,k=this.$$asyncQueue,m=this.$$postDigestQueue,q,x,s=b,L,Q=[],y,H,R;l("$digest");
c=null;do{x=!1;for(L=this;k.length;){try{R=k.shift(),R.scope.$eval(R.expression)}catch(B){p.$$phase=null,e(B)}c=null}a:do{if(h=L.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((g=d.get(L))!==(f=d.last)&&!(d.eq?xa(g,f):"number"==typeof g&&"number"==typeof f&&isNaN(g)&&isNaN(f)))x=!0,c=d,d.last=d.eq?ba(g):g,d.fn(g,f===n?g:f,L),5>s&&(y=4-s,Q[y]||(Q[y]=[]),H=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,H+="; newVal: "+qa(g)+"; oldVal: "+qa(f),Q[y].push(H));else if(d===c){x=!1;break a}}catch(w){p.$$phase=
null,e(w)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((x||k.length)&&!s--)throw p.$$phase=null,a("infdig",b,qa(Q));}while(x||k.length);for(p.$$phase=null;m.length;)try{m.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,eb(null,m,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&
(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=C,this.$on=this.$watch=function(){return C})}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||
p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);
var e=this;return function(){c[db(c,b)]=null;m(e,1,a)}},$emit:function(a,b){var c=[],d,g=this,f=!1,h={name:a,targetScope:g,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=[h].concat(ya.call(arguments,1)),k,m;do{d=g.$$listeners[a]||c;h.currentScope=g;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){e(n)}else d.splice(k,1),k--,m--;if(f)break;g=g.$parent}while(g);return h},$broadcast:function(a,b){for(var c=this,d=this,g={name:a,
targetScope:this,preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},f=[g].concat(ya.call(arguments,1)),h,k;c=d;){g.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return g}};var p=new h;return p}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;
this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!S||8<=S)if(g=sa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Ae(b){if("self"===b)return b;if(w(b)){if(-1<b.indexOf("***"))throw ua("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+
b+"$")}if(cb(b))return RegExp("^"+b.source+"$");throw ua("imatcher");}function Gc(b){var a=[];B(b)&&q(b,function(b){a.push(Ae(b))});return a}function ae(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=
function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[ga.HTML]=d(g);f[ga.CSS]=d(g);f[ga.URL]=d(g);f[ga.JS]=d(g);f[ga.RESOURCE_URL]=d(f[ga.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},
getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var g=sa(d.toString()),m,n,p=!1;m=0;for(n=b.length;m<n;m++)if("self"===b[m]?Ib(g):b[m].exec(g.href)){p=!0;break}if(p)for(m=0,n=a.length;m<n;m++)if("self"===a[m]?Ib(g):a[m].exec(g.href)){p=!1;break}if(p)return d;throw ua("insecurl",d.toString());}if(c===ga.HTML)return e(d);throw ua("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ua("iequirks");var e=ba(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Da);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,
d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(ga,function(a,b){var c=K(b);e[Ta("parse_as_"+c)]=function(b){return g(a,b)};e[Ta("get_trusted_"+c)]=function(b){return f(a,b)};e[Ta("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,l=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,
m=!1,n=!1;if(k){for(var p in k)if(m=l.exec(p)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||m&&n||(m=w(g.body.style.webkitTransition),n=w(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==S)return!1;if(E(c[a])){var b=g.createElement("div");c[a]="on"+
a in b}return c[a]},csp:Vb(),vendorPrefix:h,transitions:m,animations:n,android:d,msie:S,msieDocumentMode:f}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,l){var k=c.defer(),m=k.promise,n=B(l)&&!l;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[m.$$timeoutId]}n||b.$apply()},h);m.$$timeoutId=h;g[h]=k;return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),
delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;S&&(W.setAttribute("href",c),c=W.href);W.setAttribute("href",c);return{href:W.href,protocol:W.protocol?W.protocol.replace(/:$/,""):"",host:W.host,search:W.search?W.search.replace(/^\?/,""):"",hash:W.hash?W.hash.replace(/^#/,""):"",hostname:W.hostname,port:W.port,pathname:"/"===W.pathname.charAt(0)?W.pathname:"/"+W.pathname}}function Ib(b){b=w(b)?sa(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}
function ee(){this.$get=aa(O)}function gc(b){function a(d,e){if(X(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Be);a("json",Ce);a("limitTo",De);a("lowercase",Ee);a("number",Kc);a("orderBy",Lc);a("uppercase",Fe)}function Be(){return function(b,a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;
return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ea.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Fc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,
b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:c&&c[b],a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Ic(b){var a=
b.NUMBER_FORMATS;return function(b,d){E(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||X(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",l=[],k=!1;if(-1!==f.indexOf("e")){var m=f.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));
else{f=(f.split(Nc)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Nc);f=b[0];b=b[1]||"";var m=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(m=f.length-n,k=0;k<m;k++)0===(m-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=m;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}l.push(g?a.negPre:a.posPre);l.push(h);l.push(g?a.negSuf:a.posSuf);return l.join("")}function Ob(b,
a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ob(e,a,d)}}function pb(b,a){return function(c,d){var e=c["get"+b](),g=Fa(a?"SHORT"+b:b);return d[g][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=Y(b[9]+b[10]),f=Y(b[9]+b[11]));
h.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));g=Y(b[4]||0)-g;f=Y(b[5]||0)-f;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;w(c)&&(c=Ge.test(c)?Y(c):a(c));vb(c)&&(c=new Date(c));if(!Na(c))return c;for(;e;)(l=He.exec(e))?(f=f.concat(ya.call(l,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=
Ie[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ce(){return function(b){return qa(b,!0)}}function De(){return function(b,a){if(!M(b)&&!w(b))return b;a=Y(a);if(w(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Qa(b)?function(b,c){return a(c,b)}:a}
function g(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=Uc(c,function(a){var c=!1,d=a||Da;if(w(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var f=d();return e(function(a,b){return g(a[f],b[f])},c)}}return e(function(a,b){return g(d(a),d(b))},c)});for(var f=[],h=0;h<a.length;h++)f.push(a[h]);return f.sort(e(function(a,b){for(var d=
0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function va(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+fb(c,"-"):"";d.removeClass(b,(a?qb:rb)+c);d.addClass(b,(a?rb:qb)+c)}var g=this,f=b.parent().controller("form")||sb,h=0,l=g.$error={},k=[];g.$name=a.name||a.ngForm;g.$dirty=!1;g.$pristine=!0;g.$valid=!0;g.$invalid=!1;f.$addControl(g);b.addClass(La);e(!0);g.$addControl=function(a){Aa(a.$name,"input");k.push(a);a.$name&&
(g[a.$name]=a)};g.$removeControl=function(a){a.$name&&g[a.$name]===a&&delete g[a.$name];q(l,function(b,c){g.$setValidity(c,!0,a)});Oa(k,a)};g.$setValidity=function(a,b,c){var d=l[a];if(b)d&&(Oa(d,c),d.length||(h--,h||(e(b),g.$valid=!0,g.$invalid=!1),l[a]=!1,e(!0,a),f.$setValidity(a,!0,g)));else{h||e(b);if(d){if(-1!=db(d,c))return}else l[a]=d=[],h++,e(!1,a),f.$setValidity(a,!1,g);d.push(c);g.$valid=!1;g.$invalid=!0}};g.$setDirty=function(){d.removeClass(b,La);d.addClass(b,tb);g.$dirty=!0;g.$pristine=
!1;f.$setDirty()};g.$setPristine=function(){d.removeClass(b,tb);d.addClass(b,La);g.$dirty=!1;g.$pristine=!0;q(k,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Je(b,a,c){var d=c.prop("validity");X(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function ub(b,a,c,d,e,g){var f=a.prop("validity");if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});
a.on("compositionend",function(){h=!1;l()})}var l=function(){if(!h){var e=a.val();Qa(c.ngTrim||"T")&&(e=ca(e));if(d.$viewValue!==e||f&&""===e&&!f.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(){k||(k=g.defer(function(){l();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||m()});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?
"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw t("ngPattern")("noregexp",n,e,ha(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=Y(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=p,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var r=
Y(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=r,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Pb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!M(a)){if(w(a))return a.split(" ");if(X(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b}}return a}return{restrict:"AC",link:function(g,f,h){function l(a,b){var c=
f.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});f.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||g.$index%2===a){var k=e(b||[]);if(!m){var r=l(k,1);h.$addClass(r)}else if(!xa(b,m)){var q=e(m),r=d(k,q),k=d(q,k),k=l(k,-1),r=l(r,1);0===r.length?c.removeClass(f,k):0===k.length?c.addClass(f,r):c.setClass(f,r,k)}}m=ba(b)}var m;g.$watch(h[b],k,!0);h.$observe("class",function(a){k(g.$eval(h[b]))});"ngClass"!==b&&g.$watch("$index",
function(c,d){var f=c&1;if(f!==d&1){var k=e(g.$eval(h[b]));f===a?(f=l(k,1),h.$addClass(f)):(f=l(k,-1),h.$removeClass(f))}})}}}]}var K=function(b){return w(b)?b.toLowerCase():b},Fc=Object.prototype.hasOwnProperty,Fa=function(b){return w(b)?b.toUpperCase():b},S,y,Ga,ya=[].slice,Ke=[].push,wa=Object.prototype.toString,Pa=t("ng"),Ea=O.angular||(O.angular={}),Sa,Ka,ka=["0","0","0"];S=Y((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(S)&&(S=Y((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||
[])[1]));C.$inject=[];Da.$inject=[];var ca=function(){return String.prototype.trim?function(b){return w(b)?b.trim():b}:function(b){return w(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ka=9>S?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Fa(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xc=/[A-Z]/g,$c={full:"1.2.16",major:1,minor:2,dot:16,codeName:"badger-enumeration"},Ua=N.cache={},gb=N.expando="ng-"+(new Date).getTime(),
me=1,Pc=O.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Fb=O.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};N._data=function(b){return this.cache[b[this.expando]]||{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Bb=t("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Cb=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea=
{option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=ea.td;var Ja=N.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),N(O).on("load",a))},toString:function(){var b=
[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},kb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){kb[K(b)]=b});var nc={};q("input select option textarea button form details".split(" "),function(b){nc[Fa(b)]=!0});q({data:jc,inheritedData:jb,scope:function(b){return y(b).data("$scope")||jb(b.parentNode||b,["$isolateScope","$scope"])},
isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:kc,injector:function(b){return jb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Gb,css:function(b,a,c){a=Ta(a);if(B(c))b.style[a]=c;else{var d;8>=S&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=S&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=K(a);if(kb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(E(d))return e?b[e]:"";b[e]=d}var a=[];9>S?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(E(a)){if("SELECT"===Ka(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=a},empty:lc},function(b,a){N.prototype[a]=function(a,d){var e,g;if(b!==lc&&(2==b.length&&b!==Gb&&b!==kc?a:d)===s){if(X(a)){for(e=0;e<this.length;e++)if(b===jc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===s?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=
e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:hc,dealoc:Ha,on:function a(c,d,e,g){if(B(g))throw Bb("onargs");var f=la(c,"events"),h=la(c,"handle");f||la(c,"events",f={});h||la(c,"handle",h=ne(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var m=U.body.contains||U.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):
a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else Pc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:ic,one:function(a,c,d){a=y(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new N(c),function(c){d?e.insertBefore(c,d.nextSibling):
e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new N(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new N(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new N(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ib,removeClass:hb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var g=d;E(g)&&(g=!Gb(a,c));(g?ib:hb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Eb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:C,stopPropagation:C}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){N.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)E(f)?(f=a(this[h],c,e,g),B(f)&&(f=y(f))):Db(f,a(this[h],c,e,g));return B(f)?f:this};N.prototype.bind=N.prototype.on;N.prototype.unbind=N.prototype.off});Va.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},
remove:function(a){var c=this[a=Ia(a)];delete this[a];return c}};var pe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Wa=t("$injector"),Le=t("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?
a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,f,h){f?f.after(a):(c&&c[0]||(c=f.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){ib(a,c)});f&&d(f)},removeClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){hb(a,c)});f&&d(f)},setClass:function(a,c,f,h){q(a,function(a){ib(a,c);hb(a,
f)});h&&d(h)},enabled:C}}]}],ja=t("$compile");cc.$inject=["$provide","$$sanitizeUriProvider"];var te=/^(x[\:\-_]|data[\:\-_])/i,vc=t("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,we={http:80,https:443,ftp:21},Kb=t("$location");Ac.prototype=Lb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:nb("$$absUrl"),url:function(a,c){if(E(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:nb("$$protocol"),
host:nb("$$host"),port:nb("$$port"),path:Bc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(w(a))this.$$search=Yb(a);else if(X(a))this.$$search=a;else throw Kb("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",Da),replace:function(){this.$$replace=!0;return this}};var Ba=t("$parse"),Ec={},ta,Ma={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,
c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ne={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ma[this.ch],f=Ma[d],h=Ma[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,
text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===
a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ba("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=
d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;
this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ma.hasOwnProperty(c))d.fn=Ma[c],d.json=Ma[c];else{var l=Dc(c,this.options,this.text);d.fn=D(function(a,c){return l(a,c)},{assign:function(d,e){return ob(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},
readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Ne[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=
f}this.index++}this.throwError("Unterminated quote",c)}};var $a=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};$a.ZERO=D(function(){return 0},{constant:!0});$a.prototype={constructor:$a,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Ba("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ba("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,h){h=[h];for(var l=0;l<d.length;l++)h.push(d[l](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn($a.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return D(function(c,d,h){return e(h||a(c,d))},{assign:function(e,f,h){return ob(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,g){var f=a(e,g),h=d(e,g),l;if(!f)return s;(f=Za(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(l=f,"$$v"in f||(l.$$v=s,l.then(function(a){l.$$v=
a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Za(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],l=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,l)||C;Za(l,e.text);Za(k,e.text);h=k.apply?k.apply(l,h):k(h[0],h[1],h[2],h[3],h[4]);return Za(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},l=0;l<
a.length;l++){var k=a[l];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Mb={},ua=t("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},W=U.createElement("a"),Hc=sa(O.location.href,!0);gc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];var Nc=".",Ie={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:pb("Month"),MMM:pb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",
1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:pb("Day"),EEE:pb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))}},He=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ge=/^\-?\d+$/;Jc.$inject=["$locale"];var Ee=aa(K),Fe=aa(Fa);Lc.$inject=
["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=S&&(c.href||c.name||c.$set("href",""),a.append(U.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var g="[object SVGAnimatedString]"===wa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),zb={};q(kb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);zb[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src",
"srcset","href"],function(a){var c=na("ng-"+a);zb[c]=function(){return{priority:99,link:function(d,e,g){var f=a,h=a;"href"===a&&"[object SVGAnimatedString]"===wa.call(e.prop("href"))&&(h="xlinkHref",g.$attr[h]="xlink:href",f=null);g.$observe(c,function(a){a&&(g.$set(h,a),S&&f&&e.prop(f,g[h]))})}}}});var sb={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C};Oc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Pc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Fb(e[0],"submit",h)},0,!1)})}var l=e.parent().controller("form"),k=g.name||g.ngForm;k&&ob(a,k,f,k);if(l)e.on("$destroy",function(){l.$removeControl(f);k&&ob(a,k,s,k);D(f,sb)})}}}}}]},dd=Qc(),qd=Qc(!0),Oe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Pe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Qe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:ub,number:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Qe.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Je(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),
e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||vb(a),a)})},url:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"url",e.$isEmpty(a)||Oe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"email",e.$isEmpty(a)||Pe.test(a),a)};e.$formatters.push(a);
e.$parsers.push(a)},radio:function(a,c,d,e){E(d.name)&&c.attr("name",bb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;w(g)||(g=!0);w(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};
e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:C,button:C,submit:C,reset:C,file:C},dc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Rc[K(g.type)]||Rc.text)(d,e,g,f,c,a)}}}],rb="ng-valid",qb="ng-invalid",La="ng-pristine",tb="ng-dirty",Re=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,g,f){function h(a,c){c=c?"-"+fb(c,"-"):"";f.removeClass(e,(a?qb:rb)+c);
f.addClass(e,(a?rb:qb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var l=g(d.ngModel),k=l.assign;if(!k)throw t("ngModel")("nonassign",d.ngModel,ha(e));this.$render=C;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var m=e.inheritedData("$formController")||sb,n=0,p=this.$error={};e.addClass(La);h(!0);this.$setValidity=function(a,c){p[a]!==
!c&&(c?(p[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,h(c,a),m.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;f.removeClass(e,tb);f.addClass(e,La)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,f.removeClass(e,La),f.addClass(e,tb),m.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),q(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=l(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=c,r.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Re,link:function(a,c,d,e){var g=e[0],f=e[1]||sb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
ec=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!E(a)){var c=[];a&&q(a.split(g),function(a){a&&
c.push(ca(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Se=/^(true|false|\d+)$/,Id=function(){return{priority:100,compile:function(a,c){return Se.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},id=va(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),kd=["$interpolate",
function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],jd=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],ld=Pb("",!0),nd=Pb("Odd",0),md=Pb("Even",1),od=va({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),
pd=[function(){return{scope:!0,controller:"@",priority:500}}],fc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=na("ng-"+a);fc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d,e){d.on(K(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",
$$tlb:!0,link:function(c,d,e,g,f){var h,l,k;c.$watch(e.ngIf,function(g){Qa(g)?l||(l=c.$new(),f(l,function(c){c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=yb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ea.noop,compile:function(f,
h){var l=h.ngInclude||h.src,k=h.onload||"",m=h.autoscroll;return function(f,h,q,s,u){var F=0,v,y,A,x=function(){y&&(y.remove(),y=null);v&&(v.$destroy(),v=null);A&&(e.leave(A,function(){y=null}),y=A,A=null)};f.$watch(g.parseAsResourceUrl(l),function(g){var l=function(){!B(m)||m&&!f.$eval(m)||d()},q=++F;g?(a.get(g,{cache:c}).success(function(a){if(q===F){var c=f.$new();s.template=a;a=u(c,function(a){x();e.enter(a,null,h,l)});v=c;A=a;v.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===
F&&x()}),f.$emit("$includeContentRequested")):(x(),s.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],ud=va({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=va({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,l=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||
0,m=e.$eval(l)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(f,function(a,c){s.test(c)&&(m[K(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(m,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=t("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,
link:function(e,g,f,h,l){var k=f.ngRepeat,m=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,u,F,v={$id:Ia};if(!m)throw d("iexp",k);f=m[1];h=m[2];(m=m[3])?(n=a(m),p=function(a,c,d){F&&(v[F]=a);v[u]=c;v.$index=d;return n(e,v)}):(r=function(a,c){return Ia(c)},s=function(a){return a});m=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",f);u=m[3]||m[1];F=m[2];var B={};e.$watchCollection(h,function(a){var f,h,m=g[0],n,v={},H,R,w,C,T,t,
E=[];if(ab(a))T=a,n=p||r;else{n=p||s;T=[];for(w in a)a.hasOwnProperty(w)&&"$"!=w.charAt(0)&&T.push(w);T.sort()}H=T.length;h=E.length=T.length;for(f=0;f<h;f++)if(w=a===T?f:T[f],C=a[w],C=n(w,C,f),Aa(C,"`track by` id"),B.hasOwnProperty(C))t=B[C],delete B[C],v[C]=t,E[f]=t;else{if(v.hasOwnProperty(C))throw q(E,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",k,C);E[f]={id:C};v[C]=!1}for(w in B)B.hasOwnProperty(w)&&(t=B[w],f=yb(t.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),t.scope.$destroy());
f=0;for(h=T.length;f<h;f++){w=a===T?f:T[f];C=a[w];t=E[f];E[f-1]&&(m=E[f-1].clone[E[f-1].clone.length-1]);if(t.scope){R=t.scope;n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);t.clone[0]!=n&&c.move(yb(t.clone),null,y(m));m=t.clone[t.clone.length-1]}else R=e.$new();R[u]=C;F&&(R[F]=w);R.$index=f;R.$first=0===f;R.$last=f===H-1;R.$middle=!(R.$first||R.$last);R.$odd=!(R.$even=0===(f&1));t.scope||l(R,function(a){a[a.length++]=U.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(m));m=a;t.scope=R;t.clone=
a;v[t.id]=t})}B=v})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Qa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Qa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=va(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,g){var f,h,l,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p=k.length;if(0<p){if(l){for(n=0;n<p;n++)l[n].remove();l=null}l=[];for(n=0;n<p;n++){var r=h[n];k[n].$destroy();l[n]=r;a.leave(r,function(){l.splice(n,1);0===l.length&&(l=null)})}}h=[];k=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=va({transclude:"element",priority:800,require:"^ngSwitch",
link:function(a,c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Cd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),Ed=va({link:function(a,c,d,e,g){if(!g)throw t("ngTransclude")("orphan",ha(c));g(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Te=t("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=
d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c){Aa(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue==a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=C})}],link:function(e,f,h,l){function k(a,
c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(A.parent()&&A.remove(),c.val(a),""===a&&w.prop("selected",!0)):E(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){A.parent()&&A.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Va(d.$viewValue);q(c.find("option"),function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){xa(e,d.$viewValue)||(e=ba(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=
[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,z;t=g.$modelValue;z=y(e)||[];var E=n?Qb(z):z,F,I,A;I={};s=!1;var D,H;if(r)if(w&&M(t))for(s=new Va([]),A=0;A<t.length;A++)I[m]=t[A],s.put(w(e,I),t[A]);else s=new Va(t);for(A=0;F=E.length,A<F;A++){k=A;if(n){k=E[A];if("$"===k.charAt(0))continue;I[n]=k}I[m]=z[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=B(s.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=t,d=
w(e,d)===w(e,I)):d=t===q(e,I),s=s||d);D=l(e,I);D=B(D)?D:"";k.push({id:w?w(e,I):n?E[A]:A,label:D,selected:d})}r||(u||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(E=c.length;I<E;I++){d=c[I];k=a[d];x.length<=I?(t={element:C.clone().attr("label",d),label:k.label},z=[t],x.push(z),f.append(t.element)):(z=x[I],t=z[0],t.label!=d&&t.element.attr("label",t.label=d));D=null;A=0;for(F=k.length;A<F;A++)s=k[A],(d=z[A+1])?(D=d.element,d.label!==s.label&&
D.text(d.label=s.label),d.id!==s.id&&D.val(d.id=s.id),d.selected!==s.selected&&D.prop("selected",d.selected=s.selected)):(""===s.id&&u?H=u:(H=v.clone()).val(s.id).attr("selected",s.selected).text(s.label),z.push({element:H,label:s.label,id:s.id,selected:s.selected}),D?D.after(H):t.element.append(H),D=H);for(A++;z.length>A;)z.pop().element.remove()}for(;x.length>I;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Te("iexp",t,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=
c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,p,t,v,u;if(r)for(k=[],p=0,v=x.length;p<v;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=
c[u],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(l[1]){var p=l[0];l=l[1];var r=h.multiple,t=h.ngOptions,u=!1,w,v=y(U.createElement("option")),C=y(U.createElement("optgroup")),A=v.clone();h=0;for(var x=f.children(),D=x.length;h<D;h++)if(""===x[h].value){w=u=x.eq(h);break}p.init(l,u,A);r&&(l.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,l):r?m(e,f,l):k(e,f,l,p)}}}}],hd=["$interpolate",
function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],gd=aa({restrict:"E",
terminal:!0});O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ga=O.jQuery)?(y=Ga,D(Ga.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),Ab("remove",!0,!0,!1),Ab("empty",!1,!1,!1),Ab("html",!1,!1,!0)):y=N,Ea.element=y,Zc(Ea),y(U).ready(function(){Wc(U,$b)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map
;/*
 AngularJS v1.2.18
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(u,f,P){'use strict';f.module("ngAnimate",["ng"]).factory("$$animateReflow",["$$rAF","$document",function(f,u){return function(e){return f(function(){e()})}}]).config(["$provide","$animateProvider",function(W,H){function e(f){for(var e=0;e<f.length;e++){var h=f[e];if(h.nodeType==aa)return h}}function C(h){return f.element(e(h))}var n=f.noop,h=f.forEach,Q=H.$$selectors,aa=1,k="$$ngAnimateState",K="ng-animate",g={running:!0};W.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement",
"$$asyncCallback","$rootScope","$document",function(y,u,$,L,F,I,P){function R(a){if(a){var b=[],c={};a=a.substr(1).split(".");($.transitions||$.animations)&&b.push(u.get(Q[""]));for(var d=0;d<a.length;d++){var f=a[d],e=Q[f];e&&!c[f]&&(b.push(u.get(e)),c[f]=!0)}return b}}function M(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),t.push({event:b,fn:c}),l.push({event:b,fn:d}),!0}function e(b,d,f){var q=[];h(b,function(a){a.fn&&
q.push(a)});var m=0;h(q,function(b,e){var h=function(){a:{if(d){(d[e]||n)();if(++m<q.length)break a;d=null}f()}};switch(b.event){case "setClass":d.push(b.fn(a,p,A,h));break;case "addClass":d.push(b.fn(a,p||c,h));break;case "removeClass":d.push(b.fn(a,A||c,h));break;default:d.push(b.fn(a,h))}});d&&0===d.length&&f()}var w=a[0];if(w){var k="setClass"==b,g=k||"addClass"==b||"removeClass"==b,p,A;f.isArray(c)&&(p=c[0],A=c[1],c=p+" "+A);var B=a.attr("class")+" "+c;if(T(B)){var r=n,v=[],l=[],x=n,m=[],t=[],
B=(" "+B).replace(/\s+/g,".");h(R(B),function(a){!d(a,b)&&k&&(d(a,"addClass"),d(a,"removeClass"))});return{node:w,event:b,className:c,isClassBased:g,isSetClassOperation:k,before:function(a){r=a;e(l,v,function(){r=n;a()})},after:function(a){x=a;e(t,m,function(){x=n;a()})},cancel:function(){v&&(h(v,function(a){(a||n)(!0)}),r(!0));m&&(h(m,function(a){(a||n)(!0)}),x(!0))}}}}}function z(a,b,c,d,e,w,g){function n(d){var e="$animate:"+d;x&&(x[e]&&0<x[e].length)&&F(function(){c.triggerHandler(e,{event:a,
className:b})})}function p(){n("before")}function A(){n("after")}function B(){n("close");g&&F(function(){g()})}function r(){r.hasBeenRun||(r.hasBeenRun=!0,w())}function v(){if(!v.hasBeenRun){v.hasBeenRun=!0;var d=c.data(k);d&&(l&&l.isClassBased?D(c,b):(F(function(){var d=c.data(k)||{};z==d.index&&D(c,b,a)}),c.data(k,d)));B()}}var l=M(c,a,b);if(l){b=l.className;var x=f.element._data(l.node),x=x&&x.events;d||(d=e?e.parent():c.parent());var m=c.data(k)||{};e=m.active||{};var t=m.totalActive||0,u=m.last;
if(l.isClassBased&&(m.disabled||u&&!u.isClassBased)||N(c,d))r(),p(),A(),v();else{d=!1;if(0<t){m=[];if(l.isClassBased)"setClass"==u.event?(m.push(u),D(c,b)):e[b]&&(y=e[b],y.event==a?d=!0:(m.push(y),D(c,b)));else if("leave"==a&&e["ng-leave"])d=!0;else{for(var y in e)m.push(e[y]),D(c,y);e={};t=0}0<m.length&&h(m,function(a){a.cancel()})}!l.isClassBased||(l.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)r(),p(),A(),B();else{if("leave"==a)c.one("$destroy",function(a){a=f.element(this);var b=
a.data(k);b&&(b=b.active["ng-leave"])&&(b.cancel(),D(a,"ng-leave"))});c.addClass(K);var z=O++;t++;e[b]=l;c.data(k,{last:l,active:e,index:z,totalActive:t});p();l.before(function(d){var e=c.data(k);d=d||!e||!e.active[b]||l.isClassBased&&e.active[b].event!=a;r();!0===d?v():(A(),l.after(v))})}}}else r(),p(),A(),v()}function U(a){if(a=e(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName(K):a.querySelectorAll("."+K),h(a,function(a){a=f.element(a);(a=a.data(k))&&a.active&&h(a.active,function(a){a.cancel()})})}
function D(a,b){if(e(a)==e(L))g.disabled||(g.running=!1,g.structural=!1);else if(b){var c=a.data(k)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);if(d||!c.totalActive)a.removeClass(K),a.removeData(k)}}function N(a,b){if(g.disabled)return!0;if(e(a)==e(L))return g.disabled||g.running;do{if(0===b.length)break;var c=e(b)==e(L),d=c?g:b.data(k),d=d&&(!!d.disabled||d.running||0<d.totalActive);if(c||d)return d;if(c)break}while(b=b.parent());return!0}var O=0;L.data(k,g);I.$$postDigest(function(){I.$$postDigest(function(){g.running=
!1})});var V=H.classNameFilter(),T=V?function(a){return V.test(a)}:function(){return!0};return{enter:function(a,b,c,d){a=f.element(a);b=b&&f.element(b);c=c&&f.element(c);this.enabled(!1,a);y.enter(a,b,c);I.$$postDigest(function(){a=C(a);z("enter","ng-enter",a,b,c,n,d)})},leave:function(a,b){a=f.element(a);U(a);this.enabled(!1,a);I.$$postDigest(function(){z("leave","ng-leave",C(a),null,null,function(){y.leave(a)},b)})},move:function(a,b,c,d){a=f.element(a);b=b&&f.element(b);c=c&&f.element(c);U(a);
this.enabled(!1,a);y.move(a,b,c);I.$$postDigest(function(){a=C(a);z("move","ng-move",a,b,c,n,d)})},addClass:function(a,b,c){a=f.element(a);a=C(a);z("addClass",b,a,null,null,function(){y.addClass(a,b)},c)},removeClass:function(a,b,c){a=f.element(a);a=C(a);z("removeClass",b,a,null,null,function(){y.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=f.element(a);a=C(a);z("setClass",[b,c],a,null,null,function(){y.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)D(b);else{var c=
b.data(k)||{};c.disabled=!0;b.data(k,c)}break;case 1:g.disabled=!a;break;default:a=!g.disabled}return!!a}}}]);H.register("",["$window","$sniffer","$timeout","$$animateReflow",function(k,g,C,L){function F(a,E){S&&S();X.push(E);S=L(function(){h(X,function(a){a()});X=[];S=null;q={}})}function I(a,E){var b=e(a);a=f.element(b);Y.push(a);b=Date.now()+E;b<=ea||(C.cancel(da),ea=b,da=C(function(){K(Y);Y=[]},E,!1))}function K(a){h(a,function(a){(a=a.data(m))&&(a.closeAnimationFn||n)()})}function R(a,E){var b=
E?q[E]:null;if(!b){var c=0,d=0,e=0,f=0,m,Z,s,g;h(a,function(a){if(a.nodeType==aa){a=k.getComputedStyle(a)||{};s=a[J+B];c=Math.max(M(s),c);g=a[J+r];m=a[J+v];d=Math.max(M(m),d);Z=a[p+v];f=Math.max(M(Z),f);var b=M(a[p+B]);0<b&&(b*=parseInt(a[p+l],10)||1);e=Math.max(b,e)}});b={total:0,transitionPropertyStyle:g,transitionDurationStyle:s,transitionDelayStyle:m,transitionDelay:d,transitionDuration:c,animationDelayStyle:Z,animationDelay:f,animationDuration:e};E&&(q[E]=b)}return b}function M(a){var b=0;a=
f.isString(a)?a.split(/\s*,\s*/):[];h(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function z(a){var b=a.parent(),c=b.data(x);c||(b.data(x,++ca),c=ca);return c+"-"+e(a).getAttribute("class")}function U(a,b,c,d){var f=z(b),h=f+" "+c,k=q[h]?++q[h].total:0,g={};if(0<k){var l=c+"-stagger",g=f+" "+l;(f=!q[g])&&b.addClass(l);g=R(b,g);f&&b.removeClass(l)}d=d||function(a){return a()};b.addClass(c);var l=b.data(m)||{},s=d(function(){return R(b,h)});d=s.transitionDuration;f=s.animationDuration;if(0===
d&&0===f)return b.removeClass(c),!1;b.data(m,{running:l.running||0,itemIndex:k,stagger:g,timings:s,closeAnimationFn:n});a=0<l.running||"setClass"==a;0<d&&D(b,c,a);0<f&&(0<g.animationDelay&&0===g.animationDuration)&&(e(b).style[p]="none 0s");return!0}function D(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(t):e(a).style[J+r]="none"}function N(a,b){var c=J+r,d=e(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(t)}function O(a){var b=p;a=e(a);a.style[b]&&0<a.style[b].length&&
(a.style[b]="")}function V(a,b,c,f){function g(a){b.off(z,l);b.removeClass(p);d(b,c);a=e(b);for(var fa in t)a.style.removeProperty(t[fa])}function l(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(Q));Math.max(a-y,0)>=x&&b>=u&&f()}var k=e(b);a=b.data(m);if(-1!=k.getAttribute("class").indexOf(c)&&a){var p="";h(c.split(" "),function(a,b){p+=(0<b?" ":"")+a+"-active"});var n=a.stagger,s=a.timings,r=a.itemIndex,u=Math.max(s.transitionDuration,
s.animationDuration),v=Math.max(s.transitionDelay,s.animationDelay),x=v*ba,y=Date.now(),z=A+" "+H,q="",t=[];if(0<s.transitionDuration){var B=s.transitionPropertyStyle;-1==B.indexOf("all")&&(q+=w+"transition-property: "+B+";",q+=w+"transition-duration: "+s.transitionDurationStyle+";",t.push(w+"transition-property"),t.push(w+"transition-duration"))}0<r&&(0<n.transitionDelay&&0===n.transitionDuration&&(q+=w+"transition-delay: "+T(s.transitionDelayStyle,n.transitionDelay,r)+"; ",t.push(w+"transition-delay")),
0<n.animationDelay&&0===n.animationDuration&&(q+=w+"animation-delay: "+T(s.animationDelayStyle,n.animationDelay,r)+"; ",t.push(w+"animation-delay")));0<t.length&&(s=k.getAttribute("style")||"",k.setAttribute("style",s+"; "+q));b.on(z,l);b.addClass(p);a.closeAnimationFn=function(){g();f()};k=(r*(Math.max(n.animationDelay,n.transitionDelay)||0)+(v+u)*W)*ba;a.running++;I(b,k);return g}f()}function T(a,b,c){var d="";h(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,10))+"s"});return d}function a(a,
b,c,e){if(U(a,b,c,e))return function(a){a&&d(b,c)}}function b(a,b,c,e){if(b.data(m))return V(a,b,c,e);d(b,c);e()}function c(c,d,e,f){var g=a(c,d,e);if(g){var h=g;F(d,function(){N(d,e);O(d);h=b(c,d,e,f)});return function(a){(h||n)(a)}}f()}function d(a,b){a.removeClass(b);var c=a.data(m);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(m))}function G(a,b){var c="";a=f.isArray(a)?a:a.split(/\s+/);h(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var w="",J,H,p,A;u.ontransitionend===
P&&u.onwebkittransitionend!==P?(w="-webkit-",J="WebkitTransition",H="webkitTransitionEnd transitionend"):(J="transition",H="transitionend");u.onanimationend===P&&u.onwebkitanimationend!==P?(w="-webkit-",p="WebkitAnimation",A="webkitAnimationEnd animationend"):(p="animation",A="animationend");var B="Duration",r="Property",v="Delay",l="IterationCount",x="$$ngAnimateKey",m="$$ngAnimateCSS3Data",t="ng-animate-block-transitions",Q=3,W=1.5,ba=1E3,q={},ca=0,X=[],S,da=null,ea=0,Y=[];return{enter:function(a,
b){return c("enter",a,"ng-enter",b)},leave:function(a,b){return c("leave",a,"ng-leave",b)},move:function(a,b){return c("move",a,"ng-move",b)},beforeSetClass:function(b,c,d,e){var f=G(d,"-remove")+" "+G(c,"-add"),g=a("setClass",b,f,function(a){var e=b.attr("class");b.removeClass(d);b.addClass(c);a=a();b.attr("class",e);return a});if(g)return F(b,function(){N(b,f);O(b);e()}),g;e()},beforeAddClass:function(b,c,d){var e=a("addClass",b,G(c,"-add"),function(a){b.addClass(c);a=a();b.removeClass(c);return a});
if(e)return F(b,function(){N(b,c);O(b);d()}),e;d()},setClass:function(a,c,d,e){d=G(d,"-remove");c=G(c,"-add");return b("setClass",a,d+" "+c,e)},addClass:function(a,c,d){return b("addClass",a,G(c,"-add"),d)},beforeRemoveClass:function(b,c,d){var e=a("removeClass",b,G(c,"-remove"),function(a){var d=b.attr("class");b.removeClass(c);a=a();b.attr("class",d);return a});if(e)return F(b,function(){N(b,c);O(b);d()}),e;d()},removeClass:function(a,c,d){return b("removeClass",a,G(c,"-remove"),d)}}}])}])})(window,
window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map
;/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){m.push(new f(b))})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,x({},w,a),l)};return f}
var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,c){f=g.hasOwnProperty(c)?
g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,"/.");s(g,function(a,
e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map
;/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return I(new(I(function(){},{prototype:a})),b)}function e(a){return H(arguments,function(b){b!==a&&H(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function h(a,b,c,d){var e,h=f(c,d),i={},j=[];for(var k in h)if(h[k].params&&h[k].params.length){e=h[k].params;for(var l in e)g(j,e[l])>=0||(j.push(e[l]),i[e[l]]=a[e[l]])}return I({},i,b)}function i(a,b){var c={};return H(a,function(a){var d=b[a];c[a]=null!=d?String(d):null}),c}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return H(a,function(a){c[a]=b[a]}),c}function l(a,b){var d=1,f=2,g={},h=[],i=g,j=I(a.when(g),{$$promises:g,$$values:g});this.study=function(g){function k(a,c){if(o[c]!==f){if(n.push(c),o[c]===d)throw n.splice(0,n.indexOf(c)),new Error("Cyclic dependency: "+n.join(" -> "));if(o[c]=d,E(a))m.push(c,[function(){return b.get(a)}],h);else{var e=b.annotate(a);H(e,function(a){a!==c&&g.hasOwnProperty(a)&&k(g[a],a)}),m.push(c,a,e)}n.pop(),o[c]=f}}function l(a){return F(a)&&a.then&&a.$$promises}if(!F(g))throw new Error("'invocables' must be an object");var m=[],n=[],o={};return H(g,k),g=n=o=null,function(d,f,g){function h(){--s||(t||e(r,f.$$values),p.$$values=r,p.$$promises=!0,o.resolve(r))}function k(a){p.$$failure=a,o.reject(a)}function n(c,e,f){function i(a){l.reject(a),k(a)}function j(){if(!C(p.$$failure))try{l.resolve(b.invoke(e,g,r)),l.promise.then(function(a){r[c]=a,h()},i)}catch(a){i(a)}}var l=a.defer(),m=0;H(f,function(a){q.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,q[a].then(function(b){r[a]=b,--m||j()},i))}),m||j(),q[c]=l.promise}if(l(d)&&g===c&&(g=f,f=d,d=null),d){if(!F(d))throw new Error("'locals' must be an object")}else d=i;if(f){if(!l(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=j;var o=a.defer(),p=o.promise,q=p.$$promises={},r=I({},d),s=1+m.length/3,t=!1;if(C(f.$$failure))return k(f.$$failure),p;f.$$values?(t=e(r,f.$$values),h()):(I(q,f.$$promises),f.then(h,k));for(var u=0,v=m.length;v>u;u+=3)d.hasOwnProperty(m[u])?h():n(m[u],m[u+1],m[u+2]);return p}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function m(a,b,c){this.fromConfig=function(a,b,c){return C(a.template)?this.fromString(a.template,b):C(a.templateUrl)?this.fromUrl(a.templateUrl,b):C(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return D(a)?a(b):a},this.fromUrl=function(c,d){return D(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function n(a){function b(b){if(!/^\w+(-+\w+)*$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(f[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");f[b]=!0,j.push(b)}function c(a){return a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var d,e=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f={},g="^",h=0,i=this.segments=[],j=this.params=[];this.source=a;for(var k,l,m;(d=e.exec(a))&&(k=d[2]||d[3],l=d[4]||("*"==d[1]?".*":"[^/]*"),m=a.substring(h,d.index),!(m.indexOf("?")>=0));)g+=c(m)+"("+l+")",b(k),i.push(m),h=e.lastIndex;m=a.substring(h);var n=m.indexOf("?");if(n>=0){var o=this.sourceSearch=m.substring(n);m=m.substring(0,n),this.sourcePath=a.substring(0,h+n),H(o.substring(1).split(/[&?]/),b)}else this.sourcePath=a,this.sourceSearch="";g+=c(m)+"$",i.push(m),this.regexp=new RegExp(g),this.prefix=i[0]}function o(){this.compile=function(a){return new n(a)},this.isMatcher=function(a){return F(a)&&D(a.exec)&&D(a.format)&&D(a.concat)},this.$get=function(){return this}}function p(a){function b(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function c(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function d(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return C(d)?d:!0}var e=[],f=null;this.rule=function(a){if(!D(a))throw new Error("'rule' must be a function");return e.push(a),this},this.otherwise=function(a){if(E(a)){var b=a;a=function(){return b}}else if(!D(a))throw new Error("'rule' must be a function");return f=a,this},this.when=function(e,f){var g,h=E(f);if(E(e)&&(e=a.compile(e)),!h&&!D(f)&&!G(f))throw new Error("invalid 'handler' in when()");var i={matcher:function(b,c){return h&&(g=a.compile(c),c=["$match",function(a){return g.format(a)}]),I(function(a,e){return d(a,c,b.exec(e.path(),e.search()))},{prefix:E(b.prefix)?b.prefix:""})},regex:function(a,e){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(g=e,e=["$match",function(a){return c(g,a)}]),I(function(b,c){return d(b,e,a.exec(c.path()))},{prefix:b(a)})}},j={matcher:a.isMatcher(e),regex:e instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](e,f));throw new Error("invalid 'what' in when()")},this.$get=["$location","$rootScope","$injector",function(a,b,c){function d(b){function d(b){var d=b(c,a);return d?(E(d)&&a.replace().url(d),!0):!1}if(!b||!b.defaultPrevented){var g,h=e.length;for(g=0;h>g;g++)if(d(e[g]))return;f&&d(f)}}return b.$on("$locationChangeSuccess",d),{sync:function(){d()}}}]}function q(a,e,f){function g(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){var d=E(a),e=d?a:a.name,f=g(e);if(f){if(!b)throw new Error("No reference point given for path '"+e+"'");for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=w[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function m(a,b){x[a]||(x[a]=[]),x[a].push(b)}function n(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!E(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(w.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):E(b.parent)?b.parent:"";if(e&&!w[e])return m(e,b.self);for(var f in z)D(z[f])&&(b[f]=z[f](b,z.$delegates[f]));if(w[c]=b,!b[y]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){v.$current.navigable==b&&j(a,c)||v.transitionTo(b,a,{location:!1})}]),x[c])for(var g=0;g<x[c].length;g++)n(x[c][g]);return b}function o(a){return a.indexOf("*")>-1}function p(a){var b=a.split("."),c=v.$current.name.split(".");if("**"===b[0]&&(c=c.slice(c.indexOf(b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(c.indexOf(b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function q(a,b){return E(a)&&!C(b)?z[a]:D(b)&&E(a)?(z[a]&&!z.$delegates[a]&&(z.$delegates[a]=z[a]),z[a]=b,this):this}function r(a,b){return F(a)?b=a:b.name=a,n(b),this}function s(a,e,g,m,n,q,r,s,x){function z(){r.url()!==M&&(r.url(M),r.replace())}function A(a,c,d,f,h){var i=d?c:k(a.params,c),j={$stateParams:i};h.resolve=n.resolve(a.resolve,j,h.resolve,a);var l=[h.resolve.then(function(a){h.globals=a})];return f&&l.push(f),H(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return g.load(d,{view:c,locals:j,params:i,notify:!1})||""}],l.push(n.resolve(e,j,h.resolve,a).then(function(f){if(D(c.controllerProvider)||G(c.controllerProvider)){var g=b.extend({},e,j);f.$$controller=m.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,h[d]=f}))}),e.all(l).then(function(){return h})}var B=e.reject(new Error("transition superseded")),F=e.reject(new Error("transition prevented")),K=e.reject(new Error("transition aborted")),L=e.reject(new Error("transition failed")),M=r.url(),N=x.baseHref();return u.locals={resolve:null,globals:{$stateParams:{}}},v={params:{},current:u.self,$current:u,transition:null},v.reload=function(){v.transitionTo(v.current,q,{reload:!0,inherit:!1,notify:!1})},v.go=function(a,b,c){return this.transitionTo(a,b,I({inherit:!0,relative:v.$current},c))},v.transitionTo=function(b,c,f){c=c||{},f=I({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,k=v.$current,n=v.params,o=k.path,p=l(b,f.relative);if(!C(p)){var s={to:b,toParams:c,options:f};if(g=a.$broadcast("$stateNotFound",s,k.self,n),g.defaultPrevented)return z(),K;if(g.retry){if(f.$retry)return z(),L;var w=v.transition=e.when(g.retry);return w.then(function(){return w!==v.transition?B:(s.options.$retry=!0,v.transitionTo(s.to,s.toParams,s.options))},function(){return K}),z(),w}if(b=s.to,c=s.toParams,f=s.options,p=l(b,f.relative),!C(p)){if(f.relative)throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'");throw new Error("No such state '"+b+"'")}}if(p[y])throw new Error("Cannot transition to abstract state '"+b+"'");f.inherit&&(c=h(q,c||{},v.$current,p)),b=p;var x,D,E=b.path,G=u.locals,H=[];for(x=0,D=E[x];D&&D===o[x]&&j(c,n,D.ownParams)&&!f.reload;x++,D=E[x])G=H[x]=D.locals;if(t(b,k,G,f))return b.self.reloadOnSearch!==!1&&z(),v.transition=null,e.when(v.current);if(c=i(b.params,c||{}),f.notify&&(g=a.$broadcast("$stateChangeStart",b.self,c,k.self,n),g.defaultPrevented))return z(),F;for(var N=e.when(G),O=x;O<E.length;O++,D=E[O])G=H[O]=d(G),N=A(D,c,D===b,N,G);var P=v.transition=N.then(function(){var d,e,g;if(v.transition!==P)return B;for(d=o.length-1;d>=x;d--)g=o[d],g.self.onExit&&m.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=x;d<E.length;d++)e=E[d],e.locals=H[d],e.self.onEnter&&m.invoke(e.self.onEnter,e.self,e.locals.globals);if(v.transition!==P)return B;v.$current=b,v.current=b.self,v.params=c,J(v.params,q),v.transition=null;var h=b.navigable;return f.location&&h&&(r.url(h.url.format(h.locals.globals.$stateParams)),"replace"===f.location&&r.replace()),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,k.self,n),M=r.url(),v.current},function(d){return v.transition!==P?B:(v.transition=null,a.$broadcast("$stateChangeError",b.self,c,k.self,n,d),z(),e.reject(d))});return P},v.is=function(a,d){var e=l(a);return C(e)?v.$current!==e?!1:C(d)&&null!==d?b.equals(q,d):!0:c},v.includes=function(a,d){if(E(a)&&o(a)){if(!p(a))return!1;a=v.$current.name}var e=l(a);if(!C(e))return c;if(!C(v.$current.includes[e.name]))return!1;var f=!0;return b.forEach(d,function(a,b){C(q[b])&&q[b]===a||(f=!1)}),f},v.href=function(a,b,c){c=I({lossy:!0,inherit:!1,absolute:!1,relative:v.$current},c||{});var d=l(a,c.relative);if(!C(d))return null;b=h(q,b||{},v.$current,d);var e=d&&c.lossy?d.navigable:d,g=e&&e.url?e.url.format(i(d.params,b||{})):null;return!f.html5Mode()&&g&&(g="#"+f.hashPrefix()+g),"/"!==N&&(f.html5Mode()?g=N.slice(0,-1)+g:c.absolute&&(g=N.slice(1)+g)),c.absolute&&g&&(g=r.protocol()+"://"+r.host()+(80==r.port()||443==r.port()?"":":"+r.port())+(!f.html5Mode()&&g?"/":"")+g),g},v.get=function(a,b){if(!C(a)){var c=[];return H(w,function(a){c.push(a.self)}),c}var d=l(a,b);return d&&d.self?d.self:null},v}function t(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var u,v,w={},x={},y="abstract",z={parent:function(a){if(C(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):u},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=I({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url;if(E(b))return"^"==b.charAt(0)?e.compile(b.substring(1)):(a.parent.navigable||u).url.concat(b);if(e.isMatcher(b)||null==b)return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},params:function(a){if(!a.params)return a.url?a.url.parameters():a.parent.params;if(!G(a.params))throw new Error("Invalid params in state '"+a+"'");if(a.url)throw new Error("Both params and url specicified in state '"+a+"'");return a.params},views:function(a){var b={};return H(C(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},ownParams:function(a){if(!a.parent)return a.params;var b={};H(a.params,function(a){b[a]=!0}),H(a.parent.params,function(c){if(!b[c])throw new Error("Missing required parameter '"+c+"' in state '"+a.name+"'");b[c]=!1});var c=[];return H(b,function(a,b){a&&c.push(b)}),c},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?I({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};u=n({name:"",url:"^",views:null,"abstract":!0}),u.navigable=null,this.decorator=q,this.state=r,this.$get=s,s.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$location","$urlRouter","$browser"]}function r(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=I(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function s(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function t(a,c,d){function e(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function f(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(i)return{enter:function(a,b,c){i.enter(a,null,b,c)},leave:function(a,b){i.leave(a,b)}};if(h){var d=h&&h(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var g=e(),h=g("$animator"),i=g("$animate"),j={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,e,g){return function(c,e,h){function i(){k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),l&&(q.leave(l,function(){k=null}),k=l,l=null)}function j(f){var h=c.$new(),j=l&&l.data("$uiViewName"),k=j&&a.$current&&a.$current.locals[j];if(f||k!==n){var r=g(h,function(a){q.enter(a,e,function(){(b.isDefined(p)&&!p||c.$eval(p))&&d(a)}),i()});n=a.$current.locals[r.data("$uiViewName")],l=r,m=h,m.$emit("$viewContentLoaded"),m.$eval(o)}}var k,l,m,n,o=h.onload||"",p=h.autoscroll,q=f(h,c);c.$on("$stateChangeSuccess",function(){j(!1)}),c.$on("$viewContentLoading",function(){j(!1)}),j(!0)}}};return j}function u(a,b,c){return{restrict:"ECA",priority:-400,compile:function(d){var e=d.html();return function(d,f,g){var h=g.uiView||g.name||"",i=f.inheritedData("$uiView");h.indexOf("@")<0&&(h=h+"@"+(i?i.state.name:"")),f.data("$uiViewName",h);var j=c.$current,k=j&&j.locals[h];if(k){f.data("$uiView",{name:h,state:k.$$state}),f.html(k.$template?k.$template:e);var l=a(f.contents());if(k.$$controller){k.$scope=d;var m=b(k.$$controller,k);k.$$controllerAs&&(d[k.$$controllerAs]=m),f.data("$ngControllerController",m),f.children().data("$ngControllerController",m)}l(d)}}}}}function v(a){var b=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!b||4!==b.length)throw new Error("Invalid state ref '"+a+"'");return{state:b[1],paramExpr:b[3]||null}}function w(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function x(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:"?^uiSrefActive",link:function(e,f,g,h){var i=v(g.uiSref),j=null,k=w(f)||a.$current,l="FORM"===f[0].nodeName,m=l?"action":"href",n=!0,o={relative:k},p=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in p&&(o[a]=p[a])});var q=function(b){if(b&&(j=b),n){var c=a.href(i.state,j,o);return h&&h.$$setStateInfo(i.state,j),c?void(f[0][m]=c):(n=!1,!1)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&q(a)},!0),j=e.$eval(i.paramExpr)),q(),l||f.bind("click",function(b){var d=b.which||b.button;d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target")||(c(function(){a.go(i.state,j,o)}),b.preventDefault())})}}}function y(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,e,f){function g(){a.$current.self===i&&h()?e.addClass(l):e.removeClass(l)}function h(){return!k||j(k,b)}var i,k,l;l=c(f.uiSrefActive||"",!1)(d),this.$$setStateInfo=function(b,c){i=a.get(b,w(e)),k=c,g()},d.$on("$stateChangeSuccess",g)}]}}function z(a){return function(b){return a.is(b)}}function A(a){return function(b){return a.includes(b)}}function B(a,b){function e(a){this.locals=a.locals.globals,this.params=this.locals.$stateParams}function f(){this.locals=null,this.params=null}function g(c,g){if(null!=g.redirectTo){var h,j=g.redirectTo;if(E(j))h=j;else{if(!D(j))throw new Error("Invalid 'redirectTo' in when()");h=function(a,b){return j(a,b.path(),b.search())}}b.when(c,h)}else a.state(d(g,{parent:null,name:"route:"+encodeURIComponent(c),url:c,onEnter:e,onExit:f}));return i.push(g),this}function h(a,b,d){function e(a){return""!==a.name?a:c}var f={routes:i,params:d,current:c};return b.$on("$stateChangeStart",function(a,c,d,f){b.$broadcast("$routeChangeStart",e(c),e(f))}),b.$on("$stateChangeSuccess",function(a,c,d,g){f.current=e(c),b.$broadcast("$routeChangeSuccess",e(c),e(g)),J(d,f.params)}),b.$on("$stateChangeError",function(a,c,d,f,g,h){b.$broadcast("$routeChangeError",e(c),e(f),h)}),f}var i=[];e.$inject=["$$state"],this.when=g,this.$get=h,h.$inject=["$state","$rootScope","$routeParams"]}var C=b.isDefined,D=b.isFunction,E=b.isString,F=b.isObject,G=b.isArray,H=b.forEach,I=b.extend,J=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),l.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",l),m.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",m),n.prototype.concat=function(a){return new n(this.sourcePath+a+this.sourceSearch)},n.prototype.toString=function(){return this.source},n.prototype.exec=function(a,b){var c=this.regexp.exec(a);if(!c)return null;var d,e=this.params,f=e.length,g=this.segments.length-1,h={};if(g!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(d=0;g>d;d++)h[e[d]]=c[d+1];for(;f>d;d++)h[e[d]]=b[e[d]];return h},n.prototype.parameters=function(){return this.params},n.prototype.format=function(a){var b=this.segments,c=this.params;if(!a)return b.join("");var d,e,f,g=b.length-1,h=c.length,i=b[0];for(d=0;g>d;d++)f=a[c[d]],null!=f&&(i+=encodeURIComponent(f)),i+=b[d+1];for(;h>d;d++)f=a[c[d]],null!=f&&(i+=(e?"&":"?")+c[d]+"="+encodeURIComponent(f),e=!0);return i},b.module("ui.router.util").provider("$urlMatcherFactory",o),p.$inject=["$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",p),q.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider","$locationProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",q),r.$inject=[],b.module("ui.router.state").provider("$view",r),b.module("ui.router.state").provider("$uiViewScroll",s),t.$inject=["$state","$injector","$uiViewScroll"],u.$inject=["$compile","$controller","$state"],b.module("ui.router.state").directive("uiView",t),b.module("ui.router.state").directive("uiView",u),x.$inject=["$state","$timeout"],y.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",x).directive("uiSrefActive",y),z.$inject=["$state"],A.$inject=["$state"],b.module("ui.router.state").filter("isState",z).filter("includedByState",A),B.$inject=["$stateProvider","$urlRouterProvider"],b.module("ui.router.compat").provider("$route",B).directive("ngView",t)}(window,window.angular);;angular.module("ngDropdowns",[]).directive("dropdownSelect",["$document",function(a){return{restrict:"A",replace:!0,scope:{dropdownSelect:"=",dropdownModel:"=",dropdownOnchange:"&",dropdownOntoggle:"&"},controller:["$scope","$element","$attrs",function(b,c,d){var e;b.labelField=null!=d.dropdownItemLabel?d.dropdownItemLabel:"text",this.select=function(a){angular.copy(a,b.dropdownModel),b.dropdownOnchange({selected:a})},e=a.find("body"),e.bind("click",function(){c.removeClass("active")}),c.bind("click",function(a){a.stopPropagation(),b.dropdownOntoggle(),c.toggleClass("active")})}],template:"<div class='dropdown-overlay'></div>\n<div class='wrap-dd-select'>\n    <span class='selected'>{{dropdownModel[labelField]}}</span>\n    <ul class='dropdown'>\n        <li ng-repeat='item in dropdownSelect'\n            class='dropdown-item'\n            dropdown-select-item='item'\n            dropdown-item-label='labelField'>\n        </li>\n    </ul>\n</div>"}}]).directive("dropdownSelectItem",[function(){return{require:"^dropdownSelect",replace:!0,scope:{dropdownItemLabel:"=",dropdownSelectItem:"="},link:function(a,b,c,d){a.selectItem=function(){a.dropdownSelectItem.href||d.select(a.dropdownSelectItem)}},template:"<li ng-class='{divider: dropdownSelectItem.divider}'>\n    <a href='' class='dropdown-item'\n        ng-if='!dropdownSelectItem.divider'\n        ng-href='{{dropdownSelectItem.href}}'\n        ng-click='selectItem()'>\n        {{dropdownSelectItem[dropdownItemLabel]}}\n    </a>\n</li>"}}]).directive("dropdownMenu",["$parse","$compile","$document",function(a,b,c){var d;return d="<div class='dropdown-overlay'></div>\n<ul class='dropdown'>\n    <li ng-repeat='item in dropdownMenu'\n        class='dropdown-item'\n        dropdown-item-label='labelField'\n        dropdown-menu-item='item'>\n    </li>\n</ul>",{restrict:"A",replace:!1,scope:{dropdownMenu:"=",dropdownModel:"=",dropdownOnchange:"&",dropdownOntoggle:"&"},controller:["$scope","$element","$attrs",function(a,e,f){var g,h,i,j,k;a.labelField=null!=f.dropdownItemLabel?f.dropdownItemLabel:"text",g=angular.element(d),g.data("$dropdownMenuController",this),k=b(g)(a),h=angular.element("<div class='wrap-dd-menu'></div>"),e.replaceWith(h),h.append(e),h.append(k),this.select=function(b){angular.copy(b,a.dropdownModel),a.dropdownOnchange({selected:b})},i=c.find("body"),j=e.find(".dropdown-overlay"),i.bind("click",function(){k.removeClass("active"),e.removeClass("active")}),j.bind("click",function(){k.removeClass("active"),e.removeClass("active"),j.removeClass("active")}),e.bind("click",function(b){b.stopPropagation(),k.toggleClass("active"),e.toggleClass("active"),a.dropdownOntoggle(),j.toggleClass("active")})}]}}]).directive("dropdownMenuItem",[function(){return{require:"^dropdownMenu",replace:!0,scope:{dropdownMenuItem:"=",dropdownItemLabel:"="},link:function(a,b,c,d){a.selectItem=function(){a.dropdownMenuItem.href||d.select(a.dropdownMenuItem)}},template:"<li ng-class='{divider: dropdownMenuItem.divider}'>\n    <a href='' class='dropdown-item {{dropdownMenuItem.iconCls}}'\n        ng-if='!dropdownMenuItem.divider'\n        ng-href='{{dropdownMenuItem.href}}'\n        ng-click='selectItem()'>\n        {{dropdownMenuItem[dropdownItemLabel]}}\n    </a>\n</li>"}}]);;/**
 * Mousetrap wrapper for AngularJS
 * @version v0.0.1 - 2013-12-30
 * @link https://github.com/mgonto/mgo-mousetrap
 * @author Martin Gontovnikas <martin@gon.to>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('mgo-mousetrap', []).directive('wMousetrap', function () {
    return {
        restrict: 'A',
        controller: ['$scope', '$element', '$attrs',
                     function ($scope, $element, $attrs) {
            
            var mousetrap;

            $scope.$watch($attrs.wMousetrap, function(_mousetrap) {
                mousetrap = _mousetrap;

                for (var key in mousetrap) {
                    if (mousetrap.hasOwnProperty(key)) {
                        Mousetrap.unbind(key);
                        Mousetrap.bind(key, applyWrapper(mousetrap[key])); 
                    }
                }
            }, true);
            
            function applyWrapper(func) {
                return function(e) {
                    $scope.$apply(function() {
                        func(e);
                    });
                };
            }
            
            $element.bind('$destroy', function() {
                if (!mousetrap) return;

                for (var key in mousetrap) {
                    if (mousetrap.hasOwnProperty(key)) {
                        Mousetrap.unbind(key);
                    }
                }
            });

        }]
    }
});
;/*jslint node: true */
/*global ZeroClipboard */
'use strict';

angular.module('ngClipboard', []).
  provider('ngClip', function() {
    var self = this;
    this.path = '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.3.2/ZeroClipboard.swf';
    return {
      setPath: function(newPath) {
       self.path = newPath;
      },
      $get: function() {
        return {
          path: self.path
        };
      }
    };
  }).
  run(['ngClip', function(ngClip) {
    ZeroClipboard.config({
      moviePath: ngClip.path,
      trustedDomains: ["*"],
      allowScriptAccess: "always",
      forceHandCursor: true
    });
  }]).
  directive('clipCopy', ['ngClip', function (ngClip) {
    return {
      scope: {
        clipCopy: '&',
        clipClick: '&'
      },
      restrict: 'A',
      link: function (scope, element, attrs) {
        // Create the clip object
        var clip = new ZeroClipboard(element);
        clip.on( 'load', function(client) {
          var onDataRequested = function (client) {
            client.setText(scope.$eval(scope.clipCopy));
            if (angular.isDefined(attrs.clipClick)) {
              scope.$apply(scope.clipClick);
            }
          };
          client.on('dataRequested', onDataRequested);

          scope.$on('$destroy', function() {
            client.off('dataRequested', onDataRequested);
            client.unclip(element);
          });
        });
      }
    };
  }]);
;!function(){"use strict";function a(a,b){return a.module("angularMoment",[]).constant("angularMomentConfig",{preprocess:null,timezone:""}).constant("moment",b).constant("amTimeAgoConfig",{withoutSuffix:!1}).directive("amTimeAgo",["$window","moment","amMoment","amTimeAgoConfig","angularMomentConfig",function(b,c,d,e,f){return function(g,h,i){function j(){o&&(b.clearTimeout(o),o=null)}function k(a){h.text(a.fromNow(p));var d=c().diff(a,"minute"),e=3600;1>d?e=1:60>d?e=30:180>d&&(e=300),o=b.setTimeout(function(){k(a)},1e3*e)}function l(){j(),m&&k(d.preprocessDate(m,q,n))}var m,n,o=null,p=e.withoutSuffix,q=f.preprocess;g.$watch(i.amTimeAgo,function(a){return"undefined"==typeof a||null===a||""===a?(j(),void(m&&(h.text(""),m=null))):(m=a,void l())}),a.isDefined(i.amWithoutSuffix)&&g.$watch(i.amWithoutSuffix,function(a){"boolean"==typeof a?(p=a,l()):p=e.withoutSuffix}),i.$observe("amFormat",function(a){n=a,l()}),i.$observe("amPreprocess",function(a){q=a,l()}),g.$on("$destroy",function(){j()}),g.$on("amMoment:languageChange",function(){l()})}}]).service("amMoment",["moment","$rootScope","$log","angularMomentConfig",function(b,c,d,e){this.preprocessors={utc:b.utc,unix:b.unix},this.changeLanguage=function(d){var e=b.lang(d);return a.isDefined(d)&&c.$broadcast("amMoment:languageChange"),e},this.preprocessDate=function(c,f,g){return a.isUndefined(f)&&(f=e.preprocess),this.preprocessors[f]?this.preprocessors[f](c,g):(f&&d.warn("angular-moment: Ignoring unsupported value for preprocess: "+f),!isNaN(parseFloat(c))&&isFinite(c)?b(parseInt(c,10)):b(c,g))},this.applyTimezone=function(a){var b=e.timezone;return a&&b&&(a.tz?a=a.tz(b):d.warn("angular-moment: timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?")),a}}]).filter("amCalendar",["moment","amMoment",function(a,b){return function(c,d){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,d);var e=a(c);return e.isValid()?b.applyTimezone(e).calendar():""}}]).filter("amDateFormat",["moment","amMoment",function(a,b){return function(c,d,e){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,e);var f=a(c);return f.isValid()?b.applyTimezone(f).format(d):""}}]).filter("amDurationFormat",["moment",function(a){return function(b,c,d){return"undefined"==typeof b||null===b?"":a.duration(b,c).humanize(d)}}])}"function"==typeof define&&define.amd?define("angular-moment",["angular","moment"],a):a(angular,window.moment)}();;/*! angular-deckgrid (v0.4.4) - Copyright: 2013 - 2014, André König (andre.koenig@posteo.de) - MIT */
/*
 * angular-deckgrid
 *
 * Copyright(c) 2013-2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König (andre.koenig@posteo.de)
 *
 */

angular.module('akoenig.deckgrid', []);

angular.module('akoenig.deckgrid').directive('deckgrid', [

    'DeckgridDescriptor',

    function initialize (DeckgridDescriptor) {

        'use strict';

        return DeckgridDescriptor.create();
    }
]);
/*
 * angular-deckgrid
 *
 * Copyright(c) 2013-2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König (andre.koenig@posteo.de)
 *
 */

angular.module('akoenig.deckgrid').factory('DeckgridDescriptor', [

    'Deckgrid',
    '$templateCache',

    function initialize (Deckgrid, $templateCache) {

        'use strict';

        /**
         * This is a wrapper around the AngularJS
         * directive description object.
         *
         */
        function Descriptor () {
            this.restrict = 'AE';

            this.template = '<div data-ng-repeat="column in columns" class="{{layout.classList}}">' +
                                '<div data-ng-repeat="card in column" data-ng-include="cardTemplate"></div>' +
                            '</div>';

            this.scope = {
                'model': '=source',
                'itemIdentifierFn': '='
            };

            //
            // Will be created in the linking function.
            //
            this.$$deckgrid = null;

            this.transclude = true;
            this.link = this.$$link.bind(this);

            //
            // Will be incremented if using inline templates.
            //
            this.$$templateKeyIndex = 0;

        }

        /**
         * @private
         *
         * Cleanup method. Will be called when the
         * deckgrid directive should be destroyed.
         *
         */
        Descriptor.prototype.$$destroy = function $$destroy () {
            this.$$deckgrid.destroy();
        };

        /**
         * @private
         *
         * The deckgrid link method. Will instantiate the deckgrid.
         *
         */
        Descriptor.prototype.$$link = function $$link (scope, elem, attrs, nullController, transclude) {
            var templateKey = 'deckgrid/innerHtmlTemplate' + (++this.$$templateKeyIndex) + '.html';

            scope.$on('$destroy', this.$$destroy.bind(this));

            if (attrs.cardtemplate === undefined) {
                if (attrs.cardtemplatestring === undefined) {
                    // use the provided inner html as template
                    transclude(scope, function onTransclude (innerHTML) {
                        var extractedInnerHTML = [],
                            i = 0,
                            len = innerHTML.length,
                            outerHTML;

                        for (i; i < len; i = i + 1) {
                            outerHTML = innerHTML[i].outerHTML;

                            if (outerHTML !== undefined) {
                                extractedInnerHTML.push(outerHTML);
                            }
                        }

                        $templateCache.put(templateKey, extractedInnerHTML.join());
                    });
                } else {
                    // use the provided template string
                    //
                    // note: the attr is accessed via the elem object, as the attrs content
                    // is already compiled and thus lacks the {{...}} expressions
                    $templateCache.put(templateKey, elem.attr('cardtemplatestring'));
                }

                scope.cardTemplate = templateKey;
            } else {
                // use the provided template file
                scope.cardTemplate = attrs.cardtemplate;
            }

            scope.mother = scope.$parent;

            this.$$deckgrid = Deckgrid.create(scope, elem[0]);
        };

        return {
            create : function create () {
                return new Descriptor();
            }
        };
    }
]);

/*
 * angular-deckgrid
 *
 * Copyright(c) 2013-2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König (andre.koenig@posteo.de)
 *
 */

angular.module('akoenig.deckgrid').factory('Deckgrid', [

    '$window',
    '$log',

    function initialize ($window, $log) {

        'use strict';

        /**
         * The deckgrid directive.
         *
         */
        function Deckgrid (scope, element) {
            var self = this,
                watcher,
                mql;

            this.$$elem = element;
            this.$$watchers = [];

            this.$$scope = scope;
            this.$$scope.columns = [];

            //
            // The layout configuration will be parsed from
            // the pseudo "before element." There you have to save all
            // the column configurations.
            //
            this.$$scope.layout = this.$$getLayout();

            this.$$createColumns();

            //
            // Register model change.
            //
            var watchExpression = !scope.itemIdentifierFn ?
                'model' :
                function() {
                    var result = '';
                    if (scope.model) {
                        for (var i = 0; i < scope.model.length; i++) {
                            result += scope.itemIdentifierFn(scope.model[i]);
                        }
                    }
                    return result;
                };
            watcher = this.$$scope.$watch(watchExpression, this.$$onModelChange.bind(this), true);
            this.$$watchers.push(watcher);

            //
            // Register media query change events.
            //
            angular.forEach(self.$$getMediaQueries(), function onIteration (rule) {
                var handler = self.$$onMediaQueryChange.bind(self);

                function onDestroy () {
                    rule.removeListener(handler);
                }

                rule.addListener(handler);

                self.$$watchers.push(onDestroy);
            });

            mql = $window.matchMedia('(orientation: portrait)');
            mql.addListener(self.$$onMediaQueryChange.bind(self));

        }

        /**
         * @private
         *
         * Extracts the media queries out of the stylesheets.
         *
         * This method will fetch the media queries out of the stylesheets that are
         * responsible for styling the angular-deckgrid.
         *
         * @return {array} An array with all respective styles.
         *
         */
        Deckgrid.prototype.$$getMediaQueries = function $$getMediaQueries () {
            var stylesheets = [],
                mediaQueries = [];

            stylesheets = Array.prototype.concat.call(
                Array.prototype.slice.call(document.querySelectorAll('style[type=\'text/css\']')),
                Array.prototype.slice.call(document.querySelectorAll('link[rel=\'stylesheet\']'))
            );

            function extractRules (stylesheet) {
                try {
                    return (stylesheet.sheet.cssRules || []);
                } catch (e) {
                    return [];
                }
            }

            function hasDeckgridStyles (rule) {
                var regexe   = /\[(\w*-)?deckgrid\]::?before/g,
                    i        = 0,
                    selector = '';

                if (!rule.media || angular.isUndefined(rule.cssRules)) {
                    return false;
                }

                i = rule.cssRules.length - 1;

                for (i; i >= 0; i = i - 1) {
                    selector = rule.cssRules[i].selectorText;

                    if (angular.isDefined(selector) && selector.match(regexe)) {
                        return true;
                    }
                }

                return false;
            }

            angular.forEach(stylesheets, function onIteration (stylesheet) {
                var rules = extractRules(stylesheet);

                angular.forEach(rules, function inRuleIteration (rule) {
                    if (hasDeckgridStyles(rule)) {
                        mediaQueries.push($window.matchMedia(rule.media.mediaText));
                    }
                });
            });

            return mediaQueries;
        };

        /**
         * @private
         *
         * Creates the column segmentation. With other words:
         * This method creates the internal data structure from the
         * passed "source" attribute. Every card within this "source"
         * model will be passed into this internal column structure by
         * reference. So if you modify the data within your controller
         * this directive will reflect these changes immediately.
         *
         * NOTE that calling this method will trigger a complete template "redraw".
         *
         */
        Deckgrid.prototype.$$createColumns = function $$createColumns () {
            var self = this;

            if (!this.$$scope.layout) {
                return $log.error('angular-deckgrid: No CSS configuration found (see ' +
                                   'https://github.com/akoenig/angular-deckgrid#the-grid-configuration)');
            }

            this.$$scope.columns = [];

            angular.forEach(this.$$scope.model, function onIteration (card, index) {
                var column = (index % self.$$scope.layout.columns) | 0;

                if (!self.$$scope.columns[column]) {
                    self.$$scope.columns[column] = [];
                }

                card.$index = index;
                self.$$scope.columns[column].push(card);
            });
        };

        /**
         * @private
         *
         * Parses the configuration out of the configured CSS styles.
         *
         * Example:
         *
         *     .deckgrid::before {
         *         content: '3 .column.size-1-3';
         *     }
         *
         * Will result in a three column grid where each column will have the
         * classes: "column size-1-3".
         *
         * You are responsible for defining the respective styles within your CSS.
         *
         */
        Deckgrid.prototype.$$getLayout = function $$getLayout () {
            var content = $window.getComputedStyle(this.$$elem, ':before').content,
                layout;

            if (content) {
                content = content.replace(/'/g, '');  // before e.g. '3 .column.size-1of3'
                content = content.replace(/"/g, '');  // before e.g. "3 .column.size-1of3"
                content = content.split(' ');

                if (2 === content.length) {
                    layout = {};
                    layout.columns = (content[0] | 0);
                    layout.classList = content[1].replace(/\./g, ' ').trim();
                }
            }

            return layout;
        };

        /**
         * @private
         *
         * Event that will be triggered if a CSS media query changed.
         *
         */
        Deckgrid.prototype.$$onMediaQueryChange = function $$onMediaQueryChange () {
            var self = this,
                layout = this.$$getLayout();

            //
            // Okay, the layout has changed.
            // Creating a new column structure is not avoidable.
            //
            if (layout.columns !== this.$$scope.layout.columns) {
                self.$$scope.layout = layout;

                self.$$scope.$apply(function onApply () {
                    self.$$createColumns();
                });
            }
        };

        /**
         * @private
         *
         * Event that will be triggered when the source model has changed.
         *
         */
        Deckgrid.prototype.$$onModelChange = function $$onModelChange (newModel, oldModel) {
            var self = this;

            newModel = newModel || [];
            oldModel = oldModel || [];

            if (isString(newModel) || isArray(newModel)) {
                if (oldModel.length !== newModel.length) {
                    self.$$createColumns();
                } else {
                    for (var i = newModel.length - 1; i >= 0; i--) {
                        if (oldModel[i] !== newModel[i]) {
                            self.$$createColumns();
                            break;
                        }
                    }
                }
            } else {
                $log.error('DeckGrid watch expression must return an array or string.');
            }
        };

        /**
         * Destroys the directive. Takes care of cleaning all
         * watchers and event handlers.
         *
         */
        Deckgrid.prototype.destroy = function destroy () {
            var i = this.$$watchers.length - 1;

            for (i; i >= 0; i = i - 1) {
                this.$$watchers[i]();
            }
        };

        function isString(value) {
            return typeof value === 'string' ||
                value && typeof value === 'object' && value.toString() === '[object String]' || false;
        }

        function isArray(obj) {
            if (Array.isArray) {
                return Array.isArray(obj);
            }

            return obj && typeof obj === 'object' && typeof obj.length === 'number' &&
                obj.toString() === '[object Array]' || false;
        }

        return {
            create : function create (scope, element) {
                return new Deckgrid(scope, element);
            }
        };
    }
]);
;'use strict';
/**
 * Binds a CodeMirror widget to a <textarea> element.
 */
angular.module('ui.codemirror', []).constant('uiCodemirrorConfig', {}).directive('uiCodemirror', [
  'uiCodemirrorConfig',
  function (uiCodemirrorConfig) {
    return {
      restrict: 'EA',
      require: '?ngModel',
      priority: 1,
      compile: function compile() {
        // Require CodeMirror
        if (angular.isUndefined(window.CodeMirror)) {
          throw new Error('ui-codemirror need CodeMirror to work... (o rly?)');
        }
        return function postLink(scope, iElement, iAttrs, ngModel) {
          var options, opts, codeMirror, value;
          value = iElement.text();
          if (iElement[0].tagName === 'TEXTAREA') {
            codeMirror = window.CodeMirror.fromTextArea(iElement[0], { value: value });
          } else {
            iElement.html('');
            codeMirror = new window.CodeMirror(function (cm_el) {
              iElement.replaceWith(cm_el);
            }, { value: value });
          }
          options = uiCodemirrorConfig.codemirror || {};
          opts = angular.extend({}, options, scope.$eval(iAttrs.uiCodemirror), scope.$eval(iAttrs.uiCodemirrorOpts));
          function updateOptions(newValues) {
            for (var key in newValues) {
              if (newValues.hasOwnProperty(key)) {
                codeMirror.setOption(key, newValues[key]);
              }
            }
          }
          updateOptions(opts);
          if (iAttrs.uiCodemirror) {
            scope.$watch(iAttrs.uiCodemirror, updateOptions, true);
          }
          if (ngModel) {
            // CodeMirror expects a string, so make sure it gets one.
            // This does not change the model.
            ngModel.$formatters.push(function (value) {
              if (angular.isUndefined(value) || value === null) {
                return '';
              } else if (angular.isObject(value) || angular.isArray(value)) {
                throw new Error('ui-codemirror cannot use an object or an array as a model');
              }
              return value;
            });
            // Override the ngModelController $render method, which is what gets called when the model is updated.
            // This takes care of the synchronizing the codeMirror element with the underlying model, in the case that it is changed by something else.
            ngModel.$render = function () {
              //Code mirror expects a string so make sure it gets one
              //Although the formatter have already done this, it can be possible that another formatter returns undefined (for example the required directive)
              var safeViewValue = ngModel.$viewValue || '';
              codeMirror.setValue(safeViewValue);
            };
            // Keep the ngModel in sync with changes from CodeMirror
            codeMirror.on('change', function (instance) {
              var newValue = instance.getValue();
              if (newValue !== ngModel.$viewValue) {
                // Changes to the model from a callback need to be wrapped in $apply or angular will not notice them
                scope.$apply(function () {
                  ngModel.$setViewValue(newValue);
                });
              }
            });
          }
          // Watch ui-refresh and refresh the directive
          if (iAttrs.uiRefresh) {
            scope.$watch(iAttrs.uiRefresh, function (newVal, oldVal) {
              // Skip the initial watch firing
              if (newVal !== oldVal) {
                codeMirror.refresh();
              }
            });
          }
          // Allow access to the CodeMirror instance through a broadcasted event
          // eg: $broadcast('CodeMirror', function(cm){...});
          scope.$on('CodeMirror', function (event, callback) {
            if (angular.isFunction(callback)) {
              callback(codeMirror);
            } else {
              throw new Error('the CodeMirror event requires a callback function');
            }
          });
          // onLoad callback
          if (angular.isFunction(opts.onLoad)) {
            opts.onLoad(codeMirror);
          }
        };
      }
    };
  }
]);;(function () {
	"use strict";
	/**
	 * Bindonce - Zero watches binding for AngularJs
	 * @version v0.3.1
	 * @link https://github.com/Pasvaz/bindonce
	 * @author Pasquale Vazzana <pasqualevazzana@gmail.com>
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	var bindonceModule = angular.module('pasvaz.bindonce', []);

	bindonceModule.directive('bindonce', function ()
	{
		var toBoolean = function (value)
		{
			if (value && value.length !== 0)
			{
				var v = angular.lowercase("" + value);
				value = !(v === 'f' || v === '0' || v === 'false' || v === 'no' || v === 'n' || v === '[]');
			}
			else
			{
				value = false;
			}
			return value;
		};

		var msie = parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10);
		if (isNaN(msie))
		{
			msie = parseInt((/trident\/.*; rv:(\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10);
		}

		var bindonceDirective =
		{
			restrict: "AM",
			controller: ['$scope', '$element', '$attrs', '$interpolate', function ($scope, $element, $attrs, $interpolate)
			{
				var showHideBinder = function (elm, attr, value)
				{
					var show = (attr === 'show') ? '' : 'none';
					var hide = (attr === 'hide') ? '' : 'none';
					elm.css('display', toBoolean(value) ? show : hide);
				};
				var classBinder = function (elm, value)
				{
					if (angular.isObject(value) && !angular.isArray(value))
					{
						var results = [];
						angular.forEach(value, function (value, index)
						{
							if (value) results.push(index);
						});
						value = results;
					}
					if (value)
					{
						elm.addClass(angular.isArray(value) ? value.join(' ') : value);
					}
				};

				var ctrl =
				{
					watcherRemover: undefined,
					binders: [],
					group: $attrs.boName,
					element: $element,
					ran: false,

					addBinder: function (binder)
					{
						this.binders.push(binder);

						// In case of late binding (when using the directive bo-name/bo-parent)
						// it happens only when you use nested bindonce, if the bo-children
						// are not dom children the linking can follow another order
						if (this.ran)
						{
							this.runBinders();
						}
					},

					setupWatcher: function (bindonceValue)
					{
						var that = this;
						this.watcherRemover = $scope.$watch(bindonceValue, function (newValue)
						{
							if (newValue === undefined) return;
							that.removeWatcher();
							that.runBinders();
						}, true);
					},

					removeWatcher: function ()
					{
						if (this.watcherRemover !== undefined)
						{
							this.watcherRemover();
							this.watcherRemover = undefined;
						}
					},

					runBinders: function ()
					{
						while (this.binders.length > 0)
						{
							var binder = this.binders.shift();
							if (this.group && this.group != binder.group) continue;
							var value = binder.scope.$eval((binder.interpolate) ? $interpolate(binder.value) : binder.value);
							switch (binder.attr)
							{
								case 'boIf':
									if (toBoolean(value))
									{
										binder.transclude(binder.scope.$new(), function (clone)
										{
											var parent = binder.element.parent();
											var afterNode = binder.element && binder.element[binder.element.length - 1];
											var parentNode = parent && parent[0] || afterNode && afterNode.parentNode;
											var afterNextSibling = (afterNode && afterNode.nextSibling) || null;
											angular.forEach(clone, function (node)
											{
												parentNode.insertBefore(node, afterNextSibling);
											});
										});
									}
									break;
								case 'boSwitch':
									var selectedTranscludes, switchCtrl = binder.controller[0];
									if ((selectedTranscludes = switchCtrl.cases['!' + value] || switchCtrl.cases['?']))
									{
										binder.scope.$eval(binder.attrs.change);
										angular.forEach(selectedTranscludes, function (selectedTransclude)
										{
											selectedTransclude.transclude(binder.scope.$new(), function (clone)
											{
												var parent = selectedTransclude.element.parent();
												var afterNode = selectedTransclude.element && selectedTransclude.element[selectedTransclude.element.length - 1];
												var parentNode = parent && parent[0] || afterNode && afterNode.parentNode;
												var afterNextSibling = (afterNode && afterNode.nextSibling) || null;
												angular.forEach(clone, function (node)
												{
													parentNode.insertBefore(node, afterNextSibling);
												});

											});
										});
									}
									break;
								case 'boSwitchWhen':
									var ctrl = binder.controller[0];
									ctrl.cases['!' + binder.attrs.boSwitchWhen] = (ctrl.cases['!' + binder.attrs.boSwitchWhen] || []);
									ctrl.cases['!' + binder.attrs.boSwitchWhen].push({ transclude: binder.transclude, element: binder.element });
									break;
								case 'boSwitchDefault':
									var ctrl = binder.controller[0];
									ctrl.cases['?'] = (ctrl.cases['?'] || []);
									ctrl.cases['?'].push({ transclude: binder.transclude, element: binder.element });
									break;
								case 'hide':
								case 'show':
									showHideBinder(binder.element, binder.attr, value);
									break;
								case 'class':
									classBinder(binder.element, value);
									break;
								case 'text':
									binder.element.text(value);
									break;
								case 'html':
									binder.element.html(value);
									break;
								case 'style':
									binder.element.css(value);
									break;
								case 'src':
									binder.element.attr(binder.attr, value);
									if (msie) binder.element.prop('src', value);
									break;
								case 'attr':
									angular.forEach(binder.attrs, function (attrValue, attrKey)
									{
										var newAttr, newValue;
										if (attrKey.match(/^boAttr./) && binder.attrs[attrKey])
										{
											newAttr = attrKey.replace(/^boAttr/, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
											newValue = binder.scope.$eval(binder.attrs[attrKey]);
											binder.element.attr(newAttr, newValue);
										}
									});
									break;
								case 'href':
								case 'alt':
								case 'title':
								case 'id':
								case 'value':
									binder.element.attr(binder.attr, value);
									break;
							}
						}
						this.ran = true;
					}
				};

				return ctrl;
			}],

			link: function (scope, elm, attrs, bindonceController)
			{
				var value = (attrs.bindonce) ? scope.$eval(attrs.bindonce) : true;
				if (value !== undefined)
				{
					// since Angular 1.2 promises are no longer 
					// undefined until they don't get resolved
					if (value.then && typeof value.then === 'function')
					{
						value.then(function ()
						{
							bindonceController.runBinders();
						});
					}
					else
					{
						bindonceController.runBinders();
					}
				}
				else
				{
					bindonceController.setupWatcher(attrs.bindonce);
					elm.bind("$destroy", bindonceController.removeWatcher);
				}
			}
		};

		return bindonceDirective;
	});

	angular.forEach(
	[
		{ directiveName: 'boShow', attribute: 'show' },
		{ directiveName: 'boHide', attribute: 'hide' },
		{ directiveName: 'boClass', attribute: 'class' },
		{ directiveName: 'boText', attribute: 'text' },
		{ directiveName: 'boBind', attribute: 'text' },
		{ directiveName: 'boHtml', attribute: 'html' },
		{ directiveName: 'boSrcI', attribute: 'src', interpolate: true },
		{ directiveName: 'boSrc', attribute: 'src' },
		{ directiveName: 'boHrefI', attribute: 'href', interpolate: true },
		{ directiveName: 'boHref', attribute: 'href' },
		{ directiveName: 'boAlt', attribute: 'alt' },
		{ directiveName: 'boTitle', attribute: 'title' },
		{ directiveName: 'boId', attribute: 'id' },
		{ directiveName: 'boStyle', attribute: 'style' },
		{ directiveName: 'boValue', attribute: 'value' },
		{ directiveName: 'boAttr', attribute: 'attr' },

		{ directiveName: 'boIf', transclude: 'element', terminal: true, priority: 1000 },
		{ directiveName: 'boSwitch', require: 'boSwitch', controller: function () { this.cases = {}; } },
		{ directiveName: 'boSwitchWhen', transclude: 'element', priority: 800, require: '^boSwitch', },
		{ directiveName: 'boSwitchDefault', transclude: 'element', priority: 800, require: '^boSwitch', }
	],
	function (boDirective)
	{
		var childPriority = 200;
		return bindonceModule.directive(boDirective.directiveName, function ()
		{
			var bindonceDirective =
			{
				priority: boDirective.priority || childPriority,
				transclude: boDirective.transclude || false,
				terminal: boDirective.terminal || false,
				require: ['^bindonce'].concat(boDirective.require || []),
				controller: boDirective.controller,
				compile: function (tElement, tAttrs, transclude)
				{
					return function (scope, elm, attrs, controllers)
					{
						var bindonceController = controllers[0];
						var name = attrs.boParent;
						if (name && bindonceController.group !== name)
						{
							var element = bindonceController.element.parent();
							bindonceController = undefined;
							var parentValue;

							while (element[0].nodeType !== 9 && element.length)
							{
								if ((parentValue = element.data('$bindonceController'))
									&& parentValue.group === name)
								{
									bindonceController = parentValue;
									break;
								}
								element = element.parent();
							}
							if (!bindonceController)
							{
								throw new Error("No bindonce controller: " + name);
							}
						}

						bindonceController.addBinder(
						{
							element: elm,
							attr: boDirective.attribute || boDirective.directiveName,
							attrs: attrs,
							value: attrs[boDirective.directiveName],
							interpolate: boDirective.interpolate,
							group: name,
							transclude: transclude,
							controller: controllers.slice(1),
							scope: scope
						});
					};
				}
			};

			return bindonceDirective;
		});
	})
})();
;/*! 1.4.0 */
!function(){var a=angular.module("angularFileUpload",[]);a.service("$upload",["$http","$timeout",function(a,b){function c(c){c.method=c.method||"POST",c.headers=c.headers||{},c.transformRequest=c.transformRequest||function(b,c){return window.ArrayBuffer&&b instanceof window.ArrayBuffer?b:a.defaults.transformRequest[0](b,c)},window.XMLHttpRequest.__isShim&&(c.headers.__setXHR_=function(){return function(a){a&&(c.__XHR=a,c.xhrFn&&c.xhrFn(a),a.upload.addEventListener("progress",function(a){c.progress&&b(function(){c.progress&&c.progress(a)})},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&c.progress&&c.progress(a)},!1))}});var d=a(c);return d.progress=function(a){return c.progress=a,d},d.abort=function(){return c.__XHR&&b(function(){c.__XHR.abort()}),d},d.xhr=function(a){return c.xhrFn=a,d},d.then=function(a,b){return function(d,e,f){c.progress=f||c.progress;var g=b.apply(a,[d,e,f]);return g.abort=a.abort,g.progress=a.progress,g.xhr=a.xhr,g.then=a.then,g}}(d,d.then),d}this.upload=function(b){b.headers=b.headers||{},b.headers["Content-Type"]=void 0,b.transformRequest=b.transformRequest||a.defaults.transformRequest;var d=new FormData,e=b.transformRequest,f=b.data;return b.transformRequest=function(a,c){if(f)if(b.formDataAppender)for(var d in f){var g=f[d];b.formDataAppender(a,d,g)}else for(var d in f){var g=f[d];if("function"==typeof e)g=e(g,c);else for(var h=0;h<e.length;h++){var i=e[h];"function"==typeof i&&(g=i(g,c))}a.append(d,g)}if(null!=b.file){var j=b.fileFormDataName||"file";if("[object Array]"===Object.prototype.toString.call(b.file))for(var k="[object String]"===Object.prototype.toString.call(j),h=0;h<b.file.length;h++)a.append(k?j+h:j[h],b.file[h],b.file[h].name);else a.append(j,b.file,b.file.name)}return a},b.data=d,c(b)},this.http=function(a){return c(a)}}]),a.directive("ngFileSelect",["$parse","$timeout",function(a,b){return function(c,d,e){var f=a(e.ngFileSelect);d.bind("change",function(a){var d,e,g=[];if(d=a.target.files,null!=d)for(e=0;e<d.length;e++)g.push(d.item(e));b(function(){f(c,{$files:g,$event:a})})}),("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&d.bind("touchend",function(a){a.preventDefault(),a.target.click()})}}]),a.directive("ngFileDropAvailable",["$parse","$timeout",function(a,b){return function(c,d,e){if("draggable"in document.createElement("span")){var f=a(e.ngFileDropAvailable);b(function(){f(c)})}}}]),a.directive("ngFileDrop",["$parse","$timeout",function(a,b){return function(c,d,e){function f(a,b){if(b.isDirectory){var c=b.createReader();i++,c.readEntries(function(b){for(var c=0;c<b.length;c++)f(a,b[c]);i--})}else i++,b.file(function(b){i--,a.push(b)})}if("draggable"in document.createElement("span")){var g=null,h=a(e.ngFileDrop);d[0].addEventListener("dragover",function(a){b.cancel(g),a.stopPropagation(),a.preventDefault(),d.addClass(e.ngFileDragOverClass||"dragover")},!1),d[0].addEventListener("dragleave",function(){g=b(function(){d.removeClass(e.ngFileDragOverClass||"dragover")})},!1);var i=0;d[0].addEventListener("drop",function(a){a.stopPropagation(),a.preventDefault(),d.removeClass(e.ngFileDragOverClass||"dragover");var g=[],j=a.dataTransfer.items;if(j&&j.length>0&&j[0].webkitGetAsEntry)for(var k=0;k<j.length;k++)f(g,j[k].webkitGetAsEntry());else{var l=a.dataTransfer.files;if(null!=l)for(var k=0;k<l.length;k++)g.push(l.item(k))}!function m(d){b(function(){i?m(10):h(c,{$files:g,$event:a})},d||0)}()},!1)}}}])}();;'use strict';


angular.module('dropbox', [])


  .provider('Dropbox', function DropboxProvider () {


    var clientId, redirectUri;


    this.config = function (id, uri) {
      this.clientId    = clientId    = id;
      this.redirectUri = redirectUri = uri;
    };


    this.$get = [
      '$q',
      '$http',
      '$window',
      function ($q, $http, $window) {


        /**
         * Credentials
         */

        var oauth = {};


        /**
         * Dropbox API Servers
         */

        var authServer = 'https://www.dropbox.com'
          , apiServer  = 'https://api.dropbox.com'
          , fileServer = 'https://dl.dropboxusercontent.com';


        /**
         * API Method URLs
         */

        var urls = {
          // Authentication.
          authorize:           authServer + '/1/oauth2/authorize',
          token:               apiServer  + '/1/oauth2/token',
          signOut:             apiServer  + '/1/unlink_access_token',

          // Accounts.
          accountInfo:         apiServer  + '/1/account/info',

          // Files and metadata.
          getNote:             fileServer + '/1/files/auto/',
          getFile:             fileServer + '/1/files/auto/',
          postFile:            fileServer + '/1/files/auto/',
          putFile:             fileServer + '/1/files_put/auto/',
          metadata:            apiServer  + '/1/metadata/auto/',
          delta:               apiServer  + '/1/delta',
          revisions:           apiServer  + '/1/revisions/auto/',
          restore:             apiServer  + '/1/restore/auto/',
          search:              apiServer  + '/1/search/auto/',
          shares:              apiServer  + '/1/shares/auto',
          media:               apiServer  + '/1/media/auto',
          copyRef:             apiServer  + '/1/copy_ref/auto',
          thumbnails:          fileServer + '/1/thumbnails/auto',
          chunkedUpload:       fileServer + '/1/chunked_upload',
          commitChunkedUpload: fileServer + '/1/commit_chunked_upload/auto',

          // File operations.
          fileopsCopy:         apiServer  + '/1/fileops/copy',
          fileopsCreateFolder: apiServer  + '/1/fileops/create_folder',
          fileopsDelete:       apiServer  + '/1/fileops/delete',
          fileopsMove:         apiServer  + '/1/fileops/move'
        };


        /**
         * OAuth 2.0 Signatures
         */

        function oauthHeader(options) {
          if (!options.headers) { options.headers = {}; }
          options.headers['Authorization'] = 'Bearer ' + oauth.access_token;
        }

        function oauthParams(options) {
          if (!options.params) { options.params = {}; }
          options.params.access_token = oauth.access_token;
        }


        /**
         * HTTP Request Helper
         */

        function request(config) {
          var deferred = $q.defer();

          oauthHeader(config);

          function success(response) {
            // console.log(config, response.data);
            deferred.resolve(response.data);
          }

          function failure(fault) {
            console.log(config, fault);
            deferred.reject(fault);
          }

          $http(config).then(success, failure);
          return deferred.promise;
        }


        /**
         * HTTP GET Helper
         */

        function GET(url, params) {
          return request({
            method: 'GET',
            url: url,
            params: params
          });
        }



        /**
         * HTTP POST Helper
         */

        function POST(url, data, params) {
          return request({
            method: 'POST',
            url: url,
            data: data,
            params: params
          });
        }


        /**
         * Configure the authorize popup window
         * Adapted from dropbox-js
         */

        function popupSize(popupWidth, popupHeight) {
          var x0, y0, width, height, popupLeft, popupTop;

          // Metrics for the current browser window.
          x0 = $window.screenX || $window.screenLeft
          y0 = $window.screenY || $window.screenTop
          width = $window.outerWidth || $document.documentElement.clientWidth
          height = $window.outerHeight || $document.documentElement.clientHeight

          // Computed popup window metrics.
          popupLeft = Math.round(x0) + (width - popupWidth) / 2
          popupTop = Math.round(y0) + (height - popupHeight) / 2.5
          if (popupLeft < x0) { popupLeft = x0 }
          if (popupTop < y0) { popupTop = y0 }

          return 'width=' + popupWidth + ',height=' + popupHeight + ',' +
                 'left=' + popupLeft + ',top=' + popupTop + ',' +
                 'dialog=yes,dependent=yes,scrollbars=yes,location=yes';
        }


        /**
         * Parse credentials from Dropbox authorize callback
         * Adapted from dropbox-js
         */

        function queryParamsFromUrl(url) {
          var match = /^[^?#]+(\?([^\#]*))?(\#(.*))?$/.exec(url);
          if (!match) { return {}; }

          var query = match[2] || ''
            , fragment = match[4] || ''
            , fragmentOffset = fragment.indexOf('?')
            , params = {}
            ;

          if (fragmentOffset !== -1) {
            fragment = fragment.substring(fragmentOffset + 1);
          }

          var kvp = query.split('&').concat(fragment.split('&'));
          kvp.forEach(function (kv) {
            var offset = kv.indexOf('=');
            if (offset === -1) { return; }
            params[decodeURIComponent(kv.substring(0, offset))] =
                   decodeURIComponent(kv.substring(offset + 1));
          });

          return params;
        }


        /**
         * Dropbox Service
         */

        return {


          urls: urls,                       // exposed for testing


          credentials: function () {
            return oauth;
          },


          authenticate: function () {
            var self = this
              , deferred = $q.defer()
              , authUrl = urls.authorize
                        + '?client_id=' + clientId
                     // + '&state=' +
                        + '&response_type=token'
                        + '&redirect_uri=' + redirectUri

            function listener(event) {
              var response = queryParamsFromUrl(event.data);

              if (response.access_denied) {
                deferred.reject(response);
              }

              else if (response.access_token) {
                oauth = self.oauth = response;
                deferred.resolve(oauth);
              }

              $window.removeEventListener('message', listener, false);
            }

            $window.addEventListener('message', listener, false);
            $window.open(authUrl,'_dropboxOauthSigninWindow', popupSize(700, 500));

            return deferred.promise;
          },


          isAuthenticated: function () {
            return (oauth.access_token) ? true : false
          },


          // signOut


          // signOff


          accountInfo: function () {
            return GET(urls.accountInfo);
          },


          userInfo: function () {
            return this.accountInfo();
          },


          readFile: function (path, params) {
            return request({
              method: 'GET',
              url: urls.getNote + path,
              params: params
            });
          },

          readImage: function (path, params) {
            return request({
              method: 'GET',
              url: urls.getFile + path,
              responseType: 'blob',
              params: params
            });
          },

          writeFile: function (path, content, params) {
            return request({
              method: 'POST',
              url: urls.putFile + path,
              data: content,
              headers: { 'Content-Type': undefined },
              transformRequest: angular.identity,
              params: params
            });
          },


          stat: function (path, params) {
            return GET(urls.metadata + path, params);
          },


          readdir: function (path, params) {
            var deferred = $q.defer();

            function success(stat) {
              var entries = stat.contents.map(function (entry) {
                return entry.path;
              });

              // console.log('readdir of ' + path, entries);
              deferred.resolve(entries);
            }

            function failure(fault) { deferred.reject(fault); }

            this.stat(path, params).then(success, failure);
            return deferred.promise;
          },


          metadata: function (path, params) {
            return this.stat(path, params);
          },


          // makeUrl


          history: function (path, params) {
            return GET(urls.revisions + path, params);
          },


          revisions: function (path, params) {
            return this.history(path, params);
          },


          thumbnailUrl: function (path, params) {
            return urls.thumbnails
                 + path
                 + '?format=jpeg&size='
                 + params.size
                 + '&access_token='
                 + oauth.access_token;
          },


          // readThumbnail


          revertFile: function (path, rev) {
            return POST(urls.restore + path, null, { rev: rev });
          },


          restore: function (path, rev) {
            return this.revertFile(path, rev);
          },


          findByName: function (path, pattern, params) {
            var params = params || {};
            params.query = pattern;

            return GET(urls.search + path, params);
          },


          search: function (path, pattern, params) {
            return this.findByName(path, pattern, params);
          },


          // makeCopyReference


          // copyRef


          // pullChanges


          // delta


          mkdir: function (path) {
            return POST(urls.fileopsCreateFolder, null, {
              root: 'auto',
              path: path
            });
          },


          remove: function (path) {
            return POST(urls.fileopsDelete, null, {
              root: 'auto',
              path: path
            });
          },


          unlink: function (path) {
            return this.remove(path);
          },


          delete: function (path) {
            return this.remove(path);
          },


          copy: function (from, to) {
            return POST(urls.fileopsCopy, null, {
              root: 'auto',
              to_path: to,
              from_path: from
            });
          },


          move: function (from, to) {
            return POST(urls.fileopsMove, null, {
              root: 'auto',
              to_path: to,
              from_path: from
            });
          },


          reset: function () {
            oauth = {};
          },


          setCredentials: function (credentials) {
            oauth = credentials;
          },


          // appHash


        };


      }];


  })
;'use strict';

angular.module('octobox', [
	'ngAnimate',
	'angularMoment',
	'angularFileUpload',
	'ngCookies',
	'ngResource',
	'ngDropdowns',
	'ngClipboard',
	'akoenig.deckgrid',
	'mgo-mousetrap',
	'pasvaz.bindonce',
	'ui.router',
	'ui.codemirror',
	'dropbox',
	'octobox.system',
	'octobox.directives',
	'octobox.filters',
	'octobox.user',
	'octobox.modal',
	'octobox.filemodal',
	'octobox.filedrop',
	'octobox.page',
	'octobox.alerts',
	'octobox.betastatus',
	'octobox.filters',
	'octobox.tags',
	'octobox.inbox',
	'octobox.recent',
	'octobox.collections',
	'octobox.stacks',
	'octobox.file',
	'octobox.link',
	'octobox.share',
	'octobox.delete',
	'octobox.dropbox'
]);

angular.module('octobox.system', []);
angular.module('octobox.directives', []);
angular.module('octobox.filters', []);
angular.module('octobox.user', []);
angular.module('octobox.modal', []);
angular.module('octobox.filemodal', []);
angular.module('octobox.filedrop', []);
angular.module('octobox.page', []);
angular.module('octobox.alerts', []);
angular.module('octobox.betastatus', []);
angular.module('octobox.filters', []);
angular.module('octobox.tags', []);
angular.module('octobox.inbox', []);
angular.module('octobox.recent', []);
angular.module('octobox.collections', []);
angular.module('octobox.stacks', []);
angular.module('octobox.file', []);
angular.module('octobox.link', []);
angular.module('octobox.share', []);
angular.module('octobox.delete', []);
angular.module('octobox.dropbox', []);
;'use strict';

//Setting up route
angular.module('octobox').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// For unmatched routes:
		$urlRouterProvider.otherwise('/');
		// states for my app
		$stateProvider
			// .state('all articles', {
			// 	url: '/articles',
			// 	templateUrl: 'views/articles/list.html'
			// })
			// .state('create article', {
			// 	url: '/articles/create',
			// 	templateUrl: 'views/articles/create.html'
			// })
			// .state('edit article', {
			// 	url: '/articles/:articleId/edit',
			// 	templateUrl: 'views/articles/edit.html'
			// })
			// .state('article by id', {
			// 	url: '/articles/:articleId',
			// 	templateUrl: 'views/articles/view.html'
			// })
			// Collections
			.state('collection by path', {
				url: '/collection/:path',
				templateUrl: 'views/content/collection/view.html'
			})
			// Stacks
			// Edit Stack
			.state('edit stack by path', {
				url: '/stack/:collection/:stack/edit',
				templateUrl: 'views/content/stack/edit.html'
			})
			.state('stack by path', {
				url: '/stack/:collection/:stack',
				templateUrl: 'views/content/stack/view.html'
			})
			// File
			// Edit File in inbox
			.state('edit inbox file by path', {
				url: '/file/:filename/edit',
				templateUrl: 'views/content/file/edit.html'
			})
			// Edit File in collection
			.state('edit collection file by path', {
				url: '/file/:collection/:filename/edit',
				templateUrl: 'views/content/file/edit.html'
			})
			// Edit File in stack
			.state('edit stack file by path', {
				url: '/file/:collection/:stack/:filename/edit',
				templateUrl: 'views/content/file/edit.html'
			})
			// File in inbox
			.state('inbox file by path', {
				url: '/file/:filename',
				templateUrl: 'views/content/file/view.html'
			})
			// File in collection
			.state('collection file by path', {
				url: '/file/:collection/:filename',
				templateUrl: 'views/content/file/view.html'
			})
			// File in stack
			.state('stack file by path', {
				url: '/file/:collection/:stack/:filename',
				templateUrl: 'views/content/file/view.html'
			})
			// Inbox
			.state('inbox', {
				url: '/inbox',
				templateUrl: 'views/content/inbox/view.html'
			})
			// Everything
			.state('recent', {
				url: '/recent',
				templateUrl: 'views/content/recent/view.html'
			})
			// Dropbox
			.state('dropbox auth', {
				url: '/callback',
				templateUrl: 'views/dropbox/auth.html'
			})
			// User
			.state('user details', {
				url: '/account',
				templateUrl: 'views/user/account.html'
			})
			// Tags
			.state('all tags', {
				url: '/tags',
				templateUrl: 'views/content/tag/list.html'
			})
			.state('create tag', {
				url: '/new/tag',
				templateUrl: 'views/content/tag/create.html'
			})
			.state('edit tag', {
				url: '/tag/:name/edit',
				templateUrl: 'views/content/tag/edit.html'
			})
			.state('tag by name', {
				url: '/tag/:name',
				templateUrl: 'views/content/tag/view.html'
			})
			// Home
			.state('home', {
				url: '/',
				templateUrl: 'views/index.html'
			});
	}
	// Whitelist dropbox URLs to prevent sending OPTIONS request.
]).config(['$sceDelegateProvider', function($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist(['self', 'https://api-content.dropbox.com/**', 'https://api.dropbox.com/**']);

}]).config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.headers.responseType = 'blob';
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	// set delete headers to accept a request body
	// $httpProvider.defaults.headers.delete = { 'Content-Type': 'application/json;charset=utf-8' };
	// $httpProvider.defaults.headers.remove = { 'Content-Type': 'application/json;charset=utf-8' };
}]).config(['$compileProvider', function($compileProvider) {
	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);

}]).config(['ngClipProvider', function(ngClipProvider) {
  ngClipProvider.setPath('lib/zeroclipboard/ZeroClipboard.swf');

}]).config(['$provide', function ($provide) { // fixes flash-on-load for animations
	$provide.decorator('ngShowDirective', ['$delegate', '$animate', function(
			$delegate, $animate){

			function toBoolean(value) {
				if (typeof value === 'function') {
					value = true;
				} else if (value && value.length !== 0) {
					var v = angular.lowercase('' + value);
					value = !(v == 'f' || v == '0' || v == 'false' || v == 'no' || v == 'n' || v == '[]');
				} else {
					value = false;
				}
				return value;
			}

			$delegate[0].compile = function() {
				return function(scope, element, attr){
					scope.$watch(attr.ngShow, function ngShowWatchAction(value, oldVal){
						if ((value === oldVal) && toBoolean(value) === false) {
							element.addClass('ng-hide');
							return;
						}
						$animate[toBoolean(value) ? 'removeClass' : 'addClass'](element, 'ng-hide');
					});
				};
			};
			return $delegate;
		}]);
}]);


//Setting HTML5 Location Mode
// angular.module('octobox').config(['$locationProvider',
//   function($locationProvider) {
//     $locationProvider.html5Mode(true);
//     $locationProvider.hashPrefix('!');
//   }
// ]);
;'use strict';

angular.element(document).ready(function() {
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#';

    //Then init the app
    angular.bootstrap(document, ['octobox']);
});
;'use strict';

angular.module('octobox.alerts').controller('AlertsManagerController', ['$scope', 'AlertsManager', function ($scope, AlertsManager) {

    $scope.alerts = AlertsManager.alerts;

    $scope.reset = function() {
        AlertsManager.clearAlerts();
    };
  }
]);
;'use strict';

angular.module('octobox.betastatus').controller('BetaStatusController', ['_', '$scope', 'BetaStatus', 'Global', 'User', function (_, $scope, BetaStatus, Global, User) {
  $scope.global = Global;

  BetaStatus.get(function (data) {
    $scope.betaStatus = data;

    // if user already read the status then default the count to 0
    if ($scope.global.user.betaReadVersion && $scope.betaStatus.version === $scope.global.user.betaReadVersion) {
      $scope.betaStatus.changeCount = {
        'true': '0'
      };
    } else {
      // Count changes by going through each feature and checking for 'changed' attribute being true
      $scope.betaStatus.changeCount = _.countBy(data.features, function (feature) {
            return feature.changed !== undefined && feature.changed === true;
      });
    }
  });

  $scope.statusClass = function (status) {
    return 'status-' + Math.round(status/20);
  };

  // Show beta modal and update user read status if necessary
  $scope.showBetaModal = function () {
    $scope.showBetaStatus = !$scope.showBetaStatus;

    // if status is unread
    if ($scope.global.user.betaReadVersion === undefined || $scope.betaStatus.version !== $scope.global.user.betaReadVersion) {
      var user = new User({
        '_id': $scope.global.user._id,
        'email': $scope.global.user.email
      });
      user.betaReadVersion = $scope.betaStatus.version;
      Global.user.betaReadVersion = $scope.betaStatus.version;
      user.$updateBetaStatus(function() {
        // success
      }, function() {
        // fail
      });
    }
  };

  $scope.toggleBetaStatus = function (event) {
    var element = angular.element(document.querySelector( '#beta-status-list' ));
    var isChild = element.find(event.target.tagName).length > 0;
    var isSelf = element[0] == event.target;
    var isIgnored = isChild || isSelf;
    if (!isIgnored) {
      // on close toggle show
      $scope.showBetaStatus = !$scope.showBetaStatus;
      // and set count to 0
      if ($scope.betaStatus.changeCount.true !== undefined && $scope.betaStatus.changeCount.true !== '0')
        $scope.betaStatus.changeCount = { 'true': '0' };

      $scope.$apply();
    }
  };

  }
]);
;'use strict';

angular.module('octobox.delete').controller('DeleteController', ['$scope', '$rootScope', '$location', 'AlertsManager', 'Modal', 'FileModal', 'File', 'Link', 'Stacks', 'Collections', 'Tags', 'Global', function ($scope, $rootScope, $location, AlertsManager, Modal, FileModal, File, Link, Stacks, Collections, Tags, Global) {
  $scope.modal = Modal;
  $scope.filemodal = FileModal;

  $scope.initialize = function (item) {
    $scope.item = item;
  };

  $scope.deleteItem = function (item, kind) {
    if (kind === 'tag') {
      var tag = new Tags(item);
      tag.user = Global.user._id;
      $scope.modal.close();
      tag.$remove(function () {
        $rootScope.$emit('refreshSidebar');
        $location.path('/');
        AlertsManager.addAlert('Tag \'' + tag.name + '\' removed', 'alert-success', 1500);
        return;
      });
    } else {
      var filePath,
          collectionPath,
          stackPath,
          parsedPath = item.path.match(/^\/(.+)/),
          pathElts = parsedPath[1].split('\/');

      // if inbox
      if (pathElts.length === 1){
        filePath = pathElts[0];
        collectionPath = undefined;
        stackPath = undefined;
      }
      // if collection
      if (pathElts.length === 2){
        filePath = pathElts[1];
        collectionPath = pathElts[0];
        stackPath = undefined;
      }
      // if stack
      if (pathElts.length === 3){
        filePath = pathElts[2];
        stackPath = pathElts[1];
        collectionPath = pathElts[0];
      }
      if (kind === 'link') {
        var link = new Link({
          url: item.url,
          user: Global.user._id
        });
        $scope.modal.close();
        $scope.filemodal.close();
        link.$delete({
          linkname: filePath,
          collection: collectionPath ? collectionPath : null,
          stack: stackPath ? stackPath : null,
        }, function() {
          AlertsManager.addAlert('Item deleted successfully', 'alert-success', 2500);
          $rootScope.$emit('refreshContent');
        });
      } else if(item.kind === 'stack'){
        $scope.deleting = true;
        var stack = new Stacks(item);
        stack.$delete({
          collection: collectionPath,
          stack: filePath,
        }, function () {
          $scope.modal.close();
          AlertsManager.addAlert('Stack deleted successfully', 'alert-success', 2500);
          $location.path('/collection/' + collectionPath);
          $rootScope.$emit('refreshContent');
        });
      } else if(item.kind === 'collection'){
        $scope.deleting = true;
        var collection = new Collections(item);
        collection.$delete({
          path: parsedPath[1],
        }, function () {
          $scope.modal.close();
          AlertsManager.addAlert('Collection deleted successfully', 'alert-success', 2500);
          $location.path('/');
          $rootScope.$emit('refreshSidebar');
        });
      } else {
        var file = new File({
          path: item.path,
          user: Global.user._id
        });

        $scope.modal.close();
        $scope.filemodal.close();
        file.$delete({
          filename: filePath,
          collection: collectionPath,
          stack: stackPath,
        }, function() {
          AlertsManager.addAlert('Item deleted successfully', 'alert-success', 2500);
          $rootScope.$emit('refreshContent');
        });
      }
    }
  };
}]);
;'use strict';

angular.module('octobox.filedrop').controller('FileDropController', [ '_', '$scope', '$rootScope', '$http', '$timeout', '$upload', 'Global', 'File', 'Modal', function(_, $scope, $rootScope, $http, $timeout, $upload, Global, File, Modal) {

	$scope.activeView = Global.activeView;
  $scope.user = Global.user;
  $scope.modal = Modal;

  $scope.fileReaderSupported = window.FileReader !== null;

	$scope.hasUploader = function(index) {
		return $scope.upload[index] !== null;
	};
	$scope.abort = function(index, progress) {
		if (progress === 100)
			return;

		$scope.upload[index].abort();
		$scope.upload[index] = null;
	};
	$scope.onFileSelect = function($files) {
		$scope.selectedFiles = [];
		$scope.progress = [];
		$scope.finished = [];
		if ($scope.upload && $scope.upload.length > 0) {
			for (var i = 0; i < $scope.upload.length; i++) {
				if ($scope.upload[i] !== null) {
					$scope.upload[i].abort();
				}
			}
		}
		$scope.upload = [];
		$scope.uploadResult = [];
		$scope.selectedFiles = $files;
		$scope.dataUrls = [];

		for ( var j = 0; j < $files.length; j++) {
			var $file = $files[j];
			$scope.finished.push(false);
			if (window.FileReader && $file.type.indexOf('image') > -1) {
				var fileReader = new FileReader();
				fileReader.readAsDataURL($files[j]);
				var loadFile = (function(fileReader, index) { // jshint ignore:line
					fileReader.onload = function(e) {
						$timeout(function() {
							$scope.dataUrls[index] = e.target.result;
						});
					};
				})(fileReader, j); // jshint ignore:line
			}
			$scope.progress[j] = -1;
      var finishedCount = 0;
      // start upload immediately
      $scope.start(j, function (index) {
				// set finished for finished file to true
				$scope.finished[index] = true;

				// count how many files finished, then refresh view and
				// close modal once all files are uploaded
        if (finishedCount === $files.length - 1) {
          $scope.modal.close();
        }
        finishedCount++;
      }); // jshint ignore:line
		}
	};

	$scope.start = function(index, callback) {
		$scope.progress[index] = 0;
		$scope.errorMsg = null;
    var uploadPath = $scope.activeView.path + '/';
    if ($scope.activeView.path === '/')
      uploadPath = $scope.activeView.path;

		var fileReader = new FileReader();
    fileReader.onload = function(e) {
		  $scope.upload[index] = $upload.http({
		    url: 'https://api-content.dropbox.com/1/files_put/sandbox' + uploadPath + $scope.selectedFiles[index].name + '?overwrite=false',
				method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + $scope.user.dropbox.token,
          'Content-Type': $scope.selectedFiles[index].type,
          // 'Content-Length': $scope.selectedFiles[index].size
          },
				data: e.target.result
      }).progress(function(evt) {
          // Math.min is to fix IE which reports 200% sometimes
          $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(response) {
          // on success, add file to octobox
          var filePath,
              collectionPath,
              stackPath,
              lowercasePath = response.path.toLowerCase(),
              parsedPath = lowercasePath.match(/^\/(.+)/),
              pathElts = parsedPath[1].split('\/');
          // if inbox
          if (pathElts.length === 1){
            filePath = pathElts[0];
            collectionPath = undefined;
            stackPath = undefined;
          }
          // if collection
          if (pathElts.length === 2){
            filePath = pathElts[1];
            collectionPath = pathElts[0];
            stackPath = undefined;
          }
          // if stack
          if (pathElts.length === 3){
            filePath = pathElts[2];
            stackPath = pathElts[1];
            collectionPath = pathElts[0];
          }
          var file = new File({
            name: filePath,
            path: lowercasePath,
            size: response.size,
            mimeType: response.mime_type,
            modified: response.modified,
            user: $scope.user._id
          });
          file.$create({
            filename: filePath,
            collection: collectionPath,
            stack: stackPath
          }, function () {
            callback(index);
          });
      }).error(function(response) {
          if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
      });
    };
	  fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
	};
	$scope.$on('$destroy', function () {
		$rootScope.$emit('refreshView');
	});
}]);
;'use strict';

angular.module('octobox.filemodal').controller('FileModalController', ['$scope', '$element', 'FileModal', function ($scope, $element, FileModal) {
    $scope.filemodal = FileModal;

    $scope.editingTags = false;

    // close modal on view change
    $scope.$on('$destroy', function() {
      $scope.filemodal.close();
    });

  }
]);
;'use strict';

angular.module('octobox.filters').controller('FiltersController', ['$scope', '$rootScope', '$location', '$window', '_', 'Global', 'Tags', 'Collections', 'Stacks', 'Modal', function ($scope, $rootScope, $location, $window, _, Global, Tags, Collections, Stacks, Modal) {
    $scope.global = Global;
    $scope.modal = Modal;

    $scope.toggleSidebar = function () {
      $rootScope.foldSidebar = !$rootScope.foldSidebar;
    };

    // sort date
    $scope.global.selectSort = [
      {
        name: 'Modified',
        sortby: 'modified',
        reverse: true
      },
      {
        name: 'Created',
        sortby: 'created',
        reverse: true
      },
      {
        name: 'Name A-Z',
        sortby: 'path',
        reverse: false
      },
      {
        name: 'Name Z-A',
        sortby: 'path',
        reverse: true
      },
    ];
    $scope.global.activeSort = $scope.global.selectSort[0];

    // show items
    // $scope.global.selectFilter = [
    //   {
    //     name: 'All',
    //     show: 'all'
    //   },
    //   {
    //     name: 'Stacks',
    //     show: 'stack'
    //   },
    //   {
    //     name: 'Images',
    //     show: 'image'
    //   },
    //   {
    //     name: 'GIFs',
    //     show: 'gif'
    //   },
    //   {
    //     name: 'Notes',
    //     show: 'note'
    //   },
    //   {
    //     name: 'Links',
    //     show: 'link'
    //   },
    //   {
    //     name: 'Other',
    //     show: 'other'
    //   },
    // ];
    // // $scope.global.activeFilter = $scope.global.selectFilter[0];
    $scope.$watch('global.activeView.kind', function() {
      if ($scope.global.activeView.kind === 'stack') {
        $scope.activeMoreMenu = $scope.stackMoreMenu;
        $scope.moreMenuDisabled = false;
      } else if ($scope.global.activeView.kind === 'collection') {
        $scope.activeMoreMenu = $scope.collectionMoreMenu;
        $scope.moreMenuDisabled = false;
      } else if ($scope.global.activeView.kind === 'tag') {
        $scope.activeMoreMenu = $scope.tagMoreMenu;
        $scope.moreMenuDisabled = false;
      } else {
        $scope.moreMenuDisabled = true;
      }
    });

    $scope.collectionMoreMenu = [
        {
            text: 'Share',
            iconCls: 'more-share'
        },
        {
            divider: true
        },
        {
            text: 'Delete',
            iconCls: 'more-delete'
        },
    ];

    $scope.stackMoreMenu = [
        {
            text: 'Share',
            iconCls: 'more-share'
        },
        {
            text: 'Move',
            iconCls: 'more-move'
        },
        {
            divider: true
        },
        {
            text: 'Delete',
            iconCls: 'more-delete'
        },
    ];
    $scope.tagMoreMenu = [
        {
            text: 'Delete',
            iconCls: 'more-delete'
        },
    ];


    $scope.filtersMoreMenuSelected = {}; // Must be an object

    $scope.editContent = function (selected) {
      if (selected.iconCls === 'more-share') {
        $scope.modal.open('/views/directives/share.html', $scope.global.activeView, 'narrow');
      } else if (selected.iconCls === 'more-delete') {
        $scope.modal.open('/views/directives/delete.html', $scope.global.activeView);
      } else if (selected.iconCls === 'more-move') {
        $scope.modal.open('/views/directives/moveStack.html', $scope.global.activeView);
      }
    };

}]);
;'use strict';

angular.module('octobox.system').controller('HeaderController', ['$scope', '$rootScope', '$location', '$window', '_', 'Global', 'Tags', 'Collections', 'Stacks', 'Modal', function ($scope, $rootScope, $location, $window, _, Global, Tags, Collections, Stacks, Modal) {
    $scope.global = Global;
    $scope.activeView = Global.activeView;
    $scope.modal = Modal;
    $scope.scroll = 0;

    $scope.toggleClass = function () {
      $rootScope.headerDominates = true;
      $scope.$apply();
    };

    // make local of activeView when it changes
    $scope.$watch('global.activeView.name', function() {
        $scope.activeView = Global.activeView;
        // Add Dropdown with dynamic name
        if ($scope.activeView.kind === 'tag'){
            $scope.addMenu = [
                {
                    text: 'Add to Inbox'
                },
                {
                    divider: true
                },
                {
                    text: 'Note & To-do',
                    iconCls: 'add-note'
                },
                {
                    divider: true
                },
                {
                    text: 'Site Link',
                    iconCls: 'add-link'
                },
                {
                    divider: true
                },
                {
                    text: 'Add Files',
                    iconCls: 'add-files'
                }
            ];
        } else if ($scope.activeView.name === 'Recent Items' || $scope.activeView.name === 'Inbox') {
            $scope.addMenu = [
                {
                    text: 'Add to Inbox'
                },
                {
                    divider: true
                },
                {
                    text: 'Note & To-do',
                    iconCls: 'add-note'
                },
                {
                    divider: true
                },
                {
                    text: 'Site Link',
                    iconCls: 'add-link'
                },
                {
                    divider: true
                },
                {
                    text: 'Add Files',
                    iconCls: 'add-files'
                }
            ];
        } else if ($scope.activeView.kind === 'stack'){
            $scope.addMenu = [
                {
                    text: 'Add to ' + $scope.activeView.name
                },
                {
                    divider: true
                },
                {
                    text: 'Note & To-do',
                    iconCls: 'add-note'
                },
                {
                    divider: true
                },
                {
                    text: 'Site Link',
                    iconCls: 'add-link'
                },
                {
                    divider: true
                },
                {
                    text: 'Add Files',
                    iconCls: 'add-files'
                },
            ];
        } else {
            $scope.addMenu = [
                {
                    text: 'Add to ' + $scope.activeView.name
                },
                {
                    divider: true
                },
                {
                    text: 'Note & To-do',
                    iconCls: 'add-note'
                },
                {
                    divider: true
                },
                {
                    text: 'Site Link',
                    iconCls: 'add-link'
                },
                {
                    divider: true
                },
                {
                    text: 'Add Files',
                    iconCls: 'add-files'
                },
                {
                    divider: true
                },
                {
                    text: 'Empty Stack',
                    iconCls: 'add-stack'
                },
            ];
        }
    });


    $scope.addMenuSelected = {}; // Must be an object

    $scope.addContent = function (selected) {
      var destinationName = $scope.activeView.name;
      if ($scope.activeView.path === '/')
        destinationName = 'Inbox';

      if (selected.iconCls === 'add-note') {
        $scope.modal.open('/views/directives/add/note.html');
      } else if (selected.iconCls === 'add-link') {
        $scope.modal.open('/views/directives/add/link.html');
      } else if (selected.iconCls === 'add-stack') {
        $scope.modal.open('/views/directives/add/stack.html');
      } else {
        $scope.modal.open('/views/directives/add/files.html', destinationName);
      }
    };

    // scroll to top of page
    $scope.gotoTop = function (){
        $window.scrollTo(-65, 0);
      };

    // handle renaming the item
    // passes result to directive, but does the API work here
    $scope.renameItem = function(newName, cb) {
        var kind = $scope.activeView.kind; // 'collection', 'stack', 'tag'
        // if name wasnt changed or is empty, skip saving
        if (!newName || $scope.activeView.name === newName)
            return cb(undefined, true); // err - undefined; noChange - true

        //
        // Rename tag
        if (kind === 'tag'){
            var tag = new Tags($scope.activeView);
            tag = _.extend(tag, {
                name: newName
            });
            tag.$update(function() {
                // emit tag refresh
                $rootScope.$emit('refreshTags');
                return cb();
            }, function() { // pass error if tag with new name already exists (handled in directive)
                return cb(true);
            });
        } else
        //
        // Rename collection
        if (kind === 'collection'){
            var collection = new Collections($scope.activeView);
            // save old path
            collection.oldPath = collection.path;
            // push new name and path
            collection = _.extend(collection, {
                name: newName,
                path: '/' + newName.toLowerCase()
            });
            // if new name is the same lower case, update name only
            if (newName.toLowerCase() === $scope.activeView.name.toLowerCase()){
                collection.$update({
                    path: collection.path.substring(1) // skip slash
                }, function() {
                    return cb();
                }, function(err) { // pass error if collection exists (or something else is wrong?)
                    return cb(err);
                });
            } else {
                collection.$move(function() {
                    return cb();
                }, function(err) { // pass error if collection exists (or something else is wrong?)
                    return cb(err);
                });
            }

        } else

        //
        // Rename stack
        if (kind === 'stack'){
            // initialize new path
            var newPath = newName.toLowerCase();
            // check if new name has any slashes
            if (/\//g.test(newPath)) {
                // replace all slashes with colons, just like dropbox does
                newPath = newPath.replace(/\//g, ':');
            }
            var stack = new Stacks($scope.activeView);
            // save old path
            stack.oldPath = stack.path;
            // get root from old path for constructing new one
            var pathRoot = stack.oldPath.match(/^(\/[^[\/]+\/)/);
            // append root to newPath
            newPath = pathRoot[1] + newPath;
            // split newPath by slashes so we can pass collection & stack to $resource
            var reqPath = stack.oldPath.split('/');
            // push new name and path
            stack = _.extend(stack, {
                name: newName,
                path: newPath,
                user: Global.user._id
            });
            // if new name is the same lower case, update name only
            if (newName.toLowerCase() === $scope.activeView.name.toLowerCase()){
                // console.log('capitalize');
                stack.$update({
                    collection: reqPath[1],
                    stack: reqPath[2]
                }, function() {
                    return cb(undefined, undefined, reqPath[1]);
                }, function(err) { // pass error if collection exists (or something else is wrong?)
                    return cb(err);
                });
            } else {
                stack.$move({
                    collection: reqPath[1],
                    stack: reqPath[2]
                }, function() {
                    return cb(undefined, undefined, reqPath[1]);
                }, function(err) { // pass error if collection exists (or something else is wrong?)
                    return cb(err);
                });
            }
        }
    };

    // handle Favourites remotely
    $scope.toggleFavourite = function(item) {
      if (item.isFavourite) {
        $rootScope.$emit('removeFavourite', item);
      } else {
        $rootScope.$emit('addFavourite', item);
      }
    };

    // extract and go to parent route
    $scope.backOrRoot = function(path) {
      if ($scope.activeView.tags !== undefined) {
        var parsedPath = path.match(/^\/(.+)/);
        var pathElts = parsedPath[1].split('\/');
        // if inbox
        if (pathElts.length === 1)
            $location.path('/inbox');
        // if collection
        if (pathElts.length === 2)
            $location.path('/collection/' + pathElts[0]);
        // if stack
        if (pathElts.length === 3)
            $location.path('/stack/' + pathElts[0] + '/' + pathElts[1]);
      } else {
        $location.path('/inbox');
      }

    };
  }
]);
;'use strict';

angular.module('octobox.system').controller('IndexController', ['$scope', '$location', '$rootScope', 'Global', 'DropboxSync', function ($scope, $location, $rootScope, Global, DropboxSync) {
  $scope.global = Global;
  if (!$scope.global.dropboxAuthorized)
    $scope.authorizedTemplate = 'views/dropbox/needauth.html';
  else
    $location.path('/inbox');


  // Refresh Sidebar Data on Event
  $rootScope.$on('syncContent', function() {
    DropboxSync.sync();
  });

}]);
;'use strict';

angular.module('octobox.system').controller('MainController', ['$scope', 'Global', function ($scope, Global) {
  $scope.global = Global;

}]);
;'use strict';

angular.module('octobox.modal').controller('ModalController', ['$scope', '$element', 'Modal', function ($scope, $element, Modal) {
    $scope.modal = Modal;

    // close modal on view change
    $scope.$on('$destroy', function() {
      $scope.modal.close();
    });
    
    // Close with ESC - works only once :<
    // $element.bind("keydown keypress", function (event) {
    //   if(event.which === 27) {
    //     $scope.$apply(function (){
    //       $scope.$eval($scope.modal.close());
    //     });
    //     event.preventDefault();
    //   }
    // });
}]);
;'use strict';

angular.module('octobox.page').controller('TitleController', ['$scope', 'Page', function ($scope, Page) {
  $scope.Page = Page;
}]);
;'use strict';

angular.module('octobox.share').controller('ShareController', ['$scope', '$window', 'AlertsManager', 'File', function ($scope, $window, AlertsManager, File) {
  $scope.initialize = function (item) {
    $scope.item = item;
    $scope.getUrl(item);

    $scope.selectedSocial = 't';
    $scope.shareMessage = $scope.item.name + ' via @OctoboxApp: ...';
  };

  // copy to clipboard on button click
  $scope.copyPublicUrl = function (url) {
    return url;
  };
  $scope.clickCopyUrl = function () {
    AlertsManager.addAlert('URL copied successfully', 'alert-success', 1500);
    return;
  };

  // get url from the server
  $scope.getUrl = function (item) {
    // split path and generate params for request
    var pathElts = item.path.split('/');
    var collectionName, stackName, fileName;
    if (pathElts.length === 2){ // inbox
      fileName = pathElts[1];
    }
    if (pathElts.length === 3){ // collection
      collectionName = pathElts[1];
      fileName = pathElts[2];
    }
    if (pathElts.length === 4){ // stack
      collectionName = pathElts[1];
      stackName = pathElts[2];
      fileName = pathElts[3];
    }

    File.shareUrl({
      filename: fileName,
      collection: collectionName,
      stack: stackName
    }, function(data) {
      $scope.item.shareUrl = data.url;
      $scope.shareMessage = $scope.item.name + ' via @OctoboxApp: ' +  $scope.item.shareUrl;
    });
  };

  $scope.clickShare = function () {
    $scope.socialMessage = $scope.shareMessage.split(' ').join('%20'); // replace spaces for friendly url
    $scope.socialMessage = $scope.socialMessage.split('&').join('and'); // replace & for safe urls

    if ($scope.selectedSocial === 't')
      $window.open('https://twitter.com/intent/tweet?text=' + $scope.socialMessage);
    else
      $window.open('https://facebook.com/sharer/sharer.php?u=' + $scope.item.shareUrl + '&t=' + $scope.socialMessage);
  };
}]);
;'use strict';

angular.module('octobox.system').controller('SidebarController', ['$scope', '$rootScope', '$location', 'Global', 'Modal', 'FileModal', function ($scope, $rootScope, $location, Global, Modal, FileModal) {

    // $scope.global = Global;
    $scope.modal = Modal;
    $scope.filemodal = FileModal;

    $scope.isCollapsed = false;

    $scope.toggleClass = function () {
      $rootScope.headerDominates = false;
      $scope.$apply();
    };

    // user Dropdown
    $scope.userMenu = [
        // {
        //     text: 'Other account stuff',
        //     href: ''
        // },
        {
            text: 'Account Settings',
            iconCls: 'account-settings'
        },
        {
            divider: true
        },
        {
            text: 'Sign Out',
            href: '/signout'
        }
    ];
    $scope.userMenuSelected = {}; // Must be an object

    // more Dropdown
    $scope.moreMenu = [
        // {
        //     text: 'Browser Extension',
        //     href: ''
        // },
        // {
        //     text: 'How to Save',
        //     href: ''
        // },
        // {
        //     text: 'Help',
        //     href: ''
        // },
        // {
        //     text: 'Guides',
        //     href: ''
        // },
        // {
        //     divider: true
        // },
        {
            text: 'About Octobox',
            href: 'http://useoctobox.com/'
        },
        {
            text: 'Twitter',
            href: 'http://twitter.com/octoboxapp'
        }
    ];
    $scope.moreMenuSelected = {}; // Must be an object

    $scope.openSettings = function (selected) {
      if (selected.iconCls === 'account-settings') {
        $scope.modal.open('/views/user/settings.html', $scope.global.activeView, 'wide');
      }
    };

    $scope.isActive = function(path) {
        if ($location.path().substr(0, path.length).toLowerCase() === path.toLowerCase())
            return true;
        else
            return false;
    };

}]);
;'use strict';

angular.module('octobox.user').controller('UserController', ['$scope', '$rootScope', '$stateParams', '$location', '$window', 'Dropbox', 'Global', 'User', 'DropboxAuth', 'Modal', 'FileModal', 'AlertsManager', function ($scope, $rootScope, $stateParams, $location, $window, Dropbox, Global, User, DropboxAuth, Modal, FileModal, AlertsManager) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Link to collection & stack
	$scope.goToCollection = function(path) {
		$location.path('/collection' + path);
	};
	$scope.goToStack = function(path) {
		$location.path('/stack' + path);
	};
	$scope.isActive = function(path) {
		if ($location.path().substr(0, path.length).toLowerCase() === path.toLowerCase())
			return true;
		else
			return false;
	};

	// handle renaming the item
	// passes result to directive, but does the API work here
	$scope.update = function(newName, cb) {
			// if name wasnt changed or is empty, skip saving
			if (!newName || $scope.user.name === newName)
					return cb(undefined, true); // err - undefined; noChange - true

			var user = $scope.user;
			user.name = newName;
			user.$update(function() {
					Global.user = user;
					return cb();
			}, function() { // pass error if tag with new name already exists (handled in directive)
					return cb(true);
			});
	};

	$scope.findOne = function() {
		User.get({
			// overrides the request URL from _id to simply 'me' - shortcut API
			userId: 'me'
		}, function(user) {
			$scope.user = user;
			Global.user = user;
		});
	};

	$scope.findOneModal = function() {
		User.get({
			userId: 'me'
		}, function(user) {
			$scope.user = user;

    	Dropbox.accountInfo().then(function (response) {
				$scope.accountInfo = response;
				$scope.accountInfo.spaceLeft = ((response.quota_info.quota - response.quota_info.normal) / 1000000000).toFixed(2);
			});
		});
	};

	$scope.editAvatar = function () {
		$window.open('https://en.gravatar.com/emails/');
	};

	$scope.toggleResetPassword = function () {
		if ($scope.showReset === undefined)
			$scope.showReset = false;
		$scope.showReset = !$scope.showReset;
	};

	$scope.resetPassword = function () {
		$scope.showReset = !$scope.showReset;
		User.reset({
			email: $scope.user.email
		}, function () {
			AlertsManager.addAlert('Email with a reset link was sent. Check your inbox', 'alert-success', 3000);
			$scope.modal.close();
		});
	};

	$scope.toggleRevokeConfirm = function () {
		if ($scope.showRevoke === undefined)
			$scope.showRevoke = false;
		$scope.showRevoke = !$scope.showRevoke;
	};


	// Revoke Access through the API
	$scope.revoke = function() {
		$scope.showRevoke = !$scope.showRevoke;
		DropboxAuth.revoke(function () {
			$scope.modal.close();
		});
	};

	/*
	 * Watchers
	 */
	// Refresh Sidebar Data on Event
	var refreshContent = $rootScope.$on('refreshContent', function() {
		$scope.findOne();
	});
	// Refresh Sidebar Data on Event
	var refreshSidebar = $rootScope.$on('refreshSidebar', function() {
		$scope.findOne();
	});
	// deregister watchers when scope inactive
	$scope.$on('$destroy', function () {
		refreshSidebar();
		refreshContent();
	});

}]);
;'use strict';

//Service for alerts that appear in the header
angular.module('octobox.alerts').factory('AlertsManager', ['$timeout', function($timeout) {
  var obj = {};

  obj.alerts = {};
  obj.addAlert = function (message, type, duration) {
    obj.alerts[type] = []; // obj.alerts[type] ||
    obj.alerts[type].push(message);
    // clear notification after 5s.
    var timeout = duration || 4500;
    $timeout(obj.clearAlerts, timeout);
  };
  obj.clearAlerts = function () {
    for(var x in obj.alerts){
      delete obj.alerts[x];
    }
  };
  return obj;
}]);
;'use strict';

//Service for beta status that appear in the header
angular.module('octobox.betastatus').factory('BetaStatus', ['$resource', function($resource) {
  var BetaStatus = $resource('betaStatus.json', {});

  return BetaStatus;
}]);
;'use strict';

//Service for alerts that appear in the header
angular.module('octobox.filemodal').factory('FileModal', ['$rootScope', function($rootScope) {
  var FileModal = {};

  FileModal.isOpen = function() {
    return !!this.item;
  };

  FileModal.open = function(item) {
    $rootScope.filemodalOpen = true;
    if (item !== undefined)
      this.item = item;
    return this.item;
  };

  FileModal.close = function() {
    $rootScope.filemodalOpen = false;
    // this.item.isFavourite = true;
    // console.log(this.item);
    this.item = undefined;
    return this.item;
  };

  return FileModal;
}]);
;'use strict';

//Global service for global variables
angular.module('octobox.system').factory('Global', [ 'Dropbox',
  function(Dropbox) {
    // Set default variables
    var dropboxAuthValue = false;
    var _this = this;
    var isWindows = false;

    // if user already authorized, set global
    if (window.user !== undefined && window.user.dropbox.token !== undefined && window.user.dropbox.token !== '') {
      dropboxAuthValue = true;
      // initialize Dropbox with token from user
      Dropbox.setCredentials({ access_token: window.user.dropbox.token });
    }
    if (navigator.appVersion.indexOf('Win')!=-1)
      isWindows = true;

    _this._data = {
      user: window.user,
      authenticated: !! window.user,
      // check if user is authorised with Dropbox
      dropboxAuthorized: dropboxAuthValue,
      // check if user synced
      sync: false,
      bodyClass: '',
      isWindows: isWindows,
      activeView: {
        name: 'Inbox',
        isFavourite: undefined
      }
    };

    return _this._data;
  }
]);

// Initialize Lodash
angular.module('octobox.system').factory('_', ['$window',
  function($window) {
    // place lodash include before angular
    return $window._;
  }
]);
;'use strict';

//Service for alerts that appear in the header
angular.module('octobox.modal').factory('Modal', function() {
  var Modal = {};

  Modal.isOpen = function() {
    return !!this.src;
  };

  Modal.open = function(src, item, type) {
    this.src = src;
    if (item !== undefined)
      this.item = item;
    if (type !== undefined)
      this.type = type;
    return this.src;
  };

  Modal.close = function() {
    this.src = '';
    this.item = undefined;
    this.type = undefined;
    return this.src;
  };

  return Modal;
});
;'use strict';

// Simple service for setting page Title
angular.module('octobox.page').factory('Page', function() {
   var title = 'Inbox';
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle; }
   };
});;'use strict';

//User service for editing user account details
angular.module('octobox.user').factory('User', ['$resource', function($resource) {
    return $resource('api/users/:userId/:postfix', {
        userId: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
        updateBetaStatus: {
            method: 'PUT',
            params: {
              postfix: 'betastatus'
            }
        },
        reset: {
          method: 'POST',
          url: 'forgot'
        }
    });
}]);
;'use strict';

angular.module('octobox.collections').controller('CollectionsController', ['$window', '$scope', '$rootScope', '$document', '$stateParams', '$location', 'Dropbox', '_', 'AlertsManager',  'Global', 'Page', 'Collections', 'Modal', 'FileModal', 'Link', 'File', 'Stacks', function ($window, $scope, $rootScope, $document, $stateParams, $location, Dropbox, _, AlertsManager, Global, Page, Collections, Modal, FileModal, Link, File, Stacks) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Filters out extension from name
	var rgExtension = /.*\.([^.]+)$/;
	// filters out root path from full path
	var rgRoot = /^(.*[\/])/; // (.+)[\/].+$

	// Non API Methods
	// Link to stack from thumbnail
	$scope.goTo = function(stackPath) {
		$location.path('/stack' + stackPath);
	};

	$scope.selectItem = function (itemPath, oldPath) {
		$scope.selectedPath = itemPath;
		$scope.currentPath = oldPath.match(rgRoot);
	};

	// Compile string of values to compare
	$scope.compileCompare = function (item) {
		var itemString = item.modified;
		return itemString + '|';
	};

	$scope.moveItem = function (scopeItem) {
		if ($scope.selectedPath === undefined) {
			AlertsManager.addAlert('Select a destination to move an item', 'alert-error', 1500);
			return;
		}
		if ($scope.selectedPath === 'Inbox') // revert inbox to server-friendly path
			$scope.selectedPath = '/';
		if ($scope.selectedPath === $scope.currentPath[1]) {
			AlertsManager.addAlert('That\'s where the item is, dummy', 'alert-error', 2500);
			return;
		}
		var oldPath = scopeItem.path;
		var filename = oldPath.match(/([^\/]+)$/);
		var newPath = $scope.selectedPath + '/' + filename[1];
		if ($scope.selectedPath === '/') {
			newPath = $scope.selectedPath + filename[1];
		}
		var filePath,
				collectionPath,
				stackPath,
				parsedPath = oldPath.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');

		// if inbox
		if (pathElts.length === 1){
			filePath = pathElts[0];
			collectionPath = undefined;
			stackPath = undefined;
		}
		// if collection
		if (pathElts.length === 2){
			filePath = pathElts[1];
			collectionPath = pathElts[0];
			stackPath = undefined;
		}
		// if stack
		if (pathElts.length === 3){
			filePath = pathElts[2];
			stackPath = pathElts[1];
			collectionPath = pathElts[0];
		}

		if (scopeItem.type === 'link'){
			var link = new Link({
				url: scopeItem.url,
				parentPath: $scope.selectedPath,
				user: Global.user._id
			});
			$scope.modal.close();
			$scope.filemodal.close();
			link.$move({
				linkname: filePath,
				collection: collectionPath ? collectionPath : null,
				stack: stackPath ? stackPath : null,
			}, function() {
				AlertsManager.addAlert('Link moved successfully', 'alert-success', 1500);
				$rootScope.$emit('refreshContent');
				link = undefined;
			});
		} else if (scopeItem.kind === 'stack') {
			var stack = new Stacks({
				name: scopeItem.name,
				path: newPath,
				user: Global.user._id
			});

			$scope.modal.close();
			$scope.filemodal.close();
			stack.$move({
				collection: collectionPath,
				stack: filePath,
			}, function() {
				AlertsManager.addAlert('Stack moved successfully', 'alert-success', 1500);
				$location.path('/stack' + newPath);
				$rootScope.$emit('refreshContent');
				stack = undefined;
			});
		} else {
			var file = new File({
				name: scopeItem.name,
				path: newPath,
				user: Global.user._id
			});

			$scope.modal.close();
			$scope.filemodal.close();
			// console.log('moving file ' + scopeItem.name);
			file.$move({
				filename: filePath,
				collection: collectionPath,
				stack: stackPath,
			}, function() {
				AlertsManager.addAlert('Item moved successfully', 'alert-success', 1500);
				$rootScope.$emit('refreshView');
				file.length = 0;
				$scope.currentPath = undefined;
				$scope.selectedPath = undefined;
				// console.log('file moved');
			});
		}
	};

	// Get thumbnail from file url
	$scope.getThumbnail = function(item) {
			item.thumbnailUrl = Dropbox.thumbnailUrl(item.lastFile ? item.lastFile : item.path, { size: 'xl'});
			if (Global.activeView.thumbnailUrl === undefined)
				Global.activeView.thumbnailUrl = item.thumbnailUrl;
	};

	// get kind of item
	$scope.isKind = function(item) {
			if (item.lastFile !== undefined)
				return 'stack';

			if (item.lastFile === undefined && item.url === undefined)
				return 'file';

			if (item.type === 'link')
				return 'link';
	};
	// open link in new window
	$scope.openLink = function (item) {
		// update open date
		var pathCollection = null;
		var pathStack = null;
		var pathElts = item.parentPath.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}
		var linkname = item.url.replace(/\//g, ':'); // for req post url

		item = new Link(item);
		item.user = Global.user._id;
		item.$update({
			linkname: linkname,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		},function() { // success
		}, function () { // error
		});
		// open link in new tab
		$window.open(item.url);
	};

	$scope.getExcerpt = function(item) {
		var path = item.path;
		if (item.type === 'note' && item.lastFile) path = item.lastFile;

		Dropbox.readFile(path).then(function(res) {
			item.excerpt = res;
		});
	};
	$scope.isActive = function(path) {
			var windowLoc = $location.path().toLowerCase();
			var depth = windowLoc.match(/\//g);
			var locComponents = windowLoc.split('/');
			if (depth.length === 3){ // if 3 slashes then it's a stack
				if (path && path.toLowerCase().indexOf(locComponents[2]) !== -1)
						return true;
				else
						return false;
			} else {
				if ($location.path().substr(0, path.length).toLowerCase() === path.toLowerCase())
					return true;
				else
					return false;
			}
	};

	$scope.toggleFavourite = function (card) {
		if (!card.isFavourite) {
			$scope.addFavourite(card);
		} else {
			$scope.removeFavourite(card);
		}
	};

	$scope.addFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'name': item.name,
			'path': item.path,
			'color': item.color
		};
		if (item._id)
			processedItem._id = item._id;

		if (item.type === 'link')
			item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);

		// first get kind of file
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
		if (depth && depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth && depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
		}

		Collections.addFavourite(processedItem, function success() { // res
			item.isFavourite = true;
			$scope.global.user.favourites.push(processedItem);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};
	$scope.removeFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'name': item.name,
			'path': item.path
		};
		if (item._id)
			processedItem._id = item._id;

		if (item.type === 'link')
			item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);

		// first get kind of file
		if (item.files === undefined ) processedItem.kind = 'file';
		if (depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
		}

		Collections.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in Global.user.favourites and remove
			var favIndex = _.findIndex($scope.global.user.favourites, {'path': item.path});
			$scope.global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};

	// from click-to-add sidebar directive
	$scope.create = function(name, cb) {
		// if name wasnt changed or is empty, skip saving
		if (!name || name === '')
			return cb(undefined, true); // err - undefined; noChange - true

		// replace any slashes with ':', then add '/' and convert to lowercase
		var path = name.replace(/\//g, ':');
		path = path.toLowerCase();

		var collection = new Collections({
			name: name,
			path: path
		});

		collection.$save(function() {
			// success
			return cb();
		}, function() {
			// error
			return cb(true);
		});
	};
	$scope.remove = function(collection) {
		if (collection) {
			collection.$remove();
			for (var i in $scope.collections) {
				if ($scope.collections[i] === collection) {
					$scope.collections.splice(i, 1);
				}
			}
		}
		else {
			$scope.collection.$remove();
			$location.path('api/content/collection');
		}
	};
	$scope.update = function() {
		var collection = $scope.collection;
		if (!collection.modified) {
			collection.modified = [];
		}
		collection.modified.push(new Date().getTime());
		collection.$update(function() {
			$location.path('api/content/collection/' + collection.path);
		});
	};
	$scope.find = function(movePath) {
		Collections.query(function(collections) {
			$scope.collections = collections;
		});
		if (movePath) {
			var tempPath = movePath.match(/(.+\/|\/)[^\/]+$/);
			$scope.parentPath = tempPath[1];
		}
	};

	// Get all content for list view
	$scope.all = function() {
		Collections.all({
			path: $stateParams.path.toLowerCase()
		}, function(items) {
				_(items).forEach(function(item) {
					var extension;
					// if it's a stack
					if (item.lastFile) {
						extension = item.lastFile.match(rgExtension);
						// if it's a note
						if (extension[1] === 'txt' || extension[1] === 'markdown' || extension[1] === 'mdown' || extension[1] === 'mkdn' || extension[1] === 'md' || extension[1] === 'mkd' || extension[1] === 'mdwn' || extension[1] === 'mdtxt' || extension[1] === 'mdtext' || extension[1] === 'text' ) {
							item.type = 'note';
						} else {
							item.type = 'image';
						}
						item.kind = 'stack';
					}
					// gif or plain image?
					if (item.hasThumbnail){
						extension = item.path.match(rgExtension);
						if (extension[1] === 'gif' )
							item.type = 'gif';
						else
							item.type = 'image';
					}
					if (item.type === 'link') {
						// strip out http:// and split url into base and subpath
						if (item.url.match(/^(http:\/\/)/)) {
							item.prettyUrl = item.url.substr(7).match(/^(.[^\/]+)(.*)/);
						} else if (item.url.match(/^(https:\/\/)/)){
							item.prettyUrl = item.url.substr(8).match(/^(.[^\/]+)(.*)/);
						}
					}
					// generate and add .created from _id - via http://stackoverflow.com/questions/10346067/pull-date-from-mongo-id-on-the-client-side
					item.created = parseInt(item._id.substring(0,8), 16)*1000; // unix timestamp
				});
				$scope.items = items;
				Global.activeView.count = $scope.items.length;
				// Reset filters to default
				Global.activeSort = Global.selectSort[0];
				// Global.activeFilter = Global.selectFilter[0];

				$scope.order = Global.selectSort.sortby;


		});
		// Sort items
		$scope.$watch('global.activeSort.name', function() {
			$scope.items = _.sortBy($scope.items, Global.activeSort.sortby);
			if (Global.activeSort.reverse)
				$scope.items = $scope.items.reverse();
		});

		// Filter items
		// $scope.$watch('global.activeFilter.name', function() {
		// 	if (tempItems === null)
		// 		tempItems = _.map($scope.items);
		//
		// 	console.log(tempItems.length, $scope.items.length);
		// 	$scope.items = _.filter($scope.items, function (item) {
		// 		return Global.activeFilter.show === item.type;
		// 	});
		// });
	};

	$scope.findOne = function() {
		Collections.get({
			path: $stateParams.path.toLowerCase()
		}, function(collection) {
			$scope.collection = collection;
			Global.activeView = collection;
			Global.activeView.kind = 'collection';
			Page.setTitle(collection.name);
			$rootScope.color = collection.color;
		});
		// findOne watchers
		var offAddFav = $rootScope.$on('addFavourite', function(obj, item) {
			// console.log('adding');
			$scope.addFavourite(item);
		});
		var offRemoveFav = $rootScope.$on('removeFavourite', function(obj, item) {
			$scope.removeFavourite(item);
		});
		// Cleans the watchers after scope is destroyed (eg. switched to a different controller)
		$scope.$on('$destroy', function() {
			offAddFav();
			offRemoveFav();
		});
	};

	/*
	 * Watchers
	 */
	// Refresh All Data on Event
	var refreshContent = $rootScope.$on('refreshContent', function() {
		// $scope.collections = undefined;
		// $scope.items = undefined;
		$scope.find();
		if ($stateParams.path)
			$scope.all();
	});
	// Refresh Sidebar Data on Event
	var refreshSidebar = $rootScope.$on('refreshSidebar', function() {
		$scope.find();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		// clear scope items before refresh
		if ($stateParams.path)
			$scope.all();
	});
	// if file is open, close modal when back button is pressed
	var locationChangeStart = $rootScope.$on('$locationChangeStart', function(event) {
		if ($scope.modal.isOpen()){
			$scope.modal.close();
			event.preventDefault();
		}
	});

	// deregister watchers when scope inactive
	$scope.$on('$destroy', function () {
		refreshSidebar();
		locationChangeStart();
		refreshContent();
		refreshView();
		Global.activeView.thumbnailUrl = undefined;
	});
}]);
;'use strict';

angular.module('octobox.file').controller('FileController', ['$scope', '$rootScope', '$stateParams', '$http', '$timeout', '$location', '_', 'Dropbox', 'AlertsManager', 'Global', 'Page', 'Modal', 'FileModal', 'File', 'Tags', function ($scope, $rootScope, $stateParams, $http, $timeout, $location, _, Dropbox, AlertsManager, Global, Page, Modal, FileModal, File, Tags) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;
	$scope.refreshEditor = false; // for codemirror model updates
	// $scope.noteChanged = false; // for checking if note content was changed
	$scope.editorOptions = {
				lineWrapping : true,
				lineNumbers: false,
				autoCloseBrackets: true,
				readOnly: false,
				indentWithTabs: true,
				cursorScrollMargin: 5,
				mode: 'gfm',
		};

	// more Dropdown
	$scope.fileMoreMenu = [
			{
					text: 'Move',
					iconCls: 'more-move'
			},
			{
					divider: true
			},
			{
					text: 'Delete',
					iconCls: 'more-delete'
			}
	];
	$scope.fileMoreMenuSelected = {}; // Must be an object

	$scope.toggleTagEdit = function (event) {
		var element = angular.element(document.querySelector( '#current-tags-container' ));
		var isChild = element.find(event.target.tagName).length > 0;
		var isSelf = element[0] == event.target;
		var isIgnored = isChild || isSelf;
		if (!isIgnored) {
			$scope.editingTags = false;
			$scope.$apply();
		}
	};
	$scope.editContent = function (selected) {
		if (selected.iconCls === 'more-move') {
			$scope.modal.open('/views/directives/move.html', $scope.file);
		} else if (selected.iconCls === 'more-delete') {
			$scope.modal.open('/views/directives/delete.html', $scope.file);
		}
	};

	// Non-API methods
	$scope.makeUrl = function() {
		File.makeUrl({
			filename: $stateParams.filename,
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(data) {
			$scope.file.fileUrl = data.url;
		});
	};
	$scope.getImage = function(file) {
		Dropbox.readImage(file.path).then(function(res) {
			// handle the returned blob and push it as a url to the file. *magic*
			var urlCreator = window.URL || window.webkitURL;
			var imageUrl = urlCreator.createObjectURL( res );
			file.src = imageUrl;
		});
	};

	$scope.getContent = function(file) {
		if (file.type === 'image') {
			Dropbox.readImage(file.path).then(function(res) {
				// handle the returned blob and push it as a url to the file. *magic*
				var urlCreator = window.URL || window.webkitURL;
				var imageUrl = urlCreator.createObjectURL( res );
				file.src = imageUrl;
			});
		}
		else if (file.type === 'note') {
			Dropbox.readFile(file.path).then(function(res) {
				file.content = res;
				file.oldContent = res;
			});
		}
	};
	$scope.getThumbnail = function(file) {
		file.thumbnailUrl = Dropbox.thumbnailUrl(file.lastFile || file.path, { size: 'xl'});
	};

	// Edit Source - from click-to-edit directive
	$scope.editSource = function(newSource, callback) {
		// if source wasnt changed or is empty, skip saving
		if ($scope.file.source === newSource)
				return callback(undefined, true); // err - undefined; noChange - true

		var filePath,
				collectionPath,
				stackPath,
				tempContent,
				tempSize,
				tempTags,
				parsedPath = $scope.file.path.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');

		if ($scope.file.content && $scope.file.content !== null) {
			tempContent = $scope.file.content;
		}
		if ($scope.file.percentSize) {
			tempSize = $scope.file.percentSize;
		}
		if ($scope.file.tags && $scope.file.tags.length !== 0) {
			tempTags = $scope.file.tags;
		}
		// if inbox
		if (pathElts.length === 1){
			filePath = pathElts[0];
			collectionPath = undefined;
			stackPath = undefined;
		}
		// if collection
		if (pathElts.length === 2){
			filePath = pathElts[1];
			collectionPath = pathElts[0];
			stackPath = undefined;
		}
		// if stack
		if (pathElts.length === 3){
			filePath = pathElts[2];
			stackPath = pathElts[1];
			collectionPath = pathElts[0];
		}

		var file = new File($scope.file);
		file.tags = _.pluck($scope.file.tags, '_id');
		file.source = newSource;
		file.user = $scope.global.user._id;
		file.$update({
			filename: filePath,
			collection: collectionPath,
			stack: stackPath
		},function() {
				$scope.file.content = tempContent;
				$scope.file.percentSize = tempSize;
				if (tempTags !== undefined)
					$scope.file.tags = tempTags;

				if (newSource === '') {
					$scope.file.source = null;
				}
				// refresh current view - collection/stack/inbox/recent
				$rootScope.$emit('refreshView', $scope.file, $scope.oldPageTitle);
				return callback();
		}, function() { // pass error if tag with new name already exists (handled in directive)
				return callback(true);
		});
	};

	// Rename File - from click-to-edit directive
	$scope.renameItem = function(newName, callback) {
		var tempContent, tempSize, tempTags;

		if ($scope.file.content !== null) {
			tempContent = $scope.file.content;
		}
		if ($scope.file.percentSize) {
			tempSize = $scope.file.percentSize;
		}
		if ($scope.file.tags && $scope.file.tags.length > 0) {
			tempTags = $scope.file.tags;
		}

		// if name wasnt changed or is empty, skip saving
		if (!newName || $scope.file.name === newName)
				return callback(undefined, true); // err - undefined; noChange - true

		var pathElts = $scope.file.path.split('/');
		var rgExtension = /.*(\.[^.]+)$/; // catches filename
		var newPathName = pathElts[pathElts.length - 1]; //old filename is last elt
		var fileExtension = ''; // if there's no file extension, it'll just be emtpy
		if (newPathName.match(rgExtension))	{
			var fileExtensionMatch = newPathName.match(rgExtension);
			fileExtension = fileExtensionMatch[1];
		}
		// safe name - replace '/' with ':', just like Dropbox API does
		var newSafeName = newName.replace(/\//g, ':');
		// final file name only
		var fileName = newSafeName + fileExtension;
		fileName = fileName.toLowerCase();

		var collectionName, stackName, newPath;
		if (pathElts.length === 2){ // inbox
			newPath = '/' + fileName;
		}
		if (pathElts.length === 3){ // collection
			collectionName = pathElts[1];
			newPath = '/' + collectionName + '/' + fileName;
		}
		if (pathElts.length === 4){ // stack
			collectionName = pathElts[1];
			stackName = pathElts[2];
			newPath = '/' + collectionName + '/' + stackName + '/' + fileName;
		}
		$scope.file = _.extend($scope.file, {
				name: newName,
				path: newPath,
				user: $scope.global.user._id
		});
		$scope.file.$move({
			filename: newPathName,
			collection: collectionName,
			stack: stackName
		}, function() {
				// update the favourites in the sidebar if necessary
				if ($scope.file.isFavourite)
					$rootScope.$emit('refreshSidebar');

				$scope.file.content = tempContent;
				$scope.file.percentSize = tempSize;
				if ($scope.file.source === '' || $scope.file.source === undefined) {
					$scope.file.source = null;
				}
				if (tempTags !== undefined)
					$scope.file.tags = tempTags;

				// refresh current view - collection/stack/inbox/recent
				$rootScope.$emit('refreshView', $scope.file, $scope.oldPageTitle);
				// modal open
				// $scope.filemodal.open($scope.file);
				return callback();
		}, function() { // pass error if tag with new name already exists (handled in directive)
				return callback(true);
		});
	};

	// Remove tag from the file (uses Tags model!)
	$scope.unassignTag = function(tag, item) {

		// make the tag into a proper resource
		tag = new Tags(tag);

		tag.item = {
			'_id': item._id,
			'name': item.name
		};
		// figure out if it's inbox, stack or collection.
		var count = item.path.match(/\//g);
		if (count.length === 1) tag.item.parent = 'inbox';
		else if (count.length === 2) tag.item.parent = 'collection';
		else tag.item.parent = 'stack';
		tag.item.kind = 'file';
		tag.$unassign(function() {

			// remove tag from array
			var tagIndex = _.findIndex(item.tags, {'_id' : tag._id});
			item.tags.splice(tagIndex, 1);

			// emit event that removes id from tag in sidebar controller
			$rootScope.$emit('removeFromTag', 'file', tag._id, item._id);
			item.modified = new Date();
		});
	};

	// handle Favourites remotely
	$scope.toggleFavourite = function(item) {
		if (item.isFavourite) {
			$scope.removeFavourite(item);
		} else {
			$scope.addFavourite(item);
		}
	};
	$scope.addFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		processedItem.kind = 'file';
		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;

		// Change favourite status immediately
		item.isFavourite = true;
		// push item state to listview item
		$scope._filemodalItem().isFavourite = true;

		File.addFavourite(processedItem, function success() { // res
			$scope.global.user.favourites.push(processedItem);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			// in case of an error, revert favourite status back to what it was originally
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
			item.isFavourite = !item.isFavourite;
			$scope._filemodalItem().isFavourite = !item.isFavourite;
		});
	};
	$scope.removeFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		processedItem.kind = 'file';
		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;

		// Change favourite status immediately
		item.isFavourite = false;
		// push item state to listview item
		$scope._filemodalItem().isFavourite = false;

		// send request and update sidebar
		File.removeFavourite(processedItem, function success() { // res
			// find item in $scope.global.user.favourites and remove
			var favIndex = _.findIndex($scope.global.user.favourites, {'path': item.path});
			$scope.global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			// in case of an error, revert favourite status back to what it was originally
			AlertsManager.addAlert(error.data.message, 'alert-error');
			item.isFavourite = !item.isFavourite;
			$scope._filemodalItem().isFavourite = !item.isFavourite;
		});
	};

	$scope.createNote = function() {
		$scope.loading = true;
		var pathCollection = null;
		var pathStack = null;
		var pathElts = Global.activeView.path.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}

		var filename = this.name.replace(/\//g, ':');
		filename = filename.toLowerCase() + '.md'; // markdown extension
		var filepath = '/' + filename;
		filepath = Global.activeView.path.length === 1 ? filepath : Global.activeView.path + filepath;
		var file = new File({
			name: this.name,
			path: filepath,
			data: '# ' + this.name + ' \n' // initiate note with a title and a new line
		});
		file.$createNote({
			filename: filename,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		} ,function() {
			AlertsManager.addAlert('Note ' + file.name + ' created successfully', 'alert-success', 2500);
			$rootScope.$emit('refreshContent');
			$scope.modal.close();
		});

		this.name = '';
		this.path = '';
	};

	$scope.createFromURL = function() {
		$scope.loading = true;
		var pathCollection = null;
		var pathStack = null;
		var pathElts = Global.activeView.path.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}

		this.url = this.url.split('?')[0]; // remove attributes from URL
		var rgFilename = /([^\/]+)$/;
		var filename = this.url.match(rgFilename);
		var filepath = '/' + filename[1];
		filepath = Global.activeView.path.length === 1 ? filepath : Global.activeView.path + filepath;
		var file = new File({
			path: filepath,
			url: this.url
		});
		file.$createFromURL({
			filename: filename[1],
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		}, function() {
			$rootScope.$emit('refreshContent');
			$scope.modal.close();
		}, function (data) {
			AlertsManager.addAlert(JSON.parse(data.data), 'alert-error', 2500);
			$scope.loading = false;
		});

		this.url = '';
	};

	$scope.remove = function(file) {
		if (file) {
			file.$remove();

			for (var i in $scope.files) {
				if ($scope.files[i] === file) {
					$scope.files.splice(i, 1);
				}
			}
		}
		else {
			$scope.file.$remove();
			$location.path('api/content/file' + file.path);
		}
	};

	$scope.update = function() {
		var filePath,
				collectionPath,
				stackPath,
				parsedPath = $scope.file.path.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');
		// if inbox
		if (pathElts.length === 1){
			filePath = pathElts[0];
			collectionPath = undefined;
			stackPath = undefined;
		}
		// if collection
		if (pathElts.length === 2){
			filePath = pathElts[1];
			collectionPath = pathElts[0];
			stackPath = undefined;
		}
		// if stack
		if (pathElts.length === 3){
			filePath = pathElts[2];
			stackPath = pathElts[1];
			collectionPath = pathElts[0];
		}

		var file = $scope.file;
		file.user = $scope.global.user._id;

		file.$update({
			filename: filePath,
			collection: collectionPath,
			stack: stackPath,
		}, function() {
			AlertsManager.addAlert('Note saved successfully', 'alert-success');
		});
	};

	$scope.saveNote = function(event, saveQuietly) {
		if (event) // for keyboard shortcut
			event.preventDefault();

		// prevent saving if button animation is ongoing
		if ($scope.savingNote === true || $scope.savingDone === true)
			return;

		// toggle button classes
		$scope.savingNote = true; // saving note state
		if ($scope.file.content === $scope.file.oldContent) {
			// AlertsManager.addAlert('Note saved successfully', 'alert-success', 1500);
			$timeout(function () {
				$scope.savingDone = true;
				$scope.savingNote = false; // back to standard button after completing save
				$timeout(function () {
					$scope.savingDone = false; // back to standard button after completing save
				}, 1000);
			}, 400);
			return;
		}
		// update item in list view
		if ($scope._filemodalItem())
			$scope._filemodalItem().excerpt = $scope.file.content;

		// start save code
		var filePath,
				collectionPath,
				stackPath,
				tempContent,
				tempTags = $scope.file.tags,
				tempActiveView = $scope.global.activeView, // save resets activeView so we store temp
				parsedPath = $scope.file.path.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');
		// if inbox
		if (pathElts.length === 1){
			filePath = pathElts[0];
			collectionPath = undefined;
			stackPath = undefined;
		}
		// if collection
		if (pathElts.length === 2){
			filePath = pathElts[1];
			collectionPath = pathElts[0];
			stackPath = undefined;
		}
		// if stack
		if (pathElts.length === 3){
			filePath = pathElts[2];
			stackPath = pathElts[1];
			collectionPath = pathElts[0];
		}
		tempContent = $scope.file.content;
		var file = $scope.file;
		file.user = $scope.global.user._id;

		file.$saveNote({
			filename: filePath,
			collection: collectionPath,
			stack: stackPath,
		}, function() {
			// scope values for the button
			$scope.savingNote = false;
			$scope.savingDone = true;
			$timeout(function () {
				$scope.savingDone = false; // back to standard button after completing save
			}, 1000);
			// for some reason this is necessary
			$scope.file.tags = tempTags;
			$scope.file.content = tempContent;
			$scope.file.oldContent = tempContent; // reassign old content
			$scope.refreshEditor = true;
			$scope.global.activeView = tempActiveView; // re-add activeView
			$scope.file.modified = new Date();
			// on modal close (without user saving)
			if (saveQuietly !== undefined && saveQuietly !== true){
				$rootScope.$emit('refreshView', $scope.file);
				AlertsManager.addAlert('Note saved successfully', 'alert-success', 1500);
			}
		});
	};

	$scope.findOne = function() {
		File.get({
			filename: $stateParams.filename,
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(file) {
			$scope.file = file;
			Global.activeView = file;

			// Stores watchers as references
			var offAddFav = $rootScope.$on('addFavourite', function(obj, item) {
				$scope.addFavourite(item);
			});
			var offRemoveFav = $rootScope.$on('removeFavourite', function(obj, item) {
				$scope.removeFavourite(item);
			});
			// Cleans the watchers after scope is destroyed (eg. switched to a different controller)
			$scope.$on('$destroy', function() {
				offAddFav();
				offRemoveFav();
			});
		});
	};

	// findOne for Modals
	$scope.findOneModal = function(passedFile, oldPageTitle) {
		$scope.file = undefined;
		var filePath,
				collectionPath,
				stackPath,
				tempContent,
				parsedPath = passedFile.path.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');

		// if file opened from list view
		// we have the content already, so we initialize it
		if (passedFile.excerpt) {
			$scope.file = new File(passedFile);
			$scope.file.content = $scope.file.excerpt;
			$scope.file.oldContent = passedFile.excerpt;
		}

		// if file is saved it's re-sent to the findOneModal with 'content' property
		// we can short circut it by reassigning the file that was saved
		if (passedFile.content){
			$scope.file = passedFile;
		}
		// if inbox
		if (pathElts.length === 1){
			filePath = pathElts[0];
			collectionPath = undefined;
			stackPath = undefined;
		}
		// if collection
		if (pathElts.length === 2){
			filePath = pathElts[1];
			collectionPath = pathElts[0];
			stackPath = undefined;
		}
		// if stack
		if (pathElts.length === 3){
			filePath = pathElts[2];
			stackPath = pathElts[1];
			collectionPath = pathElts[0];
		}
		// if note is renamed we keep content without re-downloading it from Dropbox
		if (passedFile.content !== undefined) {
			tempContent = $scope.file.content;
		}
		File.get({
			filename: filePath,
			collection: collectionPath,
			stack: stackPath
		}, function(file) {
			if (passedFile.excerpt) {
				$scope.file = _.extend($scope.file, file, {
					content: passedFile.excerpt
				});
			} else {
				$scope.file = file;
				$scope.getContent($scope.file);
				if (tempContent !== null) {
					$scope.file.content = tempContent;
				}
			}
			// keep old color as reference
			$scope.oldColor = $rootScope.color;
			// set color if inbox file
			if (pathElts.length === 1) {
				$rootScope.color = 0;
			} else {
				$rootScope.color = file.color;
			}
			// get thumbnail for the share menu
			if (passedFile.thumbnailUrl !== undefined)
				$scope.file.thumbnailUrl = Dropbox.thumbnailUrl(file.lastFile || file.path, { size: 'm'});

			// store previous page title and set file name
			if (oldPageTitle)
				$scope.oldPageTitle = oldPageTitle;
			else
				$scope.oldPageTitle = Page.title();

			// initialise source for images if it's empty
			if (($scope.file.type === 'image' && $scope.file.source === undefined) || $scope.file.source === '' || $scope.file.source === null)
				$scope.file.source = null;

			Page.setTitle(file.name);

			// pre-seed image size - to be overwritten in fullImageLoaded directive once it loads
			if ($scope.file.type === 'image') {
				$scope.file.percentSize = 100;
			}
		});
		// revert back to old color after opening file!
		$scope.$on('$destroy', function () {
			$rootScope.color = $scope.oldColor;
			// revert back to old page title
			Page.setTitle($scope.oldPageTitle);

			// if it's a note, save on modal close
			if ($scope.file.type !== undefined && $scope.file.type === 'note' && $scope.file.content !== $scope.file.oldContent) {
				$scope.saveNote(null, false); // save in the background - without notification
			}
		});
	};
}]);
;'use strict';

angular.module('octobox.inbox').controller('InboxController', ['$window', '$scope', '$stateParams', '$rootScope', '$location', '_', 'Dropbox', 'AlertsManager', 'DropboxSync', 'Global', 'Page', 'Inbox', 'Link', 'Modal', 'FileModal', function ($window, $scope, $stateParams, $rootScope, $location, _, Dropbox, AlertsManager, DropboxSync, Global, Page, Inbox, Link, Modal, FileModal) {
	// $scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Filters out extension from name
	var rgExtension = /.*\.([^.]+)$/;

	// sync content on load
	$scope.init = function() {
		if (!Global.sync){
			Global.sync = true;
			DropboxSync.sync(true); // quiet - true
		}
	};
	// Compile string of values to compare
	$scope.compileCompare = function (item) {
		var itemString = item.modified;
		return itemString + '|';
	};

	// get kind of item
	$scope.isKind = function(item) {
			if (item.lastFile !== undefined)
				return 'stack';

			if (item.lastFile === undefined && item.url === undefined)
				return 'file';

			if (item.type === 'link')
				return 'link';
	};
	// open link in new window
	$scope.openLink = function (item) {
		// update open date
		var pathCollection = null;
		var pathStack = null;
		var pathElts = item.parentPath.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}
		var linkname = item.url.replace(/\//g, ':'); // for req post url

		item = new Link(item);
		item.user = Global.user._id;
		item.$update({
			linkname: linkname,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		},function() { // success
		}, function () { // error
		});
		// open link in new tab
		$window.open(item.url);
	};

	$scope.update = function() {
		var inbox = $scope.inbox;

		inbox.$update(function() {
			$location.path('api/content/inbox');
		});
	};

	// Return paged content as a result
	$scope.files = function() {
		/*
		 * Set view properties
		 */
		// Reset filters to default
		Global.activeSort = Global.selectSort[0];
		// Global.activeFilter = Global.selectFilter[0];
		Page.setTitle('Inbox');
		$rootScope.color = 0;
		Global.activeView = {
			name: 'Inbox',
			path: '/',
			kind: 'inbox',
			isFavourite: undefined
		};

		Inbox.files(function(items) {
			// set gif filetype
			_(items).forEach(function(item) {
				// gif or plain image?
				if (item.hasThumbnail){
					var extension = item.path.match(rgExtension);
					if (extension[1] === 'gif' )
						item.type = 'gif';
					else
						item.type = 'image';
				}
				if (item.type === 'link') {
					// strip out http:// and split url into base and subpath
					if (item.url.match(/^(http:\/\/)/)) {
						item.prettyUrl = item.url.substr(7).match(/^(.[^\/]+)(.*)/);
					} else if (item.url.match(/^(https:\/\/)/)){
						item.prettyUrl = item.url.substr(8).match(/^(.[^\/]+)(.*)/);
					}
				}
				// generate and add .created from _id - via http://stackoverflow.com/questions/10346067/pull-date-from-mongo-id-on-the-client-side
				item.created = parseInt(item._id.substring(0,8), 16)*1000; // unix timestamp
			});

			$scope.items = items;
			Global.activeView.count = $scope.items.length;
		});
	};

	$scope.find = function() {
		Inbox.get(function(inbox) {
			$scope.inbox = inbox;
		});
	};

	$scope.getThumbnail = function(item) {
		item.thumbnailUrl = Dropbox.thumbnailUrl(item.path, { size: 'xl'});
	};
	$scope.getExcerpt = function(item) {
		Dropbox.readFile(item.path).then(function(res) {
			item.excerpt = res;
		});
	};

	$scope.toggleFavourite = function (card) {
		if (!card.isFavourite) {
			$scope.addFavourite(card);
		} else {
			$scope.removeFavourite(card);
		}
	};

	$scope.addFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		if (item.type === 'link')
			item.path = item.parentPath + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.type !== 'link')
			processedItem.kind = 'file';

		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + item.url.replace(/\//g, ':');
		}
		Inbox.addFavourite(processedItem, function success() { // res
			item.isFavourite = true;
			Global.user.favourites.push(processedItem);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};
	$scope.removeFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		if (item.type === 'link')
			item.path = item.parentPath + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.type !== 'link')
			processedItem.kind = 'file';

		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + item.url.replace(/\//g, ':');
		}

		Inbox.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in Global.user.favourites and remove
			var favIndex = _.findIndex(Global.user.favourites, {'path': item.path});
			Global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);		});
	};

	/*
	 * Watchers
	 */
	// Refresh Data on Event (sync mainly)
	var refreshContent = $rootScope.$on('refreshContent', function() {
		// $scope.items = undefined;
		$scope.files();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		$scope.files();
	});
	// if file is open, close modal when back button is pressed
	var locationChangeStart = $rootScope.$on('$locationChangeStart', function(event) {
		if ($scope.modal.isOpen()){
			$scope.modal.close();
			event.preventDefault();
		}
	});
	// deregister watchers when scope inactive
	$scope.$on('$destroy', function () {
		locationChangeStart();
		refreshContent();
		refreshView();
	});

	// Sort items
	$scope.$watch('global.activeSort.name', function() {
		$scope.items = _.sortBy($scope.items, Global.activeSort.sortby);
		if (Global.activeSort.reverse)
			$scope.items = $scope.items.reverse();
	});
}]);
;'use strict';

angular.module('octobox.link').controller('LinkController', ['$scope', '$rootScope', '$stateParams', '$http', '$location', '$window', '_', 'AlertsManager', 'Global', 'Modal', 'Link', 'Tags', function ($scope, $rootScope, $stateParams, $http, $location, $window, _, AlertsManager, Global, Modal, Link, Tags) {
	$scope.global = Global;
	$scope.modal = Modal;

	// more Dropdown
	$scope.linkMoreMenu = [
			{
					text: 'Move',
					iconCls: 'more-move'
			},
			{
					divider: true
			},
			{
					text: 'Delete',
					iconCls: 'more-delete'
			}
	];
	$scope.linkMoreMenuSelected = {}; // Must be an object

	$scope.toggleTagEdit = function (event) {
		var element = angular.element(document.querySelector( '#current-tags-container' ));
		var isChild = element.find(event.target.tagName).length > 0;
		var isSelf = element[0] == event.target;
		var isIgnored = isChild || isSelf;
		if (!isIgnored) {
			$scope.editingTags = false;
			$scope.$apply();
		}
	};

	$scope.editContent = function (selected) {
		if (selected.iconCls === 'more-move') {
			$scope.modal.open('/views/directives/move.html', $scope.link);
		} else if (selected.iconCls === 'more-delete') {
			$scope.modal.open('/views/directives/delete.html', $scope.link);
		}
	};

	// open link in new window
	$scope.openLink = function (item) {
		// update open date
		var pathCollection = null;
		var pathStack = null;
		var pathElts = item.parentPath.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}
		var linkname = item.url.replace(/\//g, ':'); // for req post url

		item = new Link(item);
		item.user = Global.user._id;
		item.$update({
			linkname: linkname,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		},function() { // success
		}, function () { // error
		});
		// open link in new tab
		$window.open(item.url);
	};

	// Remove tag from the file (uses Tags model!)
	$scope.unassignTag = function(tag, item) {
		// make the tag into a proper resource
		tag = new Tags(tag);
		tag.item = {
			'_id': item._id,
			'name': item.name
		};
		var tempParent;
		tempParent = item.parentPath;
		if(item.parentPath !== '/') {
			tempParent  = item.parentPath + '/';
		}
		item.path = tempParent + item.url.replace(/\//g, ':');

		// figure out if it's inbox, stack or collection.
		var count = item.path.match(/\//g);
		if (count.length === 1) tag.item.parent = 'inbox';
		else if (count.length === 2) tag.item.parent = 'collection';
		else tag.item.parent = 'stack';
		tag.item.kind = 'link';
		tag.$unassign(function() {

			// remove tag from array
			var tagIndex = _.findIndex(item.tags, {'_id' : tag._id});
			item.tags.splice(tagIndex, 1);

			// emit event that removes id from tag in sidebar controller
			$rootScope.$emit('removeFromTag', 'link', tag._id, item._id);
			item.modified = new Date();
			tag.exists = false;
		});
	};

	$scope.addFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'name': item.name,
			'path': item.path,
			'color': item.color
		};
		if (item._id)
			processedItem._id = item._id;

		if (item.type === 'link'){
			if (item.parentPath === '/')
				item.path = item.parentPath + item.url.replace(/\//g, ':');
			else
				item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
		}
		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);

		// first get kind of file
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
		if (depth && depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth && depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.path;
		}

		Link.addFavourite(processedItem, function success() { // res
			item.isFavourite = true;
			Global.user.favourites.push(processedItem);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};
	$scope.removeFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'name': item.name,
			'path': item.path
		};
		if (item._id)
			processedItem._id = item._id;

		if (item.type === 'link'){
			if (item.parentPath === '/')
				item.path = item.parentPath + item.url.replace(/\//g, ':');
			else
				item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
		}
		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);

		// first get kind of file
		if (item.files === undefined ) processedItem.kind = 'file';
		if (depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.path;
		}

		Link.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in $scope.global.user.favourites and remove
			var favIndex = _.findIndex(Global.user.favourites, {'path': item.path});
			Global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};

	$scope.create = function() {
		$scope.loading = true;
		var pathCollection = null;
		var pathStack = null;
		var pathElts = Global.activeView.path.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}

		var linkname = this.url.replace(/\//g, ':'); // for req post url
		var link = new Link({
			url: this.url
		});
		link.$save({
			linkname: linkname,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		},function() { // success
			AlertsManager.addAlert('Link added successfully', 'alert-success', 2500);
			$rootScope.$emit('refreshContent');
			$scope.modal.close();
		}, function (err) { // error
			AlertsManager.addAlert(JSON.parse(err.data), 'alert-error');
		});

		this.url = '';
	};

	$scope.remove = function(link) {
		if (link) {
			link.$remove();

			for (var i in $scope.links) {
				if ($scope.links[i] === link) {
					$scope.links.splice(i, 1);
				}
			}
		}
		else {
			$scope.link.$remove();
			$location.path('api/content/link' + link.path);
		}
	};

	$scope.update = function() {
		var link = $scope.link;
		if (!link.modified) {
			link.modified = [];
		}
		link.modified.push(new Date().getTime());

		link.$update(function() {
			$location.path('api/content/link' + link.path);
		});
	};

	$scope.findOne = function() {
		Link.get({
			linkname: $stateParams.linkname,
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(link) {
			$scope.link = link;
			Global.activeView = link;

			// Stores watchers as references
			var offAddFav = $rootScope.$on('addFavourite', function(obj, item) {
				$scope.addFavourite(item);
			});
			var offRemoveFav = $rootScope.$on('removeFavourite', function(obj, item) {
				$scope.removeFavourite(item);
			});
			// Cleans the watchers after scope is destroyed (eg. switched to a different controller)
			$scope.$on('$destroy', function() {
				offAddFav();
				offRemoveFav();
			});
		});
	};

	// findOne for Modals
	$scope.findOneModal = function(path) {
		var linkPath,
				collectionPath,
				stackPath,
				parsedPath = path.match(/^\/(.+)/),
				pathElts = parsedPath[1].split('\/');
		// if inbox
		if (pathElts.length === 1){
			linkPath = pathElts[0];
			collectionPath = undefined;
			stackPath = undefined;
		}
		// if collection
		if (pathElts.length === 2){
			linkPath = pathElts[1];
			collectionPath = pathElts[0];
			stackPath = undefined;
		}
		// if stack
		if (pathElts.length === 3){
			linkPath = pathElts[2];
			stackPath = pathElts[1];
			collectionPath = pathElts[0];
		}

		Link.get({
			linkname: linkPath,
			collection: collectionPath,
			stack: stackPath
		}, function(link) {
			$scope.link = link;
			// strip out http:// and split url into base and subpath
			if (link.url.match(/^(http:\/\/)/)) {
				link.prettyUrl = link.url.substr(7).match(/^(.[^\/]+)(.*)/);
			} else if (link.url.match(/^(https:\/\/)/)){
				link.prettyUrl = link.url.substr(8).match(/^(.[^\/]+)(.*)/);
			}
			// keep old color as reference
			$scope.oldColor = $rootScope.color;
			// set color
			$rootScope.color = link.color;
		});
		// revert back to old color after opening file!
		$scope.$on('$destroy', function () {
			$rootScope.color = $scope.oldColor;
		});
	};
}]);
;'use strict';

angular.module('octobox.recent').controller('RecentController', ['$window', '$scope', '$stateParams', '$rootScope', '$location', '_', 'Dropbox', 'AlertsManager', 'Modal', 'Global', 'Page', 'Recent', 'Link', 'FileModal', function ($window, $scope, $stateParams, $rootScope, $location, _, Dropbox, AlertsManager, Modal, Global, Page, Recent, Link, FileModal) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Filters out extension from name
	var rgExtension = /.*\.([^.]+)$/;

	// Compile string of values to compare
	$scope.compileCompare = function (item) {
		var itemString = item.modified;
		return itemString + '|';
	};

	$scope.find = function() {
		// Sort items
		$scope.$watch('global.activeSort.name', function() {
			$scope.items = _.sortBy($scope.items, $scope.global.activeSort.sortby);
			if ($scope.global.activeSort.reverse)
				$scope.items = $scope.items.reverse();
		});
		Recent.get(function(recent) {
			// set gif filetype
			_(recent).forEach(function(item) {
				// gif or plain image?
				if (item.hasThumbnail){
					var extension = item.path.match(rgExtension);
					if (extension[1] === 'gif' )
						item.type = 'gif';
					else
						item.type = 'image';
				}
				if (item.type === 'link') {
					// strip out http:// and split url into base and subpath
					if (item.url.match(/^(http:\/\/)/)) {
						item.prettyUrl = item.url.substr(7).match(/^(.[^\/]+)(.*)/);
					} else if (item.url.match(/^(https:\/\/)/)){
						item.prettyUrl = item.url.substr(8).match(/^(.[^\/]+)(.*)/);
					}
				}
				// generate and add .created from _id - via http://stackoverflow.com/questions/10346067/pull-date-from-mongo-id-on-the-client-side
				item.created = parseInt(item._id.substring(0,8), 16)*1000; // unix timestamp
			});
			$scope.items = recent;
			// Reset filters to default
			$scope.global.activeSort = $scope.global.selectSort[0];
			// $scope.global.activeFilter = $scope.global.selectFilter[0];

			Global.activeView = {
				name: 'Recent Items',
				path: '/', // for file adding - go to inbox by default!
				isFavourite: undefined,
				count: 50
			};
			Page.setTitle('Recent Items');
			$rootScope.color = 0;
		});
	};

	// get kind of item
	$scope.isKind = function(item) {
			if (item.lastFile !== undefined)
				return 'stack';

			if (item.lastFile === undefined && item.url === undefined)
				return 'file';

			if (item.type === 'link')
				return 'link';
	};
	// open link in new window
	$scope.openLink = function (item) {
		// update open date
		var pathCollection = null;
		var pathStack = null;
		var pathElts = item.parentPath.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}
		var linkname = item.url.replace(/\//g, ':'); // for req post url

		item = new Link(item);
		item.user = $scope.global.user._id;
		item.$update({
			linkname: linkname,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		},function() { // success
		}, function () { // error
		});
		// open link in new tab
		$window.open(item.url);
	};

	$scope.getThumbnail = function(item) {
		item.thumbnailUrl = Dropbox.thumbnailUrl(item.path, { size: 'xl'});
	};
	$scope.getExcerpt = function(item) {
		Dropbox.readFile(item.path).then(function(res) {
			// TODO: Process Markdown Light on res
			item.excerpt = res;
		});
	};

	$scope.toggleFavourite = function (card) {
		if (!card.isFavourite) {
			$scope.addFavourite(card);
		} else {
			$scope.removeFavourite(card);
		}
	};

	$scope.addFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		var tempParent;
		if (item.type === 'link'){
			if (item.parentPath) {
				tempParent = item.parentPath;
				if(item.parentPath !== '/') {
					tempParent  = item.parentPath + '/';
				}
			}
			item.path = tempParent + item.url.replace(/\//g, ':');
		}

		// console.log(item.path);
		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.type !== 'link')
			processedItem.kind = 'file';

		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = tempParent + item.url.replace(/\//g, ':');
		}
		Recent.addFavourite(processedItem, function success() { // res
			item.isFavourite = true;
			$scope.global.user.favourites.push(processedItem);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};

	$scope.removeFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		var tempParent;
		if (item.type === 'link'){
			if (item.parentPath) {
				tempParent = item.parentPath;
				if(item.parentPath !== '/') {
					tempParent  = item.parentPath + '/';
				}
			}
			item.path = tempParent + item.url.replace(/\//g, ':');
		}

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.type !== 'link')
			processedItem.kind = 'file';

		if (depth.length === 1) processedItem.parent = 'inbox';
		else if (depth.length === 2) processedItem.parent = 'collection';
		else processedItem.parent = 'stack';
		// Add type: 'note', 'image', 'other'
		processedItem.type = item.type;
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = tempParent + item.url.replace(/\//g, ':');
		}

		Recent.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in $scope.global.user.favourites and remove
			var favIndex = _.findIndex($scope.global.user.favourites, {'path': item.path});
			$scope.global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);		});
	};

	/*
	 * Watchers
	 */
	// Refresh Data on Event (sync mainly)
	var refreshContent = $rootScope.$on('refreshContent', function() {
		$scope.find();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		$scope.find();
	});
	// if file is open, close modal when back button is pressed
	var locationChangeStart = $rootScope.$on('$locationChangeStart', function(event) {
		if ($scope.modal.isOpen()){
			$scope.modal.close();
			event.preventDefault();
		}
	});
	// deregister watchers when scope inactive
	$scope.$on('$destroy', function () {
		locationChangeStart();
		refreshContent();
		refreshView();
	});
}]);
;'use strict';

angular.module('octobox.stacks').controller('StacksController', ['$window', '$scope', '$stateParams', '$location', '$rootScope', 'Dropbox', '_', 'AlertsManager', 'Global', 'Page', 'Stacks', 'Tags', 'Link', 'Modal', 'FileModal', function ($window, $scope, $stateParams, $location, $rootScope, Dropbox, _, AlertsManager,  Global, Page, Stacks, Tags, Link, Modal, FileModal) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Filters out extension from name
	var rgExtension = /.*\.([^.]+)$/;

	// Non API Methods
	// Get thumbnail from file url
	$scope.getThumbnail = function(item) {
		item.thumbnailUrl = Dropbox.thumbnailUrl(item.lastFile || item.path, { size: 'xl'});
		if (Global.activeView.thumbnailUrl === undefined)
			Global.activeView.thumbnailUrl = item.thumbnailUrl;
	};
	$scope.getExcerpt = function(item) {
		Dropbox.readFile(item.path).then(function(res) {
			item.excerpt = res;
		});
	};

	// Compile string of values to compare
	$scope.compileCompare = function (item) {
		var itemString = item.modified;
		return itemString + '|';
	};
	// get kind of item
	$scope.isKind = function(item) {
			if (item.lastFile !== undefined)
				return 'stack';

			if (item.lastFile === undefined && item.url === undefined)
				return 'file';

			if (item.type === 'link')
				return 'link';
	};
	// open link in new window
	$scope.openLink = function (item) {
		// update open date
		var pathCollection = null;
		var pathStack = null;
		var pathElts = item.parentPath.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}
		var linkname = item.url.replace(/\//g, ':'); // for req post url

		item = new Link(item);
		item.user = $scope.global.user._id;
		item.$update({
			linkname: linkname,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		},function() { // success
		}, function () { // error
		});
		// open link in new tab
		$window.open(item.url);
	};

	// Remove tag from the stack (uses Tags model!)
	$scope.unassignTag = function(tag, item) {
		// make the tag into a proper resource
		tag = new Tags(tag);

		tag.item = item;
		tag.item.kind = 'stack';
		tag.$unassign(function() {
			// remove tag from array
			var tagIndex = _.findIndex(item.tags, {'_id' : tag._id});
			item.tags.splice(tagIndex, 1);

			// emit event that removes id from tag in sidebar controller
			$rootScope.$emit('removeFromTag', 'stack', tag._id, item._id);

			var tagsModel = $scope.$$childHead.tags;
			_(tagsModel).forEach(function(tagModel) {
				if (tagModel._id === tag._id){
					var index = tagModel.stacks.indexOf(item._id);
					tagModel.stacks.splice(index, 1);
					tagModel.exists = false;
				}
			});

			item.modified = new Date();
		});
	};


	$scope.toggleFavourite = function (card) {
		if (!card.isFavourite) {
			$scope.addFavourite(card);
		} else {
			$scope.removeFavourite(card);
		}
	};

	$scope.addFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		if (item.type === 'link')
			item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		// first get kind of file
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
		if (depth && depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth && depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (item.kind === 'stack') processedItem.kind = item.kind;
		// console.log(depth);
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
		}

		Stacks.addFavourite(processedItem, function success() { // res
			item.isFavourite = true;
			$scope.global.user.favourites.push(processedItem);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};

	$scope.removeFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};

		if (item.type === 'link')
			item.path = item.parentPath + '/' + item.url.replace(/\//g, ':');

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
		if (depth && depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth && depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (item.kind === 'stack') processedItem.kind = item.kind;
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = item.parentPath + '/' + item.url.replace(/\//g, ':');
		}
		// console.log(item, processedItem);
		Stacks.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in $scope.global.user.favourites and remove
			var favIndex = _.findIndex($scope.global.user.favourites, {'path': item.path});
			$scope.global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);		});
	};



	$scope.create = function() {
		$scope.loading = true;

		var rootPath = Global.activeView.path.substring(1);
		var path = this.name.replace(/\//g, ':');
		path = path.toLowerCase();
		var stack = new Stacks({
			name: this.name,
			path: '/' + rootPath + '/' + path
		});
		// console.log(stack);
		stack.$save({
			collection: rootPath,
			stack: path
		}, function() {
			AlertsManager.addAlert('Stack ' + stack.name + ' created successfully', 'alert-success');
			// $location.path('/stack' + stack.path);
			$rootScope.$emit('refreshContent');
			$scope.modal.close();
		});
		this.name = '';
		this.path = '';
	};
	$scope.remove = function(stack) {
		if (stack) {
			stack.$remove();
			for (var i in $scope.stacks) {
				if ($scope.stacks[i] === stack) {
					$scope.stacks.splice(i, 1);
				}
			}
		}
		else {
			$scope.stack.$remove();
			$location.path('api/content/stack');
		}
	};

	$scope.update = function() {
		var stack = $scope.stack;
		if (!stack.modified) {
			stack.modified = [];
		}
		stack.modified.push(new Date().getTime());
		stack.$update(function() {
			$location.path('api/content/stack/' + stack.path);
		});
	};

	// Return paged content as a result
	$scope.all = function() {
		Stacks.all({
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(items) {
			Global.activeView.count = items.length;
			// Reset filters to default
			$scope.global.activeSort = $scope.global.selectSort[0];
			// $scope.global.activeFilter = $scope.global.selectFilter[0];
			// set gif filetype
			_(items).forEach(function(item) {
				// gif or plain image?
				if (item.hasThumbnail){
					var extension = item.path.match(rgExtension);
					if (extension[1] === 'gif' )
						item.type = 'gif';
					else
						item.type = 'image';
				}
				if (item.type === 'link') {
					// strip out http:// and split url into base and subpath
					if (item.url.match(/^(http:\/\/)/)) {
						item.prettyUrl = item.url.substr(7).match(/^(.[^\/]+)(.*)/);
					} else if (item.url.match(/^(https:\/\/)/)){
						item.prettyUrl = item.url.substr(8).match(/^(.[^\/]+)(.*)/);
					}
				}
				// generate and add .created from _id - via http://stackoverflow.com/questions/10346067/pull-date-from-mongo-id-on-the-client-side
				item.created = parseInt(item._id.substring(0,8), 16)*1000; // unix timestamp
			});
			$scope.items = items;
		});

		// Sort items
		$scope.$watch('global.activeSort.name', function() {
			$scope.items = _.sortBy($scope.items, $scope.global.activeSort.sortby);
			if ($scope.global.activeSort.reverse)
				$scope.items = $scope.items.reverse();
		});
	};

	$scope.findOne = function() {
		Stacks.get({
			collection: $stateParams.collection,
			stack: $stateParams.stack
		}, function(stack) {
			$scope.stack = stack;

			// also pass current view info to header by adding to Global service
			Global.activeView.name = stack.name;
			Global.activeView._id = stack._id;
			Global.activeView.isFavourite = stack.isFavourite;
			Global.activeView.tags = stack.tags;
			Global.activeView.path = stack.path;
			Global.activeView.kind = 'stack';
			$rootScope.color = stack.color;
			Page.setTitle(stack.name);
		});

		// Stores watchers as references
		var offAddFav = $rootScope.$on('addFavourite', function(obj, item) {
			$scope.addFavourite(item);
		});
		var offRemoveFav = $rootScope.$on('removeFavourite', function(obj, item) {
			$scope.removeFavourite(item);
		});
		// Cleans the watchers after scope is destroyed (eg. switched to a different controller)
		$scope.$on('$destroy', function() {
			offAddFav();
			offRemoveFav();
		});
	};

	/*
	 * Watchers
	 */
	// Refresh Data on Event (sync mainly)
	var refreshContent = $rootScope.$on('refreshContent', function() {
		$scope.all();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		$scope.all();
	});
	// if file is open, close modal when back button is pressed
	var locationChangeStart = $rootScope.$on('$locationChangeStart', function(event) {
		if ($scope.modal.isOpen()){
			$scope.modal.close();
			event.preventDefault();
		}
	});
	// Cleans the watchers after scope is destroyed (eg. switched to a different controller)
	$scope.$on('$destroy', function() {
		locationChangeStart();
		refreshContent();
		refreshView();
		Global.activeView.thumbnailUrl = undefined;
	});
}]);
;'use strict';

angular.module('octobox.tags').controller('TagsController', ['$window', '$scope', '$rootScope', '$stateParams', '$location', '_', 'AlertsManager', 'Dropbox', 'Global', 'Page', 'Tags', 'Link', 'Modal', 'FileModal', function ($window, $scope, $rootScope, $stateParams, $location, _, AlertsManager, Dropbox, Global, Page, Tags, Link, Modal, FileModal) {
	$scope.global = Global;
	$scope.modal = Modal;
	$scope.filemodal = FileModal;

	// Non-API stuff


	$scope.getThumbnail = function(item) {
		if (item.lastFile)
			item.thumbnailUrl = Dropbox.thumbnailUrl(item.lastFile, { size: 'xl'});
		else
			item.thumbnailUrl = Dropbox.thumbnailUrl(item.path, { size: 'xl'});
	};
	$scope.getExcerpt = function(item) {
		Dropbox.readFile(item.path).then(function(res) {
			item.excerpt = res;
		});
	};
	// Compile string of values to compare
	$scope.compileCompare = function (item) {
		var itemString = item.modified;
		return itemString + '|';
	};

	// Link to stack from thumbnail
	$scope.goTo = function(stackPath) {
		$location.path('/stack' + stackPath);
	};

	// get kind of item
	$scope.isKind = function(item) {
			if (item.lastFile !== undefined)
				return 'stack';
			if (item.lastFile === undefined && item.url === undefined)
				return 'file';
			if (item.type === 'link')
				return 'link';
	};

	// open link in new window
	$scope.openLink = function (item) {
		// update open date
		var pathCollection = null;
		var pathStack = null;
		var pathElts = item.parentPath.split('\/');
		if (pathElts.length === 2) { // collection
			pathCollection = pathElts[1];
		} else if (pathElts.length === 3) {
			pathCollection = pathElts[1];
			pathStack = pathElts[2];
		}
		var linkname = item.url.replace(/\//g, ':'); // for req post url

		item = new Link(item);
		item.user = $scope.global.user._id;
		item.$update({
			linkname: linkname,
			collection: pathCollection ? pathCollection : null,
			stack: pathStack ? pathStack : null,
		},function() { // success
		}, function () { // error
		});
		// open link in new tab
		$window.open(item.url);
	};

	$scope.isActive = function(path) {
		if ($location.path().substr(0, path.length).toLowerCase() === path.toLowerCase())
			return true;
		else
			return false;
	};

	$scope.assignTag = function(tag, item) {
		// compile and send request to the server
		tag.item = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};
		// add lightweight version of the tag to the file immediately
		item.tags.push({
			_id: tag._id,
			user: tag.user,
			name: tag.name,
			files: tag.files,
			stacks: tag.stacks,
			links: tag.links
			});

		var tempParent;
		if (item.type === 'link'){
			if (item.parentPath) {
				tempParent = item.parentPath;
				if(item.parentPath !== '/') {
					tempParent  = item.parentPath + '/';
				}
			}
			item.path = tempParent + item.url.replace(/\//g, ':');
		}
		// figure out if the item parent is inbox, stack or collection.
		var depth = item.path.match(/\//g);
		if (depth.length === 1) tag.item.parent = 'inbox';
		else if (depth.length === 2) tag.item.parent = 'collection';
		else tag.item.parent = 'stack';
		// get the kind of the item - stack or file
		tag.item.kind = item.files ? 'stack' : 'file';
		if (item.type === 'link')
			tag.item.kind = 'link';

		tag.$assign(function() {
			if (item.files) { //if it's a stack
				// also add current stack id to that tag (for API request)
				item.tags[item.tags.length-1].stacks.push(item._id);
				// emit event that adds id to tag in sidebar controller
				$rootScope.$emit('addToTag', 'stack', tag._id, item._id);
			} else if (item.type === 'link') { // if it's a link
				// also add current link id to that tag (for API request)
				item.tags[item.tags.length-1].links.push(item._id);
				// emit event that adds id to tag in sidebar controller
				$rootScope.$emit('addToTag', 'link', tag._id, item._id);
			} else { // if it's a file
				// also add current file id to that tag (for API request)
				item.tags[item.tags.length-1].files.push(item._id);
				// emit event that adds id to tag in sidebar controller
				$rootScope.$emit('addToTag', 'file', tag._id, item._id);
			}
			item.modified = new Date();
			tag.exists = true;
		});
	};

	$scope.unassignTag = function(tag, item) {
		// compile and send request to the server
		tag.item = {
			'_id': item._id,
			'name': item.name,
			'path': item.path
		};
		var tempParent;
		if (item.type === 'link'){
			if (item.parentPath) {
				tempParent = item.parentPath;
				if(item.parentPath !== '/') {
					tempParent  = item.parentPath + '/';
				}
			}
			item.path = tempParent + item.url.replace(/\//g, ':');
		}
		// figure out if it's inbox, stack or collection.
		var count = item.path.match(/\//g);
		if (count.length === 1) tag.item.parent = 'inbox';
		else if (count.length === 2) tag.item.parent = 'collection';
		else tag.item.parent = 'stack';
		tag.item.kind = item.files ? 'stack' : 'file';
		if (item.type === 'link')
			tag.item.kind = 'link';

		tag.$unassign(function() {
			// remove tag from array
			var tagIndex = _.findIndex(item.tags, {'_id' : tag._id});
			item.tags.splice(tagIndex, 1);

			if (item.files) { //if it's a stack
				var stackIndex = _.findIndex(tag.stacks, {'_id' : item._id});
				tag.stacks.splice(stackIndex, 1);
				// emit event that removes id from tag in sidebar controller
				$rootScope.$emit('removeFromTag', 'stack', tag._id, item._id);

			} else if (item.type === 'link') { // if it's a link
				var linkIndex = _.findIndex(tag.links, {'_id' : item._id});
				tag.links.splice(linkIndex, 1);
				// emit event that removes id from tag in sidebar controller
				$rootScope.$emit('removeFromTag', 'link', tag._id, item._id);
			} else {
				var fileIndex = _.findIndex(tag.files, {'_id' : item._id});
				tag.files.splice(fileIndex, 1);
				// emit event that removes id from tag in sidebar controller
				$rootScope.$emit('removeFromTag', 'file', tag._id, item._id);
			}
			item.modified = new Date();
			tag.exists = false;
		});
	};


	$scope.toggleFavourite = function (card) {
		if (!card.isFavourite) {
			$scope.addFavourite(card);
		} else {
			$scope.removeFavourite(card);
		}
	};
	$scope.addFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'name': item.name,
			'path': item.path,
			'color': item.color
		};
		if (item._id)
			processedItem._id = item._id;

		var tempParent;
		if (item.type === 'link'){
			if (item.parentPath) {
				tempParent = item.parentPath;
				if(item.parentPath !== '/') {
					tempParent  = item.parentPath + '/';
				}
			}
			item.path = tempParent + item.url.replace(/\//g, ':');
		}

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
		if (depth && depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth && depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = tempParent + item.url.replace(/\//g, ':');
		}

		Tags.addFavourite(processedItem, function success() { // res
			item.isFavourite = true;
			$scope.global.user.favourites.push(processedItem);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};

	$scope.removeFavourite = function(item) {
		// compile and send request to the server
		var processedItem = {
			'name': item.name,
			'path': item.path
		};
		if (item._id)
			processedItem._id = item._id;

		var tempParent;
		if (item.type === 'link'){
			if (item.parentPath) {
				tempParent = item.parentPath;
				if(item.parentPath !== '/') {
					tempParent  = item.parentPath + '/';
				}
			}
			item.path = tempParent + item.url.replace(/\//g, ':');
		}

		// match depth of path by counting slashes
		var depth = item.path.match(/\//g);
		// first get kind of file
		if (item.files === undefined && item.type !== 'link' ) processedItem.kind = 'file';
		if (depth.length === 1 && item.color !== undefined) processedItem.kind = 'collection';
		if (depth.length === 2 && item.lastFile !== undefined) processedItem.kind = 'stack';
		if (processedItem.kind === 'file' || item.type === 'link'){
			if (depth.length === 1) processedItem.parent = 'inbox';
			else if (depth.length === 2) processedItem.parent = 'collection';
			else processedItem.parent = 'stack';
			// Add type: 'note', 'image', 'other'
			processedItem.type = item.type;
		}
		// process link separately
		if (item.type === 'link') {
			processedItem.kind = 'link';
			processedItem.url = item.url;
			processedItem.parentPath = item.parentPath;
			processedItem.path = tempParent + item.url.replace(/\//g, ':');
		}

		// console.log(processedItem);
		Tags.removeFavourite(processedItem, function success() { // res
			item.isFavourite = false;
			// find item in $scope.global.user.favourites and remove
			var favIndex = _.findIndex($scope.global.user.favourites, {'path': item.path});
			$scope.global.user.favourites.splice(favIndex, 1);
			// alert with response
			// AlertsManager.addAlert(res.message, 'alert-' + res.kind);
		}, function err(error) {
			AlertsManager.addAlert(error.data.message, 'alert-' + error.data.kind);
		});
	};

	// from click-to-add sidebar directive
	$scope.create = function(name, cb) {
		// if name wasnt changed or is empty, skip saving
		if (!name || name === '')
			return cb(undefined, true); // err - undefined; noChange - true

		var tag = new Tags({
			name: name
		});
		tag.$save(function() {
			// success
			return cb();
		}, function() {
			// error
			return cb(true);
		});
	};

	// from tags popup on item view
	$scope.createForm = function(item) {
		var tag = new Tags({
				name: this.name,
				exists: true
		});
		tag.$save(function(tagResponse) {
				// convert response from function to object
				tagResponse = new Object(tagResponse);
				// push tag to sidebar and list
				tagResponse.exists = true;
				$rootScope.$emit('pushTag', tagResponse);

				// assign tag automatically
				$scope.assignTag(tagResponse, item);
		});
		this.name = '';
	};

	$scope.remove = function(tag) {
		if (tag) {
			tag.$remove();
			for (var i in $scope.tags) {
				if ($scope.tags[i] === tag) {
					$scope.tags.splice(i, 1);
				}
			}
			// Send data to alerts manager
			AlertsManager.addAlert('Tag \'' + tag.name + '\' removed', 'alert-success', 1500);
		} else {
			$scope.tag.$remove(function() {
				$location.path('api/content/tag');
				// Send data to alerts manager
				AlertsManager.addAlert('Tag \'' + $scope.tag.name + '\' removed', 'alert-success', 1500);
				$rootScope.$emit('refreshContent');
			});
		}
	};

	$scope.update = function() {
		var tag = $scope.tag;
		tag.$update(function() {
			$location.path('api/content/tag/' + $scope.oldName);
			AlertsManager.addAlert('Tag \'' + $scope.oldName + '\' successfully renamed to \'' + tag.name + '\'', 'alert-success', 2500);
			$rootScope.$emit('refreshContent', 'global');
		}, function() {
			// error
			AlertsManager.addAlert('Tag \'' + tag.name + '\' already exists. Pick a different name', 'alert-warning', 1500);
		});
	};
	$scope.find = function() {
		Tags.query(function(tags) {
			$scope.tags = tags;
		});
	};

	// find for the file/stack edit page - checks for scope and updates tag status on load
	$scope.findAndCheck = function() {
		Tags.query(function(tags) {
			$scope.tags = tags;
			// watch file for changes and set tag.exists
			$scope.$watch('file', function() {
				if ($scope.file){
					_($scope.tags).forEach(function(tag) {
						var index = tag.files.indexOf($scope.file._id);
						if (index === -1) tag.exists = false;
						else tag.exists = true;
					});
				}
			});
			// watch stack
			$scope.$watch('stack', function() {
				if ($scope.stack){
					_($scope.tags).forEach(function(tag) {
						var index = tag.stacks.indexOf($scope.stack._id);
						if (index === -1) tag.exists = false;
						else tag.exists = true;
					});
				}
			});
			// watch link
			$scope.$watch('link', function() {
				if ($scope.link){
					// console.log($scope.link);
					_($scope.tags).forEach(function(tag) {
						var index = tag.links.indexOf($scope.link._id);
						if (index === -1) tag.exists = false;
						else tag.exists = true;
					});
				}
			});
		});
	};
	$scope.findOne = function() {
		Tags.get({
			name: $stateParams.name
		}, function(tag) {
			$scope.tag = tag;
			$scope.oldName = tag.name;
		});
	};

	// returns items that belong to a tag
	$scope.getItems = function(refreshColor) {
		Tags.items({
			name: $stateParams.name
		}, function(tag) {
			// Filters out extension from name
			var rgExtension = /.*\.([^.]+)$/;
			_(tag.content).forEach(function(item) {
				var extension;
				// if it's a stack
				if (item.lastFile) {
					extension = item.lastFile.match(rgExtension);
					// if it's a note
					if (extension[1] === 'txt' || extension[1] === 'markdown' || extension[1] === 'mdown' || extension[1] === 'mkdn' || extension[1] === 'md' || extension[1] === 'mkd' || extension[1] === 'mdwn' || extension[1] === 'mdtxt' || extension[1] === 'mdtext' || extension[1] === 'text' ) {
						item.type = 'note';
					} else {
						item.type = 'image';
					}
					item.kind = 'stack';
				}
				// gif or plain image?
				if (item.hasThumbnail){
					extension = item.path.match(rgExtension);
					if (extension[1] === 'gif' )
						item.type = 'gif';
					else
						item.type = 'image';
				}
				if (item.type === 'link') {
					// strip out http:// and split url into base and subpath
					if (item.url.match(/^(http:\/\/)/)) {
						item.prettyUrl = item.url.substr(7).match(/^(.[^\/]+)(.*)/);
					} else if (item.url.match(/^(https:\/\/)/)){
						item.prettyUrl = item.url.substr(8).match(/^(.[^\/]+)(.*)/);
					}
				}
				// generate and add .created from _id - via http://stackoverflow.com/questions/10346067/pull-date-from-mongo-id-on-the-client-side
				item.created = parseInt(item._id.substring(0,8), 16)*1000; // unix timestamp
			});

			$scope.tag = tag;

			Global.activeView.name = tag.name;
			Global.activeView.count = tag.content.length;
			Global.activeView._id = tag._id;
			Global.activeView.isFavourite = undefined;
			Global.activeView.kind = 'tag';
			Global.activeView.type = 'tag';
			Global.activeView.path = '/'; // for base path add in the header

			Page.setTitle(tag.name);
			// Reset filters to default
			$scope.global.activeSort = Global.selectSort[0];
			// $scope.global.activeFilter = $scope.global.selectFilter[0];
			if (refreshColor !== false || refreshColor === undefined)
				$rootScope.color = 1;
		});
		// Sort items
		$scope.$watch('global.activeSort.name', function() {
			if ($scope.tag && $scope.tag.content) {
				$scope.tag.content = _.sortBy($scope.tag.content, $scope.global.activeSort.sortby);
				if ($scope.global.activeSort.reverse)
					$scope.tag.content = $scope.tag.content.reverse();
			}
		});
	};

	/*
	 * Watchers
	 */
	// if file is open, close modal when back button is pressed
	var locationChangeStart = $rootScope.$on('$locationChangeStart', function(event) {
		if ($scope.modal.isOpen()){
			$scope.modal.close();
			event.preventDefault();
		}
	});
	var refreshTags = $rootScope.$on('refreshTags', function() {
		$scope.findAndCheck();
		$scope.find();
	});
	// Refresh Sidebar Data on Event
	var refreshSidebar = $rootScope.$on('refreshSidebar', function() {
		$scope.find();
	});
	var refreshContent = $rootScope.$on('refreshContent', function() {
		$scope.find();
	});
	var refreshView = $rootScope.$on('refreshView', function() {
		$scope.find();
	});

	// when creating a tag we use an event to push it to the sidebar and list simultaneously
	var pushTag = $rootScope.$on('pushTag', function (obj, tag) {
		if (!$scope.tags)
			return;
		$scope.tags.push(tag);
	});
	// handle updating tags on assign/unassign without talking to the backend
	var addToTag = $rootScope.$on('addToTag', function(obj, kind, tagId, itemId) {
		if ($stateParams.name)
			$scope.getItems(false);
		if (!$scope.tags)
			return;
		var itemIndex;
		var tagIndex = _.findIndex($scope.tags, {'_id' : tagId});
		if (kind === 'file'){
			itemIndex = _.findIndex($scope.tags[tagIndex].files, itemId);
			if(!itemIndex)
				$scope.tags[tagIndex].files.push(itemId);
		}
		if (kind === 'link'){
			itemIndex = _.findIndex($scope.tags[tagIndex].links, itemId);
			if(!itemIndex)
				$scope.tags[tagIndex].links.push(itemId);
		}
		if (kind === 'stack'){
			$scope.tags[tagIndex].stacks.push(itemId);
		}

	});
	var removeFromTag = $rootScope.$on('removeFromTag', function(obj, kind, tagId, itemId) {
		if ($stateParams.name)
			$scope.getItems(false);
		if (!$scope.tags)
			return;
		var tagIndex = _.findIndex($scope.tags, {'_id' : tagId});
		if (kind === 'file')
			$scope.tags[tagIndex].files.splice(_.indexOf($scope.tags[tagIndex].files, itemId), 1);
		if (kind === 'stack')
			$scope.tags[tagIndex].stacks.splice(_.indexOf($scope.tags[tagIndex].stacks, itemId), 1);
		if (kind === 'link')
			$scope.tags[tagIndex].links.splice(_.indexOf($scope.tags[tagIndex].links, itemId), 1);
	});

	// deregister watchers when scope inactive
	$scope.$on('$destroy', function () {
		refreshSidebar();
		refreshContent();
		refreshView();
		removeFromTag();
		refreshTags();
		addToTag();
		pushTag();
		locationChangeStart();
	});
}]);
;'use strict';

angular.module('octobox.dropbox').controller('DropboxAuthController', ['$scope', '$rootScope', '$location', 'Global', 'Dropbox', 'DropboxSync', 'AlertsManager', function ($scope, $rootScope, $location, Global, Dropbox, DropboxSync, AlertsManager) {
	// $scope.global = Global;

	$scope.init = function() {
		// $scope.message = DropboxAuth.getAuth();
		// Send data to alerts manager
		var data = $location.search();
		// console.log(data);
		// Set auth global to true
		Global.dropboxAuthorized = true;
		Global.user.dropbox = {
			email : data.email,
			uid: data.uid,
			token: data.token
		};
		Dropbox.setCredentials({ access_token: data.token });
		AlertsManager.addAlert('All good! Your Dropbox Account - \'' + data.email + '\' was authorized!', 'alert-success', 2500);
		// $rootScope.$emit('syncContent');
		DropboxSync.sync();
	};

	/*
	 * Watchers
	 */
	var refreshContent = $rootScope.$on('refreshContent', function() {
		$location.path('/');
	});
	$scope.$on('$destroy', function () {
		refreshContent();
	});

}]);
;'use strict';

angular.module('octobox.dropbox').controller('DropboxSyncController', ['$scope',  '$location', 'Global', 'DropboxSync',  function ($scope, $location, Global, DropboxSync) {
		$scope.global = Global;

		$scope.sync = function() {
			$scope.data = DropboxSync.sync();
		};
}]);
;'use strict';

angular.module('octobox.directives').directive('areYouSure', [
    '_',
    function (_) {
        return {
            restrict: 'A',
            templateUrl: '../views/directives/areYouSure.html',
            scope: {
                action: '&',
                actionName: '@',
                hide: '&'
            },
            // link: function(scope, element, attrs) {
            //
            // }
        }
    }
]);
;'use strict';

angular.module('octobox.directives').directive('clickOutside', ['$document', function($document){
  return {
        restrict: 'A',
        scope: {
            callback : '=clickOutside'
        },
        link: function(scope, element, attr, ctrl) {
            var handler = function(event) {
                if (!element[0].contains(event.target)) {
                    scope.callback(event);
                 }
            };

            $document.on('click', handler);
            scope.$on('$destroy', function() {
                $document.off('click', handler);
            });
        }
    }
}]);
;angular.module('octobox.directives').directive('clickToAdd', ['$location', '$document', '$rootScope', 'AlertsManager', function($location, $document, $rootScope, AlertsManager) {
    return {
        restrict: "A",
        replace: true,
        templateUrl: "../views/directives/clickToAdd.html",
        scope: {
            value: "@clickToAdd",
            callback: '&callback',
            kind: '@kind'
        },
        controller: function($scope, $element) {
            // click outside to close!
            var onDocumentClick = function($event){
              $scope.isChild = $element.find($event.target.tagName).length > 0;
              $scope.isSelf = $element[0] == $event.target;
              $scope.isInside = $scope.isChild || $scope.isSelf;

              if($scope.view.editorEnabled && !$scope.isChild) {
                $scope.$apply($scope.disableEditor());
              }
            };

            $scope.view = {
                editableValue: $scope.value,
                editorEnabled: false,
                loadingResults: false // loading state
            };

            $scope.enableEditor = function() {
                $scope.view.editorEnabled = true;
                $scope.view.editableValue = $scope.value;
                $document.on("click", onDocumentClick);
            };

            $scope.disableEditor = function() {
                $scope.view.editorEnabled = false;
                $scope.view.loadingResults = false;
                $document.off("click", onDocumentClick);
                $scope.view.editableValue = null;
            };

            $scope.save = function() {
                $scope.view.loadingResults = true;
                // emit event and listen for 'save' event from model?
                $scope.callback({
                  name: $scope.view.editableValue,
                  cb: function(err, noChange) {
                    // capitalize kind
                    var kind = $scope.kind.substring(0,1).toUpperCase() + $scope.kind.substring(1);
                    // Error means tag/stack/collection with new name already exists
                    if (err){
                      AlertsManager.addAlert( kind + ' \'' + $scope.view.editableValue + '\' already exists. Pick a different name', 'alert-warning', 1500);
                      $scope.disableEditor();
                      return;
                    }

                    if (noChange){ // if content is unchanged
                      $scope.disableEditor();
                      return;
                    }

                    // Display success message
                    AlertsManager.addAlert( kind + ' \'' + $scope.view.editableValue + '\' created successfully', 'alert-success', 2500);

                    $scope.disableEditor();
                    $scope.value = $scope.view.editableValue;

                    // refresh sidebar
                    $rootScope.$emit('refreshSidebar'); // updates favourites, tags and collection list
                  }
                });

            };
        }
    };
}]);
;angular.module('octobox.directives').directive('clickToEdit', ['$window', '$location', '$document', '$rootScope', 'AlertsManager', function($window, $location, $document, $rootScope, AlertsManager) {
    return {
        restrict: "A",
        replace: true,
        templateUrl: "../views/directives/clickToEdit.html",
        scope: {
            value: "=clickToEdit",
            callback: '&',
            kind: '=',
            emptyState: '@'
        },
        controller: function($scope, $element) {
            // click outside to close!
            var onDocumentClick = function($event){
              $scope.isChild = $element.find($event.target.tagName).length > 0;
              $scope.isSelf = $element[0] == $event.target;
              $scope.isInside = $scope.isChild || $scope.isSelf;

              if($scope.view.editorEnabled && !$scope.isChild) {
                $scope.$apply($scope.disableEditor());
              }
            };
            var checkIfLink = function () {
              if ($scope.emptyState) {
                if ($scope.value && $scope.value !== null && $scope.value.match(/^(https?:\/\/)/)) {
                  $scope.sourceLink = true;
                } else {
                  $scope.sourceLink = false;
                }
              }
            };
            $scope.view = {
                editableValue: $scope.value,
                editorEnabled: false,
                loadingResults: false, // loading state
                sourceLink: false // is source a link? - defaults to false
            };

            // handle source link
            checkIfLink();

            $scope.openSourceLink = function (link) {
              console.log(link);
              $window.open(link);
            };

            $scope.enableEditor = function() {
                $scope.view.editorEnabled = true;
                $scope.view.editableValue = $scope.value;
                $document.on("click", onDocumentClick);
            };

            $scope.disableEditor = function() {
                $scope.view.editorEnabled = false;
                $scope.view.loadingResults = false;
                $document.off("click", onDocumentClick);
            };

            $scope.save = function() {
                $scope.view.loadingResults = true;
                // emit event and listen for 'save' event from model?
                $scope.callback({
                  newName: $scope.view.editableValue,
                  cb: function(err, noChange, parentCollection, nameOnly) {
                    // message friendly kind
                    var kind = $scope.kind.substring(0,1).toUpperCase() + $scope.kind.substring(1);
                    // Error means tag/stack/collection with new name already exists
                    if (err){
                      AlertsManager.addAlert( kind + ' \'' + $scope.view.editableValue + '\' already exists. Pick a different name', 'alert-warning', 1500);
                      $scope.disableEditor();
                      return;
                    }

                    if (noChange){ // if content is unchanged
                      $scope.disableEditor();
                      return;
                    }

                    $scope.disableEditor();

                    $scope.value = $scope.view.editableValue;

                    if ($scope.emptyState) {
                      checkIfLink();
                    }

                    // if it's stack/collection/tag then redirect to new location
                    if ($scope.kind !== 'file' && $scope.kind !== 'user'){
                        // refresh sidebar
                        $rootScope.$emit('refreshSidebar'); // updates favourites, tags and collection list
                        // redirect to new location
                        if (parentCollection){ // if stack is renamed
                          $location.path($scope.kind + '/' + parentCollection + '/' + $scope.view.editableValue.toLowerCase());
                        } else {
                          $location.path($scope.kind + '/' + $scope.view.editableValue.toLowerCase());
                        }
                        $location.replace(); // remove old name in browser history
                    }
                    return;
                  }
                });
            };
        }
    };
}]);
;'use strict';

angular.module('octobox.filemodal').directive('filemodal', function() {
  return {
    restrict: 'E',
    scope: {
      _filemodalShow: '&filemodalShow',
      _filemodalClose: '&filemodalClose',
      _filemodalItem: '&filemodalItem'
    },
    templateUrl: '/views/directives/filemodal.html'
  };
});
;'use strict';

angular.module('octobox.directives').directive('filters', function() {
	return {
		restrict: 'E',
		templateUrl: "../views/directives/filters.html"
	};
});
;'use strict';

angular.module('octobox.directives').directive('focusMe', function($timeout) {
  return {
    scope: { trigger: '=focusMe' },
    link: function(scope, element) {
      scope.$watch('trigger', function(value) {
        if(value === true) {
          //console.log('trigger',value);
          //$timeout(function() {
            element[0].focus();
            scope.trigger = false;
          //});
        }
      });
      // scope.$on('destroy', function () {
      //   clean();
      // });
    }
  };
});
;'use strict';

angular.module('octobox.directives').directive('fullImageInit', [
    '$window',
    '_',
    function ($window, _) {
        return {
            restrict: 'A',
            templateUrl: '../views/directives/fullimage.html',
            link: function(scope, element, attrs) {
                var windowEl = angular.element($window);
                // find image
                var image = angular.element(document.getElementById('image-preview'));
                var cssClass = attrs.loadedclass;

                scope.zoomEnabled = false;
                scope.fullViewEnabled = false;
                scope.toggleFullView = function () {
                  // return if zoom isnt available
                  if (!scope.zoomEnabled)
                    return;

                  scope.fullViewEnabled = !scope.fullViewEnabled;
                }

                // handler calculates percent size and sets
                // zoomEnabled to true/false depending on value
                var handler = function() {
                  // dont set if zoom is enabled
                  if (scope.fullViewEnabled)
                    return;

                  // set percent size and apply to refresh
                  scope.file.percentSize = Math.round(
                    (window.document.getElementById('image-preview').clientHeight /
                     window.document.getElementById('image-preview').naturalHeight) * 100);

                  // if file is zoomed out - enable zoom
                  if (scope.file.percentSize < 100)
                    scope.zoomEnabled = true;
                  else
                    scope.zoomEnabled = false;
                };

                // add 'loaded' class and calculate size once on file load
                image.bind('load', function (e) {
                    angular.element(image).addClass(cssClass);
                    scope.$apply(handler);
                });

                // bind size recalculation to window resize with 350ms limit
                var handlerThrottled = _.throttle(handler, 150, true);
                windowEl.on('resize', scope.$apply.bind(scope, handlerThrottled));
                var watchZoomState = scope.$watch('fullViewEnabled', function () {
                  scope.$apply.bind(scope, handler);
                });
                // clean bindings on modal close
                scope.$on('$destroy', function () {
                  windowEl.off('resize', scope.$apply.bind(scope, handlerThrottled));
                  watchZoomState();
                });
            }
        }
    }
]);
;'use strict';

angular.module('octobox.directives').directive('imageloaded', [
    function () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var cssClass = attrs.loadedclass;
                element.bind('load', function (e) {
                    angular.element(element).addClass(cssClass);
                });
            }
        }
    }
]);
;'use strict';

angular.module('octobox.directives').directive('miniMarkdown', [
    '$compile',
    function ($compile) {
        return function(scope, element, attrs) {
            scope.$watch(
              function(scope) {
                 // watch the 'mini-markdown' expression for changes
                return scope.$eval(attrs.miniMarkdown);
              },
              function(excerpt) {
                // define regexes
                var rgHeader = /(#{1,}.+[^\n])/gm; // matches line with one or more '#'
                var rgStrong = /([*][*][^*]+[*][*])/gm; // matches text wrapped in **
                var rgItalic = /([^*][*][^*]+[*])/gm; // matches text wrapped in *
                var rgLink = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:\%._\+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:\%_\+.~#?&//=]*)/gm; // matches website links
                // var rgUl = /([a-zA-Z]+\.\s+)/gm; // matches 'a.', 'I.' etc.
                var rgOl = /([0-9]+\.\s+)/gm; // matches '1.' etc

                if (excerpt) {
                  // get only the characters we can display
                  var mdExcerpt = excerpt.substring(0,220);
                  // apply mini-markdown
                  mdExcerpt = mdExcerpt
                                .replace(rgHeader, '<strong>$&</strong>')
                                .replace(rgStrong, '<strong>$&</strong>')
                                .replace(rgItalic, '<i>$&</i>')
                                .replace(rgOl, '<strong>$&</strong>')
                                .replace(rgLink, '<u>$&</u>');

                  // when the 'compile' expression changes
                  // assign it into the current DOM
                  element.html(mdExcerpt);

                  // compile the new DOM and link it to the current
                  // scope.
                  $compile(element.contents())(scope);
                }
              }
          );
      };
  }
]);
;'use strict';

angular.module('octobox.modal').directive('modal', ['Global', function(Global) {
  return {
    restrict: 'E',
    scope: {
      _modalShow: '&modalShow',
      _modalClose: '&modalClose',
      _modalContent: '&modalSrc',
      _modalItem: '&modalItem',
      _modalType: '&modalType'
    },
    templateUrl: '/views/directives/modal.html'
  };
}]);
;'use strict';

angular.module('octobox.directives').directive('scrollPosition', ['$window', '_', function($window, _) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var windowEl = angular.element($window);
      var handler = function() {
        scope.scroll = window.pageYOffset || document.documentElement.scrollTop;
        };
      var handlerThrottled = _.throttle(handler, 150, true);
      windowEl.on('scroll', scope.$apply.bind(scope, handlerThrottled));
      handler();
    }
  };
}]);
;'use strict';

angular.module('octobox.collections').factory('Collections', ['$resource', function($resource) {
	var Collections = $resource('api/content/collection/:path/:postfix', {
		path: '@path',
		postfix: '@postfix'
	}, {
		update: {
			method: 'PUT'
		},
		// Return all collection files and stacks
		all: {
			params: {
				postfix: 'all'
			},
			method: 'GET',
			isArray: true
		},
		// Return Collection Thumbnail
		thumbnail: {
			params: {
				postfix: 'thumbnail'
			},
			method: 'GET'
		},
		addFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/add'
		},
		removeFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/remove'
		},
		move: {
			method: 'PUT',
			params: {
				postfix: 'move'
			}
		}
	});
	return Collections;
}]);
;'use strict';

angular.module('octobox.file').factory('File', ['$resource', function($resource) {
	var File = $resource('api/content/file/:collection/:stack/:filename/:postfix', {
		collection: '@collection',
		stack: '@stack',
		filename: '@filename',
		postfix: '@postfix'
	}, {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		},
		createNote: {
			method: 'POST',
			params: {
				postfix: 'note'
			}
		},
		createFromURL: {
			method: 'POST',
			params: {
				postfix: 'addurl'
			}
		},
		saveNote: {
			method: 'PUT',
			params: {
				postfix: 'save'
			}
		},
		makeUrl: {
			params: {
				postfix: 'url'
			},
			method: 'GET',
			isArray: false
		},
		shareUrl: {
			params: {
				postfix: 'share'
			},
			method: 'GET',
			isArray: false
		},
		addFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/add'
		},
		removeFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/remove'
		},
		move: {
			method: 'PUT',
			params: {
				postfix: 'move'
			}
		}
	});
	return File;
}]);
;'use strict';

angular.module('octobox.inbox').factory('Inbox', ['$resource', function($resource) {
	return $resource('api/content/inbox/:postfix', {
		postfix: '@postfix'
	}, {
		update: {
			method: 'PUT'
		},
		// Return all files in inbox
		files: {
			params: {
				postfix: 'files'
			},
			method: 'GET',
			isArray: true
		},
		addFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/add'
		},
		removeFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/remove'
		}
	});
}]);
;'use strict';

angular.module('octobox.link').factory('Link', ['$resource', function($resource) {
	var Link = $resource('api/content/link/:collection/:stack/:linkname/:postfix', {
		collection: '@collection',
		stack: '@stack',
		linkname: '@linkname',
		postfix: '@postfix'
	}, {
		update: {
			method: 'PUT'
		},
		addFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/add'
		},
		removeFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/remove'
		},
		move: {
			method: 'PUT',
			params: {
				postfix: 'move'
			}
		}
	});
	return Link;
}]);
;'use strict';

angular.module('octobox.recent').factory('Recent', ['$resource', function($resource) {
	return $resource('api/content/recent', {

	}, {
		get: {
			isArray: true
		},
		addFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/add'
		},
		removeFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/remove'
		}
	});
}]);
;'use strict';

angular.module('octobox.stacks').factory('Stacks', ['$resource', function($resource) {
	var Stacks = $resource('api/content/stack/:collection/:stack/:postfix', {
		collection: '@collection',
		stack: '@stack',
		postfix: '@postfix'
	}, {
		update: {
			method: 'PUT'
		},
		// Return all stack files
		all: {
			params: {
				// Calls files instead of all (as in collection) because, there's
				// only files - no stacks, within a stack.
				postfix: 'files'
			},
			method: 'GET',
			isArray: true
		},
		// Return Collection Thumbnail
		thumbnail: {
			params: {
				postfix: 'thumbnail'
			},
			method: 'GET'
		},
		addFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/add'
		},
		removeFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/remove'
		},
		move: {
			method: 'PUT',
			params: {
				postfix: 'move'
			}
		}
	});
	return Stacks;
}]);
;'use strict';

angular.module('octobox.tags').factory('Tags', ['$resource', function($resource) {
	var Tags = $resource('api/content/tag/:name', {
		name: '@name'
	}, {
		update: {
			method: 'PUT'
		},
		remove: {
			method: 'PUT',
			url: 'api/content/tag/:name/remove'
		},
		assign: {
			method: 'PUT',
			url: 'api/content/tag/:name/assign'
		},
		unassign: {
			method: 'PUT',
			url: 'api/content/tag/:name/unassign'
		},
		items: {
			method: 'GET',
			url: 'api/content/tag/:name/items'
		},
		addFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/add'
		},
		removeFavourite: {
			method: 'PUT',
			url: 'api/content/favourites/remove'
		}
	});
	return Tags;
}]);
;'use strict';

// Simple service that grabs the Dropbox Auth and passes it to the interface.
angular.module('octobox.dropbox').factory('DropboxAuth', ['$http', '$rootScope', '$state', '_', 'Dropbox', 'AlertsManager', 'Global',
	function( $http, $rootScope, $state, _, Dropbox, AlertsManager, Global) {
		return {
			// Get Auth from API
			getAuth : function() {
				var message = {
					content: null
				};
				$http.get('api/dropbox/auth', {
					params: { user: window.user }
				}).success(function(data) {
					// console.log(data);
					message.content = 'done';
					if (data.errors) {
						AlertsManager.addAlert('An error has occured, please try again later', 'alert-error');
					} else {
						// Send data to alerts manager
						AlertsManager.addAlert('All good! Your Dropbox Account - \'' + data.email + '\' was authorized!', 'alert-success');
						// Set auth global to true
						Global.dropboxAuthorized = true;
						Global.user.dropbox = _.extend(Global.user.dropbox, data);
						Dropbox.setCredentials({ access_token: data.token });
						$rootScope.$emit('syncContent');
					}
				});
				return message;
			},
			// Revoke access to Dropbox
			revoke : function() {
				var message = {
					content: null
				};
				$http.get('api/dropbox/revoke', {
					params: { user: window.user }
				}).success(function(data) {
					message.content = 'done';
					if (data.err) {
						AlertsManager.addAlert('An error has occured, please try again later', 'alert-error');
					} else {
						// Send data to alerts manager
						AlertsManager.addAlert(data, 'alert-success');
						// Set auth global to false
						Global.dropboxAuthorized = false;
						window.user.dropbox.token = '';

						// Emit Event to Refresh Content
						$state.go('home', {}, {reload: true});
					}
				});
				return message;
			}

		};
	}
]);
;'use strict';

// Simple service that grabs the Dropbox Auth and passes it to the interface.
angular.module('octobox.dropbox').factory('DropboxSync', [ '$http', '$window', '$rootScope', 'AlertsManager',
	function($http, $window, $rootScope, AlertsManager) {
		return {
			sync: function(quiet) {
				var message = {
					content: null
				};
				$http.get('api/content/sync').success(function(data) {
					message.content = 'done';
					if (data.err) { // all errors returned from Dropbox
						AlertsManager.addAlert('An error has occured, please try again later', 'alert-error', 2500);
					} else {
						// Send data to alerts manager
						if (quiet === undefined || quiet === false)
							AlertsManager.addAlert(JSON.parse(data), 'alert-success', 2500);

						$rootScope.$emit('refreshContent');
					}
				}).
				error(function() { // This error occurs when Octobox API fails
					AlertsManager.addAlert('An error has occured. Perhaps you need to authorize your Dropbox account first?', 'alert-error', 3500);
				});
				return message;
			}
		};
	}
]);
