const  productlist = [
    {
        "id": 0,
        "product_name":"realme TechLife CineSonic Q 140 cm (55 inch) QLED Ultra HD (4K) Smart Google TV",
        "product_img":"https://rukminim2.flixcart.com/image/416/416/xif0q/television/f/s/h/-original-imah54herepenkrb.jpeg?q=70&crop=false",
        "product_price": 200
    },
    {
        "id": 1,
        "product_name":"Google Pixel Watch 2 Smartwatch  (Bay Active Strap, Free Size)",
        "product_img":"https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/w/g/r/-original-imagxp8utj55gjnk.jpeg?q=70&crop=false",
        "product_price": 190
    },
    {
        "id": 2,
        "product_name":"MICROSOFT S/X Wireless Controller Bluetooth Gamepad  (Carbon Black, For Xbox One, Xbox Series S, Xbox Series X)",
        "product_img":"https://rukminim2.flixcart.com/image/416/416/jz05rww0/gamepad/usb-wireless/b/h/c/ant-esports-gp-100-gaming-wired-gamepad-controller-joysticks-for-original-imafj48emfycycyp.jpeg?q=70&crop=false",
        "product_price": 240
    },
    {
        "id": 3,
        "product_name":"CHESTON Ultra 400A Arc (MMA) LED Display Hot Start Welder Tool Inverter Welding Machine",
        "product_img":"https://rukminim2.flixcart.com/image/416/416/xif0q/welding-machine/i/c/b/400-ultra-400a-inverter-arc-mma-led-display-hot-start-welder-original-imahyg6pdnn3rtxg.jpeg?q=70&crop=false",
        "product_price": 290
    },
    {
        "id": 4,
        "product_name":"Adwait crystal polish metal 400mm hanging pendant jhoomer Chandelier Ceiling Lamp  (Black, Gold)",
        "product_img":"https://rukminim2.flixcart.com/image/416/416/xif0q/ceiling-lamp/z/z/y/4-1-40-40-1-7-adw-400mm-black-goldg-adwait-original-imagubjgnyyfjmfy.jpeg?q=70&crop=false",
        "product_price": 400
    },
    {
        "id": 5,
        "product_name":"ZEBRONICS Zeb-Companion 300 Wireless Keyboard with Retro Keys and Mouse set (BLUE) Wireless Desktop Keyboard  (Blue)",
        "product_img":"https://rukminim2.flixcart.com/image/416/416/xif0q/keyboard/desktop-keyboard/h/n/j/zeb-companion-300-wireless-keyboard-with-retro-keys-and-mouse-original-imagpxbhgrzdjxym.jpeg?q=70&crop=false",
        "product_price": 120
    },
]

let p_arr = []
let item = document.querySelector(".items")
const cart = document.querySelector('cart')
let cartItems = document.querySelector("cartitems")
let product;
let total_price = 0;
let cart_value = 0;

function Update_Cart_value() {
    cart_value++
    document.querySelector('#cart_items_value_length').innerHTML =  cart_value
}
function Decre_Cart_value() {
    cart_value--
    document.querySelector('#cart_items_value_length').innerHTML =  cart_value
}

function LoadProducts() {
    productlist.forEach((prod)=>{
        const html = `<item data-id=${prod.id} class="item w-80 min-h-96 max-h-fit bg-blak p-2 border-2 border-slate-600 rounded-md">
            <img
              src=${prod.product_img}
              alt=""
              class="h-60 w-full object-contain"
            />
            <p class="text-slate-300 mt-3">
              ${prod.product_name}
            </p>
            <strong class="font-[Agdasima] text-2xl text-yellow-600 mt-3">Prize: $${prod.product_price}</strong>
            <div class="h-10 text-center text-  xl text-slate-400 bg-green-500 rounded-lg my-3 p-2 font-semibold cursor-pointer">Add to Cart</div>
          </item>`
        document.querySelector(".items").innerHTML = document.querySelector(".items").innerHTML + html
    })
}
LoadProducts()

function ShowCart() {
    if(cart.classList.contains('hidden')){
        cart.classList.remove("hidden")
    }
    else{
        cart.classList.add("hidden")
    }
}

function alert() {
    confirm('Coming Soon...')
}

item.addEventListener("click",(e)=>{
    if (e.target.tagName === "DIV") {
        product =  productlist[e.target.parentElement.dataset.id]
        Update_Cart_value()
        loadCart()
    }
    document.querySelector(".msg").classList.add("hidden")
})

function loadCart() {
        let html = `<div class="h-16 rounded-md p-2 flex items-center  bg-slate-100 ">
            <img src=${product.product_img} alt="" class="w-12 h-12">
            <p class="ml-3 text-[#212121] text-xs max-h-8 overflow-hidden ">${product.product_name}}</p>
            <p class="text-green-500 font-semibold">$</p>
            <p class="text-green-500 font-semibold">${product.product_price}</p>
            <img src="./assets/pngegg (2).png" alt="" class="h-6 ml-4 cursor-pointer">
          </div>`
              total_price = total_price + product.product_price
              document.querySelector("cartitems").innerHTML = document.querySelector("cartitems").innerHTML + html
              document.querySelector("#total").innerHTML = `Total: $ ${total_price}`
}

cartItems.addEventListener("click",(e)=>{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        Decre_Cart_value()
        total_price = total_price - e.target.parentElement.children[3].innerHTML
        document.querySelector("#total").innerHTML = `Total: $ ${total_price}`
        check()
    }
})

function check() {
    if (cartItems.childNodes.length === 3) {
        console.log("cartItems.childNodes")
        document.querySelector(".msg").classList.remove("hidden")
        document.querySelector("#total").innerHTML = ''
        
    }
    
}

function addItemToCart() {
    console.log("item added successfully")
}
