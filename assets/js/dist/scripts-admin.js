!function(){"use strict";var e,t={5154:function(e,t,n){var r,i,o,l,d,a,u,f=gform.utils,s=window.turnstile||{},c=(null===(r=window)||void 0===r?void 0:r.gform_turnstile_config)||{},v=function(){var e;(0,f.trigger)({event:"gform/turnstile/before_render_preview",el:document,data:(null==c?void 0:c.data)||{},native:!1}),s.render("#gform_turnstile_preview",{sitekey:(null==c||null===(e=c.data)||void 0===e?void 0:e.site_key)||""})},g=function(e){var t,n;if(e.target.src&&-1!==e.target.src.indexOf("challenges.cloudflare")){var r;(0,f.trigger)({event:"gform/turnstile/after_render_preview",el:document,data:(null==c?void 0:c.data)||{},native:!1}),(0,f.getNodes)('#gform_turnstile_preview iframe[style*="display: none"]',!0,document,!0).length&&(document.getElementById("gform_turnstile_preview").innerHTML='\n\t<div class="gform-alert gform-alert--error gform-alert--theme-primary gform-alert--inline">\n\t  <span aria-hidden="true" class="gform-alert__icon gform-icon gform-icon--circle-error-fine" ></span>\n\t  <div class="gform-alert__message-wrap">\n\t    <p class="gform-alert__message">'.concat((null==c||null===(r=c.i18n)||void 0===r?void 0:r.render_error)||"","</p>\n\t  </div>\n\t</div>"));var i=e.target.src,o=new FormData;o.append("url",i),o.append("secret",(null==c||null===(t=c.data)||void 0===t?void 0:t.save_url_nonce)||""),fetch((null==c||null===(n=c.endpoints)||void 0===n?void 0:n.save_url)||"",{method:"POST",body:o})}},m=n(4381),_=(null===(i=window)||void 0===i||null===(o=i.gform)||void 0===o?void 0:o.addAction)||{},p=(null===(l=window)||void 0===l||null===(d=l.gform)||void 0===d?void 0:d.addFilter)||{},w=(null===(a=window)||void 0===a?void 0:a.gform_turnstile_config)||{},h=(null===(u=window)||void 0===u?void 0:u.GetFieldsByType)||{},y=function(e){var t=(0,m.Z)(e,1)[0],n=document.getElementById("field_turnstile_widget_theme");n&&(n.value=void 0===t.turnstileWidgetTheme?"":t.turnstileWidgetTheme)},b=function(e){var t=e.target.selectedOptions[0].value;window.SetFieldProperty("turnstileWidgetTheme",t),window.RefreshSelectedFieldPreview()},O=function(e,t){return"turnstile"!==t?e:h(["turnstile"]).length?(alert(w.i18n.unique_error),!1):e},T=function(){document.getElementById("gform_turnstile_preview")&&(document.addEventListener("load",g,!0),s.ready(v),(0,f.consoleInfo)("Gravity Forms Turnstile Admin: Initialized Javascript for widget preview.")),_("gform_post_load_field_settings",y),p("gform_form_editor_can_field_be_added",O),document.getElementById("field_turnstile_widget_theme")&&document.getElementById("field_turnstile_widget_theme").addEventListener("change",b),(0,f.consoleInfo)("Gravity Forms Turnstile Admin: Initialized all javascript that targeted document ready.")};(0,f.ready)(T)}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,i,o){if(!n){var l=1/0;for(f=0;f<e.length;f++){n=e[f][0],i=e[f][1],o=e[f][2];for(var d=!0,a=0;a<n.length;a++)(!1&o||l>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(d=!1,o<l&&(l=o));if(d){e.splice(f--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,i,o]},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={223:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,l=n[0],d=n[1],a=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in d)r.o(d,i)&&(r.m[i]=d[i]);if(a)var f=a(r)}for(t&&t(n);u<l.length;u++)o=l[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(f)},n=self.webpackChunkgform_turnstile=self.webpackChunkgform_turnstile||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[194],(function(){return r(9553)}));var i=r.O(void 0,[194],(function(){return r(5154)}));i=r.O(i)}();
//# sourceMappingURL=scripts-admin.js.map