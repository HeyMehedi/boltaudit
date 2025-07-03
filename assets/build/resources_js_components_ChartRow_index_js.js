"use strict";
(globalThis["webpackChunkwpmvc"] = globalThis["webpackChunkwpmvc"] || []).push([["resources_js_components_ChartRow_index_js"],{

/***/ "./resources/js/components/ChartRow/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/ChartRow/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");


function ChartRow({
  title,
  value,
  data
}) {
  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05
      }
    },
    markers: {
      size: 4
    },
    tooltip: {
      enabled: false
    },
    grid: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };
  const series = [{
    data
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__chart"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__chart__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "ba-dashboard__chart__title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__chart__count"
  }, value)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__chart__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: options,
    series: series,
    type: "area",
    height: 80
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartRow);

/***/ })

}]);
//# sourceMappingURL=resources_js_components_ChartRow_index_js.js.map