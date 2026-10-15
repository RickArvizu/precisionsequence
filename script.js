// Precision Sequence - Main Script

const LOGO_IMG = 'precisionsequence logo.jpg';

const PRODUCTS = [
  { id: 'bpc157-5', name: 'BPC-157', size: '5mg', price: 52.00, purity: '≥99%', category: 'Tissue & Repair', description: 'Research peptide for studies involving tissue signaling and cellular repair pathways.' },
  { id: 'bpc157-10', name: 'BPC-157', size: '10mg', price: 92.00, purity: '≥99%', category: 'Tissue & Repair', description: 'Research peptide for studies involving tissue signaling and cellular repair pathways.' },
  { id: 'tb500-10', name: 'TB-500 (Thymosin Beta-4)', size: '10mg', price: 124.00, purity: '≥99%', category: 'Tissue & Repair', description: 'Thymosin Beta-4 fragment studied in research models of cellular migration and repair.' },
  { id: 'bpc-tb-blend', name: 'BPC-157 & TB-500 Blend', size: '10mg', price: 115.00, purity: '≥99%', category: 'Blends', description: 'Research blend of BPC-157 and TB-500 for combined tissue pathway studies.' },
  { id: 'bpc-tb-ghk', name: 'BPC-157 & TB-500 & GHK-Cu Blend', size: '70mg', price: 205.00, purity: '≥99%', category: 'Blends', description: 'Triple research blend for tissue and extracellular matrix studies.' },
  { id: 'ipamorelin-5', name: 'Ipamorelin', size: '5mg', price: 46.00, purity: '≥99%', category: 'GH Research', description: 'Selective growth hormone secretagogue for research applications.' },
  { id: 'sermorelin-5', name: 'Sermorelin', size: '5mg', price: 43.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone-releasing hormone analog for endocrine research.' },
  { id: 'tesamorelin-5', name: 'Tesamorelin', size: '5mg', price: 73.00, purity: '≥99%', category: 'GH Research', description: 'GHRH analog for research into growth hormone pathways.' },
  { id: 'tesamorelin-10', name: 'Tesamorelin', size: '10mg', price: 92.00, purity: '≥99%', category: 'GH Research', description: 'GHRH analog for research into growth hormone pathways.' },
  { id: 'cjc-nodac-5', name: 'Mod GRF 1-29 (CJC-1295 no DAC)', size: '5mg', price: 46.00, purity: '≥99%', category: 'GH Research', description: 'Modified GHRH fragment for pulsatile growth hormone research.' },
  { id: 'cjc-dac-5', name: 'CJC-1295 DAC', size: '5mg', price: 52.00, purity: '≥99%', category: 'GH Research', description: 'Long-acting GHRH analog for research applications.' },
  { id: 'ghrp2-5', name: 'GHRP-2', size: '5mg', price: 20.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone releasing peptide for research studies.' },
  { id: 'ghrp2-10', name: 'GHRP-2', size: '10mg', price: 39.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone releasing peptide for research studies.' },
  { id: 'ghrp6-5', name: 'GHRP-6', size: '5mg', price: 21.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone releasing peptide for research studies.' },
  { id: 'ghrp6-10', name: 'GHRP-6', size: '10mg', price: 39.00, purity: '≥99%', category: 'GH Research', description: 'Growth hormone releasing peptide for research studies.' },
  { id: 'hexarelin-5', name: 'Hexarelin', size: '5mg', price: 49.00, purity: '≥99%', category: 'GH Research', description: 'Potent growth hormone secretagogue for research.' },
  { id: 'cjc-ipa', name: 'CJC-1295 & Ipamorelin Blend', size: '10mg', price: 81.00, purity: '≥99%', category: 'Blends', description: 'Research blend of CJC-1295 and Ipamorelin.' },
  { id: 'cjc-ghrp6', name: 'CJC-1295 & GHRP-6 Blend', size: '10mg', price: 86.00, purity: '≥99%', category: 'Blends', description: 'Research blend of CJC-1295 and GHRP-6.' },
  { id: 'cjc-ghrp2', name: 'CJC-1295 & GHRP-2 Blend', size: '10mg', price: 84.00, purity: '≥99%', category: 'Blends', description: 'Research blend of CJC-1295 and GHRP-2.' },
  { id: 'modgrf-ipa', name: 'Mod GRF 1-29 & Ipamorelin Blend', size: '10mg', price: 81.00, purity: '≥99%', category: 'Blends', description: 'Research blend of Mod GRF 1-29 and Ipamorelin.' },
  { id: 'serm-ipa', name: 'Sermorelin & Ipamorelin Blend', size: '10mg', price: 81.00, purity: '≥99%', category: 'Blends', description: 'Research blend of Sermorelin and Ipamorelin.' },
  { id: 'frag-cjc-ipa', name: 'Fragment 176-191 & CJC-1295 & Ipamorelin Blend', size: '12mg', price: 87.00, purity: '≥99%', category: 'Blends', description: 'Triple research blend for metabolic and GH pathway studies.' },
  { id: 'frag-mod-ipa', name: 'Fragment 176-191 & Mod GRF 1-29 & Ipamorelin Blend', size: '12mg', price: 87.00, purity: '≥99%', category: 'Blends', description: 'Triple research blend for metabolic and GH pathway studies.' },
  { id: 'aod9604-5', name: 'AOD 9604', size: '5mg', price: 44.00, purity: '≥99%', category: 'Metabolic Research', description: 'Fragment of human growth hormone studied in metabolic research.' },
  { id: 'frag176-5', name: 'Fragment 176-191', size: '5mg', price: 44.00, purity: '≥99%', category: 'Metabolic Research', description: 'HGH fragment for metabolic pathway research.' },
  { id: 'adipotide-10', name: 'Adipotide FTPP', size: '10mg', price: 77.00, purity: '≥99%', category: 'Metabolic Research', description: 'Peptide for research into adipose tissue pathways.' },
  { id: 'mots-c-10', name: 'MOTS-c', size: '10mg', price: 99.00, purity: '≥99%', category: 'Mitochondrial', description: 'Mitochondrial-derived peptide for metabolic and longevity pathway research.' },
  { id: 'ghk-cu-50', name: 'GHK-Cu (Copper)', size: '50mg', price: 64.00, purity: '≥99%', category: 'Copper Peptides', description: 'Copper-binding tripeptide studied for extracellular matrix and skin research.' },
  { id: 'ghk-basic-50', name: 'GHK Basic', size: '50mg', price: 51.00, purity: '≥99%', category: 'Copper Peptides', description: 'GHK peptide for research applications.' },
  { id: 'ghk-basic-200', name: 'GHK Basic (Tripeptide-1)', size: '200mg', price: 165.00, purity: '≥99%', category: 'Copper Peptides', description: 'GHK peptide for research applications.' },
  { id: 'ahk-cu-200', name: 'AHK-Cu', size: '200mg', price: 192.00, purity: '≥99%', category: 'Copper Peptides', description: 'Copper peptide for research studies.' },
  { id: 'semax-25', name: 'Semax', size: '25mg', price: 53.00, purity: '≥99%', category: 'Neurological', description: 'Peptide for research into neurological pathways.' },
  { id: 'selank-10', name: 'Selank', size: '10mg', price: 46.00, purity: '≥99%', category: 'Neurological', description: 'Peptide for research into neurological pathways.' },
  { id: 'dsip-5', name: 'DSIP', size: '5mg', price: 44.00, purity: '≥99%', category: 'Neurological', description: 'Delta sleep-inducing peptide for research studies.' },
  { id: 'pt141-10', name: 'PT-141 (Bremelanotide)', size: '10mg', price: 45.00, purity: '≥99%', category: 'Research Peptides', description: 'Melanocortin receptor agonist for research applications.' },
  { id: 'melanotan1-10', name: 'Melanotan 1', size: '10mg', price: 38.00, purity: '≥99%', category: 'Research Peptides', description: 'Alpha-MSH analog for research studies.' },
  { id: 'epithalon-25', name: 'Epithalon', size: '25mg', price: 94.00, purity: '≥99%', category: 'Research Peptides', description: 'Telomerase-related peptide for research applications.' },
  { id: 'll37-5', name: 'LL-37', size: '5mg', price: 86.00, purity: '≥99%', category: 'Research Peptides', description: 'Cathelicidin peptide for research studies.' },
  { id: 'mgf-5', name: 'MGF (Mechano-Growth Factor)', size: '5mg', price: 59.00, purity: '≥99%', category: 'Research Peptides', description: 'Mechano-growth factor for research applications.' },
  { id: 'peg-mgf-5', name: 'PEG-MGF', size: '5mg', price: 79.00, purity: '≥99%', category: 'Research Peptides', description: 'Pegylated MGF for research studies.' },
  { id: 'igf1-lr3-1', name: 'Receptor Grade IGF-1 LR3', size: '1mg', price: 145.00, purity: '≥99%', category: 'Research Peptides', description: 'Long R3 IGF-1 for research applications.' },
  { id: 'nad-100', name: 'NAD+', size: '100mg', price: 46.00, purity: '≥99%', category: 'Cellular Research', description: 'Nicotinamide adenine dinucleotide for cellular energy research.' },
  { id: 'nad-500', name: 'NAD+', size: '500mg', price: 179.00, purity: '≥99%', category: 'Cellular Research', description: 'Nicotinamide adenine dinucleotide for cellular energy research.' },
  { id: 'aicar-50', name: 'AICAR', size: '50mg', price: 56.00, purity: '≥99%', category: 'Metabolic Research', description: 'AMPK activator for metabolic research.' },
  { id: 'foxo4-10', name: 'FOXO4-DRI (Proxofim)', size: '10mg', price: 270.00, purity: '≥99%', category: 'Research Peptides', description: 'Peptide for senescent cell research.' },
  { id: 'follistatin-1', name: 'Follistatin-344', size: '1mg', price: 162.00, purity: '≥99%', category: 'Research Peptides', description: 'Peptide for research into myostatin pathways.' },
  { id: 'ace031-1', name: 'ACE-031', size: '1mg', price: 161.00, purity: '≥99%', category: 'Research Peptides', description: 'Soluble activin receptor for research applications.' },
  { id: 'ara290-16', name: 'ARA-290', size: '16mg', price: 88.00, purity: '≥99%', category: 'Research Peptides', description: 'EPO-derived peptide for research studies.' },
  { id: 'cardiogen-20', name: 'Cardiogen', size: '20mg', price: 62.00, purity: '≥99%', category: 'Research Peptides', description: 'Peptide for cardiovascular research.' },
  { id: 'chonluten-20', name: 'Chonluten (T-34)', size: '20mg', price: 62.00, purity: '≥99%', category: 'Research Peptides', description: 'Peptide for research applications.' },
  { id: 'livagen-20', name: 'Livagen', size: '20mg', price: 62.00, purity: '≥99%', category: 'Research Peptides', description: 'Peptide for research applications.' },
  { id: 'vilon-20', name: 'Vilon', size: '20mg', price: 61.00, purity: '≥99%', category: 'Research Peptides', description: 'Peptide for research applications.' },
  { id: 'oxytocin-10', name: 'Oxytocin', size: '10mg', price: 45.00, purity: '≥99%', category: 'Research Peptides', description: 'Neuropeptide for research studies.' }
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
      <div class="bg-white flex items-center justify-center p-4 h-72">
        <div class="relative w-36 h-56 flex flex-col items-center">
          <div class="w-16 h-6 bg-gray-300 rounded-t-sm"></div>
          <div class="w-20 h-4 bg-gray-200"></div>
          <div class="w-28 h-40 bg-gradient-to-b from-white to-gray-100 border-2 border-gray-300 rounded-b-xl rounded-t-sm flex flex-col items-center justify-center relative">
            <div class="absolute inset-2 bg-white border border-gray-200 rounded flex flex-col items-center justify-center p-1">
              <img src="${LOGO_IMG}" alt="Precision Sequence" class="w-full h-auto object-contain">
              <p class="text-[8px] text-forest font-bold mt-1">Research Grade</p>
              <p class="text-[8px] text-gray-600">${p.size}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 flex flex-col flex-1 border-t border-gray-100">
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
