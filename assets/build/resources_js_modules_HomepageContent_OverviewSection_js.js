"use strict";
(globalThis["webpackChunkwpmvc"] = globalThis["webpackChunkwpmvc"] || []).push([["resources_js_modules_HomepageContent_OverviewSection_js"],{

/***/ "./resources/js/modules/HomepageContent/OverviewSection.js":
/*!*****************************************************************!*\
  !*** ./resources/js/modules/HomepageContent/OverviewSection.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OverviewSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/dist/index.mjs");
/* harmony import */ var _icon_check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @icon/check.svg */ "./resources/svg/icon/check.svg");



const ChartRow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-apexcharts_dist_react-apexcharts_min_js"), __webpack_require__.e("resources_js_components_ChartRow_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @components/ChartRow */ "./resources/js/components/ChartRow/index.js")));

// Import Images


// Sample data by time range
const sampleData = {
  "24hours": {
    visitors: [10, 30, 45, 70, 50, 65, 60, 80, 50, 40, 30, 70],
    requests: [20, 50, 40, 100, 60, 40, 50, 70, 60, 45, 35, 25],
    cached: Array(12).fill(0),
    saved: [5, 20, 35, 50, 30, 60, 45, 70, 50, 30, 20, 40],
    summary: {
      visitors: 313,
      requests: "1.5K",
      cached: "0%",
      saved: "35 MB"
    }
  },
  "7days": {
    visitors: [100, 150, 130, 120, 180, 160, 140],
    requests: [300, 400, 350, 370, 420, 390, 310],
    cached: Array(7).fill(0),
    saved: [120, 180, 160, 200, 190, 170, 150],
    summary: {
      visitors: 1023,
      requests: "7.2K",
      cached: "0%",
      saved: "210 MB"
    }
  },
  "30days": {
    visitors: Array(30).fill().map(() => Math.floor(Math.random() * 200)),
    requests: Array(30).fill().map(() => Math.floor(Math.random() * 500)),
    cached: Array(30).fill(0),
    saved: Array(30).fill().map(() => Math.floor(Math.random() * 100)),
    summary: {
      visitors: 7431,
      requests: "29.3K",
      cached: "0%",
      saved: "1.2 GB"
    }
  }
};
function getDateRange(tabKey) {
  const today = new Date();
  let startDate = new Date();
  if (tabKey === "24hours") {
    startDate.setDate(today.getDate() - 1);
  } else if (tabKey === "7days") {
    startDate.setDate(today.getDate() - 6); // today + 6 days = 7 total
  } else if (tabKey === "30days") {
    startDate.setDate(today.getDate() - 29); // today + 29 = 30 total
  }
  const format = date => date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short"
  });
  return `${format(startDate)} - ${format(today)}`;
}
function OverviewSection() {
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("24hours");
  const chartData = sampleData[activeTab];
  function handleTab(item) {
    setActiveTab(item);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "ba-dashboard__overview",
    className: "ba-dashboard__content__overview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__overview__top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__overview__subtitle"
  }, "Overview"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__overview__intro"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ba-dashboard__content__overview__title"
  }, "heymehedi.com"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__overview__badge"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__overview__badge__single active"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: _icon_check_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 16,
    height: 16
  }), "Active"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__overview__badge__single"
  }, "Star"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__overview__badge__single"
  }, "Free plan"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ba-dashboard__content__overview__desc"
  }, "Monitor security and performance for heymehedi.com. Configure products and services from the menu."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "ba-dashboard__content__overview__btn ba-dashboard__btn"
  }, "Review BottAudit Fundamentals"))));
}

/***/ }),

/***/ "./resources/svg/icon/check.svg":
/*!**************************************!*\
  !*** ./resources/svg/icon/check.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgCheck),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 15,
    height: 15,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#000",
    d: "M10.602 3.908a.626.626 0 0 1 1.047.684l-4.25 6.5a.626.626 0 0 1-.945.12l-2.75-2.5-.084-.094a.626.626 0 0 1 .823-.906l.103.075 2.207 2.006z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjYwMTYgMy45MDgxNEMxMC43OTA1IDMuNjE5MzkgMTEuMTc4IDMuNTM3OTEgMTEuNDY2OSAzLjcyNjVDMTEuNzU1NiAzLjkxNTMyIDExLjgzNzEgNC4zMDI4NyAxMS42NDg1IDQuNTkxNzNMNy4zOTg1IDExLjA5MTdDNy4yOTgzNCAxMS4yNDQ5IDcuMTM1NzEgMTEuMzQ2OSA2Ljk1NDE2IDExLjM3MDFDNi43NzI2MyAxMS4zOTMyIDYuNTg5NTcgMTEuMzM1OSA2LjQ1NDE2IDExLjIxMjhMMy43MDQxNiA4LjcxMjgzTDMuNjIwMTggOC42MTgxQzMuNDQ4NjkgOC4zODM0IDMuNDU5MDIgOC4wNTI1IDMuNjYyMTcgNy44MjkwNEMzLjg2NTIzIDcuNjA1NzUgNC4xOTM1NiA3LjU2MzY5IDQuNDQzNDIgNy43MTE4NUw0LjU0NTk2IDcuNzg3MDRMNi43NTI5OSA5Ljc5MjlMMTAuNjAxNiAzLjkwODE0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_HomepageContent_OverviewSection_js.js.map