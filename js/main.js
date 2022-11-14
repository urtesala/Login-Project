import { getData, sendPost } from "./modules/fetch.js";
import { takeInputs, goTo } from "./modules/helpers.js";
import feedback from "./modules/feedback.js";

console.log("main.js");

// taikomes
const loginForm = document.forms[0];

const age = 45; // nesimato per konsole
console.log("age ===", age);
// window.myAge = 1000;
// surinkti formos duomenis

loginForm.addEventListener("submit", loginHandler);

async function loginHandler(event) {
  // sustabdyti forma
  event.preventDefault();
  // surinkti inputus
  console.log("sending");
  const loginObj = takeInputs(loginForm);
  console.log("loginObj ===", loginObj);
  const sendResult = await sendPost("https://reqres.in/api/login", loginObj);
  console.log("sendResult ===", sendResult);
  if (sendResult.error) {
    // klaida, nusiunciant duomenis arba serveryje.
    console.warn("klaida", sendResult.error);
    feedback.fail(`Klaida: ${sendResult.error}`);
  } else {
    // nera klaidos sekmingai prisiloginome.
    console.log("sekme");
    // issaugoti token
    localStorage.setItem("userToken", sendResult.token);
    localStorage.setItem("userEmail", loginObj.email);
    // naviguoti i users-only.html
    // window.location.href = 'user-only.html';
    feedback.success(`Login success, welcome ${loginObj.email}`);
    setTimeout(() => {
      goTo("user-only.html");
    }, 5000);
  }
}

// issiusti prisiloginti POST https://reqres.in/api/login

// jei duomenys yra tokie :
// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }
