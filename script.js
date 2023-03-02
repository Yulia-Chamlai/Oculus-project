("use strict");
const tabItem = document.querySelectorAll(".tabs__btn-item"); //find all tabs
const tabContent = document.querySelectorAll(".tabs__content-item"); //find all contents

tabItem.forEach(function (element) {
  element.addEventListener("click", open); //give some event on a tab while clicking
});

function open(evt) {
  const tabTarget = evt.currentTarget; //make one tab current after clicking
  const button = tabTarget.dataset.button; //give current tab the necessary contant

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active"); //remove active class on those tabs which are not current
  });
  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item--active"); ///remove active class on those items which are not current
  });
  tabTarget.classList.add("tabs__btn-item--active"); //add active class on this tabs which is not current
  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active"); //find that tab which is active and add it the necessary contant
}
//Burger-menu====================
const burgerBtn = document.querySelector(".nav__burger-menu");
const burgerNav = document.querySelector(".nav__list");

burgerBtn.addEventListener("click", function () {
  burgerNav.classList.toggle("active");
});
