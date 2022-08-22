class Todos {
  todos = []

  addTodo(value) {
    const list = value.split(",").filter(v => !!v);
    this.todos.push(...list)
  }

  removeTodo(idx) {
    this.todos = this.todos.filter((_, num) => num !== Number(idx));
  }

  renderTodos($renderTo) {
    $renderTo.innerHTML = "";
    $renderTo.innerHTML = this.todos.map((todo, idx) => {
      return `<li>${todo} <button data-idx="${idx}">Remove</button></li>`
    }).join("")
  }

   renderTotal($renderTo){
    $renderTo.innerHTML = `Total: <span>${this.todos.length}</span>`
  }
}

function bootstrap() {
  const $addBtn = document.getElementById("addBtn");
  const $list = document.getElementById("todos");
  const $input = document.getElementById("input");
  const $total = document.getElementById("total");

  const todos = new Todos();

  function onAdd() {
    todos.addTodo($input.value)
    $input.value = ""

    todos.renderTodos($list)
    todos.renderTotal($total)
  }

  $addBtn.addEventListener("click", onAdd)

  $list.addEventListener("click", (evt) => {
    const todoIdx = evt.target.getAttribute("data-idx");
    if (todoIdx) {
      todos.removeTodo(todoIdx)
      todos.renderTodos($list)
      todos.renderTotal($total)
    }
  })

  $input.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
      onAdd()
    }
  })
}

bootstrap()
