const products = [
  {
    id: "001", name: "product 1",
  },
  {
    id: "002", name: "product 2",
  },
  {
    id: "003", name: "product 3",
  }
]

const createCart = () => {
  const carts = {}

  function getCarts() {
    return Object.values(carts)
  }

  return {
    addProduct(productId) {
      carts[productId] = {
        productId, count: carts[productId] ? carts[productId].count + 1 : 1
      }
    },
    removeProduct(productId) {
      carts[productId] = null
    },
    increase(productId, step = 1, max = 10) {
      if (carts[productId]) {
        const next = carts[productId].count + 1;
        carts[productId] = {
          productId,
          count: next > max ? max : next
        }
      }
    },
    decrease(productId, step = 1, min = 1) {
      if (carts[productId]) {
        const next = carts[productId].count - 1;
        carts[productId] = {
          productId,
          count: next < min ? min : next
        }
      }
    },
    renderCarts(products, $renderTo) {
      const carts = getCarts();
      $renderTo.innerHTML = carts.map(item => {
        if (!item) {
          return "";
        }
        const product = products.find(product => product.id === item.productId);
        return `
<div class="product">
  <span class="product-name">${product ? product.name : ""}</span>
  <span class="product-count">${item.count}</span>
  <button data-id="${item.productId}" data-eventType="remove">Remove</button>
  <button data-id="${item.productId}" data-eventType="increase">Plus One</button>
  <button data-id="${item.productId}" data-eventType="decrease">Minus One</button>
</div>
`
      }).join("\n")
    }
  }
}

const createProducts = () => {
  return {
    renderProducts: (products, $renderTo) => {
      products.forEach(product => {
        const $product = document.createElement("li");
        $product.innerHTML = `<div><span>${product.name}</span><button data-id="${product.id}">Add</button></div>`
        $renderTo.appendChild($product);
      })
    }
  }
}

const {renderProducts} = createProducts()

function bootstrap() {
  const $products = document.getElementById("products");
  const $carts = document.getElementById("carts");
  const {addProduct, renderCarts, removeProduct, increase, decrease} = createCart();

  renderProducts(products, $products)

  $products.addEventListener("click", (evt) => {
    const productId = evt.target.getAttribute("data-id");
    if (productId) {
      addProduct(productId)
      renderCarts(products, $carts)
    }
  })

  $carts.addEventListener("click", (evt) => {
    const productId = evt.target.getAttribute("data-id");

    if (!productId) {
      return
    }

    const eventType = evt.target.getAttribute("data-eventType")


    if (eventType === "remove") {
      removeProduct(productId)
      renderCarts(products, $carts)
    }

    if (eventType === "increase") {
      increase(productId)
      renderCarts(products, $carts)
    }

    if (eventType === "decrease") {
      decrease(productId)
      renderCarts(products, $carts)
    }
  })
}

bootstrap()
