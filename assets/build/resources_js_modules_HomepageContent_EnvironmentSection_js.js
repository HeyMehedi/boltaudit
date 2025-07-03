"use strict";
(globalThis["webpackChunkwpmvc"] = globalThis["webpackChunkwpmvc"] || []).push([["resources_js_modules_HomepageContent_EnvironmentSection_js"],{

/***/ "./resources/js/helper/postData.js":
/*!*****************************************!*\
  !*** ./resources/js/helper/postData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postData)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

async function postData(path, data, config) {
  config = config ? config : {};
  return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: path,
    method: 'POST',
    data,
    ...config
  }).then(res => res).catch(error => {
    return error;
  });
}

/***/ }),

/***/ "./resources/js/modules/HomepageContent/EnvironmentSection.js":
/*!********************************************************************!*\
  !*** ./resources/js/modules/HomepageContent/EnvironmentSection.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnvironmentSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @helper/postData */ "./resources/js/helper/postData.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function EnvironmentSection() {
  const [allData, setAllData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  function flattenOneLevel(obj) {
    const flat = {};
    for (const key in obj) {
      const val = obj[key];
      if (typeof val === "object" && !Array.isArray(val) && val !== null) {
        for (const innerKey in val) {
          flat[innerKey] = val[innerKey];
        }
      } else {
        flat[key] = val;
      }
    }
    return flat;
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_helper_postData__WEBPACK_IMPORTED_MODULE_1__["default"])("boltaudit/reports/environment").then(res => {
      // console.log("Environment Data", res);
      setAllData(res);

      // set first tab as active automatically
      const firstKey = Object.keys(res)[0];
      setActiveTab(firstKey);
    });
  }, []);
  const flattenedData = flattenOneLevel(allData[activeTab]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "ba-dashboard__environment",
    className: "ba-dashboard__content__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "ba-dashboard__content__section__title"
  }, "Environment & Configuration Snapshot"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ba-dashboard__content__section__desc"
  }, "Get a full snapshot of your server and WordPress setup\u2014PHP version, memory limits, upload size, and more. ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "Useful for finding misconfigurations that affect performance or plugin compatibility."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__data"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__tab"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "ba-dashboard__tab__list"
  }, Object.keys(allData).map(tabKey => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: tabKey,
    className: `ba-dashboard__tab__item ${activeTab === tabKey ? "active" : ""}`,
    onClick: () => setActiveTab(tabKey)
  }, tabKey === "wordpress" ? "WordPress" : tabKey === "php" ? "PHP" : tabKey.charAt(0).toUpperCase() + tabKey.slice(1)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__tab__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__tab__content__wrap"
  }, Object.entries(flattenedData).map(([key, value]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: key,
    className: "ba-dashboard__tab__content__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__tab__content__single__title"
  }, key.replace(/_/g, " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__tab__content__single__value"
  }, Array.isArray(value) ? value.join(", ") : value === null ? "null" : typeof value === "boolean" ? value.toString() : value)))))))));
}

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_HomepageContent_EnvironmentSection_js.js.map