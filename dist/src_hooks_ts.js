"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkft_bot_components"] = self["webpackChunkft_bot_components"] || []).push([["src_hooks_ts"],{

/***/ "./src/contexts/ThemeProvider.tsx":
/*!****************************************!*\
  !*** ./src/contexts/ThemeProvider.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_themes_Dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/themes/Dark */ \"./src/styles/themes/Dark.ts\");\n/* harmony import */ var _styles_themes_Light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/themes/Light */ \"./src/styles/themes/Light.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nconst ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nfunction ProviderTheme({\n  children\n}) {\n  const [theme, setThemes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_styles_themes_Dark__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  const toggleTheme = () => {\n    setThemes(theme.title === \"dark\" ? _styles_themes_Light__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : _styles_themes_Dark__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    if (theme.title === \"dark\") {\n      localStorage.setItem(\"@Atend-Pro:theme\", JSON.stringify(_styles_themes_Dark__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n      setThemes(_styles_themes_Dark__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    } else if (theme.title === \"light\") {\n      localStorage.setItem(\"@Atend-Pro:theme\", JSON.stringify(_styles_themes_Light__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n      setThemes(_styles_themes_Light__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThemeContext.Provider, {\n    value: {\n      theme,\n      toggleTheme\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n    theme: theme\n  }, children));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProviderTheme);\n\n//# sourceURL=webpack://ft-bot-components/./src/contexts/ThemeProvider.tsx?");

/***/ }),

/***/ "./src/hooks.ts":
/*!**********************!*\
  !*** ./src/hooks.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dark: () => (/* reexport safe */ _styles_themes_Dark__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   ProviderTheme: () => (/* reexport safe */ _contexts_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   useTheme: () => (/* reexport safe */ _hooks_useTheme__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks/useTheme */ \"./src/hooks/useTheme.tsx\");\n/* harmony import */ var _contexts_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contexts/ThemeProvider */ \"./src/contexts/ThemeProvider.tsx\");\n/* harmony import */ var _styles_themes_Dark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/themes/Dark */ \"./src/styles/themes/Dark.ts\");\n\n\n\n\n//# sourceURL=webpack://ft-bot-components/./src/hooks.ts?");

/***/ }),

/***/ "./src/hooks/useTheme.tsx":
/*!********************************!*\
  !*** ./src/hooks/useTheme.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeProvider */ \"./src/contexts/ThemeProvider.tsx\");\n\n\nfunction useTheme() {\n  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);\n  return context;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);\n\n//# sourceURL=webpack://ft-bot-components/./src/hooks/useTheme.tsx?");

/***/ }),

/***/ "./src/styles/themes/Dark.ts":
/*!***********************************!*\
  !*** ./src/styles/themes/Dark.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  title: \"dark\",\n  colors: {\n    primary: \"#141414\",\n    secondary: \"#10101E\",\n    tertiary: \"#19746B\",\n    font: \"#a3a2a2\",\n    white: \"#fff\",\n    black: \"#000\",\n    gray: \"#d6d4d4\",\n    success: \"#009965\",\n    info: \"#2849D9\",\n    warning: \"#6A23DE\"\n  }\n});\n\n//# sourceURL=webpack://ft-bot-components/./src/styles/themes/Dark.ts?");

/***/ }),

/***/ "./src/styles/themes/Light.ts":
/*!************************************!*\
  !*** ./src/styles/themes/Light.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  title: \"light\",\n  colors: {\n    primary: \"#fff\",\n    secondary: \"#EEEEF2\",\n    tertiary: \"#F5F5F5\",\n    font: \"#616480\",\n    white: \"#fff\",\n    black: \"#FFF\",\n    gray: \"#BFBFBF\",\n    success: \"#03BB85\",\n    info: \"#3B5998\",\n    warning: \"FF6961\"\n  }\n});\n\n//# sourceURL=webpack://ft-bot-components/./src/styles/themes/Light.ts?");

/***/ })

}]);