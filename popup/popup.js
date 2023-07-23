(() => {
  "use strict";

  window.onload = () => {
    const infoSection = document.getElementById("infoSection");
    const info = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    };

    infoSection.innerHTML = JSON.stringify(info, null, 4);
  };
})();
document.getElementById("start-button").addEventListener("click", () => {
  chrome.runtime.sendMessage({ message: "toggleTool" });
  setTimeout(() => {
    window.close();
  }, 100);
});
