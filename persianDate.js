let date = new Date();
let pDate = new Date().toLocaleDateString("fa-IR");

let today = document.getElementById("georgianDate");
let pToday = document.getElementById("persianDate");

today.innerHTML = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
pToday.innerHTML = pDate;
