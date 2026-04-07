// ================= USER NAME =================
// const username = localStorage.getItem("user") || "Guest";
// // document.getElementById("username").innerText = username.split("@")[0];
// document.getElementById("username").innerText = username;

const username = localStorage.getItem("user") || "Guest";

const displayName = username.includes("@")
  ? username.split("@")[0]
  : username;

document.getElementById("username").innerText = displayName;


// ================= DATE & TIME =================
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.getElementById("dateTime").innerText = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ================= DROPDOWN =================
const userBtn = document.getElementById("userBtn");
const dropdown = document.getElementById("dropdownMenu");

userBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!userBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});

// ================= LOGOUT =================
document.getElementById("logoutBtn").addEventListener("click", () => {
  Swal.fire({
    title: "Logout?",
    text: "You will be redirected to login page",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#073a7a",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "../index.html"; // adjust path if needed
    }
  });
});

//Display Product
function displayProducts(products) {
  const container = document.getElementById("productContainer");

  container.innerHTML = "";

  
  if (products.length === 0) {
    container.innerHTML =
      "<p class='text-center col-span-full'>No products found 😢</p>";
    return;
  }

  products.forEach(product => {
    container.innerHTML += `
      <div class="product bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
           data-category="${product.category}"
           data-price="${product.price}">
        <img src="${product.image}" class="h-40 mx-auto mb-3">
        <h3 class="font-semibold text-lg">${product.title}</h3>
        <p class="text-[#073a7a] font-bold">₹${product.price}</p>
      </div>
    `;
  });
}

// ================= CART COUNT =================
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").innerText = cart.length;
}
updateCartCount();

// ================= SEARCH =================
document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll(".product");

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

// ================= FILTER =================
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    const cards = document.querySelectorAll(".product");

    cards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ================= PRICE FILTER =================
document.getElementById("priceFilter").addEventListener("change", function () {
  const value = this.value;
  const cards = document.querySelectorAll(".product");

  cards.forEach(card => {
    const price = Number(card.dataset.price);

    if (
      value === "all" ||
      (value === "low" && price < 1000) ||
      (value === "mid" && price >= 1000 && price <= 3000) ||
      (value === "high" && price > 3000)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// const visibleCards = [...cards].filter(card => card.style.display !== "none");

// if (visibleCards.length === 0) {
//   document.getElementById("productContainer").innerHTML =
//     "<p class='text-center col-span-full'>No products found 😢</p>";
// }

function handleEmptyState() {
  const cards = document.querySelectorAll(".product");
  const visible = [...cards].filter(card => card.style.display !== "none");

  const container = document.getElementById("productContainer");
  let msg = document.getElementById("emptyMsg");

  if (visible.length === 0) {
    if (!msg) {
      msg = document.createElement("p");
      msg.id = "emptyMsg";
      msg.className = "text-center col-span-full text-gray-500";
      msg.innerText = "No products found 😢";
      container.appendChild(msg);
    }
  } else {
    if (msg) msg.remove();
  }
}

