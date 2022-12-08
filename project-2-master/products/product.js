const listProduct = [
    {   "id": 1,
        "brand":"Apple",
        "title":"Apple Macbook Pro 16” (MK1A3SA/A)",
        "price": 3500,
        "type_product":"apple",
        "description":"",
        "category": "Laptop Apple",
        "image": "https://hanoicomputercdn.com/media/product/61333_apple_macbook_pro_16_4.jpg",
		"status":false
    },

    {   "id": 2,
        "brand":"Acer",
        "title":"Laptop Acer Gaming Predator Helios 500 PH517-52-797L",
        "price":2100,
        "partNumber":"NH.QD3SV.001",
        "color":"Grey",
        "type_product":"acer",
        "description":"",
        "category":"Laptop Acer",
        "image":"https://hanoicomputercdn.com/media/product/62709_laptop_acer_gaming_predator_helios_500_12.jpg",
        "cpu":"Intel® Core™ i7-11800H (2.4Ghz/24MB cache)– 11th",
        "chipset":"Intel",
        "ram":"64GB DDR4 3200Mhz (2* 32GB)",
        "slot ram number":"2",
        "maximum capacity ram":"64GB",
        "vga":"NVIDIA® GeForce® RTX 3080 8G-GDDR6",
        "hard":"1024GB + 1024GB PCIe NVMe SED SSD RAID",
		"status":true
    },

    {   "id": 3,
        "title": "Laptop Asus Gaming ROG Strix G733ZX-LL016W",
        "price": 3100,
        "type_product":"asus",
        "description":"",
        "category": "Laptop Asus",
        "image": "https://hanoicomputercdn.com/media/product/64402_laptop_asus_gaming_rog_strix_g733zx_7.png",
		"status":true
    },

    {   "id": 4,
        "title": "Laptop Dell Allienware Gaming M15 R6 (70262923)",
        "price": 2200,
        "type_product":"alienware",
        "description":"",
        "category": "Laptop Dell Allienware",
        "image": "https://hanoicomputercdn.com/media/product/61568_laptop_dell_alienware_gaming_19.jpg",
		"status":true
    },

    {   "id": 5,
        "title": "Laptop Dell XPS 17 9710 (XPS7I7001W1)",
        "price": 2800,
        "type_product":"dell",
        "description":"",
        "category": "Laptop Dell",
        "image": "https://hanoicomputercdn.com/media/product/63889_laptop_dell_xps_17_9710_10.jpg",
		"status":true
    },

    {   "id": 6,
        "title": "Laptop HP Gaming Omen 16-b0176TX (5Z9Q7PA)",
        "price": 1950,
        "type_product":"hp",
        "description":"",
        "category": "Laptop HP",
        "image": "https://hanoicomputercdn.com/media/product/64917_laptop_hp_gaming_omen_16_7.jpeg",
		"status":true
    },

    {   "id": 7,
        "title": "Laptop MSI Gaming GE76 Raider (12UHS-480VN)",
        "price": 3128,
        "type_product":"msi",
        "description":"",
        "category": "Laptop MSI",
        "image": "https://hanoicomputercdn.com/media/product/63754_laptop_msi_gaming_ge76_raider_6.png",
		"status":true
    },

    {   "id": 8,
        "title": "Laptop LG Gram 17Z90P-G.AH78A5",
        "price": 1999,
        "type_product":"lg",
        "description":"",
        "category": "Laptop LG",
        "image": "https://hanoicomputercdn.com/media/product/58921_17z90p_g_ah78a5.jpg",
		"status":true
    },

    {   "id": 9,
        "title": "Laptop Lenovo Legion 7 16ACHG6 (82N600NSVN)",
        "price": 2900,
        "type_product":"lenovo",
        "description":"",
        "category": "Laptop Lenovo",
        "image": "https://hanoicomputercdn.com/media/product/64018_laptop_lenovo_legion_7_1.jpeg",
		"status":true
    },

    {   "id": 10,
        "title": "Laptop Gigabyte Gaming AERO 16",
        "price": 3470,
        "type_product":"gigabyte",
        "description":"",
        "category": "Laptop Gigabyte",
        "image": "https://hanoicomputercdn.com/media/product/63932_laptop_gigabyte_gaming_aero_16_5.jpg",
		"status":true
    },

    {   "id": 11,
        "title": "Laptop Đồ họa ConceptD 7 Ezel Pro CC715-91P-X8CX",
        "price": 4000,
        "type_product":"concepid",
        "description":"",
        "category": "Laptop ConceptD",
        "image": "https://hanoicomputercdn.com/media/product/56768_conceptd_7_ezel__7_.png",
		"status":true
    },

    {   "id": 12,
        "title": "Microsoft Surface Book 3",
        "price": 4000,
        "type_product":"surface",
        "description":"",
        "category": "Microsoft Surface",
        "image": "https://hanoicomputercdn.com/media/product/55965_microsoft_surface_book_3_i7_1065g7_32gb_ram_2tb_ssd_15_cam_ung_gtx_1660ti_6gb_win10_keyboard_3.png",
		"status":true
    }
]
var slide_bar_menu = document.getElementById('slide_bar_menu');
var menu_mob = document.getElementById('menu_mob')
function showSlideMenu() {
    menu_mob.style.display = "block";
}
const products = document.querySelector('.show_product')
const filter = document.getElementById('filter')
const product_btn = document.querySelectorAll('.menu_product button');
const btnPrdList = document.querySelectorAll('.product');
getData(listProduct);
filter.addEventListener('input', (e) => filterData(e.value));
function filterData(search) {
    for (const item of listProduct) {
        if (item.value.toLowerCase().includes(search.value.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        };
    }
};
function getData(data) {
		products.innerHTML = "";
		for (const product of data) {
			products.innerHTML += `
			<div class="product" type-product="${product.type_product}">
				<div class="images_product">
					<img src="${product.image}" alt="">
				</div>
				<div class="name_product">
					<a href = "../product_detai/product_detail.html" target="_blank">${product.title}</a>
				</div>
				<div class="cost_product">
					<p>$${product.price}</p>
				</div>
                <div class="status">
                    <p>${product.status ? `<i class="fa-solid fa-check"></i> Còn hàng`:`<i class="fa-solid fa-phone"></i> Liên hệ`}</p>
				</div>
				<div class="control">
				  <button onclick="openDetail()" class="btn" id="chitiet">
					<i class="fas fa-bookmark"></i> Detail
				  </button>
				  <button class="success" id="addProduct">
                    ${product.status ? `<i class="fas fa-shopping-cart"></i> Add to cart`:`<i class="fa-solid fa-phone"></i> Liên hệ`}
				  </button>
				</div>
			</div>
			`;
			product_btn.forEach((btn) => {
				btn.addEventListener('click', (e) => {
					const type = e.target.getAttribute('type-product')
					document
						.querySelector('.menu_product button.active')
						.classList.remove('active')
					e.target.classList.add('active')
					btnPrdList.forEach((item) => {
						if (type == 'all' || item.getAttribute('type-product') == type)
							item.classList.remove('hide')
						else item.classList.add('hide')
					});
				});
			});	
	    };
    const buttonShows = document.querySelectorAll('.control button')
    buttonShows.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            createToast(e.target.getAttribute('class'))
        });
    });
};

const toasts = {
	success: {
		icon: '<i class="fas fa-check-circle"></i>',
		msg: 'Add to the successful cart !!!',
	},
}
function createToast(status) {
	let toast = document.createElement('div')
	toast.className = `toast ${status}`
	toast.innerHTML = `
    ${toasts[status].icon}
    <span class="msg">${toasts[status].msg}</span>
    <span class="countdown"></span>
    `
	document.querySelector('#toasts').appendChild(toast)
	setTimeout(() => {
		toast.style.animation = 'hide_slide 1s ease forwards'
	}, 4000)
	setTimeout(() => {
		toast.remove()
	}, 6000)
}
function openDetail() {
	window.open("../product_detai/product_detail.html");
}
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
document.querySelector('.search-btn').addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})
const filterSelect = document.querySelector("#select2")
function filterProduct(){
    const under10 = listProduct.filter(function(product){
        return product.price < 500
    });
    const from10to15 = listProduct.filter(function(product){
        return product.price > 500 && product.price < 1000
    });
	const from15to20 = listProduct.filter(function(product){
        return product.price > 1500 && product.price < 2000
    });
	const from20to35 = listProduct.filter(function(product){
        return product.price > 2000 && product.price < 3500
    });
	const from35to50 = listProduct.filter(function(product){
        return product.price > 3500 && product.price < 5000
    });
	const from50to100 = listProduct.filter(function(product){
        return product.price > 5000 && product.price < 10000
    });
	const over100 = listProduct.filter(function(product){
        return product.price > 500 && product.price < 10000
    });
    if(filterSelect.value == 'under10'){
        getData(under10)
    }
    if(filterSelect.value == 'from10to15'){
        getData(from10to15)
    }
    if(filterSelect.value == 'from15to20'){
        getData(from15to20);
    }
	if(filterSelect.value == 'from20to35'){
        getData(from20to35)
    }
    if(filterSelect.value == 'from35to50'){
        getData(from35to50)
    }
    if(filterSelect.value == 'from50to100'){
        getData(from50to100);
    }
	if(filterSelect.value == 'over100'){
        getData(over100);
    }
	if(filterSelect.value == 'all'){
        getData(listProduct);
    }
};
if(filterSelect){
    filterSelect.addEventListener("change",filterProduct);
};
const filterSelect1 = document.querySelector("#select1")
function sortPrice(){
	if(filterSelect1.value == 'ascending'){
		listProduct.sort(function(sv1, sv2) {
			return sv1.price - sv2.price;
		});
        getData(listProduct);
    }
	else if(filterSelect1.value == 'descending'){
		listProduct.sort(function(sv1, sv2) {
			return sv2.price - sv1.price;
		});
        getData(listProduct);
	}
	else {
        getData(listProduct);
	}
}
if(filterSelect1){
    filterSelect1.addEventListener("change",sortPrice);
};
let arrPrd = document.getElementsByClassName('.control .success');
const filterSelect3 = document.querySelector("#select3");
function checkStatus(){
	if(filterSelect3.value == 'true'){
		
	}
	else if(filterSelect3.value == 'false'){

	}
}
if(filterSelect3){
    filterSelect3.addEventListener("change",checkStatus);
};
