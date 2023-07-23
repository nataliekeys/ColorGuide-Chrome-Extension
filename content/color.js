function colorNameTranslate(r, g, b) {
  let hsl = rgbToHsl(r, g, b);
  let hue = hsl[0];
  let saturation = hsl[1];
  let lightness = hsl[2];
  let dark = false;
  let light = false;

  if (
    (50 <= saturation &&
      saturation <= 100 &&
      5 < lightness &&
      lightness <= 25) ||
    (0 <= saturation && saturation < 50 && 10 < lightness && lightness <= 40)
  ) {
    dark = true;
  } else if (
    (50 <= saturation &&
      saturation <= 100 &&
      75 <= lightness &&
      lightness < 95) ||
    (0 <= saturation && saturation < 50 && 60 <= lightness && lightness < 90)
  ) {
    light = true;
  }

  if (
    (50 <= saturation &&
      saturation <= 100 &&
      0 <= lightness &&
      lightness <= 5) ||
    (0 <= saturation && saturation < 50 && 0 <= lightness && lightness <= 10)
  ) {
    return "Black";
  }
  if (
    (50 <= saturation &&
      saturation <= 100 &&
      95 <= lightness &&
      lightness <= 100) ||
    (0 <= saturation && saturation < 50 && 90 <= lightness && lightness <= 100)
  ) {
    return "White";
  }

  if (290 <= hue && hue < 345 && 12 <= saturation) {
    if (dark) {
      return "Dark Pink";
    }
    if (light) {
      return "Light Pink";
    }
    return "Pink";
  } else if (
    0 <= hue &&
    hue <= 38 &&
    31 <= saturation &&
    saturation <= 100 &&
    3 <= lightness &&
    lightness <= 20
  ) {
    if (dark) {
      return "Dark Brown";
    }
    if (light) {
      return "Light Brown";
    }
    return "Brown";
  } else if (
    ((0 <= hue && hue < 10) || (345 <= hue && hue <= 360)) &&
    12 <= saturation
  ) {
    if (dark) {
      return "Dark Red";
    }
    if (light) {
      return "Pink";
    }
    return "Red";
  } else if (0 <= saturation && saturation < 13 && 11 <= lightness < 90) {
    if (dark) {
      return "Dark Gray";
    }
    if (light) {
      return "Light Gray";
    }
    return "Gray";
  } else if (10 <= hue && hue < 40 && 12 <= saturation) {
    if (dark) {
      return "Brown";
    }
    if (light) {
      return "Light Orange";
    }
    return "Orange";
  } else if (40 <= hue && hue < 65 && 12 <= saturation) {
    if (dark) {
      if (hue <= 55) {
        return "Dark Yellow";
      } else {
        return "Dark Green";
      }
    }
    if (light) {
      return "Light Yellow";
    }
    return "Yellow";
  } else if (65 <= hue && hue < 140 && 12 <= saturation) {
    if (dark) {
      return "Dark Green";
    }
    if (light) {
      return "Light Green";
    }
    return "Green";
  }
  if (140 <= hue && hue < 200 && 12 <= saturation) {
    if (dark) {
      return "Dark Teal";
    }
    if (light) {
      return "Light Teal";
    }
    return "Teal";
  } else if (200 <= hue && hue < 260 && 12 <= saturation) {
    if (dark) {
      return "Dark Blue";
    }
    if (light) {
      return "Light Blue";
    }
    return "Blue";
  } else if (260 <= hue && hue < 290 && 12 <= saturation) {
    if (dark) {
      return "Dark Purple";
    }
    if (light) {
      return "Light Purple";
    }
    return "Purple";
  }

  // “Gray” prefix: Gray prefix indicates a lack of saturation
  // 0 <= Hue <= 100
  // 10 <= Saturation <= 49
  // Any lightness that doesn’t qualify it as black or white

  return "Unknown";
}

function getColor(x, y) {
  let listOfNames = [];
  let pixelList = tempContext.getImageData(x - 2, y - 2, 5, 5).data;

  for (i = 0; i < pixelList.length; i += 4) {
    let red = pixelList[i];
    let green = pixelList[i + 1];
    let blue = pixelList[i + 2];

    n_shade_name = colorNameTranslate(red, green, blue);
    listOfNames.push(n_shade_name);
  }

  let mostCommon = listOfNames
    .sort(
      (a, b) =>
        listOfNames.filter((v) => v === a).length -
        listOfNames.filter((v) => v === b).length
    )
    .pop();

  return mostCommon;
}

function rgbToHex(r, g, b) {
  let hexCode = "";

  if (isNaN(r)) {
    hexCode += "00";
  } else {
    r = Math.max(0, Math.min(r, 255));
    hexCode +=
      "0123456789ABCDEF".charAt((r - (r % 16)) / 16) +
      "0123456789ABCDEF".charAt(r % 16);
  }

  if (isNaN(g)) {
    hexCode += "00";
  } else {
    g = Math.max(0, Math.min(g, 255));
    hexCode +=
      "0123456789ABCDEF".charAt((g - (g % 16)) / 16) +
      "0123456789ABCDEF".charAt(g % 16);
  }

  if (isNaN(b)) {
    hexCode += "00";
  } else {
    b = Math.max(0, Math.min(b, 255));
    hexCode +=
      "0123456789ABCDEF".charAt((b - (b % 16)) / 16) +
      "0123456789ABCDEF".charAt(b % 16);
  }

  return "#" + hexCode;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
}
