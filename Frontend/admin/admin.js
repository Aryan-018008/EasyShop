const BASE_URL = "http://localhost:5000";

// PAGE SWITCHING
document.querySelectorAll(".menuBtn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(btn.dataset.page).classList.remove("hidden");
  };
});

// ADMIN MENU
adminBtn.onclick = () => adminMenu.classList.toggle("hidden");

// THEME
themeToggle.onclick = () => {
  document.documentElement.classList.toggle("dark");
};

// FETCH DATA
async function loadDashboard() {
  try {
    const users = await fetch(`${BASE_URL}/api/auth/users`).then(r => r.json());
    const orders = await fetch(`${BASE_URL}/api/order`).then(r => r.json());

    totalUsers.textContent = users.length;
    totalOrders.textContent = orders.length;
    totalRevenue.textContent =
      "₹" + orders.reduce((a, b) => a + b.total, 0);

    // Local product count
    totalProducts.textContent = localProducts.length;
  } catch (e) {
    console.log("Dashboard error", e);
  }
}

// USERS
async function loadUsers() {
  const users = await fetch(`${BASE_URL}/api/auth/users`).then(r => r.json());
  usersList.innerHTML = users.map(u =>
    `<p class="border p-2 rounded mb-2">${u.name} (${u.email})</p>`
  ).join("");
}

// PRODUCTS (LOCAL)
const localProducts = JSON.parse(localStorage.getItem("products")) || [];

function loadProducts() {
  productsList.innerHTML = localProducts.map(p => `
    <div class="bg-white dark:bg-gray-800 p-3 rounded shadow">
      <img src="${p.image}" class="h-32 mx-auto">
      <p>${p.title}</p>
      <p class="font-bold">₹${p.price}</p>
    </div>
  `).join("");
}

// ORDERS
async function loadOrders() {
  const orders = await fetch(`${BASE_URL}/api/order`).then(r => r.json());
  ordersList.innerHTML = orders.map(o =>
    `<div class="border p-2 rounded mb-2">
      <b>Total:</b> ₹${o.total} <br>
      Items: ${o.items.length}
    </div>`
  ).join("");
}

// FEEDBACK
async function loadFeedback() {
  const feedback = await fetch(`${BASE_URL}/api/feedback`).then(r => r.json());
  feedbackList.innerHTML = feedback.map(f =>
    `<div class="border p-2 rounded mb-2">
      <b>${f.name}</b> (${f.email})<br>
      ${f.message}
    </div>`
  ).join("");
}

// INIT
loadDashboard();
loadUsers();
loadProducts();
loadOrders();
loadFeedback();