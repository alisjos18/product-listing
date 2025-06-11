const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "images/1.jfif"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: "images/2.jfif"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1999,
    image: "images/3.jfif"
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 799,
    image: "images/4.jfif"
  },
  {
    id: 5,
    name: "Phone Tripod",
    price: 499,
    image: "images/5.jfif"
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: 1199,
    image: "images/6.jfif"
  },
  {
    id: 7,
    name: "Portable SSD",
    price: 5599,
    image: "images/7.jfif"
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 1499,
    image: "images/8.jfif"
  }
];

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-name">${product.name}</div>
      <div class="product-price">₹${product.price}</div>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

renderProducts();
