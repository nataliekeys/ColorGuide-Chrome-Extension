let children = document.body.children;
let tempCanvas = document.createElement("canvas");
let tempContext = tempCanvas.getContext("2d", { willReadFrequently: true });

function captureCurrentPixel(e) {
  if (
    e.target.className === "colorlabel" ||
    e.target.className === "colorlabel_child" ||
    e.target.className === "statuslabel"
  ) {
    return;
  }

  chrome.runtime.sendMessage({ message: "capture" }, (currentScreen) => {
    let img = new Image();
    img.src = currentScreen.imgSrc;
    img.onload = function () {
      tempCanvas.width = img.naturalWidth;
      tempCanvas.height = img.naturalHeight;

      tempContext.drawImage(img, 0, 0);
      tempContext.setAtt;
      let colorName = getColor(
        e.clientX * window.devicePixelRatio,
        e.clientY * window.devicePixelRatio
      );

      createLabel(e.pageY, e.pageX, colorName);
    };
  });
}

const toggleOn = () => {
  for (let i = 0; i < children.length; i++) {
    if (
      children[i].className === "colorlabel" ||
      children[i].className === "colorlabel_child" ||
      children[i].className === "statuslabel"
    ) {
      continue;
    }
    children[i].style["pointer-events"] = "none";
  }

  if (statusLabelOn === null) {
    setupStatusLabel();
  }
  addStatusLabel();
  document.addEventListener("click", captureCurrentPixel, false);

  console.log(`Tool turned on`);
};

const toggleOff = () => {
  for (let i = 0; i < children.length; i++) {
    if (
      children[i].className === "colorlabel" ||
      children[i].className === "colorlabel_child" ||
      children[i].className === "statuslabel"
    ) {
      continue;
    }
    children[i].style["pointer-events"] = "auto";
  }

  removeStatusLabel();
  document.body.style.cursor = "default";
  document.removeEventListener("click", captureCurrentPixel, false);

  console.log(`Tool turned off`);
};

const labelRemove = () => {
  let count = 0;
  const labels = Array.prototype.slice.call(
    document.getElementsByClassName("colorlabel"),
    0
  );
  for (const label of labels) {
    if (label.className === "statuslabel") continue;
    label.parentNode.removeChild(label);
    count++;
  }

  console.log(`Deleted ${count} labels`);
};

// Status of tool
let on = false;
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "toggleTool") {
    on = !on;
    if (on) {
      toggleOn();
    } else {
      toggleOff();
    }
  } else if (request.message === "removeLabels") {
    labelRemove();
  }
});
