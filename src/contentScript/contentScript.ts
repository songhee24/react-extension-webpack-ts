console.log("content script running");
chrome.runtime.sendMessage("From the content script", (response) => {
  console.log(response);
});
