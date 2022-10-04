const headerHeight = document.querySelector("header").clientHeight;
const navHeight = document.querySelector("nav").clientHeight;
const body = document.querySelector("body");

body.style.backgroundPosition = `center ${headerHeight + navHeight - 400}px`;

console.log(body.style.backgroundImage.clientHeight);
