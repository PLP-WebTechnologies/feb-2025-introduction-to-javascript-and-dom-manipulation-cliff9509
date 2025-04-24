// Function to change the text content and apply new style
function changeTextAndStyle() {
  const intro = document.getElementById("intro-text");
  intro.textContent = "The text and style have been changed!";
  intro.classList.add("highlight");
}

// Function to add a new item to the list
function addItem() {
  const list = document.getElementById("item-list");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
}

// Function to remove the last item from the list
function removeItem() {
  const list = document.getElementById("item-list");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}
