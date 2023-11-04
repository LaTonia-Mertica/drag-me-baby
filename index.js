// SINGLE DRAGGABLE ELEMENT IN HTML
const card = document.getElementById("card");

// MULTIPLE DRAGGABLE ELEMENTS IN HTML
// const cards = document.getElementsByClassName("card");
// let currentCard;

// INCLUDE REGARDLESS NUMBER OF DRAGGABLE ELEMENTS
const dropZone = document.getElementById("drop-zone");

// SINGLE DRAGGABLE ELEMENT IN HTML
card.addEventListener("dragstart", function (event) {
  console.log(event);
});

// MULTIPLE DRAGGABLE ELEMENTS IN HTML
// for (let card of cards) {
//   card.addEventListener("dragstart", function (event) {
//     currentCard = event.target;
//   });
// }

// INCLUDE REGARDLESS NUMBER OF DRAGGABLE ELEMENTS
dropZone.addEventListener("dragover", function (event) {
  event.preventDefault();
});

// SINGLE DRAGGABLE ELEMENT IN HTML
dropZone.addEventListener("drop", function (event) {
  dropZone.prepend(card);
  console.log(event);
});

// MULTIPLE DRAGGABLE ELEMENTS IN HTML
// dropZone.addEventListener("drop", function (event) {
//   dropZone.prepend(currentCard);
//   console.log(event);
// });
