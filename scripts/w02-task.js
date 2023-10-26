/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Raymund Antrone";
const currentYear = new Date().getFullYear();
const profilePicture = "images/Raymund.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#Raymund Image");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

/* Step 5 - Array */
var foodArray = [
  "Adobo",
  "pork",
  "Chicken Curry",
  "Tinola",
  "Pinakas Fish",
  "Pork sinigang",
  "melon and fruit salad",
  "horchata",
  "Chocolate",
  "pizza",
];
foodElement.innerHTML = `<strong>${foodArray.join(", ")}</strong>`;
var more_fav_food = ["pasta", "chicken curry", "Pork Sinigang", "Pinakas Fish"];
foodArray = foodArray.concat(more_fav_food);
foodElement.innerHTML += `<br><strong>${foodArray.join(", ")}</strong>`;
foodArray.shift();
foodElement.innerHTML += `<br><strong>${foodArray.join(", ")}</strong>`;
foodArray.pop();
foodElement.innerHTML += `<br><strong>${foodArray.join(", ")}</strong>`;