"use strict";
(globalThis["webpackChunkwpmvc"] = globalThis["webpackChunkwpmvc"] || []).push([["resources_js_modules_HomepageContent_RecommendationSection_js"],{

/***/ "./resources/js/modules/HomepageContent/RecommendationSection.js":
/*!***********************************************************************!*\
  !*** ./resources/js/modules/HomepageContent/RecommendationSection.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecommendationSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


function RecommendationSection() {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "ba-dashboard__recommendation",
    className: "ba-dashboard__content__section ba-dashboard__content__section--recommendation"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__top",
    style: {
      marginBottom: !isOpen ? "0" : null
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "ba-dashboard__content__section__title"
  }, "Recommendations"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ba-dashboard__content__section__toggle",
    onClick: handleToggle
  }, isOpen ? "Hide" : "Show")), isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
    className: "ba-dashboard__content__section__title--recommendation"
  }, "Plugins"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ba-dashboard__content__section__desc--recommendation"
  }, "Review HTTP/S requests processed by Cloudfare to assess theats and tune configurations."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "ba-dashboard__content__section__btn ba-dashboard__btn ba-dashboard__btn--sm"
  }, "Go to speed optimization"))));
}

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_HomepageContent_RecommendationSection_js.js.map