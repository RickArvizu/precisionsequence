// Precision Sequence - Main Script

const PRODUCTS = [
  { id: 'retatrutide-10', name: 'Retatrutide', size: '10 mg', price: 67, purity: '≥99%', category: 'Metabolic', description: 'Triple agonist (GLP-1 / GIP / glucagon) for metabolic research.', img: 'reta 10mg vial.jpg' },
  { id: 'retatrutide-30', name: 'Retatrutide', size: '30 mg', price: 117, purity: '≥99%', category: 'Metabolic', description: 'Triple agonist (GLP-1 / GIP / glucagon) for metabolic research.', img: 'reta 30mg vial.jpg' },
  { id: 'nad-1000', name: 'NAD+', size: '1000 mg', price: 83, purity: '≥99%', category: 'Cellular', description: 'Nicotinamide adenine dinucleotide for cellular research.', img: 'vial-nad.jpg' },
  { id: 'klow-80', name: 'KLOW', size: '80 mg', price: 160, purity: '≥99%', category: 'Tissue & Repair', description: 'Multi-peptide research blend for tissue remodeling and recovery studies.', img: 'KLOW vial.jpg' },
  { id: 'cjc-ipa', name: 'CJC-1295 (no DAC) + IPA', size: 'Blend', price: 85, purity: '≥99%', category: 'GH Research', description: 'GHRH analog + selective GH secretagogue combination for research.', img: 'vial-cjc.jpg' },
  { id: 'ghk-cu-100', name: 'GHK-Cu', size: '100 mg', price: 26, purity: '≥99%', category: 'Copper Peptides', description: 'Copper peptide for research into skin and tissue pathways.', img: 'vial-ghk.jpg' },
  { id: 'mots-c-40', name: 'MOTS-c', size: '40 mg', price: 50, purity: '≥99%', category: 'Metabolic', description: 'Mitochondrial-derived peptide for metabolic research.', img: 'vial-mots.jpg' },
  { id: '5-amino-1mq', name: '5-Amino-1MQ', size: 'Standard', price: 37, purity: '≥99%', category: 'Metabolic', description: 'Small molecule for NNMT and metabolic pathway research.', img: '5 Amino .jpg' },
  { id: 'tesamorelin', name: 'Tesamorelin', size: 'Standard', price: 120, purity: '≥99%', category: 'GH Research', description: 'GHRH analog for research into growth hormone pathways.', img: 'vial-tesa.jpg' },
  { id: 'dsip', name: 'DSIP', size: 'Standard', price: 63, purity: '≥99%', category: 'Neurological', description: 'Delta sleep-inducing peptide for research.', img: 'vial-dsip.jpg' },
  { id: 'wolverine-20', name: 'Wolverine', size: '20 mg', price: 79, purity: '≥99%', category: 'Tissue & Repair', description: 'BPC-157 + TB-500 research blend for tissue repair studies.', img: 'vial-bpc.jpg' },
  { id: 'epithalon', name: 'Epithalon', size: 'Standard', price: 39, purity: '≥99%', category: 'Anti-Aging', description: 'Synthetic peptide for longevity research.', img: 'vial-epithalon.jpg' },
  { id: 'ipamorelin', name: 'Ipamorelin', size: 'Standard', price: 55, purity: '≥99%', category: 'GH Research', description: 'Selective growth hormone secretagogue for research applications.', img: 'vial-ipa.jpg' },
  { id: 'glutathione', name: 'Glutathione', size: 'Standard', price: 40, purity: '≥99%', category: 'Cellular', description: 'Endogenous antioxidant for cellular research.', img: 'Glutathione vial.jpg' },
  { id: 'selank', name: 'Selank', size: 'Standard', price: 55, purity: '≥99%', category: 'Neurological', description: 'Synthetic peptide for neurological research.', img: 'Selank vial.jpg' },
  { id: 'semax', name: 'Semax', size: 'Standard', price: 55, purity: '≥99%', category: 'Neurological', description: 'Synthetic peptide analog for neurological research.', img: 'vial-semax.jpg' },
  { id: 'kisspeptin-10', name: 'Kisspeptin', size: '10 mg', price: 73, purity: '≥99%', category: 'Specialty', description: 'Neuropeptide for reproductive axis research.', img: 'KISS vial.jpg' },
  { id: 'bac-water', name: 'BAC Water', size: '3 ml', price: 9, purity: 'Research Grade', category: 'Accessories', description: 'Bacteriostatic water for peptide reconstitution research.', img: 'BAC 3ml vial.jpg' }
];

let cart = JSON.parse(localStorage.getItem('ps_cart') || '[]');

function enterSite() {
  document.getElementById('ageGate').style.display = 'none';
  localStorage.setItem('ps_age_verified', 'true');
}

function checkAge() {
  if (localStorage.getItem('ps_age_verified') === 'true') {
    document.getElementById('ageGate').style.display = 'none';
  }
}

function renderProducts(containerId = 'productGrid', limit = 8) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const productsToShow = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;
  container.innerHTML = productsToShow.map(p => `
    <a href="product.html?id=${p.id}" class="product-card bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:border-forest transition">
      <div class="bg-white flex items-center justify-center p-4 h-56">
        <img src="${p.img}" alt="${p.name}" class="h-full object-contain" onerror="this.src='vial-nad.jpg'">
      </div>
      <div class="p-4 flex flex-col flex-1 bg-white border-t border-gray-100">
        <span class="text-[10px] font-semibold uppercase tracking-wide text-forest mb-1">${p.category}</span>
        <h3 class="font-semibold text-base mb-1 text-gray-900">${p.name}</h3>
        <p class="text-xs text-gray-500 mb-2">${p.size} • ${p.purity}</p>
        <p class="text-xs text-gray-500 mb-3 flex-1 line-clamp-2">${p.description}</p>
        <div class="flex items-center justify-between mt-auto">
          <span class="text-lg font-bold text-gray-900">$${p.price.toFixed(2)}</span>
          <span class="bg-forest text-white text-xs font-semibold px-3 py-2 rounded-lg">View</span>
        </div>
      </div>
    </a>
  `).join('');
}

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById('productDetail');
  if (!container || !product) {
    if (container) container.innerHTML = '<p class="text-center py-12">Product not found. <a href="shop.html" class="text-forest">Back to shop</a></p>';
    return;
  }
  document.title = `${product.name} - ${product.size} | Research Peptide | Precision Sequence`;
  container.innerHTML = `
    <div class="max-w-5xl mx-auto py-10 px-4">
      <div class="grid md:grid-cols-2 gap-10 mb-12">
        <div class="bg-white border border-gray-200 rounded-xl flex items-center justify-center p-8">
          <img src="${product.img}" alt="${product.name}" class="max-h-80 object-contain" onerror="this.src='vial-nad.jpg'">
        </div>
        <div>
          <p class="text-forest text-sm font-semibold uppercase tracking-wide mb-2">${product.category}</p>
          <h1 class="text-3xl font-bold mb-2">${product.name}</h1>
          <p class="text-gray-500 mb-4">${product.size} • ${product.purity} Purity</p>
          <p class="text-gray-600 mb-6">${product.description}</p>
          <p class="text-sm text-gray-500 mb-6"><strong>FOR RESEARCH PURPOSE ONLY.</strong> Not for human or animal consumption. Not FDA-approved.</p>
          <div class="flex items-center gap-4 mb-6">
            <span class="text-3xl font-bold">$${product.price.toFixed(2)}</span>
          </div>
          <button onclick="addToCart('${product.id}')" class="bg-forest hover:bg-forest-dark text-white font-semibold px-8 py-3 rounded-lg">Add to Cart</button>
          <a href="shop.html" class="block mt-4 text-forest text-sm">← Back to Shop</a>
        </div>
      </div>
    </div>
  `;
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) { existing.qty += 1; } else { cart.push({ ...product, qty: 1 }); }
  localStorage.setItem('ps_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  if (countEl) countEl.textContent = totalQty;
  const itemsEl = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if (itemsEl) {
    if (cart.length === 0) {
      itemsEl.innerHTML = '<p class="text-gray-500 text-sm text-center py-8">Your cart is empty</p>';
    } else {
      itemsEl.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between py-3 border-b border-gray-100">
          <div><p class="font-medium text-sm text-gray-900">${item.name}</p><p class="text-xs text-gray-500">${item.size} × ${item.qty}</p></div>
          <div class="text-right"><p class="font-medium text-gray-900">$${(item.price * item.qty).toFixed(2)}</p><button onclick="removeFromCart('${item.id}')" class="text-xs text-red-600">Remove</button></div>
        </div>
      `).join('');
    }
  }
  if (totalEl) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalEl.textContent = `$${total.toFixed(2)}`;
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('ps_cart', JSON.stringify(cart));
  updateCartUI();
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (!sidebar) return;
  const isOpen = !sidebar.classList.contains('translate-x-full');
  if (isOpen) { sidebar.classList.add('translate-x-full'); overlay.classList.add('hidden'); }
  else { sidebar.classList.remove('translate-x-full'); overlay.classList.remove('hidden'); updateCartUI(); }
}

document.addEventListener('DOMContentLoaded', () => {
  checkAge();
  renderProducts();
  updateCartUI();
  if (document.getElementById('allProducts')) renderProducts('allProducts', 0);
  if (document.getElementById('productDetail')) renderProductPage();
});
