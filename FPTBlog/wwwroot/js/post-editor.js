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

/***/ "./src/package/axios/index.ts":
/*!************************************!*\
  !*** ./src/package/axios/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.http = void 0;\r\nvar interceptor_1 = __webpack_require__(/*! ./interceptor */ \"./src/package/axios/interceptor.ts\");\r\nvar http = axios;\r\nexports.http = http;\r\nhttp.defaults.withCredentials = true;\r\nhttp.interceptors.request.use(interceptor_1.requestInterceptor);\r\nhttp.interceptors.response.use(interceptor_1.responseSuccessInterceptor, interceptor_1.responseFailedInterceptor);\r\n\n\n//# sourceURL=webpack://mono-webpack/./src/package/axios/index.ts?");

/***/ }),

/***/ "./src/package/axios/interceptor.ts":
/*!******************************************!*\
  !*** ./src/package/axios/interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.responseFailedInterceptor = exports.responseSuccessInterceptor = exports.handleCommonResponse = exports.requestInterceptor = void 0;\r\nfunction requestInterceptor(req) {\r\n    var btn = document.getElementById('form-btn');\r\n    var loading = document.getElementById('loading');\r\n    var message = document.getElementById('MESSAGEERROR');\r\n    var errorMessage = document.getElementById('ERRORMESSAGEERROR');\r\n    for (var key in req.data) {\r\n        var error = document.getElementById(key.toUpperCase() + \"ERROR\");\r\n        if (error) {\r\n            error.innerHTML = \"\";\r\n        }\r\n    }\r\n    if (errorMessage) {\r\n        errorMessage.innerHTML = '';\r\n    }\r\n    if (message) {\r\n        message.innerHTML = '';\r\n    }\r\n    if (loading && btn) {\r\n        btn.classList.add('hidden');\r\n        loading.classList.remove('hidden');\r\n        loading.classList.add('flex');\r\n    }\r\n    return req;\r\n}\r\nexports.requestInterceptor = requestInterceptor;\r\nfunction handleCommonResponse() {\r\n    var btn = document.getElementById('form-btn');\r\n    var loading = document.getElementById('loading');\r\n    if (loading && btn) {\r\n        btn.classList.remove('hidden');\r\n        btn.classList.add('block');\r\n        loading.classList.add('hidden');\r\n        loading.classList.remove('flex');\r\n    }\r\n}\r\nexports.handleCommonResponse = handleCommonResponse;\r\nfunction responseSuccessInterceptor(response) {\r\n    var _a, _b, _c, _d;\r\n    handleCommonResponse();\r\n    if ((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.message) {\r\n        var message = document.getElementById('MESSAGEERROR');\r\n        if (message) {\r\n            message.innerHTML = (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.details) === null || _d === void 0 ? void 0 : _d.message;\r\n        }\r\n    }\r\n    return response;\r\n}\r\nexports.responseSuccessInterceptor = responseSuccessInterceptor;\r\nfunction responseFailedInterceptor(error) {\r\n    var _a, _b;\r\n    handleCommonResponse();\r\n    if ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.details) {\r\n        var details = error.response.data.details;\r\n        for (var key in details) {\r\n            var error_1 = document.getElementById(key.toUpperCase() + \"ERROR\");\r\n            if (error_1) {\r\n                error_1.innerHTML = error_1.getAttribute('data-label') + \" \" + details[key];\r\n            }\r\n            if (error_1 && (key === 'errorMessage' || key === 'message')) {\r\n                error_1.innerHTML = \"\" + details[key];\r\n            }\r\n        }\r\n    }\r\n    return Promise.reject(error.response);\r\n}\r\nexports.responseFailedInterceptor = responseFailedInterceptor;\r\n\n\n//# sourceURL=webpack://mono-webpack/./src/package/axios/interceptor.ts?");

/***/ }),

/***/ "./src/package/axios/routes.ts":
/*!*************************************!*\
  !*** ./src/package/axios/routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.routers = exports.routerLinks = void 0;\r\nexports.routerLinks = {\r\n    home: '/',\r\n    loginForm: '/auth/login',\r\n};\r\nexports.routers = {\r\n    category: {\r\n        create: '/api/category',\r\n        update: '/api/category',\r\n    },\r\n    post: {\r\n        create: '/api/post',\r\n        addNewTagToPost: '/api/post/tag',\r\n        getTagOfPost: function (postId) { return \"/api/post/tag?postId=\" + postId; },\r\n        save: '/api/post/save',\r\n        uploadImagePost: '/api/post/image',\r\n        addCategoryToPost: '/api/post/category',\r\n    },\r\n    user: {\r\n        changePassword: '/api/user/change-password',\r\n        update: '/api/user',\r\n        get: '/api/user',\r\n    },\r\n    tag: {\r\n        getAll: '/api/tag/all',\r\n        getByName: function (name) { return \"/api/tag?name=\" + name; },\r\n    },\r\n    auth: {\r\n        login: '/api/auth/login',\r\n        register: '/api/auth/register',\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://mono-webpack/./src/package/axios/routes.ts?");

/***/ }),

/***/ "./src/package/components/listBadge.ts":
/*!*********************************************!*\
  !*** ./src/package/components/listBadge.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.handleSelectBadge = exports.handleRenderBadge = exports.handleOnClickOutside = exports.getBadgeComponent = exports.getResultItemComponent = void 0;\r\nvar debounce_1 = __webpack_require__(/*! ../helper/debounce */ \"./src/package/helper/debounce.ts\");\r\nvar loading_1 = __webpack_require__(/*! ./loading */ \"./src/package/components/loading.ts\");\r\n//Component Render\r\nvar deleteIcon = \"<svg viewBox=\\\"64 64 896 896\\\" focusable=\\\"false\\\" data-icon=\\\"close\\\" width=\\\"1em\\\" height=\\\"1em\\\" fill=\\\"currentColor\\\" aria-hidden=\\\"true\\\">\\n                <path d=\\\"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z\\\"></path>\\n            </svg>\";\r\nvar getResultItemComponent = function (label, callback) {\r\n    var listItem = document.createElement('li');\r\n    listItem.classList.add('p-1', 'fade-in');\r\n    var button = document.createElement('button');\r\n    button.classList.add('block', 'w-full', 'search-item', 'outline-none', 'p-1', 'text-left', 'duration-300', 'hover:bg-tango-200', 'focus:outline-none');\r\n    button.addEventListener('click', callback);\r\n    button.setAttribute('type', 'button');\r\n    button.innerText = label;\r\n    listItem.appendChild(button);\r\n    return listItem;\r\n};\r\nexports.getResultItemComponent = getResultItemComponent;\r\nvar getBadgeComponent = function (name, callback) {\r\n    var button = document.createElement('button');\r\n    button.classList.add('flex', 'space-x-0.5', 'p-1', 'fade-in', 'bg-gray-200', 'rounded-sm', 'items-center', 'hover:bg-gray-300', 'duration-300', 'm-0.5');\r\n    button.addEventListener('click', function () {\r\n        callback(name).then(function () {\r\n            button.remove();\r\n        });\r\n    });\r\n    var label = document.createElement('span');\r\n    label.textContent = name;\r\n    var icon = document.createElement('span');\r\n    icon.innerHTML = deleteIcon;\r\n    button.appendChild(label);\r\n    button.appendChild(icon);\r\n    return button;\r\n};\r\nexports.getBadgeComponent = getBadgeComponent;\r\n//Detect Click Outside\r\nvar handleOnClickOutside = function (input, search) {\r\n    var isWithin = false;\r\n    var detectWindowOutside = function () {\r\n        if (!isWithin)\r\n            search === null || search === void 0 ? void 0 : search.classList.add('hidden');\r\n    };\r\n    input.addEventListener('focus', function () {\r\n        search.classList.remove('hidden');\r\n        document.removeEventListener('click', detectWindowOutside);\r\n        search.addEventListener('mouseenter', function () {\r\n            isWithin = true;\r\n        });\r\n    });\r\n    input.addEventListener('blur', function () {\r\n        if (!isWithin)\r\n            search === null || search === void 0 ? void 0 : search.classList.add('hidden');\r\n        search.addEventListener('mouseleave', function () {\r\n            isWithin = false;\r\n        });\r\n        document.addEventListener('click', detectWindowOutside);\r\n    });\r\n};\r\nexports.handleOnClickOutside = handleOnClickOutside;\r\n//handle render badge\r\nvar handleRenderBadge = function (badgeWrapper, value, callback) {\r\n    badgeWrapper.innerHTML = '';\r\n    value.forEach(function (item) {\r\n        badgeWrapper === null || badgeWrapper === void 0 ? void 0 : badgeWrapper.append((0, exports.getBadgeComponent)(item, callback));\r\n    });\r\n};\r\nexports.handleRenderBadge = handleRenderBadge;\r\nfunction handleSelectBadge(id, handleOnInitBadge, handleOnSearchBadge, handleOnEnter, handleOnDelete, delayTime) {\r\n    if (delayTime === void 0) { delayTime = 500; }\r\n    var searchResult = document.getElementById(id + \"Result\");\r\n    var inputElement = document.getElementById(id);\r\n    handleOnInitBadge().then(function (value) {\r\n        var badgeElement = document.getElementById(id + \"Badge\");\r\n        if (badgeElement) {\r\n            (0, exports.handleRenderBadge)(badgeElement, value, handleOnDelete);\r\n        }\r\n    });\r\n    //handle null\r\n    if (inputElement !== null && searchResult !== null) {\r\n        inputElement.addEventListener('change', function (event) {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var tagNameInput;\r\n                return __generator(this, function (_a) {\r\n                    tagNameInput = event.currentTarget;\r\n                    handleOnEnter(tagNameInput.value).then(function (value) {\r\n                        var badgeElement = document.getElementById(id + \"Badge\");\r\n                        if (badgeElement) {\r\n                            (0, exports.handleRenderBadge)(badgeElement, value, handleOnDelete);\r\n                        }\r\n                    });\r\n                    return [2 /*return*/];\r\n                });\r\n            });\r\n        });\r\n        //detect click outside\r\n        (0, exports.handleOnClickOutside)(inputElement, searchResult);\r\n        // handle select drop list\r\n        var currentSelect_1 = -1;\r\n        var currentLabel_1 = null;\r\n        inputElement === null || inputElement === void 0 ? void 0 : inputElement.addEventListener('keyup', function (event) {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var _this = this;\r\n                return __generator(this, function (_a) {\r\n                    if (event.code === 'Enter' && currentLabel_1 !== null && currentSelect_1 !== -1) {\r\n                        // const input = inputElement as HTMLInputElement;\r\n                        // input.value = currentLabel;\r\n                        // const value = await handleOnEnter(currentLabel);\r\n                        // const badgeElement = document.getElementById(`${id}Badge`) as HTMLDivElement;\r\n                        // if (badgeElement) {\r\n                        //     handleRenderBadge(badgeElement, value, handleOnDelete);\r\n                        // }\r\n                    }\r\n                    else if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {\r\n                        // const searchItems = searchResult.getElementsByClassName('search-item');\r\n                        // if (searchItems.length) {\r\n                        //     if (event.code === 'ArrowDown') {\r\n                        //         currentSelect += 1;\r\n                        //         if (currentSelect > searchItems.length - 1) currentSelect = 0;\r\n                        //     } else if (event.code === 'ArrowUp') {\r\n                        //         currentSelect -= 1;\r\n                        //         if (currentSelect <= -1) currentSelect = searchItems.length - 1;\r\n                        //     }\r\n                        //     for (let index = 0; index < searchItems.length; index++) {\r\n                        //         const element = searchItems[index];\r\n                        //         if (currentSelect === index) {\r\n                        //             element.classList.add('bg-tango-200');\r\n                        //             currentLabel = element.textContent;\r\n                        //         } else {\r\n                        //             element.classList.remove('bg-tango-200');\r\n                        //         }\r\n                        //     }\r\n                        // }\r\n                    }\r\n                    else {\r\n                        (0, debounce_1.debounce)(delayTime, function () { return __awaiter(_this, void 0, void 0, function () {\r\n                            var data, wrapper;\r\n                            return __generator(this, function (_a) {\r\n                                switch (_a.label) {\r\n                                    case 0:\r\n                                        currentSelect_1 = -1;\r\n                                        currentLabel_1 = null;\r\n                                        searchResult.innerHTML = '';\r\n                                        searchResult.innerHTML = loading_1.loadingComponent;\r\n                                        return [4 /*yield*/, handleOnSearchBadge()];\r\n                                    case 1:\r\n                                        data = _a.sent();\r\n                                        wrapper = document.createElement('div');\r\n                                        data.forEach(function (item) {\r\n                                            var searchItem = (0, exports.getResultItemComponent)(item, function () {\r\n                                                inputElement.value = '';\r\n                                                var searchItems = searchResult.getElementsByClassName('search-item');\r\n                                                handleOnEnter(item).then(function (value) {\r\n                                                    var badgeElement = document.getElementById(id + \"Badge\");\r\n                                                    if (badgeElement) {\r\n                                                        (0, exports.handleRenderBadge)(badgeElement, value, handleOnDelete);\r\n                                                    }\r\n                                                });\r\n                                                for (var index = 0; index < searchItems.length; index++) {\r\n                                                    var element = searchItems[index];\r\n                                                    element.classList.remove('bg-tango-200');\r\n                                                }\r\n                                            });\r\n                                            wrapper.append(searchItem);\r\n                                        });\r\n                                        if (searchResult) {\r\n                                            searchResult.innerHTML = '';\r\n                                            searchResult.appendChild(wrapper);\r\n                                        }\r\n                                        return [2 /*return*/];\r\n                                }\r\n                            });\r\n                        }); });\r\n                    }\r\n                    return [2 /*return*/];\r\n                });\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.handleSelectBadge = handleSelectBadge;\r\n\n\n//# sourceURL=webpack://mono-webpack/./src/package/components/listBadge.ts?");

/***/ }),

/***/ "./src/package/components/loading.ts":
/*!*******************************************!*\
  !*** ./src/package/components/loading.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.loadingComponent = void 0;\r\nexports.loadingComponent = \"    <div class=\\\" py-2 items-center justify-center hidden space-x-2 fade-in\\\" id=\\\"loading\\\">\\n        <div class=\\\"w-1 h-8 bg-tango-500 animation1\\\"></div>\\n        <div class=\\\"w-1 h-8 bg-tango-500 animation2\\\"></div>\\n        <div class=\\\"w-1 h-8 bg-tango-500 animation1\\\"></div>\\n        <div class=\\\"w-1 h-8 bg-tango-500 animation2\\\"></div>\\n        <div class=\\\"w-1 h-8 bg-tango-500 animation1\\\"></div>\\n    </div>\";\r\n\n\n//# sourceURL=webpack://mono-webpack/./src/package/components/loading.ts?");

/***/ }),

/***/ "./src/package/helper/debounce.ts":
/*!****************************************!*\
  !*** ./src/package/helper/debounce.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.debounce = void 0;\r\nvar timeoutId;\r\nfunction debounce(time, callback) {\r\n    return (function () {\r\n        if (timeoutId !== null)\r\n            clearTimeout(timeoutId);\r\n        timeoutId = setTimeout(callback, time);\r\n    })();\r\n}\r\nexports.debounce = debounce;\r\n\n\n//# sourceURL=webpack://mono-webpack/./src/package/helper/debounce.ts?");

/***/ }),

/***/ "./src/package/quill/helper.ts":
/*!*************************************!*\
  !*** ./src/package/quill/helper.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.saveToServer = exports.selectLocalImage = exports.insertToEditor = void 0;\r\nvar axios_1 = __webpack_require__(/*! ../axios */ \"./src/package/axios/index.ts\");\r\nvar routes_1 = __webpack_require__(/*! ../axios/routes */ \"./src/package/axios/routes.ts\");\r\n// let coverUrl = '';\r\nfunction insertToEditor(editor, url) {\r\n    var range = editor.getSelection();\r\n    if (range)\r\n        editor.insertEmbed(range.index, 'image', \"\" + url);\r\n}\r\nexports.insertToEditor = insertToEditor;\r\nfunction selectLocalImage(editor, cb) {\r\n    var input = document.createElement('input');\r\n    input.setAttribute('type', 'file');\r\n    input.click();\r\n    input.onchange = function () {\r\n        if ((input === null || input === void 0 ? void 0 : input.files) && input.files[0]) {\r\n            var file = input.files[0];\r\n            if (/^image\\//.test(file.type)) {\r\n                cb(editor, file);\r\n            }\r\n            else {\r\n                alert('You could only upload images');\r\n            }\r\n        }\r\n    };\r\n}\r\nexports.selectLocalImage = selectLocalImage;\r\nfunction saveToServer(editor, file) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var fd, formData;\r\n        return __generator(this, function (_a) {\r\n            fd = new FormData();\r\n            fd.append('image', file);\r\n            formData = new FormData();\r\n            formData.append('image', file);\r\n            axios_1.http.post(routes_1.routers.post.uploadImagePost, formData)\r\n                .then(function (res) {\r\n                var imageUrl = res.data.data;\r\n                // if (coverUrl) coverUrl = imageUrl;\r\n                insertToEditor(editor, imageUrl);\r\n            })\r\n                .catch(function (error) {\r\n                console.log(error);\r\n            });\r\n            return [2 /*return*/];\r\n        });\r\n    });\r\n}\r\nexports.saveToServer = saveToServer;\r\n// export { coverUrl };\r\n\n\n//# sourceURL=webpack://mono-webpack/./src/package/quill/helper.ts?");

/***/ }),

/***/ "./src/package/quill/index.ts":
/*!************************************!*\
  !*** ./src/package/quill/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.editor = void 0;\r\nvar ImageFormatAttributesList = ['alt', 'height', 'width', 'style'];\r\nvar BaseImageFormat = Quill.import('formats/image');\r\nvar ImageFormat = /** @class */ (function (_super) {\r\n    __extends(ImageFormat, _super);\r\n    function ImageFormat() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ImageFormat.formats = function (domNode) {\r\n        return ImageFormatAttributesList.reduce(function (formats, attribute) {\r\n            if (domNode.hasAttribute(attribute)) {\r\n                formats[attribute] = domNode.getAttribute(attribute);\r\n            }\r\n            return formats;\r\n        }, {});\r\n    };\r\n    ImageFormat.prototype.format = function (name, value) {\r\n        if (ImageFormatAttributesList.indexOf(name) > -1) {\r\n            if (value) {\r\n                this.domNode.setAttribute(name, value);\r\n            }\r\n            else {\r\n                this.domNode.removeAttribute(name);\r\n            }\r\n        }\r\n        else {\r\n            _super.prototype.format.call(this, name, value);\r\n        }\r\n    };\r\n    return ImageFormat;\r\n}(BaseImageFormat));\r\nQuill.register(ImageFormat, true);\r\nexports.editor = new Quill('#editor', {\r\n    modules: {\r\n        toolbar: [\r\n            ['bold', 'italic', 'underline', 'strike'],\r\n            ['blockquote', 'code-block'],\r\n            ['link', 'video', 'image'],\r\n            [{ header: 1 }, { header: 2 }],\r\n            [{ list: 'ordered' }, { list: 'bullet' }],\r\n            [{ script: 'sub' }, { script: 'super' }],\r\n            [{ indent: '-1' }, { indent: '+1' }],\r\n            [{ direction: 'rtl' }],\r\n            [{ size: ['small', false, 'large', 'huge'] }],\r\n            [{ header: [1, 2, 3, 4, 5, 6, false] }],\r\n            [{ color: [] }, { background: [] }],\r\n            [{ font: [] }],\r\n            [{ align: [] }],\r\n            ['clean'], // remove formatting button\r\n        ],\r\n        imageResize: {\r\n            displaySize: true,\r\n        },\r\n    },\r\n    theme: 'snow',\r\n});\r\n\n\n//# sourceURL=webpack://mono-webpack/./src/package/quill/index.ts?");

/***/ }),

/***/ "./src/post/editor.ts":
/*!****************************!*\
  !*** ./src/post/editor.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar quill_1 = __webpack_require__(/*! ../package/quill */ \"./src/package/quill/index.ts\");\r\nvar helper_1 = __webpack_require__(/*! ../package/quill/helper */ \"./src/package/quill/helper.ts\");\r\nvar axios_1 = __webpack_require__(/*! ../package/axios */ \"./src/package/axios/index.ts\");\r\nvar routes_1 = __webpack_require__(/*! ../package/axios/routes */ \"./src/package/axios/routes.ts\");\r\nvar listBadge_1 = __webpack_require__(/*! ../package/components/listBadge */ \"./src/package/components/listBadge.ts\");\r\nquill_1.editor.getModule('toolbar').addHandler('image', function () {\r\n    (0, helper_1.selectLocalImage)(quill_1.editor, helper_1.saveToServer);\r\n});\r\nvar createBlogForm = document.getElementById('createBlogForm');\r\ncreateBlogForm === null || createBlogForm === void 0 ? void 0 : createBlogForm.addEventListener('submit', function (event) {\r\n    event.preventDefault();\r\n});\r\nvar saveChangePostBtn = document.getElementById('form-btn');\r\nsaveChangePostBtn === null || saveChangePostBtn === void 0 ? void 0 : saveChangePostBtn.addEventListener('click', function () {\r\n    var title = document.getElementById('title');\r\n    var postIdElement = document.getElementById('postId');\r\n    var readTime = Math.ceil(quill_1.editor.getText().split(' ').length / 250);\r\n    var wrapperElement = document.createElement('div');\r\n    wrapperElement.innerHTML = quill_1.editor.root.innerHTML;\r\n    var coverImage = 'https://picsum.photos/300';\r\n    var imageElement = wrapperElement.getElementsByTagName('img');\r\n    if (imageElement.length) {\r\n        coverImage = imageElement[0].getAttribute('src') || 'https://picsum.photos/300';\r\n    }\r\n    if (title !== null && quill_1.editor !== null && postIdElement !== null) {\r\n        var input = {\r\n            title: title.value,\r\n            content: quill_1.editor.root.innerHTML,\r\n            postId: postIdElement.value,\r\n            readTime: readTime,\r\n            coverUrl: coverImage,\r\n        };\r\n        console.log(input);\r\n        axios_1.http.post(routes_1.routers.post.save, input).then(function () { });\r\n    }\r\n});\r\nvar categoryInput = document.getElementById('categoryId');\r\ncategoryInput === null || categoryInput === void 0 ? void 0 : categoryInput.addEventListener('change', function (event) {\r\n    var postIdElement = document.getElementById('postId');\r\n    var selectInput = event.currentTarget;\r\n    var input = {\r\n        categoryId: selectInput.value,\r\n        postId: postIdElement.value,\r\n    };\r\n    axios_1.http.put(routes_1.routers.post.addCategoryToPost, input);\r\n});\r\n(0, listBadge_1.handleSelectBadge)('tag', function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var postIdElement, data;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                postIdElement = document.getElementById('postId');\r\n                return [4 /*yield*/, axios_1.http.get(routes_1.routers.post.getTagOfPost(postIdElement.value))];\r\n            case 1:\r\n                data = (_a.sent()).data;\r\n                return [2 /*return*/, data.data.map(function (item) { return item.name; })];\r\n        }\r\n    });\r\n}); }, function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var tagInputElement, url, data;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                tagInputElement = document.getElementById('tag');\r\n                if (!tagInputElement) return [3 /*break*/, 2];\r\n                url = routes_1.routers.tag.getByName(tagInputElement.value);\r\n                return [4 /*yield*/, axios_1.http.get(url)];\r\n            case 1:\r\n                data = (_a.sent()).data;\r\n                return [2 /*return*/, data.data.slice(0, 10).map(function (item) { return item.name; })];\r\n            case 2: return [2 /*return*/, []];\r\n        }\r\n    });\r\n}); }, function (label) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var postIdElement, input, data;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                postIdElement = document.getElementById('postId');\r\n                if (!postIdElement) return [3 /*break*/, 2];\r\n                input = {\r\n                    postId: postIdElement.value,\r\n                    tagName: label,\r\n                };\r\n                return [4 /*yield*/, axios_1.http.post(routes_1.routers.post.addNewTagToPost, input)];\r\n            case 1:\r\n                data = (_a.sent()).data;\r\n                return [2 /*return*/, data.data.map(function (item) { return item.name; })];\r\n            case 2: return [2 /*return*/, []];\r\n        }\r\n    });\r\n}); }, function (label) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var postIdElement, input;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                postIdElement = document.getElementById('postId');\r\n                input = {\r\n                    postId: postIdElement.value,\r\n                    tagName: label,\r\n                };\r\n                return [4 /*yield*/, axios_1.http.put(routes_1.routers.post.addNewTagToPost, input)];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); }, 500);\r\n\n\n//# sourceURL=webpack://mono-webpack/./src/post/editor.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/post/editor.ts");
/******/ 	
/******/ })()
;