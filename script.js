/* ==========================================================================
   SORENELLE — DIGITAL GOODS STUDIO
   Interactive Client Script
   Features:
   - Store Configuration (WhatsApp & Etsy Direct Checkout)
   - Comprehensive Product Detail Modal with Gallery Swatches & Tabs
   - Direct WhatsApp Purchase with Auto-formatted Order Templates
   - Direct Etsy Shop & Listing Redirects
   - Slide-over Shopping Bag with Dual Channel Checkout & Promo Codes
   - Checkout Choice Modal for Review & Customer Details
   - Interactive Typewriter Engine, 3D Hero Tilt, Category Filters
   ========================================================================== */

/* ==========================================================================
   1. STORE CONFIGURATION
   (Ubah nomor WhatsApp dan link akun Etsy kamu di sini)
   ========================================================================== */
const STORE_CONFIG = {
  // Masukkan nomor WhatsApp kamu di sini (format angka diawali 62 tanpa + atau spasi)
  // Contoh: '6288975276696'
  whatsappNumber: '6288975276696',

  // Masukkan link akun toko Etsy kamu di sini
  // Contoh: 'https://www.etsy.com/shop/SorenelleStudio'
  etsyShopUrl: 'https://www.etsy.com/shop/SorenelleStudio',

  storeName: 'Sorenelle Digital Goods Studio',
  currencySymbol: 'Rp ',
  promoCode: 'GENTLE10',
  discountRate: 0.10, // 10%
  supportEmail: 'hello@sorenellestudio.com'
};

/* ==========================================================================
   2. DETAILED PRODUCTS CATALOG
   ========================================================================== */
const PRODUCTS_DATA = {
  'planner-2027': {
    id: 'planner-2027',
    name: '✦ SORENELLE Minimal Planner 2026/2027 ✦',
    category: 'Digital Planners',
    badge: 'Bestseller',
    rating: '5.0 (248 reviews)',
    price: 89000,
    originalPrice: 149000,
    priceFormatted: 'Rp 89.000',
    originalPriceFormatted: 'Rp 149.000',
    discountBadge: 'Save 40%',
    desc: 'All-in-one minimal hyperlinked digital planner featuring 650+ instant-navigation pages. Mindfully designed for calm productivity, gentle routines, and an intentional, stress-free life.',
    highlights: [
      '⚡ Over 650+ Hyperlinked Pages',
      '📱 GoodNotes 5 & 6 Ready',
      '🗓️ Sunday & Monday Start Included',
      '🎨 4 Calming Color Themes',
      '🌸 Bonus 350+ Digital Stickers'
    ],
    images: [
      'assets/✦ SORENELLE Minimal Digital Planner 2027 ✦.png',
      'assets/hero_book_mockup.jpg',
      'assets/Thoughtfully Designed Digital Goods.png',
      'assets/download (46).jpeg',
      'assets/ChatGPT Image Jul 26, 2026, 08_23_22 PM.png'
    ],
    whatsInside: [
      '650+ Interactive Pages with seamless, zero-lag hyperlinked tab navigation',
      'Dated 2026 & 2027 Editions + Bonus Undated Version (reusable for a lifetime)',
      'Sunday Start & Monday Start files both included in your download',
      '4 Calming Color Themes: Warm Mocha, Soft Blush, Sage Olive, and Minimal Slate',
      'Comprehensive Planning Spreads: Yearly Calendars, Monthly Overviews, Weekly Schedules, and Daily Reflection Pages',
      'Wellness Sanctuary: Habit Tracker, Mood Atlas, Sleep Quality Log, Hydration Tracker, and Daily Affirmations',
      'Financial Clarity: Monthly Budgeting, Expense Trackers, 52-Week Savings Challenge, and Debt Payoff Sheets',
      'Goal Matrix: Vision Board, Life Wheel, Quarterly Milestones & Project Planners',
      'Bonus 350+ Aesthetic Digital Stickers (GoodNotes .collection Elements File + Individual Transparent PNGs)',
      'Step-by-step Video & PDF Setup Guide for GoodNotes, Notability, and Samsung Notes'
    ],
    etsyListingUrl: STORE_CONFIG.etsyShopUrl
  },

  'journey-joy': {
    id: 'journey-joy',
    name: 'Journey to Joy: Intentional Reflection Journal',
    category: 'Mindful Journals',
    badge: 'Staff Favorite',
    rating: '4.9 (182 reviews)',
    price: 75000,
    originalPrice: 115000,
    priceFormatted: 'Rp 75.000',
    originalPriceFormatted: 'Rp 115.000',
    discountBadge: 'Save 35%',
    desc: 'A guided mindful reflection journal created to soften overthinking, gently process emotions with self-compassion, and cultivate daily gratitude rituals.',
    highlights: [
      '✍️ 50+ Guided Reflection Prompts',
      '🕊️ Weekly Sunday Reset Ritual',
      '🌿 Mental Health & Mood Atlas',
      '💻 Interactive Fillable PDF',
      '🖨️ Printable A4 & US Letter'
    ],
    images: [
      'assets/Journey to Joy - Intentionally Created Worksheets planner2024 909.jpeg',
      'assets/738660776420333197.jpeg',
      'assets/ChatGPT Image Jul 26, 2026, 10_02_04 PM.png',
      'assets/1045257394780542053.jpeg'
    ],
    whatsInside: [
      '50+ Deep Guided Reflection Prompts for morning clarity and evening peace',
      'Weekly Sunday Reset: Dedicated weekly review spreads to enter each new week grounded and calm',
      'Mental Health & Emotional Wellbeing Spreads with intuitive mood trackers',
      'Interactive Gratitude Jar & Self-Compassion Journaling worksheets',
      'Life Atlas & Self-Discovery: Values clarification, gentle boundaries, and dream mapping',
      'Fillable Interactive PDF format (type directly on tablet/laptop) & ready-to-print format'
    ],
    etsyListingUrl: STORE_CONFIG.etsyShopUrl
  },

  'business-planner': {
    id: 'business-planner',
    name: 'Quiet Wealth: Business & Goal Planner',
    category: 'Business & Finance',
    badge: 'New Release',
    rating: '4.9 (94 reviews)',
    price: 69000,
    originalPrice: 99000,
    priceFormatted: 'Rp 69.000',
    originalPriceFormatted: 'Rp 99.000',
    discountBadge: 'Save 30%',
    desc: 'A serene organizational framework for creative entrepreneurs, freelancers, and digital shop owners. Organize revenue milestones, editorial content calendars, and product inventory without complicated spreadsheets.',
    highlights: [
      '📊 SMART Business Matrix',
      '💰 Monthly Revenue & Expense Log',
      '📅 Content Editorial Calendar',
      '📁 Client CRM & Invoice Tracker',
      '⚡ GoodNotes & Notion Ready'
    ],
    images: [
      'assets/Get Your FREE Business Planner - Instant Download 1384.jpeg',
      'assets/ChatGPT Image Jul 29, 2026, 04_00_49 PM.png',
      'assets/download (47).jpeg',
      'assets/887631407828011507.jpeg'
    ],
    whatsInside: [
      'Quarterly SMART Business Goals & Milestone Action Matrices',
      'Monthly Revenue & Expense Trackers with automated profit calculation',
      'Social Media Editorial Calendar: Instagram, TikTok, and Pinterest scheduling grids + Content Idea Bank',
      'Product Inventory, Order Fulfillment Log, and Pricing Calculator for digital and physical goods',
      'Client CRM, Project Tracker & Invoice Payment Status log',
      'Complimentary link to the Sorenelle Minimalist Notion Business Dashboard'
    ],
    etsyListingUrl: STORE_CONFIG.etsyShopUrl
  },

  'morning-notebook': {
    id: 'morning-notebook',
    name: 'Soft Morning Digital Notebook & Study Companion',
    category: 'Digital Planners',
    badge: 'Cozy Essential',
    rating: '4.8 (115 reviews)',
    price: 49000,
    originalPrice: 75000,
    priceFormatted: 'Rp 49.000',
    originalPriceFormatted: 'Rp 75.000',
    discountBadge: 'Save 35%',
    desc: 'A soft spiral digital notebook featuring 8 pastel hyperlinked subject tabs. Perfect for lecture notes, study summaries, creative sketches, and daily reading reflections.',
    highlights: [
      '🏷️ 8 Hyperlinked Color Tabs',
      '📄 12 Paper Template Styles',
      '♾️ Infinite Page Duplication',
      '📐 Cornell, Grid, & Dotted',
      '🎀 Decorative Sticky Notes'
    ],
    images: [
      'assets/1013098878707273572.jpeg',
      'assets/1011832241296971742.jpeg',
      'assets/830562356324735155.jpeg',
      'assets/976366394231017704.jpeg'
    ],
    whatsInside: [
      '8 Hyperlinked Subject Tabs in soft pastel palettes, fully customizable and renameable',
      '12 Versatile Paper Styles: Lined, Cornell Notes, Dotted, Graph Grid, Hexagon, and Blank Sketch',
      'Duplicate unlimited pages effortlessly without breaking hyperlink navigation',
      'Includes digital ribbon bookmarks and colorful sticky note widgets',
      'Optimized for ultra-fast, lightweight performance in GoodNotes and Samsung Notes'
    ],
    etsyListingUrl: STORE_CONFIG.etsyShopUrl
  },

  'sticker-vault': {
    id: 'sticker-vault',
    name: 'Aesthetic Digital Sticker Vault (350+ Elements)',
    category: 'Mindful Journals',
    badge: 'Pre-Cropped',
    rating: '5.0 (310 reviews)',
    price: 39000,
    originalPrice: 59000,
    priceFormatted: 'Rp 39.000',
    originalPriceFormatted: 'Rp 59.000',
    discountBadge: 'Save 34%',
    desc: 'A curated vault of 350+ romantic vintage digital stickers. Pre-cropped and ready to paste straight into GoodNotes or your preferred note-taking app.',
    highlights: [
      '✨ 350+ Pre-Cropped Elements',
      '📱 GoodNotes .collection File',
      '🌸 Individual Transparent PNGs',
      '🔍 High-Res 300 DPI Crisp Zoom',
      '🎀 Florals, Lace & Washi Tape'
    ],
    images: [
      'assets/5488830793248950.jpeg',
      'assets/577094139792736504.jpeg',
      'assets/1114570607805675885.jpeg',
      'assets/206954545376277014.jpeg'
    ],
    whatsInside: [
      'GoodNotes Elements File (.collection) — One tap imports all 350+ stickers instantly into GoodNotes',
      '350+ Individual high-resolution transparent PNG files organized into labeled folders',
      'Vintage pressed flowers, botanical petals, and floral branch illustrations',
      'Vintage lace ribbons, textured washi tapes, wax seals, torn paper notes, and antique stamps',
      'Soft motivational quote stickers and daily routine icons',
      'Versatile for Canva designs, Procreate brushes, Notion headers, and moodboards'
    ],
    etsyListingUrl: STORE_CONFIG.etsyShopUrl
  },

  'free-sampler': {
    id: 'free-sampler',
    name: 'Free 2026 Weekly Reset & Clarity Sampler',
    category: 'Free Downloads',
    badge: 'Free Gift',
    rating: '5.0 (520+ downloads)',
    price: 0,
    originalPrice: 45000,
    priceFormatted: 'FREE',
    originalPriceFormatted: 'Rp 45.000',
    discountBadge: '100% Free',
    desc: 'Experience the signature Sorenelle planning workflow completely free on your iPad or tablet before choosing your full edition.',
    highlights: [
      '🎁 Instant Free PDF Download',
      '🗓️ Weekly Agenda Layout',
      '✍️ Intentional Reflection Sheet',
      '📱 GoodNotes Compatible',
      '💳 No Credit Card Required'
    ],
    images: [
      'assets/Desain tanpa judul.png',
      'assets/✦ SORENELLE Minimal Digital Planner 2027 ✦.png'
    ],
    whatsInside: [
      '1 Structured Weekly Agenda spread with hourly schedule & top daily priorities',
      '1 Guided Intentional Reflection spread for peaceful weekend evaluation',
      'High-resolution GoodNotes-compatible & printable A4 PDF format',
      'Immediate instant download without payment requirements'
    ],
    etsyListingUrl: STORE_CONFIG.etsyShopUrl
  }
};

/* ==========================================================================
   3. CART & APPLICATION STATE
   ========================================================================== */
let cart = [
  {
    id: 'planner-2027',
    name: '✦ SORENELLE Minimal Planner 2026/2027 ✦',
    price: 89000,
    priceFormatted: 'Rp 89.000',
    img: 'assets/✦ SORENELLE Minimal Digital Planner 2027 ✦.png',
    qty: 1
  }
];

let appliedPromo = null; // 'GENTLE10'
let currentDetailProductId = null;
let currentDetailQty = 1;

/* ==========================================================================
   4. DOM INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initHeroTilt();
  initCartDrawer();
  initProductFilter();
  initPreviewModal();
  initTypewriterEngine();
  initMobileNav();
  initToast();
  initProductDetailModal();
  initCheckoutActions();
  initShopModeAndCustomStudio();

  // Check URL hash for direct product detail linking
  handleUrlHash();
});

/* ==========================================================================
   5. PRODUCT DETAIL MODAL ENGINE
   ========================================================================== */
function initProductDetailModal() {
  const modal = document.getElementById('productDetailModal');
  const closeBtn = document.getElementById('pdetailCloseBtn');

  if (modal && closeBtn) {
    closeBtn.addEventListener('click', closeProductDetail);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProductDetail();
    });
  }

  // Quantity Counter Buttons
  document.getElementById('pdetailQtyDec')?.addEventListener('click', () => {
    if (currentDetailQty > 1) {
      currentDetailQty--;
      updateDetailQtyDisplay();
    }
  });

  document.getElementById('pdetailQtyInc')?.addEventListener('click', () => {
    currentDetailQty++;
    updateDetailQtyDisplay();
  });

  // Tab Switcher inside Product Detail
  document.querySelectorAll('.pdetail-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pdetail-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.pdetail-tab-panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.tab;
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Direct Channel Purchase Buttons inside Detail Modal
  document.getElementById('pdetailWaBtn')?.addEventListener('click', () => {
    if (currentDetailProductId) {
      orderSingleProductWA(currentDetailProductId, currentDetailQty);
    }
  });

  document.getElementById('pdetailEtsyBtn')?.addEventListener('click', () => {
    if (currentDetailProductId) {
      buySingleProductEtsy(currentDetailProductId);
    }
  });

  // Add to Bag inside Detail Modal
  document.getElementById('pdetailAddBagBtn')?.addEventListener('click', () => {
    if (currentDetailProductId) {
      const p = PRODUCTS_DATA[currentDetailProductId];
      if (p) {
        addToCart({
          id: p.id,
          name: p.name,
          price: p.price,
          priceFormatted: p.priceFormatted,
          img: p.images[0]
        }, currentDetailQty);
        showToast(`Added ${currentDetailQty}x "${p.name}" to your bag ✨`);
        closeProductDetail();
      }
    }
  });
}

function updateDetailQtyDisplay() {
  const qtyEl = document.getElementById('pdetailQtyVal');
  if (qtyEl) qtyEl.textContent = currentDetailQty;
}

function openProductDetail(productId) {
  const product = PRODUCTS_DATA[productId];
  if (!product) return;

  currentDetailProductId = productId;
  currentDetailQty = 1;
  updateDetailQtyDisplay();

  const modal = document.getElementById('productDetailModal');
  if (!modal) return;

  // Populate textual content
  document.getElementById('pdetailBadge').textContent = product.badge;
  document.getElementById('pdetailCategory').textContent = product.category;
  document.getElementById('pdetailRating').textContent = product.rating;
  document.getElementById('pdetailTitle').textContent = product.name;
  document.getElementById('pdetailPrice').textContent = product.priceFormatted;
  document.getElementById('pdetailOldPrice').textContent = product.originalPriceFormatted;
  document.getElementById('pdetailDiscount').textContent = product.discountBadge;
  document.getElementById('pdetailDesc').textContent = product.desc;

  // Feature Highlights Chips
  const highlightsContainer = document.getElementById('pdetailHighlights');
  if (highlightsContainer) {
    highlightsContainer.innerHTML = product.highlights.map(h => `
      <span class="pdetail-highlight-chip">${h}</span>
    `).join('');
  }

  // Thumbnails and Main Image
  const mainImg = document.getElementById('pdetailMainImg');
  const thumbsContainer = document.getElementById('pdetailThumbs');

  if (mainImg && product.images.length > 0) {
    mainImg.src = product.images[0];
    mainImg.alt = product.name;
  }

  if (thumbsContainer) {
    thumbsContainer.innerHTML = product.images.map((imgSrc, index) => `
      <button type="button" class="pdetail-thumb-btn ${index === 0 ? 'active' : ''}" onclick="setDetailActiveImage('${imgSrc}', this)" title="Preview layout ${index + 1}">
        <img src="${imgSrc}" alt="Thumbnail ${index + 1}">
      </button>
    `).join('');
  }

  // What's Inside Feature List
  const featureList = document.getElementById('pdetailFeatureList');
  if (featureList) {
    featureList.innerHTML = product.whatsInside.map(item => `
      <li>${item}</li>
    `).join('');
  }

  // Reset to first tab
  const firstTabBtn = document.querySelector('.pdetail-tab-btn[data-tab="tab-whats-inside"]');
  firstTabBtn?.click();

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Update hash softly
  history.replaceState(null, '', `#product-${productId}`);
}

function setDetailActiveImage(src, btnElement) {
  const mainImg = document.getElementById('pdetailMainImg');
  if (mainImg) {
    mainImg.style.opacity = '0.5';
    mainImg.src = src;
    setTimeout(() => {
      mainImg.style.opacity = '1';
    }, 150);
  }

  document.querySelectorAll('.pdetail-thumb-btn').forEach(btn => btn.classList.remove('active'));
  btnElement?.classList.add('active');
}

function closeProductDetail() {
  const modal = document.getElementById('productDetailModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  currentDetailProductId = null;

  // Clear hash without jump
  if (window.location.hash.startsWith('#product-')) {
    history.replaceState(null, '', window.location.pathname);
  }
}

function handleUrlHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#product-')) {
    const prodId = hash.replace('#product-', '');
    if (PRODUCTS_DATA[prodId]) {
      setTimeout(() => openProductDetail(prodId), 200);
    }
  } else if (hash === '#custom-request' || hash === '#custom-own' || hash === '#custom-studio') {
    switchShopMode('custom-studio');
  } else if (hash === '#products') {
    switchShopMode('ready-made');
  }
}

window.addEventListener('hashchange', handleUrlHash);

// Global hooks
window.openProductDetail = openProductDetail;
window.closeProductDetail = closeProductDetail;
window.setDetailActiveImage = setDetailActiveImage;

/* ==========================================================================
   6. DIRECT WHATSAPP & ETSY ORDER ENGINES
   ========================================================================== */
function orderSingleProductWA(productId, qty = 1) {
  const p = PRODUCTS_DATA[productId];
  if (!p) return;

  const total = p.price * qty;
  const totalFormatted = p.price === 0 ? 'FREE (Rp 0)' : 'Rp ' + total.toLocaleString('id-ID');

  const greeting = getGentleGreeting();

  const text = `${greeting}, ${STORE_CONFIG.storeName}! 🌸\n\n` +
    `I would like to order this item directly from your shop:\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `📌 Product: ${p.name}\n` +
    `🔢 Quantity: ${qty}x\n` +
    `💰 Total: ${totalFormatted}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `Payment Method: Bank Transfer (BCA / Mandiri / BRI) / QRIS / GoPay / ShopeePay.\n\n` +
    `Please share account details / QRIS and order confirmation. Thank you so much! ✨`;

  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

function buySingleProductEtsy(productId) {
  const p = PRODUCTS_DATA[productId];
  const url = p?.etsyListingUrl || STORE_CONFIG.etsyShopUrl;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function checkoutCartViaWhatsApp(buyerName = '', buyerEmail = '') {
  if (cart.length === 0) {
    showToast('Your shopping bag is currently empty 🌸');
    return;
  }

  const totals = calculateCartTotals();
  const greeting = getGentleGreeting();

  const itemsListText = cart.map((item, idx) => {
    return `${idx + 1}. ${item.name} (${item.qty}x) — ${item.priceFormatted}`;
  }).join('\n');

  let text = `${greeting}, ${STORE_CONFIG.storeName}! 🌸\n\n` +
    `I would like to checkout my order from the Sorenelle website:\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `${itemsListText}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Subtotal: Rp ${totals.subtotal.toLocaleString('id-ID')}\n`;

  if (totals.discount > 0) {
    text += `Promo Discount (${appliedPromo}): -Rp ${totals.discount.toLocaleString('id-ID')}\n`;
  }

  text += `TOTAL DUE: Rp ${totals.finalTotal.toLocaleString('id-ID')}\n\n` +
    `Payment Method: Bank Transfer (BCA / Mandiri / BRI) / QRIS / GoPay / ShopeePay\n`;

  if (buyerName && buyerName.trim()) {
    text += `Customer Name: ${buyerName.trim()}\n`;
  }
  if (buyerEmail && buyerEmail.trim()) {
    text += `Delivery Email: ${buyerEmail.trim()}\n`;
  }

  text += `\nPlease provide payment details / QRIS. Looking forward to your confirmation, thank you! ✨`;

  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

function checkoutCartViaEtsy() {
  window.open(STORE_CONFIG.etsyShopUrl, '_blank', 'noopener,noreferrer');
}

function getGentleGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

window.orderSingleProductWA = orderSingleProductWA;
window.buySingleProductEtsy = buySingleProductEtsy;
window.checkoutCartViaWhatsApp = checkoutCartViaWhatsApp;
window.checkoutCartViaEtsy = checkoutCartViaEtsy;

/* ==========================================================================
   7. CART DRAWER & TOTALS ENGINE
   ========================================================================== */
function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;

  if (appliedPromo && appliedPromo.toUpperCase() === STORE_CONFIG.promoCode) {
    discount = Math.round(subtotal * STORE_CONFIG.discountRate);
  }

  const finalTotal = Math.max(0, subtotal - discount);
  return { subtotal, discount, finalTotal };
}

function initCartDrawer() {
  const cartBtn = document.getElementById('cartOpenBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartCloseBtn = document.getElementById('cartCloseBtn');

  if (cartBtn && cartBackdrop) {
    cartBtn.addEventListener('click', openCart);
    cartCloseBtn?.addEventListener('click', closeCart);
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) closeCart();
    });
  }

  // Bind Promo Code in Drawer
  document.getElementById('cartApplyPromoBtn')?.addEventListener('click', () => {
    const input = document.getElementById('cartPromoInput');
    applyPromoCode(input?.value || '', 'drawer');
  });

  document.getElementById('cartPromoInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      applyPromoCode(e.target.value || '', 'drawer');
    }
  });

  // Drawer Channel Buttons
  document.getElementById('cartDrawerWaBtn')?.addEventListener('click', () => {
    checkoutCartViaWhatsApp();
  });

  document.getElementById('cartDrawerEtsyBtn')?.addEventListener('click', () => {
    checkoutCartViaEtsy();
  });

  document.getElementById('cartOpenCheckoutModalBtn')?.addEventListener('click', () => {
    openCheckoutChoiceModal();
  });

  // Bind "Add to Bag" buttons on the grid cards
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      const id = card.dataset.id;
      const name = card.dataset.name;
      const price = parseInt(card.dataset.price);
      const priceFormatted = card.dataset.priceFormatted;
      const img = card.dataset.img;

      addToCart({ id, name, price, priceFormatted, img });
      showToast(`Added "${name}" to your bag ✨`);
    });
  });

  renderCart();
}

function openCart() {
  document.getElementById('cartBackdrop')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartBackdrop')?.classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(product, qty = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  renderCart();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
  showToast('Item removed from bag');
}

function applyPromoCode(code, source = 'drawer') {
  const trimmed = (code || '').trim().toUpperCase();
  const feedbackDrawer = document.getElementById('cartPromoFeedback');
  const feedbackModal = document.getElementById('checkoutPromoMessage');

  if (trimmed === STORE_CONFIG.promoCode) {
    appliedPromo = STORE_CONFIG.promoCode;
    const msg = `✨ Coupon ${STORE_CONFIG.promoCode} applied! 10% discount activated.`;

    if (feedbackDrawer) {
      feedbackDrawer.textContent = msg;
      feedbackDrawer.className = 'cart-promo-feedback success';
    }
    if (feedbackModal) {
      feedbackModal.textContent = msg;
      feedbackModal.className = 'promo-feedback success';
    }

    renderCart();
    renderCheckoutModalSummary();
    showToast('Coupon GENTLE10 applied! Saved 10% 🎉');
  } else {
    const errorMsg = 'Invalid coupon code. Try using: GENTLE10';
    if (feedbackDrawer) {
      feedbackDrawer.textContent = errorMsg;
      feedbackDrawer.className = 'cart-promo-feedback error';
    }
    if (feedbackModal) {
      feedbackModal.textContent = errorMsg;
      feedbackModal.className = 'promo-feedback error';
    }
  }
}

function renderCart() {
  const itemsContainer = document.getElementById('cartItemsList');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDiscountRow = document.getElementById('cartDiscountRow');
  const cartDiscountVal = document.getElementById('cartDiscountVal');
  const cartTotalRow = document.getElementById('cartTotalRow');
  const cartTotalVal = document.getElementById('cartTotalVal');

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountBadges.forEach(badge => badge.textContent = totalCount);

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <div class="cart-empty-icon">🌸</div>
        <p>Your bag is currently empty.</p>
        <span style="font-size: 0.8rem; color: var(--c-text-light);">Find your mindful companion in our collection.</span>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = 'Rp 0';
    if (cartDiscountRow) cartDiscountRow.style.display = 'none';
    if (cartTotalRow) cartTotalRow.style.display = 'none';
    return;
  }

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${item.priceFormatted} &times; ${item.qty}</div>
        <span class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</span>
      </div>
    </div>
  `).join('');

  const totals = calculateCartTotals();

  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = 'Rp ' + totals.subtotal.toLocaleString('id-ID');
  }

  if (totals.discount > 0) {
    if (cartDiscountRow) cartDiscountRow.style.display = 'flex';
    if (cartDiscountVal) cartDiscountVal.textContent = '-Rp ' + totals.discount.toLocaleString('id-ID');
    if (cartTotalRow) cartTotalRow.style.display = 'flex';
    if (cartTotalVal) cartTotalVal.textContent = 'Rp ' + totals.finalTotal.toLocaleString('id-ID');
  } else {
    if (cartDiscountRow) cartDiscountRow.style.display = 'none';
    if (cartTotalRow) cartTotalRow.style.display = 'none';
  }
}

window.openCart = openCart;
window.closeCart = closeCart;
window.removeFromCart = removeFromCart;

/* ==========================================================================
   8. CHECKOUT CHOICE MODAL (Order Review & WhatsApp vs Etsy Selection)
   ========================================================================== */
function initCheckoutActions() {
  const modal = document.getElementById('checkoutChoiceModal');
  const closeBtn = document.getElementById('checkoutChoiceCloseBtn');

  if (modal && closeBtn) {
    closeBtn.addEventListener('click', closeCheckoutChoiceModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCheckoutChoiceModal();
    });
  }

  // Promo code inside modal
  document.getElementById('checkoutPromoBtn')?.addEventListener('click', () => {
    const input = document.getElementById('checkoutPromoInput');
    applyPromoCode(input?.value || '', 'modal');
  });

  // Action: Proceed WhatsApp Checkout
  document.getElementById('proceedWaCheckoutBtn')?.addEventListener('click', () => {
    const name = document.getElementById('buyerNameInput')?.value || '';
    const email = document.getElementById('buyerEmailInput')?.value || '';
    checkoutCartViaWhatsApp(name, email);
    closeCheckoutChoiceModal();
  });

  // Action: Proceed Etsy Checkout
  document.getElementById('proceedEtsyCheckoutBtn')?.addEventListener('click', () => {
    checkoutCartViaEtsy();
    closeCheckoutChoiceModal();
  });

  // Action: Copy Order Summary to Clipboard
  document.getElementById('copyOrderSummaryBtn')?.addEventListener('click', () => {
    copyOrderSummary();
  });
}

function openCheckoutChoiceModal() {
  if (cart.length === 0) {
    showToast('Your shopping bag is currently empty 🌸');
    return;
  }

  closeCart();
  renderCheckoutModalSummary();

  const modal = document.getElementById('checkoutChoiceModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutChoiceModal() {
  const modal = document.getElementById('checkoutChoiceModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function renderCheckoutModalSummary() {
  const itemsContainer = document.getElementById('checkoutModalItemsList');
  const countEl = document.getElementById('checkoutModalItemCount');
  const subtotalEl = document.getElementById('checkoutModalSubtotal');
  const discountRow = document.getElementById('checkoutModalDiscountRow');
  const discountEl = document.getElementById('checkoutModalDiscount');
  const totalEl = document.getElementById('checkoutModalTotal');

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (countEl) countEl.textContent = `${totalCount} item${totalCount > 1 ? 's' : ''}`;

  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => `
      <div class="summary-item-row">
        <span class="summary-item-name">${item.name} (${item.qty}x)</span>
        <span class="summary-item-price">${item.price === 0 ? 'FREE' : 'Rp ' + (item.price * item.qty).toLocaleString('id-ID')}</span>
      </div>
    `).join('');
  }

  const totals = calculateCartTotals();

  if (subtotalEl) subtotalEl.textContent = 'Rp ' + totals.subtotal.toLocaleString('id-ID');

  if (totals.discount > 0) {
    if (discountRow) discountRow.style.display = 'flex';
    if (discountEl) discountEl.textContent = '-Rp ' + totals.discount.toLocaleString('id-ID');
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  if (totalEl) totalEl.textContent = 'Rp ' + totals.finalTotal.toLocaleString('id-ID');
}

function copyOrderSummary() {
  const totals = calculateCartTotals();
  let text = `Sorenelle Studio Order Summary:\n`;
  cart.forEach((item, idx) => {
    text += `${idx + 1}. ${item.name} (${item.qty}x) - ${item.priceFormatted}\n`;
  });
  text += `Subtotal: Rp ${totals.subtotal.toLocaleString('id-ID')}\n`;
  if (totals.discount > 0) {
    text += `Discount: -Rp ${totals.discount.toLocaleString('id-ID')}\n`;
  }
  text += `Total: Rp ${totals.finalTotal.toLocaleString('id-ID')}\n`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Order details copied to clipboard 📋✨');
    });
  } else {
    showToast('Order details generated ✨');
  }
}

window.openCheckoutChoiceModal = openCheckoutChoiceModal;
window.closeCheckoutChoiceModal = closeCheckoutChoiceModal;

/* ==========================================================================
   9. PRODUCT CATEGORY FILTER
   ========================================================================== */
function initProductFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.product-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      if (filter === 'bespoke') {
        switchShopMode('custom-studio');
        return;
      }

      cards.forEach(card => {
        const cat = card.dataset.category || '';
        if (filter === 'all' || cat === filter || cat.split(' ').includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   10. QUICK PREVIEW MODAL ("Look Inside")
   ========================================================================== */
function initPreviewModal() {
  const modalBackdrop = document.getElementById('previewModalBackdrop');
  const modalCloseBtn = document.getElementById('previewModalClose');
  const modalImg = document.getElementById('previewModalImage');
  const modalTitle = document.getElementById('previewModalTitle');

  if (!modalBackdrop) return;

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   11. INTERACTIVE 3D HERO TILT EFFECT
   ========================================================================== */
function initHeroTilt() {
  const card = document.querySelector('.hero-main-card');
  const wrapper = document.querySelector('.hero-visual-wrapper');

  if (!card || !wrapper) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 12;
    const rotateY = (x / rect.width) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotate(0.8deg) scale3d(1, 1, 1)';
  });
}

/* ==========================================================================
   12. INTERACTIVE TYPEWRITER AFFIRMATION ENGINE
   ========================================================================== */
function initTypewriterEngine() {
  const input = document.getElementById('typewriterInput');
  const liveOutput = document.getElementById('typewriterLiveOutput');
  const presetChips = document.querySelectorAll('.preset-chip');

  if (!input || !liveOutput) return;

  const defaultText = "Today I choose calm over hurry, gratitude over fear, and peace in every breath.";
  typeTextAnimated(defaultText);

  input.addEventListener('input', (e) => {
    liveOutput.textContent = e.target.value;
  });

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.dataset.text;
      input.value = text;
      typeTextAnimated(text);
    });
  });

  function typeTextAnimated(text) {
    liveOutput.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        liveOutput.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 28);
  }
}

/* ==========================================================================
   13. MOBILE MENU & DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileMenuDrawer');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    const isHidden = drawer.style.display === 'none' || !drawer.style.display;
    drawer.style.display = isHidden ? 'flex' : 'none';
  });

  drawer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.style.display = 'none';
    });
  });
}

/* ==========================================================================
   14. TOAST NOTIFICATIONS
   ========================================================================== */
function initToast() {
  // Built into page markup
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) return;

  const textEl = toast.querySelector('.toast-text');
  if (textEl) textEl.textContent = message;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

window.showToast = showToast;

/* ==========================================================================
   15. SHOP MODE SWITCHER & BESPOKE CUSTOM REQUEST STUDIO
   ========================================================================== */
let customUploadedFiles = [];

function initShopModeAndCustomStudio() {
  // Bind links pointing to custom studio or bespoke
  document.querySelectorAll('a[href="#custom-request"], a[href="#custom-own"], a[href="#custom-studio"]').forEach(link => {
    link.addEventListener('click', () => {
      switchShopMode('custom-studio');
    });
  });

  document.querySelectorAll('a[href="#products"]').forEach(link => {
    link.addEventListener('click', () => {
      switchShopMode('ready-made');
    });
  });

  // Ensure initial visual states match
  document.querySelectorAll('.custom-checkbox-item').forEach(item => {
    const input = item.querySelector('.custom-check-input');
    syncCustomOptionState(item, input ? input.checked : false);
  });

  // Quick typing into Other text automatically activates Other checkbox
  const otherNeedText = document.getElementById('otherNeedText');
  if (otherNeedText) {
    otherNeedText.addEventListener('input', () => {
      const input = document.getElementById('checkNeedOther');
      const item = input?.closest('.custom-checkbox-item');
      if (input && item && !input.checked && otherNeedText.value.trim().length > 0) {
        input.checked = true;
        syncCustomOptionState(item, true);
        const wrap = document.getElementById('otherNeedWrap');
        if (wrap) wrap.style.display = 'block';
      }
    });
  }

  // Quick typing into Custom Style text automatically activates Custom checkbox
  const otherStyleText = document.getElementById('otherStyleText');
  if (otherStyleText) {
    otherStyleText.addEventListener('input', () => {
      const input = document.getElementById('checkStyleCustom');
      const item = input?.closest('.custom-checkbox-item');
      if (input && item && !input.checked && otherStyleText.value.trim().length > 0) {
        input.checked = true;
        syncCustomOptionState(item, true);
        const wrap = document.getElementById('otherStyleWrap');
        if (wrap) wrap.style.display = 'block';
      }
    });
  }

  // Drag and drop events for reference dropzone
  const dropzone = document.getElementById('customDropzone');
  if (dropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('dragover');
      }, false);
    });

    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files && files.length > 0) {
        handleReferenceFiles(files);
      }
    }, false);
  }
}

/**
 * Foolproof interactive toggle for custom request options
 */
function toggleCustomOption(itemEl, event) {
  if (event) {
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
      return;
    }
    if (event.type === 'keydown') {
      event.preventDefault();
    }
  }

  if (!itemEl) return;
  const input = itemEl.querySelector('.custom-check-input');
  if (!input) return;

  // Toggle state cleanly
  input.checked = !input.checked;
  syncCustomOptionState(itemEl, input.checked);

  // If Other Need was clicked
  if (input.id === 'checkNeedOther') {
    const wrap = document.getElementById('otherNeedWrap');
    if (wrap) {
      wrap.style.display = input.checked ? 'block' : 'none';
      if (input.checked) {
        setTimeout(() => document.getElementById('otherNeedText')?.focus(), 50);
      }
    }
  }

  // If Other Style was clicked
  if (input.id === 'checkStyleCustom') {
    const wrap = document.getElementById('otherStyleWrap');
    if (wrap) {
      wrap.style.display = input.checked ? 'block' : 'none';
      if (input.checked) {
        setTimeout(() => document.getElementById('otherStyleText')?.focus(), 50);
      }
    }
  }

  // Dispatch change event
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

/**
 * Synchronize visual presentation of custom checkbox button
 */
function syncCustomOptionState(itemEl, isChecked) {
  if (!itemEl) return;
  const box = itemEl.querySelector('.custom-check-box');
  const svg = box ? box.querySelector('svg') : null;
  const label = itemEl.querySelector('.custom-check-label');

  itemEl.setAttribute('aria-checked', isChecked ? 'true' : 'false');

  if (isChecked) {
    itemEl.classList.add('is-checked');
    itemEl.style.setProperty('background', '#FFFFFF', 'important');
    itemEl.style.setProperty('border-color', '#D89597', 'important');
    itemEl.style.setProperty('border-width', '2px', 'important');
    itemEl.style.setProperty('box-shadow', '0 4px 16px rgba(216, 149, 151, 0.26)', 'important');

    if (box) {
      box.style.setProperty('background', '#D89597', 'important');
      box.style.setProperty('border-color', '#D89597', 'important');
      box.style.setProperty('box-shadow', '0 2px 8px rgba(216, 149, 151, 0.45)', 'important');
    }
    if (svg) {
      svg.style.setProperty('display', 'block', 'important');
      svg.style.setProperty('opacity', '1', 'important');
      svg.style.setProperty('visibility', 'visible', 'important');
      svg.style.setProperty('stroke', '#FFFFFF', 'important');
    }
    if (label) {
      label.style.setProperty('color', '#261B15', 'important');
      label.style.setProperty('font-weight', '700', 'important');
    }
  } else {
    itemEl.classList.remove('is-checked');
    itemEl.style.setProperty('background', '#FAF7F2', 'important');
    itemEl.style.setProperty('border-color', '#E2D9D0', 'important');
    itemEl.style.setProperty('border-width', '1.5px', 'important');
    itemEl.style.setProperty('box-shadow', 'none', 'important');

    if (box) {
      box.style.setProperty('background', '#FFFFFF', 'important');
      box.style.setProperty('border-color', '#5C4A3E', 'important');
      box.style.setProperty('box-shadow', 'none', 'important');
    }
    if (svg) {
      svg.style.setProperty('display', 'none', 'important');
      svg.style.setProperty('opacity', '0', 'important');
      svg.style.setProperty('visibility', 'hidden', 'important');
    }
    if (label) {
      label.style.setProperty('color', '#382A24', 'important');
      label.style.setProperty('font-weight', '600', 'important');
    }
  }
}

function switchShopMode(mode) {
  const btnReadyMade = document.getElementById('btnModeReadyMade');
  const btnCustom = document.getElementById('btnModeCustom');
  const customStudioSection = document.getElementById('custom-studio');
  const productsSection = document.getElementById('products');

  if (mode === 'ready-made') {
    if (btnReadyMade) {
      btnReadyMade.classList.add('active');
      btnReadyMade.setAttribute('aria-selected', 'true');
    }
    if (btnCustom) {
      btnCustom.classList.remove('active');
      btnCustom.setAttribute('aria-selected', 'false');
    }

    document.getElementById('navLinkShop')?.classList.add('active');
    document.getElementById('navLinkCustom')?.classList.remove('active');

    if (productsSection) {
      const topOffset = productsSection.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  } else if (mode === 'custom-studio' || mode === 'custom-own' || mode === 'custom-request') {
    if (btnCustom) {
      btnCustom.classList.add('active');
      btnCustom.setAttribute('aria-selected', 'true');
    }
    if (btnReadyMade) {
      btnReadyMade.classList.remove('active');
      btnReadyMade.setAttribute('aria-selected', 'false');
    }

    document.getElementById('navLinkCustom')?.classList.add('active');
    document.getElementById('navLinkShop')?.classList.remove('active');

    if (customStudioSection) {
      const topOffset = customStudioSection.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });

      // Gentle highlight glow on studio card to direct user's eye
      const studioCard = customStudioSection.querySelector('.custom-request-card');
      if (studioCard) {
        studioCard.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
        studioCard.style.boxShadow = '0 0 0 4px rgba(216, 149, 151, 0.45), 0 25px 65px -15px rgba(78, 53, 36, 0.15)';
        studioCard.style.borderColor = 'var(--c-blush)';
        setTimeout(() => {
          studioCard.style.boxShadow = '';
          studioCard.style.borderColor = '';
        }, 1800);
      }
    }
  }
}

function toggleOtherNeedInput() {
  const check = document.getElementById('checkNeedOther');
  const wrap = document.getElementById('otherNeedWrap');
  const textInput = document.getElementById('otherNeedText');
  if (!check || !wrap) return;

  if (check.checked) {
    wrap.style.display = 'block';
    textInput?.focus();
  } else {
    wrap.style.display = 'none';
  }
}

function toggleOtherStyleInput() {
  const check = document.getElementById('checkStyleCustom');
  const wrap = document.getElementById('otherStyleWrap');
  const textInput = document.getElementById('otherStyleText');
  if (!check || !wrap) return;

  if (check.checked) {
    wrap.style.display = 'block';
    textInput?.focus();
  } else {
    wrap.style.display = 'none';
  }
}

function formatBudgetInput(input) {
  let val = input.value.replace(/\D/g, '');
  if (!val) {
    input.value = '';
    return;
  }
  input.value = Number(val).toLocaleString('id-ID');
}

function setQuickBudget(val, btnEl) {
  const budgetInput = document.getElementById('customBudget');
  if (budgetInput) {
    budgetInput.value = val;
    budgetInput.focus();
  }
  document.querySelectorAll('.budget-chip').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

function handleReferenceFiles(files) {
  if (!files || files.length === 0) return;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!customUploadedFiles.some(f => f.name === file.name && f.size === file.size)) {
      customUploadedFiles.push(file);
    }
  }

  renderReferenceFilesPreview();
}

function removeRefFile(index) {
  customUploadedFiles.splice(index, 1);
  renderReferenceFilesPreview();
}

function renderReferenceFilesPreview() {
  const list = document.getElementById('dropzonePreviewList');
  const prompt = document.getElementById('dropzonePrompt');
  if (!list) return;

  list.innerHTML = '';

  if (customUploadedFiles.length === 0) {
    list.style.display = 'none';
    if (prompt) prompt.style.display = 'flex';
    return;
  }

  list.style.display = 'flex';
  if (prompt) prompt.style.display = 'none';

  customUploadedFiles.forEach((file, idx) => {
    const item = document.createElement('div');
    item.className = 'dropzone-preview-item';

    const isImg = file.type.startsWith('image/');
    let iconOrThumb = isImg
      ? `<img class="preview-thumb" src="${URL.createObjectURL(file)}" alt="${file.name}">`
      : `<span style="font-size:1.2rem;">📄</span>`;

    const sizeKb = Math.round(file.size / 1024);
    const sizeStr = sizeKb > 1024 ? (sizeKb / 1024).toFixed(1) + ' MB' : sizeKb + ' KB';

    item.innerHTML = `
      ${iconOrThumb}
      <span class="preview-name" title="${file.name}">${file.name}</span>
      <span style="font-size:0.7rem; color:var(--c-text-light);">(${sizeStr})</span>
      <button type="button" class="preview-remove-btn" onclick="removeRefFile(${idx})" title="Hapus file">&times;</button>
    `;
    list.appendChild(item);
  });
}

function resetCustomRequestForm() {
  const form = document.getElementById('customRequestForm');
  if (form) form.reset();

  document.querySelectorAll('.custom-checkbox-item').forEach(item => {
    const input = item.querySelector('.custom-check-input');
    if (input) input.checked = false;
    syncCustomOptionState(item, false);
  });

  const otherNeedWrap = document.getElementById('otherNeedWrap');
  if (otherNeedWrap) otherNeedWrap.style.display = 'none';

  const otherStyleWrap = document.getElementById('otherStyleWrap');
  if (otherStyleWrap) otherStyleWrap.style.display = 'none';

  document.querySelectorAll('.budget-chip').forEach(b => b.classList.remove('active'));

  customUploadedFiles = [];
  renderReferenceFilesPreview();
  showToast('Formulir custom telah dibersihkan.');
}

function handleCustomRequestSubmit() {
  const form = document.getElementById('customRequestForm');
  if (!form) return;

  // 1. Gather Selected Needs
  const needsChecked = Array.from(document.querySelectorAll('input[name="customNeed"]:checked')).map(el => el.value);
  const otherNeed = document.getElementById('otherNeedText')?.value.trim();
  if (document.getElementById('checkNeedOther')?.checked && otherNeed) {
    const idx = needsChecked.indexOf('Other');
    if (idx !== -1) needsChecked[idx] = `Other (${otherNeed})`;
    else needsChecked.push(`Other (${otherNeed})`);
  }

  if (needsChecked.length === 0) {
    alert('Silakan pilih setidaknya satu jenis produk yang kamu butuhkan (Planner, Template, dll).');
    return;
  }

  // 2. Gather Preferred Styles
  const stylesChecked = Array.from(document.querySelectorAll('input[name="customStyle"]:checked')).map(el => el.value);
  const otherStyle = document.getElementById('otherStyleText')?.value.trim();
  if (document.getElementById('checkStyleCustom')?.checked && otherStyle) {
    const idx = stylesChecked.indexOf('Custom');
    if (idx !== -1) stylesChecked[idx] = `Custom (${otherStyle})`;
    else stylesChecked.push(`Custom (${otherStyle})`);
  }

  // 3. Idea Description
  const idea = document.getElementById('customIdea')?.value.trim();
  if (!idea) {
    alert('Mohon ceritakan sedikit tentang ide atau konsep yang kamu inginkan.');
    document.getElementById('customIdea')?.focus();
    return;
  }

  // 4. Budget & Deadline
  const budget = document.getElementById('customBudget')?.value.trim() || 'Didiskusikan';
  const deadline = document.getElementById('customDeadline')?.value || 'Fleksibel / Sesuai kesepakatan';

  // 5. Contact Info
  const clientName = document.getElementById('customClientName')?.value.trim();
  const clientContact = document.getElementById('customClientContact')?.value.trim();

  if (!clientName || !clientContact) {
    alert('Mohon isi nama dan kontak (WhatsApp/IG) kamu agar kami dapat menghubungi kembali.');
    return;
  }

  // 6. Build Formatted WhatsApp Order Brief
  const needsStr = needsChecked.map(n => `• ${n}`).join('\n');
  const stylesStr = stylesChecked.length > 0 ? stylesChecked.map(s => `• ${s}`).join('\n') : '• Menyesuaikan saran studio';
  const fileNotice = customUploadedFiles.length > 0
    ? `Ada ${customUploadedFiles.length} file referensi (${customUploadedFiles.map(f => f.name).join(', ')}), siap saya kirimkan di chat ini.`
    : 'Tidak ada lampiran (berdasarkan deskripsi konsep).';

  const waText =
    `✨ *CUSTOM BESPOKE REQUEST — SORENELLE* ✨
-----------------------------------------
Halo Sorenelle Studio, saya ingin berkonsultasi untuk pembuatan pesanan custom digital dengan detail brief berikut:

👤 *Nama Klien*: ${clientName}
📱 *Kontak*: ${clientContact}

📦 *Kebutuhan Produk*:
${needsStr}

🎨 *Preferred Style & Aesthetic*:
${stylesStr}

💡 *Konsep & Detail Ide*:
"${idea}"

💰 *Estimasi Budget*: ${budget.startsWith('Rp') ? budget : 'Rp ' + budget}
🗓️ *Target Deadline*: ${deadline}
📎 *Referensi Gambar/File*: ${fileNotice}

-----------------------------------------
Mohon info ketersediaan slot pengerjaan dan estimasi penawarannya ya. Terima kasih! 🌸`;

  // Encode & Open WhatsApp
  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;
  window.open(waUrl, '_blank');

  showToast('✨ Custom Request terkirim! Chat WhatsApp telah dibuka.');
}

// Global hooks
window.switchShopMode = switchShopMode;
window.toggleCustomOption = toggleCustomOption;
window.syncCustomOptionState = syncCustomOptionState;
window.toggleOtherNeedInput = toggleOtherNeedInput;
window.toggleOtherStyleInput = toggleOtherStyleInput;
window.formatBudgetInput = formatBudgetInput;
window.setQuickBudget = setQuickBudget;
window.handleReferenceFiles = handleReferenceFiles;
window.removeRefFile = removeRefFile;
window.resetCustomRequestForm = resetCustomRequestForm;
window.handleCustomRequestSubmit = handleCustomRequestSubmit;
