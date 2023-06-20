document.getElementById("year").innerHTML = getCurrentYear();

/**
 * @returns string: the current year
 */
function getCurrentYear() {
  let date = new Date();
  let year = date.getFullYear();
  return year;
}

/**
 * creates modals
 */
const modals = {
  card1: document.getElementById("myModal1"),
  card2: document.getElementById("myModal2"),
  card3: document.getElementById("myModal3")
};

const cards = ["card1", "card2", "card3"];

cards.forEach((cardId) => {
  let card = document.getElementById(cardId);
  card.onclick = function() {
    let modal = modals[cardId];
    modal.style.display = "flex";
    let overlay = modal.getElementsByClassName("modal-overlay")[0];
    let content = modal.getElementsByClassName("modal-content")[0];
    setTimeout(function() {
      overlay.style.opacity = "1";
      content.style.transform = "scale(1)";
      content.style.opacity = "1"; // Fade in the content
    }, 10);  // Trigger the transition effect
  };
});

let closes = document.getElementsByClassName("close");
for (let i = 0; i < closes.length; i++) {
  let close = closes[i];
  close.onclick = function(event) {
    let modal = event.target.parentElement.parentElement;
    let overlay = modal.getElementsByClassName("modal-overlay")[0];
    let content = modal.getElementsByClassName("modal-content")[0];
    overlay.style.opacity = "0";
    content.style.transform = "scale(0.7)";
    content.style.opacity = "0"; // Fade out the content
    setTimeout(function() {
      modal.style.display = "none";
    }, 500);  // Wait for the transition effect to complete
  };
}

window.onclick = function(event) {
  if (event.target.className === "modal-overlay") {
    let modal = event.target.parentElement;
    let content = modal.getElementsByClassName("modal-content")[0];
    event.target.style.opacity = "0";
    content.style.transform = "scale(0.7)";
    content.style.opacity = "0"; // Fade out the content
    setTimeout(function() {
      modal.style.display = "none";
    }, 500);  // Wait for the transition effect to complete
  }
};