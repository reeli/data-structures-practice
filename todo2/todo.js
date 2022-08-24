function renderTodos($renderTo, todos) {
  $renderTo.innerHTML = todos.map(todo => {
    const checked = todo.isCompleted ? "checked='checked'" : ""
    return `<li><input type="radio" ${checked} data-evtType="toggleEvt" data-id="${todo.id}"/><span class="${todo.isCompleted ? 'line-through' : ''}" data-evtType="toggleEvt" data-id="${todo.id}">${todo.content}</span></li>`
  }).join("")
}

const createTodos = () => {
  let todos = [];
  let idx = 0;

  return {
    getTodos: () => {
      return todos;
    },
    toggleTodo: (id) => {
      todos = todos.map(todo => {
        return {
          ...todo,
          isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted
        }
      })

      return todos;
    },
    addTodo: (content) => {
      idx++
      todos = [
        ...todos,
        {
          id: `${idx}`,
          content,
          isCompleted: false
        }
      ]
      return todos;
    },
    filterTodo: (content) => {
      if(!content){
        return todos;
      }

      return todos.filter(todo=>{
        return todo.content.indexOf(content) > -1
      });
    }
  }
}


function bootstrap() {
  const $todos = document.getElementById("todos")
  const $addBtn = document.getElementById("addBtn")
  const $todoInput = document.getElementById("todoInput")
  const $searchInput = document.getElementById("search")
  const todoBuilder = createTodos();
  renderTodos($todos, todoBuilder.getTodos())

  $todos.addEventListener("click", (evt) => {
    const todoId = evt.target.getAttribute("data-id");
    const toggleEvt = evt.target.getAttribute("data-evtType");

    console.log(evt.target)
    if (toggleEvt) {
      renderTodos($todos, todoBuilder.toggleTodo(todoId))
    }
  })

  $addBtn.addEventListener("click", (evt) => {
    renderTodos($todos, todoBuilder.addTodo($todoInput.value))
    $todoInput.value = ""
  })

  $searchInput.addEventListener("blur", (evt) => {
    const todos = todoBuilder.filterTodo(evt.target.value);
    console.log(todos,'todos')
    renderTodos($todos, todos)
  })
}

bootstrap();
