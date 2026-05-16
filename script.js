/* ==========================================
   1. GLOBAL RESETS & MODERN VARIABLES
   ========================================== */
:root {
    --primary: #6366f1;
    --primary-hover: #4f46e5;
    /* Premium High-Contrast Header Background Slate */
    --header-bg: #0b1329; 
    --dark-bg: #090d16;
    --light-bg: #f8fafc; 
    --alt-bg: #ffffff;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --price-strike: #94a3b8;
    --price-sale: #dc2626;
    --card-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 4px 12px -3px rgba(0, 0, 0, 0.02);
    --glass-blur: 20px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    -webkit-tap-highlight-color: transparent;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--light-bg);
    color: var(--text-main);
    overflow-x: hidden;
}

/* ==========================================
   2. HEADER & FIXED NAVIGATION (DARK PREMIUM)
   ========================================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: var(--header-bg); 
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px 16px;
    gap: 12px;
}

@media(min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        padding: 16px 40px;
        gap: 24px;
    }
}

/* Explicit rule overriding global link styles for your main logo */
.logo, a.logo, .navbar a.logo {
    text-decoration: none !important;
    font-size: 1.6rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -1px;
    display: inline-block;
    cursor: pointer;
}

.logo span {
    color: var(--primary);
}

.search-container {
    width: 100%;
    max-width: 450px;
}

.search-container input {
    width: 100%;
    padding: 12px 20px;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 30px;
    font-size: 0.9rem;
    outline: none;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.07);
    color: #ffffff;
}

.search-container input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.search-container input:focus {
    border-color: var(--primary);
    background: #ffffff;
    color: var(--text-main);
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.3);
}

nav {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    justify-content: center;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 4px;
}

nav::-webkit-scrollbar { display: none; }

@media(min-width: 768px) {
    nav {
        width: auto;
        gap: 24px;
        padding-bottom: 0;
    }
}

nav a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    font-weight: 600;
    transition: color 0.2s;
}

nav a:hover {
    color: #ffffff;
}

.cart-toggle-btn {
    background: var(--primary);
    color: #ffffff;
    border: none;
    padding: 10px 18px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    transition: background 0.2s;
}

.cart-toggle-btn:hover {
    background: var(--primary-hover);
}

/* ==========================================
   3. AUTOMATED HERO SLIDER POSTERS
   ========================================== */
.hero-slider-container {
    position: relative;
    width: 100%;
    height: 240px;      /* Decreased from 340px for a sleeker profile */
    margin-top: 135px;  /* Reduced top offset to eliminate awkward blank space */
    overflow: hidden;
}

@media(min-width: 768px) {
    .hero-slider-container {
        height: 340px;  /* Decreased from 460px for a crisp, wide banner look */
        margin-top: 76px;/* Tightened desktop top gap clearance spacing */
    }
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;       /* Hard stretches the photo perfectly to frame edges */
    background-position: center;   /* Keeps the focus of the photo in the absolute middle */
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slide.active { opacity: 1; z-index: 1; }
.hero-content { text-align: center; color: #ffffff; max-width: 650px; padding: 20px; }

.promo-badge {
    background: var(--primary);
    color: white;
    padding: 6px 14px;
    border-radius: 30px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 14px;
    display: inline-block;
}

.hero-content h1 { font-size: 2.2rem; font-weight: 800; margin-bottom: 10px; }
@media(min-width: 768px) { .hero-content h1 { font-size: 3.5rem; } }

.slider-arrow, .btn { display: none !important; }

.slider-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    gap: 8px;
}

.dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s;
}

.dot.active {
    background: #ffffff;
    width: 20px;
    border-radius: 3px;
}

/* ==========================================
   4. LAYOUT SECTIONS & NEW CATEGORIES STYLE
   ========================================== */
.section-wrapper { padding: 50px 16px; }
.bg-white { background-color: var(--light-bg); }
.bg-alt { background-color: var(--alt-bg); }

.products-section {
    max-width: 1280px;
    margin: 0 auto;
}

.highlighted-heading {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--dark-bg);
    margin-bottom: 28px;
    text-align: center;
    letter-spacing: -0.5px;
}

.accessory-filter-wrapper {
    margin-bottom: 35px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-cat-tabs {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 8px 6px;
    width: 100%;
    scrollbar-width: none;
}
.main-cat-tabs::-webkit-scrollbar { display: none; }

@media(min-width: 1024px) { .main-cat-tabs { justify-content: center; } }

.cat-tab {
    background: #ffffff;
    color: var(--text-main);
    border: 2px solid #e2e8f0;
    padding: 12px 24px; 
    border-radius: 40px;
    font-size: 1.05rem; 
    font-weight: 750;
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.cat-tab:hover {
    border-color: var(--primary);
    background: #fafafa;
}

.cat-tab.active {
    background: var(--primary);
    color: #ffffff;
    border-color: var(--primary);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35);
    transform: translateY(-1px);
}

.sub-cat-tabs {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    margin-top: 18px;
    padding: 2px;
    scrollbar-width: none;
    justify-content: center;
    width: 100%;
}

.sub-tab {
    background: #e2e8f0;
    color: #475569;
    border: none;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
}

.sub-tab.active {
    background: var(--dark-bg);
    color: #ffffff;
}

/* ==========================================
   5. PRODUCT GRID & NEW DUAL PRICING LAYOUT
   ========================================== */
.product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
}

@media(min-width: 768px) { .product-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; } }

.product-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e2e8f0;
    box-shadow: var(--card-shadow);
    transition: transform 0.2s;
}

.product-card:hover { transform: translateY(-4px); }

.product-icon-frame {
    font-size: 2.4rem;
    height: 70px;
    width: 70px;
    background: #f1f5f9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
}

.product-brand { font-size: 0.65rem; font-weight: 700; color: var(--primary); margin-bottom: 4px; }
.product-title { font-size: 0.95rem; font-weight: 600; height: 2.8em; overflow: hidden; margin-bottom: 10px; text-align: center; }

.product-price-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: auto;
    margin-bottom: 16px;
    width: 100%;
}

.price-original {
    font-size: 0.85rem;
    color: var(--price-strike);
    text-decoration: line-through;
    font-weight: 500;
}

.price-discounted {
    font-size: 1.15rem;
    color: var(--price-sale);
    font-weight: 800;
}

.add-to-cart-btn {
    width: auto;
    min-width: 130px;
    background: #f1f5f9;
    color: var(--text-main);
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    transition: all 0.2s;
}

.add-to-cart-btn:hover { background: var(--dark-bg); color: #ffffff; }

/* ==========================================
   6. CARTS DRAWER LAYOUT
   ========================================== */
.cart-drawer { position: fixed; top: 0; right: -100%; width: 100%; max-width: 400px; height: 100%; background: #ffffff; box-shadow: -10px 0 30px rgba(0,0,0,0.1); z-index: 2000; transition: right 0.3s ease; display: flex; flex-direction: column; }
.cart-drawer.open { right: 0; }
.cart-header { padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
.cart-items-container { flex: 1; overflow-y: auto; padding: 20px; }
.cart-item-row { display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; }
.cart-qty-controls { display: flex; align-items: center; background: #f1f5f9; border-radius: 8px; padding: 2px; }
.cart-qty-controls button { background: none; border: none; width: 28px; height: 28px; cursor: pointer; font-weight: 600; }
.cart-qty-controls span { font-size: 0.85rem; font-weight: 600; min-width: 24px; text-align: center; }
.cart-footer { padding: 20px; border-top: 1px solid #e2e8f0; background: #f8fafc; }
.cart-total-row { display: flex; justify-content: space-between; font-weight: 700; font-size: 1.1rem; margin-bottom: 16px; }
.whatsapp-checkout-btn { width: 100%; background: #25d366; color: white; border: none; padding: 14px; border-radius: 12px; font-weight: 700; cursor: pointer; text-align: center; }

/* ==========================================
   7. OPTIMISED VISIT OUR STORE SIZES
   ========================================== */

.contact-section {
    background: var(--header-bg);
    color: #ffffff;
    padding: 40px 16px; 
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
}

@media(min-width: 768px) {
    .contact-section {
        padding: 55px 40px;
    }
}

.contact-grid-container {
    max-width: 800px; /* Constrained width looks best for centered standalone text */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.contact-text-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    text-align: center;     
}

.contact-text-block h4 {
    font-size: 0.9rem; 
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 700;
}

.contact-info h2 {
    font-size: 1.7rem; 
    color: #ffffff;
    margin-bottom: 16px;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.contact-info p {
    opacity: 0.8;
    margin-bottom: 10px;
    font-size: 0.92rem; 
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 8px;
}

.social-links-wrapper {
    display: flex;
    gap: 14px;
    margin-top: 20px;
    justify-content: center; 
    width: 100%;
}

.social-icon {
    width: 40px; 
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.08);
    transition: all 0.2s ease;
}

.social-icon svg {
    width: 18px;
    height: 18px;
    fill: #ffffff;
}

.social-icon.wa:hover { background: #25d366; }
.social-icon.ig:hover { background: #e1306c; }
.social-icon.yt:hover { background: #ff0000; }

.contact-map-frame {
    flex: 1;
    width: 100%;
    height: 200px; 
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

@media(min-width: 768px) {
    .contact-map-frame {
        height: 280px; 
    }
}

footer { background: #060a13; color: rgba(255,255,255,0.3); text-align: center; padding: 24px; font-size: 0.8rem; }

@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animated-fade { animation: fadeInUp 0.3s ease; }
