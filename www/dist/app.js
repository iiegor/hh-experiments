var requirejs,require,__d;!function(n){function e(n,e){return w.call(n,e)}function t(n,e){var t,r,i,o,u,c,s,l,f,a,p,d,h=e&&e.split("/"),g=m.map,w=g&&g["*"]||{};if(n){for(n=n.split("/"),u=n.length-1,m.nodeIdCompat&&v.test(n[u])&&(n[u]=n[u].replace(v,"")),"."===n[0].charAt(0)&&h&&(d=h.slice(0,h.length-1),n=d.concat(n)),f=0;f<n.length;f++)if(p=n[f],"."===p)n.splice(f,1),f-=1;else if(".."===p){if(0===f||1===f&&".."===n[2]||".."===n[f-1])continue;f>0&&(n.splice(f-1,2),f-=2)}n=n.join("/")}if((h||w)&&g){for(t=n.split("/"),f=t.length;f>0;f-=1){if(r=t.slice(0,f).join("/"),h)for(a=h.length;a>0;a-=1)if(i=g[h.slice(0,a).join("/")],i&&(i=i[r])){o=i,c=f;break}if(o)break;!s&&w&&w[r]&&(s=w[r],l=f)}!o&&s&&(o=s,c=l),o&&(t.splice(0,c,o),n=t.join("/"))}return n}function r(e,t){return function(){var r=y.call(arguments,0);return"string"!=typeof r[0]&&1===r.length&&r.push(null),f.apply(n,r.concat([e,t]))}}function i(n){return function(e){return t(e,n)}}function o(n){return function(e){d[n]=e}}function u(t){if(e(h,t)){var r=h[t];delete h[t],g[t]=!0,l.apply(n,r)}if(!e(d,t)&&!e(g,t))throw new Error("No "+t);return d[t]}function c(n){var e,t=n?n.indexOf("!"):-1;return t>-1&&(e=n.substring(0,t),n=n.substring(t+1,n.length)),[e,n]}function s(n){return function(){return m&&m.config&&m.config[n]||{}}}var l,f,a,p,d={},h={},m={},g={},w=Object.prototype.hasOwnProperty,y=[].slice,v=/\.js$/;a=function(n,e){var r,o=c(n),s=o[0];return n=o[1],s&&(s=t(s,e),r=u(s)),s?n=r&&r.normalize?r.normalize(n,i(e)):t(n,e):(n=t(n,e),o=c(n),s=o[0],n=o[1],s&&(r=u(s))),{f:s?s+"!"+n:n,n:n,pr:s,p:r}},p={require:function(n){return r(n)},exports:function(n){var e=d[n];return"undefined"!=typeof e?e:d[n]={}},module:function(n){return{id:n,uri:"",exports:d[n],config:s(n)}}},l=function(t,i,c,s){var l,f,m,w,y,v,_=[],E=typeof c;if(s=s||t,"undefined"===E||"function"===E){for(i=!i.length&&c.length?["require","exports","module"]:i,y=0;y<i.length;y+=1)if(w=a(i[y],s),f=w.f,"require"===f)_[y]=p.require(t);else if("exports"===f)_[y]=p.exports(t),v=!0;else if("module"===f)l=_[y]=p.module(t);else if(e(d,f)||e(h,f)||e(g,f))_[y]=u(f);else{if(!w.p)throw new Error(t+" missing "+f);w.p.load(w.n,r(s,!0),o(f),{});
_[y]=d[f]}m=c?c.apply(d[t],_):void 0,t&&(l&&l.exports!==n&&l.exports!==d[t]?d[t]=l.exports:m===n&&v||(d[t]=m))}else t&&(d[t]=c)},requirejs=require=f=function(e,t,r,i,o){if("string"==typeof e)return p[e]?p[e](t):u(a(e,t).f);if(!e.splice){if(m=e,m.deps&&f(m.deps,m.callback),!t)return;t.splice?(e=t,t=r,r=null):e=n}return t=t||function(){},"function"==typeof r&&(r=i,i=o),i?l(n,e,t,r):setTimeout(function(){l(n,e,t,r)},4),f},f.config=function(n){return f(n)},requirejs._defined=d,__d=function(n,t,r){if("string"!=typeof n)throw new Error("See almond README: incorrect module build, no module name");t.splice||(r=t,t=[]),e(d,n)||e(h,n)||(h[n]=[n,t,r])},__d.amd={jQuery:!0}}(),__d("XHPJS",[],function(){function n(n,e){this.instanceData={},this.instances={},this.elements={},n.forEach(function(n){var e=n[0];this.instanceData[e]=n},this),e.forEach(this.call.bind(this)),n.forEach(function(n){var e=n[0];this.getInstance(e)},this)}return n.prototype={call:function(n){var e=n[0],t=n[1],r=this.mapArguments(n[2]);e=window[e]?window[e]:require(e),t=e[t],t.apply(null,r)},mapArgument:function(n){var e=n[0],t=n[1];return"v"==e?t:"e"==e?this.getElement(t):"i"==e?this.getInstance(t):void 0},mapArguments:function(n){return n.map(this.mapArgument,this)},getElement:function(n){return"undefined"==typeof this.elements[n]&&(this.elements[n]=document.getElementById(n)),this.elements[n]},getInstance:function(n){return"undefined"==typeof this.instances[n]&&this.constructInstance(n),this.instances[n]},constructInstance:function(n){var e=this.instanceData[n],t=e[1],r=this.mapArguments(e[2]),i=window[t]?window[t]:require(t),o=function(n){return i.apply(this,n)};o.prototype=i.prototype;var u=new o(r);u.__xhpJSModule=t,u.__xhpJSElement=this.getElement(n),this.instances[n]=u}},n.renderReactElement=function(n,e,t){var r=window.React?window.React:require("react"),i=window[e]?window[e]:require(e),o=r.createElement(i,t,null);ReactDOM.render(o,n)},n});
__d("MyJSController",function(){function n(n,e){console.log(e)}return n});
__d("MyReactClass",function(){return React.createClass({render:function(){return React.createElement("div",null,React.createElement("div",null,"test"))}})});var MyJSModule={myJSFunction:function(n,e){console.log(n)}};__d("InitialJSLoader",["XHPJS"],function(n){return{handleServerJS:function(e,t){return new n(e,t)}}});
__d("app",function(){});