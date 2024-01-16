/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/contentScript/contentScript.tsx ***!
  \*********************************************/
console.log("content script running");
chrome.runtime.sendMessage("From the content script", (response) => {
    console.log(response);
});

/******/ })()
;
//# sourceMappingURL=contentScript.js.map