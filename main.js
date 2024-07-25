alert("Я учу JavaScript!");

const assets = document.querySelectorAll("img");
const buttons = document.querySelectorAll("button");
let currentImage = 0;
assets[1].style.display = "none";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    assets[currentImage].style.display = "none";
    currentImage = (currentImage + 1) % 2;
    assets[currentImage].style.display = "block";
  });
});
