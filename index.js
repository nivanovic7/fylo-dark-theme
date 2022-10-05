const earlyAccessSectionHeight = document.querySelector(
  ".early-access-section"
).clientHeight;

console.log(earlyAccessSectionHeight);

document.querySelector(".early-access-section").style.top = `${
  earlyAccessSectionHeight / 2
}px`;

document.querySelector(".footer").style.padding = `calc(${
  earlyAccessSectionHeight / 2
}px + 8rem) 5% 8rem `;
