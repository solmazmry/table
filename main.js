

const person = document.getElementById("person");
const btn = document.getElementById("btn");
const inputName = document.getElementById("inputName");
const inputSurname = document.getElementById("inputSurname");
const data = document.getElementById("data");
let counter = 1;
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hours = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
btn.addEventListener("click", (e) => {
  if (!inputName.value && !inputSurname.value) {
    inputName.style.borderColor = "red";
    inputSurname.style.borderColor = "red";
    return;
  }
  e.preventDefault();
  data.innerHTML += `
  <td>${counter++}</td>
  <td>${inputName ? inputName.value : ""}</td>
  <td>${inputSurname ? inputSurname.value : ""}</td>
  <td> ${year}:0${month + 1}:${day}:${hours}-${minute}-${second}</td>

  `;
  inputName.value = "";
  inputSurname.value = "";
});