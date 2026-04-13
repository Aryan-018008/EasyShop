// // ================= USER NAME =================
// // const username = localStorage.getItem("user") || "Guest";
// // // document.getElementById("username").innerText = username.split("@")[0];
// // document.getElementById("username").innerText = username;

// const username = localStorage.getItem("user") || "Guest";

// const displayName = username.includes("@")
//   ? username.split("@")[0]
//   : username;

// document.getElementById("username").innerText = displayName;


// // ================= DATE & TIME =================
// function updateDateTime() {
//   const now = new Date();
//   const formatted = now.toLocaleString();
//   document.getElementById("dateTime").innerText = formatted;
// }
// setInterval(updateDateTime, 1000);
// updateDateTime();

// // ================= DROPDOWN =================
// const userBtn = document.getElementById("userBtn");
// const dropdown = document.getElementById("dropdownMenu");

// userBtn.addEventListener("click", () => {
//   dropdown.classList.toggle("hidden");
// });

// // Close when clicking outside
// document.addEventListener("click", (e) => {
//   if (!userBtn.contains(e.target) && !dropdown.contains(e.target)) {
//     dropdown.classList.add("hidden");
//   }
// });

// // ================= LOGOUT =================
// document.getElementById("logoutBtn").addEventListener("click", () => {
//   Swal.fire({
//     title: "Logout?",
//     text: "You will be redirected to home page",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#073a7a",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, Logout"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");

//       window.location.href = "../index.html"; 
//     }
//   });
// });

// //Display Product
// function displayProducts(products) {
//   const container = document.getElementById("productContainer");

//   container.innerHTML = "";

  
//   if (products.length === 0) {
//     container.innerHTML =
//       "<p class='text-center col-span-full'>No products found 😢</p>";
//     return;
//   }

//   products.forEach(product => {
//     container.innerHTML += `
//       <div class="product bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
//            data-category="${product.category}"
//            data-price="${product.price}">
//         <img src="${product.image}" class="h-40 mx-auto mb-3">
//         <h3 class="font-semibold text-lg">${product.title}</h3>
//         <p class="text-[#073a7a] font-bold">₹${product.price}</p>
//       </div>
//     `;
//   });
// }

// // ================= CART COUNT =================
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   document.getElementById("cartCount").innerText = cart.length;
// }
// updateCartCount();

// // ================= SEARCH =================
// document.getElementById("searchInput").addEventListener("input", function () {
//   const value = this.value.toLowerCase();
//   const cards = document.querySelectorAll(".product");

//   cards.forEach(card => {
//     const title = card.querySelector("h3").innerText.toLowerCase();
//     card.style.display = title.includes(value) ? "block" : "none";
//   });
// });

// // ================= FILTER =================
// const filterBtns = document.querySelectorAll(".filter-btn");

// filterBtns.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const category = btn.dataset.category;
//     const cards = document.querySelectorAll(".product");

//     cards.forEach(card => {
//       if (category === "all" || card.dataset.category === category) {
//         card.style.display = "block";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   });
// });

// // ================= PRICE FILTER =================
// document.getElementById("priceFilter").addEventListener("change", function () {
//   const value = this.value;
//   const cards = document.querySelectorAll(".product");

//   cards.forEach(card => {
//     const price = Number(card.dataset.price);

//     if (
//       value === "all" ||
//       (value === "low" && price < 1000) ||
//       (value === "mid" && price >= 1000 && price <= 3000) ||
//       (value === "high" && price > 3000)
//     ) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// });


// function handleEmptyState() {
//   const cards = document.querySelectorAll(".product");
//   const visible = [...cards].filter(card => card.style.display !== "none");

//   const container = document.getElementById("productContainer");
//   let msg = document.getElementById("emptyMsg");

//   if (visible.length === 0) {
//     if (!msg) {
//       msg = document.createElement("p");
//       msg.id = "emptyMsg";
//       msg.className = "text-center col-span-full text-gray-500";
//       msg.innerText = "No products found 😢";
//       container.appendChild(msg);
//     }
//   } else {
//     if (msg) msg.remove();
//   }
// }

// ================= USER NAME =================
const username = localStorage.getItem("user") || "Guest";

const displayName = username.includes("@")
  ? username.split("@")[0]
  : username;

document.getElementById("username").innerText = displayName;

let cart = [];
const BASE_URL = "http://localhost:5000";
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
    title: "iPhone 14",
    price: 70000,
    category: "electronics",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    title: "Men T-Shirt",
    price: 499,
    category: "fashion",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    title: "Gold Ring",
    price: 2500,
    category: "accessories",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 4,
    title: "Microwave Oven",
    price: 8000,
    category: "homeappliances",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 5,
    title: "Necklece",
    price: 1899,
    category: "Women",
    image: "https://via.placeholder.com/200"
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
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 9,
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 10,
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
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
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 13,
    title: "Cargo",
    price: 799,
    category: "fashion",
    image: "https://via.placeholder.com/200"
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
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 17,
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 18,
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 19,
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  
  {
    id: 20,
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 21,
    title: "Atomic Habits",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 22,
    title: "Atomic Habits Book",
    price: 399,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 23,
    title: "Earphone",
    price: 349,
    category: "electronics",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 24,
    title: "Wings of Fire",
    price: 449,
    category: "books",
    image: "https://via.placeholder.com/200"
  },
  {
      id: 25,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 26,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 27,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 28,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 29,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 30,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 31,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 32,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 33,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 34,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 35,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 36,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 37,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 38,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 39,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 40,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 41,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 42,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 43,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 44,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 45,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 46,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 47,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 48,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 49,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 50,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 51,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 52,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 53,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 54,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 55,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 56,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 57,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 58,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 59,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 60,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
      category: "books"
    },
  {
      id: 61,
      title: "One Indian Girl",
      price: 16,
      rating: { rate: 4.5 },
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/One_Indian_Girl.jpg/250px-One_Indian_Girl.jpg",
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




// function attachCartEvents() {
//   document.querySelectorAll(".addToCart").forEach(btn => {
//     btn.addEventListener("click", async () => {
//       const card = btn.closest(".product");
//       const title = card.querySelector("h3").innerText;
//       const price = Number(card.dataset.price);

//       let item = {
//         title,
//         price,
//         qty: 1
//       };

//       // backend call
//       const userId = getUserId();

//       let res = await fetch(`/api/cart/${userId}`);
//       let data = await res.json();
//       let cart = data?.items || [];

//       const existing = cart.find(p => p.title === title);

//       if (existing) {
//         existing.qty++;
//       } else {
//         cart.push(item);
//       }

//       await fetch("/api/cart", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({ userId, items: cart })
//       });

//       updateCartCount();
//       loadCart(); // 🔥 refresh instantly

//       Swal.fire({
//         icon: "success",
//         title: "Added to Cart",
//         timer: 1000,
//         showConfirmButton: false
//       });
//     });
//   });
// }

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

      updateCartCount();
      await loadCart();

      // 🔥 ADD THIS (IMPORTANT)
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

  const count = data?.items?.length || 0;
  document.getElementById("cartCount").innerText = count;
}

updateCartCount();


// ================= INIT =================
displayProducts(products);



if (!localStorage.getItem("guestId")) {
  localStorage.setItem("guestId", "guest_" + Date.now());
}

window.addEventListener("DOMContentLoaded", () => {
  loadCart();
});

//UserId
// function getUserId() {
//   const user = localStorage.getItem("user");

//   if (user && user !== "Guest") return user;

//   return localStorage.getItem("guestId");
// }

// function getUserId() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (user && user._id) return user._id;

//   return localStorage.getItem("guestId");
// }

function getUserId() {
  try {
    const userData = localStorage.getItem("user");

    // agar plain string hai → ignore
    if (!userData || userData.startsWith("{") === false) {
      return localStorage.getItem("guestId");
    }

    const user = JSON.parse(userData);

    return user._id || localStorage.getItem("guestId");

  } catch (err) {
    return localStorage.getItem("guestId");
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
// async function loadCart() {
//   // const userId = localStorage.getItem("user");
//   const userId = getUserId();

//   const res = await fetch(`/api/cart/${userId}`);
//   const data = await res.json();

//   window.cart = data?.items || [];
//   displayCart();
// }

async function loadCart() {
  const userId = getUserId();

  try {
    const res = await fetch(`${BASE_URL}/api/cart/${userId}`);
    const data = await res.json();

    cart = data?.items || [];
    displayCart();
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
function removeItem(i) {
  cart.splice(i, 1);
  saveCart();
}

//inc + dec
function increaseQty(i) {
  cart[i].qty++;
  saveCart();
}

function decreaseQty(i) {
  if (cart[i].qty > 1) cart[i].qty--;
  else cart.splice(i, 1);

  saveCart();
}

// Cart Save
async function saveCart() {
  // const userId = localStorage.getItem("user");
  const userId = getUserId();

  await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, items: cart })
  });

  displayCart();
}

// Billing
function updateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById("totalPrice").innerText = total;
}

//CheckOut
async function checkout() {
  const userId = getUserId();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  await fetch(`${BASE_URL}/api/order`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ userId, items: cart, total })
  });

  Swal.fire("Order Placed 🎉");

  cart = [];
  await saveCart();
  updateCartCount();
}

//Invoice
function printInvoice() {
  let content = "Invoice\n\n";

  cart.forEach(item => {
    content += `${item.title} x ${item.qty} = ₹${item.price * item.qty}\n`;
  });

  const win = window.open("", "", "width=600,height=600");
  win.document.write(`<pre>${content}</pre>`);
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
// ================= HISTORY MODAL =================
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