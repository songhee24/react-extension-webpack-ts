import { setStoredCities } from "../utils/storage";

console.log("background hello world");

chrome.runtime.onInstalled.addListener(() => {
  setStoredCities([]);
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse("from the background script");
});
