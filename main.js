addEventListener("load", main);

let items = []
const listSection = document.querySelector(".list-section")
const numberSection = document.querySelector(".number-section")

const itemForm = document.getElementById('item-form');

const addButton = document.getElementById("addBtn");
const emptyButton = document.getElementById("emptyBtn");
const randomItemButton = document.getElementById("randomItemBtn");
const randomNumberButton = document.getElementById("randomNumberBtn");

const listButton = document.getElementById('listBtn');
const numberButton = document.getElementById('numberBtn');

const randomButton = document.querySelector(".random");
const multiItem = document.getElementById("multi-item");
const inputField = document.getElementById("item");
const itemList = document.querySelector("#item-list");

const lowerLimit = document.getElementById("lowerLimit");
const upperLimit = document.getElementById("upperLimit");

const itemResult = document.getElementById("itemResult");
const numberResult = document.getElementById("numberResult");

const addEventListeners = () => {
  addButton.addEventListener("click", addItem);
  emptyButton.addEventListener("click", clearList);

  listButton.addEventListener("click", showListSection)
  numberButton.addEventListener("click", showNumberSection)

  randomItemButton.addEventListener("click", getRandomItem)
  randomNumberButton.addEventListener("click", getRandomNumber)

  inputField.addEventListener("keyup", enterKey)

  itemForm.addEventListener("submit", processForm);
}

const addItem = () => {
  let multiText = multiItem.value;
  var text = inputField.value;

  if (text === "" && multiText === "") return;

  if (text !== "")
  {
    var li = document.createElement("li");
    li.innerText = text;

    itemList.appendChild(li);
    items.push(text)
    inputField.value = ''
    inputField.focus();
  }

  if (multiText !== "")
  {
    let arrayMultiText = $('#multi-item').val().split('\n');
    items.push(...arrayMultiText)

    arrayMultiText.forEach(item => {
      var li = document.createElement("li");
      li.innerText = item;

      itemList.appendChild(li);
    });

    multiItem.value = '';
  }
}

const clearList = () => {
  items = []
  itemList.innerHTML = "";
  itemResult.innerText = "";
}

const showListSection = () => {
  listSection.style.display = "block";
  numberSection.style.display = "none";
}

const showNumberSection = () => {
  numberSection.style.display = "block";
  listSection.style.display = "none";
}

const getRandomItem = () => {
  if (items.length === 0) return;

  var item = items[Math.floor(Math.random()*items.length)];
  // console.log("item is ", item)
  itemResult.innerText = item;
}

const enterKey = (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addButton.click();
  }
}

const getRandomNumber = () => {
  let lower = lowerLimit.value
  let upper = upperLimit.value

  // Check if input field is empty
  if (lower === "" || upper === "") return;

  let number = getRandomInt(lower, upper)
  numberResult.innerText = number;
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;

  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
}

const processForm = (e) => {
  e.preventDefault();

}

function main() {
  removeEventListener("load", main);

  listSection.style.display = "none";
  numberSection.style.display = "none";

  addEventListeners()
}
