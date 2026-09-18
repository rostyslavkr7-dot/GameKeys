/* =========================================
   GameKeys — main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // PRODUCTS
    // ================================

    const products = [
        {
            id: 1,
            title: "Cyberpunk 2077",
            platform: "Steam",
            category: "steam",
            price: 19.99,
            oldPrice: 59.99,
            rating: 4.9,
            reviews: 2841,
            badge: "-67%",
            icon: "🤖",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg"
        },
        {
            id: 2,
            title: "EA Sports FC 25",
            platform: "Steam",
            category: "steam",
            price: 24.99,
            oldPrice: 69.99,
            rating: 4.7,
            reviews: 1520,
            badge: "-64%",
            icon: "⚽",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/2669320/header.jpg"
        },
        {
            id: 3,
            title: "Baldur's Gate 3",
            platform: "Steam",
            category: "steam",
            price: 34.99,
            oldPrice: 59.99,
            rating: 4.9,
            reviews: 5230,
            badge: "-42%",
            icon: "🐉",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg"
        },
        {
            id: 4,
            title: "Elden Ring",
            platform: "Steam",
            category: "steam",
            price: 39.99,
            oldPrice: 59.99,
            rating: 4.9,
            reviews: 6120,
            badge: "-33%",
            icon: "⚔️",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg"
        },
        {
            id: 5,
            title: "Red Dead Redemption 2",
            platform: "Steam",
            category: "steam",
            price: 29.99,
            oldPrice: 59.99,
            rating: 4.8,
            reviews: 4900,
            badge: "-50%",
            icon: "🤠",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg"
        },
        {
            id: 6,
            title: "The Witcher 3",
            platform: "Steam",
            category: "steam",
            price: 9.99,
            oldPrice: 39.99,
            rating: 4.9,
            reviews: 7800,
            badge: "-75%",
            icon: "🐺",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg"
        },
        {
            id: 7,
            title: "Grand Theft Auto V",
            platform: "Steam",
            category: "steam",
            price: 14.99,
            oldPrice: 29.99,
            rating: 4.8,
            reviews: 12000,
            badge: "-50%",
            icon: "🚗",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg"
        },
        {
            id: 8,
            title: "Hogwarts Legacy",
            platform: "Steam",
            category: "steam",
            price: 19.99,
            oldPrice: 59.99,
            rating: 4.7,
            reviews: 3500,
            badge: "-67%",
            icon: "🪄",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg"
        },
        {
            id: 9,
            title: "STALKER 2",
            platform: "Xbox",
            category: "xbox",
            price: 39.99,
            oldPrice: 59.99,
            rating: 4.6,
            reviews: 980,
            badge: "-33%",
            icon: "☢️",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1643320/header.jpg"
        },
        {
            id: 10,
            title: "Mortal Kombat 1",
            platform: "Xbox",
            category: "xbox",
            price: 29.99,
            oldPrice: 69.99,
            rating: 4.5,
            reviews: 870,
            badge: "-57%",
            icon: "🥊",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg"
        },
        {
            id: 11,
            title: "Forza Horizon 5",
            platform: "Xbox",
            category: "xbox",
            price: 34.99,
            oldPrice: 59.99,
            rating: 4.8,
            reviews: 4200,
            badge: "-42%",
            icon: "🏎️",
            image: null
        },
        {
            id: 12,
            title: "Xbox Game Pass Ultimate",
            platform: "Xbox",
            category: "xbox",
            price: 14.99,
            oldPrice: 19.99,
            rating: 4.8,
            reviews: 2100,
            badge: "-25%",
            icon: "🎮",
            image: null
        },
        {
            id: 13,
            title: "Marvel's Spider-Man 2",
            platform: "PlayStation",
            category: "playstation",
            price: 49.99,
            oldPrice: 69.99,
            rating: 4.9,
            reviews: 3200,
            badge: "-29%",
            icon: "🕷️",
            image: null
        },
        {
            id: 14,
            title: "God of War Ragnarök",
            platform: "PlayStation",
            category: "playstation",
            price: 44.99,
            oldPrice: 69.99,
            rating: 4.9,
            reviews: 2800,
            badge: "-36%",
            icon: "🪓",
            image: null
        },
        {
            id: 15,
            title: "PlayStation Plus Extra",
            platform: "PlayStation",
            category: "playstation",
            price: 39.99,
            oldPrice: 59.99,
            rating: 4.7,
            reviews: 1800,
            badge: "-33%",
            icon: "🎮",
            image: null
        },
        {
            id: 16,
            title: "Windows 11 Pro",
            platform: "Windows",
            category: "software",
            price: 24.99,
            oldPrice: 199.99,
            rating: 4.6,
            reviews: 740,
            badge: "-87%",
            icon: "🪟",
            image: null
        },
        {
            id: 17,
            title: "Microsoft Office 2024",
            platform: "Windows",
            category: "software",
            price: 39.99,
            oldPrice: 149.99,
            rating: 4.6,
            reviews: 620,
            badge: "-73%",
            icon: "📄",
            image: null
        },
        {
            id: 18,
            title: "Steam Gift Card €20",
            platform: "Steam",
            category: "giftcards",
            price: 20.00,
            oldPrice: null,
            rating: 4.9,
            reviews: 8900,
            badge: "TOP",
            icon: "🎁",
            image: null
        },
        {
            id: 19,
            title: "Steam Gift Card €50",
            platform: "Steam",
            category: "giftcards",
            price: 50.00,
            oldPrice: null,
            rating: 4.9,
            reviews: 7400,
            badge: "TOP",
            icon: "🎁",
            image: null
        },
        {
            id: 20,
            title: "PlayStation Store €50",
            platform: "PlayStation",
            category: "giftcards",
            price: 50.00,
            oldPrice: null,
            rating: 4.8,
            reviews: 3600,
            badge: "TOP",
            icon: "🎁",
            image: null
        }
    ];

    // ================================
    // ELEMENTS
    // ================================

    const productsGrid = document.getElementById("productsGrid");
    const cartSidebar = document.getElementById("cartSidebar");
    const cartItems = document.getElementById("cartItems");
    const overlay = document.getElementById("overlay");
    const sortSelect = document.getElementById("sortSelect");
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-btn");
    const cartBadge = document.querySelector(".cart-badge");
    const totalAmount = document.querySelector(".total-amount");

    let cart = [];

    // ================================
    // RENDER PRODUCTS
    // ================================

    function renderProducts(list = products) {

        if (!productsGrid) return;

        if (list.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-results">
                    <div style="font-size: 45px; margin-bottom: 10px;">🔎</div>
                    <h3>Товарів не знайдено</h3>
                    <p>Спробуй змінити пошуковий запит.</p>
                </div>
            `;
            return;
        }

        productsGrid.innerHTML = list.map(product => {

            const oldPrice = product.oldPrice
                ? `<span class="product-old-price">$${product.oldPrice.toFixed(2)}</span>`
                : "";

            const image = product.image
                ? `<img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'">`
                : "";

            return `
                <article class="product-card" data-id="${product.id}">

                    <div class="product-image">

                        <div class="product-image-fallback">
                            ${product.icon}
                        </div>

                        ${image}

                        <span class="product-badge">
                            ${product.badge}
                        </span>

                    </div>

                    <div class="product-info">

                        <h3 class="product-title">
                            ${product.title}
                        </h3>

                        <div class="product-platform">
                            🎮 ${product.platform}
                        </div>

                        <div class="product-rating">
                            ⭐ ${product.rating}
                            <span style="color: var(--text-secondary)">
                                (${product.reviews})
                            </span>
                        </div>

                        <div class="product-bottom">

                            <div>
                                ${oldPrice}

                                <div class="product-price">
                                    €${product.price.toFixed(2)}
                                </div>
                            </div>

                            <button
                                class="add-to-cart"
                                onclick="event.stopPropagation(); addToCart(${product.id})">
                                🛒 Купити
                            </button>

                        </div>

                    </div>

                </article>
            `;

        }).join("");

        document.querySelectorAll(".product-card").forEach(card => {

            card.addEventListener("click", () => {

                const id = Number(card.dataset.id);

                addToCart(id);

            });

        });
    }

    // ================================
    // CART
    // ================================

    function addToCart(productId) {

        const product = products.find(p => p.id === productId);

        if (!product) return;

        const existing = cart.find(item => item.id === productId);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCart();

        showNotification(`${product.title} додано до кошика 🛒`);

        openCart();
    }

    function removeFromCart(productId) {

        cart = cart.filter(item => item.id !== productId);

        updateCart();
    }

    function changeQuantity(productId, change) {

        const item = cart.find(item => item.id === productId);

        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        updateCart();
    }

    function updateCart() {

        const totalItems = cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

        const total = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        if (cartBadge) {
            cartBadge.textContent = totalItems;
        }

        if (totalAmount) {
            totalAmount.textContent = `€${total.toFixed(2)}`;
        }

        if (!cartItems) return;

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <p class="empty-cart">
                    Кошик порожній 🛒
                </p>
            `;

            return;
        }

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">

                <div>

                    <div class="cart-item-title">
                        ${item.title}
                    </div>

                    <div style="color: var(--text-secondary); font-size: 13px;">
                        ${item.platform}
                    </div>

                    <div class="cart-item-controls">

                        <button
                            class="quantity-btn"
                            onclick="changeQuantity(${item.id}, -1)">
                            −
                        </button>

                        <strong>${item.quantity}</strong>

                        <button
                            class="quantity-btn"
                            onclick="changeQuantity(${item.id}, 1)">
                            +
                        </button>

                    </div>

                    <button
                        class="remove-item"
                        onclick="removeFromCart(${item.id})">
                        Видалити
                    </button>

                </div>

                <div class="cart-item-price">
                    €${(item.price * item.quantity).toFixed(2)}
                </div>

            </div>
        `).join("");
    }

    // ================================
    // CART OPEN / CLOSE
    // ================================

    function openCart() {

        cartSidebar?.classList.add("open");
        overlay?.classList.add("visible");
        document.body.classList.add("cart-open");
    }

    function closeCart() {

        cartSidebar?.classList.remove("open");
        overlay?.classList.remove("visible");
        document.body.classList.remove("cart-open");
    }

    function toggleCart() {

        if (cartSidebar?.classList.contains("open")) {
            closeCart();
        } else {
            openCart();
        }
    }

    // ================================
    // CHECKOUT
    // ================================

    function showCheckout() {

        if (cart.length === 0) {

            showNotification("Спочатку додай товар у кошик 🛒");

            return;
        }

        const modal = document.getElementById("checkoutModal");

        if (!modal) {

            createCheckoutModal();

        } else {

            modal.classList.add("visible");

        }

        document.body.classList.add("modal-open");
    }

    function createCheckoutModal() {

        const modal = document.createElement("div");

        modal.id = "checkoutModal";
        modal.className = "checkout-modal visible";

        const total = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        modal.innerHTML = `

            <div class="checkout-box">

                <div class="checkout-header">

                    <h2>Оформлення замовлення</h2>

                    <button
                        class="checkout-close"
                        onclick="closeCheckout()">
                        ×
                    </button>

                </div>

                <div class="checkout-info">

                    🔒 Це поки що демонстраційна версія.
                    Реальну оплату Stripe підключимо на наступному етапі.

                </div>

                <div style="margin-bottom: 20px;">

                    <strong>Ваше замовлення:</strong>

                    <div style="margin-top: 10px;">

                        ${cart.map(item => `
                            <div style="
                                display:flex;
                                justify-content:space-between;
                                gap:10px;
                                margin-bottom:7px;
                            ">
                                <span>
                                    ${item.title} × ${item.quantity}
                                </span>

                                <strong>
                                    €${(item.price * item.quantity).toFixed(2)}
                                </strong>
                            </div>
                        `).join("")}

                    </div>

                </div>

                <div style="
                    display:flex;
                    justify-content:space-between;
                    font-size:22px;
                    font-weight:800;
                    margin-bottom:20px;
                ">

                    <span>Разом:</span>

                    <span style="color:var(--accent)">
                        €${total.toFixed(2)}
                    </span>

                </div>

                <form
                    class="checkout-form"
                    id="checkoutForm">

                    <div class="form-group">

                        <label for="customerName">
                            Ім'я
                        </label>

                        <input
                            id="customerName"
                            type="text"
                            placeholder="Твоє ім'я"
                            required>

                    </div>

                    <div class="form-group">

                        <label for="customerEmail">
                            Email
                        </label>

                        <input
                            id="customerEmail"
                            type="email"
                            placeholder="you@example.com"
                            required>

                    </div>

                    <button
                        type="submit"
                        class="btn btn--primary btn--full">

                        💳 Перейти до оплати

                    </button>

                </form>

            </div>
        `;

        document.body.appendChild(modal);

        document
            .getElementById("checkoutForm")
            .addEventListener("submit", event => {

                event.preventDefault();

                showNotification(
                    "Stripe ще не підключений. Наступним кроком зробимо справжню оплату 💳"
                );

            });

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeCheckout();
            }

        });
    }

    function closeCheckout() {

        const modal = document.getElementById("checkoutModal");

        modal?.classList.remove("visible");

        document.body.classList.remove("modal-open");
    }

    // ================================
    // SEARCH
    // ================================

    function searchProducts() {

        const query = searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

        const filtered = products.filter(product => {

            return (
                product.title.toLowerCase().includes(query) ||
                product.platform.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );

        });

        renderProducts(filtered);
    }

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            searchProducts
        );

    }

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            searchProducts
        );

    }

    // ================================
    // CATEGORY FILTER
    // ================================

    document
        .querySelectorAll(".nav__item")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".nav__item")
                    .forEach(btn => {
                        btn.classList.remove("active");
                    });

                button.classList.add("active");

                const category = button.dataset.category;

                let filtered;

                if (category === "all") {

                    filtered = products;

                } else {

                    filtered = products.filter(
                        product => product.category === category
                    );

                }

                renderProducts(filtered);

            });

        });

    // ================================
    // SORT
    // ================================

    if (sortSelect) {

        sortSelect.addEventListener("change", () => {

            const value = sortSelect.value;

            let sorted = [...products];

            if (value === "price-low") {

                sorted.sort(
                    (a, b) => a.price - b.price
                );

            } else if (value === "price-high") {

                sorted.sort(
                    (a, b) => b.price - a.price
                );

            } else if (value === "rating") {

                sorted.sort(
                    (a, b) => b.rating - a.rating
                );

            } else {

                sorted.sort(
                    (a, b) => b.rating - a.rating
                );

            }

            renderProducts(sorted);

        });

    }

    // ================================
    // HERO BUTTON
    // ================================

    const heroButton = document.querySelector(".hero .btn");

    if (heroButton) {

        heroButton.addEventListener("click", () => {

            document
                .querySelector(".main")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        });

    }

    // ================================
    // LOGIN / REGISTER
    // ================================

    const headerButtons = document.querySelectorAll(
        ".header__actions .btn"
    );

    headerButtons.forEach(button => {

        button.addEventListener("click", () => {

            showNotification(
                "Особистий кабінет підключимо на наступному етапі 👤"
            );

        });

    });

    // ================================
    // NOTIFICATION
    // ================================

    function showNotification(message) {

        let notification =
            document.getElementById("notification");

        if (!notification) {

            notification = document.createElement("div");

            notification.id = "notification";
            notification.className = "notification";

            document.body.appendChild(notification);
        }

        notification.textContent = message;

        notification.classList.add("visible");

        clearTimeout(
            notification._timer
        );

        notification._timer = setTimeout(() => {

            notification.classList.remove("visible");

        }, 3000);
    }

    // ================================
    // KEYBOARD
    // ================================

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeCart();
            closeCheckout();

        }

    });

    // ================================
    // GLOBAL FUNCTIONS
    // ================================
    // Потрібні для onclick у HTML

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.changeQuantity = changeQuantity;
    window.toggleCart = toggleCart;
    window.openCart = openCart;
    window.closeCart = closeCart;
    window.showCheckout = showCheckout;
    window.closeCheckout = closeCheckout;

    // ================================
    // START
    // ================================

    renderProducts();
    updateCart();

});
