// Precision Sequence - Main Script

const PRODUCTS = [
  { id: 'bpc157-5', name: 'BPC-157', size: '5mg', price: 52.00, purity: '≥99%', category: 'Tissue & Repair', description: 'Research peptide for studies involving tissue signaling and cellular repair pathways.', img: 'vial-bpc.jpg' },
  { id: 'bpc157-10', name: 'BPC-157', size: '10mg', price: 92.00, purity: '≥99%', category: 'Tissue & Repair', description: 'Research peptide for studies involving tissue signaling and cellular repair pathways.', img: 'vial-bpc.jpg' },
  { id: 'tb500-10', name: 'TB-500', size: '10mg', price: 124.00, purity: '≥99%', category: 'Tissue & Repair', description: 'Thymosin Beta-4 fragment studied in research models of cellular migration and repair.', img: 'vial-tb.jpg' },
  { id: 'sermorelin-5', name: 'Sermorelin', size: '5mg', price: 43.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone-releasing hormone analog for endocrine research.', img: 'vial-serm.jpg' },
  { id: 'sermorelin-10', name: 'Sermorelin', size: '10mg', price: 78.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone-releasing hormone analog for endocrine research.', img: 'vial-serm.jpg' },
  { id: 'ipamorelin-5', name: 'Ipamorelin', size: '5mg', price: 46.00, purity: '≥99%', category: 'GH Research', description: 'Selective growth hormone secretagogue for research applications.', img: 'vial-ipa.jpg' },
  { id: 'tesamorelin-5', name: 'Tesamorelin', size: '5mg', price: 73.00, purity: '≥99%', category: 'GH Research', description: 'GHRH analog for research into growth hormone pathways.', img: 'vial-tesa.jpg' },
  { id: 'tesamorelin-10', name: 'Tesamorelin', size: '10mg', price: 92.00, purity: '≥99%', category: 'GH Research', description: 'GHRH analog for research into growth hormone pathways.', img: 'vial-tesa.jpg' },
  { id: 'ghk-cu', name: 'GHK-Cu', size: '50mg', price: 68.00, purity: '≥99%', category: 'Copper Peptides', description: 'Copper peptide for research into skin and tissue pathways.', img: 'vial-ghk.jpg' },
  { id: 'aod9604', name: 'AOD 9604', size: '5mg', price: 55.00, purity: '≥99%', category: 'Metabolic', description: 'Growth hormone fragment for metabolic research.', img: 'vial-aod.jpg' },
  { id: 'mots-c', name: 'MOTS-c', size: '10mg', price: 85.00, purity: '≥99%', category: 'Metabolic', description: 'Mitochondrial-derived peptide for metabolic research.', img: 'vial-mots.jpg' },
  { id: 'semax', name: 'Semax', size: '25mg', price: 62.00, purity: '≥99%', category: 'Neurological', description: 'Synthetic peptide analog for neurological research.', img: 'vial-semax.jpg' },
  { id: 'pt141', name: 'PT-141', size: '10mg', price: 58.00, purity: '≥99%', category: 'Specialty', description: 'Melanocortin receptor agonist for research applications.', img: 'vial-pt.jpg' },
  { id: 'cjc1295', name: 'CJC-1295', size: '5mg', price: 48.00, purity: '≥99%', category: 'GH Research', description: 'GHRH analog for growth hormone research.', img: 'vial-cjc.jpg' },
  { id: 'ghrp2', name: 'GHRP-2', size: '5mg', price: 44.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone releasing peptide for research.', img: 'vial-ghrp2.jpg' },
  { id: 'ghrp6', name: 'GHRP-6', size: '5mg', price: 42.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone releasing peptide for research.', img: 'vial-ghrp6.jpg' },
  { id: 'selank', name: 'Selank', size: '10mg', price: 56.00, purity: '≥99%', category: 'Neurological', description: 'Synthetic peptide for neurological research.', img: 'vial-selank.jpg' },
  { id: 'epithalon', name: 'Epithalon', size: '25mg', price: 72.00, purity: '≥99%', category: 'Anti-Aging', description: 'Synthetic peptide for longevity research.', img: 'vial-epithalon.jpg' },
  { id: 'nad', name: 'NAD+', size: '100mg', price: 95.00, purity: '≥99%', category: 'Cellular', description: 'Nicotinamide adenine dinucleotide for cellular research.', img: 'vial-nad.jpg' },
  { id: 'll37', name: 'LL-37', size: '5mg', price: 88.00, purity: '≥99%', category: 'Specialty', description: 'Antimicrobial peptide for research applications.', img: 'vial-ll37.jpg' },
  { id: 'hexarelin', name: 'Hexarelin', size: '5mg', price: 49.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone releasing peptide for research.', img: 'vial-hexarelin.jpg' },
  { id: 'dsip', name: 'DSIP', size: '5mg', price: 54.00, purity: '≥99%', category: 'Neurological', description: 'Delta sleep-inducing peptide for research.', img: 'vial-dsip.jpg' },
  { id: 'melanotan1', name: 'Melanotan 1', size: '10mg', price: 61.00, purity: '≥99%', category: 'Specialty', description: 'Melanocortin peptide for research applications.', img: 'vial-melanotan.jpg' },
  { id: 'frag176', name: 'Fragment 176-191', size: '5mg', price: 51.00, purity: '≥99%', category: 'Metabolic', description: 'Growth hormone fragment for metabolic research.', img: 'vial-frag.jpg' },
  { id: 'igf1lr3', name: 'IGF-1 LR3', size: '1mg', price: 125.00, purity: '≥99%', category: 'Growth Factors', description: 'Long-acting IGF-1 analog for research.', img: 'vial-igf.jpg' }
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
        <img src="${p.img}" alt="${p.name}" class="h-full object-contain" onerror="this.src='precisionsequence logo.jpg'">
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
          <img src="${product.img}" alt="${product.name}" class="max-h-80 object-contain" onerror="this.src='precisionsequence logo.jpg'">
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

      <div class="border-t border-gray-200 pt-8">
        <div class="flex border-b border-gray-200 mb-6">
          <button onclick="showTab('desc')" id="tab-desc" class="px-4 py-2 text-sm font-semibold border-b-2 border-forest text-forest">Description</button>
          <button onclick="showTab('coa')" id="tab-coa" class="px-4 py-2 text-sm font-semibold text-gray-500 hover:text-forest">Certificate of Analysis</button>
          <button onclick="showTab('storage')" id="tab-storage" class="px-4 py-2 text-sm font-semibold text-gray-500 hover:text-forest">Storage Instructions</button>
        </div>

        <div id="panel-desc" class="text-sm text-gray-600 space-y-4">
          <h2 class="text-lg font-semibold text-gray-900">Description</h2>
          <p>A single-component research material supplied for controlled research environments. Suitable for studies involving ${product.category.toLowerCase()} pathway characterization and method development in model systems.</p>
          <h3 class="font-semibold text-gray-900">Composition</h3>
          <ul class="list-disc list-inside">
            <li>${product.name}</li>
            <li>Appearance: Lyophilized powder in a sealed research vial</li>
          </ul>
          <h3 class="font-semibold text-gray-900">Research Focus (non-clinical)</h3>
          <ul class="list-disc list-inside">
            <li>Peptide identity and purity assessment via HPLC/LC-MS</li>
            <li>Assay development and calibration for quantitative analysis</li>
            <li>Chromatographic method optimization for impurity profiling</li>
            <li>Stability characterization under laboratory storage conditions</li>
          </ul>
          <p>For qualified research professionals and institutional laboratories. Not for human use.</p>
          <h3 class="font-semibold text-gray-900">Important Notice</h3>
          <p>This product is intended for laboratory research use only. It is not intended for human or veterinary use, and must not be used for diagnostic, therapeutic, or clinical purposes. This material is not a drug, medical device, or dietary supplement, and has not been evaluated by the U.S. Food and Drug Administration.</p>
        </div>

        <div id="panel-coa" class="hidden text-sm text-gray-600 space-y-4">
          <h2 class="text-lg font-semibold text-gray-900">Certificate of Analysis</h2>
          <p>Every batch undergoes independent third-party laboratory analysis to verify identity, potency, and purity. Testing includes quantitative assay verification and comprehensive analysis.</p>
          <ul class="list-disc list-inside">
            <li>Third-Party Lab Verified</li>
            <li>Quantitative Assay</li>
            <li>HPLC Analysis</li>
            <li>Mass Spectrometry</li>
          </ul>
          <p class="text-xs text-gray-500">Testing performed per USP compendial standards by independent analytical laboratory. Certificates of Analysis are available upon request for each batch.</p>
          <p><strong>Purity:</strong> Verified ≥99%, confirmed by independent third-party testing.</p>
        </div>

        <div id="panel-storage" class="hidden text-sm text-gray-600 space-y-4">
          <h2 class="text-lg font-semibold text-gray-900">Storage Instructions</h2>
          <p>All products from Precision Sequence are manufactured using a lyophilization (freeze-drying) process. This method maintains product integrity and allows vials to remain stable during shipping for approximately 3–4 months.</p>
          <h3 class="font-semibold text-gray-900">Lyophilized Peptides</h3>
          <ul class="list-disc list-inside">
            <li>Store at -20°C for long-term storage (up to 24 months)</li>
            <li>Store at 2–8°C (refrigerated) for short-term storage (up to 3 months)</li>
            <li>Keep away from light, moisture, and repeated temperature fluctuations</li>
          </ul>
          <h3 class="font-semibold text-gray-900">After Reconstitution</h3>
          <p>Once a vial is reconstituted with bacteriostatic water, it should be stored in the refrigerator. Under these conditions, reconstituted material is generally considered stable for up to 30 days.</p>
          <p class="text-xs text-gray-500"><strong>Important Notice:</strong> These products are intended for research use only. Not for human consumption.</p>
        </div>
      </div>
    </div>
  `;
}

function showTab(tab) {
  ['desc', 'coa', 'storage'].forEach(t => {
    document.getElementById('panel-' + t).classList.toggle('hidden', t !== tab);
    const btn = document.getElementById('tab-' + t);
    if (t === tab) {
      btn.classList.add('border-b-2', 'border-forest', 'text-forest');
      btn.classList.remove('text-gray-500');
    } else {
      btn.classList.remove('border-b-2', 'border-forest', 'text-forest');
      btn.classList.add('text-gray-500');
    }
  });
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) { existing.qty += 1; } else { cart.push({ ...product, qty: 1 }); }
  localStorage.setItem('ps_cart', JSON.stringify(cart));
  updateCartUI();
  if (event && event.target) {
    const btn = event.target;
    const original = btn.textContent;
    btn.textContent = 'Added';
    setTimeout(() => btn.textContent = original, 1000);
  }
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
