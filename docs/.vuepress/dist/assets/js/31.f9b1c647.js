(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{635:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));function o(e,t,n,o){var c,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(c=e[u])&&(s=(r<3?c(s):r>3?c(t,n,s):c(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError},730:function(e,t,n){"use strict";n.r(t);var o=n(635),c=n(12);let r=class extends c.Vue{constructor(){super(...arguments),this.count=1}mounted(){console.info("+++ mounted")}onClick(){this.count++}};r=Object(o.a)([c.Component],r);var s=r,u=n(75),i=Object(u.a)(s,(function(){var e=this._self._c;this._self._setupProxy;return e("div",{on:{click:this.onClick}},[e("h1",[this._v("计数："+this._s(this.count))])])}),[],!1,null,null,null);t.default=i.exports}}]);