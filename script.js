const products = [
  {
    name: "Disposable Paper Plate",
    price: 20,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Disposable Cups",
    price: 25,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Food Container",
    price: 30,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Disposable Spoon",
    price: 20,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Paper Bowl",
    price: 25,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Packaging Box",
    price: 30,
    image: "https://images.unsplash.com/photo-1607166452427-7e447e0e8f5b?auto=format&fit=crop&w=800&q=80"
  }
];

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");

function showProducts() {
  if (!productGrid) {
    alert("productGrid nahi mila. index.html me ID check karo.");
    return;
  }

  productGrid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart('${product.name}')">
        Add to Cart
      </button>
    `;

    productGrid.appendChild(card);
  });

  if (productCount) {
    productCount.textContent = products.length;
  }
}

function addToCart(name) {
  alert(name + " cart me add ho gaya!");
}

showProducts();
