const inputEl = document.getElementById("input");
const insertBtn = document.getElementById("button");
const listEl = document.getElementById("list");
const alertEl = document.getElementById("alert");

insertBtn.addEventListener("click", (evt) => {
  // Get trimed input value
  const val = inputEl.value.trim();

  if (!val) {
    displayAlert(true)
  } else {
    displayAlert(false)
    addItem(val)
    resetInputValue()
  }
})

function displayAlert(isShow) {
  if (isShow) {
    alertEl.classList.add("show")
  } else {
    alertEl.classList.remove("show")
  }
}

const addedItems = [];

function addItem(value) {
  addedItems.push(value);
  renderItems()
}

function renderItems() {
  listEl.innerHTML = "";
  addedItems.forEach((value, idx) => {
    const el = document.createElement("li");
    el.innerHTML = value;

    if (idx % 3 === 2) {
      el.classList.add("red")
    }

    listEl.appendChild(el)
  })
}

function resetInputValue() {
  inputEl.value = ""
}
