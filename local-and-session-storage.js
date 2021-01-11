// LOCAL STORAGE
let val;
// set item

const firstName = localStorage.setItem("firstName", "Test");
const lastName = localStorage.setItem("lastName", "User");

//get item
val = localStorage.getItem("firstName");
console.log(val);
console.log(localStorage);

//SESSION STORAGE
const city = sessionStorage.setItem("city", "New York");
const country = sessionStorage.setItem("country", "USA");

console.log(sessionStorage);
