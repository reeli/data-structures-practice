const myProducts = [
  {
    id: "001",
    name: "apple"
  },
  {
    id: "002",
    name: "orange"
  },
  {
    id: "003",
    name: "pear"
  }
]

const renderProducts = ($renderTo, products) => {
  $renderTo.innerHTML = products.map(product => {
    return `
      <li>
        <span>${product.name}</span>
        <button data-evtType="addToCart" data-id="${product.id}" type="button">Add to Cart</button>
      </li>`
  }).join("")
}

const renderCartProducts = ($renderTo, products) => {
  $renderTo.innerHTML = products.map(product => {
    return `
      <li>
        <span>${product.name}</span>
        <span>${product.count}</span>
        <button data-evtType="increase" data-id="${product.id}" type="button">Increase</button>
        <button data-evtType="decrease" data-id="${product.id}" type="button">Decrease</button>
        <button data-evtType="remove" data-id="${product.id}" type="button">Remove</button>
      </li>`
  }).join("")
}

const createCart = (products) => {
  const carts = {};

  function toCartProducts() {
    return Object.values(carts).map(item => {
      const matchedProduct = products.find(v => v.id === item.id);
      return {
        id: matchedProduct ? matchedProduct.id : null,
        count: item.count,
        name: matchedProduct ? matchedProduct.name : null
      }
    }).filter(v => !!v.name && v.count > 0)
  }

  function increase(productId, step = 1, max = 10) {
    const next = carts[productId] ? (carts[productId].count + step) : 1;

    carts[productId] = {
      count: next > max ? max : next,
      id: productId
    }

    return toCartProducts();
  }

  function decrease(productId, step = 1, min = 0) {
    if (!carts[productId]) {
      return;
    }

    const next = carts[productId].count - step;

    carts[productId] = {
      count: next < min ? 0 : next,
      id: productId
    }

    return toCartProducts();
  }

  return {
    addProduct: (productId) => {
      return increase(productId);
    },
    increase,
    decrease,
    remove: (productId) => {
      carts[productId] = {
        id: null,
        name: null,
        count: 0
      }
      return toCartProducts();
    },
    toCartProducts,
  }
}


const bootstrap = () => {
  const $products = document.getElementById("products");
  const $cartProducts = document.getElementById("cart-products");

  const state = new Proxy({
    products: [],
    cartProducts: []
  }, {
    set: function (obj, prop, value) {
      obj[prop] = value;
      if (prop === "products") {
        renderProducts($products, value)
      }

      if(prop === "cartProducts"){
        renderCartProducts($cartProducts, value)
      }

      return true;
    },
    get: function (obj, prop) {
      return obj[prop]
    }
  })

  state.products = myProducts;
  const cart = createCart(myProducts);

  $products.addEventListener("click", (evt) => {
    if (evt.target.getAttribute("data-evtType") === "addToCart") {
      state.cartProducts = cart.addProduct(evt.target.getAttribute("data-id"))
    }
  })

  $cartProducts.addEventListener("click", (evt) => {
    const evtType = evt.target.getAttribute("data-evtType");
    const productId = evt.target.getAttribute("data-id");

    if (evtType === "increase") {
      state.cartProducts = cart.increase(productId)
    }

    if (evtType === "decrease") {
      state.cartProducts = cart.decrease(productId);
    }

    if (evtType === "remove") {
      state.cartProducts = cart.remove(productId);
    }
  })

}

bootstrap();
