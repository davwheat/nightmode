module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r}));var n={AUTO:0,LIGHT:1,DARK:2,DEFAULT:function(){return Number.parseInt(app.data["fof-nightmode_default_theme"])||0}},r={localStorageKey:"fofNightMode_deviceTheme"};t.c=n},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["tags/components/TagsPage"]},,function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["components/FieldSet"]},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t,o){"use strict";o.r(t);var n=o(4),r=o.n(n),c=o(1),a=o(5),i=o.n(a),s=o(6),f=o.n(s),p=o(7),u=o.n(p),l=o(8),d=o.n(l),g=o(9),h=o.n(g),b=o(2),v=o.n(b),y=o(10),_=o.n(y),N=o(0),S=N.a.localStorageKey;function T(){var e=Array.from(new Set(Object.values(N.b))),t=parseInt(localStorage.getItem(S));isNaN(t)?x("Theme is not a valid integer! Resetting..."):e.includes(t)||x("Theme is out of bounds! Resetting...")}function x(e){console.warn(e),localStorage.setItem(S,N.b.DEFAULT())}function M(e){var t=e.session.user,o=!!t.preferences().fofNightMode_perDevice,n=t.preferences().fofNightMode_themeType,r=t.preferences().fofNightMode;if(o)return parseInt(localStorage.getItem(N.a.localStorageKey));if(console.log("s ",n),console.log("o ",r),r){var c=N.b.LIGHT;return!0===r&&(c=N.b.DARK),t.savePreferences({fofNightMode:!1,fofNightMode_themeType:c}),c}return"number"==typeof n&&-1!==n?n:(t.savePreferences({fofNightMode:!1,fofNightMode_themeType:N.b.DEFAULT()}),N.b.DEFAULT())}function I(){var e=app.session.user;e?(e.preferences().fofNightMode_perDevice&&T(),D(M(app))):D(N.c.DEFAULT())}function D(e){switch(e){case N.c.LIGHT:A();break;case N.c.DARK:O();break;default:window.matchMedia("(prefers-color-scheme: dark)").matches?O():A()}}function A(){$("body").removeClass("dark")}function O(){$("body").addClass("dark")}var P=N.a.localStorageKey,j=function(e){return app.translator.trans("fof-nightmode.forum.user.settings."+e)},L=function(){Object(c.extend)(i.a.prototype,"settingsItems",(function(e){var t=app.session.user,o=!!t.preferences().fofNightMode_perDevice;o&&T();var n=M(app);e.add("fof-nightmode",d.a.component({label:j("heading"),className:"Settings-theme",children:[m("p",{className:"description"},j("description")),m("p",{className:"description"},j("description2")),h.a.component({children:j("device_specific_setting_checkbox"),className:"Settings-theme--per_device_cb",state:o,onchange:function(e){e&&localStorage.setItem(P,n),t.savePreferences({fofNightMode_perDevice:e}).then((function(){e?I():t.savePreferences({fofNightMode_themeType:Number.parseInt(n)}).then((function(){I()}))}))}}),u.a.component({value:n||N.b.DEFAULT(),label:"test",key:"selected_theme",className:"Settings-theme--input",onchange:function(e){if(o)return localStorage.setItem(P,e),m.redraw(),void I();t.savePreferences({fofNightMode_themeType:Number.parseInt(e)}).then((function(){m.redraw(),I()}))},options:[j("options.auto"),j("options.day"),j("options.night")]}),m("p",{className:"Settings-theme--selection_description"},n===N.b.AUTO?j("option_descriptions.auto"):n===N.b.LIGHT?j("option_descriptions.day"):n===N.b.DARK?j("option_descriptions.night"):f.a.component())]}))}))};r.a.initializers.add("fof-nightmode",(function(e){L(),Object(c.extend)(_.a.prototype,"init",I),v.a&&Object(c.extend)(v.a.prototype,"config",I)}))}]);
//# sourceMappingURL=forum.js.map