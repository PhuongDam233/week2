// Handle tabs
function handleTabsNew() {
  let tabs = document.querySelectorAll(".sctabs__tab-item"),
    listNews = document.querySelectorAll(".sctabs__wrap .article__list");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      // remove all class active of tabs
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });

      //   add class active
      this.classList.add("active");

      // hide all news list
      listNews.forEach(function (newList) {
        newList.classList.remove("active");
      });

      // get data-tab
      let id = this.dataset.tab;
      // addclass active to news list
      document.querySelector(".article__list-" + id).classList.add("active");
    });
  });
}
handleTabsNew();

// //FORM VALIDATE
function validateForm() {
  const form = document.querySelector(".formcontact");
  // submit form
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}
validateForm();

// Scroll To
function scrollToSection() {
  const btn = document.querySelector(".btnexplore"),
    section = document.querySelector(".sctabs");
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  });
}
scrollToSection();

// Slider product
function handleSliderProduct() {
  var swiper = new Swiper(".slider__list", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints{
    //   "@576":{
    //     slidesPerView:1,
    //   },
    //   "@992":{
    //     slidesPerView:3,
    //   }
    // },
  });
}
window.addEventListener("load", function () {
  handleSliderProduct();
});
