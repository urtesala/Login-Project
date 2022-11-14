import { goTo } from "./modules/helpers.js";
console.log("user.js");

// userToken localStorage, jei turim tai ok,
// jei ne tai redirect i index.html

const token = localStorage.getItem("userToken");
console.log("token ===", token);

// pasitikrinti ar turim token
if (token === null) {
  alert("Please login");
  // window.location.href = 'index.html';
  goTo("index.html");
}

const userEmail = localStorage.getItem("userEmail");
const userEl = document.getElementById("user");
userEl.textContent = userEmail;