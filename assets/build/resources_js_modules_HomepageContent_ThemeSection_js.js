"use strict";
(globalThis["webpackChunkwpmvc"] = globalThis["webpackChunkwpmvc"] || []).push([["resources_js_modules_HomepageContent_ThemeSection_js"],{

/***/ "./resources/js/components/CountUp/index.js":
/*!**************************************************!*\
  !*** ./resources/js/components/CountUp/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


function CountUp({
  target = 100,
  duration = 2000,
  float = false,
  decimals = 2
}) {
  const [count, setCount] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let start = 0;
    const end = parseFloat(target);
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  const displayValue = float ? count.toFixed(decimals) : Math.floor(count);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, displayValue);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountUp);

/***/ }),

/***/ "./resources/js/modules/HomepageContent/ThemeSection.js":
/*!**************************************************************!*\
  !*** ./resources/js/modules/HomepageContent/ThemeSection.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CountUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/CountUp */ "./resources/js/components/CountUp/index.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/dist/index.mjs");
/* harmony import */ var _icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @icon/arrow-right.svg */ "./resources/svg/icon/arrow-right.svg");
/* harmony import */ var _icon_info_circled_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @icon/info-circled.svg */ "./resources/svg/icon/info-circled.svg");




// Import Images


function ThemeSection() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "ba-dashboard__theme",
    className: "ba-dashboard__content__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "ba-dashboard__content__section__title"
  }, "Themes"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ba-dashboard__content__section__desc"
  }, "Review HTTP/S requests processed by Cloudfare to assess theats and tune configurations."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "ba-dashboard__content__section__btn ba-dashboard__btn"
  }, "Security analytics documentation"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__title"
  }, "Total"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__count"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountUp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    target: 6.67,
    float: true
  }), "K")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__title"
  }, "Types"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__count"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountUp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    target: 7.92,
    float: true
  }), "K")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__title"
  }, "Meta"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__count"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountUp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    target: 7.57,
    float: true
  }), "K")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__title"
  }, "Revisions"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__count"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountUp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    target: 7.84,
    float: true
  }), "K"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__data"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Name", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bs-dashboard-tooltip"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_info_circled_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    width: 16,
    height: 16
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bs-dashboard-tooltip-content"
  }, "Plugin Name"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Action", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bs-dashboard-tooltip"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_info_circled_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    width: 16,
    height: 16
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "bs-dashboard-tooltip-content"
  }, "Plugin Action"))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, "Elementor"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#"
  }, "Check", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 16,
    height: 16
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, "WooCommerch"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#"
  }, "Check", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 16,
    height: 16
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, "JetPack"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#"
  }, "Check", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 16,
    height: 16
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, "Funnel Kit"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#"
  }, "Check", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 16,
    height: 16
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, "WP Rocket"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#"
  }, "Check", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 16,
    height: 16
  })))))))));
}

/***/ }),

/***/ "./resources/svg/icon/arrow-right.svg":
/*!********************************************!*\
  !*** ./resources/svg/icon/arrow-right.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgArrowRight),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgArrowRight = function SvgArrowRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 18,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#006EFF",
    d: "M11.457 9.709H2.833V8.292h8.624L7.491 4.325 8.5 3.333 14.167 9 8.5 14.667l-1.01-.992z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjQ1NzMgOS43MDg1SDIuODMzMzdWOC4yOTE4M0gxMS40NTczTDcuNDkwNjcgNC4zMjUxNkw4LjUwMDA0IDMuMzMzNUwxNC4xNjY3IDkuMDAwMTZMOC41MDAwNCAxNC42NjY4TDcuNDkwNjcgMTMuNjc1MkwxMS40NTczIDkuNzA4NVoiIGZpbGw9IiMwMDZFRkYiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./resources/svg/icon/info-circled.svg":
/*!*********************************************!*\
  !*** ./resources/svg/icon/info-circled.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgInfoCircled),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgInfoCircled = function SvgInfoCircled(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 15,
    height: 15,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#000",
    d: "M7.499.877a6.623 6.623 0 1 1 0 13.246 6.623 6.623 0 0 1 0-13.246m0 .95A5.674 5.674 0 1 0 7.5 13.17 5.674 5.674 0 0 0 7.5 1.826m.102 4.183A.5.5 0 0 1 8 6.5V10h1v1H6v-1h1V7H6V6h1.5zM7.5 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNDk5MDIgMC44NzY5NTNDMTEuMTU2NCAwLjg3Njk1MyAxNC4xMjE3IDMuODQxNjkgMTQuMTIyMSA3LjQ5OTAyQzE0LjEyMjEgMTEuMTU2NyAxMS4xNTY3IDE0LjEyMjEgNy40OTkwMiAxNC4xMjIxQzMuODQxNjkgMTQuMTIxNyAwLjg3Njk1MyAxMS4xNTY0IDAuODc2OTUzIDcuNDk5MDJDMC44NzczNjQgMy44NDE5NCAzLjg0MTk0IDAuODc3MzY0IDcuNDk5MDIgMC44NzY5NTNaTTcuNDk5MDIgMS44MjYxN0M0LjM2NjYxIDEuODI2NTggMS44MjY1OCA0LjM2NjYxIDEuODI2MTcgNy40OTkwMkMxLjgyNjE3IDEwLjYzMTggNC4zNjYzNiAxMy4xNzE1IDcuNDk5MDIgMTMuMTcxOUMxMC42MzIgMTMuMTcxOSAxMy4xNzE5IDEwLjYzMiAxMy4xNzE5IDcuNDk5MDJDMTMuMTcxNSA0LjM2NjM2IDEwLjYzMTggMS44MjYxNyA3LjQ5OTAyIDEuODI2MTdaTTcuNjAwNTkgNi4wMDk3N0M3LjgyODUgNi4wNTYzMiA3Ljk5OTk4IDYuMjU4MzMgOCA2LjVWMTBIOVYxMUg2VjEwSDdWN0g2VjZINy41TDcuNjAwNTkgNi4wMDk3N1pNNy41IDMuNzVDNy45MTQxMSAzLjc1MDExIDguMjQ5OTcgNC4wODU4OCA4LjI1IDQuNUM4LjI1IDQuOTE0MTUgNy45MTQxMiA1LjI0OTg5IDcuNSA1LjI1QzcuMDg1NzkgNS4yNSA2Ljc1IDQuOTE0MjEgNi43NSA0LjVDNi43NTAwMyA0LjA4NTgxIDcuMDg1OCAzLjc1IDcuNSAzLjc1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_HomepageContent_ThemeSection_js.js.map