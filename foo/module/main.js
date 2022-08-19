const $input = document.querySelector("#input");
const $list = document.querySelector("#list");
const $btn = document.querySelector("#btn");
const $error = document.querySelector("#error");

function renderInputValue(value) {
  $input.value = value
}

function renderList(list) {
  $list.innerHTML = "";

  list.forEach(value => {
    const $ele = document.createElement("li");
    $ele.innerHTML = value
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
  },
  get: function (obj, prop) {
    return obj[prop]
  }
})

const list = [];

function handleInputChange() {
  $input.addEventListener("change", (evt) => {
    state.inputValue = evt.target.value.trim()
  });
}

function compact(arr){
  return arr.filter(v=> !!v);
}

function handleBtnClick() {
  $btn.addEventListener("click", () => {
    state.showErrorHint = !state.inputValue;

    state.list = compact([
      ...state.list,
      state.inputValue
    ]);

    state.inputValue = ""
  })
}

function bootstrap() {
  handleInputChange();
  handleBtnClick()
}

bootstrap()
