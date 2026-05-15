// Complete Programmatic Inventory Dataset Pipeline Configuration
const INVENTORY = [
    // 1. Latest Smartphones Category Block
    ...["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14"].map(v => ({ id:`ls-ip-${v.replace(/\s+/g, '')}`, cat:"smartphones", brand:"Iphone", name:v, price:79999, img:"📱" })),
    ...["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S23 Ultra", "Galaxy A55"].map(v => ({ id:`ls-sam-${v.replace(/\s+/g, '')}`, cat:"smartphones", brand:"Samsung", name:v, price:84999, img:"📱" })),
    ...["Pixel 8 Pro", "Pixel 8", "Pixel 7a", "Pixel 6a"].map(v => ({ id:`ls-pix-${v.replace(/\s+/g, '')}`, cat:"smartphones", brand:"Google Pixel", name:v, price:69999, img:"📱" })),
    ...["Vivo X100 Pro", "Vivo V30 Pro", "Vivo Y200e", "Vivo T2x"].map(v => ({ id:`ls-viv-${v.replace(/\s+/g, '')}`, cat:"smartphones", brand:"Vivo", name:v, price:32999, img:"📱" })),
    ...["Oppo Reno 11 Pro", "Oppo F25 Pro", "Oppo A78", "Oppo K11"].map(v => ({ id:`ls-opp-${v.replace(/\s+/g, '')}`, cat:"smartphones", brand:"Oppo", name:v, price:29999, img:"📱" })),
    ...["Redmi Note 13 Pro+", "Redmi 13C", "Redmi 12 5G", "Redmi A3"].map(v => ({ id:`ls-red-${v.replace(/\s+/g, '')}`, cat:"smartphones", brand:"Redmi", name:v, price:16999, img:"📱" })),
    ...["Realme GT 5G", "Realme 12 Pro+", "Realme Narzo 70", "Realme C65"].map(v => ({ id:`ls-rea-${v.replace(/\s+/g, '')}`, cat:"smartphones", brand:"Realme", name:v, price:19999, img:"📱" })),
    ...["Poco X6 Pro", "Poco F5 5G", "Poco M6 Pro", "Poco C65"].map(v => ({ id:`ls-poc-${v.replace(/\s+/g, '')}`, cat:"smartphones", brand:"Poco", name:v, price:15999, img:"📱" })),
    ...["Nothing Phone (2)", "Nothing Phone (2a)", "Nothing Phone (1)"].map(v => ({ id:`ls-not-${v.replace(/\s+/g, '')}`, cat:"smartphones", brand:"Nothing", name:v, price:34999, img:"📱" })),

    // 2. Keypad Mobiles Category Block
    ...["Guru Music 2", "Metro XL", "Guru Plus B110"].map(v => ({ id:`kp-sam-${v.replace(/\s+/g, '')}`, cat:"keypad-mobiles", brand:"Samsung", name:v, price:1999, img:"📟" })),
    ...["Nokia 105 SS", "Nokia 110 4G", "Nokia 225 4G", "Nokia 5310"].map(v => ({ id:`kp-nok-${v.replace(/\s+/g, '')}`, cat:"keypad-mobiles", brand:"Nokia", name:v, price:2499, img:"📟" })),
    ...["Lava A1 Flex", "Lava Flip", "Lava Gem Premium", "Lava Pulse"].map(v => ({ id:`kp-lav-${v.replace(/\s+/g, '')}`, cat:"keypad-mobiles", brand:"Lava", name:v, price:1299, img:"📟" })),
    ...["Karbonn K9 Jumbo", "Karbonn KX3", "Karbonn K77", "Karbonn K14"].map(v => ({ id:`kp-kar-${v.replace(/\s+/g, '')}`, cat:"keypad-mobiles", brand:"Karbonn", name:v, price:1099, img:"📟" })),

    // 3. Refurbished Mobiles Category Block
    ...["iPhone 13 Pro", "iPhone 12 Mini", "iPhone 11 Pro", "iPhone SE 2020"].map(v => ({ id:`rf-ip-${v.replace(/\s+/g, '')}`, cat:"refurbished-mobiles", brand:"Iphone", name:`${v} (Refurbished)`, price:39999, img:"📱" })),
    ...["Galaxy S22 Ultra", "Galaxy S21 FE", "Galaxy Note 20 Ultra", "Galaxy A73"].map(v => ({ id:`rf-sam-${v.replace(/\s+/g, '')}`, cat:"refurbished-mobiles", brand:"Samsung", name:`${v} (Refurbished)`, price:34999, img:"📱" })),
    ...["Pixel 7 Pro", "Pixel 6 Pro", "Pixel 6a XL", "Pixel 5"].map(v => ({ id:`rf-pix-${v.replace(/\s+/g, '')}`, cat:"refurbished-mobiles", brand:"Google Pixel", name:`${v} (Refurbished)`, price:24999, img:"📱" })),
    ...["Vivo V27 Pro", "Vivo X90", "Vivo V25", "Vivo Y100"].map(v => ({ id:`rf-viv-${v.replace(/\s+/g, '')}`, cat:"refurbished-mobiles", brand:"Vivo", name:`${v} (Refurbished)`, price:18500, img:"📱" })),
    ...["Oppo Reno 10 Pro", "Oppo F21 Pro", "Oppo A96", "Oppo K10"].map(v => ({ id:`rf-opp-${v.replace(/\s+/g, '')}`, cat:"refurbished-mobiles", brand:"Oppo", name:`${v} (Refurbished)`, price:16999, img:"📱" })),
    ...["Redmi Note 12 Pro", "Redmi K50i", "Redmi 11 Prime", "Redmi Note 11"].map(v => ({ id:`rf-red-${v.replace(/\s+/g, '')}`, cat:"refurbished-mobiles", brand:"Redmi", name:`${v} (Refurbished)`, price:11499, img:"📱" })),
    ...["Realme 11 Pro+", "Realme 10 Pro", "Realme GT Master", "Realme 9i"].map(v => ({ id:`rf-rea-${v.replace(/\s+/g, '')}`, cat:"refurbished-mobiles", brand:"Realme", name:`${v} (Refurbished)`, price:12999, img:"📱" })),
    ...["Poco F4 5G", "Poco X5 Pro", "Poco M4 Pro", "Poco C55"].map(v => ({ id:`rf-poc-${v.replace(/\s+/g, '')}`, cat:"refurbished-mobiles", brand:"Poco", name:`${v} (Refurbished)`, price:10499, img:"📱" })),
    ...["Nothing Phone (1) Black", "Nothing Phone (1) White"].map(v => ({ id:`rf-not-${v.replace(/\s+/g, '')}`, cat:"refurbished-mobiles", brand:"Nothing", name:`${v} (Refurbished)`, price:21999, img:"📱" })),

    // 4. Premium Accessories System Block
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
];

// App Core State
let cart = JSON.parse(localStorage.getItem('phoneHubCart')) || [];
const WHATSAPP_NUMBER = "919876543210";
let currentActiveMainAccessory = "Audio Devices";
let currentActiveSubAccessory = "Wired Earphones";

// Slider Mechanics Configuration
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let sliderInterval = setInterval(() => moveSlide(1), 5000);

document.addEventListener('DOMContentLoaded', () => {
    renderAllGrids();
    switchAccessoryCategory('Audio Devices');
    updateCartUI();
});

// UI Grid Generator Engine
function renderAllGrids(filterQuery = "") {
    const q = filterQuery.toLowerCase();

    const buildCardHtml = (item) => `
        <div class="product-card">
            <div>
                <div class="product-image">${item.img}</div>
                <div class="brand-tag">${item.brand || item.subCat}</div>
                <h3>${item.name}</h3>
            </div>
            <div>
                <p class="price">₹${item.price.toLocaleString('en-IN')}</p>
                <button class="buy-btn" onclick="addToCart('${item.id}')">Add to Cart</button>
            </div>
        </div>
    `;

    const matchesSearch = (item) => 
        item.name.toLowerCase().includes(q) || 
        (item.brand && item.brand.toLowerCase().includes(q)) ||
        (item.subCat && item.subCat.toLowerCase().includes(q));

    // TARGET ALIGNMENT CORRECTION MATRIX
    const categoriesMapping = [
        { dataCat: "smartphones", elementId: "smartphones-grid" },
        { dataCat: "keypad-mobiles", elementId: "keypad-grid" },       // Corrected from keypad-mobiles-grid
        { dataCat: "refurbished-mobiles", elementId: "refurbished-grid" } // Corrected from refurbished-mobiles-grid
    ];

    categoriesMapping.forEach(mapping => {
        const grid = document.getElementById(mapping.elementId);
        if (!grid) return;
        const items = INVENTORY.filter(item => item.cat === mapping.dataCat && matchesSearch(item));
        grid.innerHTML = items.map(buildCardHtml).join('');
    });

    // Render Tabbed Accessory Catalog Section
    const accGrid = document.getElementById('accessories-grid');
    if (accGrid) {
        const accItems = INVENTORY.filter(item => 
            item.cat === "accessories" && 
            item.mainCat === currentActiveMainAccessory && 
            (currentActiveMainAccessory === "Others" || item.subCat.toLowerCase() === currentActiveSubAccessory.toLowerCase()) &&
            matchesSearch(item)
        );
        accGrid.innerHTML = accItems.map(buildCardHtml).join('');
    }
}

function handleGlobalSearch() {
    const query = document.getElementById('product-search').value;
    renderAllGrids(query);
}

// Accessory Context Tab Switcher
function switchAccessoryCategory(mainCat) {
    currentActiveMainAccessory = mainCat;
    
    const subs = [...new Set(INVENTORY.filter(i => i.mainCat === mainCat).map(i => i.subCat))];
    currentActiveSubAccessory = subs[0] || "";

    document.querySelectorAll('.main-cat-tabs .cat-tab').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.trim().toLowerCase() === mainCat.toLowerCase());
    });

    const subContainer = document.getElementById('sub-cat-tabs');
    if (!subContainer) return;
    
    if (mainCat === "Others" || subs.length <= 1) {
        subContainer.innerHTML = "";
    } else {
        subContainer.innerHTML = subs.map(sub => `
            <button class="sub-tab ${sub === currentActiveSubAccessory ? 'active' : ''}" 
                    onclick="switchAccessorySubCategory('${sub}')">${sub}</button>
        `).join('');
    }
    renderAllGrids();
}

function switchAccessorySubCategory(subCat) {
    currentActiveSubAccessory = subCat;
    document.querySelectorAll('#sub-cat-tabs .sub-tab').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.trim().toLowerCase() === subCat.toLowerCase());
    });
    renderAllGrids();
}

// Cart Management Mechanics
function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('open');
}

function addToCart(id) {
    const item = INVENTORY.find(i => i.id === id);
    if (!item) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: item.id, name: item.name, price: item.price, quantity: 1 });
    }
    
    syncAndRender();
    document.getElementById('cart-drawer').classList.add('open');
}

function updateQuantity(id, change) {
    const targetItem = cart.find(c => c.id === id);
    if (!targetItem) return;

    targetItem.quantity += change;

    if (targetItem.quantity <= 0) {
        cart = cart.filter(c => c.id !== id);
    }

    syncAndRender();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    syncAndRender();
}

function syncAndRender() {
    localStorage.setItem('phoneHubCart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cart-items');
    const countSpan = document.getElementById('cart-count');
    const totalSpan = document.getElementById('cart-total-amount');
    
    if (!container) return;
    container.innerHTML = '';
    let totalCount = 0;
    let totalPrice = 0;
    
    cart.forEach(c => {
        totalCount += c.quantity;
        totalPrice += (c.price * c.quantity);
        
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div class="cart-item-details-wrapper">
                <h4>${c.name}</h4>
                <p style="color:var(--accent)">₹${(c.price * c.quantity).toLocaleString('en-IN')}</p>
                
                <div class="qty-stepper-container">
                    <button class="qty-step-btn" onclick="updateQuantity('${c.id}', -1)">−</button>
                    <span class="qty-display">${c.quantity}</span>
                    <button class="qty-step-btn" onclick="updateQuantity('${c.id}', 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${c.id}')">Remove</button>
        `;
        container.appendChild(row);
    });
    
    if (countSpan) countSpan.innerText = totalCount;
    if (totalSpan) totalSpan.innerText = `₹${totalPrice.toLocaleString('en-IN')}`;
}

// WhatsApp Dispatch Flow
function checkoutWhatsApp() {
    if (cart.length === 0) return alert("Your shopping cart is empty.");
    
    let text = `Hello Anand Mobiles! I'd like to purchase these products:\n\n`;
    let grandTotal = 0;
    
    cart.forEach((c, i) => {
        const rowTotal = c.price * c.quantity;
        grandTotal += rowTotal;
        text += `${i+1}. *${c.name}* [x${c.quantity}] - ₹${rowTotal.toLocaleString('en-IN')}\n`;
    });
    
    text += `\n*Grand Total: ₹${grandTotal.toLocaleString('en-IN')}*\n\nPlease confirm availability.`;
    window.open(`https://wa.me/919010802092?text=${encodeURIComponent(text)}`, '_blank');
}

// Banner Slide Controllers
function moveSlide(dir) {
    if (slides.length === 0) return;
    clearInterval(sliderInterval);
    slides[currentSlideIndex].classList.remove('active');
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = (currentSlideIndex + dir + slides.length) % slides.length;
    
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
    sliderInterval = setInterval(() => moveSlide(1), 5000);
}

function setSlide(idx) {
    moveSlide(idx - currentSlideIndex);
}
