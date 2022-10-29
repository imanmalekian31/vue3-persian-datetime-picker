(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue3PersianDatetimePicker"] = factory(require("vue"));
	else
		root["Vue3PersianDatetimePicker"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0ecf":
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():undefined}(this,(function(){"use strict";var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(s,f,n){var u=f.prototype;n.utc=function(t){var i={date:t,utc:!0,args:arguments};return new f(i)},u.utc=function(i){var e=n(this.toDate(),{locale:this.$L,utc:!0});return i?e.add(this.utcOffset(),t):e},u.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var o=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var r=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else r.call(this)};var a=u.utcOffset;u.utcOffset=function(s,f){var n=this.$utils().u;if(n(s))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(i);if(!s)return null;var f=(""+s[0]).match(e)||["-",0,0],n=f[0],u=60*+f[1]+ +f[2];return 0===u?0:"+"===n?u:-u}(s),null===s))return this;var u=Math.abs(s)<=16?60*s:s,o=this;if(f)return o.$offset=u,o.$u=0===s,o;if(0!==s){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(u+r,t)).$offset=u,o.$x.$localOffset=r}else o=this.utc();return o};var h=u.format;u.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var l=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var c=u.diff;u.diff=function(t,i,e){if(t&&this.$u===t.$u)return c.call(this,t,i,e);var s=this.local(),f=n(t).local();return c.call(s,f,i,e)}}}));

/***/ }),

/***/ "1c1c":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";return function(e,t,a){var n="h:mm A",d={lastDay:"[Yesterday at] "+n,sameDay:"[Today at] "+n,nextDay:"[Tomorrow at] "+n,nextWeek:"dddd [at] "+n,lastWeek:"[Last] dddd [at] "+n,sameElse:"MM/DD/YYYY"};t.prototype.calendar=function(e,t){var n=t||this.$locale().calendar||d,o=a(e||void 0).startOf("d"),s=this.diff(o,"d",!0),i="sameElse",f=s<-6?i:s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":i,l=n[f]||d[f];return"function"==typeof l?l.call(this,a()):this.format(l)}}}));

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "4208":
/***/ (function(module, exports, __webpack_require__) {

!function(r,e){ true?module.exports=e():undefined}(this,(function(){"use strict";return function(r,e,t){r=r||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,e,t,o){return n.fromToBase(r,e,t,o)}t.en.relativeTime=o,n.fromToBase=function(e,n,i,d,u){for(var f,a,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(f=d?t(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(f));if(s=f>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),a="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return a;var M=s?l.future:l.past;return"function"==typeof M?M(a):M.replace("%s",a)},n.to=function(r,e){return i(r,e,this,!0)},n.from=function(r,e){return i(r,e,this)};var d=function(r){return r.$u?t.utc():t()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}}));

/***/ }),

/***/ "4635":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("93e7");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("40b7c789", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5204":
/***/ (function(module, exports, __webpack_require__) {

!function(_,e){ true?module.exports=e(__webpack_require__("5a0c")):undefined}(this,(function(_){"use strict";function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"fa",weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekStart:6,months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"}};return t.default.locale(d,null,!0),d}));

/***/ }),

/***/ "5a0c":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "5e0f":
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():undefined}(this,(function(){"use strict";return function(n,e,t){var r=e.prototype,o=function(n){return n&&(n.indexOf?n:n.s)},u=function(n,e,t,r,u){var i=n.name?n:n.$locale(),a=o(i[e]),s=o(i[t]),f=a||s.map((function(n){return n.slice(0,r)}));if(!u)return f;var d=i.weekStart;return f.map((function(n,e){return f[(e+(d||0))%7]}))},i=function(){return t.Ls[t.locale()]},a=function(n,e){return n.formats[e]||function(n){return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(n,e,t){return e||t.slice(1)}))}(n.formats[e.toUpperCase()])},s=function(){var n=this;return{months:function(e){return e?e.format("MMMM"):u(n,"months")},monthsShort:function(e){return e?e.format("MMM"):u(n,"monthsShort","months",3)},firstDayOfWeek:function(){return n.$locale().weekStart||0},weekdays:function(e){return e?e.format("dddd"):u(n,"weekdays")},weekdaysMin:function(e){return e?e.format("dd"):u(n,"weekdaysMin","weekdays",2)},weekdaysShort:function(e){return e?e.format("ddd"):u(n,"weekdaysShort","weekdays",3)},longDateFormat:function(e){return a(n.$locale(),e)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};r.localeData=function(){return s.bind(this)()},t.localeData=function(){var n=i();return{firstDayOfWeek:function(){return n.weekStart||0},weekdays:function(){return t.weekdays()},weekdaysShort:function(){return t.weekdaysShort()},weekdaysMin:function(){return t.weekdaysMin()},months:function(){return t.months()},monthsShort:function(){return t.monthsShort()},longDateFormat:function(e){return a(n,e)},meridiem:n.meridiem,ordinal:n.ordinal}},t.months=function(){return u(i(),"months")},t.monthsShort=function(){return u(i(),"monthsShort","months",3)},t.weekdays=function(n){return u(i(),"weekdays",null,null,n)},t.weekdaysShort=function(n){return u(i(),"weekdaysShort","weekdays",3,n)},t.weekdaysMin=function(n){return u(i(),"weekdaysMin","weekdays",2,n)}}}));

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "93e7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter-from,.fade-leave-active{opacity:0}.vpd-fade-scale-enter-active,.vpd-fade-scale-leave-active{transition:opacity .5s}.vpd-fade-scale-enter-from,.vpd-fade-scale-leave-active{opacity:0}.vpd-fade-scale-enter-from .vpd-content,.vpd-fade-scale-leave-active .vpd-content{transform:scale(.7);opacity:0}.slideX-enter-active,.slideX-leave-active{position:absolute;top:0;bottom:0;right:0;left:0;opacity:1;transform:translateX(0);transition:all .3s ease-out}.slideX-enter-from,.slideX-leave-to{opacity:0}.direction-next .slideX-leave-to{transform:translateX(-100%)}.direction-next .slideX-enter-from,.direction-prev .slideX-leave-to{transform:translateX(100%)}.direction-prev .slideX-enter-from{transform:translateX(-100%)}.slideY-enter-active,.slideY-leave-active{position:absolute;top:0;bottom:0;right:0;left:0;opacity:1;transform:translateY(0);transition:all .3s ease-in-out}.slideY-enter-from,.slideY-leave-to{opacity:0}.direction-next .slideY-leave-to{transform:translateY(100%)}.direction-next .slideY-enter-from,.direction-prev .slideY-leave-to{transform:translateY(-100%)}.direction-prev .slideY-enter-from{transform:translateY(100%)}.fade-transition{opacity:1;transition:all .3s ease}.fade-enter,.fade-leave{opacity:0}.fast-updating .slideY-enter-active,.fast-updating .slideY-leave-active{transition:all .17s ease-in-out}.fast-updating .direction-next .slideY-leave-to{transform:translateY(45%)}.fast-updating .direction-next .slideY-enter-from{transform:translateY(-5%)}.fast-updating .direction-prev .slideY-leave-to{transform:translateY(-45%)}.fast-updating .direction-prev .slideY-enter-from{transform:translateY(5%)}.vpd-dir-rtl .direction-next .slideX-leave-to{transform:translateX(100%)}.vpd-dir-rtl .direction-next .slideX-enter-from,.vpd-dir-rtl .direction-prev .slideX-leave-to{transform:translateX(-100%)}.vpd-dir-rtl .direction-prev .slideX-enter-from{transform:translateX(100%)}.vpd-main *,.vpd-wrapper *{box-sizing:border-box}.vpd-clearfix:after,.vpd-clearfix:before{content:\" \";display:table}.vpd-clearfix:after{clear:both}.vpd-input-group{display:flex;position:relative}.vpd-input-group input{flex-grow:1;border:1px solid #dadada;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;line-height:30px;padding:0 10px}.vpd-input-group input:not(.vpd-is-editable){cursor:pointer}.vpd-input-group label{color:#fff;white-space:nowrap}.vpd-input-group label svg+span{display:inline-block;margin-right:4px;vertical-align:middle}.vpd-input-group.vpd-disabled input,.vpd-input-group.vpd-disabled label{cursor:default}.vpd-input-group .vpd-clear-btn{position:absolute;left:0;top:0;line-height:32px;width:30px;cursor:pointer;text-align:center;font-style:normal;font-family:monospace,sans-serif;opacity:.4}.vpd-input-group .vpd-clear-btn:hover{opacity:.7}.vpd-icon-btn{cursor:pointer;padding:0 10px;display:flex;justify-content:center;align-items:center}.vpd-wrapper{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:9999}.vpd-container{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.vpd-content{opacity:1;transition:all .4s cubic-bezier(.25,.1,.17,1.84);text-align:right;direction:rtl;width:316px;background-color:#fff;box-shadow:5px 22px 95px -14px #000;cursor:default}.vpd-header{color:#fff;padding:10px 20px}.vpd-body,.vpd-header,.vpd-year-label{position:relative}.vpd-year-label{margin-bottom:2px;height:24px;opacity:.7;overflow:hidden;cursor:pointer;font-size:16px}.vpd-year-label>span{display:inline-block;padding:0 10px;line-height:22px;height:22px;border-width:1px;border-style:solid;border-radius:2px;transition:all .1s ease-out}.vpd-year-label>span:not(:hover){border-color:transparent!important;color:inherit!important}.vpd-date{position:relative;font-size:28px;line-height:40px;height:40px;overflow:hidden}.vpd-date span{display:block;height:inherit;line-height:inherit}.vpd-week{font-size:12px;padding:0 14px;line-height:20px;color:#b9b9b9;margin-bottom:10px;height:20px}.vpd-weekday{float:right;width:40px;text-align:center}.vpd-days{padding:0 18px;position:relative;overflow:hidden;transition:height .3s cubic-bezier(.75,.02,.27,.99)}.vpd-day{width:40px;height:40px;float:right;line-height:40px;position:relative}.vpd-day:not(.vpd-empty){cursor:pointer;transition:color .45s ease;text-align:center}.vpd-day[disabled=true]{cursor:default;color:#ccc}.vpd-day[disabled=true] .vpd-day-effect{background-color:transparent}.vpd-day[disabled=true] .vpd-day-text{color:#ccc}.vpd-day:not([disabled=true]):hover{color:#fff}.vpd-day:not([disabled=true]):hover .vpd-day-effect{transform:scale(1);opacity:.6}.vpd-day:not([disabled=true]).vpd-selected{color:#fff}.vpd-day:not([disabled=true]).vpd-selected .vpd-day-effect{transform:scale(1);opacity:1}.vpd-day:not([disabled=true]).vpd-range-between{color:#fff}.vpd-day:not([disabled=true]).vpd-range-between .vpd-day-effect{transform:scale(.75);opacity:1}.vpd-day:not([disabled=true]).vpd-range-hover{color:#fff}.vpd-day:not([disabled=true]).vpd-range-hover .vpd-day-effect{transform:scale(.7);opacity:.6}.vpd-day-effect{position:absolute;width:36px;height:36px;border-radius:50%;top:2px;left:2px;transform:scale(0);opacity:0;transition:all .45s ease}.vpd-controls,.vpd-day-text{position:relative}.vpd-controls{z-index:2;height:50px;line-height:50px;text-align:center}.vpd-controls button{position:relative;background-color:transparent;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer}.vpd-controls button[disabled=true]{opacity:.3;cursor:default}.vpd-next,.vpd-prev{width:50px;height:50px;line-height:50px}.vpd-next{float:right}.vpd-prev{float:left}.vpd-arrow{width:11px;height:11px}.vpd-month{position:relative;overflow:hidden}.vpd-month-label{position:absolute;top:0;left:50px;right:50px;overflow:hidden;width:95px;margin-left:auto;margin-right:auto;line-height:50px;height:50px;text-align:center;cursor:pointer}.vpd-month-label>span{display:inline-block;padding:0 5px;line-height:26px;height:26px;border-width:1px;border-style:solid;border-radius:2px;transition:all .1s ease-out;white-space:nowrap}.vpd-month-label>span:not(:hover){border-color:transparent!important;color:inherit!important}.vpd-actions{text-align:right;padding:8px}.vpd-actions button{border:none;background-color:transparent;display:inline-block;cursor:pointer;outline:none;font-size:14px;text-transform:uppercase;min-width:88px;text-align:center;-webkit-appearance:none;line-height:36px;height:36px;transition:all .3s ease}.vpd-actions button:hover{background-color:#f2f2f2}.vpd-actions button[disabled=true]{opacity:.6;cursor:default}.vpd-addon-list-content{direction:rtl}.vpd-addon-list-item{width:33.33333%;text-align:center;font-size:14px;height:44px;line-height:36px;transition:all .3s ease;color:#8a8a8a;cursor:pointer;float:right;border:4px solid #fff}.vpd-addon-list-item.vpd-selected,.vpd-addon-list-item:hover{background-color:#f9f9f9}.vpd-addon-list-item.vpd-selected{font-weight:700;background-color:#f5f5f5}.vpd-addon-list{width:100%;background-color:#fff;position:absolute;z-index:2;overflow:auto;top:0;bottom:52px;border-bottom:1px solid #eee;direction:ltr}.vpd-addon-list.vpd-can-close{padding-top:30px}.vpd-month-list{padding-top:15px}.vpd-month-list .vpd-addon-list-item{height:54px;line-height:46px}.vpd-addon-list-item[disabled=true]{opacity:.3;cursor:default!important;background-color:transparent!important}.vpd-close-addon{position:absolute;top:4px;left:4px;z-index:2;width:30px;height:30px;line-height:30px;color:#444;font-family:sans-serif;text-align:center;cursor:pointer;background-color:rgba(0,0,0,.1)}.vpd-time{-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-select:none}.vpd-time .vpd-time-h,.vpd-time .vpd-time-m{position:relative;margin-top:70px;float:left;width:50%;height:100%;text-align:center;color:#a2a2a2}.vpd-time .vpd-time-h .vpd-counter,.vpd-time .vpd-time-m .vpd-counter{font-size:90px;height:100px;line-height:100px;overflow:hidden;position:relative;direction:ltr;transition:opacity .3s ease-in-out}.vpd-time .vpd-time-h .vpd-counter-item,.vpd-time .vpd-time-m .vpd-counter-item{height:inherit;width:51px;display:inline-block;vertical-align:text-top;position:relative}.vpd-time .vpd-time-h:after{position:absolute;top:50%;right:0;content:\":\";font-size:70px;transform:translate(50%,-50%);transition:inherit}.vpd-time .vpd-down-arrow-btn,.vpd-time .vpd-up-arrow-btn{display:block;cursor:pointer;outline:none;height:34px}.vpd-time.vpd-disabled .vpd-counter-item{opacity:.5}.vpd-time-column .vpd-counter{position:relative}.vpd-time-column .vpd-counter input{position:absolute;z-index:5;border:none;background-color:transparent;top:0;left:0;width:100%;height:100%;text-align:center;outline:none;font-size:inherit;color:inherit;line-height:inherit;opacity:0;padding:5% 0 0 0}.vpd-time-column .vpd-counter input:focus{opacity:1}.vpd-time-column .vpd-counter input:focus:not(.is-empty)~div{opacity:0}.vpd-prev-step{position:absolute;top:0;left:0;width:30px;height:30px;text-align:center;padding:9px;cursor:pointer}.vpd-prev-step:hover{background-color:rgba(0,0,0,.2)}[data-type=time] .vpd-time .vpd-time-h,[data-type=time] .vpd-time .vpd-time-m{margin-top:40px}.vpd-is-inline{position:static;background-color:transparent;height:auto;width:auto;display:block;margin-top:2px}.vpd-is-inline .vpd-container{position:static;transform:none}.vpd-is-inline .vpd-content{box-shadow:0 0 1px -1px #000}.vpd-is-popover{display:inline-block;position:relative}.vpd-is-popover .vpd-wrapper{position:static;width:auto;height:0}.vpd-is-popover .vpd-wrapper .vpd-container{transform:none;top:auto;left:auto;z-index:500}.vpd-is-popover .vpd-wrapper .vpd-content{transition:none;box-shadow:0 3px 8px rgba(0,0,0,.4)}.vpd-is-popover[data-placement=top-left] .vpd-container{bottom:100%;left:0}.vpd-is-popover[data-placement=top-left] .vpd-content{box-shadow:0 -3px 8px rgba(0,0,0,.4)}.vpd-is-popover[data-placement=top-right] .vpd-container{bottom:100%;right:0}.vpd-is-popover[data-placement=top-right] .vpd-content{box-shadow:0 -3px 8px rgba(0,0,0,.4)}.vpd-is-popover[data-placement=bottom-left] .vpd-container{top:100%;left:0}.vpd-is-popover[data-placement=bottom-right] .vpd-container{top:100%;right:0}.vpd-is-popover[data-placement=left-top] .vpd-container{bottom:0;right:100%}.vpd-is-popover[data-placement=left-bottom] .vpd-container{top:0;right:100%}.vpd-is-popover[data-placement=right-top] .vpd-container{bottom:0;left:100%}.vpd-is-popover[data-placement=right-bottom] .vpd-container{top:0;left:100%}.vpd-no-footer .vpd-addon-list{bottom:0;border-bottom:none}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time{margin-top:10px;display:block!important;position:relative;border-top:1px solid #eee;overflow:hidden}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-addon-list-content{display:flex;justify-content:center;direction:ltr}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-counter-item{width:18px}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-counter{height:30px;font-size:20px;line-height:34px;width:40px}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-down-arrow-btn,.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-up-arrow-btn{position:absolute;top:0;height:26px;width:26px;margin:2px;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.05)}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-time-m{margin-top:0;float:none;width:100px}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-time-m .vpd-up-arrow-btn{right:30px}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-time-m .vpd-down-arrow-btn{right:0}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-time-h{margin-top:0;float:none;width:100px}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-time-h:after{font-size:20px}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-time-h .vpd-counter{margin-left:auto}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-time-h .vpd-up-arrow-btn{left:0}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time .vpd-time-h .vpd-down-arrow-btn{left:30px}.vpd-wrapper[data-type=datetime].vpd-compact-time .vpd-time svg{height:10px}.vpd-wrapper[data-type=datetime] .vpd-date{font-size:22px}.vpd-wrapper.vpd-is-range .vpd-date{font-size:16px}.vpd-wrapper.vpd-is-multiple .vpd-date{font-size:14px;white-space:normal;line-height:20px}@media screen and (max-height:460px){.vpd-wrapper{overflow:auto;text-align:center}.vpd-wrapper .vpd-container{position:relative;top:0;left:0;transform:none;display:inline-block;margin:20px auto}}.vpd-locales{list-style-type:none;padding:0;margin:0;position:absolute;left:14px;top:12px;line-height:24px;text-align:center;opacity:.7}.vpd-locales li{cursor:pointer}.vpd-simple-body .vpd-header{display:flex;padding:10px;justify-content:space-between}.vpd-simple-body .vpd-locales{position:static;padding:0 5px;line-height:unset}.vpd-simple-content{display:flex;justify-content:center;height:240px;direction:ltr}.vpd-simple-content .vpd-column{height:100%;flex-grow:1;display:flex;flex-flow:column;padding:5px}.vpd-simple-content .vpd-column .vpd-column-header{text-align:center;font-weight:700;color:#000;height:30px;line-height:30px}.vpd-simple-content .vpd-column .vpd-column-content{flex-grow:1;height:100%;overflow:auto;padding-right:4px;position:relative}.vpd-simple-content .vpd-column .vpd-column-content:after,.vpd-simple-content .vpd-column .vpd-column-content:before{display:block;height:80px;content:\"\"}@media screen and (min-width:640px){.vpd-simple-content .vpd-column .vpd-column-content::-webkit-scrollbar{width:8px}.vpd-simple-content .vpd-column .vpd-column-content::-webkit-scrollbar-track{background:rgba(0,0,0,.05);border-radius:5px}.vpd-simple-content .vpd-column .vpd-column-content::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);border-radius:5px}.vpd-simple-content .vpd-column .vpd-column-content::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.5)}}.vpd-simple-content .vpd-addon-list-item{width:100%;float:none!important;line-height:42px;height:44px;border:1px solid #fff}.vpd-simple-content .vpd-range-first{border-radius:40px 40px 0 0}.vpd-simple-content .vpd-range-between{font-weight:700;background-color:#f5f5f5}.vpd-simple-content .vpd-range-last{border-radius:0 0 40px 40px}.vpd-simple-content .vpd-range-last.vpd-range-first{border-radius:40px}.vpd-simple-content .vpd-column.vpd-is-mounted .vpd-selected:not(.vpd-range-first):not(.vpd-range-last):not([disabled=true]){position:sticky;top:0;bottom:0}.vpd-is-multiple .vpd-simple-content .vpd-column .vpd-selected{position:static!important}.vpd-dir-ltr .vpd-actions,.vpd-dir-ltr .vpd-addon-list-content,.vpd-dir-ltr .vpd-content{direction:ltr}.vpd-dir-ltr .vpd-actions,.vpd-dir-ltr .vpd-content{text-align:left;font-family:sans-serif}.vpd-dir-ltr .vpd-month-label{font-size:90%}.vpd-dir-ltr .vpd-addon-list-item,.vpd-dir-ltr .vpd-day,.vpd-dir-ltr .vpd-weekday{float:left}.vpd-dir-ltr .vpd-locales{left:auto;right:14px}.vpd-dir-rtl .vpd-next,.vpd-dir-rtl .vpd-prev{transform:rotateY(180deg)}.vpd-dir-rtl .vpd-next{float:left}.vpd-dir-rtl .vpd-prev{float:right}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b002":
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,(function(){"use strict";return function(e,n,t){t.updateLocale=function(e,n){var o=t.Ls[e];if(o)return(n?Object.keys(n):[]).forEach((function(e){o[e]=n[e]})),o}}}));

/***/ }),

/***/ "b1f2":
/***/ (function(module, exports) {

/*
  Expose functions.
*/
module.exports =
  { toJalaali: toJalaali
  , toGregorian: toGregorian
  , isValidJalaaliDate: isValidJalaaliDate
  , isLeapJalaaliYear: isLeapJalaaliYear
  , jalaaliMonthLength: jalaaliMonthLength
  , jalCal: jalCal
  , j2d: j2d
  , d2j: d2j
  , g2d: g2d
  , d2g: d2g
  , jalaaliToDateObject: jalaaliToDateObject
  , jalaaliWeek: jalaaliWeek
  }

/*
  Jalaali years starting the 33-year rule.
*/
var breaks =  [ -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210
  , 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178
  ]

/*
  Converts a Gregorian date to Jalaali.
*/
function toJalaali(gy, gm, gd) {
  if (Object.prototype.toString.call(gy) === '[object Date]') {
    gd = gy.getDate()
    gm = gy.getMonth() + 1
    gy = gy.getFullYear()
  }
  return d2j(g2d(gy, gm, gd))
}

/*
  Converts a Jalaali date to Gregorian.
*/
function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd))
}

/*
  Checks whether a Jalaali date is valid or not.
*/
function isValidJalaaliDate(jy, jm, jd) {
  return  jy >= -61 && jy <= 3177 &&
          jm >= 1 && jm <= 12 &&
          jd >= 1 && jd <= jalaaliMonthLength(jy, jm)
}

/*
  Is this a leap year or not?
*/
function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0
}

/*
  Number of days in a given month in a Jalaali year.
*/
function jalaaliMonthLength(jy, jm) {
  if (jm <= 6) return 31
  if (jm <= 11) return 30
  if (isLeapJalaaliYear(jy)) return 30
  return 29
}

/*
    This function determines if the Jalaali (Persian) year is
    leap (366-day long) or is the common year (365 days)

    @param jy Jalaali calendar year (-61 to 3177)
    @returns number of years since the last leap year (0 to 4)
 */
function jalCalLeap(jy) {
  var bl = breaks.length
    , jp = breaks[0]
    , jm
    , jump
    , leap
    , n
    , i

  if (jy < jp || jy >= breaks[bl - 1])
    throw new Error('Invalid Jalaali year ' + jy)

  for (i = 1; i < bl; i += 1) {
    jm = breaks[i]
    jump = jm - jp
    if (jy < jm)
      break
    jp = jm
  }
  n = jy - jp

  if (jump - n < 6)
    n = n - jump + div(jump + 4, 33) * 33
  leap = mod(mod(n + 1, 33) - 1, 4)
  if (leap === -1) {
    leap = 4
  }

  return leap
}

/*
  This function determines if the Jalaali (Persian) year is
  leap (366-day long) or is the common year (365 days), and
  finds the day in March (Gregorian calendar) of the first
  day of the Jalaali year (jy).

  @param jy Jalaali calendar year (-61 to 3177)
  @param withoutLeap when don't need leap (true or false) default is false
  @return
    leap: number of years since the last leap year (0 to 4)
    gy: Gregorian year of the beginning of Jalaali year
    march: the March day of Farvardin the 1st (1st day of jy)
  @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
  @see: http://www.fourmilab.ch/documents/calendar/
*/
function jalCal(jy, withoutLeap) {
  var bl = breaks.length
    , gy = jy + 621
    , leapJ = -14
    , jp = breaks[0]
    , jm
    , jump
    , leap
    , leapG
    , march
    , n
    , i

  if (jy < jp || jy >= breaks[bl - 1])
    throw new Error('Invalid Jalaali year ' + jy)

  // Find the limiting years for the Jalaali year jy.
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i]
    jump = jm - jp
    if (jy < jm)
      break
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4)
    jp = jm
  }
  n = jy - jp

  // Find the number of leap years from AD 621 to the beginning
  // of the current Jalaali year in the Persian calendar.
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4)
  if (mod(jump, 33) === 4 && jump - n === 4)
    leapJ += 1

  // And the same in the Gregorian calendar (until the year gy).
  leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150

  // Determine the Gregorian date of Farvardin the 1st.
  march = 20 + leapJ - leapG

  // return with gy and march when we don't need leap
  if (withoutLeap) return { gy: gy, march: march };


  // Find how many years have passed since the last leap year.
  if (jump - n < 6)
    n = n - jump + div(jump + 4, 33) * 33
  leap = mod(mod(n + 1, 33) - 1, 4)
  if (leap === -1) {
    leap = 4
  }

  return  { leap: leap
          , gy: gy
          , march: march
          }
}

/*
  Converts a date of the Jalaali calendar to the Julian Day number.

  @param jy Jalaali year (1 to 3100)
  @param jm Jalaali month (1 to 12)
  @param jd Jalaali day (1 to 29/31)
  @return Julian Day number
*/
function j2d(jy, jm, jd) {
  var r = jalCal(jy, true)
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1
}

/*
  Converts the Julian Day number to a date in the Jalaali calendar.

  @param jdn Julian Day number
  @return
    jy: Jalaali year (1 to 3100)
    jm: Jalaali month (1 to 12)
    jd: Jalaali day (1 to 29/31)
*/
function d2j(jdn) {
  var gy = d2g(jdn).gy // Calculate Gregorian year (gy).
    , jy = gy - 621
    , r = jalCal(jy, false)
    , jdn1f = g2d(gy, 3, r.march)
    , jd
    , jm
    , k

  // Find number of days that passed since 1 Farvardin.
  k = jdn - jdn1f
  if (k >= 0) {
    if (k <= 185) {
      // The first 6 months.
      jm = 1 + div(k, 31)
      jd = mod(k, 31) + 1
      return  { jy: jy
              , jm: jm
              , jd: jd
              }
    } else {
      // The remaining months.
      k -= 186
    }
  } else {
    // Previous Jalaali year.
    jy -= 1
    k += 179
    if (r.leap === 1)
      k += 1
  }
  jm = 7 + div(k, 30)
  jd = mod(k, 30) + 1
  return  { jy: jy
          , jm: jm
          , jd: jd
          }
}

/*
  Calculates the Julian Day number from Gregorian or Julian
  calendar dates. This integer number corresponds to the noon of
  the date (i.e. 12 hours of Universal Time).
  The procedure was tested to be good since 1 March, -100100 (of both
  calendars) up to a few million years into the future.

  @param gy Calendar year (years BC numbered 0, -1, -2, ...)
  @param gm Calendar month (1 to 12)
  @param gd Calendar day of the month (1 to 28/29/30/31)
  @return Julian Day number
*/
function g2d(gy, gm, gd) {
  var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4)
      + div(153 * mod(gm + 9, 12) + 2, 5)
      + gd - 34840408
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752
  return d
}

/*
  Calculates Gregorian and Julian calendar dates from the Julian Day number
  (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
  calendars) to some millions years ahead of the present.

  @param jdn Julian Day number
  @return
    gy: Calendar year (years BC numbered 0, -1, -2, ...)
    gm: Calendar month (1 to 12)
    gd: Calendar day of the month M (1 to 28/29/30/31)
*/
function d2g(jdn) {
  var j
    , i
    , gd
    , gm
    , gy
  j = 4 * jdn + 139361631
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908
  i = div(mod(j, 1461), 4) * 5 + 308
  gd = div(mod(i, 153), 5) + 1
  gm = mod(div(i, 153), 12) + 1
  gy = div(j, 1461) - 100100 + div(8 - gm, 6)
  return  { gy: gy
          , gm: gm
          , gd: gd
          }
}

/**
 * Return Saturday and Friday day of current week(week start in Saturday)
 * @param {number} jy jalaali year
 * @param {number} jm jalaali month
 * @param {number} jd jalaali day
 * @returns Saturday and Friday of current week
 */
function jalaaliWeek(jy, jm, jd) {
  var dayOfWeek = jalaaliToDateObject(jy, jm, jd).getDay();

  var startDayDifference = dayOfWeek == 6 ? 0 : -(dayOfWeek+1);
  var endDayDifference = 6+startDayDifference;

  return {
    saturday: d2j(j2d(jy, jm, jd+startDayDifference)),
    friday: d2j(j2d(jy, jm, jd+endDayDifference))
  }
}

/**
 * Convert Jalaali calendar dates to javascript Date object
 * @param {number} jy jalaali year
 * @param {number} jm jalaali month
 * @param {number} jd jalaali day
 * @param {number} [h] hours
 * @param {number} [m] minutes
 * @param {number} [s] seconds
 * @param {number} [ms] milliseconds
 * @returns Date object of the jalaali calendar dates
 */
function jalaaliToDateObject(
  jy,
  jm,
  jd,
  h,
  m,
  s,
  ms
) {
  var gregorianCalenderDate = toGregorian(jy, jm, jd);

  return new Date(
    gregorianCalenderDate.gy,
    gregorianCalenderDate.gm - 1,
    gregorianCalenderDate.gd,
    h || 0,
    m || 0,
    s || 0,
    ms || 0
  );
}

/*
  Utility helper functions.
*/

function div(a, b) {
  return ~~(a / b)
}

function mod(a, b) {
  return a - ~~(a / b) * b
}


/***/ }),

/***/ "d959":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/Vue3PersianDatetimePicker.vue?vue&type=template&id=7a7b941d


var _hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("x");

var _hoisted_2 = {
  ref: "container",
  class: "vpd-container"
};
var _hoisted_3 = {
  class: "vpd-content"
};
var _hoisted_4 = {
  class: "vpd-body"
};
var _hoisted_5 = {
  class: "vpd-clearfix vpd-week"
};
var _hoisted_6 = {
  key: 1,
  style: {
    "height": "250px"
  }
};
var _hoisted_7 = {
  class: "vpd-addon-list-content"
};
var _hoisted_8 = {
  class: "vpd-addon-list-content"
};

var _hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("x");

var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  key: 3,
  class: "vpd-actions"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_time_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("time-icon");

  var _component_calendar_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("calendar-icon");

  var _component_locale_change = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("locale-change");

  var _component_simple_mode = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("simple-mode");

  var _component_arrow = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("arrow");

  var _component_time_section = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("time-section");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
    class: ["vpd-main", {
      'vpd-is-popover': $options.isPopover
    }],
    "data-type": $props.type,
    "data-placement": $data.popoverPlace,
    "data-locale": $data.localeData.name,
    "data-locale-dir": $data.localeData.config.dir
  }, [!$options.customInputElement ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
    key: 0,
    ref: "inputGroup",
    class: ['vpd-input-group', {
      'vpd-disabled': $props.disabled
    }]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("label", {
    for: $options.id,
    class: "vpd-icon-btn",
    style: {
      'background-color': $props.color
    },
    onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $data.visible = !$data.visible;
    }, ["prevent", "stop"]))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "label", {}, function () {
    return [$props.type === 'time' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_time_icon, {
      key: 0,
      width: "16px",
      height: "16px"
    })) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_calendar_icon, {
      key: 1,
      width: "16px",
      height: "16px"
    })), $props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
      key: 2,
      textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label)
    }, null, 8, ["textContent"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
  })], 12, ["for"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    id: $options.id,
    ref: "input",
    type: "text",
    name: $props.name,
    class: [$props.inputClass, {
      'vpd-is-editable': $props.editable
    }],
    placeholder: $props.placeholder,
    value: $options.displayValue,
    disabled: $props.disabled
  }, $props.inputAttrs, {
    onFocus: _cache[2] || (_cache[2] = function () {
      return $options.focus && $options.focus.apply($options, arguments);
    }),
    onBlur: _cache[3] || (_cache[3] = function () {
      return $options.setOutput && $options.setOutput.apply($options, arguments);
    }),
    onKeydown: _cache[4] || (_cache[4] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(function () {
      return $options.setOutput && $options.setOutput.apply($options, arguments);
    }, ["enter"]))
  }), null, 16, ["id", "name", "placeholder", "value", "disabled"]), $props.altName ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("input", {
    key: 0,
    type: "hidden",
    name: $props.altName,
    value: $options.altFormatted
  }, null, 8, ["name", "value"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.clearable && !$props.disabled && $options.displayValue ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", {
    key: 1,
    class: "vpd-clear-btn",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.clearValue && $options.clearValue.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "clear-btn", {
    vm: $options.vm
  }, function () {
    return [_hoisted_1];
  })])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2)) : $props.altName ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("input", {
    key: 1,
    type: "hidden",
    name: $props.altName,
    value: $options.altFormatted
  }, null, 8, ["name", "value"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: $options.isPopover ? '' : 'vpd-fade-scale'
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [$data.visible ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 0,
        ref: "picker",
        class: ['vpd-wrapper', "vpd-dir-".concat($data.localeData.config.dir), {
          'vpd-is-range': $props.range,
          'vpd-is-inline': $props.inline,
          'vpd-is-multiple': $props.multiple,
          'vpd-compact-time': $options.isCompactTime,
          'vpd-no-footer': $props.autoSubmit && !$options.hasStep('t')
        }],
        "data-type": $props.type,
        onClick: _cache[17] || (_cache[17] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
          return $options.wrapperClick && $options.wrapperClick.apply($options, arguments);
        }, ["self"]))
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_3, [!$props.simple ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 0,
        class: "vpd-header",
        style: {
          'background-color': $props.color
        }
      }, [['date', 'datetime', 'year-month'].indexOf($props.type) !== -1 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 0,
        class: ['vpd-year-label', $data.directionClass],
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return $options.goStep('y');
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "slideY"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
            key: $options.selectedDate.year()
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "header-year", {
            vm: $options.vm,
            selectedDate: $options.selectedDate
          }, function () {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.convertToLocaleNumber($options.selectedDate.year())), 1)];
          })]))];
        }),
        _: 3
      })], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.type !== 'year-month' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 1,
        class: ['vpd-date', $data.directionClass]
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "slideY"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
            key: $options.formattedDate
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "header-date", {
            vm: $options.vm,
            formattedDate: $options.formattedDate
          }, function () {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.convertToLocaleNumber($options.formattedDate)), 1)];
          })]))];
        }),
        _: 3
      })], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $data.locales.length > 1 ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "locales", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        key: 2
      }, {
        vm: $options.vm,
        locales: $data.locales,
        setLocale: $options.setLocale
      }), function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_locale_change, {
          "locale-data": $data.localeData,
          core: $data.core,
          locales: $data.locales,
          class: "vpd-locales",
          onChange: $options.setLocale
        }, null, 8, ["locale-data", "core", "locales", "onChange"])];
      }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_4, [$props.simple ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_simple_mode, {
        key: 0,
        lang: $options.lang,
        core: $data.core,
        range: $props.range,
        color: $props.color,
        locales: $data.locales,
        visible: $data.visible,
        multiple: $props.multiple,
        years: $options.years,
        months: $options.months,
        "month-days": $options.monthDays,
        "has-step": $options.hasStep,
        "selected-dates": $data.selectedDates,
        "formatted-date": $options.formattedDate,
        "set-locale": $options.setLocale,
        "convert-to-locale-number": $options.convertToLocaleNumber,
        onSelectYear: $options.selectYear,
        onSelectMonth: $options.selectMonth,
        onSelectDay: $options.selectDay
      }, {
        "header-date": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function (slotData) {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "header-date", slotData)];
        }),
        locales: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function (slotData) {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "locales", slotData)];
        }),
        "year-item": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function (slotData) {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "year-item", slotData)];
        }),
        "month-item": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function (slotData) {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "month-item", slotData)];
        }),
        "day-item": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function (slotData) {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "day-item", slotData)];
        }),
        _: 3
      }, 8, ["lang", "core", "range", "color", "locales", "visible", "multiple", "years", "months", "month-days", "has-step", "selected-dates", "formatted-date", "set-locale", "convert-to-locale-number", "onSelectYear", "onSelectMonth", "onSelectDay"])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
        key: 1
      }, [$options.hasStep('d') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
        key: 0
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        class: ['vpd-controls', $data.directionClassDate]
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
        type: "button",
        class: "vpd-next",
        title: $options.lang.nextMonth,
        disabled: $options.nextMonthDisabled,
        onClick: _cache[7] || (_cache[7] = function () {
          return $options.nextMonth && $options.nextMonth.apply($options, arguments);
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "next-month", {}, function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_arrow, {
          width: "10",
          fill: "#000",
          direction: "right",
          style: {
            "vertical-align": "middle"
          }
        })];
      })], 8, ["title", "disabled"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
        type: "button",
        class: "vpd-prev",
        title: $options.lang.prevMonth,
        disabled: $options.prevMonthDisabled,
        onClick: _cache[8] || (_cache[8] = function () {
          return $options.prevMonth && $options.prevMonth.apply($options, arguments);
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "prev-month", {}, function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_arrow, {
          width: "10",
          fill: "#000",
          direction: "left",
          style: {
            "vertical-align": "middle"
          }
        })];
      })], 8, ["title", "disabled"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "slideX"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
            key: $data.date.month(),
            class: "vpd-month-label",
            onClick: _cache[9] || (_cache[9] = function ($event) {
              return $options.goStep('m');
            })
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "month-name", {
            vm: $options.vm,
            date: $data.date,
            color: $props.color
          }, function () {
            return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
              style: {
                'border-color': $props.color,
                color: $props.color
              },
              textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.convertToLocaleNumber($data.date.format('MMMM YYYY')))
            }, null, 12, ["textContent"])];
          })]))];
        }),
        _: 3
      })], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        class: ["vpd-clearfix", ['vpd-month', $data.directionClassDate]]
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_5, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.weekDays, function (day, i) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
          key: "".concat(i, "-").concat(day),
          class: "vpd-weekday"
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "weekday", {
          vm: $options.vm,
          day: day
        }, function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(day), 1)];
        })]);
      }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        class: "vpd-days",
        style: {
          height: $options.month.length * 40 + 'px'
        },
        onMouseleave: _cache[10] || (_cache[10] = function ($event) {
          return $data.hoveredItem = null;
        })
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "slideX",
        class: $data.directionClassDate
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
            key: $data.date.month()
          }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.monthDays, function (m, mi) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
              key: mi,
              class: "vpd-clearfix"
            }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(m, function (day, di) {
              return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
                key: di,
                class: ['vpd-day', {
                  'vpd-selected': day.selected,
                  'vpd-empty': day.date == null,
                  'vpd-range-first': day.isFirst,
                  'vpd-range-last': day.isLast,
                  'vpd-range-between': day.isBetween,
                  'vpd-range-hover': $data.hoveredItem && day.isHover
                }, day.attributes.class]
              }, day.attributes, {
                disabled: day.disabled,
                onClick: function onClick($event) {
                  return $options.selectDay(day);
                },
                onMouseover: function onMouseover($event) {
                  return $data.hoveredItem = day.date;
                }
              }), [day.date != null ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "day-item", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
                key: 0
              }, {
                vm: $options.vm,
                day: day,
                color: $props.color
              }), function () {
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
                  class: "vpd-day-effect",
                  style: {
                    'background-color': $props.color
                  }
                }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
                  class: "vpd-day-text",
                  textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.convertToLocaleNumber(day.formatted))
                }, null, 8, ["textContent"])];
              }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 16, ["disabled", "onClick", "onMouseover"]);
            }), 128))]);
          }), 128))]))];
        }),
        _: 3
      }, 8, ["class"])], 36)], 2)], 64)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_6)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "fade"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [$options.hasStep('y') ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
            key: 0,
            ref: "year",
            class: ['vpd-addon-list', {
              'vpd-can-close': $data.steps.length > 1
            }]
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_7, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.years, function (year, yi) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
              key: yi
            }, year.attributes, {
              class: ['vpd-addon-list-item', {
                'vpd-selected': year.selected
              }, year.attributes.class],
              style: [{
                color: year.selected ? $props.color : ''
              }, year.attributes.style],
              disabled: year.disabled,
              onClick: function onClick($event) {
                return $options.selectYear(year);
              }
            }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "year-item", {
              vm: $options.vm,
              year: year,
              color: $props.color
            }, function () {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.convertToLocaleNumber(year.format('YYYY'))), 1)];
            })], 16, ["disabled", "onClick"]);
          }), 128))])], 2)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $options.currentStep === 'y']]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
        }),
        _: 3
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "fade"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [$options.hasStep('m') ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
            key: 0,
            ref: "month",
            class: ['vpd-addon-list vpd-month-list', {
              'vpd-can-close': $data.steps.length > 1
            }]
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_8, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.months, function (monthItem, mi) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
              key: mi
            }, monthItem.attributes, {
              class: ['vpd-addon-list-item', {
                'vpd-selected': monthItem.selected
              }, monthItem.attributes.class],
              disabled: monthItem.disabled,
              style: [{
                color: monthItem.selected ? $props.color : ''
              }, monthItem.attributes.style],
              onClick: function onClick($event) {
                return $options.selectMonth(monthItem);
              }
            }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "month-item", {
              vm: $options.vm,
              monthItem: monthItem,
              color: $props.color
            }, function () {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(monthItem.format('MMMM')), 1)];
            })], 16, ["disabled", "onClick"]);
          }), 128))])], 2)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $options.currentStep === 'm']]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
        }),
        _: 3
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "fade"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [$data.steps.length > 1 && $options.currentStep !== 'd' && $options.hasStep('d') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
            key: 0,
            class: "vpd-close-addon",
            onClick: _cache[11] || (_cache[11] = function ($event) {
              return $options.goStep('d');
            })
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "close-btn", {
            vm: $options.vm
          }, function () {
            return [_hoisted_9];
          })])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
        }),
        _: 3
      })], 64)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "fade"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [$options.hasStep('t') ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_time_section, {
            key: 0,
            ref: "time",
            date: $data.date,
            "onUpdate:date": _cache[12] || (_cache[12] = function ($event) {
              return $data.date = $event;
            }),
            time: $data.time,
            "onUpdate:time": _cache[13] || (_cache[13] = function ($event) {
              return $data.time = $event;
            }),
            type: $props.type,
            "is-more": $options.isMore,
            "is-lower": $options.isLower,
            "min-date": $data.minDate,
            "max-date": $data.maxDate,
            "jump-minute": $props.jumpMinute,
            "round-minute": $props.roundMinute,
            "get-highlights": $options.getHighlights,
            "selected-dates": $data.selectedDates,
            "convert-to-locale-number": $options.convertToLocaleNumber
          }, null, 8, ["date", "time", "type", "is-more", "is-lower", "min-date", "max-date", "jump-minute", "round-minute", "get-highlights", "selected-dates", "convert-to-locale-number"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $options.currentStep === 't']]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
        }),
        _: 1
      }), $props.autoSubmit && !$options.hasStep('t') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
        key: 2
      }, [!$props.simple ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("br", _hoisted_10)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "submit-btn", {
        vm: $options.vm,
        canSubmit: $options.canSubmit,
        color: $props.color,
        submit: $options.submit,
        lang: $options.lang
      }, function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
          type: "button",
          disabled: !$options.canSubmit,
          style: {
            color: $props.color
          },
          onClick: _cache[14] || (_cache[14] = function () {
            return $options.submit && $options.submit.apply($options, arguments);
          }),
          textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.lang.submit)
        }, null, 12, ["disabled", "textContent"])];
      }), !$props.inline ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "cancel-btn", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        key: 0
      }, {
        vm: $options.vm,
        color: $props.color,
        lang: $options.lang
      }), function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
          type: "button",
          style: {
            color: $props.color
          },
          onClick: _cache[15] || (_cache[15] = function ($event) {
            return $data.visible = false;
          }),
          textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.lang.cancel)
        }, null, 12, ["textContent"])];
      }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.showNowBtn && $options.canGoToday ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "now-btn", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        key: 1
      }, {
        vm: $options.vm,
        color: $props.color,
        goToday: $options.goToday,
        lang: $options.lang
      }), function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
          type: "button",
          style: {
            color: $props.color
          },
          onClick: _cache[16] || (_cache[16] = function () {
            return $options.goToday && $options.goToday.apply($options, arguments);
          }),
          textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.lang.now)
        }, null, 12, ["textContent"])];
      }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]))])])], 512)], 10, ["data-type"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 3
  }, 8, ["name"])], 10, ["data-type", "data-placement", "data-locale", "data-locale-dir"]);
}
// CONCATENATED MODULE: ./src/picker/Vue3PersianDatetimePicker.vue?vue&type=template&id=7a7b941d

// EXTERNAL MODULE: ./src/picker/assets/scss/style.scss
var style = __webpack_require__("4635");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/Arrow.vue?vue&type=template&id=64cd1f1b

function Arrowvue_type_template_id_64cd1f1b_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 129 129",
    width: "30",
    height: "30",
    perspectiveAspectRato: "none",
    style: {
      transform: "rotate(".concat($options.rotation, "deg)")
    }
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
    fill: $props.fill,
    d: "M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54\n      53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"
  }, null, 8, ["fill"])], 4);
}
// CONCATENATED MODULE: ./src/picker/components/Arrow.vue?vue&type=template&id=64cd1f1b

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/Arrow.vue?vue&type=script&lang=js
/* harmony default export */ var Arrowvue_type_script_lang_js = ({
  props: {
    fill: {
      type: String,
      default: '#a2a2a2'
    },
    direction: {
      type: String,
      default: 'up'
    }
  },
  computed: {
    rotation: function rotation() {
      return {
        up: 90,
        left: 0,
        right: 180,
        down: -90
      }[this.direction];
    }
  }
});
// CONCATENATED MODULE: ./src/picker/components/Arrow.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("d959");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/picker/components/Arrow.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(Arrowvue_type_script_lang_js, [['render',Arrowvue_type_template_id_64cd1f1b_render]])

/* harmony default export */ var Arrow = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/TimeIcon.vue?vue&type=template&id=18ace668


var TimeIconvue_type_template_id_18ace668_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zM313.1 358.1L224.9 294C221.8 291.7 220\n      288.1 220 284.3V116C220 109.4 225.4 104 232 104H280C286.6 104 292 109.4 292 116V253.7L355.5 299.9C360.9 303.8\n      362 311.3 358.1 316.7L329.9 355.5C326 360.8 318.5 362 313.1 358.1z"
}, null, -1);

function TimeIconvue_type_template_id_18ace668_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    version: "1.1",
    role: "presentation",
    width: "16",
    height: "16",
    fill: $props.fill,
    viewBox: "0 0 512 512"
  }, [TimeIconvue_type_template_id_18ace668_hoisted_1], 8, ["fill"]);
}
// CONCATENATED MODULE: ./src/picker/components/TimeIcon.vue?vue&type=template&id=18ace668

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/TimeIcon.vue?vue&type=script&lang=js
/* harmony default export */ var TimeIconvue_type_script_lang_js = ({
  props: {
    fill: {
      type: String,
      default: '#f9f9f9'
    }
  }
});
// CONCATENATED MODULE: ./src/picker/components/TimeIcon.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/picker/components/TimeIcon.vue





const TimeIcon_exports_ = /*#__PURE__*/exportHelper_default()(TimeIconvue_type_script_lang_js, [['render',TimeIconvue_type_template_id_18ace668_render]])

/* harmony default export */ var TimeIcon = (TimeIcon_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/CalendarIcon.vue?vue&type=template&id=66b1c474


var CalendarIconvue_type_template_id_66b1c474_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
  d: "M436 160H12C5.4 160 0 154.6 0 148V112C0 85.5 21.5 64 48 64H96V12C96 5.4 101.4 0 108 0H148C154.6 0 160 5.4 160\n      12V64H288V12C288 5.4 293.4 0 300 0H340C346.6 0 352 5.4 352 12V64H400C426.5 64 448 85.5 448 112V148C448 154.6\n      442.6 160 436 160zM12 192H436C442.6 192 448 197.4 448 204V464C448 490.5 426.5 512 400 512H48C21.5 512 0 490.5 0\n      464V204C0 197.4 5.4 192 12 192zM128 396C128 389.4 122.6 384 116 384H76C69.4 384 64 389.4 64 396V436C64 442.6 69.4\n      448 76 448H116C122.6 448 128 442.6 128 436V396zM128 268C128 261.4 122.6 256 116 256H76C69.4 256 64 261.4 64\n      268V308C64 314.6 69.4 320 76 320H116C122.6 320 128 314.6 128 308V268zM256 396C256 389.4 250.6 384 244\n      384H204C197.4 384 192 389.4 192 396V436C192 442.6 197.4 448 204 448H244C250.6 448 256 442.6 256 436V396zM256\n      268C256 261.4 250.6 256 244 256H204C197.4 256 192 261.4 192 268V308C192 314.6 197.4 320 204 320H244C250.6 320 256\n      314.6 256 308V268zM384 396C384 389.4 378.6 384 372 384H332C325.4 384 320 389.4 320 396V436C320 442.6 325.4 448\n      332 448H372C378.6 448 384 442.6 384 436V396zM384 268C384 261.4 378.6 256 372 256H332C325.4 256 320 261.4 320\n      268V308C320 314.6 325.4 320 332 320H372C378.6 320 384 314.6 384 308V268z"
}, null, -1);

function CalendarIconvue_type_template_id_66b1c474_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    version: "1.1",
    width: "14",
    height: "16",
    viewBox: "0 0 448 512",
    xmlns: "http://www.w3.org/2000/svg",
    fill: $props.fill
  }, [CalendarIconvue_type_template_id_66b1c474_hoisted_1], 8, ["fill"]);
}
// CONCATENATED MODULE: ./src/picker/components/CalendarIcon.vue?vue&type=template&id=66b1c474

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/CalendarIcon.vue?vue&type=script&lang=js
/* harmony default export */ var CalendarIconvue_type_script_lang_js = ({
  props: {
    fill: {
      type: String,
      default: '#f9f9f9'
    }
  }
});
// CONCATENATED MODULE: ./src/picker/components/CalendarIcon.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/picker/components/CalendarIcon.vue





const CalendarIcon_exports_ = /*#__PURE__*/exportHelper_default()(CalendarIconvue_type_script_lang_js, [['render',CalendarIconvue_type_template_id_66b1c474_render]])

/* harmony default export */ var CalendarIcon = (CalendarIcon_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/LocaleChange.vue?vue&type=template&id=c540a4ec

function LocaleChangevue_type_template_id_c540a4ec_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("li", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('change', $options.activeItem);
    }),
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.label)
  }, null, 8, ["textContent"])]);
}
// CONCATENATED MODULE: ./src/picker/components/LocaleChange.vue?vue&type=template&id=c540a4ec

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/LocaleChange.vue?vue&type=script&lang=js
/* harmony default export */ var LocaleChangevue_type_script_lang_js = ({
  name: 'LocaleChange',
  props: {
    locales: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    core: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    localeData: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['change'],
  computed: {
    activeItem: function activeItem() {
      var activeIndex = this.locales.indexOf(this.localeData.name) + 1;
      if (activeIndex === this.locales.length) activeIndex = 0;
      return String(this.locales[activeIndex]);
    },
    label: function label() {
      return this.core.localesConfig[this.activeItem].lang.label || this.activeItem.toUpperCase();
    }
  }
});
// CONCATENATED MODULE: ./src/picker/components/LocaleChange.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/picker/components/LocaleChange.vue





const LocaleChange_exports_ = /*#__PURE__*/exportHelper_default()(LocaleChangevue_type_script_lang_js, [['render',LocaleChangevue_type_template_id_c540a4ec_render]])

/* harmony default export */ var LocaleChange = (LocaleChange_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/time/TimeSection.vue?vue&type=template&id=0d6208c6

var TimeSectionvue_type_template_id_0d6208c6_hoisted_1 = {
  class: "vpd-addon-list-content"
};
function TimeSectionvue_type_template_id_0d6208c6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_time_column = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("time-column");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ['vpd-addon-list vpd-time', {
      'vpd-disabled': $props.isDisableTime
    }]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", TimeSectionvue_type_template_id_0d6208c6_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_time_column, {
    ref: "hour",
    modelValue: $options.hourModel,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $options.hourModel = $event;
    }),
    class: "vpd-time-h",
    attributes: $options.timeAttributes,
    formatter: $props.convertToLocaleNumber,
    onFilled: $options.focusNext
  }, null, 8, ["modelValue", "attributes", "formatter", "onFilled"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_time_column, {
    ref: "minute",
    modelValue: $options.minuteModel,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $options.minuteModel = $event;
    }),
    class: "vpd-time-m",
    jump: $props.jumpMinute,
    attributes: $options.timeAttributes,
    formatter: $props.convertToLocaleNumber
  }, null, 8, ["modelValue", "jump", "attributes", "formatter"])])], 2);
}
// CONCATENATED MODULE: ./src/picker/components/time/TimeSection.vue?vue&type=template&id=0d6208c6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/time/TimeColumn.vue?vue&type=template&id=13b8ce82

function TimeColumnvue_type_template_id_13b8ce82_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_arrow = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("arrow");

  var _component_btn = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("btn");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["vpd-time-column", $data.classFastCounter]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_btn, {
    class: "vpd-up-arrow-btn",
    onUpdate: _cache[1] || (_cache[1] = function ($event) {
      return $options.update(1);
    }),
    onFastUpdate: $options.fastUpdateCounter
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_arrow, {
        width: "20",
        direction: "up"
      })];
    }),
    _: 1
  }, 8, ["onFastUpdate"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ["vpd-counter", [$data.directionClass, {
      'vpd-is-focused': $data.isInputFocused
    }]],
    onMousewheel: _cache[9] || (_cache[9] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $options.wheelUpdate($event);
    }, ["stop", "prevent"])),
    onDOMMouseScroll: _cache[10] || (_cache[10] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $options.wheelUpdate($event);
    }, ["stop", "prevent"]))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    ref: "input",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.inputValue = $event;
    }),
    type: "tel",
    maxlength: _ctx.selfValue.length,
    class: {
      'is-empty': !$data.inputValue.length
    },
    onInput: _cache[3] || (_cache[3] = function () {
      return $options.onInputChange && $options.onInputChange.apply($options, arguments);
    }),
    onFocus: _cache[4] || (_cache[4] = function ($event) {
      return $data.isInputFocused = true;
    }),
    onBlur: _cache[5] || (_cache[5] = function ($event) {
      return $data.isInputFocused = false;
    }),
    onKeydown: [_cache[6] || (_cache[6] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $options.update(1);
    }, ["prevent"]), ["up"])), _cache[7] || (_cache[7] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $options.update(-1);
    }, ["prevent"]), ["down"])), _cache[8] || (_cache[8] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
      return $options.onInputSubmit && $options.onInputSubmit.apply($options, arguments);
    }, ["prevent"]), ["enter"]))]
  }, null, 42, ["maxlength"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], $data.inputValue]]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.modelValue.toString().split(''), function (item, i) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
      key: "h__".concat(i),
      class: "vpd-counter-item"
    }, $props.attributes), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
      name: "slideY"
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
        return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
          key: "".concat(item, "__").concat(i, "_h"),
          style: {
            transition: 'all ' + $data.transitionSpeed + 'ms ease-in-out'
          },
          textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.formatter(item))
        }, null, 12, ["textContent"]))];
      }),
      _: 2
    }, 1024)], 16);
  }), 128))], 34), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_btn, {
    class: "vpd-down-arrow-btn",
    onUpdate: _cache[11] || (_cache[11] = function ($event) {
      return $options.update(-1);
    }),
    onFastUpdate: $options.fastUpdateCounter
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_arrow, {
        width: "20",
        direction: "down"
      })];
    }),
    _: 1
  }, 8, ["onFastUpdate"])], 2);
}
// CONCATENATED MODULE: ./src/picker/components/time/TimeColumn.vue?vue&type=template&id=13b8ce82

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/Btn.vue?vue&type=template&id=2ca2ab3f

function Btnvue_type_template_id_2ca2ab3f_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    onMousedown: _cache[1] || (_cache[1] = function () {
      return $options.down && $options.down.apply($options, arguments);
    }),
    onTouchstart: _cache[2] || (_cache[2] = function () {
      return $options.down && $options.down.apply($options, arguments);
    }),
    onMouseup: _cache[3] || (_cache[3] = function () {
      return $options.click && $options.click.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 32);
}
// CONCATENATED MODULE: ./src/picker/components/Btn.vue?vue&type=template&id=2ca2ab3f

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/Btn.vue?vue&type=script&lang=js
/* harmony default export */ var Btnvue_type_script_lang_js = ({
  name: 'Btn',
  emits: ['update', 'fastUpdate'],
  data: function data() {
    return {
      interval: false,
      timeout: false,
      intervalDelay: 150
    };
  },
  mounted: function mounted() {
    var _this = this;

    document.addEventListener('mouseup', function () {
      if (_this.timeout || _this.interval) _this.up();
    });
    document.addEventListener('touchend', function () {
      if (_this.timeout || _this.interval) _this.up();
    });
  },
  methods: {
    click: function click() {
      if (!this.interval) {
        this.$emit('update', 1);
      }
    },
    down: function down() {
      var _this2 = this;

      window.clearTimeout(this.timeout);
      window.clearInterval(this.interval);
      this.interval = false;
      this.timeout = window.setTimeout(function () {
        _this2.intervalFn();
      }, 600);
    },
    up: function up() {
      window.clearTimeout(this.timeout);
      window.clearInterval(this.interval);
      this.$emit('fastUpdate', false);
      this.timeout = false;
      this.interval = false;
      this.intervalDelay = 150;
    },
    intervalFn: function intervalFn() {
      var _this3 = this;

      this.interval = window.setTimeout(function () {
        _this3.$emit('update', 1);

        _this3.$emit('fastUpdate', true);

        _this3.intervalFn();

        if (_this3.intervalDelay > 30) _this3.intervalDelay -= 3;
      }, this.intervalDelay);
    }
  }
});
// CONCATENATED MODULE: ./src/picker/components/Btn.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/picker/components/Btn.vue





const Btn_exports_ = /*#__PURE__*/exportHelper_default()(Btnvue_type_script_lang_js, [['render',Btnvue_type_template_id_2ca2ab3f_render]])

/* harmony default export */ var Btn = (Btn_exports_);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__("5a0c");
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ./src/picker/modules/utils.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var utils_toString = Object.prototype.toString,
    utils_hasOwnProperty = Object.prototype.hasOwnProperty;
var tools = {
  isFunction: function isFunction(obj) {
    return utils_toString.call(obj) === '[object Function]';
  },
  isArray: function isArray(obj) {
    return utils_toString.call(obj) === '[object Array]';
  },
  isPlainObject: function isPlainObject(obj) {
    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
    // Make sure that DOM nodes and window objects don't pass through, as well
    if (!obj || utils_toString.call(obj) !== '[object Object]' || obj.nodeType || obj.setInterval) {
      return false;
    } // Not own constructor property must be Object


    if (obj.constructor && !utils_hasOwnProperty.call(obj, 'constructor') && !utils_hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
      return false;
    } // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.


    var key;

    for (key in obj) {
      ;
    }

    return key === undefined || utils_hasOwnProperty.call(obj, key);
  }
};
/*
 * jQuery extend function
 * https://gist.github.com/bentsai/3150936
 */

var extend = function extend() {
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false; // Handle a deep copy situation

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {}; // skip the boolean and the target

    i = 2;
  } // Handle case when target is a string or something (possible in deep copy)


  if (_typeof(target) !== 'object' && !tools.isFunction(target)) {
    target = {};
  } // extend jQuery itself if only one argument is passed


  if (length === i) {
    target = this;
    --i;
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) !== null) {
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name]; // Prevent never-ending loop

        if (target === copy) {
          continue;
        } // Recurse if we're merging plain objects or arrays


        if (deep && copy && (tools.isPlainObject(copy) || (copyIsArray = tools.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && tools.isArray(src) ? src : [];
          } else {
            clone = src && tools.isPlainObject(src) ? src : {};
          } // Never move original objects, clone them


          target[name] = extend(deep, clone, copy); // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  } // Return the modified object


  return target;
};
/**
 * Simple helper for clone an Array of dates (in dayjs)
 * @param arr Array
 * @returns Array
 */

var cloneDates = function cloneDates(arr) {
  return arr.map(function (d) {
    return d.clone();
  });
};
/**
 * Check if two dates are on the same day
 * @param a Dayjs date
 * @param b Dayjs date
 * @returns {boolean}
 */

var utils_isSameDay = function isSameDay(a, b) {
  return dayjs_min_default()(a).isSame(dayjs_min_default()(b), 'day');
};
/**
 * full clone using JSON.stringify
 * @param obj
 * @returns {any}
 */

var clone = function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
};
/**
 * https://stackoverflow.com/a/51029299/3183699
 * @param element
 * @param duration
 * @param callback
 */

var scrollIntoCenter = function scrollIntoCenter(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var parent = element.parentNode;
  var startingTop = parent.scrollTop;
  var parentCenter = parent.offsetHeight / 2;
  var elementCenter = element.offsetHeight / 2;
  var distance = element.offsetTop - startingTop - parentCenter + elementCenter;
  var start;

  var done = function done() {
    if (typeof callback === 'function') {
      callback();
    }
  };

  if (!duration) {
    parent.scrollTo(0, startingTop + distance);
    done();
    return;
  }

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    var time = timestamp - start;
    var percent = Math.min(time / duration, 1);
    parent.scrollTo(0, startingTop + distance * percent); // Proceed with animation as long as we wanted it to.

    if (time < duration) {
      window.requestAnimationFrame(step);
    } else {
      done();
    }
  });
};
var addEventListener = function addEventListener(el, type, handler) {
  if (typeof el === 'string') el = document.querySelector(el);
  if (!el) throw new Error('Cant find custom element: ' + el);
  if (el.addEventListener) el.addEventListener(type, handler, true);else el.attachEvent('on' + type, handler, true);
};
var addLiveEvent = function addLiveEvent(selector, event, callback, context) {
  addEventListener(context || document, event, function (e) {
    if (e.target.closest(selector)) callback.call(e.target, e);
  });
};
/* harmony default export */ var utils = ({
  extend: extend,
  clone: clone
});
// CONCATENATED MODULE: ./src/picker/modules/mixins.js

/**
 * Model Mixin
 */

var modelMixin = {
  props: {
    modelValue: {
      type: [String, Number, Array, Object, Boolean],
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data: function data() {
    return {
      selfValue: ''
    };
  },
  watch: {
    modelValue: {
      handler: function handler(val) {
        if (this.selfValue !== val) this.selfValue = val;
      },
      immediate: true,
      deep: true
    },
    selfValue: function selfValue(val) {
      if (val !== this.modelValue) this.$emit('update:modelValue', val);
    }
  }
};
/**
 * Change route when visible changes
 * @type Object
 */

var popupRouteChanger = {
  data: function data() {
    return {
      routerQueryName: null
    };
  },
  mounted: function mounted() {
    this.initRouter();
  },
  methods: {
    initRouter: function initRouter() {
      var _this = this;

      var isSet = function isSet(prop) {
        return prop || typeof prop === 'string';
      };

      var useRouter = this.useRouter;
      if (!isSet(useRouter) || this.isPopover || this.inline || !this.$router) return;
      this.$watch('visible', this.onVisibleChange);
      this.$watch(function () {
        return _this.$route.query;
      }, this.onRouteChange, {
        deep: true,
        immediate: true
      });
      this.routerQueryName = typeof useRouter === 'string' && useRouter ? useRouter : this.id;
    },
    onVisibleChange: function onVisibleChange(visible) {
      var currentRoute = this.$route;
      var query = clone(currentRoute.query || {});

      if (visible) {
        query[this.routerQueryName] = 'active';
        this.$router.push({
          query: query
        });
      } else if (query[this.routerQueryName]) {
        this.$router.back();
      }
    },
    onRouteChange: function onRouteChange() {
      var visible = !!this.$route.query[this.routerQueryName];
      if (visible && this.disabled) return;
      this.visible = visible;
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/time/TimeColumn.vue?vue&type=script&lang=js



/* harmony default export */ var TimeColumnvue_type_script_lang_js = ({
  name: 'TimeColumn',
  components: {
    Btn: Btn,
    Arrow: Arrow
  },
  mixins: [modelMixin],
  props: {
    jump: {
      type: Number,
      default: 1
    },
    formatter: {
      type: Function,
      default: null
    },
    attributes: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['filled'],
  data: function data() {
    return {
      directionClass: 'direction-next',
      classFastCounter: '',
      transitionSpeed: 300,
      timeout: false,
      lastUpdate: new Date().getTime(),
      isInputFocused: false,
      inputValue: ''
    };
  },
  watch: {
    selfValue: {
      handler: function handler(val, old) {
        var _this = this;

        if (old) this.setDirection(val, old);
        this.inputValue = this.selfValue;
        this.$nextTick(function () {
          if (_this.modelValue.toString() !== _this.selfValue.toString()) _this.selfValue = _this.modelValue;
        });
      },
      immediate: true
    },
    isInputFocused: function isInputFocused(focused) {
      var _this2 = this;

      if (focused) {
        this.inputValue = this.selfValue;
        this.$nextTick(function () {
          _this2.$refs.input.select();
        });
      } else if (this.inputValue) {
        this.onInputSubmit();
      }
    }
  },
  methods: {
    update: function update(value) {
      var _this3 = this;

      this.selfValue = +this.selfValue + value * this.jump;
      var now = new Date().getTime(),
          def = now - this.lastUpdate;
      if (20 < def && def < 300) this.transitionSpeed = def;
      this.lastUpdate = now;
      window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(function () {
        _this3.transitionSpeed = 300;
      }, 300);
    },
    wheelUpdate: function wheelUpdate(e) {
      var delta = this.jump;
      var goUp = (e.wheelDeltaY || -e.detail) > 0;
      this.update(goUp ? delta : -delta);
    },
    fastUpdateCounter: function fastUpdateCounter(e) {
      if (!e) this.transitionSpeed = 300;
      this.classFastCounter = e ? 'fast-updating' : '';
    },
    setDirection: function setDirection(val, old) {
      if (val * 1 === old * 1) return;
      this.directionClass = val > old ? 'direction-next' : 'direction-prev';
    },
    onInputSubmit: function onInputSubmit() {
      this.selfValue = this.inputValue;
      this.transitionSpeed = 0;
    },
    onInputChange: function onInputChange(event) {
      if (event.target.value.length >= this.selfValue.length) this.$emit('filled');
    }
  }
});
// CONCATENATED MODULE: ./src/picker/components/time/TimeColumn.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/picker/components/time/TimeColumn.vue





const TimeColumn_exports_ = /*#__PURE__*/exportHelper_default()(TimeColumnvue_type_script_lang_js, [['render',TimeColumnvue_type_template_id_13b8ce82_render]])

/* harmony default export */ var TimeColumn = (TimeColumn_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/time/TimeSection.vue?vue&type=script&lang=js

/* harmony default export */ var TimeSectionvue_type_script_lang_js = ({
  name: 'TimeSection',
  components: {
    TimeColumn: TimeColumn
  },
  props: {
    date: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    time: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    type: {
      type: String,
      default: 'date'
    },
    jumpMinute: {
      type: Number,
      default: 1
    },
    roundMinute: {
      type: Boolean,
      default: false
    },
    isDisableTime: {
      type: Boolean,
      default: false
    },
    getHighlights: {
      type: Function,
      default: null
    },
    isMore: {
      type: Function,
      default: null
    },
    isLower: {
      type: Function,
      default: null
    },
    minDate: {
      type: [Object, Boolean],
      default: false
    },
    maxDate: {
      type: [Object, Boolean],
      default: false
    },
    selectedDates: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    convertToLocaleNumber: {
      type: Function,
      default: null
    }
  },
  emits: ['update:date', 'update:time'],
  computed: {
    timeAttributes: function timeAttributes() {
      return this.getHighlights('t', this.time);
    },
    hourModel: {
      get: function get() {
        return this.time.format('HH');
      },
      set: function set(val) {
        this.setTime(val, 'hours');
      }
    },
    minuteModel: {
      get: function get() {
        return this.time.format('mm');
      },
      set: function set(val) {
        this.setTime(val, 'minutes');
      }
    }
  },
  watch: {
    time: {
      handler: function handler() {
        if (this.roundMinute) {
          var time = this.time.clone();
          var jm = this.jumpMinute;
          var m = (jm - time.minute() % jm) % jm;
          time = time.add({
            m: m
          });

          if (time.valueOf() !== this.time.valueOf()) {
            this.$emit('update:time', time); // @todo: this line should apply time to current date selection,
            // not all of them

            this.selectedDates.forEach(function (d) {
              d = d.set('m', time.minute());
            });
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    setTime: function setTime(v, k) {
      var time = this.time.clone();
      time = time.set(k, v);

      if (this.type !== 'time') {
        var date = this.date.clone();
        time = time.set('year', date.year()).set('month', date.month()).set('date', date.date());
        date = date.set('hour', time.hour()).set('minute', time.minute());
        this.$emit('update:date', date);
      }

      if (this.isLower(time)) time = this.minDate.clone();
      if (this.isMore(time)) time = this.maxDate.clone();
      this.$emit('update:time', time);
    },
    focusNext: function focusNext() {
      this.$refs.minute.$el.querySelector('input').focus();
    }
  }
});
// CONCATENATED MODULE: ./src/picker/components/time/TimeSection.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/picker/components/time/TimeSection.vue





const TimeSection_exports_ = /*#__PURE__*/exportHelper_default()(TimeSectionvue_type_script_lang_js, [['render',TimeSectionvue_type_template_id_0d6208c6_render]])

/* harmony default export */ var TimeSection = (TimeSection_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/simple/SimpleMode.vue?vue&type=template&id=42423884

var SimpleModevue_type_template_id_42423884_hoisted_1 = {
  class: "vpd-simple-body"
};
function SimpleModevue_type_template_id_42423884_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_locale_change = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("locale-change");

  var _component_simple_mode_column = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("simple-mode-column");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", SimpleModevue_type_template_id_42423884_hoisted_1, [$options.showHeader ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "vpd-header",
    style: {
      'background-color': $props.color
    }
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "header-date", {
    vm: $data.vm,
    formattedDate: $props.formattedDate
  }, function () {
    return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.convertToLocaleNumber($props.formattedDate)), 1)];
  })]), $props.locales.length > 1 ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "locales", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 0
  }, {
    vm: $data.vm,
    locales: $props.locales,
    setLocale: $props.setLocale
  }), function () {
    return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_locale_change, {
      "locale-data": $props.core.locale,
      core: $props.core,
      locales: $props.locales,
      class: "vpd-locales",
      onChange: $props.setLocale
    }, null, 8, ["locale-data", "core", "locales", "onChange"])];
  }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "vpd-simple-content",
    onMouseleave: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:hovered-item', null);
    })
  }, [$props.hasStep('y') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_simple_mode_column, {
    key: 0,
    label: $props.lang.year,
    value: $options.selectedYear,
    locale: $props.core.locale.name
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.years, function (year, yi) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
          key: yi
        }, year.attributes, {
          class: ['vpd-addon-list-item', {
            'vpd-selected': year.selected
          }, year.attributes.class],
          style: [{
            color: year.selected ? $props.color : ''
          }, year.attributes.style],
          disabled: year.disabled,
          onClick: function onClick($event) {
            return _ctx.$emit('select-year', year);
          }
        }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "year-item", {
          vm: $data.vm,
          year: year,
          color: $props.color
        }, function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.convertToLocaleNumber(year.format('jYYYY'))), 1)];
        })], 16, ["disabled", "onClick"]);
      }), 128))];
    }),
    _: 3
  }, 8, ["label", "value", "locale"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.hasStep('m') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_simple_mode_column, {
    key: 1,
    label: $props.lang.month,
    value: $options.selectedMonth,
    locale: $props.core.locale.name
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.months, function (month, mi) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
          key: mi
        }, month.attributes, {
          class: ['vpd-addon-list-item', {
            'vpd-selected': month.selected
          }, month.attributes.class],
          disabled: month.disabled,
          style: [{
            color: month.selected ? $props.color : ''
          }, month.attributes.style],
          onClick: function onClick($event) {
            return _ctx.$emit('select-month', month);
          }
        }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "month-item", {
          vm: $data.vm,
          monthItem: month,
          color: $props.color
        }, function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(month.format('jMMMM')), 1)];
        })], 16, ["disabled", "onClick"]);
      }), 128))];
    }),
    _: 3
  }, 8, ["label", "value", "locale"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.hasStep('d') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_simple_mode_column, {
    key: 2,
    label: $props.lang.day,
    value: $options.selectedDay,
    locale: $props.core.locale.name
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.days, function (day, di) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
          key: di,
          class: ['vpd-addon-list-item', {
            'vpd-selected': day.selected,
            'vpd-empty': day.date == null,
            'vpd-range-first': day.isFirst,
            'vpd-range-last': day.isLast,
            'vpd-range-between': day.isBetween,
            'vpd-range-hover': $props.hoveredItem && day.isHover
          }, day.attributes.class]
        }, day.attributes, {
          style: [{
            color: day.selected || day.isBetween ? $props.color : ''
          }, day.attributes.style],
          disabled: day.disabled,
          onClick: function onClick($event) {
            return _ctx.$emit('select-day', day);
          },
          onMouseover: function onMouseover($event) {
            return _ctx.$emit('update:hovered-item', day.date);
          }
        }), [day.date != null ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "day-item", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
          key: 0
        }, {
          vm: $data.vm,
          day: day,
          color: $props.color
        }), function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.convertToLocaleNumber(day.formatted)), 1)];
        }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 16, ["disabled", "onClick", "onMouseover"]);
      }), 128))];
    }),
    _: 3
  }, 8, ["label", "value", "locale"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 32)]);
}
// CONCATENATED MODULE: ./src/picker/components/simple/SimpleMode.vue?vue&type=template&id=42423884

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/simple/SimpleModeColumn.vue?vue&type=template&id=0bd5271a

var SimpleModeColumnvue_type_template_id_0bd5271a_hoisted_1 = {
  ref: "content",
  class: "vpd-column-content"
};
function SimpleModeColumnvue_type_template_id_0bd5271a_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["vpd-column", {
      'vpd-is-mounted': $data.isMounted
    }],
    onMousewheel: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {}, ["stop"]))
  }, [$props.label ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "vpd-column-header",
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label)
  }, null, 8, ["textContent"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", SimpleModeColumnvue_type_template_id_0bd5271a_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 512)], 34);
}
// CONCATENATED MODULE: ./src/picker/components/simple/SimpleModeColumn.vue?vue&type=template&id=0bd5271a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/simple/SimpleModeColumn.vue?vue&type=script&lang=js

/* harmony default export */ var SimpleModeColumnvue_type_script_lang_js = ({
  name: 'SimpleModeColumn',
  props: {
    label: {
      type: String,
      default: null
    },
    locale: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  data: function data() {
    return {
      isMounted: false
    };
  },
  watch: {
    value: function value() {
      this.scrollIntoView(200);
    },
    locale: function locale() {
      this.scrollIntoView(200);
    }
  },
  mounted: function mounted() {
    this.scrollIntoView(0);
  },
  methods: {
    scrollIntoView: function scrollIntoView(duration) {
      var _this = this;

      try {
        this.isMounted = false;
        this.$nextTick(function () {
          var activeElement = _this.$refs.content.querySelector('.vpd-selected') || _this.$refs.content.querySelector('.vpd-addon-list-item:not([disabled])'); // we want to scroll multiple containers at same time
          // the native `scrollIntoView` method does not work in this case,
          // so we use this method


          if (activeElement) scrollIntoCenter(activeElement, duration, function () {
            _this.isMounted = true;
          });
        });
      } catch (e) {
        // eslint-disable-next-line
        console.warn(e);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/picker/components/simple/SimpleModeColumn.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/picker/components/simple/SimpleModeColumn.vue





const SimpleModeColumn_exports_ = /*#__PURE__*/exportHelper_default()(SimpleModeColumnvue_type_script_lang_js, [['render',SimpleModeColumnvue_type_template_id_0bd5271a_render]])

/* harmony default export */ var SimpleModeColumn = (SimpleModeColumn_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/components/simple/SimpleMode.vue?vue&type=script&lang=js


/* harmony default export */ var SimpleModevue_type_script_lang_js = ({
  name: 'SimpleMode',
  components: {
    LocaleChange: LocaleChange,
    SimpleModeColumn: SimpleModeColumn
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    lang: {
      type: Object,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    hasStep: {
      type: Function,
      default: null
    },
    years: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    months: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    monthDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selectedDates: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    formattedDate: {
      type: String,
      default: null
    },
    hoveredItem: {
      type: Date,
      default: null
    },
    locales: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    core: {
      type: Object,
      default: null
    },
    setLocale: {
      type: Function,
      default: null
    },
    convertToLocaleNumber: {
      type: Function,
      default: null
    }
  },
  emits: ['select-day', 'update:hovered-item', 'select-month', 'select-year'],
  data: function data() {
    return {
      vm: this
    };
  },
  computed: {
    days: function days() {
      var days = [];
      this.monthDays.forEach(function (week) {
        week.forEach(function (day) {
          if (day.date) days.push(day);
        });
      });
      return days;
    },
    selectedYear: function selectedYear() {
      var year = this.years.find(function (year) {
        return year.selected;
      });
      return year ? year.format('YYYY') : '';
    },
    selectedMonth: function selectedMonth() {
      var month = this.months.find(function (month) {
        return month.selected;
      });
      return month ? month.format('MM') : '';
    },
    selectedDay: function selectedDay() {
      var day = this.days.find(function (day) {
        return day.selected;
      }) || {};
      return day && day.date ? day.date.getDate() : '';
    },
    showHeader: function showHeader() {
      var selectedDatesLength = this.selectedDates.length;
      return this.locales.length > 1 || selectedDatesLength > 1 || this.range && selectedDatesLength || this.multiple && selectedDatesLength;
    }
  }
});
// CONCATENATED MODULE: ./src/picker/components/simple/SimpleMode.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/picker/components/simple/SimpleMode.vue





const SimpleMode_exports_ = /*#__PURE__*/exportHelper_default()(SimpleModevue_type_script_lang_js, [['render',SimpleModevue_type_template_id_42423884_render]])

/* harmony default export */ var SimpleMode = (SimpleMode_exports_);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/updateLocale.js
var updateLocale = __webpack_require__("b002");
var updateLocale_default = /*#__PURE__*/__webpack_require__.n(updateLocale);

// EXTERNAL MODULE: ./node_modules/dayjs/plugin/relativeTime.js
var relativeTime = __webpack_require__("4208");
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime);

// EXTERNAL MODULE: ./node_modules/dayjs/plugin/localeData.js
var localeData = __webpack_require__("5e0f");
var localeData_default = /*#__PURE__*/__webpack_require__.n(localeData);

// EXTERNAL MODULE: ./node_modules/dayjs/plugin/calendar.js
var plugin_calendar = __webpack_require__("1c1c");
var calendar_default = /*#__PURE__*/__webpack_require__.n(plugin_calendar);

// EXTERNAL MODULE: ./node_modules/dayjs/plugin/utc.js
var utc = __webpack_require__("0ecf");
var utc_default = /*#__PURE__*/__webpack_require__.n(utc);

// CONCATENATED MODULE: ./node_modules/dayjs/esm/constant.js
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND; // English locales

var MS = 'millisecond';
var S = 'second';
var MIN = 'minute';
var H = 'hour';
var D = 'day';
var W = 'week';
var M = 'month';
var Q = 'quarter';
var Y = 'year';
var DATE = 'date';
var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
var INVALID_DATE_STRING = 'Invalid Date'; // regex

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
// EXTERNAL MODULE: ./node_modules/jalaali-js/index.js
var jalaali_js = __webpack_require__("b1f2");

// CONCATENATED MODULE: ./src/picker/modules/dayjs-jalali.js


function dayjsJalali(_option, Dayjs, dayjs) {
  if (dayjs.$C) {
    // Jalali plugin is already registered in Dayjs.
    return;
  }

  dayjs.$C = 'gregory';
  var proto = Dayjs.prototype;
  var Utils = proto.$utils();
  var oldW = Utils.w;

  Utils.w = function (date, instance) {
    var res = oldW(date, instance);

    if (instance.$C === 'jalali') {
      res.$C = 'jalali';
      res.init();
    }

    return res;
  };

  dayjs.calendar = function (calendar) {
    dayjs.$C = calendar;
    return dayjs;
  };

  proto.calendar = function (calendar) {
    if (!calendar) {
      return this.$C;
    }

    var that = this.clone();
    that.$C = calendar;
    that.init();
    return that;
  };

  function convertJalaliDateStringToGregory(date) {
    if (typeof date === 'string' && !/Z$/i.test(date)) {
      // REGEX_PARSE = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/
      var d = date.match(REGEX_PARSE);

      if (!d) {
        return date;
      }

      var _toGregorian = Object(jalaali_js["toGregorian"])(parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10) || 1),
          gy = _toGregorian.gy,
          gm = _toGregorian.gm,
          gd = _toGregorian.gd;

      d[1] = gy;
      d[2] = gm;
      d[3] = gd;
      return date.replace(/^(\d{4})-?(\d{1,2})-?(\d{0,2})/, d[1] + '-' + d[2] + '-' + d[3]);
    }

    return date;
  }

  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    this.$C = cfg.calendar || this.$C || dayjs.$C;

    if (cfg.jalali) {
      cfg.date = convertJalaliDateStringToGregory(cfg.date);
    }

    oldParse.call(this, cfg);
  };

  var oldInit = proto.init;

  proto.init = function () {
    oldInit.call(this);

    if (this.$C === 'jalali') {
      if (!isNaN(this.$d)) {
        var _toJalaali = Object(jalaali_js["toJalaali"])(this.$y, this.$M + 1, this.$D),
            jy = _toJalaali.jy,
            jm = _toJalaali.jm,
            jd = _toJalaali.jd;

        this.$jy = jy;
        this.$jM = jm - 1;
        this.$jD = jd;
      } else {
        this.$jy = NaN;
        this.$jM = NaN;
        this.$jD = NaN;
      }
    } else {
      delete this.$jy;
      delete this.$jM;
      delete this.$jD;
    }
  };

  var old$g = proto.$g;

  proto.$g = function (input, get, set) {
    if (this.$C !== 'jalali') {
      return old$g.call(this, input, get, set);
    }

    if (Utils.u(input)) {
      if (get === '$y') {
        get = '$jy';
      }

      if (get === '$M') {
        get = '$jM';
      }

      if (get === '$D') {
        get = '$jD';
      }

      return this[get];
    }

    return this.set(set, input);
  };

  var oldStartOf = proto.startOf;

  proto.startOf = function (units, startOf) {
    var _this = this;

    if (this.$C !== 'jalali') {
      return oldStartOf.call(this, units, startOf);
    }

    var isStartOf = !Utils.u(startOf) ? startOf : true;
    var unit = Utils.p(units);

    var instanceFactory = function instanceFactory(d) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.$jM;
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.$jy;

      var _toGregorian2 = Object(jalaali_js["toGregorian"])(y, m + 1, d),
          gy = _toGregorian2.gy,
          gm = _toGregorian2.gm,
          gd = _toGregorian2.gd;

      var ins = Utils.w(_this.$u ? Date.UTC(gy, gm - 1, gd) : new Date(gy, gm - 1, gd), _this);
      return (isStartOf ? ins : ins.endOf(D)).$set('hour', 1); // prevent daylight saving issue in safari
    };

    var $W = this.$W,
        $jy = this.$jy,
        $jM = this.$jM,
        $jD = this.$jD;

    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(0, 0, $jy + 1);

      case M:
        return isStartOf ? instanceFactory(1) : instanceFactory(0, ($jM + 1) % 12, $jy + parseInt(($jM + 1) / 12, 10));

      case W:
        {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $jD - gap : $jD + (6 - gap));
        }

      default:
        return oldStartOf.call(this, units, startOf);
    }
  };

  var old$set = proto.$set;

  proto.$set = function (string, int) {
    if (this.$C !== 'jalali') {
      return old$set.call(this, string, int);
    }

    var unit = Utils.p(string);
    var $jy = this.$jy,
        $jM = this.$jM,
        $jD = this.$jD;

    switch (unit) {
      case Y:
        $jy = int;
        break;

      case M:
        $jM = int;
        break;

      case DATE:
      case D:
        $jD = int;
        break;

      default:
        return old$set.call(this, string, int);
    }

    var _toGregorian3 = Object(jalaali_js["toGregorian"])($jy, $jM + 1, $jD),
        gy = _toGregorian3.gy,
        gm = _toGregorian3.gm,
        gd = _toGregorian3.gd;

    this.$d.setFullYear(gy);
    this.$d.setMonth(gm - 1);
    this.$d.setDate(gd);
    this.init();
    return this;
  };

  var oldAdd = proto.add;

  proto.add = function (number, units) {
    if (this.$C !== 'jalali') {
      return oldAdd.call(this, number, units);
    }

    number = Number(number); // eslint-disable-line no-param-reassign
    // const unit =
    //     units && (units.length === 1 || units === 'ms')
    //         ? units
    //         : Utils.p(units);

    var unit = Utils.p(units);

    if (['M', M].includes(unit)) {
      var n = this.$jM + number;
      var y = n < 0 ? -Math.ceil(-n / 12) : parseInt(n / 12, 10);
      var d = this.$jD;
      var x = this.set(D, 1).add(y, Y).set(M, n - y * 12);
      return x.set(D, Math.min(d, x.daysInMonth()));
    }

    if (['y', Y].includes(unit)) {
      var date = this.set(DATE, 1).set(Y, this.$jy + number);
      return date.set(DATE, Math.min(this.$jD, date.daysInMonth()));
    }

    if (['d', D].includes(unit)) {
      var _d = new Date(this.$d);

      _d.setDate(_d.getDate() + number);

      var _date = this.clone();

      _date.$d = _d;

      _date.init();

      return _date;
    }

    return oldAdd.call(this, number, units);
  };

  var oldFormat = proto.format;

  proto.format = function (formatStr) {
    var _this2 = this;

    if (this.$C !== 'jalali') {
      return oldFormat.call(this, formatStr);
    }

    var str = formatStr || FORMAT_DEFAULT;
    var locale = this.$locale();
    var $jM = this.$jM;
    var name = locale.name;
    var months = {
      en: 'Farvardin_Ordibehesht_Khordaad_Tir_Mordaad_Shahrivar_Mehr_Aabaan_Aazar_Dey_Bahman_Esfand',
      fa: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'
    }[name].split('_');

    var getShort = function getShort(arr, index, full, length) {
      return arr && (arr[index] || arr(_this2, str)) || full[index].substr(0, length);
    };

    var matches = {
      YY: String(this.$jy).slice(-2),
      YYYY: this.$jy,
      M: $jM + 1,
      MM: Utils.s($jM + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $jM, months, 3),
      MMMM: getShort(months, $jM),
      D: this.$jD,
      DD: Utils.s(this.$jD, 2, '0')
    };
    return str.replace(REGEX_FORMAT, function (match, $1) {
      return $1 || matches[match] || oldFormat.call(_this2, match);
    });
  };

  var oldDaysInMonth = proto.daysInMonth;

  proto.daysInMonth = function () {
    if (this.$C !== 'jalali') {
      return oldDaysInMonth.call(this);
    }

    return this.endOf(M).$jD;
  };

  var oldToArray = proto.toArray;

  if (oldToArray) {
    proto.toArray = function () {
      if (this.$C !== 'jalali') {
        return oldToArray.call(this);
      }

      return [this.$jy, this.$jM, this.$jD, this.$H, this.$m, this.$s, this.$ms];
    };
  }
}
// EXTERNAL MODULE: ./node_modules/dayjs/locale/fa.js
var fa = __webpack_require__("5204");

// CONCATENATED MODULE: ./src/picker/modules/core.js
/*global getYear*/

/*eslint no-undef: ["error", { "typeof": true }] */









dayjs_min_default.a.extend(updateLocale_default.a);
dayjs_min_default.a.extend(relativeTime_default.a);
dayjs_min_default.a.extend(localeData_default.a);
dayjs_min_default.a.extend(calendar_default.a);
dayjs_min_default.a.extend(utc_default.a);
dayjs_min_default.a.extend(dayjsJalali);
dayjs_min_default.a.updateLocale('en', {
  weekdaysMin: 'S_M_T_W_T_F_S'.split('_')
}); //=====================================
//           CONFIG
//=====================================

var localesConfig = {
  fa: {
    calendar: 'jalali',
    dow: 6,
    dir: 'rtl',
    displayFormat: null,
    lang: {
      label: 'شمسی',
      submit: 'تایید',
      cancel: 'انصراف',
      now: 'اکنون',
      nextMonth: 'ماه بعد',
      prevMonth: 'ماه قبل',
      year: 'سال',
      month: 'ماه',
      day: 'روز'
    }
  },
  en: {
    calendar: 'gregorian',
    dow: 0,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: 'میلادی',
      submit: 'Select',
      cancel: 'Cancel',
      now: 'Now',
      nextMonth: 'Next month',
      prevMonth: 'Previous month',
      year: 'Year',
      month: 'Month',
      day: 'Day'
    }
  }
};

var core_Core = function Core(defaultLocaleName, defaultOptions) {
  'use strict';

  var Instance = {
    dayjs: dayjs_min_default.a,
    dayjsBase: dayjs_min_default.a,
    locale: {
      name: 'fa',
      config: {}
    },
    localesConfig: {},
    setLocalesConfig: null,
    changeLocale: null,
    getWeekArray: null,
    getYearsList: null,
    getMonthsList: null
  }; //=====================================
  //           METHODS
  //=====================================

  Instance.changeLocale = function changeLocale() {
    var localeName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fa';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var locale = this.locale;
    var calendar = localesConfig[localeName].calendar;
    var config = utils.clone(localesConfig[localeName] || localesConfig.en);
    options = options[localeName] || {};
    if (!localesConfig[localeName]) options = utils.extend(true, {}, utils.clone(localesConfig.en), options);
    locale.name = localeName;
    locale.config = utils.extend(true, config, options);

    this.dayjs = function () {
      return dayjs_min_default.a.apply(null, arguments).locale(locale.name).calendar(calendar);
    };
  };

  Instance.setLocalesConfig = function (config) {
    var defaults = utils.clone(localesConfig);

    for (var key in config) {
      if (config.hasOwnProperty(key) && defaults[key] === undefined) defaults[key] = utils.extend(true, {}, utils.clone(defaults.en), {
        lang: {
          label: key
        }
      }, config[key]);
    }

    this.localesConfig = utils.extend(true, defaults, config);
  };

  Instance.getWeekArray = function getWeekArray(date) {
    var _this = this;

    function addWeek(weekArray, week) {
      var emptyDays = 7 - week.length;

      for (var i = 0; i < emptyDays; ++i) {
        week[weekArray.length ? 'push' : 'unshift'](null);
      }

      weekArray.push(week);
    }

    date.set('hour', 12).set('minute', 0);
    var daysInMonth = date.daysInMonth();
    var day = date.clone().date(1);
    var dayArray = [day.toDate()];

    for (var i = 2; i <= daysInMonth; i++) {
      day = day.add(1, 'day');
      dayArray.push(day.toDate());
    }

    var weekArray = [];
    var week = [];
    dayArray.forEach(function (day) {
      if (week.length > 0 && day.getDay() === _this.locale.config.dow) {
        addWeek(weekArray, week);
        week = [];
      }

      week.push(day);

      if (dayArray.indexOf(day) === dayArray.length - 1) {
        addWeek(weekArray, week);
      }
    });
    return weekArray;
  };

  Instance.getYearsList = function getYearsList(from, to) {
    var range = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var date = arguments.length > 3 ? arguments[3] : undefined;
    var years = [];

    if (range) {
      var year = getYear(date);
      from = year - range;
      to = year + range;
    }

    for (var i = from; i <= to; i++) {
      years.push(i);
    }

    return years;
  };

  Instance.getMonthsList = function getMonthsList(minDate, maxDate, date) {
    var list = [],
        min = minDate ? minDate.clone().startOf('month') : -Infinity,
        max = maxDate ? maxDate.clone().endOf('month') : Infinity;

    for (var i = 0; i < 12; i++) {
      var month = date.clone().month(i);
      var start = month.clone().startOf('month');
      var end = month.clone().endOf('month');
      month.disabled = start < min || end > max;
      list.push(month);
    }

    return list;
  };

  Instance.changeLocale(defaultLocaleName, defaultOptions);
  return Instance;
};

/* harmony default export */ var core = (core_Core);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/picker/Vue3PersianDatetimePicker.vue?vue&type=script&lang=js
function Vue3PersianDatetimePickervue_type_script_lang_js_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Vue3PersianDatetimePickervue_type_script_lang_js_typeof = function _typeof(obj) { return typeof obj; }; } else { Vue3PersianDatetimePickervue_type_script_lang_js_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Vue3PersianDatetimePickervue_type_script_lang_js_typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












/* harmony default export */ var Vue3PersianDatetimePickervue_type_script_lang_js = ({
  name: 'Vue3PersianDatetimePicker',
  components: {
    SimpleMode: SimpleMode,
    TimeSection: TimeSection,
    LocaleChange: LocaleChange,
    Arrow: Arrow,
    CalendarIcon: CalendarIcon,
    TimeIcon: TimeIcon
  },
  mixins: [popupRouteChanger],
  props: {
    /**
     * Default input value
     * @type Number String
     * @default []
     * @example 1396/08/01 22:45 | 2017/07/07 20:45 | {unix} | 20:45
     */
    modelValue: {
      type: [Number, String, Date, Array],
      default: ''
    },

    /**
     * Initial value of picker (if value is empty)
     * @type Number String
     * @default []
     * @example 1370/01/01 22:45 | 2017/01/01 20:45 | {unix} | 20:45
     * @version 1.0.9
     */
    initialValue: {
      type: [Number, String],
      default: ''
    },

    /**
     * Format for {value}
     * @type String
     * @default Null
     * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | unix | HH:mm
     * @if empty {inputFormat} = {format}
     * @see https://github.com/jalaali/moment-jalaali
     */
    inputFormat: {
      type: String,
      default: ''
    },

    /**
     * Format only to display the date in the field
     * @type String
     * @default Null
     * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | unix | HH:mm
     * @if empty {displayFormat} = {format}
     * @see https://github.com/jalaali/moment-jalaali
     */
    displayFormat: {
      type: String,
      default: ''
    },

    /**
     * Format for output value
     * @type String
     * @default Null
     * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | date | HH:mm
     * @if empty, it will be built according to the type of picker:
     *
     * --- time:     HH:mm
     * --- datetime: jYYYY/jMM/jDD HH:mm
     * --- date:     jYYYY/jMM/jDD
     * --- year:     jYYYY
     * --- month:    jMM
     *
     * @see https://github.com/jalaali/moment-jalaali
     */
    format: {
      type: String,
      default: ''
    },

    /**
     * Step to view on startup
     * @type String
     * @default "day"
     * @supported day | month | year | time
     * @example year
     * @desc {year} will show the "year" panel at first
     */
    view: {
      type: String,
      default: 'day'
    },

    /**
     * The picker type
     * @type String
     * @default "date"
     * @supported date | datetime | year | month | time
     */
    type: {
      type: String,
      default: 'date'
    },

    /**
     * The minimum of selectable period
     * Based on {inputFormat}
     * @type String
     * @default Null
     * @example 1396/08/01 22:45 | 22:45
     */
    min: {
      type: [String],
      default: ''
    },

    /**
     * The maximum of selectable period
     * Based on {inputFormat}
     * @type String
     * @default Null
     * @example 1396/08/01 22:45 | 22:45
     */
    max: {
      type: [String],
      default: ''
    },

    /**
     * Editable input or just readonly
     * @type Boolean
     * @default False
     * @if false, the picker will shown on input focus
     * @if true, the picker will shown on label click
     * @note if use <... :editable="true"> with <... :element="...">
     *     then you have to control the <... :show="true or false">
     */
    editable: {
      type: Boolean,
      default: false
    },

    /**
     * @deprecated
     * The specified input element ID
     * @type String
     * @default Undefined
     * @desc Sometimes you don't want to use picker default input,
     * so you can use our own input element with "id" attribute
     * and use <... element="the_id_of_input">
     */
    element: {
      type: String,
      default: undefined
    },

    /**
     * New version of `element`
     * @type String (DOMString containing a selector list)
     * @desc use this instead of `element`,
     * this custom input does not need v-model, and it will be automatically updated
     * also supports `display-format`
     * @example .my-custom-input | #my-custom-input | div.foo > input
     * @version 2.10.0
     */
    customInput: {
      type: String,
      default: undefined
    },

    /**
     * The form input name when not using {element}
     * @type String
     * @default Undefined
     */
    name: {
      type: String,
      default: undefined
    },

    /**
     * The form input className when not using {element}
     * @type String
     * @default "form-control"
     */
    inputClass: {
      type: String,
      default: 'form-control'
    },

    /**
     * The form input placeholder when not using {element}
     * @type String
     * @default Null
     */
    placeholder: {
      type: String,
      default: ''
    },

    /**
     * The name of hidden input element
     * @type String
     * @default Null
     * @if empty, the hidden input will not be created
     */
    altName: {
      type: String,
      default: ''
    },

    /**
     * Format for hidden input
     * @type String
     * @default Null
     * @example YYYY-MM-DD HH:mm:ss [GMT]ZZ
     * @if empty, it will be built according to the type of picker:
     *
     * --- time:     HH:mm:ss [GMT]ZZ
     * --- datetime: YYYY-MM-DD HH:mm:ss [GMT]ZZ
     * --- date:     YYYY-MM-DD
     * --- year:     YYYY
     * --- month:    MM
     */
    altFormat: {
      type: String,
      default: ''
    },

    /**
     * Show or hide the picker
     * @type Boolean
     * @default False
     */
    show: {
      type: Boolean,
      default: false
    },

    /**
     * Primary color of picker
     * @type String
     */
    color: {
      type: String,
      default: '#417df4'
    },

    /**
     * Auto submit and hide picker when date selected
     * @type Boolean
     * @default False
     */
    autoSubmit: {
      type: Boolean,
      default: false
    },

    /**
     * Auto submit when clicking the wrapper
     * @type Boolean
     * @default false
     * @version 1.0.6
     */
    wrapperSubmit: {
      type: Boolean,
      default: false
    },

    /**
     * Place to append picker
     * @type String query selector
     * @default null
     * @desc If you want to append picker to another container like 'body',
     * pass the container as append-to="body",  append-to="#app",  append-to="#my-container"
     * @example 'body', '.main-container', '#app' ...
     * @version 1.1.1
     */
    appendTo: {
      type: String,
      default: null
    },

    /**
     * Disable or enable the datepicker
     * @type Boolean
     * @default false
     * @version 1.1.4
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Disabling
     * @type Array, String, Function, RegExp
     * @default undefined
     * @desc disable some dates
     * @example ['1397/02/02', '1390/10/10'] - "1397/05/20" - /1397\/05\/(.*)/ ...
     * @version 1.1.4
     */
    disable: {
      type: [Array, String, Function, RegExp],
      default: undefined
    },

    /**
     * Label
     * @type String
     * @version 1.1.4
     */
    label: {
      type: String,
      default: ''
    },

    /**
     * Highlight items
     * @type Function
     * @desc This prop accepts only function that return an object of attributes.
     * @version 1.1.5
     */
    highlight: {
      type: Function,
      default: null
    },

    /**
     * Change minutes by step
     * @type Number
     * @default 1
     * @version: 1.1.6
     */
    jumpMinute: {
      type: Number,
      default: 1
    },

    /**
     * Round minutes when jumpMinute is grater than 1
     * @example when jumpMinute = 15 thin will result: 13:00, 13:15, 13:30, 13:45 ...
     * @type Boolean
     * @default false
     * @version: 1.1.6
     */
    roundMinute: {
      type: Boolean,
      default: false
    },

    /**
     * Show clear button
     * @type Boolean
     * @default false
     * @version 1.1.6
     */
    clearable: {
      type: Boolean,
      default: false
    },

    /**
     * Inline mode
     * @type Boolean
     * @default false
     * @version 1.1.6
     */
    inline: {
      type: Boolean,
      default: false
    },

    /**
     * Locales config ("fa" for jalali and "en" for gregorian)
     * @type String
     * @default fa
     * @example fa | en | fa,en | en,fa
     * @supported fa,en
     * @version 2.0.0
     */
    locale: {
      type: String,
      default: 'fa'
    },

    /**
     * Locale configuration
     * @type Object
     * @default {}
     * @version 2.0.0
     * @example
     * {
     *  fa: {
     *      dow: 6,             --first day of week
     *      dir: 'rtl',         --language direction
     *      lang: {
     *           label:     "شمسی",
     *           submit:    "تایید",
     *           cancel:    "انصراف",
     *           now:       "اکنون",
     *           nextMonth: "ماه بعد",
     *           prevMonth: "ماه قبل",
     *      }
     *  },
     *  en: { ... }
     * }
     */
    localeConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * Timezone configuration
     * @type String | Boolean | Function
     * @default false
     * @example true | false | +03:30 | +04:30
     * @version 2.1.0
     */
    timezone: {
      type: [Boolean, String, Function],
      default: false
    },

    /**
     * Show or hide NOW button
     * @type Boolean
     * @default true
     * @version 2.1.6
     */
    showNowBtn: {
      type: Boolean,
      default: true
    },

    /**
     * Convert to locale numbers or not
     * @type Boolean
     * @default false
     * @example <date-picker convert-numbers />
     * @version 2.3.0
     */
    convertNumbers: {
      type: Boolean,
      default: false
    },

    /**
     * Display the time on the front page
     * @type Boolean
     * @default false
     * @example <date-picker compact-time />
     * @version 2.4.0
     */
    compactTime: {
      type: Boolean,
      default: false
    },

    /**
     * Enable or disable range mode
     * @type Boolean
     * @default false
     * @example <date-picker range />
     * @version 2.5.0
     */
    range: {
      type: Boolean,
      default: false
    },

    /**
     * Enable or disable multiple mode
     * @type Boolean
     * @default false
     * @example <date-picker multiple />
     * @version 2.6.0
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Enable or disable popover mode
     * @type Boolean | String
     * @accepted:
     *    true | false
     *    top-left | top-right | bottom-right | bottom-left
     *    left-top | left-bottom | right-top | right-bottom
     * @default false
     * @example <date-picker popover />
     * @example <date-picker popover="top-left" />
     * @version 2.6.0
     */
    popover: {
      type: [Boolean, String],
      default: false
    },

    /**
     * If you want to change route address in open/close action,
     * then enable this prop
     * @type Boolean | String
     * @default false
     * @example <date-picker use-router />          => example.com/home?vpd-75454=active
     * @example <date-picker use-router="foo" />    => example.com/home?vpd-foo=active
     * @example <date-picker id="bar" use-router /> => example.com/home?vpd-bar=active
     */
    useRouter: {
      type: [Boolean, String],
      default: false
    },

    /**
     * Enable or disable simple mode
     * @type Boolean
     * @default false
     * @example <date-picker simple />
     */
    simple: {
      type: Boolean,
      default: false
    },

    /**
     * Additional attributes for input element
     * @type Object
     * @default null
     * @example <date-picker :input-attrs="{ foo: 'bar' }" />
     * @version 2.9.0
     */
    inputAttrs: {
      type: Object,
      default: null
    },

    /**
     * If you want jalali output
     * @type Boolean
     * @default false
     * @example <date-picker is-jalali />
     */
    isJalali: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'locale-change', 'change', 'open', 'close', 'year-change', 'month-change', 'next-month', 'prev-month'],
  data: function data() {
    var defaultLocale = this.locale.split(',')[0];
    var coreModule = new core(defaultLocale, this.localeConfig);
    return {
      core: coreModule,
      now: coreModule.dayjs(),
      date: {},
      selectedDates: [],
      hoveredItem: null,
      visible: false,
      directionClass: '',
      directionClassDate: '',
      steps: ['y', 'm', 'd', 't'],
      step: 0,
      shortCodes: {
        year: 'y',
        month: 'm',
        day: 'd',
        time: 't'
      },
      time: {},
      minDate: false,
      maxDate: false,
      output: [],
      updateNowInterval: null,
      locales: ['fa'],
      localeData: coreModule.locale,
      windowWidth: window.innerWidth,
      popoverPlace: 'bottom-right'
    };
  },
  computed: {
    vm: function vm() {
      return this;
    },
    id: function id() {
      var randId = Math.round(Math.random() * 1000000);
      return "vpd-".concat(this.$attrs.id || randId);
    },
    currentStep: function currentStep() {
      return this.steps[this.step];
    },
    selectedDate: function selectedDate() {
      var dates = this.selectedDates;
      return dates.length ? dates[dates.length - 1] : this.date;
    },
    formattedDate: function formattedDate() {
      var format = '';
      if (this.hasStep('y')) format = 'YYYY';
      if (this.hasStep('m')) format += ' MMMM ';

      if (this.hasStep('d')) {
        format = this.isDataArray ? 'D MMMM YYYY' : 'ddd D MMMM';
      }

      if (this.hasStep('t')) format += ' HH:mm ';
      if (!format) return '';
      var separator = this.multiple ? ' | ' : ' ~ ';
      return this.selectedDates.map(function (d) {
        return d.format(format);
      }).join(separator);
    },
    month: function month() {
      var _this = this;

      if (!this.hasStep('d')) return [];
      var min = this.minDate ? this.minDate.clone().startOf('day') : -Infinity;
      var max = this.maxDate ? this.maxDate.clone().endOf('day') : Infinity;
      return this.core.getWeekArray(this.date.clone()).map(function (weekItem) {
        return weekItem.map(function (day) {
          var data = {
            date: day,
            formatted: '',
            selected: false,
            disabled: false,
            attributes: {}
          };
          if (!day) return data;

          var dayMoment = _this.core.dayjs(day);

          data.formatted = dayMoment.date();
          data.selected = _this.selectedDates.find(function (item) {
            return utils_isSameDay(item, day);
          });
          data.disabled = _this.minDate && dayMoment.clone().startOf('day') < min || _this.maxDate && dayMoment.clone().endOf('day') > max || _this.checkDisable('d', dayMoment);

          if (_this.range && !data.disabled) {
            var _this$selectedDates = _slicedToArray(_this.selectedDates, 2),
                start = _this$selectedDates[0],
                end = _this$selectedDates[1];

            data.isFirst = data.selected && start && utils_isSameDay(start, day);
            data.isLast = data.selected && end && utils_isSameDay(end, day);
            data.isBetween = !data.selected && start && end && day > start && day < end;
          }

          data.attributes = _this.getHighlights('d', dayMoment);
          return data;
        });
      });
    },
    monthDays: function monthDays() {
      var _this2 = this;

      if (!this.range || this.selectedDates.length !== 1 || !this.hoveredItem) return this.month;
      var dates = [this.hoveredItem, this.selectedDates[0]];
      dates.sort(function (a, b) {
        return a - b;
      });
      var start = dates[0],
          end = dates[1];
      return this.month.map(function (weekItem) {
        return weekItem.map(function (data) {
          if (!data.date) return data;

          if (_this2.range && !data.disabled) {
            var day = data.date;
            data.isHover = !data.selected && day > start && day < end;
          }

          return data;
        });
      });
    },
    years: function years() {
      var _this3 = this;

      var isYearSectionVisible = this.currentStep === 'y' || this.simple;
      if (!this.hasStep('y') || !isYearSectionVisible) return [];
      var dayjs = this.core.dayjs;
      var min = this.minDate ? this.minDate : dayjs('1922', 'YYYY'); // 1300

      var max = this.maxDate ? this.maxDate : min.clone().add(150, 'year');
      var cy = this.date.year();
      return this.core.getYearsList(min.year(), max.year()).reverse().map(function (item) {
        var year = dayjs().year(item);
        year.selected = cy === item;
        year.disabled = _this3.checkDisable('y', item);
        year.attributes = _this3.getHighlights('y', item);
        return year;
      });
    },
    months: function months() {
      var _this4 = this;

      if (this.hasStep('m')) {
        var date = this.date.clone().startOf('month');
        var months = this.core.getMonthsList(this.minDate, this.maxDate, date);
        months.forEach(function (m) {
          m.selected = _this4.date.month() === m.month();
          m.disabled = m.disabled || _this4.checkDisable('m', m);
          m.attributes = _this4.getHighlights('m', m);
        });
        return months;
      }

      return [];
    },
    prevMonthDisabled: function prevMonthDisabled() {
      return this.hasStep('d') && this.minDate && this.minDate.clone().startOf('month') >= this.date.clone().startOf('month');
    },
    nextMonthDisabled: function nextMonthDisabled() {
      return this.hasStep('d') && this.maxDate && this.maxDate.clone().startOf('month') <= this.date.clone().startOf('month');
    },
    canGoToday: function canGoToday() {
      if (!this.minDate && !this.maxDate) return true;
      var now = this.now,
          min = this.minDate && this.minDate <= now,
          max = this.maxDate && now <= this.maxDate;

      if (this.type === 'time') {
        if (this.minDate) {
          min = now.clone().hour(this.minDate.hour()).minute(this.minDate.minute());
          min = min <= now;
        }

        if (this.maxDate) {
          max = this.now.clone().hour(this.maxDate.hour()).minute(this.maxDate.minute());
          max = now <= max;
        }
      }

      if (this.minDate && this.maxDate) return min && max;
      if (this.minDate) return min;
      if (this.maxDate) return max;
      return false;
    },
    altFormatted: function altFormatted() {
      var format = this.altFormat;

      if (format === '' || format === undefined) {
        switch (this.type) {
          case 'time':
            format = 'HH:mm:ss [GMT]ZZ';
            break;

          case 'datetime':
            format = 'YYYY-MM-DD HH:mm:ss [GMT]ZZ';
            break;

          case 'date':
            format = 'YYYY-MM-DD';
            break;

          case 'year':
            format = 'YYYY';
            break;

          case 'month':
            format = 'MM';
            break;

          case 'year-month':
            format = 'YYYY-MM';
            break;
        }
      }

      return this.output.map(function (d) {
        return d.format(format);
      }).join(' ~ ');
    },
    selfFormat: function selfFormat() {
      var format = this.format;

      if (['', undefined, 'date'].indexOf(format) !== -1) {
        switch (this.type) {
          case 'time':
            format = 'HH:mm';
            break;

          case 'datetime':
            format = 'YYYY/MM/DD HH:mm';
            break;

          case 'date':
            format = 'YYYY/MM/DD';
            break;

          case 'year':
            format = 'YYYY';
            break;

          case 'month':
            format = 'MM';
            break;

          case 'year-month':
            format = 'YYYY/MM';
            break;
        }
      }

      return format;
    },
    selfInputFormat: function selfInputFormat() {
      return this.inputFormat === '' || this.inputFormat === undefined ? this.selfFormat : this.inputFormat;
    },
    outputValue: function outputValue() {
      var _this5 = this;

      var output = cloneDates(this.output);
      var format = this.selfFormat;
      var isDate = this.modelValue instanceof Date || this.format === 'date';
      return output.map(function (item) {
        if (!_this5.isJalali) {
          item = item.locale('en').calendar('gregorian');
        }

        _this5.setTimezone(item, 'out');

        return isDate ? item.toDate() : item.format(format);
      });
    },
    selfDisplayFormat: function selfDisplayFormat() {
      var format = this.displayFormat || this.selfFormat;
      var localeFormat = this.localeData.config.displayFormat;

      if (localeFormat) {
        return typeof localeFormat === 'function' ? localeFormat(this) : localeFormat;
      }

      return format;
    },
    displayValue: function displayValue() {
      var _this6 = this;

      var format = this.selfDisplayFormat;
      return this.output.map(function (item) {
        var output = item.clone();
        return _this6.convertToLocaleNumber(output.format(format));
      }).join(' ~ ');
    },
    isDisableTime: function isDisableTime() {
      return this.hasStep('t') && this.checkDisable('t', this.time);
    },
    canSubmit: function canSubmit() {
      if (!this.disable) return true;
      var can = true;
      if (this.hasStep('t')) can = !this.isDisableTime;
      if (can && this.type !== 'time') can = !this.checkDisable('d', this.date);
      return can;
    },
    weekDays: function weekDays() {
      var names = JSON.parse(JSON.stringify(this.core.dayjs().localeData().weekdaysMin()));
      var dow = this.core.locale.config.dow;

      while (dow > 0) {
        names.push(names.shift());
        dow--;
      }

      return names;
    },
    lang: function lang() {
      return this.localeData.config.lang;
    },
    isPopover: function isPopover() {
      return (this.popover === '' || this.popover) && this.windowWidth > 480;
    },
    isDataArray: function isDataArray() {
      return this.range || this.multiple;
    },
    isCompactTime: function isCompactTime() {
      return this.compactTime || this.type === 'datetime' && this.simple;
    },
    customInputElement: function customInputElement() {
      if (this.element) return "#".concat(this.element);
      return this.customInput;
    }
  },
  watch: {
    type: {
      handler: 'setType',
      immediate: true
    },
    view: {
      handler: 'setView',
      immediate: true
    },
    modelValue: {
      handler: 'updateDates',
      immediate: true
    },
    min: {
      handler: 'setMinMax',
      immediate: true
    },
    max: {
      handler: 'setMinMax',
      immediate: true
    },
    timezone: {
      handler: 'updateDates'
    },
    inline: {
      handler: function handler(val) {
        if (!this.disabled) this.visible = !!val;
      },
      immediate: true
    },
    disabled: {
      handler: function handler(val) {
        if (val) this.visible = false;else if (this.inline) this.visible = true;
      },
      immediate: true
    },
    selectedDate: function selectedDate(val, old) {
      this.setDirection('directionClass', val, old);
    },
    date: function date(val, old) {
      this.setDirection('directionClassDate', val, old);
      if (this.isLower(this.date)) this.date = this.minDate.clone();
      if (this.isMore(this.date)) this.date = this.maxDate.clone();
    },
    visible: function visible(val) {
      var _this7 = this;

      if (val) {
        if (this.disabled) return this.visible = false;
        if (this.type === 'datetime' && this.view === 'day') this.goStep('d');
        if (this.view !== 'day') this.goStep(this.shortCodes[this.view] || 'd');
        this.$nextTick(function () {
          if (_this7.appendTo) {
            try {
              var container = document.querySelector(_this7.appendTo);
              container.appendChild(_this7.$refs.picker);
            } catch (er) {
              // eslint-disable-next-line
              console.warn("Cannot append picker to \"".concat(_this7.appendTo, "\"!"));
            }
          }
        });
        this.checkScroll();
        this.setPlacement();
        this.$emit('open', this);
      } else {
        if (this.inline && !this.disabled) return this.visible = true;
        this.$emit('close', this);
      }
    },
    show: function show(val) {
      this.visible = val;
    },
    locale: {
      immediate: true,
      handler: function handler(val) {
        var locales = val.toString().split(',');
        this.locales = locales.length ? locales : ['fa'];
        if (this.core.locale.name !== this.locales[0]) this.setLocale(this.locales[0]);
      }
    },
    localeConfig: {
      deep: true,
      immediate: true,
      handler: function handler(config) {
        this.core.setLocalesConfig(config);
        this.setLocale(this.localeData.name);
      }
    },
    'localeData.name': function localeDataName() {
      this.$emit('locale-change', this.localeData);
      this.setMinMax();
    },
    displayValue: {
      immediate: true,
      handler: function handler(displayValue) {
        if (!this.customInput) return;
        var customInput = document.querySelector(this.customInput);
        if (customInput) customInput.value = displayValue;
      }
    }
  },
  created: function created() {
    var _this8 = this;

    this.updateNowInterval = setInterval(function () {
      _this8.now = _this8.core.dayjs();
    }, 1000);
  },
  mounted: function mounted() {
    var _this9 = this;

    this.$nextTick(function () {
      if (_this9.customInputElement && !_this9.editable) addLiveEvent(_this9.customInputElement, 'click', _this9.focus);
      if (_this9.customInput && _this9.editable) addLiveEvent(_this9.customInput, 'blur', _this9.setOutput);
    });
    document.body.addEventListener('keydown', function (e) {
      e = e || event;
      var code = e.keyCode;
      if ((code === 9 || code === 27) && _this9.visible) _this9.visible = false;
    });
    window.addEventListener('resize', this.onWindowResize, true);
    window.addEventListener('mousedown', this.onWindowClick, true);
  },
  onBeforeUnmount: function onBeforeUnmount() {
    window.clearInterval(this.updateNowInterval);
    window.removeEventListener('resize', this.onWindowResize, true);
    window.removeEventListener('mousedown', this.onWindowClick, true);
    var picker = this.$refs.picker;

    if (this.appendTo && picker && picker.$el && picker.$el.parentNode) {
      picker.$el.parentNode.removeChild(picker.$el);
    }
  },
  methods: {
    nextStep: function nextStep(fromStep) {
      var _this10 = this;

      var checkAndSubmit = function checkAndSubmit() {
        var minLengthToSubmit = _this10.range ? 2 : _this10.multiple ? 0 : 1;
        var passSelected = _this10.selectedDates.length >= minLengthToSubmit;

        if ((_this10.autoSubmit || _this10.inline) && passSelected) {
          _this10.submit(!_this10.multiple);
        }
      };

      if (this.simple) {
        if (this.type === 'date' && fromStep === 'day' || this.type === 'year-month' && fromStep === 'month' || this.type === 'year' || this.type === 'month') checkAndSubmit();
        return;
      }

      var step = this.step + 1;
      if (this.isCompactTime && this.type === 'datetime') step += 1;

      if (this.steps.length <= step) {
        checkAndSubmit();
      } else {
        this.step++;
        this.goStep(this.step);
      }
    },
    goStep: function goStep(i) {
      this.step = typeof i === 'number' ? i : this.steps.indexOf(i);
      this.checkScroll();
    },
    checkScroll: function checkScroll() {
      var _this11 = this;

      var step = this.currentStep;

      if (step === 'y' || step === 'm' && this.visible) {
        setTimeout(function () {
          var container = _this11.$refs[{
            y: 'year',
            m: 'month'
          }[step]];

          if (container) {
            var selected = container.querySelector('.vpd-selected');

            if (selected && 'scrollIntoView' in selected) {
              try {
                selected.scrollIntoView({
                  block: 'center'
                });
              } catch (er) {
                selected.scrollIntoView();
              }
            }
          }
        }, 100);
      }
    },
    nextMonth: function nextMonth() {
      this.date = this.date.clone().add(1, 'month');
      this.$emit('next-month', this.date.clone());
    },
    prevMonth: function prevMonth() {
      this.date = this.date.clone().add(-1, 'month');
      this.$emit('prev-month', this.date.clone());
    },
    selectDay: function selectDay(day) {
      if (!day.date || day.disabled) return;
      var date = this.core.dayjs(day.date);
      date = date.set('hour', this.time.hour()).set('minute', this.time.minute()).set('second', 0);
      this.date = date.clone();
      this.time = date.clone();

      if (this.range) {
        var length = this.selectedDates.length;

        if (!length || length > 1) {
          this.selectedDates = [date.clone()];
        } else {
          this.selectedDates.push(date.clone());
          this.selectedDates.sort(function (a, b) {
            return a - b;
          });
        }
      } else if (this.multiple) {
        var exists = this.selectedDates.findIndex(function (d) {
          return d.valueOf() === date.valueOf();
        });

        if (exists > -1) {
          this.selectedDates.splice(exists, 1);
        } else {
          this.selectedDates.push(date.clone());
        }
      } else {
        this.selectedDates = [date.clone()];
      }

      this.nextStep('day');
    },
    selectYear: function selectYear(year) {
      if (year.disabled) return;
      this.date = this.date.clone().year(year.year());
      if (['year', 'year-month'].indexOf(this.type) !== -1) this.selectedDates = [this.date.clone()];
      this.$emit('year-change', year);
      this.nextStep('year');
    },
    selectMonth: function selectMonth(month) {
      if (month.disabled) return;
      this.date = this.date.clone().month(month.month());
      if (['month', 'year-month'].indexOf(this.type) !== -1) this.selectedDates = [this.date.clone()];
      this.$emit('month-change', month);
      this.nextStep('month');
    },
    submit: function submit() {
      var _this12 = this;

      var close = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var steps = this.steps.length - 1;
      var selected = this.selectedDates;
      if (this.isCompactTime && this.type === 'datetime') steps -= 1;
      if (this.step < steps && !this.simple) return this.nextStep();

      if (this.hasStep('t')) {
        this.date = this.date.set('hour', this.time.hour()).set('minute', this.time.minute()).clone();
        selected = selected.map(function (d) {
          return d.set('hour', _this12.time.hour()).set('minute', _this12.time.minute()).clone();
        });
        this.selectedDates = selected;
      }

      if (['year', 'month', 'year-month'].indexOf(this.type) !== -1) this.selectedDates = selected.map(function () {
        return _this12.date.clone();
      });

      if (this.range && selected.length > 1) {
        selected[0] = selected[0].startOf('day');
        selected[1] = selected[1].endOf('day');
      }

      this.output = cloneDates(selected);
      if (close) this.visible = false;

      if (this.isDataArray) {
        this.$emit('update:modelValue', this.outputValue);
        this.$emit('change', cloneDates(selected));
      } else {
        this.$emit('update:modelValue', this.outputValue[0]);
        this.$emit('change', selected[0].clone());
      }
    },
    updateDates: function updateDates(payload) {
      var _this13 = this;

      if (!payload) payload = this.isDataArray ? [] : ''; // fix: don't update dates if they are already up to date

      if (this.date.clone && payload.toString() === this.outputValue.toString()) return;
      var payloadIsArray = payload instanceof Array;

      var getDate = function getDate(input) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var date;
        var startValue = _this13.modelValue instanceof Array ? _this13.modelValue[index] : _this13.modelValue;

        try {
          var isObject = Vue3PersianDatetimePickervue_type_script_lang_js_typeof(input) === 'object';

          if (input instanceof Date) {
            date = _this13.getMoment(input);
          } else if (input && isObject && 'clone' in input) {
            date = input.clone();
          } else if (null === input || !isObject) {
            date = _this13.getMoment(input || startValue || _this13.initialValue);
          }

          date = date.isValid() ? date : _this13.core.dayjs();
        } catch (e) {
          date = _this13.core.dayjs();
        }

        _this13.setTimezone(date, 'in');

        return date;
      };

      if (payloadIsArray) {
        this.date = getDate(payload[0]);
        this.selectedDates = payload.map(getDate);
      } else {
        this.date = getDate(payload);
      }

      if (!this.hasStep('t')) {
        this.date = this.date.set('hour', 0).set('minute', 0).set('second', 0);
      }

      if (this.isLower(this.date)) {
        this.date = this.minDate.clone();
      } else if (this.isMore(this.date)) {
        this.date = this.maxDate.clone();
      }

      if (!payloadIsArray) this.selectedDates = [this.date.clone()];
      this.time = this.date.clone();

      if (this.modelValue !== '' && this.modelValue !== null && this.modelValue.length) {
        this.output = cloneDates(this.selectedDates);
      } else {
        this.output = [];
      }
    },
    goToday: function goToday() {
      var now = this.core.dayjs();

      if (!this.hasStep('t')) {
        now = now.set('hour', 0).set('minute', 0).set('second', 0);
      }

      this.date = now.clone();
      this.time = now.clone();
      this.selectedDates = [now.clone()];
    },
    setType: function setType() {
      switch (this.type) {
        case 'date':
          this.steps = ['y', 'm', 'd'];
          this.goStep('d');
          break;

        case 'datetime':
          this.steps = ['y', 'm', 'd', 't'];
          this.goStep('d');
          break;

        case 'year':
          this.steps = ['y'];
          this.goStep('y');
          break;

        case 'month':
          this.steps = ['m'];
          this.goStep('m');
          break;

        case 'time':
          this.steps = ['t'];
          this.goStep('t');
          break;

        case 'year-month':
          this.steps = ['y', 'm'];
          this.goStep('y');
          break;
      }
    },
    setView: function setView() {
      var s = this.shortCodes[this.view];
      if (this.hasStep(s)) this.goStep(s);
    },
    setDirection: function setDirection(prop, val, old) {
      this[prop] = val > old ? 'direction-next' : 'direction-prev';
    },
    setMinMax: function setMinMax() {
      var min = this.getMoment(this.min),
          max = this.getMoment(this.max);
      this.minDate = this.min && min.isValid() ? min : false;
      this.maxDate = this.max && max.isValid() ? max : false;
    },
    getMoment: function getMoment(date) {
      var d,
          dayjs = this.core.dayjs;
      if (date instanceof Date) return dayjs(date);

      if (this.selfInputFormat === 'x' || this.selfInputFormat === 'unix') {
        d = dayjs(date.toString().length === 10 ? date * 1000 : date * 1);
      } else {
        try {
          if (date) {
            var a = dayjs(date, this.selfInputFormat);
            var b = dayjs(date, this.selfFormat);
            var now = dayjs(),
                year = now.year();

            if (this.type === 'month') {
              a.year(year);
              b.year(year);
            } else if (this.type === 'time') {
              a = now.clone().set('h', a.hour()).set('m', a.minute()).set('s', 0);
              b = a.clone();
            }

            if (a.year() !== b.year() && a.year() < 1900) {
              d = b.clone();
            } else {
              d = a.clone();
            }
          } else {
            d = dayjs();
          }
        } catch (er) {
          d = dayjs();
        }
      }

      return d;
    },
    focus: function focus(e) {
      if (this.editable) {
        if (this.$refs.input) this.$refs.input.focus();
      } else {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
          e.target.blur();
          this.visible = !this.visible;
        } else {
          this.visible = true;
        }

        return false;
      }
    },
    hasStep: function hasStep(step) {
      return this.steps.indexOf(step) !== -1;
    },
    setOutput: function setOutput(e) {
      var _this14 = this;

      if (!this.editable) return;
      var value = e.target.value.split('~');
      var output = value.map(function (item) {
        item = "".concat(item).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        if (item === '') return null;

        try {
          var date = _this14.core.dayjs(item, _this14.selfDisplayFormat);

          return date.isValid() ? date : null;
        } catch (er) {
          return null;
        }
      });
      this.output = output.filter(function (d) {
        return d;
      });
      this.output.sort(function (a, b) {
        return a - b;
      });

      if (this.output.length) {
        this.updateDates(cloneDates(this.output));
        this.submit();
      } else {
        this.$emit('update:modelValue', this.isDataArray ? [] : null);
        this.$emit('change', this.isDataArray ? [] : null);
      }
    },
    wrapperClick: function wrapperClick() {
      this.visible = false;

      if (this.wrapperSubmit && this.canSubmit) {
        this.submit();
      }
    },
    applyDevFn: function applyDevFn(fn, k) {
      var result = false;
      var args = Array.prototype.splice.call(arguments, 2);

      try {
        args.push({
          y: 'year',
          m: 'month',
          d: 'day',
          t: 'time'
        }[k]);
        result = fn.apply(null, args);
      } catch (er) {
        // eslint-disable-next-line
        console.error(er);
      }

      return result;
    },
    checkDisable: function checkDisable(item, value) {
      var _this15 = this;

      var thisDisable = this.disable;
      if (!thisDisable) return false;

      var type = Vue3PersianDatetimePickervue_type_script_lang_js_typeof(thisDisable);

      var checkString = function checkString(filter, str, date) {
        if (filter instanceof RegExp) return filter.test(str);
        if (filter === str) return true;

        if (item === 'd') {
          var length = filter.length;
          return str.substr(0, length) === filter || date.clone().locale('en').format('dddd') === filter;
        }

        return false;
      };

      var check = function check(date, dateFormatted) {
        var matches = false;

        if (type === 'function') {
          return _this15.applyDevFn(thisDisable, item, dateFormatted, date.clone());
        } else if (Object.prototype.toString.call(thisDisable) === '[object Array]') {
          var ii = thisDisable.length;

          for (var i = 0; i < ii; i++) {
            matches = checkString(thisDisable[i], dateFormatted, date);
            if (matches) break;
          }

          return matches;
        } else if (type === 'string' || thisDisable instanceof RegExp) {
          return checkString(thisDisable, dateFormatted, date);
        }

        return false;
      };

      var format = this.selfFormat;

      if (item === 'y') {
        value = this.core.dayjs(value, 'YYYY');
      } else if (item === 'd') {
        // remove time from format
        format = format.replace(/(H(H?))|(h(h?))?(:?)m(m?)(:?)(s(s?))?/g, '');
      }

      return check(value, value.format(format));
    },
    getHighlights: function getHighlights(item, value) {
      var highlight = this.highlight;
      if (!highlight || typeof highlight !== 'function') return {};
      if (item === 'y') value = this.core.dayjs(value, 'YYYY');
      return this.applyDevFn(highlight, item, value.format(this.selfFormat), value.clone()) || {};
    },
    isLower: function isLower(date) {
      return this.minDate && date < this.minDate;
    },
    isMore: function isMore(date) {
      return this.maxDate && date > this.maxDate;
    },
    clearValue: function clearValue() {
      if (this.disabled) return;
      this.output = [];
      this.$emit('update:modelValue', this.isDataArray ? [] : '');
      this.$emit('change', this.isDataArray ? [] : null);
    },
    setLocale: function setLocale(locale) {
      var _this16 = this;

      this.core.changeLocale(locale, this.localeConfig);
      this.date = this.core.dayjs(this.date);
      this.selectedDates = this.selectedDates.map(function (d) {
        return _this16.core.dayjs(d);
      });
    },
    setTimezone: function setTimezone(date, mode) {
      var tz = this.timezone;

      if (tz) {
        var r = mode === 'in' ? 1 : -1;
        var dayjs = this.core.dayjsBase;

        if (typeof tz === 'string') {
          var t = dayjs().utc().format('YYYY-MM-DDTHH:mm:ss') + tz;
          date = date.add(dayjs.parseZone(t).utcOffset() * r, 'minutes');
        } else if (typeof tz === 'boolean' && tz) {
          date = date.subtract(new Date(date).getTimezoneOffset() * r, 'minutes');
        } else if (typeof tz === 'function') {
          date = tz(date, mode, this);
        }
      }

      return date.clone();
    },
    convertToLocaleNumber: function convertToLocaleNumber(value) {
      if (this.convertNumbers && this.locale === 'fa') {
        return "".concat(value).replace(/\d+/g, function (digit) {
          var ret = '';

          for (var i = 0, len = digit.length; i < len; i++) {
            ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
          }

          return ret;
        });
      }

      return value;
    },
    onWindowResize: function onWindowResize() {
      this.windowWidth = window.innerWidth;
    },
    onWindowClick: function onWindowClick(event) {
      var _this17 = this;

      if (this.isPopover && this.$refs.picker && this.$refs.inputGroup) {
        var isOnPicker = this.$refs.picker.contains(event.target);
        var isOnInput = this.$refs.inputGroup.contains(event.target);
        if (isOnPicker) event.preventDefault();

        if (!isOnPicker && !isOnInput) {
          // setTimeout because:
          // first read the input value
          // then process the output
          // then close the picker
          setTimeout(function () {
            return _this17.visible = false;
          }, this.editable ? 500 : 0);
        }
      }
    },
    setPlacement: function setPlacement() {
      var _this18 = this;

      if (!this.isPopover) return;
      var allowed = ['top-left', 'top-right', 'bottom-right', 'bottom-left', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
      if (allowed.indexOf(this.popover) !== -1) return this.popoverPlace = this.popover;
      this.popoverPlace = 'bottom-right';
      this.$nextTick(function () {
        var placement = ['bottom', 'right'];
        var container = _this18.$refs.container;
        var rect = container.getBoundingClientRect();
        var left = rect.left;
        var bottom = window.innerHeight - rect.bottom;
        if (bottom <= 0) placement[0] = 'top';
        if (left <= 0) placement[1] = 'left';
        _this18.popoverPlace = placement.join('-');
      });
    }
  },
  install: function install(Vue, options) {
    var component = this;
    options = extend({
      name: 'data-picker',
      props: {}
    }, options);

    for (var k in options.props) {
      if (component.props.hasOwnProperty(k)) {
        component.props[k].default = options.props[k];
      }
    }

    Vue.component(options.name, component);
  }
});
// CONCATENATED MODULE: ./src/picker/Vue3PersianDatetimePicker.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/picker/Vue3PersianDatetimePicker.vue





const Vue3PersianDatetimePicker_exports_ = /*#__PURE__*/exportHelper_default()(Vue3PersianDatetimePickervue_type_script_lang_js, [['render',render]])

/* harmony default export */ var Vue3PersianDatetimePicker = (Vue3PersianDatetimePicker_exports_);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Vue3PersianDatetimePicker);



/***/ })

/******/ })["default"];
});