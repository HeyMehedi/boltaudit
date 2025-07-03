"use strict";
(globalThis["webpackChunkwpmvc"] = globalThis["webpackChunkwpmvc"] || []).push([["resources_js_modules_HomepageContent_WoocommerceSection_js"],{

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

/***/ "./resources/js/modules/HomepageContent/WoocommerceSection.js":
/*!********************************************************************!*\
  !*** ./resources/js/modules/HomepageContent/WoocommerceSection.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WoocommerceSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CountUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/CountUp */ "./resources/js/components/CountUp/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function WoocommerceSection() {
  const data = {
    php: {
      version: "8.2.27",
      sapi: "fpm-fcgi",
      user: "riaz",
      ini_values: {
        max_execution_time: "1200",
        memory_limit: "256M",
        upload_max_filesize: "300M",
        post_max_size: "1000M",
        display_errors: "1",
        log_errors: "1"
      },
      extensions: ["Core", "FFI", "PDO", "Phar", "Reflection", "SPL", "SimpleXML", "Zend OPcache", "bcmath", "bz2", "calendar", "cgi-fcgi", "ctype", "curl", "date", "dom", "exif", "fileinfo", "filter", "ftp", "gd", "gettext", "hash", "iconv", "imagick", "intl", "json", "libxml", "mbstring", "mysqli", "mysqlnd", "openssl", "pcntl", "pcre", "pdo_mysql", "pdo_sqlite", "posix", "random", "readline", "session", "shmop", "soap", "sockets", "sodium", "sqlite3", "standard", "sysvmsg", "sysvsem", "sysvshm", "tidy", "tokenizer", "xdebug", "xml", "xmlreader", "xmlwriter", "xsl", "zip", "zlib"],
      error_reporting: 4983
    },
    server: {
      software: "nginx/1.26.1",
      address: "127.0.0.1",
      os: "Darwin 24.5.0",
      host: "Ibrahims-MacBook-Air.local",
      arch: "x86_64"
    },
    wordpress: {
      version: "6.8.1",
      constants: {
        WP_DEBUG: false,
        WP_DEBUG_DISPLAY: true,
        WP_DEBUG_LOG: false,
        SCRIPT_DEBUG: false,
        WP_CACHE: false,
        CONCATENATE_SCRIPTS: null,
        COMPRESS_SCRIPTS: null,
        COMPRESS_CSS: null
      },
      environment_type: "local",
      development_mode: ""
    },
    database: {
      database_name: "local",
      database_user: "root",
      database_host: "localhost",
      server_version: "8.0.35"
    }
  };
  const tabKeys = Object.keys(data);
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(tabKeys[0]);
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
  const flattenedActiveData = flattenOneLevel(data[activeTab]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "ba-dashboard__woocommerce",
    className: "ba-dashboard__content__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "ba-dashboard__content__section__title"
  }, "Woocommerce"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ba-dashboard__content__section__desc"
  }, "Review HTTP/S requests processed by Cloudfare to assess threats and tune configurations."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "ba-dashboard__content__section__btn ba-dashboard__btn"
  }, "Security analytics documentation"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__overview"
  }, [{
    title: "Total",
    count: 5.92
  }, {
    title: "Types",
    count: 6.54
  }, {
    title: "Meta",
    count: 8.36
  }, {
    title: "Revisions",
    count: 4.79
  }, {
    title: "Total",
    count: 8.75
  }, {
    title: "Types",
    count: 6.47
  }, {
    title: "Meta",
    count: 9.58
  }, {
    title: "Revisions",
    count: 7.92
  }].map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "ba-dashboard__content__section__overview__single"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__title"
  }, item.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ba-dashboard__content__section__overview__count"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountUp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    target: item.count,
    float: true
  }), "K")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__section__data"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__tab"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "ba-dashboard__tab__list"
  }, tabKeys.map(tabKey => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: tabKey,
    className: `ba-dashboard__tab__item ${activeTab === tabKey ? "active" : ""}`,
    onClick: () => setActiveTab(tabKey)
  }, tabKey.charAt(0).toUpperCase() + tabKey.slice(1)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__tab__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__tab__content__wrap"
  }, Object.entries(flattenedActiveData).map(([key, value]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
//# sourceMappingURL=resources_js_modules_HomepageContent_WoocommerceSection_js.js.map