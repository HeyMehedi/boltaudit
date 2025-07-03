"use strict";
(globalThis["webpackChunkwpmvc"] = globalThis["webpackChunkwpmvc"] || []).push([["resources_js_modules_HomepageContentSidebar_APISection_js"],{

/***/ "./resources/js/modules/HomepageContentSidebar/APISection.js":
/*!*******************************************************************!*\
  !*** ./resources/js/modules/HomepageContentSidebar/APISection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ APISection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/dist/index.mjs");
/* harmony import */ var _icon_copy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @icon/copy.svg */ "./resources/svg/icon/copy.svg");
/* harmony import */ var _icon_link_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @icon/link.svg */ "./resources/svg/icon/link.svg");




// Import Images


function APISection() {
  const [copied, setCopied] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const zoneID = "123456";
  function handleCopy(text) {
    if (typeof window !== "undefined" && window.navigator && window.navigator.clipboard && window.isSecureContext) {
      window.navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }).catch(err => {
        console.error("Clipboard write failed: ", err);
      });
    } else {
      console.warn("Clipboard API not available or insecure context");
    }
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__sidebar__widget__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__sidebar__widget__single__top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "ba-dashboard__content__sidebar__widget__single__title"
  }, "API")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__sidebar__widget__single__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "ba-dashboard__content__sidebar__widget__info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "ba-dashboard__content__sidebar__widget__info__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__sidebar__widget__single__subtitle"
  }, "Zone ID"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__sidebar__widget__single__code",
    onClick: () => handleCopy(zoneID),
    style: {
      cursor: "pointer",
      position: "relative"
    }
  }, zoneID, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_copy_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 16,
    height: 16
  }), copied && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      position: "absolute",
      top: "-20px",
      left: "0",
      background: "#000",
      color: "#fff",
      fontSize: "10px",
      padding: "2px 4px",
      borderRadius: "2px"
    }
  }, "Copied!"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "ba-dashboard__content__sidebar__widget__info__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "ba-dashboard__content__sidebar__widget__info__link"
  }, "Get your API token")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "ba-dashboard__content__sidebar__widget__info__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "ba-dashboard__content__sidebar__widget__info__link"
  }, "API documentation", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: _icon_link_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    width: 16,
    height: 16
  }))))));
}

/***/ }),

/***/ "./resources/svg/icon/copy.svg":
/*!*************************************!*\
  !*** ./resources/svg/icon/copy.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgCopy),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgCopy = function SvgCopy(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 17,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#667085",
    d: "M6 12.5q-.55 0-.942-.392a1.28 1.28 0 0 1-.391-.941v-8q0-.55.391-.942T6 1.833h6q.55 0 .942.392.39.392.391.942v8q0 .55-.391.941A1.28 1.28 0 0 1 12 12.5zm0-1.333h6v-8H6zm-2.667 4q-.55 0-.941-.392A1.28 1.28 0 0 1 2 13.834V5.167q0-.284.192-.475a.65.65 0 0 1 .475-.192q.283 0 .475.192a.65.65 0 0 1 .191.475v8.667H10q.283 0 .475.191a.65.65 0 0 1 .192.475.65.65 0 0 1-.192.475.65.65 0 0 1-.475.192z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTIuNTAwMkM1LjYzMzMzIDEyLjUwMDIgNS4zMTk0NCAxMi4zNjk2IDUuMDU4MzMgMTIuMTA4NUM0Ljc5NzIyIDExLjg0NzQgNC42NjY2NyAxMS41MzM1IDQuNjY2NjcgMTEuMTY2OFYzLjE2NjgzQzQuNjY2NjcgMi44MDAxNiA0Ljc5NzIyIDIuNDg2MjcgNS4wNTgzMyAyLjIyNTE2QzUuMzE5NDQgMS45NjQwNSA1LjYzMzMzIDEuODMzNSA2IDEuODMzNUgxMkMxMi4zNjY3IDEuODMzNSAxMi42ODA2IDEuOTY0MDUgMTIuOTQxNyAyLjIyNTE2QzEzLjIwMjggMi40ODYyNyAxMy4zMzMzIDIuODAwMTYgMTMuMzMzMyAzLjE2NjgzVjExLjE2NjhDMTMuMzMzMyAxMS41MzM1IDEzLjIwMjggMTEuODQ3NCAxMi45NDE3IDEyLjEwODVDMTIuNjgwNiAxMi4zNjk2IDEyLjM2NjcgMTIuNTAwMiAxMiAxMi41MDAySDZaTTYgMTEuMTY2OEgxMlYzLjE2NjgzSDZWMTEuMTY2OFpNMy4zMzMzMyAxNS4xNjY4QzIuOTY2NjcgMTUuMTY2OCAyLjY1Mjc4IDE1LjAzNjMgMi4zOTE2NyAxNC43NzUyQzIuMTMwNTYgMTQuNTE0MSAyIDE0LjIwMDIgMiAxMy44MzM1VjUuMTY2ODNDMiA0Ljk3Nzk0IDIuMDYzODkgNC44MTk2MSAyLjE5MTY3IDQuNjkxODNDMi4zMTk0NCA0LjU2NDA1IDIuNDc3NzggNC41MDAxNiAyLjY2NjY3IDQuNTAwMTZDMi44NTU1NiA0LjUwMDE2IDMuMDEzODkgNC41NjQwNSAzLjE0MTY3IDQuNjkxODNDMy4yNjk0NCA0LjgxOTYxIDMuMzMzMzMgNC45Nzc5NCAzLjMzMzMzIDUuMTY2ODNWMTMuODMzNUgxMEMxMC4xODg5IDEzLjgzMzUgMTAuMzQ3MiAxMy44OTc0IDEwLjQ3NSAxNC4wMjUyQzEwLjYwMjggMTQuMTUyOSAxMC42NjY3IDE0LjMxMTMgMTAuNjY2NyAxNC41MDAyQzEwLjY2NjcgMTQuNjg5MSAxMC42MDI4IDE0Ljg0NzQgMTAuNDc1IDE0Ljk3NTJDMTAuMzQ3MiAxNS4xMDI5IDEwLjE4ODkgMTUuMTY2OCAxMCAxNS4xNjY4SDMuMzMzMzNaIiBmaWxsPSIjNjY3MDg1Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./resources/svg/icon/link.svg":
/*!*************************************!*\
  !*** ./resources/svg/icon/link.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgLink),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgLink = function SvgLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#006EFF",
    d: "M3.333 14q-.55 0-.941-.392A1.28 1.28 0 0 1 2 12.667V3.333q0-.55.392-.941Q2.783 2 3.333 2h4q.285 0 .475.192A.65.65 0 0 1 8 2.667a.65.65 0 0 1-.192.475.65.65 0 0 1-.475.191h-4v9.334h9.334v-4q0-.285.191-.475A.65.65 0 0 1 13.333 8q.285 0 .475.192a.65.65 0 0 1 .192.475v4q0 .55-.392.941a1.28 1.28 0 0 1-.941.392zm9.334-9.733L6.933 10a.63.63 0 0 1-.466.183A.63.63 0 0 1 6 10a.63.63 0 0 1-.183-.467q0-.283.183-.466l5.733-5.734H10a.65.65 0 0 1-.475-.191.65.65 0 0 1-.192-.475q0-.285.192-.475A.65.65 0 0 1 10 2h3.333q.285 0 .475.192a.65.65 0 0 1 .192.475V6a.65.65 0 0 1-.192.475.65.65 0 0 1-.475.192.65.65 0 0 1-.475-.192.65.65 0 0 1-.191-.475z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMzMzMzMgMTRDMi45NjY2NyAxNCAyLjY1Mjc4IDEzLjg2OTQgMi4zOTE2NyAxMy42MDgzQzIuMTMwNTYgMTMuMzQ3MiAyIDEzLjAzMzMgMiAxMi42NjY3VjMuMzMzMzNDMiAyLjk2NjY3IDIuMTMwNTYgMi42NTI3OCAyLjM5MTY3IDIuMzkxNjdDMi42NTI3OCAyLjEzMDU2IDIuOTY2NjcgMiAzLjMzMzMzIDJINy4zMzMzM0M3LjUyMjIyIDIgNy42ODA1NiAyLjA2Mzg5IDcuODA4MzMgMi4xOTE2N0M3LjkzNjExIDIuMzE5NDQgOCAyLjQ3Nzc4IDggMi42NjY2N0M4IDIuODU1NTYgNy45MzYxMSAzLjAxMzg5IDcuODA4MzMgMy4xNDE2N0M3LjY4MDU2IDMuMjY5NDQgNy41MjIyMiAzLjMzMzMzIDcuMzMzMzMgMy4zMzMzM0gzLjMzMzMzVjEyLjY2NjdIMTIuNjY2N1Y4LjY2NjY3QzEyLjY2NjcgOC40Nzc3OCAxMi43MzA2IDguMzE5NDQgMTIuODU4MyA4LjE5MTY3QzEyLjk4NjEgOC4wNjM4OSAxMy4xNDQ0IDggMTMuMzMzMyA4QzEzLjUyMjIgOCAxMy42ODA2IDguMDYzODkgMTMuODA4MyA4LjE5MTY3QzEzLjkzNjEgOC4zMTk0NCAxNCA4LjQ3Nzc4IDE0IDguNjY2NjdWMTIuNjY2N0MxNCAxMy4wMzMzIDEzLjg2OTQgMTMuMzQ3MiAxMy42MDgzIDEzLjYwODNDMTMuMzQ3MiAxMy44Njk0IDEzLjAzMzMgMTQgMTIuNjY2NyAxNEgzLjMzMzMzWk0xMi42NjY3IDQuMjY2NjdMNi45MzMzMyAxMEM2LjgxMTExIDEwLjEyMjIgNi42NTU1NiAxMC4xODMzIDYuNDY2NjcgMTAuMTgzM0M2LjI3Nzc4IDEwLjE4MzMgNi4xMjIyMiAxMC4xMjIyIDYgMTBDNS44Nzc3OCA5Ljg3Nzc4IDUuODE2NjcgOS43MjIyMiA1LjgxNjY3IDkuNTMzMzNDNS44MTY2NyA5LjM0NDQ0IDUuODc3NzggOS4xODg4OSA2IDkuMDY2NjdMMTEuNzMzMyAzLjMzMzMzSDEwQzkuODExMTEgMy4zMzMzMyA5LjY1Mjc4IDMuMjY5NDQgOS41MjUgMy4xNDE2N0M5LjM5NzIyIDMuMDEzODkgOS4zMzMzMyAyLjg1NTU2IDkuMzMzMzMgMi42NjY2N0M5LjMzMzMzIDIuNDc3NzggOS4zOTcyMiAyLjMxOTQ0IDkuNTI1IDIuMTkxNjdDOS42NTI3OCAyLjA2Mzg5IDkuODExMTEgMiAxMCAySDEzLjMzMzNDMTMuNTIyMiAyIDEzLjY4MDYgMi4wNjM4OSAxMy44MDgzIDIuMTkxNjdDMTMuOTM2MSAyLjMxOTQ0IDE0IDIuNDc3NzggMTQgMi42NjY2N1Y2QzE0IDYuMTg4ODkgMTMuOTM2MSA2LjM0NzIyIDEzLjgwODMgNi40NzVDMTMuNjgwNiA2LjYwMjc4IDEzLjUyMjIgNi42NjY2NyAxMy4zMzMzIDYuNjY2NjdDMTMuMTQ0NCA2LjY2NjY3IDEyLjk4NjEgNi42MDI3OCAxMi44NTgzIDYuNDc1QzEyLjczMDYgNi4zNDcyMiAxMi42NjY3IDYuMTg4ODkgMTIuNjY2NyA2VjQuMjY2NjdaIiBmaWxsPSIjMDA2RUZGIi8+Cjwvc3ZnPgo=");

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_HomepageContentSidebar_APISection_js.js.map