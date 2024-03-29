import {
  getStoredCities,
  getStoredOptions,
  setStoredCities,
  setStoredOptions,
} from "../utils/storage";
import { fetchWeatherData } from "../utils/api";

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

  chrome.alarms.create({
    periodInMinutes: 1 / 6,
  });
});

chrome.alarms.onAlarm.addListener(() => {
  getStoredOptions().then((options) => {
    if (options.homeCity === "") {
      return;
    }

    fetchWeatherData(options.homeCity, options.tempScale).then((data) => {
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
  getStoredCities().then((cities) => {
    setStoredCities([...cities, event.selectionText]);
  });
});
