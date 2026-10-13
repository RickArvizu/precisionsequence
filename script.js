// Precision Sequence - Main Script

const PRODUCTS = [
  {
    id: 'bpc157-10',
    name: 'BPC-157',
    size: '10mg',
    price: 54.99,
    purity: '≥99%',
    category: 'Tissue & Repair',
    sequence: 'GEPPPGKPADDAGLV',
    description: 'Research peptide for studies involving tissue signaling and cellular repair pathways.'
  },
  {
    id: 'tb500-10',
    name: 'TB-500',
    size: '10mg',
    price: 59.99,
    purity: '≥99%',
    category: 'Tissue & Repair',
    sequence: 'LKKTETQ',
    description: 'Thymosin Beta-4 fragment studied in research models of cellular migration and repair.'
  },
  {
    id: 'semaglutide-5',
    name: 'Semaglutide',
    size: '5mg',
    price: 89.99,
    purity: '≥99%',
    category: 'Metabolic Research',
    sequence: 'GLP-1 analog',
    description: 'GLP-1 receptor agonist peptide for metabolic and appetite pathway research.'
  },
  {
    id: 'tirzepatide-10',
    name: 'Tirzepatide',
    size: '10mg',
    price: 129.99,
    purity: '≥99%',
    category: 'Metabolic Research',
    sequence: 'GIP/GLP-1 dual agonist',
    description: 'Dual agonist peptide for advanced metabolic pathway investigation.'
  },
  {
    id: 'retatrutide-5',
    name: 'Retatrutide',
    size: '5mg',
    price: 119.99,
    purity: '≥99%',
    category: 'Metabolic Research',
    sequence: 'Triple agonist',
    description: 'Triple receptor agonist for comprehensive metabolic research studies.'
  },
  {
    id: 'ghk-cu-50',
    name: 'GHK-Cu',
    size: '50mg',
    price: 49.99,
    purity: '≥99%',
    category: 'Copper Peptides',
    sequence: 'GHK',
    description: 'Copper-binding tripeptide studied for extracellular matrix and skin research.'
  },
  {
    id: 'mots-c-10',
    name: 'MOTS-c',
    size: '10mg',
    price: 64.99,
    purity: '≥99%',
    category: 'Mitochondrial',
    sequence: 'MRWQEMGYIFYPRKLR',
    description: 'Mitochondrial-derived peptide for metabolic and longevity pathway research.'
  },
  {
    id: 'tesamorelin-2',
    name: 'Tesamorelin',
    size: '2mg',
    price: 74.99,
    purity: '≥99%',
    category: 'GH Research',
    sequence: 'GHRH analog',
    description: 'Growth hormone-releasing hormone analog for endocrine research.'
  },
  {
    id: 'ipamorelin-5',
    name: 'Ipamorelin',
    size: '5mg',
    price: 44.99,
    purity: '≥99%',
    category: 'GH Research',
    sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
    description: 'Selective growth hormone secretagogue for research applications.'
  },
  {
    id: 'wolverine-20',
    name: 'Wolverine Blend',
    size: '20mg',
    price: 99.99,
    purity: '≥99%',
    category: 'Blends',
    sequence: 'BPC-157 + TB-500',
    description: 'Research blend of BPC-157 and TB-500 for combined tissue pathway studies.'
  },
  {
    id: 'nad-1000',
    name: 'NAD+',
    size: '1000mg',
    price: 89.99,
    purity: '≥99%',
    category: 'Cellular Research',
    sequence: 'Coenzyme',
    description: 'Nicotinamide adenine dinucleotide for cellular energy and redox research.'
  },
  {
    id: 'cjc1295-5',
    name: 'CJC-1295 (no DAC)',
    size: '5mg',
    price: 49.99,
    purity: '≥99%',
    category: 'GH Research',
    sequence: 'GHRH fragment',
    description: 'Modified GHRH fragment for pulsatile growth hormone research.'
  }
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
    <div class="product-card bg-white border border-gray-200 rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-md">
      <div class="flex items-start justify-between mb-3">
        <span class="badge bg-forest/10 text-forest px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide">${p.category}</span>
        <span class="text-xs text-gray-400 font-mono">${p.purity}</span>
      </div>
      <h3 class="font-semibold text-lg mb-1 text-gray-900">${p.name}</h3>
      <p class="text-xs text-gray-500 mb-3">${p.size} • Research Grade</p>
      <p class="text-xs text-gray-500 mb-4 flex-1 line-clamp-2">${p.description}</p>
      <div class="flex items-center justify-between mt-auto">
        <span class="text-xl font-bold text-gray-900">$${p.price.toFixed(2)}</span>
        <button onclick="addToCart('${p.id}')" class="bg-forest hover:bg-forest-dark text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  
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
          <div>
            <p class="font-medium text-sm text-gray-900">${item.name}</p>
            <p class="text-xs text-gray-500">${item.size} × ${item.qty}</p>
          </div>
          <div class="text-right">
            <p class="font-medium text-gray-900">$${(item.price * item.qty).toFixed(2)}</p>
            <button onclick="removeFromCart('${item.id}')" class="text-xs text-red-600 hover:text-red-700">Remove</button>
          </div>
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
  if (isOpen) {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  } else {
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    updateCartUI();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  checkAge();
  renderProducts();
  updateCartUI();
  
  if (document.getElementById('allProducts')) {
    renderProducts('allProducts', 0);
  }
});
