// Precision Sequence - Main Script

const BOTTLE_IMG = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=500&fit=crop';

const PRODUCTS = [
  { id: 'bpc157-5', name: 'BPC-157', size: '5mg', price: 52.00, purity: '≥99%', category: 'Tissue & Repair', description: 'Research peptide for studies involving tissue signaling and cellular repair pathways.' },
  { id: 'bpc157-10', name: 'BPC-157', size: '10mg', price: 92.00, purity: '≥99%', category: 'Tissue & Repair', description: 'Research peptide for studies involving tissue signaling and cellular repair pathways.' },
  { id: 'tb500-10', name: 'TB-500 (Thymosin Beta-4)', size: '10mg', price: 124.00, purity: '≥99%', category: 'Tissue & Repair', description: 'Thymosin Beta-4 fragment studied in research models of cellular migration and repair.' },
  { id: 'bpc-tb-blend', name: 'BPC-157 & TB-500 Blend', size: '10mg', price: 115.00, purity: '≥99%', category: 'Blends', description: 'Research blend of BPC-157 and TB-500 for combined tissue pathway studies.' },
  { id: 'ipamorelin-5', name: 'Ipamorelin', size: '5mg', price: 46.00, purity: '≥99%', category: 'GH Research', description: 'Selective growth hormone secretagogue for research applications.' },
  { id: 'sermorelin-5', name: 'Sermorelin', size: '5mg', price: 43.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone-releasing hormone analog for endocrine research.' },
  { id: 'tesamorelin-5', name: 'Tesamorelin', size: '5mg', price: 73.00, purity: '≥99%', category: 'GH Research', description: 'GHRH analog for research into growth hormone pathways.' },
  { id: 'tesamorelin-10', name: 'Tesamorelin', size: '10mg', price: 92.00, purity: '≥99%', category: 'GH Research', description: 'GHRH analog for research into growth hormone pathways.' }
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
    <div class="product-card bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md">
      <div class="bg-black flex items-center justify-center p-4 h-64">
        <img src="${BOTTLE_IMG}" alt="${p.name}" class="h-full object-contain">
      </div>
      <div class="p-4 flex flex-col flex-1 bg-white">
        <span class="text-[10px] font-semibold uppercase tracking-wide text-forest mb-1">${p.category}</span>
        <h3 class="font-semibold text-base mb-1 text-gray-900">${p.name}</h3>
        <p class="text-xs text-gray-500 mb-2">${p.size} • ${p.purity}</p>
        <p class="text-xs text-gray-500 mb-3 flex-1 line-clamp-2">${p.description}</p>
        <div class="flex items-center justify-between mt-auto">
          <span class="text-lg font-bold text-gray-900">$${p.price.toFixed(2)}</span>
          <button onclick="addToCart('${p.id}')" class="bg-forest hover:bg-forest-dark text-white text-xs font-semibold px-3 py-2 rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) { existing.qty += 1; } else { cart.push({ ...product, qty: 1 }); }
  localStorage.setItem('ps_cart', JSON.stringify(cart));
  updateCartUI();
  const btn = event.target;
  const original = btn.textContent;
  btn.textContent = 'Added';
  setTimeout(() => btn.textContent = original, 1000);
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
});
