
var slide_bar_menu = document.getElementById("slide_bar_menu");
var overlay = document.getElementById("overlay");
var menu_mob = document.getElementById("menu_mob");
function showSlideMenu() {
  menu_mob.style.display = "block";
  overlay.style.display = "block";
}
function hideSlideMenu() {
  menu_mob.style.display = "none";
  overlay.style.display = "none";
}
var slideshowDuration = 5000;
var slideshow = $(".main-content .slideshow");

function slideshowSwitch(slideshow, index, auto) {
  if (slideshow.data("wait")) return;

  var slides = slideshow.find(".slide");
  var pages = slideshow.find(".pagination");
  var activeSlide = slides.filter(".is-active");
  var activeSlideImage = activeSlide.find(".image-container");
  var newSlide = slides.eq(index);
  var newSlideImage = newSlide.find(".image-container");
  var newSlideContent = newSlide.find(".slide-content");
  var newSlideElements = newSlide.find(".caption > *");
  if (newSlide.is(activeSlide)) return;

  newSlide.addClass("is-new");
  var timeout = slideshow.data("timeout");
  clearTimeout(timeout);
  slideshow.data("wait", true);
  var transition = slideshow.attr("data-transition");
  if (transition == "fade") {
    newSlide.css({
      display: "block",
      zIndex: 2,
    });
    newSlideImage.css({
      opacity: 0,
    });

    TweenMax.to(newSlideImage, 1, {
      alpha: 1,
      onComplete: function () {
        newSlide.addClass("is-active").removeClass("is-new");
        activeSlide.removeClass("is-active");
        newSlide.css({ display: "", zIndex: "" });
        newSlideImage.css({ opacity: "" });
        slideshow.find(".pagination").trigger("check");
        slideshow.data("wait", false);
        if (auto) {
          timeout = setTimeout(function () {
            slideshowNext(slideshow, false, true);
          }, slideshowDuration);
          slideshow.data("timeout", timeout);
        }
      },
    });
  } else {
    if (newSlide.index() > activeSlide.index()) {
      var newSlideRight = 0;
      var newSlideLeft = "auto";
      var newSlideImageRight = -slideshow.width() / 8;
      var newSlideImageLeft = "auto";
      var newSlideImageToRight = 0;
      var newSlideImageToLeft = "auto";
      var newSlideContentLeft = "auto";
      var newSlideContentRight = 0;
      var activeSlideImageLeft = -slideshow.width() / 4;
    } else {
      var newSlideRight = "";
      var newSlideLeft = 0;
      var newSlideImageRight = "auto";
      var newSlideImageLeft = -slideshow.width() / 8;
      var newSlideImageToRight = "";
      var newSlideImageToLeft = 0;
      var newSlideContentLeft = 0;
      var newSlideContentRight = "auto";
      var activeSlideImageLeft = slideshow.width() / 4;
    }

    newSlide.css({
      display: "block",
      width: 0,
      right: newSlideRight,
      left: newSlideLeft,
      zIndex: 2,
    });

    newSlideImage.css({
      width: slideshow.width(),
      right: newSlideImageRight,
      left: newSlideImageLeft,
    });

    newSlideContent.css({
      width: slideshow.width(),
      left: newSlideContentLeft,
      right: newSlideContentRight,
    });

    activeSlideImage.css({
      left: 0,
    });

    TweenMax.set(newSlideElements, { y: 20, force3D: true });
    TweenMax.to(activeSlideImage, 1, {
      left: activeSlideImageLeft,
      ease: Power3.easeInOut,
    });

    TweenMax.to(newSlide, 1, {
      width: slideshow.width(),
      ease: Power3.easeInOut,
    });

    TweenMax.to(newSlideImage, 1, {
      right: newSlideImageToRight,
      left: newSlideImageToLeft,
      ease: Power3.easeInOut,
    });

    TweenMax.staggerFromTo(
      newSlideElements,
      0.8,
      { alpha: 0, y: 60 },
      { alpha: 1, y: 0, ease: Power3.easeOut, force3D: true, delay: 0.6 },
      0.1,
      function () {
        newSlide.addClass("is-active").removeClass("is-new");
        activeSlide.removeClass("is-active");
        newSlide.css({
          display: "",
          width: "",
          left: "",
          zIndex: "",
        });

        newSlideImage.css({
          width: "",
          right: "",
          left: "",
        });

        newSlideContent.css({
          width: "",
          left: "",
        });

        newSlideElements.css({
          opacity: "",
          transform: "",
        });

        activeSlideImage.css({
          left: "",
        });

        slideshow.find(".pagination").trigger("check");
        slideshow.data("wait", false);
        if (auto) {
          timeout = setTimeout(function () {
            slideshowNext(slideshow, false, true);
          }, slideshowDuration);
          slideshow.data("timeout", timeout);
        }
      }
    );
  }
}

function slideshowNext(slideshow, previous, auto) {
  var slides = slideshow.find(".slide");
  var activeSlide = slides.filter(".is-active");
  var newSlide = null;
  if (previous) {
    newSlide = activeSlide.prev(".slide");
    if (newSlide.length === 0) {
      newSlide = slides.last();
    }
  } else {
    newSlide = activeSlide.next(".slide");
    if (newSlide.length == 0) newSlide = slides.filter(".slide").first();
  }

  slideshowSwitch(slideshow, newSlide.index(), auto);
}

function homeSlideshowParallax() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > windowHeight) return;
  var inner = slideshow.find(".slideshow-inner");
  var newHeight = windowHeight - scrollTop / 2;
  var newTop = scrollTop * 0.8;

  inner.css({
    transform: "translateY(" + newTop + "px)",
    height: newHeight,
  });
}

$(document).ready(function () {
  $(".slide").addClass("is-loaded");

  $(".slideshow .arrows .arrow").on("click", function () {
    slideshowNext($(this).closest(".slideshow"), $(this).hasClass("prev"));
  });

  $(".slideshow .pagination .item").on("click", function () {
    slideshowSwitch($(this).closest(".slideshow"), $(this).index());
  });

  $(".slideshow .pagination").on("check", function () {
    var slideshow = $(this).closest(".slideshow");
    var pages = $(this).find(".item");
    var index = slideshow.find(".slides .is-active").index();
    pages.removeClass("is-active");
    pages.eq(index).addClass("is-active");
  });

  var timeout = setTimeout(function () {
    slideshowNext(slideshow, false, true);
  }, slideshowDuration);

  slideshow.data("timeout", timeout);
});

if ($(".main-content .slideshow").length > 1) {
  $(window).on("scroll", homeSlideshowParallax);
}

const products = document.querySelector(".box_2");
const listItems = [];
getData();
async function getData() {
  const res = await fetch("../DataProduct/list-product.txt");
  const results = await res.json();
  results.length = 11
  products.innerHTML = "";
  results.forEach((product) => {
    const div = document.createElement("div");
    div.setAttribute("class", "product");
    listItems.push(div);
    div.innerHTML = `
			<div class="images_product">
				<img src="${product.image}" alt="">
      </div>
      <div class="name_product">
				<a href = "/product_detai/product_detail.html?id=${product.id}" target="_blank">${product.title}</a>
      </div>
      <div class="cost_product">
        <p>$${product.price}</p>
      </div>
      <div class="control">
          <button onclick="openDetail()" class="btn" id="chitiet">
            <i class="fas fa-bookmark"></i> Detail
          </button>
          <button  class="success" id="addProduct">
            <i class="fas fa-shopping-cart"></i> Add to cart
          </button>
      </div>
		`;
    products.appendChild(div);
  });
  const buttonShows = document.querySelectorAll(".control button");
    buttonShows.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        createToast(e.target.getAttribute("class"));
      });
    });
}

const toasts = {
  success: {
    icon: '<i class="fas fa-check-circle"></i>',
    msg: "Add to the successful cart !!!",
  },
};
function createToast(status) {
  let toast = document.createElement("div");
  toast.className = `toast ${status}`;

  toast.innerHTML = `
    ${toasts[status].icon}
    <span class="msg">${toasts[status].msg}</span>
    <span class="countdown"></span>
    `;
  document.querySelector("#toasts").appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "hide_slide 1s ease forwards";
  }, 4000);
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
function openDetail() {
  window.open("/product_detai/product_detail.html");
}


function detailProduct(){
  const prdId = new URLSearchParams(window.location.search).get('id');
  if(prdId){
      const product = ListProduct.find(function(item){
          return item.id == prdId
      });
      const detailProductDiv = document.querySelector('.content_product_detail');
      detailProductDiv.innerHTML = "";
      detailProductDiv.innerHTML = `
          <div class="content_product_detail_left">
              <div class="name_product_detail">
                  <p>${product.name}</p>
              </div>
              <div class="cost_product_detail">
                  <p>${product.price}$</p>
              </div>
              <div class="decreption_product_detail">
                  <p>${product.desc}</p>
              </div>
              <div class="option">
                  <div class="quantity">
                      <input type="text" name="" class="quantity" id="quantity" placeholder="Quantity">
                  </div>
                  <div class="btn_cart">
                      <button>Add To Cart</button>
                  </div>
              </div>
          </div>
          <div class="content_product_detail_right">
              <img src="${product.image}" width="100%">
          </div>
          `;
  };
};
detailProduct();