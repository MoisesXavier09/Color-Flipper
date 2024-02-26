const btnHeader = document.querySelectorAll("header span");
const btnColorFlipper = document.querySelector(".colorF");
const btnSimpleHex = document.querySelector(".simpleH");
const main = document.querySelector("main");
const spanColor = document.querySelector(".nameColor");
const btnChangeColor = document.querySelector("button");

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let color = `rgb(${r}, ${g}, ${b})`;
main.style.backgroundColor = color;
spanColor.innerText = color;

btnColorFlipper.classList.add("active");

btnColorFlipper.addEventListener("click", () => {
  if (btnColorFlipper.classList.contains("active")) {
    btnColorFlipper.classList.remove("active");
    btnSimpleHex.classList.toggle("active");
  } else {
    btnColorFlipper.classList.toggle("active");
    btnSimpleHex.classList.remove("active");
    main.style.backgroundColor = color;
    spanColor.innerText = color;
  }
});
btnSimpleHex.addEventListener("click", () => {
  if (btnColorFlipper.classList.contains("active")) {
    btnColorFlipper.classList.remove("active");
    btnSimpleHex.classList.add("active");
    const hexColor = rgbToHex(color);
    main.style.backgroundColor = hexColor;
    spanColor.innerText = hexColor;
  } else {
    btnColorFlipper.classList.add("active");
    btnSimpleHex.classList.toggle("active");
  }
});

function rgbToHex(rgbString) {
  const rgb = rgbString.match(/rgb\((.*)\)/)[1].split(",");
  const hex = rgb
    .map((value) => parseInt(value, 10).toString(16).padStart(2, "0"))
    .join("");
  return `#${hex}`;
}

btnChangeColor.addEventListener("click", () => {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  color = `rgb(${r}, ${g}, ${b})`;
  if (btnColorFlipper.classList.contains("active")) {
    main.style.backgroundColor = color;
    spanColor.innerText = color;
  } else {
    const hexColor = rgbToHex(color);
    main.style.backgroundColor = hexColor;
    spanColor.innerText = hexColor;
  }
});
