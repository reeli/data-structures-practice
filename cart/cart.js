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

const createRenderer = () => {
  return {
    renderProducts: (products, $renderTo) => {
      products.forEach(product => {
        const $product = document.createElement("li");
        $product.innerHTML = `<div><span>${product.name}</span><button data-id="${product.id}">Add</button></div>`
        $renderTo.appendChild($product);
      })
    },
    renderCarts(carts, $renderTo, products) {
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

const renderer = createRenderer();

const state = new Proxy({
  carts: {},
  products
}, {
  set: function (obj, prop, value) {
    obj[prop] = value;

    if (prop === "carts") {
      renderer.renderCarts(value.data, value.container, products)
    }

    if(prop === "products"){
      renderer.renderProducts(value.data, value.container)
    }

    return true;
  },
  get: function (obj, prop) {
    return obj[prop]
  }
})

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
      return getCarts();
    },
    removeProduct(productId) {
      carts[productId] = null
      return getCarts();
    },
    increase(productId, step = 1, max = 10) {
      if (carts[productId]) {
        const next = carts[productId].count + 1;
        carts[productId] = {
          productId,
          count: next > max ? max : next
        }
      }
      return getCarts();
    },
    decrease(productId, step = 1, min = 1) {
      if (carts[productId]) {
        const next = carts[productId].count - 1;
        carts[productId] = {
          productId,
          count: next < min ? min : next
        }
      }
      return getCarts();
    },
  }
}

function bootstrap() {
  const $products = document.getElementById("products");
  const $carts = document.getElementById("carts");

  const {addProduct, removeProduct, increase, decrease} = createCart();

  state.products = {
    data: products,
    container: $products
  }

  $products.addEventListener("click", (evt) => {
    const productId = evt.target.getAttribute("data-id");
    if (productId) {
      state.carts = {
        data: addProduct(productId),
        container: $carts
      }
    }
  })

  $carts.addEventListener("click", (evt) => {
    const productId = evt.target.getAttribute("data-id");

    if (!productId) {
      return
    }

    const eventType = evt.target.getAttribute("data-eventType")

    if (eventType === "remove") {
      state.carts = {
        data: removeProduct(productId),
        container: $carts
      }
    }

    if (eventType === "increase") {
      state.carts = {
        data: increase(productId),
        container: $carts
      }
    }

    if (eventType === "decrease") {
      state.carts = {
        data: decrease(productId),
        container: $carts
      }
    }
  })
}

bootstrap()
