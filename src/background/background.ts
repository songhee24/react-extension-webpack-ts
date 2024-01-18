import {
  getStoredCities,
  setStoredCities,
  setStoredOptions,
} from "../utils/storage";

console.log("background hello world");

chrome.runtime.onInstalled.addListener(() => {
  //  TODO doesn't work
  setStoredCities([]);

  setStoredOptions({
    homeCity: "",
    tempScale: "metric",
    hasAutoOverlay: false,
  });

  chrome.contextMenus.create({
    contexts: ["selection"],
    title: "Add city to weather extension",
    id: "weatherExtension",
  });
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse("from the background script");
});

chrome.contextMenus.onClicked.addListener((event) => {
  getStoredCities().then((cities) => {
    setStoredCities([...cities, event.selectionText]);
  });
});
