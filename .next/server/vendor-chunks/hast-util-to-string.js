"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-to-string";
exports.ids = ["vendor-chunks/hast-util-to-string"];
exports.modules = {

/***/ "(rsc)/./node_modules/hast-util-to-string/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/hast-util-to-string/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toString: () => (/* binding */ toString)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Nodes} Nodes\n * @typedef {import('hast').Parents} Parents\n */\n\n/**\n * Get the plain-text value of a hast node.\n *\n * @param {Nodes} node\n *   Node to serialize.\n * @returns {string}\n *   Serialized node.\n */\nfunction toString(node) {\n  // “The concatenation of data of all the Text node descendants of the context\n  // object, in tree order.”\n  if ('children' in node) {\n    return all(node)\n  }\n\n  // “Context object’s data.”\n  return 'value' in node ? node.value : ''\n}\n\n/**\n * @param {Nodes} node\n *   Node.\n * @returns {string}\n *   Serialized node.\n */\nfunction one(node) {\n  if (node.type === 'text') {\n    return node.value\n  }\n\n  return 'children' in node ? all(node) : ''\n}\n\n/**\n * @param {Parents} node\n *   Node.\n * @returns {string}\n *   Serialized node.\n */\nfunction all(node) {\n  let index = -1\n  /** @type {Array<string>} */\n  const result = []\n\n  while (++index < node.children.length) {\n    result[index] = one(node.children[index])\n  }\n\n  return result.join('')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLXN0cmluZy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSx3QkFBd0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9yZm9saW8vLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXRvLXN0cmluZy9saWIvaW5kZXguanM/OTgyOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Ob2Rlc30gTm9kZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5QYXJlbnRzfSBQYXJlbnRzXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBsYWluLXRleHQgdmFsdWUgb2YgYSBoYXN0IG5vZGUuXG4gKlxuICogQHBhcmFtIHtOb2Rlc30gbm9kZVxuICogICBOb2RlIHRvIHNlcmlhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFNlcmlhbGl6ZWQgbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKG5vZGUpIHtcbiAgLy8g4oCcVGhlIGNvbmNhdGVuYXRpb24gb2YgZGF0YSBvZiBhbGwgdGhlIFRleHQgbm9kZSBkZXNjZW5kYW50cyBvZiB0aGUgY29udGV4dFxuICAvLyBvYmplY3QsIGluIHRyZWUgb3JkZXIu4oCdXG4gIGlmICgnY2hpbGRyZW4nIGluIG5vZGUpIHtcbiAgICByZXR1cm4gYWxsKG5vZGUpXG4gIH1cblxuICAvLyDigJxDb250ZXh0IG9iamVjdOKAmXMgZGF0YS7igJ1cbiAgcmV0dXJuICd2YWx1ZScgaW4gbm9kZSA/IG5vZGUudmFsdWUgOiAnJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZXN9IG5vZGVcbiAqICAgTm9kZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFNlcmlhbGl6ZWQgbm9kZS5cbiAqL1xuZnVuY3Rpb24gb25lKG5vZGUpIHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIG5vZGUudmFsdWVcbiAgfVxuXG4gIHJldHVybiAnY2hpbGRyZW4nIGluIG5vZGUgPyBhbGwobm9kZSkgOiAnJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UGFyZW50c30gbm9kZVxuICogICBOb2RlLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgU2VyaWFsaXplZCBub2RlLlxuICovXG5mdW5jdGlvbiBhbGwobm9kZSkge1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge0FycmF5PHN0cmluZz59ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBvbmUobm9kZS5jaGlsZHJlbltpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/hast-util-to-string/lib/index.js\n");

/***/ })

};
;