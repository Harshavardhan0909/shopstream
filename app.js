(() => {
  const P = [
    // id, title, cat, price, mrp, rating, reviews, emoji, bg, bullets
    [1, "Wireless Noise Cancelling Headphones", "Electronics", 7999, 14999, 4.5, 12840, "🎧", "#dbeafe", ["40-hour battery life", "Active noise cancellation", "Bluetooth 5.3 multipoint", "Foldable travel case"]],
    [2, "Smartphone 5G 8GB/128GB AMOLED", "Electronics", 18999, 24999, 4.3, 30211, "📱", "#e0e7ff", ["6.7\" 120Hz AMOLED display", "50MP triple camera", "5000mAh fast charging", "Dual SIM 5G"]],
    [3, "Ultrabook Laptop 14\" 16GB 512GB", "Electronics", 54990, 72990, 4.4, 5420, "💻", "#e5e7eb", ["12th-gen processor", "1.2kg lightweight body", "10-hour battery", "Backlit keyboard"]],
    [4, "Smartwatch with GPS & Health Tracking", "Electronics", 3499, 7999, 4.2, 18932, "⌚", "#fce7f3", ["1.8\" always-on display", "SpO2 & heart-rate", "100+ sports modes", "7-day battery"]],
    [5, "Portable Bluetooth Speaker Waterproof", "Electronics", 1799, 3499, 4.4, 22100, "🔊", "#dcfce7", ["IP67 waterproof", "20W stereo sound", "12-hour playtime", "Built-in mic"]],
    [6, "4K Action Camera with Stabilisation", "Electronics", 6499, 9999, 4.1, 3120, "📷", "#fef3c7", ["4K/60fps video", "EIS stabilisation", "Waterproof to 10m", "2 batteries included"]],
    [7, "Men's Running Shoes Lightweight", "Fashion", 1499, 3999, 4.2, 45210, "👟", "#fee2e2", ["Breathable mesh upper", "Cushioned EVA sole", "Anti-slip grip", "Sizes UK 6-11"]],
    [8, "Women's Cotton Kurta Set", "Fashion", 899, 2199, 4.3, 9820, "👗", "#fae8ff", ["100% cotton", "Machine washable", "Relaxed fit", "Festive prints"]],
    [9, "Classic Aviator Sunglasses UV400", "Fashion", 499, 1499, 4.0, 15330, "🕶️", "#fef9c3", ["UV400 protection", "Metal frame", "Includes case", "Unisex"]],
    [10, "Leather Backpack 25L Laptop Compartment", "Fashion", 1999, 4499, 4.4, 7788, "🎒", "#ffedd5", ["Fits 15.6\" laptop", "Water-resistant", "USB charging port", "Anti-theft pocket"]],
    [11, "Non-Stick Cookware Set 5-Piece", "Home & Kitchen", 2299, 4999, 4.3, 12050, "🍳", "#ecfccb", ["Induction friendly", "PFOA-free coating", "Cool-touch handles", "Glass lids"]],
    [12, "Automatic Drip Coffee Maker", "Home & Kitchen", 3299, 5999, 4.2, 4390, "☕", "#fde68a", ["12-cup carafe", "Programmable timer", "Reusable filter", "Keep-warm plate"]],
    [13, "Air Fryer 5L Digital Touch", "Home & Kitchen", 4499, 8999, 4.5, 28760, "🍟", "#fed7aa", ["Rapid air technology", "8 preset menus", "Dishwasher-safe basket", "1500W"]],
    [14, "Ergonomic Office Chair Mesh Back", "Home & Kitchen", 6999, 13999, 4.1, 6310, "🪑", "#e2e8f0", ["Lumbar support", "Adjustable armrests", "Tilt lock", "120kg capacity"]],
    [15, "LED Desk Lamp with Wireless Charger", "Home & Kitchen", 1299, 2499, 4.3, 8870, "💡", "#fef08a", ["5 brightness levels", "10W Qi charging", "Eye-care light", "Touch control"]],
    [16, "The Psychology of Money (Paperback)", "Books", 299, 499, 4.7, 98500, "📘", "#bfdbfe", ["Timeless lessons on wealth", "Paperback, 252 pages", "Bestseller", "English"]],
    [17, "Atomic Habits (Paperback)", "Books", 349, 699, 4.6, 120400, "📗", "#bbf7d0", ["Build good habits", "Proven framework", "Paperback", "English"]],
    [18, "Learn Python Programming – 3rd Edition", "Books", 599, 899, 4.5, 6720, "📙", "#fed7aa", ["Beginner friendly", "Hands-on projects", "Updated for Python 3.12", "Paperback"]],
    [19, "Yoga Mat 6mm Anti-Slip", "Sports", 599, 1499, 4.3, 31990, "🧘", "#d1fae5", ["Non-slip texture", "Eco-friendly TPE", "Carry strap", "183×61 cm"]],
    [20, "Adjustable Dumbbell Set 20kg", "Sports", 2799, 4999, 4.4, 9120, "🏋️", "#e5e7eb", ["Quick-change weights", "Anti-roll design", "Chrome handles", "Carry case"]],
    [21, "Cricket Bat English Willow", "Sports", 3999, 6999, 4.2, 2410, "🏏", "#fde68a", ["Grade-2 willow", "Short handle", "Pre-knocked", "Cover included"]],
    [22, "Gaming Mouse RGB 16000 DPI", "Electronics", 1199, 2499, 4.4, 17660, "🖱️", "#ddd6fe", ["16000 DPI sensor", "7 programmable buttons", "RGB lighting", "Braided cable"]],
    [23, "Mechanical Keyboard Hot-Swappable", "Electronics", 3799, 6499, 4.5, 5530, "⌨️", "#c7d2fe", ["Hot-swap switches", "Tri-mode connectivity", "PBT keycaps", "75% layout"]],
    [24, "Kids Building Blocks 500 Pieces", "Toys", 699, 1499, 4.6, 13800, "🧱", "#fecaca", ["500 colourful pieces", "BPA-free", "Storage box", "Ages 4+"]]
  ].map(([id, title, cat, price, mrp, rating, reviews, emoji, bg, bullets]) => ({ id, title, cat, price, mrp, rating, reviews, emoji, bg, bullets }));

  const CATS = ["Electronics", "Fashion", "Home & Kitchen", "Books", "Sports", "Toys"];
  const CAT_EMO = { Electronics: "🎧", Fashion: "👟", "Home & Kitchen": "🍳", Books: "📚", Sports: "🏋️", Toys: "🧱" };
  const SLIDES = [
    ["linear-gradient(120deg,#1e3a8a,#3b82f6)", "Great Indian Tech Sale", "Up to 60% off on headphones, phones & laptops", "🎧", "Electronics"],
    ["linear-gradient(120deg,#9d174d,#ec4899)", "Style that moves with you", "New season fashion from ₹499", "👗", "Fashion"],
    ["linear-gradient(120deg,#166534,#22c55e)", "Kitchen upgrade week", "Air fryers, cookware & more", "🍳", "Home & Kitchen"]
  ];

  const $ = (s) => document.querySelector(s);
  const inr = (n) => "₹" + n.toLocaleString("en-IN");
  const state = { cat: "all", q: "", sort: "featured", price: [0, 999999], rating: 0, slide: 0 };
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem("ss_cart") || "[]"); } catch (e) { cart = []; }
  const saveCart = () => { try { localStorage.setItem("ss_cart", JSON.stringify(cart)); } catch (e) {} };

  const stars = (r) => "★".repeat(Math.floor(r)) + (r % 1 >= 0.5 ? "½" : "") + "☆".repeat(5 - Math.ceil(r));
  const toast = (m) => { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), 1800); };

  // ---------- nav / filters ----------
  const catOptions = ["all", ...CATS];
  $("#searchCat").innerHTML = catOptions.map((c) => `<option value="${c}">${c === "all" ? "All" : c}</option>`).join("");
  $("#subNav").innerHTML = `<a data-c="all">All</a>` + CATS.map((c) => `<a data-c="${c}">${c}</a>`).join("") + `<a data-c="all" data-deal="1">Today's Deals</a>`;
  $("#catCards").innerHTML = CATS.slice(0, 4).map((c) => `<div class="cat-card" data-c="${c}"><h3>${c}</h3><div class="emo">${CAT_EMO[c]}</div><a>Shop now</a></div>`).join("");

  function renderFilters() {
    $("#fCat").innerHTML = ["all", ...CATS].map((c) => `<div class="fc ${state.cat === c ? "on" : ""}" data-c="${c}">${c === "all" ? "All categories" : c}</div>`).join("");
  }

  function filtered() {
    let list = P.filter((p) =>
      (state.cat === "all" || p.cat === state.cat) &&
      p.price >= state.price[0] && p.price <= state.price[1] &&
      p.rating >= state.rating &&
      (!state.q || (p.title + " " + p.cat).toLowerCase().includes(state.q.toLowerCase())));
    if (state.deal) list = list.filter((p) => 1 - p.price / p.mrp >= 0.5);
    if (state.sort === "low") list.sort((a, b) => a.price - b.price);
    if (state.sort === "high") list.sort((a, b) => b.price - a.price);
    if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }

  function renderGrid() {
    const list = filtered();
    $("#resultCount").textContent = `${list.length} result${list.length === 1 ? "" : "s"}` + (state.q ? ` for "${state.q}"` : "") + (state.deal ? " · Today's Deals" : "");
    $("#grid").innerHTML = list.length ? list.map((p) => {
      const off = Math.round((1 - p.price / p.mrp) * 100);
      return `<article class="card" data-id="${p.id}">
        ${off >= 50 ? `<span class="badge">${off}% off · Deal</span>` : ""}
        <div class="pimg" style="background:${p.bg}">${p.emoji}</div>
        <h4>${p.title}</h4>
        <div class="stars">${stars(p.rating)}<small>${p.reviews.toLocaleString("en-IN")}</small></div>
        <div class="price"><sup>₹</sup>${p.price.toLocaleString("en-IN")}</div>
        <div class="mrp">M.R.P.: <s>${inr(p.mrp)}</s> <span class="off">(${off}% off)</span></div>
        <div class="prime">✓ prime · Free delivery</div>
        <button class="add" data-add="${p.id}">Add to Cart</button></article>`;
    }).join("") : `<div class="empty"><h3>No results found</h3><p>Try different keywords or clear filters.</p></div>`;
    renderFilters();
  }

  function setCat(c, deal) {
    state.cat = c; state.deal = !!deal; $("#searchCat").value = c;
    $("#hero").style.display = $("#catCards").style.display = (c === "all" && !state.q && !deal) ? "" : "none";
    renderGrid();
    if (c !== "all" || deal) $(".listing").scrollIntoView({ behavior: "smooth" });
  }

  // ---------- hero ----------
  function renderSlide() {
    const [bg, h, p, e, c] = SLIDES[state.slide];
    const s = $("#slide"); s.style.background = bg;
    s.innerHTML = `<div><h1>${h}</h1><p>${p}</p><button data-c="${c}">Shop now</button></div><div class="big">${e}</div>`;
  }
  const move = (d) => { state.slide = (state.slide + d + SLIDES.length) % SLIDES.length; renderSlide(); };
  $("#prev").onclick = () => move(-1); $("#next").onclick = () => move(1);
  setInterval(() => move(1), 5000);

  // ---------- cart ----------
  const count = () => cart.reduce((a, i) => a + i.qty, 0);
  const total = () => cart.reduce((a, i) => a + i.qty * P.find((p) => p.id === i.id).price, 0);
  function addToCart(id) {
    const it = cart.find((i) => i.id === id);
    it ? it.qty++ : cart.push({ id, qty: 1 });
    saveCart(); renderCart(); toast("Added to cart ✓");
  }
  function renderCart() {
    $("#cartCount").textContent = count();
    $("#cartItems").innerHTML = cart.length ? cart.map((i) => {
      const p = P.find((x) => x.id === i.id);
      return `<div class="ci"><div class="pimg" style="background:${p.bg}">${p.emoji}</div><div>
        <h5>${p.title}</h5><b>${inr(p.price)}</b><br>
        <span class="qty"><button data-dec="${p.id}">−</button><span>${i.qty}</span><button data-inc="${p.id}">+</button></span>
        <button class="rm" data-rm="${p.id}">Delete</button></div></div>`;
    }).join("") : `<p style="text-align:center;margin-top:60px">Your cart is empty 🛒</p>`;
    $("#cartFooter").innerHTML = cart.length
      ? `<div class="sub-t">Subtotal (${count()} items): <b>${inr(total())}</b></div><button class="btn o" id="checkout">Proceed to Buy</button>` : "";
  }
  const openCart = (on) => { $("#drawer").classList.toggle("on", on); $("#overlay").classList.toggle("on", on); };

  // ---------- modal ----------
  function openProduct(id) {
    const p = P.find((x) => x.id === id); const off = Math.round((1 - p.price / p.mrp) * 100);
    const m = $("#modal"); m.classList.add("on");
    m.innerHTML = `<div class="mbox"><button class="close" data-close>✕</button>
      <div class="pimg" style="background:${p.bg}">${p.emoji}</div>
      <div><h2>${p.title}</h2><div class="stars">${p.rating} ${stars(p.rating)} <small>${p.reviews.toLocaleString("en-IN")} ratings</small></div><hr>
      <div><span class="off" style="font-size:22px">-${off}%</span> <span class="price"><sup>₹</sup>${p.price.toLocaleString("en-IN")}</span></div>
      <div class="mrp">M.R.P.: <s>${inr(p.mrp)}</s></div>
      <div class="stock">In stock</div><div class="prime">✓ prime · FREE delivery tomorrow</div>
      <ul>${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      <button class="btn" data-add="${p.id}" data-close>Add to Cart</button><br><br>
      <button class="btn o" data-buy="${p.id}">Buy Now</button></div></div>`;
  }
  const closeModal = () => $("#modal").classList.remove("on");

  function checkoutModal() {
    openCart(false);
    const m = $("#modal"); m.classList.add("on");
    const sub = total(), ship = sub > 499 ? 0 : 40, tax = Math.round(sub * 0.05);
    m.innerHTML = `<div class="mbox"><button class="close" data-close>✕</button>
      <form class="form" id="payForm"><h2>Checkout</h2>
        <input required name="name" placeholder="Full name"><input required name="addr" placeholder="Address">
        <div class="row"><input required name="city" placeholder="City"><input required pattern="\\d{6}" name="pin" placeholder="PIN code"></div>
        <input required pattern="[0-9 ]{12,19}" placeholder="Card number (test: 4242 4242 4242 4242)">
        <div class="row"><input required placeholder="MM/YY"><input required placeholder="CVV" pattern="\\d{3}"></div>
        <button class="btn o">Place your order</button></form>
      <div class="sum"><h3>Order Summary</h3><div><span>Items (${count()})</span><span>${inr(sub)}</span></div>
        <div><span>Delivery</span><span>${ship ? inr(ship) : "FREE"}</span></div><div><span>Tax (5%)</span><span>${inr(tax)}</span></div>
        <hr><div><b>Order Total</b><b style="color:var(--price)">${inr(sub + ship + tax)}</b></div></div></div>`;
    $("#payForm").onsubmit = (e) => {
      e.preventDefault();
      const id = "SS-" + Math.random().toString(36).slice(2, 8).toUpperCase();
      const orders = JSON.parse(localStorage.getItem("ss_orders") || "[]");
      orders.unshift({ id, total: sub + ship + tax, items: count(), date: new Date().toLocaleDateString("en-IN") });
      try { localStorage.setItem("ss_orders", JSON.stringify(orders)); } catch (e) {}
      cart = []; saveCart(); renderCart();
      m.innerHTML = `<div class="mbox"><div class="ok"><div class="tick">✅</div><h2>Order placed, thank you!</h2><p>Order ID <b>${id}</b>. Confirmation shown for demo only.</p><button class="btn" data-close style="max-width:240px">Continue shopping</button></div></div>`;
    };
  }

  function ordersModal() {
    const orders = JSON.parse(localStorage.getItem("ss_orders") || "[]");
    const m = $("#modal"); m.classList.add("on");
    m.innerHTML = `<div class="mbox" style="grid-template-columns:1fr"><button class="close" data-close>✕</button><h2>Your Orders</h2>` +
      (orders.length ? orders.map((o) => `<div class="sum"><div><b>${o.id}</b><span>${o.date}</span></div><div><span>${o.items} items</span><b>${inr(o.total)}</b></div></div>`).join("") : "<p>No orders yet.</p>") + `</div>`;
  }

  // ---------- events ----------
  document.addEventListener("click", (e) => {
    const t = e.target;
    const add = t.closest("[data-add]"); if (add) { addToCart(+add.dataset.add); e.stopPropagation(); if (add.hasAttribute("data-close")) closeModal(); return; }
    if (t.closest("[data-buy]")) { addToCart(+t.closest("[data-buy]").dataset.buy); checkoutModal(); return; }
    if (t.closest("[data-close]") || t === $("#modal")) return closeModal();
    const inc = t.closest("[data-inc]"), dec = t.closest("[data-dec]"), rm = t.closest("[data-rm]");
    if (inc) { cart.find((i) => i.id === +inc.dataset.inc).qty++; saveCart(); renderCart(); return; }
    if (dec) { const i = cart.find((x) => x.id === +dec.dataset.dec); i.qty--; if (i.qty <= 0) cart = cart.filter((x) => x !== i); saveCart(); renderCart(); return; }
    if (rm) { cart = cart.filter((i) => i.id !== +rm.dataset.rm); saveCart(); renderCart(); return; }
    if (t.closest("#checkout")) return checkoutModal();
    const catEl = t.closest("[data-c]"); if (catEl) { state.q = ""; $("#searchInput").value = ""; return setCat(catEl.dataset.c, catEl.dataset.deal); }
    const card = t.closest(".card"); if (card) return openProduct(+card.dataset.id);
  });
  $("#cartBtn").onclick = () => openCart(true);
  $("#closeDrawer").onclick = $("#overlay").onclick = () => openCart(false);
  $("#home").onclick = (e) => { e.preventDefault(); state.q = ""; $("#searchInput").value = ""; setCat("all"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  $("#signIn").onclick = (e) => { e.preventDefault(); toast("Sign-in is not part of this demo"); };
  $("#ordersLink").onclick = (e) => { e.preventDefault(); ordersModal(); };
  $("#searchForm").onsubmit = (e) => { e.preventDefault(); state.q = $("#searchInput").value.trim(); state.cat = $("#searchCat").value; state.deal = false; setCat(state.cat); if (state.q) $(".listing").scrollIntoView({ behavior: "smooth" }); };
  $("#sort").onchange = (e) => { state.sort = e.target.value; renderGrid(); };
  document.querySelectorAll('input[name="price"]').forEach((r) => r.onchange = () => { state.price = r.value.split("-").map(Number); renderGrid(); });
  document.querySelectorAll('input[name="rating"]').forEach((r) => r.onchange = () => { state.rating = +r.value; renderGrid(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); openCart(false); } });

  renderSlide(); renderGrid(); renderCart();
})();
