const ListProduct = [
    {
        id: 1,
        name:"Big and Juicy Wagyu Beef Cheeseburger",
        price:30,
        kind:"Snack",
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"../src/Assets/image 26.png",
        category:1
    },
    {
        id: 2,
        name:"Fresh Lime Roasted Salmon",
        price:10,
        kind:"Fish",
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"../src/Assets/image 27.png",
        category:1
    },
    {
        id: 3,
        name:"The Best Easy One Pot Chicken and Rice",
        price:20,
        kind:"Snack",
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"../src/Assets/image 28.png",
        category: 3
    },
    {
        id: 4,
        name:"Fresh and Healthy Mixed Mayonnaise ",
        price:50,
        kind:"Healthy",
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"../src/Assets/image 29.png",
        category: 4
    },
    {
        id: 5,
        name:"The Creamiest Creamy Chicken",
        price:60,
        kind:"Noodles",
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"../src/Assets/image 30.png",
        category: 5
    },
    {
        id: 6,
        name:"Fruity Pancake with Orange & Blueberry",
        price:15,
        kind:"Sweet",
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"../src/Assets/image 31.png",
        category: 6
    }
]
const ListCategory = [
    {
        id:1,
        name:"breakfast",
        image:"../src/Assets/breakfast.png"
    },
    {
        id:2,
        name:"vegan",
        image:"../src/Assets/vegan.png"
    },
    {
        id:3,
        name:"meat",
        image:"../src/Assets/meat.png"
    },
    {
        id:4,
        name:"dessert",
        image:"../src/Assets/dessert.png"
    },
    {
        id:5,
        name:"lunch",
        image:"../src/Assets/lunch.png"
    },
    {
        id:6,
        name:"chocolate",
        image:"../src/Assets/chocolate.png"
    }
]
const ListMenu = [
    {
        id:1,
        name:"Home",
        url:"../index.html",
        url2:"../index.html"
    },
    {
        id:2,
        name:"Products",
        url:"../show_list/show_product.html",
        url2:"../show_list/show_product.html"
    },
    {
        id:3,
        name:"Blog",
        url:"../blog/blog.html"
    },
    {
        id:4,
        name:"About us",
        url:"../aboutus/about.html"
    },
    {
        id:5,
        name:"Contact us",
        url:"../contactus/contact.html"
    },
]
const formLog = [
    {
        id:1,
        name:"Sign In",
        title:"signin",
        title2:"signin_sidebar",
        url:"../signin/signin.html"
    },
    {
        id:2,
        name:"Sign Up",
        title:"signup",
        title2:"signup_sidebar",
        url:"../signup/signup.html"
    },
]
const form_login = document.querySelector('.form-login ul ');
if(form_login) {
    form_login.innerHTML = "";
    for (const item of formLog) {
        form_login.innerHTML += `
            <li><button id="${item.title}" class="${item.title}" onclick="location.href='${item.url}'">${item.name}</button></li>
        `;
    };
};
const form_sidebar = document.querySelector('.form_sidebar');
if(form_sidebar) {
    form_sidebar.innerHTML =""
    for (const item of formLog) {
        form_sidebar.innerHTML +=`
            <button id="${item.title2}" class="${item.title}" onclick="location.href='${item.url}'">${item.name}</button>
        `;
    };
};
let main = document.querySelector('.main')
let logo = document.querySelector('.header .logo')
const cart = document.querySelector('#cart')
const viewCart = document.querySelector('#viewCart')
if(cart) {
    cart.onmouseover = function (){
        viewCart.style.display = "block"
        main.style.opacity = "40%"
        logo.style.opacity = "40%"
    };
    cart.onmouseout = function (){
        viewCart.style.display = "none"
        main.style.opacity = "100%"
        logo.style.opacity = "100%"
    };
};
function showLiMenu() {
    const nav_bar = document.querySelector('.nav_bar #vmenu')
    const nav_menu = document.querySelector('.nav_menu #vmenu')
    if(nav_bar){
        nav_bar.innerHTML = "";
        for (let item of ListMenu) {
            nav_bar.innerHTML += `
                <a href="${item.url}"><li>${item.name}</li></a>
            `;
        };
    };
    if(nav_menu){
        nav_menu.innerHTML = "";
        for (let item of ListMenu) {
            nav_menu.innerHTML += `
                <a href="${item.url}"><li>${item.name}</li></a>
            `;
        };
    };
};
showLiMenu()
const sidebar_icon = document.querySelector('.sidebar_icon');
const sidebar_menu = document.querySelector('.sidebar_menu');
const closeSideBar = document.querySelector('#closeSideBar');
const overlay = document.querySelector('#overlay');
if(sidebar_icon){
    sidebar_icon.onclick = function () {
        sidebar_menu.style.display = "block";
        overlay.style.display = "block"
    };
};
if(overlay) {
    overlay.onclick = function () {
        sidebar_menu.style.display = "none";
        overlay.style.display = "none"
    }
};
if(closeSideBar) {
    closeSideBar.onclick = function () {
        sidebar_menu.style.display = "none";
        overlay.style.display = "none"
    }
};
function showSidebarMenu() {
    const sidebar_menu_list = document.querySelector('.sidebar_menu #sidebar_menu_list');
    if(sidebar_menu_list) {
        sidebar_menu_list.innerHTML = "";
        for (const item of ListMenu) {
            sidebar_menu_list.innerHTML += `
                <a href="${item.url}">
                    <li>${item.name}</li>
                </a>
            `;
        };
    };
};
showSidebarMenu()
function showPrdOther() {
    const result = ListProduct.slice(0,3);
    const prdOther = document.querySelector(".related_product");
    if(prdOther) {
        prdOther.innerHTML = "";
        for (const item of result) {
            prdOther.innerHTML += `
            <div class="product_other">
                <div class="images_product_other">
                    <a href = "/product_detail/product_detail.html?id=${item.id}"><img src="${item.image}"></a>
                </div>
                <div class="name_product_other">
                    <a href = "/product_detail/product_detail.html?id=${item.id}"><p>${item.name}</p></a>
                </div>
                <div class="cost_product_other">
                    <p>${item.price}$</p>
                </div>
                <div class="addcart">
                    <button>Add To Cart</button>
                </div>       
            </div>       
            `;
        };
    };
};
showPrdOther();
function showProduct(data){
    const products = document.querySelector(".popular_product");
    if(products){
        products.innerHTML = "";
        for (const item of data) {
            products.innerHTML += `
                <div class="product">
                    <div class="images_product">
                        <a href = "/product_detail/product_detail.html?id=${item.id}"><img src="${item.image}"></a>
                    </div>
                    <div class="name_product">
                        <a href = "/product_detail/product_detail.html?id=${item.id}"><p>${item.name}</p></a>
                    </div>
                    <div class="decreption">
                        <div class="decreption_left">
                            <i class="fa-solid fa-stopwatch"></i><span>&nbsp;&nbsp;&nbsp;30 minutes</span>
                        </div>
                        <div class="decreption_right">
                            <i class="fa-solid fa-utensils"></i><span>&nbsp;&nbsp;&nbsp;${item.kind}</span>
                        </div>
                    </div>
                </div>
            `;
        };
    };
};
function showCategory(){
    const categories = document.querySelector(".list_category");
    if(categories) {
        categories.innerHTML = "";
        for (const item of ListCategory) {
            categories.innerHTML += `
                <div class="show_category">
                    <div class="images_category">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="name_category">
                        <p>${item.name}</p>
                    </div>
                </div>
            `;
        };
    };
};
const filterSelect = document.querySelector("#filter-select");
function filterProduct(){
    const under30 = ListProduct.filter(function(product){
        return product.price < 30;
    });
    const over30 = ListProduct.filter(function(product){
        return product.price > 30;
    });
    if(filterSelect.value == 'under30'){
        showProduct(under30)
    };
    if(filterSelect.value == 'over30'){
        showProduct(over30)
    };
    if(filterSelect.value == 'all'){
        showProduct(ListProduct);
    };
};
if(filterSelect){
    filterSelect.addEventListener("change",filterProduct);
};
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
                    <div class="quanti">
                        <input type="number" name="" class="sl" id="quantity" placeholder="Quantity">
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
function showListMenu(){
    const listMenu = document.querySelector("#main_left ul")
    if(listMenu){
        for (const item of ListCategory) {
            listMenu.innerHTML += `
                <a href="./show_product.html?cateId=${item.id}"><li>${item.name}</li></a>
            `;
        };
    };
};
showListMenu();
function showListPrd(prd){
    const div_show = document.querySelector(".main_right");
    if(div_show){
        div_show.innerHTML = "";
        for (let item of prd) {
            div_show.innerHTML += `
                <div class="product_show">
                    <div class="image_prd">
                        <a href = "/product_detail/product_detail.html?id=${item.id}"><img src="${item.image}"></a>
                    </div>
                    <div class="name_prd">
                        <a href = "/product_detail/product_detail.html?id=${item.id}"><p>${item.name}</p></a>
                    </div>
                    <div class="cost_prd">
                        <p>${item.price}$</p>
                    </div>
                    <div class="addcart">
                        <button>Add To Cart</button>
                    </div>
                </div>  
            `;
        };
    };
};
showListPrd(ListProduct)
function reRender(){
    const cateId = new URLSearchParams(window.location.search).get('cateId')
    const productByCategory = ListProduct.filter(function(item){
        return item.category == cateId
    });
    if(cateId){
        showListPrd(productByCategory)
    };
    if(cateId == 0){
        showListPrd(ListProduct)
    };
};
reRender();
let check = true;
let fname = document.querySelector('#name');
let mail = document.querySelector('#email');
let sbj = document.querySelector('#subject');
let enq = document.querySelector('#enqiry');
let mes = document.querySelector('#mess');
let errorName = document.querySelector('#error_name');
let errorMail = document.querySelector('#error_mail');
let errorSubject = document.querySelector('#error_subject');
let errorEnqiry = document.querySelector('#error_enqiry');
let errorMess = document.querySelector('#error_mess');
function is_Email(youremail){
    var emaio=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if(youremail.match(emaio)){
        return true;
    }
    else{
        return false;
    };
};
function validateForm() {
    check = true;
    if(fname.value == ""){
        errorName.innerHTML = "Chưa nhập tên !";
        errorName.style.color = "red";
        fname.style.border = "1px solid red";
        check = false;
    };
    if(mail.value == ""){
        errorMail.innerHTML = "Chưa nhập email !";
        errorMail.style.color = "red";
        mail.style.border = "1px solid red";
        check = false;
    }
    else if(!is_Email(mail.value)){
        errorMail.innerText = "Không đúng định dạng Email";
        errorMail.style.color = 'red';
        check = false;
    }
    if(sbj.value == ""){
        errorSubject.innerHTML = "Chưa nhập !"
        errorSubject.style.color = "red";
        sbj.style.border = "1px solid red";
        check = false;
    };
    if(enq.value == ""){
        errorEnqiry.innerHTML = "Chưa chọn !"
        errorEnqiry.style.color = "red";
        enq.style.border = "1px solid red";
        check = false;
    };
    if(mes.value == ""){
        errorMess.innerHTML = "Chưa nhập !"
        errorMess.style.color = "red";
        mes.style.border = "1px solid red";
        check = false;
    }; 
    return check;
};
function removeError(){
    errorName.innerHTML = "";
    fname.style.border = "";
    errorMail.innerHTML = "";
    mail.style.border = ""
    errorSubject.innerHTML = "";
    sbj.style.border = "";
    errorEnqiry.innerHTML = "";
    enq.style.border = "";
    errorMess.innerHTML = "";
    mes.style.border = "";
};


let elToShow = document.querySelectorAll('.show-on-scroll')
let isElInViewPort = (el) => {
	let rect = el.getBoundingClientRect()
	let viewHeight = window.innerHeight || document.documentElement.clientHeight
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >= viewHeight && rect.top <= viewHeight) ||
		(rect.top >= 0 && rect.bottom <= viewHeight)
	);
};
function loop() {
	elToShow.forEach((item) => {
		if (isElInViewPort(item)) {
			item.classList.add('start')
		} 
        else {
			item.classList.remove('start')
		};
	});
};
window.onscroll = loop
loop()
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');
  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});
function showBlog(data) {
    const news = document.querySelector('.content');
    if(news) {
        news.innerHTML = "";
        for (const iterator of data) {
            news.innerHTML += `
            <div class="news">
                <div class="image">
                    <a href = "/product_detail/product_detail.html?id=${iterator.id}"><img width="100%" src="${iterator.image}"></a>
                </div>
                <div class="content_news">
                    <div class="title_news">
                        <a href = "/product_detail/product_detail.html?id=${iterator.id}"><p>${iterator.name}</p></a>
                    </div>
                    <div class="desc_news">
                        <p>
                            ${iterator.desc.slice(0,50)}...
                        </p>
                    </div>
                    <div class="detail">
                        <span>Người đăng: ducntph</span>&emsp;
                        <span>Ngày đăng: 12/06/2022</span> <br><br><br><br>
                        <a href = "https://www.iowafieldreport.com/wp-content/uploads/2021/11/6M513.png"><i class="fa-solid fa-arrows-turn-right"></i> Xem thêm </a> 
                        &emsp;
                    </div>
                </div>
            </div>
            `;
        };
    };
};
showBlog(ListProduct)
