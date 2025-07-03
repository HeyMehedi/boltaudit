"use strict";
(globalThis["webpackChunkwpmvc"] = globalThis["webpackChunkwpmvc"] || []).push([["resources_js_modules_HomepageContent_PostSection_js"],{

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

/***/ "./resources/js/modules/HomepageContent/PostSection.js":
/*!*************************************************************!*\
  !*** ./resources/js/modules/HomepageContent/PostSection.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ContentLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ContentLoading */ "./resources/js/components/ContentLoading/index.js");
/* harmony import */ var _components_CountUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/CountUp */ "./resources/js/components/CountUp/index.js");
/* harmony import */ var _helper_postData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helper/postData */ "./resources/js/helper/postData.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);





function PostSection() {
  const [dataFetched, setDataFetched] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [allData, setAllData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    (0,_helper_postData__WEBPACK_IMPORTED_MODULE_3__["default"])("boltaudit/reports/posts").then(res => {
      const data = res;
      // console.log("Post Data", { data });

      setAllData(data);
      setDataFetched(true);
    });
  }, []);
  const postType = dataFetched ? Object.keys(allData.post_types).reduce((acc, key) => {
    acc[key] = {
      totalType: allData.total_posts || 0,
      countType: allData.post_types[key] || 0,
      totalMeta: allData.post_meta_total || 0,
      countMeta: allData.post_meta_by_type[key] || 0
    };
    return acc;
  }, {}) : null;
  return dataFetched ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "ba-dashboard__post",
    className: "ba-dashboard__content__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "ba-dashboard__content__section__title"
  }, "Post Type & Metadata Overview"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ba-dashboard__content__section__desc"
  }, "See how many posts, pages, and custom content types your site has\u2014plus how much metadata is attached.", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "Quickly spot unused or bloated content types that may be slowing things down."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__title"
  }, "Total"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__count"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    target: allData.total_posts
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__title"
  }, "Types"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__count"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    target: allData.post_meta_by_type.page
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__title"
  }, "Meta"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__count"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    target: allData.post_meta_total
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__title"
  }, "Revisions"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__count"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    target: allData.revisions
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__data"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "ba-dashboard__content__section__data__post"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Type"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Total"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Meta"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, Object.entries(postType).map(([key, value]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: key
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, key.charAt(0).toUpperCase() + key.slice(1)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "data-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "data-count"
  }, value.countType), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "data-progress-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "data-progress",
    style: {
      width: `${value.countType * 100 / value.totalType}%`
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "data-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "data-count"
  }, value.countMeta), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "data-progress-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "data-progress",
    style: {
      width: `${value.countMeta * 100 / value.totalMeta}%`
    }
  }))))))))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ContentLoading__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_HomepageContent_PostSection_js.js.map