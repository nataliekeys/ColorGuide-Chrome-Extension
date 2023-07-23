// Listen to short-cut commands:
// Toggle Tool
// Remove Labels
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggleTool" || command === "removeLabels") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message: command });
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message == "capture") {
    chrome.tabs.captureVisibleTab(
      chrome.windows.WINDOW_ID_CURRENT,
      function (dataUrl) {
        sendResponse({ imgSrc: dataUrl, message: "done" });
        return true;
      }
    );
  }
  // This is similar to command, but from the popup.js
  else if (request.message === "toggleTool") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message: request.message });
    });
    return true;
  }
  return true;
});
