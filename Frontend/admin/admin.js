if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([
    {
      id: 1,
      title: "Demo Product",
      price: 499,
      image: "https://via.placeholder.com/100"
    }
  ]));
}

const BASE_URL = "http://localhost:5000";
// const localProducts = JSON.parse(localStorage.getItem("products")) || [];

// Page Change
document.querySelectorAll(".menuBtn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(btn.dataset.page).classList.remove("hidden");
  };
});

// Admin
const adminBtn = document.getElementById("adminBtn");
const adminMenu = document.getElementById("adminMenu");
adminBtn.onclick = () => adminMenu.classList.toggle("hidden");

// Light/Dark
themeToggle.onclick = () => {
  document.documentElement.classList.toggle("dark");
};

// Dashboard Loading
// async function loadDashboard() {
//   try {
//     const users = await fetch(`${BASE_URL}/api/auth/users`).then(r => r.json());
//     const orders = await fetch(`${BASE_URL}/api/order`).then(r => r.json());
//     const feedback = await fetch(`${BASE_URL}/api/feedback`).then(r => r.json());

//     totalUsers.textContent = users.length;
//     totalOrders.textContent = orders.length;
//     totalRevenue.textContent =
//   "₹" + orders.reduce((a, b) => a + b.total, 0);
//    totalFeedbacks.textContent = feedback.length;

//     // 🔥 PRODUCTS COUNT (from shopping.js logic)
//     totalProducts.textContent = getProductCount();

//   } catch (e) {
//     console.log("Dashboard error", e);
//   }
// }

async function loadDashboard() {
  try {
    const users = await fetch(`${BASE_URL}/api/auth/users`).then(r => r.json());
    const orders = await fetch(`${BASE_URL}/api/order`).then(r => r.json());
    const feedback = await fetch(`${BASE_URL}/api/feedback`).then(r => r.json());

    totalUsers.textContent = users.length;
    totalOrders.textContent = orders.length;
    totalRevenue.textContent = "₹" + orders.reduce((a, b) => a + b.total, 0);

    totalProducts.textContent = getProductCount();
    totalFeedbacks.textContent = feedback.length; // 🔥 new

  } catch (e) {
    console.log("Dashboard error", e);
  }
}

// USERS
// async function loadUsers() {
//   const users = await fetch(`${BASE_URL}/api/auth/users`).then(r => r.json());
//   usersList.innerHTML = users.map(u =>
//     `<p class="border p-2 rounded mb-2">${u.name} (${u.email})</p>`
//   ).join("");
// }


// localStorage.setItem("products", JSON.stringify(products));

// const localProducts = JSON.parse(localStorage.getItem("products")) || [];


//Product Load
// function loadProducts() {
//   const products = JSON.parse(localStorage.getItem("products")) || [];

//   const container = document.getElementById("productsList"); // 👈 yeh missing tha

//   container.innerHTML = products.map((p, index) => `
//     <tr class="border-b hover:bg-gray-50 dark:hover:bg-gray-700">

//       <td class="p-3">${index + 1}</td>

//       <td class="p-3">
//         <img src="${p.image}" class="h-12 w-12 object-contain">
//       </td>

//       <td class="p-3 font-medium">${p.title}</td>

//       <td class="p-3 text-[#073a7a] font-bold">₹${p.price}</td>

//       <td class="p-3 flex gap-2">
//         <button onclick="editProduct(${p.id})"
//           class="bg-yellow-400 px-3 py-1 rounded text-sm">
//           Edit
//         </button>

//         <button onclick="deleteProduct(${p.id})"
//           class="bg-red-500 text-white px-3 py-1 rounded text-sm">
//           Delete
//         </button>
//       </td>

//     </tr>
//   `).join("");
// }


function loadProducts() {
  const products = getProducts(); // 🔥 fix
  const container = document.getElementById("productsList");

  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `<tr>
      <td colspan="5" class="text-center p-4">No products 😢</td>
    </tr>`;
    return;
  }

  container.innerHTML = products.map((p, index) => `
    <tr>
      <td>${index + 1}</td>
      <td><img src="${p.image}" width="50"></td>
      <td>${p.title}</td>
      <td>₹${p.price}</td>
      <td>
        <button onclick="editProduct(${p.id})">Edit</button>
        <button onclick="deleteProduct(${p.id})">Delete</button>
      </td>
    </tr>
  `).join("");
}
// function getProductCount() {
//   const products = JSON.parse(localStorage.getItem("products")) || [];
//   return products.length;
// }
// ORDERS
async function loadUsers() {
  try {
    const users = await fetch(`${BASE_URL}/api/auth/users`)
      .then(r => r.json());

    const orders = await fetch(`${BASE_URL}/api/order`)
      .then(r => r.json());

    usersList.innerHTML = users.map((u, index) => {

      // 🧠 Count orders for each user
      const userOrders = orders.filter(o => o.userId === u._id);

      return `
        <tr class="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition">
          
          <td class="p-3 font-medium">${index + 1}</td>
          
          <td class="p-3 flex items-center gap-2">
            <span class="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
              ${u.name.charAt(0).toUpperCase()}
            </span>
            ${u.name}
          </td>

          <td class="p-3 text-gray-600 dark:text-gray-300">
            ${u.email}
          </td>

          <td class="p-3">
            <span class="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">
              ${userOrders.length} Orders
            </span>
          </td>

        </tr>
      `;
    }).join("");

  } catch (err) {
    console.log("Users load error", err);
  }
}

function getProductCount() {
  
  return getProducts().length;; 
}

//Orders Loading
async function loadOrders() {
  try {
    const orders = await fetch(`${BASE_URL}/api/order`).then(r => r.json());
    const users = await fetch(`${BASE_URL}/api/auth/users`).then(r => r.json());

    ordersList.innerHTML = orders.map((o, index) => {

      // 🧠 Find user
      const user = users.find(u => u._id === o.userId);

      return `
        <tr class="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
          
          <td class="p-2">${index + 1}</td>

          <td class="p-2 font-medium">
            ${user ? user.name : "Guest"}
          </td>

          <td class="p-2 text-gray-500">
            ${user ? user.email : "-"}
          </td>

          <td class="p-2">
            ${o.items.length} items
          </td>

          <td class="p-2 text-[#073a7a] font-bold">
            ₹${o.total}
          </td>

          <td class="p-2 text-sm text-gray-400">
            ${new Date(o.createdAt).toLocaleString()}
          </td>

        </tr>
      `;
    }).join("");

  } catch (err) {
    console.log("Orders load error", err);
  }
}
// FEEDBACK
async function loadFeedback() {
  const data = await fetch(`${BASE_URL}/api/feedback`).then(r => r.json());
  feedbackList.innerHTML = data.map(f => `
  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300">
    
    <div class="flex justify-between items-center mb-2">
      <div class="flex items-center gap-2">
        <span class="bg-[#073a7a] text-white px-2 py-1 rounded-full text-xs">
          ${f.name.charAt(0).toUpperCase()}
        </span>
        <p class="font-semibold text-gray-800 dark:text-gray-200">
          ${f.name}
        </p>
      </div>

      <span class="text-xs text-gray-400">
        ${f.email}
      </span>
    </div>

    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      ${f.message}
    </p>

  </div>
`).join("");
}
//Delete Product
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  products = products.filter(p => p.id !== id);

  localStorage.setItem("products", JSON.stringify(products));

  loadProducts();
}

//Add Product
function openAddProductModal() {
  const title = prompt("Enter product name");
  const price = prompt("Enter price");
  const image = prompt("Enter image URL");

  if (!title || !price) return;

  let products = JSON.parse(localStorage.getItem("products")) || [];

  const newProduct = {
    id: Date.now(),
    title,
    price: Number(price),
    image
  };

  products.push(newProduct);

  localStorage.setItem("products", JSON.stringify(products));

  loadProducts();
}

function getProducts() {
  let data = localStorage.getItem("products");

  try {
    data = JSON.parse(data);
  } catch {
    data = [];
  }

  return Array.isArray(data) ? data : [];
}

//Edit Product
function editProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  const product = products.find(p => p.id === id);

  const newTitle = prompt("Edit name", product.title);
  const newPrice = prompt("Edit price", product.price);

  if (!newTitle || !newPrice) return;

  product.title = newTitle;
  product.price = Number(newPrice);

  localStorage.setItem("products", JSON.stringify(products));

  loadProducts();
}

document.querySelectorAll(".menuBtn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(btn.dataset.page).classList.remove("hidden");

    if (btn.dataset.page === "products") {
      loadProducts(); 
    }

    if (btn.dataset.page === "orders") {
       loadOrders();
  }
  };
});


  loadDashboard();
  loadUsers();
  loadProducts();
  loadFeedback();
  loadOrders();
