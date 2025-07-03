"use strict";
(globalThis["webpackChunkwpmvc"] = globalThis["webpackChunkwpmvc"] || []).push([["resources_js_pages_HomePage_js"],{

/***/ "./resources/js/components/ContentLoading/Style.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/ContentLoading/Style.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentLoadingStyle: () => (/* binding */ ContentLoadingStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const ContentLoadingStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    &.ba-content-loading{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 100%;
        min-height: 150px;
        padding: 0;
        border-radius: 10px;
        margin: 0;
        box-sizing: border-box;
        background-color: var(--ba-color-white);
        flex: 1 1 0%;
        .ba-shimmer-effect{
            display: block;
            height: 16px;
            width: 100%;
            text-align: left;
            background: #cccccc;
            mask: linear-gradient(-90deg, #000 10%, #0005, #000 70%) right/350% 100%;
            animation: shimmerEffect 2s infinite;
            display: inline-block;
            position: relative;
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
        .ba-content-loading__image {
            height: 200px;
        }
        .ba-content-loading__single {
            height: 32px;
        }
    }
`;


/***/ }),

/***/ "./resources/js/components/ContentLoading/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/ContentLoading/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style */ "./resources/js/components/ContentLoading/Style.js");


const ContentLoading = props => {
  const {
    style,
    type
  } = props;
  const defaultStyle = {
    minHeight: "150px"
  };
  const loaderStyle = style ? {
    ...defaultStyle,
    ...style
  } : defaultStyle;
  const handleContentLoading = type => {
    switch (type) {
      case "single":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__single ba-shimmer-effect"
        });
      case "image":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect"
        }));
      case "full":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-row"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-12",
          style: {
            marginTop: "25px"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-row"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-4"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__single ba-shimmer-effect"
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-4"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__single ba-shimmer-effect"
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-4"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__single ba-shimmer-effect"
        })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-3",
          style: {
            marginTop: "24px"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-9"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-row"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })))));
      case "sidebar":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            marginBottom: "70px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })));
      case "allTemplate":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-row"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "ba-col-xxl-4 ba-col-6",
          style: {
            marginBottom: "24px",
            textAlign: "left"
          }
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-content-loading__image ba-shimmer-effect",
          style: {
            marginBottom: "20px"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        })));
      default:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect"
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "75%"
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "ba-shimmer-effect",
          style: {
            width: "50%"
          }
        }));
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Style__WEBPACK_IMPORTED_MODULE_1__.ContentLoadingStyle, {
    style: loaderStyle,
    className: "ba-content-loading"
  }, handleContentLoading(type));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentLoading);

/***/ }),

/***/ "./resources/js/helper/checkClickedOutside.js":
/*!****************************************************!*\
  !*** ./resources/js/helper/checkClickedOutside.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkedClickedOutside: () => (/* binding */ checkedClickedOutside)
/* harmony export */ });
function checkedClickedOutside(activeDropdown, setActiveDropdown, refs) {
  function handleClickOutside(event) {
    if (!activeDropdown) return;
    const currentRef = refs[activeDropdown];
    if (currentRef && currentRef.current && !currentRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}

/***/ }),

/***/ "./resources/js/layout/AppLayout.js":
/*!******************************************!*\
  !*** ./resources/js/layout/AppLayout.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layout/Header */ "./resources/js/layout/Header/index.js");
/* harmony import */ var _layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layout/Sidebar */ "./resources/js/layout/Sidebar/index.js");



const AppLayout = ({
  children
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], null), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);

/***/ }),

/***/ "./resources/js/layout/Header/index.js":
/*!*********************************************!*\
  !*** ./resources/js/layout/Header/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-QMGIS6GS.mjs");
/* harmony import */ var _helper_checkClickedOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @helper/checkClickedOutside */ "./resources/js/helper/checkClickedOutside.js");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/logo.svg */ "./resources/svg/logo.svg");




// Import Images


const Header = props => {
  const [activeDropdown, setActiveDropdown] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  function handleDropdown(item) {
    if (item === activeDropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  }
  const dropdownRefs = {
    support: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),
    add: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return (0,_helper_checkClickedOutside__WEBPACK_IMPORTED_MODULE_2__.checkedClickedOutside)(activeDropdown, setActiveDropdown, dropdownRefs);
  }, [activeDropdown]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
    className: "ba-dashboard__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/",
    className: "ba-dashboard__header__logo"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "ba-dashboard__header__logo__img",
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "Logo"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__header__content"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./resources/js/layout/Sidebar/index.js":
/*!**********************************************!*\
  !*** ./resources/js/layout/Sidebar/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/dist/index.mjs");
/* harmony import */ var _icon_reader_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @icon/reader.svg */ "./resources/svg/icon/reader.svg");




const sections = [{
  id: "ba-dashboard__post",
  name: "Post"
}, {
  id: "ba-dashboard__environment",
  name: "Environment"
}];
const Sidebar = props => {
  const [activeSection, setActiveSection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [isSidebarFixed, setIsSidebarFixed] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  function handleSection(item) {
    setActiveSection(item);
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const sectionIds = sections.map(section => section.id);
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let current = sectionIds[0];
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
      setIsSidebarFixed(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    className: `ba-dashboard__sidebar ${isSidebarFixed ? "sidebar-fixed" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "ba-dashboard__sidebar__menu"
  }, sections.map(section => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: section.id,
    className: "ba-dashboard__sidebar__menu__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `#${section.id}`,
    className: `ba-dashboard__sidebar__menu__link ${activeSection === section.id ? "active" : ""}`,
    onClick: () => handleSection(section.id)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: _icon_reader_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 20,
    height: 20
  }), section.name)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./resources/js/modules/HomepageContent/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/modules/HomepageContent/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomepageContentModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ContentLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ContentLoading */ "./resources/js/components/ContentLoading/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



const OverviewSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContent_OverviewSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./OverviewSection */ "./resources/js/modules/HomepageContent/OverviewSection.js")));
const RecommendationSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContent_RecommendationSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./RecommendationSection */ "./resources/js/modules/HomepageContent/RecommendationSection.js")));
const PluginSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContent_PluginSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./PluginSection */ "./resources/js/modules/HomepageContent/PluginSection.js")));
const ThemeSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContent_ThemeSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ThemeSection */ "./resources/js/modules/HomepageContent/ThemeSection.js")));
const PostSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContent_PostSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./PostSection */ "./resources/js/modules/HomepageContent/PostSection.js")));
const WoocommerceSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContent_WoocommerceSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./WoocommerceSection */ "./resources/js/modules/HomepageContent/WoocommerceSection.js")));
const EnvironmentSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContent_EnvironmentSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./EnvironmentSection */ "./resources/js/modules/HomepageContent/EnvironmentSection.js")));
function HomepageContentModule() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
    fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ContentLoading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostSection, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
    fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ContentLoading__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EnvironmentSection, null)));
}

/***/ }),

/***/ "./resources/js/modules/HomepageContentSidebar/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/modules/HomepageContentSidebar/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomepageContentSidebarModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const NavSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContentSidebar_NavSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./NavSection */ "./resources/js/modules/HomepageContentSidebar/NavSection.js")));
const QuickInfoSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContentSidebar_QuickInfoSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./QuickInfoSection */ "./resources/js/modules/HomepageContentSidebar/QuickInfoSection.js")));
const SubscriptionSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContentSidebar_SubscriptionSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./SubscriptionSection */ "./resources/js/modules/HomepageContentSidebar/SubscriptionSection.js")));
const RegistrationSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContentSidebar_RegistrationSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrationSection */ "./resources/js/modules/HomepageContentSidebar/RegistrationSection.js")));
const ActionSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContentSidebar_ActionSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ActionSection */ "./resources/js/modules/HomepageContentSidebar/ActionSection.js")));
const APISection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "resources_js_modules_HomepageContentSidebar_APISection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./APISection */ "./resources/js/modules/HomepageContentSidebar/APISection.js")));

// Import Images

function HomepageContentSidebarModule() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__sidebar__widget"
  }));
}

/***/ }),

/***/ "./resources/js/pages/HomePage.js":
/*!****************************************!*\
  !*** ./resources/js/pages/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layout/AppLayout */ "./resources/js/layout/AppLayout.js");
/* harmony import */ var _modules_HomepageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/HomepageContent */ "./resources/js/modules/HomepageContent/index.js");
/* harmony import */ var _modules_HomepageContentSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/HomepageContentSidebar */ "./resources/js/modules/HomepageContentSidebar/index.js");




const SectionContent = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ba-dashboard__content__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_modules_HomepageContent__WEBPACK_IMPORTED_MODULE_2__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_modules_HomepageContentSidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionContent);

/***/ }),

/***/ "./resources/svg/icon/reader.svg":
/*!***************************************!*\
  !*** ./resources/svg/icon/reader.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgReader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgReader = function SvgReader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 15,
    height: 15,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#000",
    d: "M10.8 1c.317 0 .591 0 .814.02.23.022.458.07.67.2l.145.102a1.5 1.5 0 0 1 .35.394l.083.162c.07.164.101.335.117.508.022.223.021.497.021.814v8.6c0 .317 0 .591-.02.814a1.7 1.7 0 0 1-.118.508l-.083.162a1.5 1.5 0 0 1-.35.394l-.145.101c-.212.13-.44.179-.67.2-.223.022-.497.021-.814.021H4.2c-.317 0-.591 0-.814-.02a1.7 1.7 0 0 1-.508-.118l-.162-.083a1.5 1.5 0 0 1-.394-.35l-.101-.145a1.5 1.5 0 0 1-.2-.67C1.999 12.391 2 12.117 2 11.8V3.2c0-.317 0-.591.02-.814.022-.23.07-.458.2-.67l.102-.145a1.5 1.5 0 0 1 .394-.35l.162-.083a1.7 1.7 0 0 1 .508-.117C3.609.999 3.883 1 4.2 1zM4.2 2a9 9 0 0 0-.72.017 1 1 0 0 0-.168.027l-.074.03a.5.5 0 0 0-.092.072l-.073.092c-.017.029-.041.086-.056.242A9 9 0 0 0 3 3.2v8.6c0 .337.001.555.017.72.015.156.039.213.056.242l.073.091a.5.5 0 0 0 .092.074l.074.03c.037.01.09.019.168.026.165.016.383.017.72.017h6.6c.337 0 .555-.001.72-.017.156-.014.213-.039.242-.056l.091-.073a.5.5 0 0 0 .074-.092l.03-.074c.01-.037.019-.09.026-.168.016-.165.017-.383.017-.72V3.2c0-.337-.001-.555-.017-.72a1 1 0 0 0-.027-.168l-.03-.074a.5.5 0 0 0-.072-.092l-.092-.073c-.029-.017-.086-.041-.242-.056A9 9 0 0 0 10.8 2zM8 10a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm.1-2.99a.5.5 0 0 1 0 .98L10 5H5a.5.5 0 0 1 0-1h5z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjc5OTggMUMxMS4xMTc1IDEgMTEuMzkxNCAwLjk5OTMxOCAxMS42MTQzIDEuMDIwNTFDMTEuODQ0NSAxLjA0MjQzIDEyLjA3MjMgMS4wOTA4NSAxMi4yODQyIDEuMjIwNzFMMTIuNDI4NyAxLjMyMjI3QzEyLjU2NzQgMS40MzE2MSAxMi42ODY1IDEuNTY0NDkgMTIuNzc5MyAxLjcxNTgyTDEyLjg2MjMgMS44Nzc5M0MxMi45MzE3IDIuMDQyMDIgMTIuOTYzMSAyLjIxMzE0IDEyLjk3OTUgMi4zODU3NEMxMy4wMDA3IDIuNjA4NjMgMTMgMi44ODI1NCAxMyAzLjIwMDJWMTEuNzk5OEMxMyAxMi4xMTc1IDEzLjAwMDcgMTIuMzkxNCAxMi45Nzk1IDEyLjYxNDNDMTIuOTYzMSAxMi43ODY5IDEyLjkzMTcgMTIuOTU4IDEyLjg2MjMgMTMuMTIyMUwxMi43NzkzIDEzLjI4NDJDMTIuNjg2NSAxMy40MzU1IDEyLjU2NzQgMTMuNTY4NCAxMi40Mjg3IDEzLjY3NzdMMTIuMjg0MiAxMy43NzkzQzEyLjA3MjMgMTMuOTA5MiAxMS44NDQ1IDEzLjk1NzYgMTEuNjE0MyAxMy45Nzk1QzExLjM5MTQgMTQuMDAwNyAxMS4xMTc1IDE0IDEwLjc5OTggMTRINC4yMDAyQzMuODgyNTQgMTQgMy42MDg2MyAxNC4wMDA3IDMuMzg1NzQgMTMuOTc5NUMzLjIxMzE0IDEzLjk2MzEgMy4wNDIwMiAxMy45MzE3IDIuODc3OTMgMTMuODYyM0wyLjcxNTgyIDEzLjc3OTNDMi41NjQ0OSAxMy42ODY1IDIuNDMxNjEgMTMuNTY3NCAyLjMyMjI3IDEzLjQyODdMMi4yMjA3MSAxMy4yODQyQzIuMDkwODUgMTMuMDcyMyAyLjA0MjQzIDEyLjg0NDUgMi4wMjA1MSAxMi42MTQzQzEuOTk5MzIgMTIuMzkxNCAyIDEyLjExNzUgMiAxMS43OTk4VjMuMjAwMkMyIDIuODgyNTQgMS45OTkzMiAyLjYwODYzIDIuMDIwNTEgMi4zODU3NEMyLjA0MjQzIDIuMTU1NTMgMi4wOTA4NSAxLjkyNzcyIDIuMjIwNzEgMS43MTU4MkwyLjMyMjI3IDEuNTcxMjlDMi40MzE2MSAxLjQzMjY0IDIuNTY0NDkgMS4zMTM0NyAyLjcxNTgyIDEuMjIwNzFMMi44Nzc5MyAxLjEzNzdDMy4wNDIwMiAxLjA2ODI4IDMuMjEzMTQgMS4wMzY5NCAzLjM4NTc0IDEuMDIwNTFDMy42MDg2MyAwLjk5OTMxOCAzLjg4MjU0IDEgNC4yMDAyIDFIMTAuNzk5OFpNNC4yMDAyIDJDMy44NjMxNyAyIDMuNjQ1MDQgMi4wMDA5NiAzLjQ4MDQ3IDIuMDE2NkMzLjQwMjEgMi4wMjQwNyAzLjM0ODc3IDIuMDMzNjQgMy4zMTE1MyAyLjA0Mzk1TDMuMjM4MjggMi4wNzMyNEMzLjIwNDcgMi4wOTM4NCAzLjE3NDE1IDIuMTE4ODIgMy4xNDY0OSAyLjE0NjQ5TDMuMDczMjQgMi4yMzgyOEMzLjA1NTgxIDIuMjY2NzMgMy4wMzE1NSAyLjMyMzU4IDMuMDE2NiAyLjQ4MDQ3QzMuMDAwOTYgMi42NDUwNCAzIDIuODYzMTcgMyAzLjIwMDJWMTEuNzk5OEMzIDEyLjEzNjggMy4wMDA5NiAxMi4zNTUgMy4wMTY2IDEyLjUxOTVDMy4wMzE1NSAxMi42NzY0IDMuMDU1ODEgMTIuNzMzMyAzLjA3MzI0IDEyLjc2MTdMMy4xNDY0OSAxMi44NTM1QzMuMTc0MTUgMTIuODgxMiAzLjIwNDcgMTIuOTA2MiAzLjIzODI4IDEyLjkyNjhMMy4zMTE1MyAxMi45NTYxQzMuMzQ4NzcgMTIuOTY2NCAzLjQwMjEgMTIuOTc1OSAzLjQ4MDQ3IDEyLjk4MzRDMy42NDUwNCAxMi45OTkgMy44NjMxNyAxMyA0LjIwMDIgMTNIMTAuNzk5OEMxMS4xMzY4IDEzIDExLjM1NSAxMi45OTkgMTEuNTE5NSAxMi45ODM0QzExLjY3NjQgMTIuOTY4NSAxMS43MzMzIDEyLjk0NDIgMTEuNzYxNyAxMi45MjY4TDExLjg1MzUgMTIuODUzNUMxMS44ODEyIDEyLjgyNTkgMTEuOTA2MiAxMi43OTUzIDExLjkyNjggMTIuNzYxN0wxMS45NTYxIDEyLjY4ODVDMTEuOTY2NCAxMi42NTEyIDExLjk3NTkgMTIuNTk3OSAxMS45ODM0IDEyLjUxOTVDMTEuOTk5IDEyLjM1NSAxMiAxMi4xMzY4IDEyIDExLjc5OThWMy4yMDAyQzEyIDIuODYzMTcgMTEuOTk5IDIuNjQ1MDQgMTEuOTgzNCAyLjQ4MDQ3QzExLjk3NTkgMi40MDIxIDExLjk2NjQgMi4zNDg3NyAxMS45NTYxIDIuMzExNTNMMTEuOTI2OCAyLjIzODI4QzExLjkwNjIgMi4yMDQ3IDExLjg4MTIgMi4xNzQxNSAxMS44NTM1IDIuMTQ2NDlMMTEuNzYxNyAyLjA3MzI0QzExLjczMzMgMi4wNTU4MSAxMS42NzY0IDIuMDMxNTUgMTEuNTE5NSAyLjAxNjZDMTEuMzU1IDIuMDAwOTYgMTEuMTM2OCAyIDEwLjc5OTggMkg0LjIwMDJaTTggMTBDOC4yNzYxNCAxMCA4LjUgMTAuMjIzOSA4LjUgMTAuNUM4LjUgMTAuNzc2MSA4LjI3NjE0IDExIDggMTFINUM0LjcyMzg2IDExIDQuNSAxMC43NzYxIDQuNSAxMC41QzQuNSAxMC4yMjM5IDQuNzIzODYgMTAgNSAxMEg4Wk0xMCA3QzEwLjI3NjEgNyAxMC41IDcuMjIzODYgMTAuNSA3LjVDMTAuNSA3Ljc3NjE0IDEwLjI3NjEgOCAxMCA4SDVDNC43MjM4NiA4IDQuNSA3Ljc3NjE0IDQuNSA3LjVDNC41IDcuMjIzODYgNC43MjM4NiA3IDUgN0gxMFpNMTAuMTAwNiA0LjAwOTc3QzEwLjMyODYgNC4wNTYyOSAxMC41IDQuMjU4MjkgMTAuNSA0LjVDMTAuNSA0Ljc0MTcyIDEwLjMyODYgNC45NDM3MSAxMC4xMDA2IDQuOTkwMjRMMTAgNUg1QzQuNzIzODYgNSA0LjUgNC43NzYxNCA0LjUgNC41QzQuNSA0LjIyMzg2IDQuNzIzODYgNCA1IDRIMTBMMTAuMTAwNiA0LjAwOTc3WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./resources/svg/logo.svg":
/*!********************************!*\
  !*** ./resources/svg/logo.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgLogo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 182,
    height: 23,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#0E0E0E",
    d: "M59.06 4.1v12.42c0 2.13-1.72 3.85-3.85 3.85H43.22c-2.13 0-3.85-1.72-3.85-3.85V4.1c0-2.13 1.73-3.85 3.85-3.85h11.99c2.13 0 3.85 1.72 3.85 3.85m-3.62.43c0-.49-.4-.86-.86-.86H43.86c-.46 0-.83.37-.83.86v11.56c0 .49.37.86.83.86h10.72c.46 0 .86-.37.86-.86zM66.02 16.95h11.33v3.42H62.37V.25h3.65zM73.81.25h18v3.42h-7.19v16.7h-3.65V3.67h-7.16zM102.13.25l8.97 20.12h-3.62l-2.21-4.92H94.69l-2.18 4.92h-3.65l9-20.12h4.28zm1.61 11.79-3.77-8.42-3.77 8.42h7.54M128.43.25h3.62v16.27c0 2.13-1.72 3.85-3.85 3.85h-11.99c-2.13 0-3.85-1.72-3.85-3.85V.25h3.65v15.84c0 .49.37.86.83.86h10.72c.46 0 .86-.37.86-.86V.25zM154.94 6.26v8.11c0 3.33-2.7 6.01-6.01 6.01h-13.48V.26h13.48c3.31 0 6.01 2.67 6.01 6.01zm-3.65.4c0-1.64-1.35-2.99-2.99-2.99h-9.2v13.28h9.2c1.64 0 2.99-1.35 2.99-2.99zM157.99 20.37V.25h3.65v20.12zM163.42.25h18v3.42h-7.19v16.7h-3.65V3.67h-7.16zM37.12 4.07C37.12 1.82 35.3 0 33.05 0h-11.6l-1.98 3.66h11.28c.63 0 1.15.51 1.15 1.15v.62c0 1.37-1.11 2.47-2.47 2.47h-3.48l-3.03 3.6h5.94c.67 0 1.22.55 1.22 1.22V15a2.38 2.38 0 0 1-2.38 2.38h-9.72l-2.81 3.34h12.11c4.21 0 7.63-3.42 7.63-7.63 0-1.77-1.33-3.2-3.04-3.41 2.94-.19 5.27-2.62 5.27-5.61z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#E05F1B",
    d: "M25.09 7.88h-4.18l2.59-3.52h-5.19L20.7 0 6.92 2.53h11.61l-.65.75-5.98 1.23h4.93l-.97 1.12L0 7.9h18.05l-1.16 1.76-9.58 1.38 8.4.42-.58.89h2.65l-2.48 4.9-7.42.99 6.67.47-2.17 4.28z"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#E05F1B",
    d: "M16.64 13.13.28 14.54l15.16.96z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIzIiB2aWV3Qm94PSIwIDAgMTgyIDIzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNTkuMDYgNC4xMDAwNFYxNi41MkM1OS4wNiAxOC42NSA1Ny4zNCAyMC4zNyA1NS4yMSAyMC4zN0g0My4yMkM0MS4wOSAyMC4zNyAzOS4zNyAxOC42NSAzOS4zNyAxNi41MlY0LjEwMDA0QzM5LjM3IDEuOTcwMDQgNDEuMSAwLjI1IDQzLjIyIDAuMjVINTUuMjFDNTcuMzQgMC4yNSA1OS4wNiAxLjk3MDA0IDU5LjA2IDQuMTAwMDRaTTU1LjQ0IDQuNTMwMDNDNTUuNDQgNC4wNDAwMyA1NS4wNCAzLjY3MDA0IDU0LjU4IDMuNjcwMDRINDMuODZDNDMuNCAzLjY3MDA0IDQzLjAzIDQuMDQwMDMgNDMuMDMgNC41MzAwM1YxNi4wOUM0My4wMyAxNi41OCA0My40IDE2Ljk1IDQzLjg2IDE2Ljk1SDU0LjU4QzU1LjA0IDE2Ljk1IDU1LjQ0IDE2LjU4IDU1LjQ0IDE2LjA5VjQuNTMwMDNaIiBmaWxsPSIjMEUwRTBFIi8+CjxwYXRoIGQ9Ik02Ni4wMiAxNi45NUg3Ny4zNVYyMC4zN0g2Mi4zN1YwLjI1SDY2LjAyVjE2Ljk1WiIgZmlsbD0iIzBFMEUwRSIvPgo8cGF0aCBkPSJNNzMuODA5OSAwLjI1SDkxLjgwOTlWMy42NzAwNEg4NC42MTk5VjIwLjM3SDgwLjk2OTlWMy42NzAwNEg3My44MDk5VjAuMjVaIiBmaWxsPSIjMEUwRTBFIi8+CjxwYXRoIGQ9Ik0xMDIuMTMgMC4yNUwxMTEuMSAyMC4zN0gxMDcuNDhMMTA1LjI3IDE1LjQ1SDk0LjY5TDkyLjUxIDIwLjM3SDg4Ljg2TDk3Ljg2IDAuMjVIMTAyLjE0SDEwMi4xM1pNMTAzLjc0IDEyLjA0TDk5Ljk3IDMuNjJMOTYuMiAxMi4wNEgxMDMuNzNIMTAzLjc0WiIgZmlsbD0iIzBFMEUwRSIvPgo8cGF0aCBkPSJNMTI4LjQzIDAuMjVIMTMyLjA1VjE2LjUyQzEzMi4wNSAxOC42NSAxMzAuMzMgMjAuMzcgMTI4LjIgMjAuMzdIMTE2LjIxQzExNC4wOCAyMC4zNyAxMTIuMzYgMTguNjUgMTEyLjM2IDE2LjUyVjAuMjVIMTE2LjAxVjE2LjA5QzExNi4wMSAxNi41OCAxMTYuMzggMTYuOTUgMTE2Ljg0IDE2Ljk1SDEyNy41NkMxMjguMDIgMTYuOTUgMTI4LjQyIDE2LjU4IDEyOC40MiAxNi4wOVYwLjI1SDEyOC40M1oiIGZpbGw9IiMwRTBFMEUiLz4KPHBhdGggZD0iTTE1NC45NCA2LjI1OTc3VjE0LjM2OThDMTU0Ljk0IDE3LjY5OTggMTUyLjI0IDIwLjM3OTggMTQ4LjkzIDIwLjM3OThIMTM1LjQ1VjAuMjU5NzY2SDE0OC45M0MxNTIuMjQgMC4yNTk3NjYgMTU0Ljk0IDIuOTI5NzggMTU0Ljk0IDYuMjY5NzhWNi4yNTk3N1pNMTUxLjI5IDYuNjU5NzlDMTUxLjI5IDUuMDE5NzkgMTQ5Ljk0IDMuNjY5OCAxNDguMyAzLjY2OThIMTM5LjFWMTYuOTQ5OEgxNDguM0MxNDkuOTQgMTYuOTQ5OCAxNTEuMjkgMTUuNTk5OCAxNTEuMjkgMTMuOTU5OFY2LjY1OTc5WiIgZmlsbD0iIzBFMEUwRSIvPgo8cGF0aCBkPSJNMTU3Ljk5IDIwLjM3VjAuMjVIMTYxLjY0VjIwLjM3SDE1Ny45OVoiIGZpbGw9IiMwRTBFMEUiLz4KPHBhdGggZD0iTTE2My40MiAwLjI1SDE4MS40MlYzLjY3MDA0SDE3NC4yM1YyMC4zN0gxNzAuNThWMy42NzAwNEgxNjMuNDJWMC4yNVoiIGZpbGw9IiMwRTBFMEUiLz4KPHBhdGggZD0iTTM3LjExOTkgNC4wNzAwMUMzNy4xMTk5IDEuODIwMDEgMzUuMjk5OSAwIDMzLjA0OTkgMEgyMS40NDk5TDE5LjQ2OTkgMy42NjAwM0gzMC43NDk5QzMxLjM3OTkgMy42NjAwMyAzMS44OTk5IDQuMTcgMzEuODk5OSA0LjgxVjUuNDMwMDVDMzEuODk5OSA2LjgwMDA1IDMwLjc4OTkgNy45MDAwMiAyOS40Mjk5IDcuOTAwMDJIMjUuOTQ5OUwyMi45MTk5IDExLjVIMjguODU5OUMyOS41Mjk5IDExLjUgMzAuMDc5OSAxMi4wNSAzMC4wNzk5IDEyLjcyVjE1QzMwLjA3OTkgMTYuMzIgMjkuMDA5OSAxNy4zOCAyNy42OTk5IDE3LjM4SDE3Ljk3OTlMMTUuMTY5OSAyMC43MkgyNy4yNzk5QzMxLjQ4OTkgMjAuNzIgMzQuOTA5OSAxNy4zIDM0LjkwOTkgMTMuMDlDMzQuOTA5OSAxMS4zMiAzMy41Nzk5IDkuODkwMDUgMzEuODY5OSA5LjY4MDA1QzM0LjgwOTkgOS40OTAwNSAzNy4xMzk5IDcuMDYwMDEgMzcuMTM5OSA0LjA3MDAxSDM3LjExOTlaIiBmaWxsPSIjMEUwRTBFIi8+CjxwYXRoIGQ9Ik0yNS4wOSA3Ljg4SDIwLjkxTDIzLjUgNC4zNjAwNUgxOC4zMUwyMC43IDBMNi45MiAyLjUzMDAzSDE4LjUzTDE3Ljg4IDMuMjgwMDNMMTEuOSA0LjUxMDAxSDE2LjgzTDE1Ljg2IDUuNjNMMCA3LjkwMDAySDEzLjkySDE4LjA1TDE2Ljg5IDkuNjYwMDNMNy4zMSAxMS4wNEwxNS43MSAxMS40NkwxNS4xMyAxMi4zNUgxNy43OEwxNS4zIDE3LjI1TDcuODggMTguMjQwMUwxNC41NSAxOC43MUwxMi4zOCAyMi45OTAxTDI1LjA5IDcuODhaIiBmaWxsPSIjRTA1RjFCIi8+CjxwYXRoIGQ9Ik0xNi42Mzk5IDEzLjEyOTlMMC4yNzk5MDcgMTQuNTM5OUwxNS40Mzk5IDE1LjQ5OTlMMTYuNjM5OSAxMy4xMjk5WiIgZmlsbD0iI0UwNUYxQiIvPgo8L3N2Zz4K");

/***/ })

}]);
//# sourceMappingURL=resources_js_pages_HomePage_js.js.map