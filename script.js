const products = [
    {
        id: 1,
        name: "🍽️ Disposable Paper Plates",
        category: "Plates",
        price: 20,
        image: "https://placehold.co/600x450?text=Paper+Plates"
    },
    {
        id: 2,
        name: "🥤 Disposable Plastic Cups",
        category: "Cups",
        price: 25,
        image: "https://placehold.co/600x450?text=Plastic+Cups"
    },
    {
        id: 3,
        name: "🥣 Disposable Paper Bowls",
        category: "Bowls",
        price: 20,
        image: "https://placehold.co/600x450?text=Paper+Bowls"
    },
    {
        id: 4,
        name: "🥄 Disposable Spoons",
        category: "Cutlery",
        price: 20,
        image: "https://placehold.co/600x450?text=Spoons"
    },
    {
        id: 5,
        name: "🍴 Disposable Forks",
        category: "Cutlery",
        price: 25,
        image: "https://placehold.co/600x450?text=Forks"
    },
    {
        id: 6,
        name: "🥡 Food Containers",
        category: "Containers",
        price: 30,
        image: "https://placehold.co/600x450?text=Food+Containers"
    },
    {
        id: 7,
        name: "📦 Takeaway Food Boxes",
        category: "Packaging",
        price: 30,
        image: "https://placehold.co/600x450?text=Takeaway+Boxes"
    },
    {
        id: 8,
        name: "🥛 Disposable Glasses",
        category: "Glasses",
        price: 20,
        image: "https://placehold.co/600x450?text=Glasses"
    },
    {
        id: 9,
        name: "☕ Disposable Paper Cups",
        category: "Cups",
        price: 25,
        image: "https://placehold.co/600x450?text=Paper+Cups"
    },
    {
        id: 10,
        name: "🍱 Aluminium Food Trays",
        category: "Food Trays",
        price: 30,
        image: "https://placehold.co/600x450?text=Aluminium+Trays"
    },
    {
        id: 11,
        name: "🍛 Disposable Meal Trays",
        category: "Food Trays",
        price: 30,
        image: "https://placehold.co/600x450?text=Meal+Trays"
    },
    {
        id: 12,
        name: "🥡 Hinged Food Containers",
        category: "Containers",
        price: 25,
        image: "https://placehold.co/600x450?text=Hinged+Containers"
    },
    {
        id: 13,
        name: "🍕 Pizza Boxes",
        category: "Packaging",
        price: 30,
        image: "https://placehold.co/600x450?text=Pizza+Boxes"
    },
    {
        id: 14,
        name: "🍰 Cake Boxes",
        category: "Packaging",
        price: 30,
        image: "https://placehold.co/600x450?text=Cake+Boxes"
    },
    {
        id: 15,
        name: "🍨 Ice Cream Cups",
        category: "Cups",
        price: 20,
        image: "https://placehold.co/600x450?text=Ice+Cream+Cups"
    },
    {
        id: 16,
        name: "🥤 Disposable Juice Cups",
        category: "Cups",
        price: 25,
        image: "https://placehold.co/600x450?text=Juice+Cups"
    },
    {
        id: 17,
        name: "🧃 Disposable Cup Lids",
        category: "Accessories",
        price: 20,
        image: "https://placehold.co/600x450?text=Cup+Lids"
    },
    {
        id: 18,
        name: "🥢 Disposable Wooden Sticks",
        category: "Cutlery",
        price: 20,
        image: "https://placehold.co/600x450?text=Wooden+Sticks"
    },
    {
        id: 19,
        name: "🥄 Wooden Spoons",
        category: "Cutlery",
        price: 25,
        image: "https://placehold.co/600x450?text=Wooden+Spoons"
    },
    {
        id: 20,
        name: "🍴 Wooden Forks",
        category: "Cutlery",
        price: 25,
        image: "https://placehold.co/600x450?text=Wooden+Forks"
    },
    {
        id: 21,
        name: "🌯 Food Wrapping Sheets",
        category: "Packaging",
        price: 20,
        image: "https://placehold.co/600x450?text=Wrapping+Sheets"
    },
    {
        id: 22,
        name: "🥪 Sandwich Boxes",
        category: "Packaging",
        price: 25,
        image: "https://placehold.co/600x450?text=Sandwich+Boxes"
    },
    {
        id: 23,
        name: "🍔 Burger Boxes",
        category: "Packaging",
        price: 25,
        image: "https://placehold.co/600x450?text=Burger+Boxes"
    },
    {
        id: 24,
        name: "🍜 Disposable Noodle Bowls",
        category: "Bowls",
        price: 30,
        image: "https://placehold.co/600x450?text=Noodle+Bowls"
    },
    {
        id: 25,
        name: "🍲 Soup Containers",
        category: "Containers",
        price: 30,
        image: "https://placehold.co/600x450?text=Soup+Containers"
    },
    {
        id: 26,
        name: "🧁 Cupcake Boxes",
        category: "Packaging",
        price: 30,
        image: "https://placehold.co/600x450?text=Cupcake+Boxes"
    },
    {
        id: 27,
        name: "🍖 Disposable Serving Trays",
        category: "Food Trays",
        price: 30,
        image: "https://placehold.co/600x450?text=Serving+Trays"
    },
    {
        id: 28,
        name: "🥡 Microwave Food Containers",
        category: "Containers",
        price: 30,
        image: "https://placehold.co/600x450?text=Microwave+Containers"
    },
    {
        id: 29,
        name: "🛍️ Disposable Carry Bags",
        category: "Packaging",
        price: 20,
        image: "https://placehold.co/600x450?text=Carry+Bags"
    },
    {
        id: 30,
        name: "📦 Packaging Boxes",
        category: "Packaging",
        price: 30,
        image: "https://placehold.co/600x450?text=Packaging+Boxes"
    }
];

let cart = [];


/* PRODUCTS DISPLAY */

function displayProducts(list = products) {

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    if (list.length === 0) {
        productList.innerHTML = "<p>❌ No product found.</p>";
        return;
    }

    list.forEach(product => {

        productList.innerHTML += `
            <div class="product">

                <img
                    src="${product.image}"
                    alt="${product.name}">

                <div class="product-content">

                    <h3>${product.name}</h3>

                    <div class="product-category">
                        🏷️ ${product.category}
                    </div>

                    <div class="price">
                        ₹${product.price}
                    </div>

                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})">

                        🛒 Add to Cart

                    </button>

                </div>

            </div>
        `;
    });
}


/* SEARCH */

function searchProducts() {

    const search = document
        .getElementById("searchBox")
        .value
        .toLowerCase()
        .trim();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    );

    displayProducts(filtered);
}


/* ADD TO CART */

function addToCart(id) {

    const product = products.find(
        product => product.id === id
    );

    const existing = cart.find(
        item => item.id === id
    );

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();

    alert("✅ Product added to your cart!");
}


/* CHANGE QUANTITY */

function changeQuantity(id, change) {

    const item = cart.find(
        product => product.id === id
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        cart = cart.filter(
            product => product.id !== id
        );
    }

    updateCart();
}


/* REMOVE PRODUCT */

function removeFromCart(id) {

    cart = cart.filter(
        product => product.id !== id
    );

    updateCart();
}


/* UPDATE CART */

function updateCart() {

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    document.getElementById("cartCount").innerText =
        cartCount;

    const cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-item-name">

                    <strong>
                        ${item.name}
                    </strong>

                    <br>

                    ₹${item.price} × ${item.quantity}

                </div>

                <div class="quantity-box">

                    <button
                        class="quantity-button"
                        onclick="changeQuantity(${item.id}, -1)">

                        −

                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        class="quantity-button"
                        onclick="changeQuantity(${item.id}, 1)">

                        +

                    </button>

                </div>

                <button
                    class="remove-button"
                    onclick="removeFromCart(${item.id})">

                    ❌

                </button>

            </div>
        `;
    });

    document.getElementById("cartTotal").innerText =
        total;
}


/* OPEN CART */

function openCart() {

    document.getElementById("cartModal").style.display =
        "block";
}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cartModal").style.display =
        "none";
}


/* OPEN CHECKOUT */

function openCheckout() {

    if (cart.length === 0) {

        alert("🛒 Your cart is empty!");

        return;
    }

    closeCart();

    document.getElementById("checkoutModal").style.display =
        "block";
}


/* CLOSE CHECKOUT */

function closeCheckout() {

    document.getElementById("checkoutModal").style.display =
        "none";
}


/* PLACE ORDER */

document.getElementById("checkoutForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name = document
            .getElementById("customerName")
            .value.trim();

        const phone = document
            .getElementById("customerPhone")
            .value.trim();

        const address = document
            .getElementById("customerAddress")
            .value.trim();

        let message =
            "🛍️ KAMBOJ EXIM WORLDWIDE\n\n";

        message +=
            "👤 Customer: " + name + "\n";

        message +=
            "📱 Mobile: " + phone + "\n";

        message +=
            "📍 Address: " + address + "\n\n";

        message +=
            "🛒 ORDER DETAILS:\n";

        let total = 0;

        cart.forEach(item => {

            const itemTotal =
                item.price * item.quantity;

            total += itemTotal;

            message +=
                "• " +
                item.name +
                " × " +
                item.quantity +
                " = ₹" +
                itemTotal +
                "\n";
        });

        message +=
            "\n💰 Total: ₹" + total;

        const encodedMessage =
            encodeURIComponent(message);

        const whatsappURL =
            "https://wa.me/919050373371?text=" +
            encodedMessage;

        window.open(
            whatsappURL,
            "_blank"
        );

        alert(
            "✅ Order details are ready. WhatsApp will open now."
        );
    }
);


/* START WEBSITE */

displayProducts();
updateCart();