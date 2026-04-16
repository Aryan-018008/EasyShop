# 🛒 EasyShop - Online Shopping Platform

## 📌 Project Overview

EasyShop is a full-stack e-commerce web application built using modern web technologies. It provides users with a seamless shopping experience and includes an admin dashboard for managing users, products, and orders.

---
##  🚀 Live Demo
EasyShop is live at - https://easy-shop-tawny.vercel.app/
---

## 🌟 Features

### 👤 User Features

* User Signup & Login
* Browse Products
* Search & Filter Products
* Add to Cart & Checkout
* Order History
* Profile Management
* Address Management
* Download Invoice

### 🛠️ Admin Features

* Dashboard Overview (Users, Orders, Revenue)
* Manage Products
* View Orders
* Monitor Feedback
* Sales Reports

---

## 🏗️ Tech Stack

### Frontend

* HTML5
* Tailwind CSS
* JavaScript (Vanilla)
* Font Awesome
* SweetAlert2

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📁 Project Structure

```
EASYSHOP/
│
├── Backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── user.js
│   │   ├── product.js
│   │   ├── order.js
│   │   ├── cart.js
│   │   └── feedback.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── cart.js
│   │   ├── order.js
│   │   ├── feedback.js
│   │   └── admin_sts.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── admin/
│   │   ├── adminD.html
│   │   └── admin.js
│   ├── user/
│   │   ├── shopping.html
│   │   ├── shopping.js
│   │   ├── feedback.html
│   │   ├── help.html
│   │   ├── blog.html
│   │   └── terms.html
│   ├── index.html
│   └── script.js
│
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```
git clone https://github.com/Aryan-018008/EasyShop.git
cd easyshop
```

### 2️⃣ Install Backend Dependencies

```
cd Backend
npm install 
```

### 3️⃣ Setup Environment Variables

Create a `.env` file inside Backend:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4️⃣ Run the Server

```
cd Backend
node server.js
```

### 5️⃣ Run Frontend

* Open `Frontend/index.html` in browser

---

## 🔗 API Overview

### Auth Routes

* POST `/api/auth/signup`
* POST `/api/auth/login`

### Cart Routes

* GET `/api/cart`
* POST `/api/cart/add`

### Order Routes

* POST `/api/orders`
* GET `/api/orders`

### Feedback Routes

* POST `/api/feedback`

### Admin Routes

* GET `/api/admin/stats`

---

## 📈 Future Improvements

* Payment Gateway Integration
* Authentication with JWT
* Product Image Upload
* Real-time Notifications
* Admin Analytics Charts

---

## 👨‍💻 Author

**Aryan Bharadwaj**

Github- https://github.com/Aryan-018008

---

## 📜 License

This project is for educational purposes.

---

