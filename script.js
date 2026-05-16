// ==========================================
// 1. DATABASE: FULL PRODUCT STOCK CATALOG
// ==========================================
const productsDatabase = {
    smartphones: [
        { id: "sp1", brand: "iPhone", name: "iPhone 15 Pro Max", price: 79999, category: "iPhone" },
        { id: "sp2", brand: "iPhone", name: "iPhone 15 Pro", price: 74999, category: "iPhone" },
        { id: "sp3", brand: "iPhone", name: "iPhone 15", price: 65999, category: "iPhone" },
        { id: "sp4", brand: "iPhone", name: "iPhone 14", price: 56999, category: "iPhone" },
        { id: "sp5", brand: "Samsung", name: "Galaxy S24 Ultra", price: 84999, category: "Samsung" },
        { id: "sp6", brand: "Samsung", name: "Galaxy S24+", price: 74999, category: "Samsung" },
        { id: "sp7", brand: "Samsung", name: "Galaxy S23 Ultra", price: 69999, category: "Samsung" },
        { id: "sp8", brand: "Samsung", name: "Galaxy A55", price: 39999, category: "Samsung" },
        { id: "sp9", brand: "Google Pixel", name: "Pixel 8 Pro", price: 69999, category: "Google Pixel" },
        { id: "sp10", brand: "Google Pixel", name: "Pixel 8", price: 54999, category: "Google Pixel" },
        { id: "sp11", brand: "Google Pixel", name: "Pixel 7a", price: 37999, category: "Google Pixel" },
        { id: "sp12", brand: "Google Pixel", name: "Pixel 6a", price: 29999, category: "Google Pixel" },
        { id: "sp13", brand: "Vivo", name: "Vivo X100 Pro", price: 79999, category: "Vivo" },
        { id: "sp14", brand: "Vivo", name: "Vivo V30 Pro", price: 41999, category: "Vivo" },
        { id: "sp15", brand: "Vivo", name: "Vivo Y200e", price: 20999, category: "Vivo" },
        { id: "sp16", brand: "Vivo", name: "Vivo T2x", price: 12999, category: "Vivo" },
        { id: "sp17", brand: "Oppo", name: "Oppo Reno 11 Pro", price: 37999, category: "Oppo" },
        { id: "sp18", brand: "Oppo", name: "Oppo F25 Pro", price: 23999, category: "Oppo" },
        { id: "sp19", brand: "Oppo", name: "Oppo A78", price: 18499, category: "Oppo" },
        { id: "sp20", brand: "Oppo", name: "Oppo K11", price: 20999, category: "Oppo" },
        { id: "sp21", brand: "Redmi", name: "Redmi Note 13 Pro+", price: 31999, category: "Redmi" },
        { id: "sp22", brand: "Redmi", name: "Redmi 13C", price: 8999, category: "Redmi" },
        { id: "sp23", brand: "Redmi", name: "Redmi 12 5G", price: 11999, category: "Redmi" },
        { id: "sp24", brand: "Redmi", name: "Redmi A3", price: 7299, category: "Redmi" },
        { id: "sp25", brand: "Realme", name: "Realme GT 5G", price: 37999, category: "Realme" },
        { id: "sp26", brand: "Realme", name: "Realme 12 Pro+", price: 29999, category: "Realme" },
        { id: "sp27", brand: "Realme", name: "Realme Narzo 70", price: 15999, category: "Realme" },
        { id: "sp28", brand: "Realme", name: "Realme C65", price: 11999, category: "Realme" },
        { id: "sp29", brand: "Poco", name: "Poco X6 Pro", price: 24999, category: "Poco" },
        { id: "sp30", brand: "Poco", name: "Poco F5 5G", price: 29999, category: "Poco" },
        { id: "sp31", brand: "Poco", name: "Poco M6 Pro", price: 10999, category: "Poco" },
        { id: "sp32", brand: "Poco", name: "Poco C65", price: 8499, category: "Poco" },
        { id: "sp33", brand: "Nothing", name: "Nothing Phone (2)", price: 36999, category: "Nothing" },
        { id: "sp34", brand: "Nothing", name: "Nothing Phone (2a)", price: 23999, category: "Nothing" },
        { id: "sp35", brand: "Nothing", name: "Nothing Phone (1)", price: 27999, category: "Nothing" }
    ],
    keypad: [
        { id: "kp1", brand: "Samsung", name: "Guru Music 2", price: 2499, category: "Samsung" },
        { id: "kp2", brand: "Samsung", name: "Metro XL", price: 3499, category: "Samsung" },
        { id: "kp3", brand: "Samsung", name: "Guru Plus B110", price: 1749, category: "Samsung" },
        { id: "kp4", brand: "Nokia", name: "Nokia 105 SS", price: 1299, category: "Nokia" },
        { id: "kp5", brand: "Nokia", name: "Nokia 110 4G", price: 2499, category: "Nokia" },
        { id: "kp6", brand: "Nokia", name: "Nokia 225 4G", price: 3599, category: "Nokia" },
        { id: "kp7", brand: "Nokia", name: "Nokia 5310", price: 4049, category: "Nokia" },
        { id: "kp8", brand: "Lava", name: "Lava A1 Flex", price: 1149, category: "Lava" },
        { id: "kp9", brand: "Lava", name: "Lava Flip", price: 1799, category: "Lava" },
        { id: "kp10", brand: "Lava", name: "Lava Gem Premium", price: 1599, category: "Lava" },
        { id: "kp11", brand: "Lava", name: "Lava Pulse", price: 1899, category: "Lava" },
        { id: "kp12", brand: "Karbonn", name: "Karbonn K9 Jumbo", price: 1449, category: "Karbonn" },
        { id: "kp13", brand: "Karbonn", name: "Karbonn KX3", price: 1099, category: "Karbonn" },
        { id: "kp14", brand: "Karbonn", name: "Karbonn K77", price: 1349, category: "Karbonn" },
        { id: "kp15", brand: "Karbonn", name: "Karbonn K14", price: 1199, category: "Karbonn" }
    ],
    refurbished: [
        { id: "rf1", brand: "iPhone", name: "iPhone 13 Pro (Refurbished)", price: 48999, category: "iPhone" },
        { id: "rf2", brand: "iPhone", name: "iPhone 12 Mini (Refurbished)", price: 24999, category: "iPhone" },
        { id: "rf3", brand: "iPhone", name: "iPhone 11 Pro (Refurbished)", price: 27999, category: "iPhone" },
        { id: "rf4", brand: "iPhone", name: "iPhone SE 2020 (Refurbished)", price: 12999, category: "iPhone" },
        { id: "rf5", brand: "Samsung", name: "Galaxy S22 Ultra (Refurbished)", price: 39999, category: "Samsung" },
        { id: "rf6", brand: "Samsung", name: "Galaxy S21 FE (Refurbished)", price: 18999, category: "Samsung" },
        { id: "rf7", brand: "Samsung", name: "Galaxy Note 20 Ultra (Refurbished)", price: 29999, category: "Samsung" },
        { id: "rf8", brand: "Samsung", name: "Galaxy A73 (Refurbished)", price: 21999, category: "Samsung" },
        { id: "rf9", brand: "Google Pixel", name: "Pixel 7 Pro (Refurbished)", price: 34999, category: "Google Pixel" },
        { id: "rf10", brand: "Google Pixel", name: "Pixel 6 Pro (Refurbished)", price: 24999, category: "Google Pixel" },
        { id: "rf11", brand: "Google Pixel", name: "Pixel 6a (Refurbished)", price: 17999, category: "Google Pixel" },
        { id: "rf12", brand: "Google Pixel", name: "Pixel 5 (Refurbished)", price: 12999, category: "Google Pixel" },
        { id: "rf13", brand: "Vivo", name: "Vivo V27 Pro (Refurbished)", price: 22999, category: "Vivo" },
        { id: "rf14", brand: "Vivo", name: "Vivo X90 (Refurbished)", price: 31999, category: "Vivo" },
        { id: "rf15", brand: "Vivo", name: "Vivo V25 (Refurbished)", price: 14999, category: "Vivo" },
        { id: "rf16", brand: "Vivo", name: "Vivo Y100 (Refurbished)", price: 12999, category: "Vivo" },
        { id: "rf17", brand: "Oppo", name: "Oppo Reno 10 Pro (Refurbished)", price: 23999, category: "Oppo" },
        { id: "rf18", brand: "Oppo", name: "Oppo F21 Pro (Refurbished)", price: 14999, category: "Oppo" },
        { id: "rf19", brand: "Oppo", name: "Oppo A96 (Refurbished)", price: 11999, category: "Oppo" },
        { id: "rf20", brand: "Oppo", name: "Oppo K10 (Refurbished)", price: 10499, category: "Oppo" },
        { id: "rf21", brand: "Redmi", name: "Redmi Note 12 Pro (Refurbished)", price: 15499, category: "Redmi" },
        { id: "rf22", brand: "Redmi", name: "Redmi K50i (Refurbished)", price: 14999, category: "Redmi" },
        { id: "rf23", brand: "Redmi", name: "Redmi 11 Prime (Refurbished)", price: 8499, category: "Redmi" },
        { id: "rf24", brand: "Redmi", name: "Redmi Note 11 (Refurbished)", price: 9499, category: "Redmi" },
        { id: "rf25", brand: "Realme", name: "Realme 11 Pro+ (Refurbished)", price: 18999, category: "Realme" },
        { id: "rf26", brand: "Realme", name: "Realme 10 Pro (Refurbished)", price: 13999, category: "Realme" },
        { id: "rf27", brand: "Realme", name: "Realme GT Master (Refurbished)", price: 15999, category: "Realme" },
        { id: "rf28", brand: "Realme", name: "Realme 9i (Refurbished)", price: 9499, category: "Realme" },
        { id: "rf29", brand: "Poco", name: "Poco F4 5G (Refurbished)", price: 14999, category: "Poco" },
        { id: "rf30", brand: "Poco", name: "Poco X5 Pro (Refurbished)", price: 15999, category: "Poco" },
        { id: "rf31", brand: "Poco", name: "Poco M4 Pro (Refurbished)", price: 10499, category: "Poco" },
        { id: "rf32", brand: "Poco", name: "Poco C55 (Refurbished)", price: 6499, category: "Poco" },
        { id: "rf33", brand: "Nothing", name: "Nothing Phone (1) Black (Refurbished)", price: 18999, category: "Nothing" },
        { id: "rf34", brand: "Nothing", name: "Nothing Phone (1) White (Refurbished)", price: 19499, category: "Nothing" }
    ],
    accessories: [
        ...["Item-1", "Item-2", "Item-3", "Item-4"].map((v, idx) => ({ id:`acc-we-${idx}`, cat:"accessories", mainCat:"Audio Devices", subCat:"Wired Earphones", name:`Wired Earphone ${v}`, price:399 + (idx * 50), img:"🎧" })),
        ...["Item-1", "Item-2", "Item-3", "Item-4"].map((v, idx) => ({ id:`acc-wle-${idx}`, cat:"accessories", mainCat:"Audio Devices", subCat:"Wireless Earphones", name:`Wireless Earphone ${v}`, price:999 + (idx * 100), img:"🎧" })),
        ...["Item-1", "Item-2", "Item-3", "Item-4"].map((v, idx) => ({ id:`acc-web-${idx}`, cat:"accessories", mainCat:"Audio Devices", subCat:"Wireless Earbuds", name:`Wireless Earbuds ${v}`, price:1999 + (idx * 200), img:"🎧" })),
        ...["Item-1", "Item-2", "Item-3", "Item-4"].map((v, idx) => ({ id:`acc-spk-${idx}`, cat:"accessories", mainCat:"Audio Devices", subCat:"Speakers", name:`Bluetooth Speaker ${v}`, price:1499 + (idx * 300), img:"🔊" })),
        ...["Item-1", "Item-2", "Item-3", "Item-4"].map((v, idx) => ({ id:`acc-tc-${idx}`, cat:"accessories", mainCat:"Chargers", subCat:"Type-c", name:`Type-C Charger ${v}`, price:599 + (idx * 100), img:"🔌" })),
        ...["Item-1", "Item-2", "Item-3", "Item-4"].map((v, idx) => ({ id:`acc-mu-${idx}`, cat:"accessories", mainCat:"Chargers", subCat:"Micro usb", name:`Micro USB Charger ${v}`, price:299 + (idx * 50), img:"🔌" })),
        ...["Item-1", "Item-2", "Item-3", "Item-4"].map((v, idx) => ({ id:`acc-lt-${idx}`, cat:"accessories", mainCat:"Chargers", subCat:"Lightening", name:`Lightning Charger ${v}`, price:899 + (idx * 200), img:"🔌" })),
        ...["Iphone", "Google Pixel", "Vivo", "Oppo", "Redmi", "Realme", "Poco", "Nothing", "Samsung"].flatMap(b => 
            ["Item-1", "Item-2", "Item-3", "Item-4"].map((v, idx) => ({ id:`case-${b.replace(/\s+/g, '')}-${idx}`, cat:"accessories", mainCat:"Mobile cases", subCat:b, name:`${b} Case ${v}`, price:299 + (idx * 50), img:"🛡️" }))
        ),
        { id:"acc-oth-1", cat:"accessories", mainCat:"Others", subCat:"Others", name:"Cable protector", price:99, img:"⚙️" },
        { id:"acc-oth-2", cat:"accessories", mainCat:"Others", subCat:"Others", name:"Finger pad", price:149, img:"🎮" },
        { id:"acc-oth-3", cat:"accessories", mainCat:"Others", subCat:"Others", name:"Mobile cleaning kit", price:249, img:"🧽" }
    ]
};

// Application State Parameters
let cart = [];
let currentSmartphoneBrand = "iPhone";
let currentKeypadBrand = "Samsung";
let currentRefurbishedBrand = "iPhone";
let currentAccessoryMainCat = "Audio Devices";
let currentAccessorySubCat = "Wired Earphones";

let currentSlideIndex = 0;

// Initialize on Document Loading Hooks
window.addEventListener("DOMContentLoaded", () => {
    renderAllGrids();
    initSlider();
    setupSubCategoryTabs();
});

// ==========================================
// 2. RENDERING LOGIC WITH DUAL PRICING MAPS
// ==========================================
function renderAllGrids() {
    renderGrid("smartphones-grid", productsDatabase.smartphones, currentSmartphoneBrand, "📱");
    renderGrid("keypad-grid", productsDatabase.keypad, currentKeypadBrand, "📟");
    renderGrid("refurbished-grid", productsDatabase.refurbished, currentRefurbishedBrand, "📱");
    renderAccessoryGrid();
}

function renderGrid(containerId, productArray, filterBrand, emoji) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    // Normalize target parameter string keys
    const filtered = productArray.filter(p => p.category.toLowerCase() === filterBrand.toLowerCase());
    
    grid.innerHTML = filtered.map(product => {
        // Compute psychological retail cross-out baseline cost structure (+25%)
        const originalPrice = Math.round(product.price * 1.25);
        return `
            <div class="product-card">
                <div class="product-icon-frame">${emoji}</div>
                <div class="product-brand">${product.brand.toUpperCase()}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price-wrapper">
                    <span class="price-original">₹${originalPrice.toLocaleString('en-IN')}</span>
                    <span class="price-discounted">₹${product.price.toLocaleString('en-IN')}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}', '${escapeHtml(product.name)}', ${product.price})">Add to Cart</button>
            </div>
        `;
    }).join('');
}

function renderAccessoryGrid() {
    const grid = document.getElementById("accessories-grid");
    if (!grid) return;

    // Multi-dimensional sub-object extraction check handles
    const filtered = productsDatabase.accessories.filter(p => 
        p.mainCat === currentAccessoryMainCat && 
        (currentAccessorySubCat === "" || p.subCat.toLowerCase() === currentAccessorySubCat.toLowerCase())
    );

    grid.innerHTML = filtered.map(acc => {
        const originalPrice = Math.round(acc.price * 1.30);
        return `
            <div class="product-card">
                <div class="product-icon-frame">${acc.img || '🎧'}</div>
                <div class="product-brand">${acc.subCat.toUpperCase()}</div>
                <h3 class="product-title">${acc.name}</h3>
                <div class="product-price-wrapper">
                    <span class="price-original">₹${originalPrice.toLocaleString('en-IN')}</span>
                    <span class="price-discounted">₹${acc.price.toLocaleString('en-IN')}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart('${acc.id}', '${escapeHtml(acc.name)}', ${acc.price})">Add to Cart</button>
            </div>
        `;
    }).join('');
}

// ==========================================
// 3. BRAND CATEGORY TAB TOGGLE CONTROLS
// ==========================================
function switchSmartphoneCategory(brand) {
    currentSmartphoneBrand = brand;
    toggleActiveTab("smartphone-cat-tabs", brand);
    renderGrid("smartphones-grid", productsDatabase.smartphones, brand, "📱");
}

function switchKeypadCategory(brand) {
    currentKeypadBrand = brand;
    toggleActiveTab("keypad-cat-tabs", brand);
    renderGrid("keypad-grid", productsDatabase.keypad, brand, "📟");
}

function switchRefurbishedCategory(brand) {
    currentRefurbishedBrand = brand;
    toggleActiveTab("refurbished-cat-tabs", brand);
    renderGrid("refurbished-grid", productsDatabase.refurbished, brand, "📱");
}

function switchAccessoryCategory(mainCat) {
    currentAccessoryMainCat = mainCat;
    
    const match = productsDatabase.accessories.find(a => a.mainCat === mainCat);
    currentAccessorySubCat = match ? match.subCat : "";
    
    const tabs = document.querySelectorAll("#accessories .main-cat-tabs .cat-tab");
    tabs.forEach(btn => {
        if(btn.textContent.trim().toLowerCase() === mainCat.toLowerCase()) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    setupSubCategoryTabs();
    renderAccessoryGrid();
}

function switchAccessorySubCategory(subCat) {
    currentAccessorySubCat = subCat;
    const subTabs = document.querySelectorAll("#sub-cat-tabs .sub-tab");
    subTabs.forEach(btn => {
        if(btn.textContent.trim().toLowerCase() === subCat.toLowerCase()) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    renderAccessoryGrid();
}

function setupSubCategoryTabs() {
    const container = document.getElementById("sub-cat-tabs");
    if (!container) return;

    const items = productsDatabase.accessories.filter(a => a.mainCat === currentAccessoryMainCat);
    const uniqueSubs = [...new Set(items.map(a => a.subCat))];

    if (uniqueSubs.length <= 1) {
        container.innerHTML = "";
        return;
    }

    container.innerHTML = uniqueSubs.map(sub => `
        <button class="sub-tab ${sub.toLowerCase() === currentAccessorySubCat.toLowerCase() ? 'active' : ''}" onclick="switchAccessorySubCategory('${escapeHtml(sub)}')">${sub}</button>
    `).join('');
}

function toggleActiveTab(parentContainerId, targetBrandName) {
    const buttons = document.querySelectorAll(`#${parentContainerId} .cat-tab`);
    buttons.forEach(btn => {
        if (btn.textContent.trim().toLowerCase() === targetBrandName.toLowerCase()) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// ==========================================
// 4. LIVE GLOBAL SEARH PARSING PIPELINES
// ==========================================
function handleGlobalSearch() {
    const query = document.getElementById("product-search").value.toLowerCase().trim();
    if (query === "") {
        renderAllGrids();
        return;
    }

    filterSearchGrid("smartphones-grid", productsDatabase.smartphones, query, "📱");
    filterSearchGrid("keypad-grid", productsDatabase.keypad, query, "📟");
    filterSearchGrid("refurbished-grid", productsDatabase.refurbished, query, "📱");

    const accGrid = document.getElementById("accessories-grid");
    if (accGrid) {
        const filteredAcc = productsDatabase.accessories.filter(p => 
            p.name.toLowerCase().includes(query) || p.subCat.toLowerCase().includes(query)
        );
        accGrid.innerHTML = filteredAcc.map(acc => {
            const originalPrice = Math.round(acc.price * 1.30);
            return `
                <div class="product-card">
                    <div class="product-icon-frame">${acc.img || '🎧'}</div>
                    <div class="product-brand">${acc.subCat.toUpperCase()}</div>
                    <h3 class="product-title">${acc.name}</h3>
                    <div class="product-price-wrapper">
                        <span class="price-original">₹${originalPrice.toLocaleString('en-IN')}</span>
                        <span class="price-discounted">₹${acc.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart('${acc.id}', '${escapeHtml(acc.name)}', ${acc.price})">Add to Cart</button>
                </div>
            `;
        }).join('');
    }
}

function filterSearchGrid(containerId, productArray, query, emoji) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    const filtered = productArray.filter(p => 
        p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query)
    );

    grid.innerHTML = filtered.map(product => {
        const originalPrice = Math.round(product.price * 1.25);
        return `
            <div class="product-card">
                <div class="product-icon-frame">${emoji}</div>
                <div class="product-brand">${product.brand.toUpperCase()}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price-wrapper">
                    <span class="price-original">₹${originalPrice.toLocaleString('en-IN')}</span>
                    <span class="price-discounted">₹${product.price.toLocaleString('en-IN')}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}', '${escapeHtml(product.name)}', ${product.price})">Add to Cart</button>
            </div>
        `;
    }).join('');
}

// ==========================================
// 5. SHOPPING CART CORE STORAGE ARRAYS
// ==========================================
function toggleCart() {
    const drawer = document.getElementById("cart-drawer");
    if (drawer) drawer.classList.toggle("open");
}

function addToCart(id, name, price) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCartUI();
    
    const drawer = document.getElementById("cart-drawer");
    if (drawer && !drawer.classList.contains("open")) {
        drawer.classList.add("open");
    }
}

function changeQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    
    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

function updateCartUI() {
    const totalCountElement = document.getElementById("cart-count");
    const totalAmountElement = document.getElementById("cart-total-amount");
    const itemsContainer = document.getElementById("cart-items");
    
    let totalCount = 0;
    let totalAmount = 0;
    
    if (itemsContainer) itemsContainer.innerHTML = "";

    cart.forEach(item => {
        totalCount += item.quantity;
        totalAmount += (item.price * item.quantity);
        
        if (itemsContainer) {
            const row = document.createElement("div");
            row.className = "cart-item-row";
            row.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</span>
                </div>
                <div class="cart-qty-controls">
                    <button onclick="changeQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity('${item.id}', 1)">+</button>
                </div>
            `;
            itemsContainer.appendChild(row);
        }
    });

    if (totalCountElement) totalCountElement.textContent = totalCount;
    if (totalAmountElement) totalAmountElement.textContent = `₹${totalAmount.toLocaleString('en-IN')}`;
}

// ==========================================
// 6. EXPRESS WHATSAPP CHECKOUT ORDER STRING
// ==========================================
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your shopping cart is currently empty.");
        return;
    }

    const storePhoneNumber = "919010802092"; 
    let totalAmount = 0;
    
    let message = `*ANAND MOBILES - NEW ONLINE ORDER*\n`;
    message += `------------------------------------\n`;
    
    cart.forEach((item, index) => {
        const itemSubtotal = item.price * item.quantity;
        totalAmount += itemSubtotal;
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')}\n`;
        message += `   Subtotal: ₹${itemSubtotal.toLocaleString('en-IN')}\n\n`;
    });
    
    message += `------------------------------------\n`;
    message += `*Grand Total: ₹${totalAmount.toLocaleString('en-IN')}*\n\n`;
    message += `Please confirm availability for package pickup/delivery.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919010802092?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// ==========================================
// 7. BANNER AUTO-ROTATION CAROUSEL CORE
// ==========================================
let slides = [];
let dots = [];

function initSlider() {
    slides = document.querySelectorAll(".hero-slider-container .slide");
    dots = document.querySelectorAll(".slider-dots .dot");
    if(slides.length === 0) return;
    
    setInterval(() => {
        moveSlide(1);
    }, 6000);
}

function moveSlide(direction) {
    if(slides.length === 0) return;
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    
    updateSliderUI();
}

function setSlide(index) {
    currentSlideIndex = index;
    updateSliderUI();
}

function updateSliderUI() {
    slides.forEach((slide, i) => {
        if (i === currentSlideIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    dots.forEach((dot, i) => {
        if (i === currentSlideIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
