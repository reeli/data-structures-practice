const $input = document.querySelector("#input");
const $list = document.querySelector("#list");
const $btn = document.querySelector("#btn");
const $error = document.querySelector("#error");

function renderInputValue(value) {
  $input.value = value
}

function renderList(list) {
  $list.innerHTML = "";

  list.forEach((value, idx) => {
    const $ele = document.createElement("li");
    const $span = document.createElement("span");
    $span.innerHTML = value

    const $icon = document.createElement("span");
    $icon.classList.add("delete")
    $icon.innerHTML = "X";
    $icon.setAttribute("id", `item-${idx}`)

    $ele.appendChild($span)
    $ele.appendChild($icon)

    $list.appendChild($ele)
  })
}

function renderErrorHint(showErrorHint) {
  if (showErrorHint) {
    $error.classList.add("show");
    return;
  }

  $error.classList.remove("show");
}

const defaultState = {
  inputValue: "",
  list: [],
  showErrorHint: false
}

const state = new Proxy(defaultState, {
  set: function (obj, prop, value) {
    obj[prop] = value;

    if (prop === "inputValue") {
      renderInputValue(value);
    }

    if (prop === "list") {
      renderList(value);
    }

    if (prop === "showErrorHint") {
      renderErrorHint(value)
    }

    return true
  }, get: function (obj, prop) {
    return obj[prop]
  }
})

const list = [];

function handleInputChange() {
  $input.addEventListener("change", (evt) => {
    state.inputValue = evt.target.value.trim()
  });
}

function compact(arr) {
  return arr.filter(v => !!v);
}

function handleBtnClick() {
  $btn.addEventListener("click", () => {
    state.showErrorHint = !state.inputValue;
    state.list = compact([...state.list, state.inputValue]);
    state.inputValue = ""
  })
}

function handleListClick() {
  $list.addEventListener("click", (evt) => {
    const id = evt.target && evt.target.getAttribute("id");
    if (id && id.startsWith("item")) {
      // evt.target.parentElement.remove();
      const num = id.split("-")
      state.list = state.list.filter((_, idx) => idx !== Number(num[1]))
    }
  })
}

function bootstrap() {
  handleInputChange();
  handleBtnClick()
  handleListClick();
}

bootstrap()
