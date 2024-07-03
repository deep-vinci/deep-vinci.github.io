/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n}\r\nbody {\r\n    background-color: rgb(13, 17, 23);\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Noto Sans\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\r\n}\r\n\r\n\r\n.search-container {\r\n    /* width: 100vw; */\r\n    height: 20vh;\r\n}\r\n.repository-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.repositories {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 95vw;\r\n}\r\n\r\n.repository {\r\n    /* width: min(300px, 100%); */\r\n    width: 300px;\r\n    height: 100px;\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n    /* background-color: yellow; */\r\n    border: rgb(48, 54, 61) 0.6px solid;\r\n    margin: 10px;\r\n    border-radius: 6px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.info {\r\n    display: flex;\r\n    gap: 8px;\r\n    padding: 0;\r\n    align-items: flex-end;\r\n}\r\n\r\n.svg-div {\r\n    display: inline-flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n.repository .repository-name {\r\n    font-size: 18px;\r\n    font-weight: 600px;\r\n    color: rgb(68, 147, 248);\r\n}\r\n\r\n.public {\r\n    border: rgb(48, 54, 61) 0.6px solid;\r\n    color: rgb(141, 150, 160);\r\n    padding: 3px 5px;\r\n    font-size: 12px;\r\n    border-radius: 50px;\r\n    font-weight: 600;\r\n}\r\n\r\na:link {\r\n    color: rgb(68, 147, 248);\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n}\r\n\r\na:visited {\r\n    color: rgb(68, 147, 248);\r\n}\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.info-2 {\r\n    color: rgb(141, 150, 160);\r\n    margin-top: auto;\r\n    display: flex;\r\n    gap: 25px;\r\n    font-size: 14px;\r\n}\r\n\r\n.info-2 a {\r\n    display: inline-flex;\r\n    /* justify-content: baseline; */\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n.info-2 a:link {\r\n    color: rgb(141, 150, 160);\r\n}\r\n\r\n.info-2 a:hover {\r\n    color: rgb(68, 147, 248);\r\n    fill :rgb(68, 147, 248);\r\n}\r\n\r\n\r\n.language-stats {\r\n    display: flex;\r\n    /* justify-content: flex-start; */\r\n    gap: 5px;\r\n    align-items: baseline;\r\n}\r\n\r\n.language-color {\r\n    /* background-color: #f1e05a; */\r\n    width: 12px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    height: 12px;\r\n}\r\n\r\n.search-container {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.input-search {\r\n    width: 95vw;\r\n    height: 15vh;\r\n    background-color: transparent;\r\n    border: none;\r\n    color: rgb(141, 150, 160);\r\n    font-size: 3rem;\r\n    outline: none;\r\n    padding: 10px;\r\n}\r\n\r\n.your-repo-container {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.your-repo {\r\n    width: 95vw;\r\n    padding: 10px;\r\n    display: flex;\r\n    gap: 10px;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.see-your-acc {\r\n    background-color: rgb(35, 134, 54);\r\n    border: 0.8px solid rgba(240, 246, 252, 0.1);\r\n    box-shadow: rgba(1, 4, 9, 0.4) 0px 1px 0px 0px;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    padding: 8px 12px;\r\n    font-size: 14px;\r\n    color: white;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Noto Sans\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"    ;\r\n}\r\n  \r\n.your-repo p {\r\n    color: rgb(141, 150, 160);\r\n    margin: 0;\r\n}\r\n\r\n.input-box {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    border-radius: 6px;\r\n    font-size: 14px;\r\n    border: rgb(48, 54, 61) 0.6px solid;\r\n}\r\n\r\n.your-repo input {\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    padding: 3px 0px 0px 5px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .input-box p {\r\n        display: none;\r\n    }\r\n\r\n    .input-box {\r\n        width: 100%;\r\n    }\r\n    .see-your-acc {\r\n        font-size: 12px; /* Reduce font size further for smaller screens */\r\n    }\r\n}\r\n\r\n.user-image-container {\r\n    /* width: 100vw; */\r\n    /* position: absolute; */\r\n}\r\n\r\n.user-image {\r\n    cursor: pointer;\r\n    background-repeat: no-repeat;\r\n    background-size: 50px;\r\n    position: fixed;\r\n    top:0;\r\n    right: 0;\r\n    margin: 20px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-color: rgb(48, 54, 61);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://deep-vinci.github.io/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://deep-vinci.github.io/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://deep-vinci.github.io/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://deep-vinci.github.io/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://deep-vinci.github.io/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://deep-vinci.github.io/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://deep-vinci.github.io/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://deep-vinci.github.io/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://deep-vinci.github.io/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://deep-vinci.github.io/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/component/createRepoDiv.js":
/*!****************************************!*\
  !*** ./src/component/createRepoDiv.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRepoDiv: () => (/* binding */ createRepoDiv)\n/* harmony export */ });\nconst repositoryContainer = document.querySelector(\".repositories\");\r\n\r\nconst createRepoDiv = (repository) => {\r\n\r\n    const languageColors = {\r\n        javascript: \"#f1e05a\",\r\n        html: \"#e34c26\",\r\n        css: \"#563d7c\",\r\n        markdown: \"#083fa1\",\r\n    }\r\n\r\n\r\n    const SVG = {\r\n        repositoryIcon: `<svg fill=\"rgb(141, 150, 160)\" aria-hidden=\"true\" height=\"18\" viewBox=\"0 0 18 18\" version=\"1.1\"\r\nwidth=\"18\" data-view-component=\"true\" class=\"octicon octicon-repo mr-1 color-fg-muted\">\r\n<path\r\nd=\"M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z\">\r\n</path>\r\n</svg>`,\r\n        starGazersIcon: `<svg fill=\"rgb(141, 150, 160)\" aria-label=\"stars\" role=\"img\" height=\"18\" viewBox=\"0 0 15 15\" version=\"1.1\" width=\"18\"\r\ndata-view-component=\"true\" class=\"octicon octicon-star\">\r\n<path\r\nd=\"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z\">\r\n</path>\r\n</svg>`\r\n    }\r\n\r\n    const repoName = repository.name;\r\n    const language = repository.language;\r\n    const starGazersCount = repository.stargazers_count;\r\n    const publicText = \"public\"\r\n\r\n    let repositoryDiv = document.createElement(\"div\");\r\n    let infoDiv = document.createElement(\"div\");\r\n    let svgDiv = document.createElement(\"div\");\r\n    let repositoryNameDiv = document.createElement(\"div\");\r\n    let linkOfRepo = document.createElement(\"a\");\r\n    let publicDiv = document.createElement(\"div\");\r\n\r\n    let info2Div = document.createElement(\"p\");\r\n    let languageStatsSpan = document.createElement(\"span\");\r\n    let languageColorSpan = document.createElement(\"span\");\r\n    let languageSpan = document.createElement(\"span\");\r\n    let starGazers = document.createElement(\"a\");\r\n\r\n    // adding necessary classes to element\r\n\r\n    repositoryDiv.classList.add(\"repository\");\r\n    infoDiv.classList.add(\"info\");\r\n    svgDiv.classList.add(\"svg-div\");\r\n    repositoryNameDiv.classList.add(\"repository-name\");\r\n    publicDiv.classList.add(\"public\");\r\n\r\n    info2Div.classList.add(\"info-2\");\r\n    languageStatsSpan.classList.add(\"language-stats\");\r\n    languageColorSpan.classList.add(\"language-color\");\r\n    languageSpan.classList.add(\"language\");\r\n    starGazers.classList.add(\"stargazers\");\r\n\r\n    // adding the necessary attr to element\r\n\r\n    let repoA = document.querySelector(\".repository-name\")\r\n    linkOfRepo.textContent = repoName;\r\n    linkOfRepo.href = repository.svn_url;\r\n    linkOfRepo.setAttribute('target', '_blank');\r\n    svgDiv.innerHTML = SVG.repositoryIcon;\r\n    publicDiv.textContent = publicText;\r\n\r\n    languageSpan.textContent = language == null ? \"no lang\" : language;\r\n    languageColorSpan.style.backgroundColor = languageColors[language === null ? null : language.toLowerCase()] == null ? \"gray\" : languageColors[language === null ? null : language.toLowerCase()];\r\n    starGazers.innerHTML = starGazersCount == 0 ? \"\" : SVG.starGazersIcon + starGazersCount;\r\n\r\n    // appending the nodes\r\n\r\n    repositoryContainer.appendChild(repositoryDiv);\r\n    repositoryDiv.appendChild(infoDiv);\r\n    infoDiv.appendChild(svgDiv);\r\n    infoDiv.appendChild(repositoryNameDiv);\r\n    repositoryNameDiv.appendChild(linkOfRepo);\r\n    infoDiv.appendChild(publicDiv);\r\n\r\n    repositoryDiv.appendChild(info2Div);\r\n    info2Div.appendChild(languageStatsSpan);\r\n    languageStatsSpan.appendChild(languageColorSpan);\r\n    languageStatsSpan.appendChild(languageSpan);\r\n    info2Div.appendChild(starGazers);\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://deep-vinci.github.io/./src/component/createRepoDiv.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _component_createRepoDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/createRepoDiv.js */ \"./src/component/createRepoDiv.js\");\n\r\n\r\n\r\n\r\nconst me = \"deep-vinci\";\r\nconst searchInput = document.querySelector(\"#search\");\r\n\r\nlet globalRepoData = \"\";\r\nlet seeYourAcc = document.querySelector(\".see-your-acc\");\r\nlet userSearch = document.querySelector(\".user-search\");\r\nlet userImage = document.querySelector(\".user-image\");\r\n\r\nconst getRepoData = async (user) => {\r\n    let response = await fetch(`https://api.github.com/users/${user}/repos`);\r\n    // let response = await fetch(\"https://api.github.com/users/Experience-Monks/repos\");\r\n    globalRepoData = await response.json()\r\n\r\n    return globalRepoData\r\n}\r\n\r\nconst clearRepositoriesContainer = () => {\r\n    let repoDivs = document.querySelectorAll(\".repository\");\r\n\r\n    repoDivs.forEach(elem => {\r\n        elem.remove();\r\n    })\r\n\r\n}\r\n\r\nconst printRepoData = async (data) => {\r\n    clearRepositoriesContainer();\r\n    \r\n    console.log(data[0].owner.avatar_url)\r\n    // userImage.style.background = data[0].owner.avatar_url;\r\n    // userImage.style.background = \"blue\"\r\n    userImage.style.backgroundImage = `url(${data[0].owner.avatar_url})`;\r\n    data.forEach(repository => {\r\n        (0,_component_createRepoDiv_js__WEBPACK_IMPORTED_MODULE_1__.createRepoDiv)(repository)\r\n    });\r\n}\r\n\r\nuserImage.addEventListener(\"click\", () => {\r\n    // console.log(data[0])\r\n    \r\n    window.open(`https://github.com/${globalRepoData[0].owner.login}`)\r\n})\r\n\r\nlet searchRepoData = async (searchTerm, globalRepoData) => {\r\n    let searchTermRegex = new RegExp(`${searchTerm}`, 'i'); // Creating RegExp dynamically\r\n    const searchedRepoOutput = globalRepoData.filter(repo => searchTermRegex.test(repo.name))\r\n\r\n    return searchedRepoOutput\r\n}\r\n\r\nseeYourAcc.addEventListener(\"click\", async () => {\r\n    if (userSearch.value.trim() !== \"\") {\r\n        await getRepoData(userSearch.value);\r\n        printRepoData(await searchRepoData(\"\", globalRepoData))\r\n    }\r\n})\r\n\r\nsearchInput.addEventListener('input', async (e) => {\r\n    printRepoData(await searchRepoData(e.target.value, globalRepoData))\r\n});\r\n\r\ndocument.addEventListener(\"readystatechange\", async () => {\r\n    await getRepoData(me);\r\n    printRepoData(await searchRepoData(\"\", globalRepoData))\r\n});\r\n\n\n//# sourceURL=webpack://deep-vinci.github.io/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;