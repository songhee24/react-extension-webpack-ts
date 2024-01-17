/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData),
/* harmony export */   getWeatherIconSrc: () => (/* binding */ getWeatherIconSrc)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const OPEN_WEATHER_API_KEY = "396f40c68c5687dfeeda306c4d8280ab";
function fetchWeatherData(city, tempScale) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${tempScale}&appid=${OPEN_WEATHER_API_KEY}`);
        if (!res.ok) {
            throw new Error("Something Went Wrong");
        }
        const data = yield res.json();
        return data;
    });
}
function getWeatherIconSrc(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}


/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStoredCities: () => (/* binding */ getStoredCities),
/* harmony export */   getStoredOptions: () => (/* binding */ getStoredOptions),
/* harmony export */   setStoredCities: () => (/* binding */ setStoredCities),
/* harmony export */   setStoredOptions: () => (/* binding */ setStoredOptions)
/* harmony export */ });
function setStoredCities(cities) {
    const vals = {
        cities,
    };
    console.log("vals", vals);
    return new Promise((resolve, reject) => {
        chrome.storage.local.set(vals, () => {
            resolve();
        });
    });
}
function getStoredCities() {
    const keys = ["cities"];
    return new Promise((resolve) => {
        chrome.storage.local.get(keys, (result) => {
            var _a;
            resolve((_a = result.cities) !== null && _a !== void 0 ? _a : []);
        });
    });
}
function setStoredOptions(options) {
    const vals = {
        options,
    };
    return new Promise((resolve) => {
        chrome.storage.local.set(vals, () => {
            resolve();
        });
    });
}
function getStoredOptions() {
    const keys = ["options"];
    return new Promise((resolve) => {
        chrome.storage.local.get(keys, (res) => {
            resolve(res.options);
        });
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/api */ "./src/utils/api.ts");


console.log("background hello world");
chrome.runtime.onInstalled.addListener(() => {
    //  TODO doesn't work
    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.setStoredCities)([]);
    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.setStoredOptions)({
        homeCity: "",
        tempScale: "metric",
        hasAutoOverlay: false,
    });
    chrome.contextMenus.create({
        contexts: ["selection"],
        title: "Add city to weather extension",
        id: "weatherExtension",
    });
    chrome.alarms.create({
        periodInMinutes: 1 / 6,
    });
});
chrome.alarms.onAlarm.addListener(() => {
    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.getStoredOptions)().then((options) => {
        if (options.homeCity === "") {
            return;
        }
        (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherData)(options.homeCity, options.tempScale).then((data) => {
            const temp = Math.round(data.main.temp);
            const symbol = options.tempScale === "metric" ? "\u2103" : "\u2109";
            chrome.action.setBadgeText({
                text: `${temp}${symbol}`,
            });
        });
    });
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    sendResponse("from the background script");
});
chrome.contextMenus.onClicked.addListener((event) => {
    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.getStoredCities)().then((cities) => {
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.setStoredCities)([...cities, event.selectionText]);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=background.js.map