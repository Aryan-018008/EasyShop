// ================= USER NAME =================
const username = localStorage.getItem("user") || "Guest";

const displayName = username.includes("@")
  ? username.split("@")[0]
  : username;

document.getElementById("username").innerText = displayName;

let cart = [];
// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://easyshop-xznw.onrender.com";
const cartBtn = document.getElementById("cartBtn");
if (cartBtn) {
  cartBtn.addEventListener("click", toggleCart);
}
// const BASE_URL = "http://127.0.0.1:5000/";


// ================= DATE & TIME =================
function updateDateTime() {
  const now = new Date();
  document.getElementById("dateTime").innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();


// ================= DROPDOWN =================
const userBtn = document.getElementById("userBtn");
const dropdown = document.getElementById("dropdownMenu");

userBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!userBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});


// ================= LOGOUT =================
document.getElementById("logoutBtn").addEventListener("click", () => {
  Swal.fire({
    title: "Logout?",
    text: "You will be redirected to home page",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#073a7a",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "../index.html";
    }
  });
});


// ================= LOCAL PRODUCTS =================
const products = [
  {
    id: 1,
    title: "LPG Cyllinder",
    price: 800,
    category: "homeappliances",
    image: "https://5.imimg.com/data5/NN/NN/STDPRD-1139/indane-14-2-kg-subsidised-domestic-lpg-cylinder.jpg"
  },
  {
    id: 2,
    title: "Men T-Shirt",
    price: 499,
    category: "fashion",
    image: "https://airtex.in/cdn/shop/files/Men-stylish-T-Shirt-Navy-blue-White-Turquoise-Blue-with-Red-stripe-Airtex-64887927-_1.jpg?v=1750049598"
  },
  {
    id: 3,
    title: "Gold Ring",
    price: 7500,
    category: "accessories",
    image: "https://www.candere.com/media/jewellery/images/GR00103__1.jpeg"
  },
  {
    id: 4,
    title: "Microwave Oven",
    price: 4000,
    category: "homeappliances",
    image: "https://5.imimg.com/data5/NU/QE/MY-8657522/microwave-oven.jpg"
  },
  {
    id: 5,
    title: "Necklece",
    price: 15999,
    category: "Women",
    image: "https://kinclimg6.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BISM0018N01_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-73331.png"
  },
  {
    id: 6,
    title: "Atomic Habits",
    price: 399,
    category: "books",
    image: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg"
  },{
    id: 7,
    title: "One Indian Girl",
    price: 699,
    category: "books",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg"
  },
  {
    id: 8,
    title: "Manga & Anime",
    price: 699,
    category: "books",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOw3tGcWylXh7IDnS33LDwozYNU17Mps9AsQ&s"
  },
  {
    id: 9,
    title: "USB-C Rechargeable Mouse",
    price: 599,
    category: "electronics",
    image: "https://alogic.in/cdn/shop/files/EchelonWirelessMouse_Mac_1_v1.webp?v=1748336526&width=2048"
  },
  {
    id: 10,
    title: "Chanakya Neeti",
    price: 319,
    category: "books",
    image: "https://img.bookchor.com/images/cover/604/9788184302110.jpg"
  },
  {
    id: 11,
    title: "The Power of Subconscious Mind",
    price: 829,
    category: "books",
    image: "https://rupapublications.co.in/images/1725973829.jpg"
  },
  {
    id: 12,
    title: "All-in-one MakeUP Combo Kit",
    price: 3199,
    category: "Women",
    image: "https://m.media-amazon.com/images/I/71uwwQxvXUL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 13,
    title: "Cargo",
    price: 1199,
    category: "fashion",
    image: "https://jimmyluxury.in/cdn/shop/files/IMG_9274copy_8148cc5d-3954-4bfd-b950-cd1b3fba28cccopycopy.jpg?v=1764754822&width=2048"
  },
  {
    id: 14,
    title: "Air Fryer",
    price: 1199,
    category: "homeappliances",
    image: "https://www.philips.co.in/c-dam/b2c/kitchen/airfryer/AirfryerImages/airfryer-s-xs.png"
  },
  {
    id: 15,
    title: "The God Of Small Things",
    price: 399,
    category: "books",
    image: "https://m.media-amazon.com/images/I/91saO95VziL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 16,
    title: "Lip Stick",
    price: 399,
    category: "Women",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXdfoEQVMufcVBjd1ReoN51ohnU4NiFjsKQ&s"
  },
  {
    id: 17,
    title: "Toaster Oven",
    price: 2499,
    category: "homeappliances",
    image: "https://www.rasoishop.com/cdn/shop/files/8901309228626-10.jpg?v=1701609174"
  },
  {
    id: 18,
    title: "Vacuum Cleaner",
    price: 2749,
    category: "homeappliances",
    image: "https://tiimg.tistatic.com/fp/1/009/462/ultraone-deluxe-vacuums-168.jpg"
  },
  {
    id: 19,
    title: "Men's Jeans",
    price: 999,
    category: "fashion",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbR8W75EJ4TEnbhoXhZfo-KSdeQyYTH8XHoQ&s"
  },
  
  {
    id: 20,
    title: "Samsung Galaxy S24",
    price: 46999,
    category: "electronics",
    image: "https://images.samsung.com/in/smartphones/galaxy-s24/images/galaxy-s24-share-image.jpg"
  },
  {
    id: 21,
    title: "Oppo Reno 11 5G",
    price: 26999,
    category: "electronics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdcSUJJF4UwbqDhdw7ey39jloxj5h7kvsLg&s"
  },
  {
    id: 22,
    title: "Sun Glass",
    price: 599,
    category: "accessories",
    image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/656x464/9df78eab33525d08d6e5fb8d27136e95//v/i/matte-black-grey-solid-full-rim-rectangle-square-vincent-chase-polarized-the-metal-edit-vc-s13116-c1-sunglasses_vincent-chase-vc-s13116-c1-sunglasses_g_7206_1_5july23.jpg"
  },
  {
    id: 23,
    title: "Earphone",
    price: 349,
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/51KhPwH6nLL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 24,
    title: "Wings of Fire",
    price: 449,
    category: "books",
    image: "https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UF1000,1000_QL80_.jpg"
  },
  {
      id: 25,
      title: "Harry Potter",
      price: 3000,
      category: "books",
      image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b57dac15--Books8_1200x.jpg?v=1620061403"
    },
  {
      id: 26,
      title: "Vivo V40",
      price: 32999,
      category: "electronics",
      image: "https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/44673774202408140901.jpg"
    },
  {
      id: 27,
      title: "Men's White Shirt",
      price: 999,
      category: "fashion",
      image: "https://www.beyours.in/cdn/shop/files/white-for-bundle_1.jpg?v=1767949967"
    },
  {
      id: 28,
      title: "She Thinks Like a Boss",
      price: 1399 ,
      image: "https://m.media-amazon.com/images/I/71sjvpsYWhL.jpg",
      category: "books"
    },
  {
      id: 29,
      title: "Iron",
      price: 499,
      image: "https://mccoyindia.in/wp-content/uploads/2020/04/Saturn-iron.jpg",
      category: "homeappliances"
    },
  {
      id: 30,
      title: "Drinkware Set",
      price: 1299,
      image: "homeappliances",
      category: "https://www.home4u.in/cdn/shop/files/Drinkware-mobile-banner.jpg?v=1663231131"
    },
  {
      id: 31,
      title: "Women T-Shirt",
      price: 749,
      image: "https://image.hm.com/assets/hm/8f/a6/8fa6304841cfa8861cffbde0b9aeae8283907e61.jpg",
      category: "Women"
    },
  {
      id: 32,
      title: "Brown Leather Belt",
      price: 600,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLynx5XDRy0pW-0uUKifyZVR7q_w6g96rygA&s",
      category: "fashion"
    },
  {
      id: 33,
      title: "Gas Stove",
      price: 599,
      image: "https://www.shutterstock.com/image-photo/2-burner-gas-stove-isolated-260nw-2425366685.jpg",
      category: "homeappliances"
    },
  {
      id: 34,
      title: "Iphone 15 Pro Max",
      price: 116350,
      image: "https://image.cdn.shpy.in/301826/1-1708521332360.jpeg?width=600&format=webp",
      category: "electronics"
    },
  {
      id: 35,
      title: "Nokia All-new 105",
      price: 1100,
      image: "https://m.media-amazon.com/images/I/61FX8qveBNL.jpg",
      category: "electronics"
    },
  {
      id: 36,
      title: "Women's Yellow Long Kurti",
      price: 999,
      image: "https://www.ethnicrajasthan.com/cdn/shop/files/APKULCCSPPLGM11201ER00M_7.jpg?v=1729936393&width=2048",
      category: "Women"
    },
  {
      id: 37,
      title: "Blended Silk Saree",
      price: 1699,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tbNo2Di2TxHdgXnmqw_xd8YxlZDxnuBkcQ&s",
      category: "Women"
    },
  {
      id: 38,
      title: "DVD Player",
      price: 749,
      image: "https://4.imimg.com/data4/XL/PS/MY-23305730/electric-dvd-player.jpg",
      category: "electronics"
    },
  {
      id: 39,
      title: "Bhagavad Gita",
      price: 4599,
      image: "https://m.media-amazon.com/images/I/71KKNz7YOyL._AC_UF1000,1000_QL80_.jpg",
      category: "books"
    },
  {
      id: 40,
      title: "Mein Kamph",
      price: 1899,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdoB1IeIWWtTepAxEnSft7T4d04cUAOPmSA&s",
      category: "books"
    },
  {
      id: 41,
      title: "Mixer Grinder",
      price: 899,
      image: "https://judge.ttkprestige.com/media/catalog/product/4/9/4995-50116-IMG1.jpg",
      category: "homeappliances"
    },
  {
      id: 42,
      title: "The World Encyclopedia",
      price: 2000,
      image: "https://m.media-amazon.com/images/I/71HCZ1XF9NL._AC_UF1000,1000_QL80_.jpg",
      category: "books"
    },
  {
      id: 43,
      title: "Walkie Talkie Pro",
      price: 4899,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEwWo-WxMZxhEs5H9CI0B2HJRt3g1IaRFEw&s",
      category: "electronics"
    },
  {
      id: 44,
      title: "Soft Cotton Half Saree",
      price: 3299,
      image: "https://clothsvilla.com/cdn/shop/products/Digital-Printed-Soft-Cotton-Half-Saree-Set-Lehenga-pink-Dupatta-in-women-design-by-looknbook-art_1200x1200.jpg?v=1680886428",
      category: "Women"
    },
  {
      id: 45,
      title: "Sterling Silver Bangles",
      price: 11000,
      image: "https://karizmajewels.in/cdn/shop/files/bngle0m20.jpg?v=1737192771",
      category: "Women"
    },
  {
      id: 46,
      title: "Ethnic Silver Anklet",
      price: 650,
      image: "https://jokerandwitch.com/cdn/shop/products/TEJ392_2.jpg?v=1612510354&width=1080",
      category: "Women"
    },
  {
      id: 47,
      title: "Stylish Cap",
      price: 200,
      image: "https://www.shutterstock.com/image-photo/green-baseball-cap-classic-headwear-600nw-2611596349.jpg",
      category: "accessories"
    },
  {
      id: 48,
      title: "Men's Outfit Combo",
      price: 2199,
      image: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2024/10/LP-1248-Revised-1.jpg",
      category: "fashion"
    },
  {
      id: 49,
      title: "Rubi's Cube",
      price: 149,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdRT_QCL7vLtSs826Y0FAhIk_NrnTVXidkg&s",
      category: "accessories"
    },
  {
      id: 50,
      title: "Jagyaseni",
      price: 599,
      image: "https://m.media-amazon.com/images/I/41Yqx-J++VL._AC_UF350,350_QL50_.jpg",
      category: "books"
    },
  {
      id: 51,
      title: "How To Die Famous",
      price: 900,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXLIGyN2pK-KaEKL_eiB2uVy4SaCL0lHsHg&s",
      category: "books"
    },
  {
      id: 52,
      title: "The Book Thief",
      price: 1049,
      image: "https://notionpress.com/blog/wp-content/uploads/2016/07/iconic-book-covers-.png",
      category: "books"
    },
  {
      id: 53,
      title: "HP Laptop",
      price: 50249,
      image: "https://i5.walmartimages.com/seo/HP-15-6-Ryzen-5-8GB-256GB-Laptop-Rose-Gold_36809cf3-480b-47a5-94f0-e1d5e70c58c0_3.fcc0d6494b0e279a13c32c80c28abfa3.jpeg",
      category: "electronics"
    },
  {
      id: 54,
      title: "Keyboard",
      price: 899,
      image: "https://m.media-amazon.com/images/I/711hcPp2r8L._AC_UF1000,1000_QL80_.jpg",
      category: "electronics"
    },
  {
      id: 55,
      title: "Cooking Set",
      price: 3199,
      image: "https://stahlkitchens.com/cdn/shop/articles/1x1_STAHL_03_2022_8090_1_9be89164-4331-4006-9d0f-f8bc0d7684f1_grande.jpg?v=1757567793",
      category: "homeappliances"
    },
  {
     id: 56,
    title: "iPhone 14",
    price: 70000,
    category: "electronics",
    image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/310717_0_cxfolr.png"
  
    },
  {
      id: 57,
      title: "Spoon Set",
      price: 500,
      image: "https://assets.ajio.com/medias/sys_master/root/20240827/xvql/66cce1cd1d763220fa9c6f81/-473Wx593H-700325421-silver-MODEL.jpg",
      category: "homeappliances"
    },
  {
      id: 58,
      title: "Men's Blazer",
      price: 4999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQan_plvKMJQIOAVg13sUtQw7FBM_E2apqdtQ&s",
      category: "fashion"
    },
  {
      id: 59,
      title: "Elkos Shine (50)",
      price: 180,
      image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/pen/u/7/b/df-pens-sbs-original-imah9j56gvsm7cgc.jpeg?q=70",
      category: "accessories"
    },
  {
      id: 60,
      title: "Men's Formal Leather Shoes",
      price: 5499,
      image: "https://fausto.in/cdn/shop/files/FST_FOSMF-2091_BLACK_MODELS_400x.jpg?v=1773492795",
      category: "fashion"
    },
  {
      id: 61,
      title: "Prathama Prema",
      price: 699,
      image: "https://cdn.exoticindia.com/images/products/original/book-09-2024/hah061.jpg",
      category: "books"
    },

];
// localStorage.setItem("products", JSON.stringify(products));

//Product fetch
function getProductsFromStorage() {  
  let data = JSON.parse(localStorage.getItem("products"));  
  
  if (!data || data.length === 0) {  
    localStorage.setItem("products", JSON.stringify(products));  
    data = products;  
  }  
  
  return data;  
}  

const localProducts = getProductsFromStorage();


let filteredProducts = [...products];


// ================= DISPLAY =================
function displayProducts(productsList) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  if (productsList.length === 0) {
    container.innerHTML =
      "<p class='text-center col-span-full text-gray-500'>No products found 😢</p>";
    return;
  }

  productsList.forEach(product => {
    container.innerHTML += `
      <div class="product bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
           data-category="${product.category}"
           data-price="${product.price}">
        <img src="${product.image}" class="h-40 mx-auto mb-3 object-contain">
        <h3 class="font-semibold text-sm mb-1">${product.title}</h3>
        <p class="text-[#073a7a] font-bold mb-2">₹${product.price}</p>
        <button class="addToCart w-full bg-[#073a7a] text-white py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    `;
  });

  attachCartEvents();
}


// ================= FILTER LOGIC =================
function applyFilters() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const categoryValue = document.getElementById("categoryFilter").value;
  const priceValue = document.getElementById("priceFilter").value;

  let result = [...products];

  // SEARCH
  if (searchValue) {
    result = result.filter(p =>
      p.title.toLowerCase().includes(searchValue)
    );
  }

  // CATEGORY
  if (categoryValue !== "all") {
    result = result.filter(p => p.category === categoryValue);
  }

  // PRICE
  if (priceValue === "low") {
    result = result.filter(p => p.price < 500);
  } else if (priceValue === "mid") {
    result = result.filter(p => p.price >= 500 && p.price <= 1000);
  } else if (priceValue === "high") {
    result = result.filter(p => p.price > 1000);
  }

  displayProducts(result);
}




// ================= EVENTS =================
document.getElementById("searchInput").addEventListener("input", applyFilters);
document.getElementById("categoryFilter").addEventListener("change", applyFilters);
document.getElementById("priceFilter").addEventListener("change", applyFilters);

function attachCartEvents() {
  document.querySelectorAll(".addToCart").forEach(btn => {
    btn.addEventListener("click", async () => {
      const card = btn.closest(".product");
      const title = card.querySelector("h3").innerText;
      const price = Number(card.dataset.price);

      let item = { title, price, qty: 1 };

      const userId = getUserId();

      let res = await fetch(`${BASE_URL}/api/cart/${userId}`);
      let data = await res.json();
      let cart = data?.items || [];

      const existing = cart.find(p => p.title === title);

      if (existing) {
        existing.qty++;
      } else {
        cart.push(item);
      }

      await fetch(`${BASE_URL}/api/cart`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ userId, items: cart })
      });

      // updateCartCount();
       cart = [...cart]; // ensure updated
       displayCart();
       updateCartCount();

      
      // document.getElementById("cartPopup").classList.remove("hidden");

      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        timer: 1000,
        showConfirmButton: false
      });
    });
  });
}

async function updateCartCount() {
  const userId = getUserId();

  const res = await fetch(`${BASE_URL}/api/cart/${userId}`);
  const data = await res.json();

  const count = (data?.items || []).reduce((sum, item) => sum + item.qty, 0);

  document.getElementById("cartCount").innerText = count;
}

updateCartCount();


// ================= INIT =================
displayProducts(products);



// if (!localStorage.getItem("guestId")) {
//   localStorage.setItem("guestId", "guest_" + Date.now());
// }

if (!localStorage.getItem("guestId")) {
  const existingGuest = "guest_" + Date.now();
  localStorage.setItem("guestId", existingGuest);
}



window.addEventListener("DOMContentLoaded", async () => {
  if (!localStorage.getItem("guestId")) {
    localStorage.setItem("guestId", "guest_" + Date.now());
  }

  displayProducts(products);

  await loadCart();
  await updateCartCount();
});

//UserId
function getUserId() {
  const user = localStorage.getItem("user");

  if (!user) return localStorage.getItem("guestId");

  try {
    const parsed = JSON.parse(user);
    return parsed._id || localStorage.getItem("guestId");
  } catch {
    return user; 
  }
}

// function getUserId() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return user?._id || localStorage.getItem("guestId");
// }
//Cart
function toggleCart() {
  const popup = document.getElementById("cartPopup");
  popup.classList.toggle("hidden");

  if (!popup.classList.contains("hidden")) {
    loadCart(); // load cart when opened
  }
}

document.getElementById("cartBtn").addEventListener("click", toggleCart);
// document.getElementById("cartPopup").classList.remove("hidden");

//Cart load
async function loadCart() {
  const userId = getUserId();

  try {
    const res = await fetch(`${BASE_URL}/api/cart/${userId}`);
    const data = await res.json();

    cart = data?.items || [];

    displayCart();   // UI update
  } catch (err) {
    console.log("Cart load error", err);
  }
}

// Cart Display
function displayCart() {
  const container = document.getElementById("cartItems");

  if (!cart.length) {
    container.innerHTML = "<p class='text-center text-gray-500'>Cart is empty . Start Shopping</p>";
    document.getElementById("totalPrice").innerText = "0";
    return;
  }

  let total = 0;

  container.innerHTML = cart.map((item, i) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    return `
      <div class="border-b py-3 flex justify-between items-center">

        <div class="flex items-center gap-3">
          <img src="https://via.placeholder.com/50" class="w-12 h-12 rounded">
          <div>
            <p class="font-semibold">${item.title}</p>
            <p class="text-sm text-gray-500">
              ₹${item.price} × ${item.qty} = 
              <b>₹${itemTotal}</b>
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="decreaseQty(${i})" 
            class="px-2 bg-gray-200 rounded">-</button>

          <span>${item.qty}</span>

          <button onclick="increaseQty(${i})" 
            class="px-2 bg-gray-200 rounded">+</button>

          <button onclick="removeItem(${i})" 
            class="text-red-500">❌</button>
        </div>

      </div>
    `;
  }).join("");

  document.getElementById("totalPrice").innerText = total;
}

//Remove Cart

async function removeItem(i) {
  cart.splice(i, 1);

  await saveCart();
  displayCart();
  updateCartCount();
}

//inc + dec
async function increaseQty(i) {
  cart[i].qty++;

  await saveCart();
  displayCart();
  updateCartCount();
}


async function decreaseQty(i) {
  if (cart[i].qty > 1) {
    cart[i].qty--;
  } else {
    cart.splice(i, 1);
  }

  await saveCart();
  displayCart();
   updateCartCount();
}

// Cart Save
async function saveCart() {
  const userId = getUserId();

  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, items: cart })
  });

  return res.json(); 
}

// Billing
function updateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById("totalPrice").innerText = total;
}

//CheckOut
async function checkout() {
  if (!cart.length) {
    Swal.fire({
      icon: "warning",
      title: "Cart is empty 😢"
    });
    return;
  }

  const userId = getUserId();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  await fetch(`${BASE_URL}/api/order`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ userId, items: cart, total })
  });

  Swal.fire("Order Placed 🎉");

  // 🔥 FIX START
  cart = [];

  await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ userId, items: [] })
  });

  displayCart();
  updateCartCount();
}

//Invoice
function printInvoice() {
  if (!cart.length) {
    Swal.fire("Cart is empty 😢");
    return;
  }

  let total = 0;

  let content = `
    <html>
    <head>
      <title>Invoice</title>
      <style>
        body {
          font-family: Arial;
          padding: 20px;
        }
        h2 {
          text-align: center;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
        }
        th {
          background: #073a7a;
          color: white;
        }
        .total {
          text-align: right;
          font-size: 18px;
          margin-top: 15px;
        }
      </style>
    </head>
    <body>

      <h2>🧾 Invoice</h2>
      <p>Date: ${new Date().toLocaleString()}</p>

      <table>
        <tr>
          <th>Product</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
  `;

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    content += `
      <tr>
        <td>${item.title}</td>
        <td>${item.qty}</td>
        <td>₹${item.price}</td>
        <td>₹${itemTotal}</td>
      </tr>
    `;
  });

  content += `
      </table>

      <div class="total">
        <b>Grand Total: ₹${total}</b>
      </div>

    </body>
    </html>
  `;

  const win = window.open("", "_blank");
  win.document.write(content);
  win.document.close();

  // Important
  win.focus();
  win.print();
}


//Profile Modal

// ================= PROFILE MODAL =================
const profileModal = document.getElementById("profileModal");
const closeProfile = document.getElementById("closeProfile");

document.querySelector('#dropdownMenu a:nth-child(1)')
  .addEventListener("click", () => {
    profileModal.classList.remove("hidden");
    loadProfile();
  });

closeProfile.addEventListener("click", () => {
  profileModal.classList.add("hidden");
});

// Image preview
document.getElementById("changeImageBtn").onclick = () => {
  document.getElementById("profileImage").click();
};

document.getElementById("profileImage").onchange = (e) => {
  const file = e.target.files[0];
  if (file) {
    document.getElementById("profilePreview").src = URL.createObjectURL(file);
  }
};

// ================= LOAD PROFILE =================
async function loadProfile() {
  const userId = getUserId();

  const res = await fetch(`${BASE_URL}/api/user/${userId}`);
  const user = await res.json();

  document.getElementById("profileName").value = user.name || "";
  document.getElementById("profileEmail").value = user.email || "";
  document.getElementById("profileLocation").value = user.location || "";
  document.getElementById("profileContact").value = user.contact || "";

  if (user.image) {
    document.getElementById("profilePreview").src = user.image;
  }
}

// ================= SAVE PROFILE =================
document.getElementById("saveProfileBtn").addEventListener("click", async () => {
  const userId = getUserId();

  const profileData = {
    name: document.getElementById("profileName").value,
    location: document.getElementById("profileLocation").value,
    contact: document.getElementById("profileContact").value,
    image: document.getElementById("profilePreview").src
  };

  await fetch(`${BASE_URL}/api/user/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileData)
  });

  Swal.fire({
    icon: "success",
    title: "Profile Updated",
    timer: 1200,
    showConfirmButton: false
  });

  profileModal.classList.add("hidden");
});



//History Modal
const historyModal = document.getElementById("historyModal");
const closeHistory = document.getElementById("closeHistory");

document.getElementById("openHistory").addEventListener("click", async (e) => {
  e.preventDefault();
  dropdown.classList.add("hidden");
  historyModal.classList.remove("hidden");
  loadHistory();
});

closeHistory.addEventListener("click", () => {
  historyModal.classList.add("hidden");
});

// ================= LOAD HISTORY =================
async function loadHistory() {
  const userId = getUserId();

  try {
    const res = await fetch(`${BASE_URL}/api/order/${userId}`);
    const orders = await res.json();

    const list = document.getElementById("historyList");
    list.innerHTML = "";

    if (!orders || orders.length === 0) {
      list.innerHTML = "<p class='text-center text-gray-500'>No orders yet 😢</p>";
      return;
    }

    orders.forEach(order => {
      list.innerHTML += `
        <div class="border p-3 rounded mb-3">
          <p><b>Total:</b> ₹${order.total}</p>
          <p><b>Items:</b> ${order.items.length}</p>
          <p class="text-sm text-gray-500">${new Date(order.createdAt).toLocaleString()}</p>
        </div>
      `;
    });
  } catch (err) {
    document.getElementById("historyList").innerHTML =
      "<p class='text-red-500 text-center'>Error loading history</p>";
  }
} 


// ================= ADDRESS MODAL =================
const addressModal = document.getElementById("addressModal");
const closeAddress = document.getElementById("closeAddress");

document.getElementById("openAddress").addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.add("hidden");
  addressModal.classList.remove("hidden");
  loadAddress();
});

closeAddress.addEventListener("click", () => {
  addressModal.classList.add("hidden");
});

// ================= LOAD ADDRESS =================
async function loadAddress() {
  const userId = getUserId();

  try {
    const res = await fetch(`${BASE_URL}/api/user/${userId}`);
    const user = await res.json();

    if (user.address) {
      const a = user.address;

      document.getElementById("addrLine").value = a.line || "";
      document.getElementById("addrDist").value = a.dist || "";
      document.getElementById("addrState").value = a.state || "";
      document.getElementById("addrPin").value = a.pin || "";

      document.getElementById("savedAddressBox").classList.remove("hidden");
      document.getElementById("savedAddressText").innerText =
        `${a.line}, ${a.dist}, ${a.state} - ${a.pin}`;
    }
  } catch (err) {
    console.log("Error loading address", err);
  }
}

// ================= SAVE ADDRESS =================
document.getElementById("saveAddressBtn").addEventListener("click", async () => {
  const userId = getUserId();

  const address = {
    line: document.getElementById("addrLine").value,
    dist: document.getElementById("addrDist").value,
    state: document.getElementById("addrState").value,
    pin: document.getElementById("addrPin").value
  };

  await fetch(`${BASE_URL}/api/user/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address })
  });

  Swal.fire({
    icon: "success",
    title: "Address Saved",
    timer: 1200,
    showConfirmButton: false
  });

  loadAddress();
});


// OPEN SETTINGS
document.getElementById("openSettings").onclick = () => {
  document.getElementById("settingsModal").classList.remove("hidden");
};

// CLOSE
document.getElementById("closeSettings").onclick = () => {
  document.getElementById("settingsModal").classList.add("hidden");
};

// SAVE SETTINGS
document.getElementById("saveSettingsBtn").onclick = async () => {
  const userId = getUserId();

  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  await fetch(`${BASE_URL}/api/auth/update/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  Swal.fire({
    icon: "success",
    title: "Settings Updated",
    timer: 1200,
    showConfirmButton: false
  });

  document.getElementById("settingsModal").classList.add("hidden");
};