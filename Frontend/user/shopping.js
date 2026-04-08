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
    title: "Women Dress",
    price: 1200,
    category: "Women",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 6,
    title: "Atomic Habits Book",
    price: 399,
    category: "book",
    image: "https://via.placeholder.com/200"
  }
];

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


// ================= CART =================
function attachCartEvents() {
  const buttons = document.querySelectorAll(".addToCart");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(filteredProducts[index] || products[index]);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();

      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        timer: 1000,
        showConfirmButton: false
      });
    });
  });
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").innerText = cart.length;
}
updateCartCount();


// ================= INIT =================
displayProducts(products);