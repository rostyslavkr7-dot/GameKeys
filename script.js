document.addEventListener("DOMContentLoaded", () => {

    const products = [
        {
            id: 1,
            name: "Cyberpunk 2077",
            platform: "Steam",
            price: 19.99,
            oldPrice: 59.99,
            rating: 4.9,
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
        },
        {
            id: 2,
            name: "EA Sports FC 25",
            platform: "Steam",
            price: 24.99,
            oldPrice: 69.99,
            rating: 4.7,
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg"
        },
        {
            id: 3,
            name: "Baldur's Gate 3",
            platform: "Steam",
            price: 34.99,
            oldPrice: 59.99,
            rating: 4.9,
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"
        },
        {
            id: 4,
            name: "Elden Ring",
            platform: "Steam",
            price: 39.99,
            oldPrice: 59.99,
            rating: 4.8,
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
        },
        {
            id: 5,
            name: "Red Dead Redemption 2",
            platform: "Steam",
            price: 29.99,
            oldPrice: 59.99,
            rating: 4.9,
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg"
        },
        {
            id: 6,
            name: "The Witcher 3",
            platform: "Steam",
            price: 9.99,
            oldPrice: 39.99,
            rating: 4.8,
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg"
        },
        {
            id: 7,
            name: "Grand Theft Auto V",
            platform: "Steam",
            price: 14.99,
            oldPrice: 29.99,
            rating: 4.8,
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg"
        },
        {
            id: 8,
            name: "Hogwarts Legacy",
            platform: "Steam",
            price: 19.99,
            oldPrice: 59.99,
            rating: 4.7,
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg"
        },
        {
            id: 9,
            name: "STALKER 2",
            platform: "Xbox",
            price: 39.99,
            oldPrice: 59.99,
            rating: 4.6,
            image: null
        },
        {
            id: 10,
            name: "Mortal Kombat 1",
            platform: "Xbox",
            price: 29.99,
            oldPrice: 69.99,
            rating: 4.5,
            image: null
        },
        {
            id: 11,
            name: "Forza Horizon 5",
            platform: "Xbox",
            price: 34.99,
            oldPrice: 59.99,
            rating: 4.8,
            image: null
        },
        {
            id: 12,
            name: "Xbox Game Pass Ultimate",
            platform: "Xbox",
            price: 14.99,
            oldPrice: 19.99,
            rating: 4.7,
            image: null
        },
        {
            id: 13,
            name: "Marvel's Spider-Man 2",
            platform: "PlayStation",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.9,
            image: null
        },
        {
            id: 14,
            name: "God of War Ragnarök",
            platform: "PlayStation",
            price: 44.99,
            oldPrice: 69.99,
            rating: 4.9,
            image: null
        },
        {
            id: 15,
            name: "PlayStation Plus Extra",
            platform: "PlayStation",
            price: 39.99,
            oldPrice: 59.99,
            rating: 4.6,
            image: null
        },
        {
            id: 16,
            name: "Windows 11 Pro",
            platform: "Windows",
            price: 24.99,
            oldPrice: 199.99,
            rating: 4.7,
            image: null
        },
        {
            id: 17,
            name: "Microsoft Office 2024",
            platform: "Windows",
            price: 39.99,
            oldPrice: 149.99,
            rating: 4.6,
            image: null
        },
        {
            id: 18,
            name: "Steam Gift Card €20",
            platform: "Steam",
            price: 20,
            oldPrice: null,
            rating: 5,
            image: null
        },
        {
            id: 19,
            name: "Steam Gift Card €50",
            platform: "Steam",
            price: 50,
            oldPrice: null,
            rating: 5,
            image: null
        },
        {
            id: 20,
            name: "PlayStation Store €50",
            platform: "PlayStation",
            price: 50,
            oldPrice: null,
            rating: 5,
            image: null
        }
    ];

    let cart = [];

    const productsGrid = document.getElementById("products-grid");
    const productsCount = document.getElementById("products-count");
    const noProducts = document.getElementById("no-products");

    const cartSidebar = document.getElementById("cart-sidebar");
    const cartOverlay = document.getElementById("cart-overlay");
    const cartItems = document.getElementById("cart-items");
    const cartEmpty = document.getElementById("cart-empty");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const sortSelect = document.getElementById("sort-select");

    let currentCategory = "all";
    let currentSearch = "";

    function renderProducts() {

        let filtered = products.filter(product => {

            const categoryMatch =
                currentCategory === "all" ||
                product.platform === currentCategory;

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(currentSearch.toLowerCase());

            return categoryMatch && searchMatch;
        });

        const sort = sortSelect.value;

        if (sort === "price-low") {
            filtered.sort((a, b) => a.price - b.price);
        }

        if (sort === "price-high") {
            filtered.sort((a, b) => b.price - a.price);
        }

        if (sort === "rating") {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        if (sort === "name") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        productsGrid.innerHTML = "";

        productsCount.textContent =
            `${filtered.length} товарів`;

        if (filtered.length === 0) {
            noProducts.style.display = "block";
            return;
        }

        noProducts.style.display = "none";

        filtered.forEach(product => {

            const card = document.createElement("div");
            card.className = "product-card";

            const imageHTML = product.image
                ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
                : `<div class="product-placeholder">🎮</div>`;

            const oldPriceHTML = product.oldPrice
                ? `<span class="old-price">€${product.oldPrice.toFixed(2)}</span>`
                : "";

            card.innerHTML = `
                <div class="product-image">
                    ${imageHTML}
                </div>

                <div class="product-info">

                    <div class="product-platform">
                        ${product.platform}
                    </div>

                    <h3>${product.name}</h3>

                    <div class="rating">
                        ⭐ ${product.rating}
                    </div>

                    <div class="product-bottom">

                        <div class="price">
                            <strong>€${product.price.toFixed(2)}</strong>
                            ${oldPriceHTML}
                        </div>

                        <button
                            class="add-cart-btn"
                            onclick="addToCart(${product.id})"
                        >
                            🛒
                        </button>

                    </div>

                </div>
            `;

            productsGrid.appendChild(card);
        });
    }

    window.addToCart = function(id) {

        const product = products.find(p => p.id === id);

        if (!product) return;

        const existing = cart.find(item => item.id === id);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCart();

        showNotification(
            `${product.name} додано до кошика 🛒`
        );
    };

    window.removeFromCart = function(id) {

        cart = cart.filter(item => item.id !== id);

        updateCart();
    };

    window.changeQuantity = function(id, amount) {

        const item = cart.find(item => item.id === id);

        if (!item) return;

        item.quantity += amount;

        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }

        updateCart();
    };

    function updateCart() {

        const totalItems = cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

        const totalPrice = cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );

        cartCount.textContent = totalItems;

        cartTotal.textContent =
            `€${totalPrice.toFixed(2)}`;

        if (cart.length === 0) {

            cartItems.innerHTML = "";

            cartEmpty.style.display = "block";

            return;
        }

        cartEmpty.style.display = "none";

        cartItems.innerHTML = "";

        cart.forEach(item => {

            const element = document.createElement("div");

            element.className = "cart-item";

            element.innerHTML = `
                <div class="cart-item-info">

                    <strong>${item.name}</strong>

                    <span>
                        €${item.price.toFixed(2)}
                    </span>

                </div>

                <div class="cart-item-controls">

                    <button
                        onclick="changeQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        onclick="changeQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                    <button
                        onclick="removeFromCart(${item.id})"
                    >
                        🗑️
                    </button>

                </div>
            `;

            cartItems.appendChild(element);
        });
    }

    window.openCart = function() {

        cartSidebar.classList.add("open");
        cartOverlay.classList.add("open");
        document.body.classList.add("cart-open");
    };

    window.closeCart = function() {

        cartSidebar.classList.remove("open");
        cartOverlay.classList.remove("open");
        document.body.classList.remove("cart-open");
    };

    window.toggleCart = function() {

        if (cartSidebar.classList.contains("open")) {
            closeCart();
        } else {
            openCart();
        }
    };

    document.getElementById("cart-btn")
        ?.addEventListener("click", openCart);

    document.getElementById("close-cart")
        ?.addEventListener("click", closeCart);

    cartOverlay?.addEventListener(
        "click",
        closeCart
    );

    document.querySelectorAll(".category-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".category-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                currentCategory =
                    button.dataset.category;

                renderProducts();
            });
        });

    searchInput?.addEventListener(
        "input",
        () => {

            currentSearch =
                searchInput.value.trim();

            renderProducts();
        }
    );

    searchBtn?.addEventListener(
        "click",
        () => {

            currentSearch =
                searchInput.value.trim();

            renderProducts();

            document
                .getElementById("products")
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        }
    );

    sortSelect?.addEventListener(
        "change",
        renderProducts
    );

    document.getElementById("login-btn")
        ?.addEventListener("click", () => {

            showNotification(
                "Система входу буде додана на наступному етапі 👤"
            );
        });

    window.showCheckout = function() {

        if (cart.length === 0) {

            showNotification(
                "Спочатку додай товар у кошик 🛒"
            );

            return;
        }

        let oldModal =
            document.getElementById("checkout-modal");

        if (oldModal) {
            oldModal.remove();
        }

        const total = cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );

        const modal =
            document.createElement("div");

        modal.id = "checkout-modal";

        modal.className = "checkout-modal";

        modal.innerHTML = `

            <div class="checkout-box">

                <button
                    class="close-btn"
                    id="close-checkout"
                >
                    ✕
                </button>

                <h2>💳 Оформлення замовлення</h2>

                <p>
                    Сума замовлення:
                    <strong>
                        €${total.toFixed(2)}
                    </strong>
                </p>

                <input
                    type="email"
                    id="checkout-email"
                    placeholder="Ваш Email"
                    required
                >

                <button
                    class="checkout-btn"
                    id="pay-demo"
                >
                    Оплатити €${total.toFixed(2)}
                </button>

                <small>
                    Безпечна оплата буде підключена
                    на наступному етапі.
                </small>

            </div>
        `;

        document.body.appendChild(modal);

        document.body.classList.add("modal-open");

        document
            .getElementById("close-checkout")
            .addEventListener(
                "click",
                closeCheckout
            );

        modal.addEventListener(
            "click",
            event => {

                if (event.target === modal) {
                    closeCheckout();
                }
            }
        );

        document
            .getElementById("pay-demo")
            .addEventListener(
                "click",
                () => {

                    const email =
                        document
                            .getElementById(
                                "checkout-email"
                            )
                            .value.trim();

                    if (!email) {

                        showNotification(
                            "Введи Email 📧"
                        );

                        return;
                    }

                    showNotification(
                        "Оплата буде підключена наступним етапом 💳"
                    );
                }
            );
    };

    window.closeCheckout = function() {

        const modal =
            document.getElementById(
                "checkout-modal"
            );

        if (modal) {
            modal.remove();
        }

        document.body.classList.remove(
            "modal-open"
        );
    };

    function showNotification(message) {

        const notification =
            document.getElementById(
                "notification"
            );

        if (!notification) return;

        notification.textContent = message;

        notification.classList.add("show");

        setTimeout(() => {

            notification.classList.remove(
                "show"
            );

        }, 2500);
    }

    renderProducts();

    updateCart();

});
