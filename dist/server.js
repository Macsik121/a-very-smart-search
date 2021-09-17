/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* @flow */\n\n/*::\n\ntype DotenvParseOptions = {\n  debug?: boolean\n}\n\n// keys and values from src\ntype DotenvParseOutput = { [string]: string }\n\ntype DotenvConfigOptions = {\n  path?: string, // path to .env file\n  encoding?: string, // encoding of .env file\n  debug?: string // turn on logging for debugging purposes\n}\n\ntype DotenvConfigOutput = {\n  parsed?: DotenvParseOutput,\n  error?: Error\n}\n\n*/\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar os = __webpack_require__(/*! os */ \"os\");\n\nfunction log(message\n/*: string */\n) {\n  console.log(\"[dotenv][DEBUG] \".concat(message));\n}\n\nvar NEWLINE = '\\n';\nvar RE_INI_KEY_VAL = /^\\s*([\\w.-]+)\\s*=\\s*(.*)?\\s*$/;\nvar RE_NEWLINES = /\\\\n/g;\nvar NEWLINES_MATCH = /\\r\\n|\\n|\\r/; // Parses src into an Object\n\nfunction parse(src\n/*: string | Buffer */\n, options\n/*: ?DotenvParseOptions */\n)\n/*: DotenvParseOutput */\n{\n  var debug = Boolean(options && options.debug);\n  var obj = {}; // convert Buffers before splitting into lines and processing\n\n  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    var keyValueArr = line.match(RE_INI_KEY_VAL); // matched?\n\n    if (keyValueArr != null) {\n      var key = keyValueArr[1]; // default undefined or missing values to empty string\n\n      var val = keyValueArr[2] || '';\n      var end = val.length - 1;\n      var isDoubleQuoted = val[0] === '\"' && val[end] === '\"';\n      var isSingleQuoted = val[0] === \"'\" && val[end] === \"'\"; // if single or double quoted, remove quotes\n\n      if (isSingleQuoted || isDoubleQuoted) {\n        val = val.substring(1, end); // if double quoted, expand newlines\n\n        if (isDoubleQuoted) {\n          val = val.replace(RE_NEWLINES, NEWLINE);\n        }\n      } else {\n        // remove surrounding whitespace\n        val = val.trim();\n      }\n\n      obj[key] = val;\n    } else if (debug) {\n      log(\"did not match key and value when parsing line \".concat(idx + 1, \": \").concat(line));\n    }\n  });\n  return obj;\n}\n\nfunction resolveHome(envPath) {\n  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath;\n} // Populates process.env from .env file\n\n\nfunction config(options\n/*: ?DotenvConfigOptions */\n)\n/*: DotenvConfigOutput */\n{\n  var dotenvPath = path.resolve(process.cwd(), '.env');\n  var encoding\n  /*: string */\n  = 'utf8';\n  var debug = false;\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = resolveHome(options.path);\n    }\n\n    if (options.encoding != null) {\n      encoding = options.encoding;\n    }\n\n    if (options.debug != null) {\n      debug = true;\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    var parsed = parse(fs.readFileSync(dotenvPath, {\n      encoding: encoding\n    }), {\n      debug: debug\n    });\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {\n        process.env[key] = parsed[key];\n      } else if (debug) {\n        log(\"\\\"\".concat(key, \"\\\" is already defined in `process.env` and will not be overwritten\"));\n      }\n    });\n    return {\n      parsed: parsed\n    };\n  } catch (e) {\n    return {\n      error: e\n    };\n  }\n}\n\nmodule.exports.config = config;\nmodule.exports.parse = parse;\n\n//# sourceURL=webpack://a_very_smart_search/./node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Routing_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Routing.jsx */ \"./src/Routing.jsx\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template */ \"./server/template.js\");\n\n\n\n\n\nfunction render(req, res) {\n  var body = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.StaticRouter, {\n    location: req.url,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Routing_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n  var page = (0,_template__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(body);\n  res.send(page);\n}\n\n//# sourceURL=webpack://a_very_smart_search/./server/render.jsx?");

/***/ }),

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ template)\n/* harmony export */ });\nfunction template(body) {\n  return \"\\n        <!DOCTYPE html>\\n        <html lang=\\\"en\\\">\\n            <head>\\n                <meta charset=\\\"UTF-8\\\">\\n                <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n                <title>\\u041E\\u0447\\u0435\\u043D\\u044C \\u0443\\u043C\\u043D\\u044B\\u0439 \\u043F\\u043E\\u0438\\u0441\\u043A</title>\\n                <link rel=\\\"stylesheet\\\" href=\\\"/app.styles.css\\\">\\n            </head>\\n            <body>\\n                <div id=\\\"content\\\">\".concat(body, \"</div>\\n                <script src=\\\"/vendor.bundle.js\\\"></script>\\n                <script src=\\\"/app.bundle.js\\\"></script>\\n            </body>\\n        </html>\\n    \");\n}\n\n//# sourceURL=webpack://a_very_smart_search/./server/template.js?");

/***/ }),

/***/ "./server/uiserver.js":
/*!****************************!*\
  !*** ./server/uiserver.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _render_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render.jsx */ \"./server/render.jsx\");\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar port = process.env.PORT || 3000;\napp.use('/', express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, '../public')));\napp.use('/images', express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, '../src/images')));\napp.get('*', _render_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\napp.listen(port, function () {\n  return console.log(\"Server has been starting with port \".concat(port));\n});\n\n//# sourceURL=webpack://a_very_smart_search/./server/uiserver.js?");

/***/ }),

/***/ "./src/Routing.jsx":
/*!*************************!*\
  !*** ./src/Routing.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Routing)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Content = /*#__PURE__*/function (_React$Component) {\n  _inherits(Content, _React$Component);\n\n  var _super = _createSuper(Content);\n\n  function Content() {\n    var _this;\n\n    _classCallCheck(this, Content);\n\n    _this = _super.call(this);\n    _this.state = {\n      searchValue: '',\n      artists: [{\n        id: 1,\n        name: 'kizaru',\n        tags: ['кизару'],\n        avatar: '/images/kizaru.jpeg'\n      }, {\n        id: 2,\n        name: 'MORGENSHTERN',\n        tags: ['моргенштерн', 'алишер'],\n        avatar: '/images/morgenal.jpeg'\n      }, {\n        id: 3,\n        name: 'OG Buda',\n        tags: ['буда', 'ог', 'ог буда'],\n        avatar: '/images/og_buda.jpeg'\n      }, {\n        id: 4,\n        name: 'MAYOT',\n        tags: ['майот'],\n        avatar: '/images/mayot.jpeg'\n      }, {\n        id: 5,\n        name: 'SODA LUV',\n        tags: ['сода', 'сода лув'],\n        avatar: '/images/soda_luv.jpeg'\n      }],\n      foundElems: []\n    };\n    _this.handleSearch = _this.handleSearch.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Content, [{\n    key: \"handleSearch\",\n    value: function handleSearch(e) {\n      var searchValue = e.target.value;\n      this.setState({\n        searchValue: searchValue\n      });\n      var artists = this.state.artists;\n      searchValue = searchValue.toLowerCase().trim();\n      var foundElems = [];\n\n      if (searchValue != '') {\n        artists.map(function (el) {\n          var foundLength = 0;\n          var whatToReturn = null;\n          var name = el.name.toLowerCase();\n\n          function iterateStr(str) {\n            for (var i = 0; i < str.length; i++) {\n              var currentLetter = str[i];\n\n              for (var j = 0; j < searchValue.length; j++) {\n                var currentSearchLetter = searchValue[j];\n\n                if (currentSearchLetter == currentLetter) {\n                  foundLength++;\n                }\n\n                if (foundLength >= searchValue.length) {\n                  break;\n                }\n              }\n\n              if (foundLength >= searchValue.length) {\n                break;\n              }\n            }\n\n            ;\n\n            if (foundLength < searchValue.length) {\n              if (str.includes(searchValue)) {\n                foundElems.push(el);\n                whatToReturn = el;\n              }\n            } else {\n              foundElems.push(el);\n              whatToReturn = el;\n            }\n\n            foundLength = 0;\n            return whatToReturn;\n          }\n\n          var result = iterateStr(name);\n\n          if (!result) {\n            for (var i = 0; i < el.tags.length; i++) {\n              var tag = el.tags[i];\n\n              var _result = iterateStr(tag.toLowerCase());\n\n              if (_result) {\n                break;\n              }\n            }\n          }\n        });\n      }\n\n      this.setState({\n        foundElems: foundElems\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          foundElems = _this$state.foundElems,\n          artists = _this$state.artists,\n          searchValue = _this$state.searchValue;\n      var elemsToRender = [];\n\n      if (searchValue == '') {\n        artists.map(function (el) {\n          elemsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            key: el.id,\n            className: \"artist\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            src: el.avatar,\n            className: \"artist-avatar\"\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            className: \"labels\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n            className: \"artist-name\"\n          }, el.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n            className: \"artist-label\"\n          }, \"\\u0410\\u0440\\u0442\\u0438\\u0441\\u0442\"))));\n        });\n      } else {\n        foundElems.map(function (el) {\n          elemsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            key: el.id,\n            className: \"artist\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            src: el.avatar,\n            className: \"artist-avatar\"\n          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            className: \"labels\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n            className: \"artist-name\"\n          }, el.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n            className: \"artist-label\"\n          }, \"\\u0410\\u0440\\u0442\\u0438\\u0441\\u0442\"))));\n        });\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"search\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        onChange: this.handleSearch,\n        className: \"search-input\",\n        placeholder: \"\\u041F\\u043E\\u0438\\u0441\\u043A...\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"artists\"\n      }, elemsToRender));\n    }\n  }]);\n\n  return Content;\n}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));\n\nfunction Routing() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: Content\n  }));\n}\n\n//# sourceURL=webpack://a_very_smart_search/./src/Routing.jsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/uiserver.js");
/******/ 	
/******/ })()
;