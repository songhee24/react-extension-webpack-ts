import { setStoredCities, setStoredOptions } from "../utils/storage";

console.log("background hello world");

chrome.runtime.onInstalled.addListener(() => {
  //  TODO doesn't work
  setStoredCities([]);

  setStoredOptions({
    tempScale: "metric",
  });
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse("from the background script");
});
