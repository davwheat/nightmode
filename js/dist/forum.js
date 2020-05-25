module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=9)}([function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["tags/components/TagsPage"]},function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["components/FieldSet"]},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t,o){"use strict";o.r(t);var n=o(2),r=o.n(n),a=o(0),i=o(3),s=o.n(i),f=o(4),c=o.n(f),p=o(5),u=o.n(p),d=o(6),l=o.n(d),g=o(7),h=o.n(g),v=o(1),_=o.n(v),T=o(8),M=o.n(T),N={AUTO:0,LIGHT:1,DARK:2,
//! WARN:   If you change this value, also remember
//!         to change the value which is set to all users
//!         by default in Preferences.php 
DEFAULT:0},b=[].concat(new Set(Object.values(N)));function y(){var e,t=!1;try{e=parseInt(localStorage.getItem("fofNightMode_deviceTheme"))}catch(e){console.error("Theme is not a valid integer! (1)"),localStorage.setItem("fofNightMode_deviceTheme",N.DEFAULT),t=!0}isNaN(e)&&(console.error("Theme is not a valid integer! (2)"),localStorage.setItem("fofNightMode_deviceTheme",N.DEFAULT),t=!0),t||b.includes(e)||(console.error("Theme is out of bounds (not between "+Math.min.apply(Math,b)+" and "+Math.max.apply(Math,b)+")!"),localStorage.setItem("fofNightMode_deviceTheme",N.DEFAULT),t=!0)}function x(e){if(!!e.preferences().fofNightMode_perDevice&&e.preferences().fofNightMode_perDevice)return parseInt(localStorage.getItem("fofNightMode_deviceTheme"));if("number"==typeof e.preferences().fofNightMode_themeType)return e.preferences().fofNightMode_themeType;if(e.preferences().fofNightMode){var t=e.preferences().fofNightMode,o=N.LIGHT;return!0===t&&(o=N.DARK),e.savePreferences({fofNightMode:null,fofNightMode_themeType:o}),o}return e.savePreferences({fofNightMode:null,fofNightMode_themeType:N.AUTO}),N.DEFAULT}function S(){var e=app.session.user;e?(e.preferences().fofNightMode_perDevice&&y(),D(x(e))):D(N.DEFAULT)}function D(e){switch(e){case N.AUTO:A();break;case N.LIGHT:I();break;case N.DARK:O();break;default:A()}}function A(){window.matchMedia("(prefers-color-scheme: dark)").matches?O():I()}function I(){$("body").removeClass("dark")}function O(){$("body").addClass("dark")}var P=function(){Object(a.extend)(s.a.prototype,"settingsItems",(function(e){var t=app.session.user,o=!!t.preferences().fofNightMode_perDevice&&t.preferences().fofNightMode_perDevice;o&&y();var n=x(t);e.add("fof-nightmode",l.a.component({label:app.translator.trans("fof-nightmode.forum.user.settings.heading"),className:"Settings-theme",children:[m("p",{className:"description"},app.translator.trans("fof-nightmode.forum.user.settings.description")),m("p",{className:"description"},app.translator.trans("fof-nightmode.forum.user.settings.description2")),h.a.component({children:app.translator.trans("fof-nightmode.forum.user.settings.device_specific_setting_checkbox"),className:"Settings-theme--per_device_cb",state:o,onchange:function(e){t.savePreferences({fofNightMode_perDevice:e}).then((function(){e?(localStorage.setItem("fofNightMode_deviceTheme",n),m.redraw(),S()):t.savePreferences({fofNightMode:n}).then((function(){m.redraw(),S()}))}))}}),u.a.component({value:n||N.DEFAULT,label:"test",key:"selected_theme",className:"Settings-theme--input",onchange:function(e){if(o)return localStorage.setItem("fofNightMode_deviceTheme",e),m.redraw(),void S();t.savePreferences({fofNightMode_themeType:e}).then((function(){m.redraw(),S()}))},options:[app.translator.trans("fof-nightmode.forum.user.settings.options.auto"),app.translator.trans("fof-nightmode.forum.user.settings.options.day"),app.translator.trans("fof-nightmode.forum.user.settings.options.night")]}),m("p",{className:"Settings-theme--selection_description"},n===N.AUTO?app.translator.trans("fof-nightmode.forum.user.settings.option_descriptions.auto"):n===N.LIGHT?app.translator.trans("fof-nightmode.forum.user.settings.option_descriptions.day"):n===N.DARK?app.translator.trans("fof-nightmode.forum.user.settings.option_descriptions.night"):c.a.component())]}))}))};r.a.initializers.add("fof-nightmode",(function(e){P(),Object(a.extend)(M.a.prototype,"init",S),_.a&&Object(a.extend)(_.a.prototype,"config",S)}))}]);
//# sourceMappingURL=forum.js.map