const pizzaTradicionais = [
  ["margherita", "Margherita", "Molho de tomate, mozzarella, orégano, manjericão e tomate", 8.5, 12.5],
  ["bacon", "Bacon", "Molho de tomate, mozzarella, orégano e bacon", 9.5, 14.5],
  ["fiambre", "Fiambre", "Molho de tomate, mozzarella, orégano e fiambre", 8.9, 13.5],
  ["chourico", "Chouriço", "Molho de tomate, mozzarella, orégano, chouriço e cebola", 9.9, 14.9],
  ["mozzarella", "Mozzarella", "Molho de tomate, mozzarella e orégano", 8.5, 12.9],
  ["azeite-alho", "Azeite e Alho", "Molho de tomate, mozzarella, orégano e alho frito", 8.9, 13.5],
  ["hawaiana", "Hawaiana", "Molho de tomate, mozzarella, orégano, fiambre e ananás", 9.5, 14.5],
  ["atum", "Atum", "Molho de tomate, mozzarella, orégano, atum e cebola", 9.9, 14.9],
  ["cogumelos", "Cogumelos", "Molho de tomate, mozzarella, orégano e cogumelos", 9.5, 14.5],
  ["barbecue", "Barbecue", "Molho de tomate, mozzarella, orégano, frango desfiado e barbecue", 10.5, 15.9],
];

const pizzaTop = [
  ["calabresa", "Calabresa", "Molho de tomate, mozzarella, orégano, calabresa e cebola", 10.9, 16.5],
  ["frango-catupiry", "Frango com Catupiry", "Molho de tomate, mozzarella, frango desfiado e catupiry", 11.5, 17.5],
  ["portuguesa", "Portuguesa", "Molho de tomate, mozzarella, orégano, fiambre, ovo, palmito, ervilha, cebola e azeitona", 11.9, 18.5],
  ["quatro-queijos", "4 Queijos", "Molho de tomate, mozzarella, orégano, catupiry, parmesão e cheddar", 11.5, 17.9],
  ["baiana", "Baiana", "Molho de tomate, mozzarella, orégano, carne bovina picante e catupiry", 11.9, 18.5],
  ["cheddar", "Cheddar", "Molho de tomate, mozzarella, orégano, bacon e cheddar", 10.9, 16.9],
  ["carbonara", "Carbonara", "Molho de tomate, mozzarella, orégano, bacon, catupiry e cebola", 11.5, 17.9],
  ["top-chefe", "Top Chefe", "Molho de tomate, mozzarella, orégano, fiambre, bacon, milho, tomate, azeitona e cebola", 12.5, 19.5],
  ["pepperoni", "Pepperoni", "Molho de tomate, mozzarella, orégano e pepperoni", 11.9, 18.5],
];

const pizzaDoces = [
  ["brigadeiro", "Brigadeiro", "Chocolate e granulado de chocolate", 8.9, 13.9],
  ["morango", "Morango", "Chocolate e morango fresco", 9.5, 14.9],
  ["pe-moleque", "Pé de Moleque", "Doce de leite e amendoim triturado", 9.5, 14.9],
  ["beijinho", "Beijinho", "Leite condensado e coco ralado", 8.9, 13.9],
  ["banana", "Banana", "Banana com canela e leite condensado", 8.9, 13.9],
];

const sizeProducts = (items, category, icon) =>
  items.flatMap(([id, name, description, smallPrice, largePrice]) => [
    { id: `${id}-p`, category, name: `${name} P`, description, price: smallPrice, station: "Cozinha", icon },
    { id: `${id}-g`, category, name: `${name} G`, description, price: largePrice, station: "Cozinha", icon },
  ]);

const products = [
  ...sizeProducts(pizzaTradicionais, "Tradicionais", "PZ"),
  ...sizeProducts(pizzaTop, "Top", "TOP"),
  ...sizeProducts(pizzaDoces, "Doces", "DO"),
  { id: "borda-recheada-p", category: "Extras", name: "Borda Recheada P", description: "Catupiry ou cheddar", price: 2.5, station: "Cozinha", icon: "EX" },
  { id: "borda-recheada-g", category: "Extras", name: "Borda Recheada G", description: "Catupiry ou cheddar", price: 3.9, station: "Cozinha", icon: "EX" },
  { id: "batata", category: "Porções", name: "Batata", description: "Dose de batata frita", price: 4.5, station: "Cozinha", icon: "PR" },
  { id: "batata-bacon-cheddar", category: "Porções", name: "Batata com Bacon e Cheddar", description: "Batata frita com bacon crocante e cheddar", price: 6.9, station: "Cozinha", icon: "PR" },
  { id: "maminha", category: "Porções", name: "Maminha", description: "Porção de maminha grelhada", price: 10.9, station: "Cozinha", icon: "PR" },
  { id: "frango-passarinho", category: "Porções", name: "Frango à Passarinho", description: "Frango crocante temperado da casa", price: 8.9, station: "Cozinha", icon: "PR" },
  { id: "coca-cola", category: "Bebidas", name: "Coca Cola", description: "33 cl", price: 2.2, station: "Bar", icon: "BR" },
  { id: "coca-zero", category: "Bebidas", name: "Coca Cola Zero", description: "33 cl", price: 2.2, station: "Bar", icon: "BR" },
  { id: "guarana", category: "Bebidas", name: "Guarana Antarctica", description: "33 cl", price: 2.2, station: "Bar", icon: "BR" },
  { id: "fanta-uva", category: "Bebidas", name: "Fanta Uva", description: "33 cl", price: 2.2, station: "Bar", icon: "BR" },
  { id: "fanta-laranja", category: "Bebidas", name: "Fanta Laranja", description: "33 cl", price: 2.2, station: "Bar", icon: "BR" },
  { id: "sumol-laranja", category: "Bebidas", name: "Sumol Laranja", description: "33 cl", price: 2.2, station: "Bar", icon: "BR" },
  { id: "sprite", category: "Bebidas", name: "Sprite", description: "33 cl", price: 2.2, station: "Bar", icon: "BR" },
  { id: "nestea-ananas-manga", category: "Bebidas", name: "Nestea Ananás e Manga", description: "33 cl", price: 2.4, station: "Bar", icon: "BR" },
  { id: "nestea-limao", category: "Bebidas", name: "Nestea Limão", description: "33 cl", price: 2.4, station: "Bar", icon: "BR" },
  { id: "nestea-pessego", category: "Bebidas", name: "Nestea Pêssego", description: "33 cl", price: 2.4, station: "Bar", icon: "BR" },
  { id: "agua", category: "Bebidas", name: "Água", description: "33 cl", price: 1.5, station: "Bar", icon: "BR" },
  { id: "agua-gas", category: "Bebidas", name: "Água com Gás", description: "25 cl", price: 1.7, station: "Bar", icon: "BR" },
  { id: "agua-pedras-limao", category: "Bebidas", name: "Água das Pedras Limão", description: "25 cl", price: 1.9, station: "Bar", icon: "BR" },
  { id: "cafe", category: "Bebidas", name: "Café", description: "Expresso", price: 1.0, station: "Bar", icon: "BR" },
  { id: "imperial", category: "Cervejas", name: "Imperial", description: "Cerveja de pressão", price: 1.8, station: "Bar", icon: "CV" },
  { id: "caneca", category: "Cervejas", name: "Caneca", description: "Cerveja de pressão grande", price: 3.2, station: "Bar", icon: "CV" },
  { id: "sagres-mini", category: "Cervejas", name: "Sagres Mini", description: "Garrafa mini", price: 1.5, station: "Bar", icon: "CV" },
  { id: "heineken-mini", category: "Cervejas", name: "Heineken Mini", description: "Garrafa mini", price: 1.8, station: "Bar", icon: "CV" },
  { id: "corona", category: "Cervejas", name: "Corona", description: "Garrafa", price: 3.5, station: "Bar", icon: "CV" },
  { id: "somersby", category: "Cervejas", name: "Somersby", description: "Cidra", price: 3.2, station: "Bar", icon: "CV" },
  { id: "sem-alcool", category: "Cervejas", name: "Sem Álcool", description: "Cerveja sem álcool", price: 2.5, station: "Bar", icon: "CV" },
];

const state = {
  activeCategory: "Tradicionais",
  table: "Mesa 12",
  currentUser: null,
  pendingValidationEmail: null,
  cart: [],
  sentOrders: [],
  paymentMethod: "Cartão",
};

const currency = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" });

const els = {
  loginScreen: document.querySelector("#loginScreen"),
  tableScreen: document.querySelector("#tableScreen"),
  orderScreen: document.querySelector("#orderScreen"),
  loginForm: document.querySelector("#loginForm"),
  registerForm: document.querySelector("#registerForm"),
  tableForm: document.querySelector("#tableForm"),
  showLoginBtn: document.querySelector("#showLoginBtn"),
  showRegisterBtn: document.querySelector("#showRegisterBtn"),
  tableInput: document.querySelector("#tableInput"),
  registerNameInput: document.querySelector("#registerNameInput"),
  registerEmailInput: document.querySelector("#registerEmailInput"),
  registerPhoneInput: document.querySelector("#registerPhoneInput"),
  registerTaxInput: document.querySelector("#registerTaxInput"),
  registerPasswordInput: document.querySelector("#registerPasswordInput"),
  loginInput: document.querySelector("#loginInput"),
  passwordInput: document.querySelector("#passwordInput"),
  tableBadge: document.querySelector("#tableBadge"),
  tabs: document.querySelectorAll(".tab"),
  categoryTitle: document.querySelector("#categoryTitle"),
  productList: document.querySelector("#productList"),
  cartItems: document.querySelector("#cartItems"),
  mobileCartItems: document.querySelector("#mobileCartItems"),
  cartCount: document.querySelector("#cartCount"),
  subtotalText: document.querySelector("#subtotalText"),
  serviceText: document.querySelector("#serviceText"),
  totalText: document.querySelector("#totalText"),
  sendOrderBtn: document.querySelector("#sendOrderBtn"),
  mobileSendOrderBtn: document.querySelector("#mobileSendOrderBtn"),
  mobileQuickSendBtn: document.querySelector("#mobileQuickSendBtn"),
  mobileOpenCartBtn: document.querySelector("#mobileOpenCartBtn"),
  mobileActionBar: document.querySelector("#mobileActionBar"),
  closeBillBtn: document.querySelector("#closeBillBtn"),
  mobileCloseBillBtn: document.querySelector("#mobileCloseBillBtn"),
  callWaiterBtn: document.querySelector("#callWaiterBtn"),
  orderHistory: document.querySelector("#orderHistory"),
  orderNotes: document.querySelector("#orderNotes"),
  mobileOrderNotes: document.querySelector("#mobileOrderNotes"),
  toast: document.querySelector("#toast"),
  openCartBtn: document.querySelector("#openCartBtn"),
  closeCartBtn: document.querySelector("#closeCartBtn"),
  mobileCart: document.querySelector("#mobileCart"),
  paymentModal: document.querySelector("#paymentModal"),
  closePaymentBtn: document.querySelector("#closePaymentBtn"),
  paymentTotal: document.querySelector("#paymentTotal"),
  confirmPaymentBtn: document.querySelector("#confirmPaymentBtn"),
  paymentMethods: document.querySelectorAll(".payment-methods button"),
  emailValidationModal: document.querySelector("#emailValidationModal"),
  validationEmailText: document.querySelector("#validationEmailText"),
  simulateEmailValidationBtn: document.querySelector("#simulateEmailValidationBtn"),
};

function formatMoney(value) {
  return currency.format(value).replace(/\s/g, " ");
}

function getTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const service = subtotal * 0.1;
  return { subtotal, service, total: subtotal + service };
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.remove("hidden");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.add("hidden"), 2800);
}

function getUsers() {
  return JSON.parse(localStorage.getItem("atp_users") || "{}");
}

function saveUsers(users) {
  localStorage.setItem("atp_users", JSON.stringify(users));
}

function normalizeLogin(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function findUserByLogin(identifier) {
  const login = normalizeLogin(identifier);
  const users = getUsers();
  const user = Object.values(users).find((item) => item.email === login || item.phone === login);
  return user ? { login: user.email, user } : null;
}

function showEmailValidationBox(email) {
  state.pendingValidationEmail = email;
  els.validationEmailText.textContent = email;
  els.emailValidationModal.classList.remove("hidden");
}

function getUserOrders() {
  if (!state.currentUser) return [];
  const allOrders = JSON.parse(localStorage.getItem("atp_previous_orders") || "{}");
  return allOrders[state.currentUser.login] || [];
}

function savePreviousOrder(order) {
  if (!state.currentUser) return;
  const allOrders = JSON.parse(localStorage.getItem("atp_previous_orders") || "{}");
  const userOrders = allOrders[state.currentUser.login] || [];
  allOrders[state.currentUser.login] = [order, ...userOrders].slice(0, 10);
  localStorage.setItem("atp_previous_orders", JSON.stringify(allOrders));
}

function renderProducts() {
  els.categoryTitle.textContent = state.activeCategory;
  if (state.activeCategory === "Conta") {
    els.productList.className = "account-list";
    renderAccountPage();
    return;
  }
  if (state.activeCategory === "Pedidos") {
    els.productList.className = "account-list";
    renderPreviousOrdersPage();
    return;
  }

  els.productList.className = "product-list";
  els.productList.innerHTML = products
    .filter((product) => product.category === state.activeCategory)
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-top">
            <div>
              <h3>${product.name}</h3>
              <p>${product.description}</p>
            </div>
            <span class="product-icon" aria-hidden="true">${product.icon}</span>
          </div>
          <div class="product-footer">
            <div>
              <span class="price">${formatMoney(product.price)}</span>
              <p>${product.station}</p>
            </div>
            <button class="add-btn" data-add="${product.id}" type="button" aria-label="Adicionar ${product.name}">+</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAccountPage() {
  const currentTotals = getTotals();
  const sentSubtotal = state.sentOrders.reduce((sum, order) => sum + order.total, 0);
  const subtotal = sentSubtotal + currentTotals.subtotal;
  const service = subtotal * 0.1;
  const total = subtotal + service;
  const hasAnyItem = subtotal > 0;
  const user = state.currentUser || {};

  const pendingItems = state.cart.length
    ? state.cart.map((item) => `<li>${item.qty}x ${item.name} - ${formatMoney(item.price * item.qty)}</li>`).join("")
    : "<li>Nenhum item pendente no carrinho.</li>";

  const sentOrders = state.sentOrders.length
    ? state.sentOrders.map((order) => `<li>${order.code} - ${order.items} itens - ${formatMoney(order.total)}</li>`).join("")
    : "<li>Nenhuma comanda enviada ainda.</li>";

  els.productList.innerHTML = `
    <section class="account-page">
      <div class="account-summary">
        <p class="eyebrow">Finalizar conta</p>
        <h3>Total da mesa</h3>
        <strong class="account-total">${formatMoney(total)}</strong>
      </div>

      <div class="account-grid">
        <article class="account-box">
          <h3>Itens no carrinho</h3>
          <ul>${pendingItems}</ul>
        </article>
        <article class="account-box">
          <h3>Comandas enviadas</h3>
          <ul>${sentOrders}</ul>
        </article>
      </div>

      <div class="totals account-totals">
        <div><span>Subtotal</span><strong>${formatMoney(subtotal)}</strong></div>
        <div><span>Serviço 10%</span><strong>${formatMoney(service)}</strong></div>
        <div class="grand-total"><span>Total</span><strong>${formatMoney(total)}</strong></div>
      </div>

      <div class="payment-methods account-methods">
        <button class="${state.paymentMethod === "Cartão" ? "active" : ""}" data-pay-method="Cartão" type="button">Cartão</button>
        <button class="${state.paymentMethod === "Multibanco" ? "active" : ""}" data-pay-method="Multibanco" type="button">Multibanco</button>
        <button class="${state.paymentMethod === "Dinheiro" ? "active" : ""}" data-pay-method="Dinheiro" type="button">Dinheiro</button>
      </div>

      <label class="contributor-check">
        <input id="needContributor" type="checkbox" data-toggle-contributor />
        Quero contribuinte na fatura
      </label>

      <div id="contributorDetails" class="contributor-details hidden">
        <strong>Contribuinte para faturação</strong>
        <span>Contribuinte: ${user.taxId || "-"}</span>
      </div>

      <button class="primary-action" data-confirm-account-payment type="button" ${hasAnyItem ? "" : "disabled"}>
        Solicitar pagamento
      </button>
    </section>
  `;
}

function renderPreviousOrdersPage() {
  const orders = getUserOrders();

  if (!orders.length) {
    els.productList.innerHTML = `
      <section class="account-page">
        <div class="account-summary">
          <p class="eyebrow">Pedidos anteriores</p>
          <h3>Nenhum pedido salvo ainda</h3>
          <p>Quando você enviar uma comanda, ela aparecerá aqui para refazer depois.</p>
        </div>
      </section>
    `;
    return;
  }

  els.productList.innerHTML = `
    <section class="account-page">
      <div class="account-summary">
        <p class="eyebrow">Pedidos anteriores</p>
        <h3>${state.currentUser.name}</h3>
      </div>
      ${orders
        .map(
          (order, index) => `
            <article class="previous-order-card">
              <div>
                <strong>${order.code} - ${order.table}</strong>
                <span>${order.date} - ${order.items.reduce((sum, item) => sum + item.qty, 0)} itens - ${formatMoney(order.total)}</span>
                <ul>
                  ${order.items.map((item) => `<li>${item.qty}x ${item.name}</li>`).join("")}
                </ul>
              </div>
              <button class="primary-action" data-reorder="${index}" type="button">Refazer pedido</button>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderCartList(target, includeTotals = false) {
  if (!state.cart.length) {
    target.className = target.id === "cartItems" ? "cart-items empty-state" : "empty-state";
    target.innerHTML = "Nenhum produto adicionado. Escolha um item do cardápio para montar o pedido.";
    return;
  }

  target.className = target.id === "cartItems" ? "cart-items" : "";
  const items = state.cart
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <span>${item.station} - ${formatMoney(item.price * item.qty)}</span>
          </div>
          <div class="qty-controls" aria-label="Quantidade">
            <button data-dec="${item.id}" type="button">-</button>
            <strong>${item.qty}</strong>
            <button data-inc="${item.id}" type="button">+</button>
          </div>
          <button class="remove-item-btn" data-remove="${item.id}" type="button">Remover</button>
        </div>
      `
    )
    .join("");

  const totals = getTotals();
  const totalsMarkup = includeTotals
    ? `<div class="totals"><div><span>Total</span><strong>${formatMoney(totals.total)}</strong></div></div>`
    : "";

  target.innerHTML = items + totalsMarkup;
}

function renderCart() {
  const totals = getTotals();
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);

  els.cartCount.textContent = count;
  els.subtotalText.textContent = formatMoney(totals.subtotal);
  els.serviceText.textContent = formatMoney(totals.service);
  els.totalText.textContent = formatMoney(totals.total);
  if (els.paymentTotal) {
    els.paymentTotal.textContent = formatMoney(totals.total);
  }
  renderCartList(els.cartItems);
  renderCartList(els.mobileCartItems, true);
  if (state.activeCategory === "Conta" || state.activeCategory === "Pedidos") {
    renderProducts();
  }
}

function renderHistory() {
  if (!state.sentOrders.length) {
    els.orderHistory.className = "history-list empty-state";
    els.orderHistory.textContent = "Ainda não há comandas.";
    return;
  }

  els.orderHistory.className = "history-list";
  els.orderHistory.innerHTML = state.sentOrders
    .map(
      (order) => `
        <div class="history-item">
          <strong>${order.code} - ${order.status}</strong>
          <span>${order.items} itens - ${order.destinations} - ${formatMoney(order.total)}</span>
        </div>
      `
    )
    .join("");
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const existing = state.cart.find((item) => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }

  renderCart();
  showToast(`${product.name} adicionado ao pedido.`);
}

function changeQty(productId, delta) {
  const existing = state.cart.find((item) => item.id === productId);
  if (!existing) return;

  existing.qty += delta;
  if (existing.qty <= 0) {
    state.cart = state.cart.filter((item) => item.id !== productId);
  }

  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  renderCart();
  showToast("Item removido do pedido.");
}

function sendOrder() {
  if (!state.cart.length) {
    showToast("Adicione produtos antes de enviar a comanda.");
    return;
  }

  const totals = getTotals();
  const orderItems = state.cart.map((item) => ({ ...item }));
  const destinations = [...new Set(state.cart.flatMap((item) => item.station.split(" + ")))].join(" e ");
  const order = {
    code: `#${String(state.sentOrders.length + 1).padStart(3, "0")}`,
    status: "Enviado",
    items: state.cart.reduce((sum, item) => sum + item.qty, 0),
    destinations,
    total: totals.subtotal,
    notes: (els.mobileOrderNotes.value || els.orderNotes.value).trim(),
  };

  state.sentOrders.unshift(order);
  savePreviousOrder({
    ...order,
    table: state.table,
    date: new Date().toLocaleString("pt-PT", { dateStyle: "short", timeStyle: "short" }),
    items: orderItems,
  });
  state.cart = [];
  els.orderNotes.value = "";
  els.mobileOrderNotes.value = "";
  renderCart();
  renderHistory();
  if (state.activeCategory === "Conta") {
    renderProducts();
  }
  showToast(`Comanda ${order.code} enviada para ${destinations}.`);
}

function openPayment() {
  const totals = getTotals();
  const previousTotal = state.sentOrders.reduce((sum, order) => sum + order.total, 0);
  const fullTotal = previousTotal + totals.subtotal;

  if (!fullTotal) {
    showToast("A conta ainda não possui itens.");
    return;
  }

  if (els.paymentTotal) {
    els.paymentTotal.textContent = formatMoney(fullTotal * 1.1);
  }
  els.paymentModal?.classList.remove("hidden");
}

els.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const login = els.loginInput.value;
  const password = els.passwordInput.value;
  const match = findUserByLogin(login);

  if (!match || match.user.password !== password) {
    showToast("Login ou senha incorretos.");
    return;
  }

  if (!match.user.emailValidated) {
    showEmailValidationBox(match.user.email);
    showToast("Valide o email antes de entrar.");
    return;
  }

  state.currentUser = { login: match.login, ...match.user };
  els.loginScreen.classList.add("hidden");
  els.tableScreen.classList.remove("hidden");
  showToast(`Bem-vindo, ${match.user.name}.`);
});

els.registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = els.registerNameInput.value.trim();
  const email = normalizeLogin(els.registerEmailInput.value);
  const phone = normalizeLogin(els.registerPhoneInput.value);
  const taxId = els.registerTaxInput.value.trim();
  const password = els.registerPasswordInput.value;
  const users = getUsers();

  const alreadyExists = Object.values(users).some((user) => user.email === email || user.phone === phone);
  if (alreadyExists) {
    showToast("Este email ou telefone já está cadastrado.");
    return;
  }

  users[email] = {
    name,
    email,
    phone,
    taxId,
    password,
    emailValidated: false,
    validationToken: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
  };
  saveUsers(users);
  showEmailValidationBox(email);
  showToast("Cadastro criado. Valide o email para entrar.");
});

els.tableForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.table = els.tableInput.value;
  els.tableBadge.textContent = state.table;
  els.tableScreen.classList.add("hidden");
  els.orderScreen.classList.remove("hidden");
  els.mobileActionBar.classList.remove("hidden");
  showToast(`Mesa selecionada: ${state.table}.`);
});

els.showLoginBtn.addEventListener("click", () => {
  els.loginForm.classList.remove("hidden");
  els.registerForm.classList.add("hidden");
  els.showLoginBtn.classList.add("active");
  els.showRegisterBtn.classList.remove("active");
});

els.showRegisterBtn.addEventListener("click", () => {
  els.registerForm.classList.remove("hidden");
  els.loginForm.classList.add("hidden");
  els.showRegisterBtn.classList.add("active");
  els.showLoginBtn.classList.remove("active");
});

els.simulateEmailValidationBtn.addEventListener("click", () => {
  const email = state.pendingValidationEmail;
  const users = getUsers();
  if (!email || !users[email]) return;

  users[email].emailValidated = true;
  delete users[email].validationToken;
  saveUsers(users);

  els.emailValidationModal.classList.add("hidden");
  els.registerForm.reset();
  els.loginInput.value = email;
  els.passwordInput.value = "";
  els.loginForm.classList.remove("hidden");
  els.registerForm.classList.add("hidden");
  els.showLoginBtn.classList.add("active");
  els.showRegisterBtn.classList.remove("active");
  showToast("Email validado. Agora faça login.");
});

els.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.activeCategory = tab.dataset.category;
    els.tabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderProducts();
  });
});

document.addEventListener("click", (event) => {
  const addId = event.target.dataset.add;
  const incId = event.target.dataset.inc;
  const decId = event.target.dataset.dec;
  const removeId = event.target.dataset.remove;
  const reorderId = event.target.dataset.reorder;

  if (addId) addToCart(addId);
  if (incId) changeQty(incId, 1);
  if (decId) changeQty(decId, -1);
  if (removeId) removeFromCart(removeId);
  if (reorderId !== undefined) {
    const previousOrder = getUserOrders()[Number(reorderId)];
    if (!previousOrder) return;
    state.cart = previousOrder.items.map((item) => ({ ...item }));
    renderCart();
    showToast("Pedido anterior adicionado ao carrinho.");
    els.mobileCart.classList.remove("hidden");
  }

  if (event.target.dataset.payMethod) {
    state.paymentMethod = event.target.dataset.payMethod;
    renderProducts();
  }

  if (event.target.dataset.toggleContributor !== undefined) {
    document.querySelector("#contributorDetails")?.classList.toggle("hidden", !event.target.checked);
  }

  if (event.target.dataset.confirmAccountPayment !== undefined) {
    const totals = getTotals();
    const previousTotal = state.sentOrders.reduce((sum, order) => sum + order.total, 0);
    if (!previousTotal && !totals.subtotal) {
      showToast("A conta ainda não possui itens.");
      return;
    }
    const wantsContributor = document.querySelector("#needContributor")?.checked;
    showToast(`Pagamento por ${state.paymentMethod} solicitado${wantsContributor ? " com contribuinte" : ""}.`);
  }
});

els.sendOrderBtn.addEventListener("click", sendOrder);
els.mobileSendOrderBtn.addEventListener("click", () => {
  sendOrder();
  els.mobileCart.classList.add("hidden");
});
els.mobileQuickSendBtn.addEventListener("click", () => {
  if (!state.cart.length) {
    showToast("Adicione produtos antes de enviar a comanda.");
    return;
  }
  els.mobileCart.classList.remove("hidden");
});
els.mobileOpenCartBtn.addEventListener("click", () => els.mobileCart.classList.remove("hidden"));
els.orderNotes.addEventListener("input", () => {
  els.mobileOrderNotes.value = els.orderNotes.value;
});
els.mobileOrderNotes.addEventListener("input", () => {
  els.orderNotes.value = els.mobileOrderNotes.value;
});
els.closeBillBtn?.addEventListener("click", openPayment);
els.mobileCloseBillBtn?.addEventListener("click", openPayment);
els.callWaiterBtn.addEventListener("click", () => showToast(`Atendente chamado para ${state.table}.`));
els.openCartBtn.addEventListener("click", () => els.mobileCart.classList.remove("hidden"));
els.closeCartBtn.addEventListener("click", () => els.mobileCart.classList.add("hidden"));
els.closePaymentBtn?.addEventListener("click", () => els.paymentModal.classList.add("hidden"));

els.paymentMethods.forEach((button) => {
  button.addEventListener("click", () => {
    state.paymentMethod = button.dataset.method;
    els.paymentMethods.forEach((item) => item.classList.toggle("active", item === button));
  });
});

els.confirmPaymentBtn?.addEventListener("click", () => {
  els.paymentModal?.classList.add("hidden");
  showToast(`Pagamento por ${state.paymentMethod} solicitado para ${state.table}.`);
});

els.paymentMethods[0]?.classList.add("active");
renderProducts();
renderCart();
renderHistory();
