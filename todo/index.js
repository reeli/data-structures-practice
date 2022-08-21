const createLister = ($renderTo) => {
  const list = []


  const render = () => {
    $renderTo.innerHTML = ""
    list.forEach((item) => {
      const $li = document.createElement("li")
      $li.innerText = item
      $renderTo.appendChild($li)
    })
  }

  return {
    add(v) {
      list.push(v)
      render()
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const $list = document.getElementById("list");
  const $input = document.getElementById("input");
  const $btn = document.getElementById("addBtn");

  const lister = createLister($list);

  $btn.addEventListener("click", () => {
    if ($input.value) {
      lister.add($input.value)
      $input.value = ""
    }
  })
});
