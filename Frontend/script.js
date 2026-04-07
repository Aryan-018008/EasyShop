// Open Modal
function openLoginModal() {
  document.getElementById("loginModal").classList.remove("hidden");
  document.getElementById("loginModal").classList.add("flex");
}

// Close Modal
function closeLoginModal() {
  document.getElementById("loginModal").classList.add("hidden");
}



function continueAsGuest() {
  Swal.fire({
    title: "Continue as Guest?",
    text: "You can browse and shop without logging in.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#073a7a",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, continue"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Welcome!",
        text: "Entering EasyShop...",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        window.location.href = "user/shopping.html";
      });
    }
  });
}

// Form Validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  loginUser();

  // Fake success (no backend yet)
  // Swal.fire("Success", "Login successful!", "success").then(() => {
  //   // window.location.href = openLoginModal();
  //   openLoginModal();
  // });
});


// Open Signup Modal
function openSignupModal() {
  document.getElementById("signupModal").classList.remove("hidden");
  document.getElementById("signupModal").classList.add("flex");
}

// Close Signup Modal
function closeSignupModal() {
  document.getElementById("signupModal").classList.add("hidden");
}

// Switch between modals
function switchToLogin() {
  closeSignupModal();
  openLoginModal();
}

document.addEventListener("DOMContentLoaded", function () {

  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
      e.preventDefault();
       signupUser(); 
    });
  }

});

// Admin Login
function openAdminModal() {
  document.getElementById("adminModal").classList.remove("hidden");
  document.getElementById("adminModal").classList.add("flex");
  
}

// Close Admin Modal
function closeAdminModal() {
  document.getElementById("adminModal").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {

  const adminForm = document.getElementById("adminForm");

  if (adminForm) {
    adminForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const email = document.getElementById("adminEmail").value.trim();
      const password = document.getElementById("adminPassword").value.trim();

      // Fake Admin Credentials (for now)
      const ADMIN_EMAIL = "admin@easyshop.com";
      const ADMIN_PASS = "admin123";

      if (!email || !password) {
        Swal.fire("Error", "All fields are required!", "error");
        return;
      }

      if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
        Swal.fire("Success", "Welcome Admin!", "success").then(() => {
          window.location.href = "admin/dashboard.html";
        });
      } else {
        Swal.fire("Access Denied", "Invalid admin credentials!", "error");
      }
    });
  }

});


//SignUp APi
// async function signupUser() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("signupEmail").value;
//   const password = document.getElementById("signupPassword").value;

//   const res = await fetch("http://localhost:5000/api/auth/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ name, email, password })
//   });

//   const data = await res.json();

//   if (res.ok) {
//     localStorage.setItem("token", data.token);
//     window.location.href = "user/shopping.html";
//   } else {
//     alert(data.msg);
//   }
// }

// Signup API
async function signupUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Validation
  if (!name || !email || !password || !confirmPassword) {
    Swal.fire("Error", "All fields are required!", "error");
    return;
  }

  if (!email.match(emailPattern)) {
    Swal.fire("Error", "Enter a valid email!", "error");
    return;
  }

  if (password.length < 6) {
    Swal.fire("Error", "Password must be at least 6 characters!", "error");
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire("Error", "Passwords do not match!", "error");
    return;
  }

  const res = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();

  if (res.ok) {
    Swal.fire("Success", "Account created! Please login.", "success")
      .then(() => {
        closeSignupModal();
        openLoginModal(); // 👉 redirect to login modal instead of shopping
      });
  } else {
    Swal.fire("Error", data.msg, "error");
  }
}

// Login Api
// async function loginUser() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const res = await fetch("http://localhost:5000/api/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ email, password })
//   });

//   const data = await res.json();

//   if (res.ok) {
//     localStorage.setItem("token", data.token);
//     window.location.href = "user/shopping.html";
//   } else {
//     alert(data.msg);
//   }
// }

async function loginUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email || !password) {
    Swal.fire("Error", "All fields are required!", "error");
    return;
  }

  if (!email.match(emailPattern)) {
    Swal.fire("Error", "Enter a valid email!", "error");
    return;
  }

  if (password.length < 6) {
    Swal.fire("Error", "Password must be at least 6 characters!", "error");
    return;
  }

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
  localStorage.setItem("token", data.token);

  // 🔥 MAIN FIX
  localStorage.setItem("user", data.user.name);

  console.log("Stored User:", data.user.name); // debug

  Swal.fire("Success", "Login successful!", "success")
    .then(() => {
      window.location.href = "user/shopping.html";
    });
}
  
  else {
    Swal.fire("Error", data.msg, "error");
  }
}

