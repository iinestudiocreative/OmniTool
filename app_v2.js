const initialData = {
    stores: [
        { id: 'gyomu', name: 'GYOMU SUPA' },
        { id: 'summit', name: 'SUMMIT STORE' },
        { id: 'odakyu', name: 'ODAKYU OX' },
        { id: 'maruetsu', name: 'MARUETSU' },
        { id: 'matsumoto', name: 'MATSUMOTO DrugStore' },
        { id: 'create', name: 'CREATE DrugStore' },
        { id: 'amazon', name: 'AMAZON' }
    ],
    products: [
        { id: 'p1', name: 'Aubergine', unit: 'pièce' },
        { id: 'p2', name: 'Avocat', unit: 'pièce' },
        { id: 'p3', name: 'Banane', unit: 'pièce' },
        { id: 'p4', name: 'Carottes', unit: 'pièce' },
        { id: 'p5', name: 'Champignons', unit: 'pièce' },
        { id: 'p6', name: 'Eau Gazeuse', unit: '1000ml' },
        { id: 'p7', name: 'Gingembre', unit: 'pièce' },
        { id: 'p8', name: 'Miel', unit: '1000g' },
        { id: 'p9', name: 'Oeuf', unit: '10 pcs' },
        { id: 'p10', name: 'Oil', unit: '1000ml' },
        { id: 'p11', name: 'Olive oil', unit: 'ml' },
        { id: 'p12', name: 'Pain de mie x8', unit: 'paquet' },
        { id: 'p13', name: 'Poivron Jaune', unit: 'pièce' },
        { id: 'p14', name: 'Poivron Rouge', unit: 'pièce' },
        { id: 'p15', name: 'Poulet 100g', unit: '100g' },
        { id: 'p16', name: 'Riz 5kg', unit: '5kg' },
        { id: 'p17', name: 'Salade fresh', unit: 'pièce' },
        { id: 'p18', name: 'Thon', unit: 'conserve' },
        { id: 'p19', name: 'Tomate', unit: 'pièce' },
        { id: 'p20', name: 'Vinaigre sirop', unit: 'ml' },
        { id: 'p21', name: 'Vitamine citron x6', unit: 'pack' },
        { id: 'p22', name: 'Produits vaisselle', unit: '700ml' },
        { id: 'p23', name: 'Produits gazinière', unit: '400ml' },
        { id: 'p24', name: 'Lessive', unit: 'g/ml' },
        { id: 'p25', name: 'Soupline', unit: 'ml' },
        { id: 'p26', name: 'PQ x12', unit: 'pack' },
        { id: 'p27', name: 'Toilette sent bon', unit: 'unité' },
        { id: 'p28', name: 'Eponge x5', unit: 'pack' }
    ],
    prices: [
        // p1 Aubergine
        { productId: 'p1', storeId: 'gyomu', price: 198, qty: 6, unitPrice: 33 },
        { productId: 'p1', storeId: 'summit', price: 198, qty: 4, unitPrice: 49.5 },
        // p2 Avocat
        { productId: 'p2', storeId: 'gyomu', price: 250, qty: 1, unitPrice: 250 },
        { productId: 'p2', storeId: 'summit', price: 178, qty: 1, unitPrice: 178 },
        { productId: 'p2', storeId: 'odakyu', price: 198, qty: 1, unitPrice: 198 },
        // p3 Banane
        { productId: 'p3', storeId: 'gyomu', price: 153, qty: 1, unitPrice: 153 },
        { productId: 'p3', storeId: 'summit', price: 158, qty: 1, unitPrice: 158 },
        { productId: 'p3', storeId: 'odakyu', price: 158, qty: 1, unitPrice: 158 },
        // p4 Carottes
        { productId: 'p4', storeId: 'gyomu', price: 138, qty: 3, unitPrice: 46 },
        { productId: 'p4', storeId: 'summit', price: 258, qty: 3, unitPrice: 86 },
        // p5 Champignons
        { productId: 'p5', storeId: 'gyomu', price: 198, qty: 1, unitPrice: 198 },
        { productId: 'p5', storeId: 'summit', price: 238, qty: 1, unitPrice: 238 },
        { productId: 'p5', storeId: 'odakyu', price: 198, qty: 1, unitPrice: 198 },
        // p6 Eau Gazeuse
        { productId: 'p6', storeId: 'gyomu', price: 73, qty: 1000, unitPrice: 0.07 },
        { productId: 'p6', storeId: 'summit', price: 138, qty: 1, unitPrice: 138 },
        // p7 Gingembre
        { productId: 'p7', storeId: 'gyomu', price: 198, qty: 1, unitPrice: 198 },
        { productId: 'p7', storeId: 'odakyu', price: 158, qty: 1, unitPrice: 158 },
        // p8 Miel
        { productId: 'p8', storeId: 'gyomu', price: 429, qty: 1000, unitPrice: 0.43 },
        { productId: 'p8', storeId: 'amazon', price: 862, qty: 1000, unitPrice: 0.86 },
        // p9 Oeuf
        { productId: 'p9', storeId: 'gyomu', price: 278, qty: 1, unitPrice: 278 },
        { productId: 'p9', storeId: 'summit', price: 288, qty: 1, unitPrice: 288 },
        { productId: 'p9', storeId: 'odakyu', price: 298, qty: 1, unitPrice: 298 },
        { productId: 'p9', storeId: 'matsumoto', price: 267, qty: 1, unitPrice: 267 },
        { productId: 'p9', storeId: 'create', price: 246, qty: 1, unitPrice: 246 },
        // p10 Oil
        { productId: 'p10', storeId: 'gyomu', price: 321, qty: 1000, unitPrice: 0.32 },
        { productId: 'p10', storeId: 'summit', price: 473, qty: 1000, unitPrice: 0.47 },
        { productId: 'p10', storeId: 'amazon', price: 591, qty: 1000, unitPrice: 0.59 },
        // p11 Olive oil
        { productId: 'p11', storeId: 'gyomu', price: 754, qty: 916, unitPrice: 0.82 },
        { productId: 'p11', storeId: 'summit', price: 483, qty: 350, unitPrice: 1.38 },
        { productId: 'p11', storeId: 'odakyu', price: 1275, qty: 456, unitPrice: 2.80 },
        { productId: 'p11', storeId: 'amazon', price: 1169, qty: 600, unitPrice: 1.95 },
        // p12 Pain de mie
        { productId: 'p12', storeId: 'gyomu', price: 97, qty: 8, unitPrice: 12.13 },
        { productId: 'p12', storeId: 'odakyu', price: 198, qty: 8, unitPrice: 24.75 },
        // p13 Poivron Jaune
        { productId: 'p13', storeId: 'gyomu', price: 298, qty: 1, unitPrice: 298 },
        { productId: 'p13', storeId: 'matsumoto', price: 198, qty: 2, unitPrice: 99 },
        // p14 Poivron Rouge
        { productId: 'p14', storeId: 'gyomu', price: 118, qty: 5, unitPrice: 23.60 },
        { productId: 'p14', storeId: 'summit', price: 238, qty: 2, unitPrice: 119 },
        { productId: 'p14', storeId: 'matsumoto', price: 198, qty: 2, unitPrice: 99 },
        // p15 Poulet 100g
        { productId: 'p15', storeId: 'gyomu', price: 78, qty: 1, unitPrice: 78 },
        { productId: 'p15', storeId: 'summit', price: 95, qty: 1, unitPrice: 95 },
        { productId: 'p15', storeId: 'odakyu', price: 128, qty: 1, unitPrice: 128 },
        // p16 Riz 5kg
        { productId: 'p16', storeId: 'gyomu', price: 3340, qty: 5000, unitPrice: 0.67 },
        { productId: 'p16', storeId: 'summit', price: 4780, qty: 5000, unitPrice: 0.96 },
        { productId: 'p16', storeId: 'amazon', price: 3250, qty: 5000, unitPrice: 0.65 },
        // p17 Salade fresh
        { productId: 'p17', storeId: 'gyomu', price: 128, qty: 1, unitPrice: 128 },
        { productId: 'p17', storeId: 'summit', price: 89, qty: 1, unitPrice: 89 },
        { productId: 'p17', storeId: 'odakyu', price: 98, qty: 2, unitPrice: 49 },
        // p18 Thon
        { productId: 'p18', storeId: 'gyomu', price: 322, qty: 4, unitPrice: 80.50 },
        { productId: 'p18', storeId: 'summit', price: 386, qty: 4, unitPrice: 96.50 },
        { productId: 'p18', storeId: 'maruetsu', price: 366, qty: 3, unitPrice: 122 },
        { productId: 'p18', storeId: 'amazon', price: 1843, qty: 12, unitPrice: 153.58 },
        // p19 Tomate
        { productId: 'p19', storeId: 'gyomu', price: 425, qty: 5, unitPrice: 85 },
        { productId: 'p19', storeId: 'summit', price: 458, qty: 6, unitPrice: 76.33 },
        { productId: 'p19', storeId: 'maruetsu', price: 429, qty: 6, unitPrice: 71.50 },
        // p20 Vinaigre sirop
        { productId: 'p20', storeId: 'summit', price: 1131, qty: 800, unitPrice: 1.41 },
        { productId: 'p20', storeId: 'create', price: 775, qty: 900, unitPrice: 0.86 },
        { productId: 'p20', storeId: 'amazon', price: 2958, qty: 3600, unitPrice: 0.82 },
        // p21 Vitamine citron x6
        { productId: 'p21', storeId: 'summit', price: 628, qty: 6, unitPrice: 104.67 },
        { productId: 'p21', storeId: 'create', price: 537, qty: 6, unitPrice: 89.50 },
        { productId: 'p21', storeId: 'amazon', price: 2764, qty: 30, unitPrice: 92.13 },
        // p22 Produits vaisselle
        { productId: 'p22', storeId: 'summit', price: 348, qty: 1, unitPrice: 348 },
        { productId: 'p22', storeId: 'matsumoto', price: 298, qty: 1, unitPrice: 298 },
        // p23 Produits gazinière
        { productId: 'p23', storeId: 'summit', price: 305, qty: 400, unitPrice: 0.76 },
        { productId: 'p23', storeId: 'create', price: 239, qty: 400, unitPrice: 0.60 },
        { productId: 'p23', storeId: 'amazon', price: 1218, qty: 1620, unitPrice: 0.75 },
        // p24 Lessive
        { productId: 'p24', storeId: 'summit', price: 448, qty: 900, unitPrice: 0.50 },
        { productId: 'p24', storeId: 'odakyu', price: 898, qty: 2120, unitPrice: 0.42 },
        { productId: 'p24', storeId: 'matsumoto', price: 987, qty: 2030, unitPrice: 0.49 },
        { productId: 'p24', storeId: 'create', price: 849, qty: 2120, unitPrice: 0.40 },
        { productId: 'p24', storeId: 'amazon', price: 1540, qty: 2630, unitPrice: 0.59 },
        // p25 Soupline
        { productId: 'p25', storeId: 'summit', price: 498, qty: 940, unitPrice: 0.53 },
        { productId: 'p25', storeId: 'odakyu', price: 448, qty: 950, unitPrice: 0.47 },
        { productId: 'p25', storeId: 'matsumoto', price: 745, qty: 1500, unitPrice: 0.50 },
        { productId: 'p25', storeId: 'create', price: 658, qty: 1520, unitPrice: 0.43 },
        { productId: 'p25', storeId: 'amazon', price: 1102, qty: 2000, unitPrice: 0.55 },
        // p26 PQ
        { productId: 'p26', storeId: 'summit', price: 358, qty: 8, unitPrice: 44.75 },
        { productId: 'p26', storeId: 'matsumoto', price: 327, qty: 12, unitPrice: 27.25 },
        // p27 Toilette sent bon
        { productId: 'p27', storeId: 'summit', price: 238, qty: 1, unitPrice: 238 },
        { productId: 'p27', storeId: 'matsumoto', price: 349, qty: 1, unitPrice: 349 },
        { productId: 'p27', storeId: 'amazon', price: 224, qty: 1, unitPrice: 224 },
        // p28 Eponge x5
        { productId: 'p28', storeId: 'gyomu', price: 68, qty: 5, unitPrice: 13.6 },
        { productId: 'p28', storeId: 'summit', price: 178, qty: 5, unitPrice: 35.6 },
        { productId: 'p28', storeId: 'matsumoto', price: 128, qty: 5, unitPrice: 25.6 }
    ]
};

const getStoredData = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    if (!stored) return defaultValue;
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed) && parsed.length === 0) return defaultValue;
    return parsed;
};

const state = {
    view: 'dashboard',
    stores: getStoredData('omni_stores', initialData.stores),
    products: getStoredData('omni_products', initialData.products),
    prices: getStoredData('omni_prices', initialData.prices),
    shoppingList: JSON.parse(localStorage.getItem('omni_shopping')) || [],
    transport: JSON.parse(localStorage.getItem('omni_transport')) || {
        origin: '',
        destination: '',
        motoDistance: 0,
        motoConsumption: 5.0,
        motoFuelPrice: 165,
        motoParkingRate: 0,
        motoParkingHours: 0,
        trainPrice: 0,
        trainDuration: 0,
        trainChanges: 0
    },
    googleApiKey: localStorage.getItem('omni_google_key') || window.GOOGLE_API_KEY || '',
    sheetSyncUrl: localStorage.getItem('omni_sheet_url') || '',
    parkings: JSON.parse(localStorage.getItem('omni_parkings')) || [],
    activeStoreId: null,
    activeProductId: null
};

// --- Sync Utils ---
const updateSyncIndicator = (status, text) => {
    let indicator = document.getElementById('sync-status');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'sync-status';
        document.body.appendChild(indicator);
    }
    
    indicator.style.display = 'flex';
    indicator.style.opacity = '1';
    indicator.innerText = text;
    
    if (status === 'success') {
        indicator.style.background = 'rgba(16, 185, 129, 0.15)';
        indicator.style.color = 'var(--success)';
        indicator.style.border = '1px solid rgba(16, 185, 129, 0.3)';
        setTimeout(() => {
            if (indicator.innerText === text) {
                indicator.style.opacity = '0';
                setTimeout(() => {
                    if (indicator.style.opacity === '0') {
                        indicator.style.display = 'none';
                    }
                }, 300);
            }
        }, 3000);
    } else if (status === 'syncing') {
        indicator.style.background = 'rgba(99, 102, 241, 0.15)';
        indicator.style.color = 'var(--accent-color)';
        indicator.style.border = '1px solid rgba(99, 102, 241, 0.3)';
    } else if (status === 'error') {
        indicator.style.background = 'rgba(239, 68, 68, 0.15)';
        indicator.style.color = 'var(--danger)';
        indicator.style.border = '1px solid rgba(239, 68, 68, 0.3)';
    }
};

window.syncPull = async (showNotification = false) => {
    const url = state.sheetSyncUrl;
    if (!url) return;
    
    updateSyncIndicator('syncing', 'Synchronisation...');
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow'
        });
        const data = await response.json();
        if (data && (data.products || data.stores || data.prices)) {
            if (data.stores && data.stores.length > 0) state.stores = data.stores;
            if (data.products && data.products.length > 0) state.products = data.products;
            if (data.prices && data.prices.length > 0) state.prices = data.prices;
            if (data.shoppingList) state.shoppingList = data.shoppingList;
            
            localStorage.setItem('omni_stores', JSON.stringify(state.stores));
            localStorage.setItem('omni_products', JSON.stringify(state.products));
            localStorage.setItem('omni_prices', JSON.stringify(state.prices));
            localStorage.setItem('omni_shopping', JSON.stringify(state.shoppingList));
            
            updateSyncIndicator('success', 'Synchronisé 🟢');
            if (showNotification) {
                showAlert("Données synchronisées avec succès depuis Google Sheet !");
            }
            render();
        } else {
            updateSyncIndicator('error', 'Erreur synchro 🔴');
        }
    } catch (err) {
        console.error("Sync pull error:", err);
        updateSyncIndicator('error', 'Erreur réseau 🔴');
    }
};

window.syncPush = async () => {
    const url = state.sheetSyncUrl;
    if (!url) return;
    
    updateSyncIndicator('syncing', 'Sauvegarde Cloud...');
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify({
                products: state.products,
                stores: state.stores,
                prices: state.prices,
                shoppingList: state.shoppingList
            })
        });
        const result = await response.json();
        if (result && result.status === 'success') {
            updateSyncIndicator('success', 'Enregistré 🟢');
        } else {
            console.error("Sync push failed:", result);
            updateSyncIndicator('error', 'Erreur sauvegarde 🔴');
        }
    } catch (err) {
        console.error("Sync push error:", err);
        updateSyncIndicator('error', 'Erreur réseau 🔴');
    }
};

// --- Utils ---
const saveState = () => {
    localStorage.setItem('omni_stores', JSON.stringify(state.stores));
    localStorage.setItem('omni_products', JSON.stringify(state.products));
    localStorage.setItem('omni_prices', JSON.stringify(state.prices));
    localStorage.setItem('omni_shopping', JSON.stringify(state.shoppingList));
    localStorage.setItem('omni_transport', JSON.stringify(state.transport));
    localStorage.setItem('omni_google_key', state.googleApiKey || '');
    localStorage.setItem('omni_sheet_url', state.sheetSyncUrl || '');

    if (state.sheetSyncUrl) {
        syncPush();
    }
};

window.showAlert = (message) => {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <div class="glass-card" style="width:100%; max-width:350px; margin:0 auto; text-align:center">
            <p style="margin-bottom:20px">${message}</p>
            <button class="primary" onclick="this.closest('.modal-backdrop').remove()">OK</button>
        </div>
    `;
    document.body.appendChild(modal);
};

window.showConfirm = (message, onConfirm) => {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <div class="glass-card" style="width:100%; max-width:350px; margin:0 auto; text-align:center">
            <p style="margin-bottom:20px">${message}</p>
            <div class="flex gap-2">
                <button class="primary" id="confirm-ok">Confirmer</button>
                <button class="primary" style="background:var(--text-secondary)" onclick="this.closest('.modal-backdrop').remove()">Annuler</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('confirm-ok').onclick = () => {
        onConfirm();
        modal.remove();
    };
};


const render = () => {
    const main = document.getElementById('main-content');

    switch (state.view) {
        case 'dashboard': renderDashboard(main); break;
        case 'comparison': renderComparison(main); break;
        case 'shopping-list': renderShoppingList(main); break;
        case 'transport': renderTransport(main); break;
        case 'settings': renderSettings(main); break;
        default: renderDashboard(main);
    }
};

// --- Views ---
function renderDashboard(container) {
    container.innerHTML = `
        <h1>OmniTool</h1>
        <div class="glass-card">
            <h3>Bienvenue !</h3>
            <p class="text-secondary text-sm">Prêt pour vos courses ?</p>
            <div style="margin-top: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <button class="primary" onclick="switchView('comparison')">🔥 Prix</button>
                <button class="primary" style="background: var(--success)" onclick="switchView('shopping-list')">🛒 Ma Liste</button>
            </div>
        </div>
        
        <div class="glass-card">
            <h3>Tableau de bord</h3>
            <div class="flex justify-between" style="margin-top:10px">
                <span class="text-secondary">Produits suivis</span>
                <span>${state.products.length}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-secondary">Magasins suivis</span>
                <span>${state.stores.length}</span>
            </div>
        </div>
    `;
}

function renderComparison(container) {
    container.innerHTML = `
        <div class="flex justify-between items-center" style="margin-bottom: 24px">
            <h1>Comparaisons</h1>
            <div class="flex gap-2">
                 <button class="primary" style="width: auto; padding: 8px 16px; background:var(--success)" onclick="showAddProductModal()">+ Produit</button>
            </div>
        </div>
        
        ${state.products.length === 0 ? `
            <div class="glass-card text-center" style="text-align:center">
                <p class="text-secondary">Aucun produit suivi. Ajoutez-en un pour commencer !</p>
            </div>
        ` : `
            <div class="comparison-grid" style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
                <table style="min-width: ${100 + (state.stores.length * 80)}px">
                    <thead>
                        <tr>
                            <th class="sticky-col" style="text-align: left; padding-bottom: 10px;">Produit</th>
                            ${state.stores.map(s => `<th>${s.name}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${state.products.map(p => {
        const entries = state.prices.filter(pr => pr.productId === p.id);
        const minPrice = entries.length > 0 ? Math.min(...entries.map(e => e.unitPrice)) : null;

        return `
                                <tr style="border-top: 1px solid var(--glass-border);">
                                    <td class="sticky-col" style="padding: 15px 0;">
                                        <div class="flex justify-between items-start">
                                            <div style="flex:1; min-width:0">
                                                <div style="font-weight:600; font-size:11px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${p.name}</div>
                                                <div class="text-secondary" style="font-size:9px">${p.unit}</div>
                                            </div>
                                            <div style="display:flex; flex-direction:column; gap:4px; align-items: flex-end;">
                                                <button onclick="quickAddToList('${p.id}')" style="background:var(--accent-color); border:none; color:white; border-radius:5px; padding:4px 6px; font-size:9px; line-height:1.1; cursor:pointer; white-space:pre-wrap; width:35px" title="Ajouter à la liste">ADD\nList</button>
                                                <button onclick="removeProduct('${p.id}')" style="background:none; border:none; color:var(--danger); font-size:14px; padding:0 5px; cursor:pointer; opacity:0.4" title="Supprimer le produit">🗑️</button>
                                            </div>
                                        </div>
                                    </td>
                                    ${state.stores.map(s => {
            const entry = entries.find(pr => pr.storeId === s.id);
            const isBest = entry && entry.unitPrice === minPrice;
            return `<td style="text-align: center; cursor: pointer; padding: 10px" onclick="showPriceModal('${p.id}', '${s.id}')">
                                            ${entry ? `
                                                <div style="color: ${isBest ? 'var(--success)' : 'inherit'}; font-weight:${isBest ? '700' : '400'}">
                                                    ${entry.unitPrice.toFixed(2)}¥
                                                </div>
                                                <div class="text-secondary" style="font-size:9px">${entry.price}¥ / ${entry.qty}</div>
                                            ` : `<span class="text-secondary" style="opacity:0.3">--</span>`}
                                        </td>`;
        }).join('')}
                                </tr>
                            `;
    }).join('')}
                    </tbody>
                </table>
            </div>
        `}
        <div id="modal-container"></div>
    `;
}

function renderShoppingList(container) {
    container.innerHTML = `
        <div class="flex justify-between items-center" style="margin-bottom: 24px">
            <h1>Ma Liste</h1>
            <button class="primary" style="width: auto; padding: 8px 16px" onclick="showAddToListModal()">+</button>
        </div>
        
        <div class="glass-card">
            ${state.shoppingList.length === 0 ? `
                <p class="text-secondary text-center">Votre liste est vide.</p>
            ` : `
                <div id="list-items">
                    ${state.shoppingList.map((item, index) => {
        const product = state.products.find(p => p.id === item.productId);
        return `
                            <div class="flex items-center gap-2" style="margin-bottom: 15px; text-decoration: ${item.checked ? 'line-through' : 'none'}; opacity: ${item.checked ? 0.5 : 1}">
                                <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleItem(${index})" style="width: 24px; height: 24px; margin: 0">
                                <div style="flex: 1">
                                    <div style="font-weight:600">${product ? product.name : 'Produit inconnu'}</div>
                                    <div class="text-secondary" style="font-size:12px">${item.note || ''}</div>
                                </div>
                                <button onclick="removeFromList(${index})" style="background:none; border:none; color:var(--danger)">×</button>
                            </div>
                        `;
    }).join('')}
                </div>
            `}
        </div>
    `;
}

function renderTransport(container) {
    const t = state.transport;

    // Calculate Moto cost
    const fuelCost = (t.motoDistance / 100) * t.motoConsumption * t.motoFuelPrice;
    const parkingCost = t.motoParkingRate * t.motoParkingHours;
    const totalMotoCost = fuelCost + parkingCost;

    // Calculate Train cost
    const totalTrainCost = t.trainPrice;

    const diff = Math.round(Math.abs(totalMotoCost - totalTrainCost));
    const isMotoCheaper = totalMotoCost <= totalTrainCost;

    container.innerHTML = `
        <h1>Comparateur de Trajet</h1>
        
        <div class="glass-card" style="margin-bottom: 15px;">
            <h3 style="margin-bottom: 15px; display:flex; align-items:center; gap:8px">📍 Itinéraire Google Maps</h3>
            <div class="flex gap-2">
                <input type="text" id="t-origin" value="${t.origin}" onchange="updateTransport('origin', this.value)" placeholder="Point de départ (ex: Shinjuku)" style="flex:1">
                <button class="primary" style="width:50px; padding:0; margin-bottom:12px; font-size: 20px" onclick="useCurrentLocation()" title="Ma position actuelle">🌍</button>
            </div>
            <input type="text" id="t-destination" value="${t.destination}" onchange="updateTransport('destination', this.value)" placeholder="Point d'arrivée (ex: Shibuya)">
            <button class="primary" style="margin-top: 5px;" onclick="calculateRoute()">🤖 Calculer Automatiquement</button>
            <div id="route-loading" style="display:none; text-align:center; padding:10px; font-size:12px;" class="text-secondary">Calcul en cours avec Google Maps...</div>
        </div>

        <div class="glass-card" style="background: ${isMotoCheaper ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; text-align: center; border: 2px solid ${isMotoCheaper ? 'var(--success)' : 'var(--danger)'}">
            <h3 style="margin-bottom: 5px">Le moins cher : ${isMotoCheaper ? '🏍️ Moto' : '🚆 Train'}</h3>
            <p style="font-size: 24px; font-weight: 700; color: ${isMotoCheaper ? 'var(--success)' : 'var(--danger)'}">
                ${isMotoCheaper ? Math.round(totalMotoCost) : Math.round(totalTrainCost)}¥
            </p>
            <p class="text-sm text-secondary">Différence de ${diff}¥</p>
            
            <div class="flex justify-between" style="margin-top: 15px; font-weight: 600">
                <span>Moto: ${Math.round(totalMotoCost)}¥</span>
                <span>Train: ${Math.round(totalTrainCost)}¥</span>
            </div>
        </div>

        <div class="glass-card">
            <h3 style="margin-bottom: 15px; display:flex; align-items:center; gap:8px">🏍️ Paramètres Moto</h3>
            
            <div style="background: rgba(0,0,0,0.03); padding: 12px; border-radius: 8px; margin-bottom: 15px;">
                <h4 style="margin-bottom: 10px; font-size: 14px;">🔍 Chercher un stationnement :</h4>
                <div style="display:flex; gap:8px; margin-bottom: 15px; flex-wrap:wrap">
                    <button class="primary" style="font-size:12px; padding:6px 12px; background:#1e40af" onclick="searchBikeParking('jmpsa')">JMPSA</button>
                    <button class="primary" style="font-size:12px; padding:6px 12px; background:#047857" onclick="searchBikeParking('spark')">S-Park (Tokyo)</button>
                    <button class="primary" style="font-size:12px; padding:6px 12px; background:#b91c1c" onclick="searchBikeParking('google')">Google Maps</button>
                </div>

                <div style="display:flex; gap:10px; align-items: flex-end;">
                    <div style="flex:1">
                        <label class="text-sm text-secondary" style="font-size: 11px;">⭐ Mes favoris</label>
                        <select onchange="loadSavedParking(this.value)" style="margin-bottom:0">
                            <option value="">Sélectionner un spot...</option>
                            ${state.parkings.map(p => `<option value="${p.id}">${p.name} (${p.rate}¥/h)</option>`).join('')}
                        </select>
                    </div>
                    <button class="primary" style="padding:8px; font-size: 18px;" onclick="saveCurrentParking()" title="Sauvegarder le tarif actuel">💾</button>
                </div>
            </div>
            
            <label class="text-sm text-secondary">📍 Distance (km)</label>
            <input type="number" id="t-motoDistance" value="${t.motoDistance}" onchange="updateTransport('motoDistance', this.value)" placeholder="ex: 120">
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px">
                <div>
                    <label class="text-sm text-secondary">Consommation (L/100)</label>
                    <input type="number" step="0.1" id="t-motoConsumption" value="${t.motoConsumption}" onchange="updateTransport('motoConsumption', this.value)" placeholder="ex: 5.0">
                </div>
                <div>
                    <label class="text-sm text-secondary">Prix essence (¥/L)</label>
                    <input type="number" id="t-motoFuelPrice" value="${t.motoFuelPrice}" onchange="updateTransport('motoFuelPrice', this.value)" placeholder="ex: 165">
                </div>
            </div>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px">
                <div>
                    <label class="text-sm text-secondary">Parking (¥/heure)</label>
                    <input type="number" id="t-motoParkingRate" value="${t.motoParkingRate}" onchange="updateTransport('motoParkingRate', this.value)" placeholder="ex: 300">
                </div>
                <div>
                    <label class="text-sm text-secondary">Durée parking (h)</label>
                    <input type="number" step="0.5" id="t-motoParkingHours" value="${t.motoParkingHours}" onchange="updateTransport('motoParkingHours', this.value)" placeholder="ex: 4">
                </div>
            </div>
            
            <div style="margin-top: 10px; background: rgba(0,0,0,0.05); padding: 10px; border-radius: 8px;">
                <div class="flex justify-between text-sm">
                    <span>Coût Essence:</span>
                    <strong>${Math.round(fuelCost)}¥</strong>
                </div>
                <div class="flex justify-between text-sm">
                    <span>Coût Parking:</span>
                    <strong>${Math.round(parkingCost)}¥</strong>
                </div>
            </div>
        </div>

        <div class="glass-card">
            <h3 style="margin-bottom: 15px; display:flex; align-items:center; gap:8px">🚆 Paramètres Train</h3>
            
            <label class="text-sm text-secondary">🎫 Prix du billet total (¥)</label>
            <input type="number" id="t-trainPrice" value="${t.trainPrice}" onchange="updateTransport('trainPrice', this.value)" placeholder="ex: 200">
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px">
                <div>
                    <label class="text-sm text-secondary">Temps trajet (min)</label>
                    <input type="number" id="t-trainDuration" value="${t.trainDuration}" onchange="updateTransport('trainDuration', this.value)" placeholder="ex: 150">
                </div>
                <div>
                    <label class="text-sm text-secondary">Nb. changements</label>
                    <input type="number" id="t-trainChanges" value="${t.trainChanges}" onchange="updateTransport('trainChanges', this.value)" placeholder="ex: 1">
                </div>
            </div>
        </div>
    `;
}

function renderSettings(container) {
    container.innerHTML = `
        <h1>Paramètres</h1>
        
        <div class="glass-card">
            <h3>Synchronisation Google Sheet</h3>
            <p class="text-secondary text-sm" style="margin-bottom:10px">Synchronisez tous vos téléphones et ordinateurs en temps réel.</p>
            <input type="text" id="s-sheet-url" value="${state.sheetSyncUrl || ''}" onchange="updateSheetSyncUrl(this.value)" placeholder="https://script.google.com/macros/s/.../exec">
            
            ${state.sheetSyncUrl ? `
                <div style="display:flex; gap:10px; margin-top:12px; margin-bottom:12px">
                    <button class="primary" onclick="syncPull(true)" style="background:var(--success); flex:1; font-size:12px; padding:8px 0">🔄 Importer (Pull)</button>
                    <button class="primary" onclick="syncPush()" style="background:var(--accent-color); flex:1; font-size:12px; padding:8px 0">📤 Exporter (Push)</button>
                </div>
            ` : ''}
            
            <button class="primary" style="background:none; border:1px solid var(--accent-color); color:var(--accent-color); font-size:12px; padding:8px 0; margin-top:5px" onclick="showSyncInstructions()">📖 Configurer Google Sheet</button>
        </div>

        <div class="glass-card">
            <h3>API Google Maps</h3>
            <p class="text-secondary text-sm" style="margin-bottom:10px">Nécessaire pour le calcul automatique des trajets.</p>
            <input type="password" id="s-google-key" value="${state.googleApiKey}" onchange="updateGoogleKey(this.value)" placeholder="Votre clé API Google">
        </div>
        
        <div class="glass-card">
            <h3>Gérer les Magasins</h3>
            <div id="stores-list" style="margin: 15px 0">
                ${state.stores.map(s => `
                    <div class="flex justify-between items-center" style="margin-bottom:10px">
                        <span>${s.name}</span>
                        <button onclick="removeStore('${s.id}')" style="background:none; border:none; color:var(--danger)">Supprimer</button>
                    </div>
                `).join('')}
            </div>
            <input type="text" id="new-store-name" placeholder="Nom du magasin (ex: Amazon, Summit)">
            <button class="primary" onclick="addStore()">Ajouter Magasin</button>
        </div>
        
        <div class="glass-card">
             <h3>Réinitialisation</h3>
             <p class="text-secondary text-sm">Restaure la liste originale des 28 articles et prix.</p>
             <button class="primary" style="background:var(--accent-color); margin-bottom:10px" onclick="resetToDefaults()">Restaurer la liste par défaut</button>
             <button class="primary" style="background:var(--danger)" onclick="clearAllData()">Tout effacer (Vider le cache)</button>
        </div>
    `;
}

// --- Modals ---
window.showAddProductModal = () => {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <div class="glass-card" style="width:100%; max-width:400px; margin:0 auto">
            <h3>Nouveau Produit</h3>
            <input type="text" id="p-name" placeholder="Nom (ex: Maïs, Lait)">
            <input type="text" id="p-unit" placeholder="Unité de comparaison (ex: kg, pack, litre)">
            <textarea id="p-comment" placeholder="Commentaires / Lien Amazon"></textarea>
            <div id="p-price-row" class="flex gap-2" style="margin-bottom:12px">
                <input type="number" id="p-init-price" placeholder="Prix initial (optionnel)" style="margin-bottom:0">
                <button class="primary" style="width:50px; padding:0" onclick="startCameraScanner('p-init-price')">📸</button>
            </div>
            <div class="flex gap-2">
                <button class="primary" onclick="addProduct()">Enregistrer</button>
                <button class="primary" style="background:var(--text-secondary)" onclick="this.closest('.modal-backdrop').remove()">Annuler</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
};

window.showPriceModal = (productId, storeId) => {
    const product = state.products.find(p => p.id === productId);
    const store = state.stores.find(s => s.id === storeId);
    const entry = state.prices.find(p => p.productId === productId && p.storeId === storeId);

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <div class="glass-card" style="width:100%; max-width:400px; margin:0 auto">
            <h3>${product.name} @ ${store.name}</h3>
            <p class="text-secondary text-sm" style="margin-bottom:15px">Entrez le prix total et le nombre d'unités.</p>
            
            <label class="text-sm text-secondary">Prix Total (¥)</label>
            <input type="number" id="f-price" value="${entry ? entry.price : ''}" placeholder="258">
            
            <label class="text-sm text-secondary">Nombre de pièces / volume (ex: 3)</label>
            <input type="number" id="f-qty" value="${entry ? entry.qty : 1}" placeholder="1">
            
            <div class="flex justify-between items-center" style="margin: 15px 0; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                <span>Prix unitaire:</span>
                <span id="unit-calc" style="font-weight:700; color:var(--success)">-- ¥</span>
            </div>

            <div class="flex gap-2">
                <button class="primary" onclick="savePrice('${productId}', '${storeId}')">Enregistrer</button>
                <button class="primary" style="background:var(--text-secondary)" onclick="this.closest('.modal-backdrop').remove()">Annuler</button>
            </div>
            
            <button class="primary" style="margin-top:10px; background:var(--accent-hover)" onclick="startCameraScanner('f-price')">📸 Scanner Prix</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Auto calc unit price
    const pIn = document.getElementById('f-price');
    const qIn = document.getElementById('f-qty');
    const res = document.getElementById('unit-calc');
    const update = () => {
        const p = parseFloat(pIn.value) || 0;
        const q = parseFloat(qIn.value) || 1;
        res.innerText = (p / q).toFixed(2) + ' ¥';
    };
    pIn.addEventListener('input', update);
    qIn.addEventListener('input', update);
    pIn.addEventListener('focus', () => pIn.select());
    qIn.addEventListener('focus', () => qIn.select());
    if (entry) update();
};


window.showAddToListModal = () => {
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <div class="glass-card" style="width:100%; max-width:400px; margin:0 auto">
            <h3>Ajouter à la liste</h3>
            <select id="sl-product">
                ${state.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
            <input type="text" id="sl-note" placeholder="Note (ex: Prendre le moins cher)">
            <div class="flex gap-2">
                <button class="primary" onclick="addToList()">Ajouter</button>
                <button class="primary" style="background:var(--text-secondary)" onclick="this.closest('.modal-backdrop').remove()">Annuler</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
};

window.updateTransport = (key, value) => {
    if (key === 'origin' || key === 'destination') {
        state.transport[key] = value;
    } else {
        state.transport[key] = parseFloat(value) || 0;
    }
    saveState();
    render();
};

window.updateGoogleKey = (key) => {
    state.googleApiKey = key;
    saveState();
};

window.updateSheetSyncUrl = (url) => {
    state.sheetSyncUrl = url.trim();
    saveState();
    render();
    if (state.sheetSyncUrl) {
        syncPull(true);
    }
};

window.showSyncInstructions = () => {
    const googleAppsScriptCode = `function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return ContentService.createTextOutput(JSON.stringify({
    products: getSheetData(ss, "OmniTool_Products"),
    stores: getSheetData(ss, "OmniTool_Stores"),
    prices: getSheetData(ss, "OmniTool_Prices"),
    shoppingList: getSheetData(ss, "OmniTool_ShoppingList")
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (data.products) updateSheet(ss, "OmniTool_Products", data.products, ["id", "name", "unit", "comment"]);
    if (data.stores) updateSheet(ss, "OmniTool_Stores", data.stores, ["id", "name"]);
    if (data.prices) updateSheet(ss, "OmniTool_Prices", data.prices, ["productId", "storeId", "price", "qty", "unitPrice"]);
    if (data.shoppingList) updateSheet(ss, "OmniTool_ShoppingList", data.shoppingList, ["productId", "note", "checked"]);
    return ContentService.createTextOutput(JSON.stringify({ status: "success" })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheetData(ss, sheetName) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  var headers = data[0];
  var list = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var obj = {};
    var hasContent = false;
    for (var j = 0; j < headers.length; j++) {
      var val = row[j];
      if (val !== "") hasContent = true;
      if (val === "true" || val === true) val = true;
      else if (val === "false" || val === false) val = false;
      else if (!isNaN(val) && val !== "") val = Number(val);
      obj[headers[j]] = val;
    }
    if (hasContent) list.push(obj);
  }
  return list;
}

function updateSheet(ss, sheetName, items, keys) {
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  sheet.clear();
  sheet.appendRow(keys);
  if (items.length === 0) return;
  var values = items.map(function(item) {
    return keys.map(function(key) {
      var val = item[key];
      return val === undefined || val === null ? "" : val;
    });
  });
  sheet.getRange(2, 1, values.length, keys.length).setValues(values);
}`;

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
        <div class="glass-card" style="width:100%; max-width:500px; margin:0 auto; max-height:85vh; overflow-y:auto; text-align:left">
            <h3 style="margin-bottom:15px">Synchronisation Google Sheet</h3>
            
            <ol style="margin-left:20px; margin-bottom:20px; display:flex; flex-direction:column; gap:10px; font-size:13px">
                <li>Ouvrez votre fichier **Google Sheet**.</li>
                <li>Dans le menu, cliquez sur **Extensions** &gt; **Apps Script**.</li>
                <li>Supprimez le code par défaut et collez le script ci-dessous :</li>
            </ol>
            
            <textarea id="apps-script-code-box" readonly style="width:100%; height:120px; font-family:monospace; font-size:10px; padding:10px; border-radius:8px; background:rgba(0,0,0,0.05); border:1px solid var(--glass-border); margin-bottom:15px">${googleAppsScriptCode}</textarea>
            
            <button class="primary" style="margin-bottom:20px; background:var(--accent-color)" onclick="copyAppsScriptCode()">📋 Copier le code du script</button>
            
            <ol start="4" style="margin-left:20px; margin-bottom:20px; display:flex; flex-direction:column; gap:10px; font-size:13px">
                <li>Cliquez sur **Enregistrer** (l'icône disquette).</li>
                <li>Cliquez sur **Déployer** &gt; **Nouveau déploiement**.</li>
                <li>Sélectionnez le type **Application Web** (icône engrenage).</li>
                <li>Configurez ainsi :
                    <br>- *Exécuter en tant que* : **Moi (votre email)**
                    <br>- *Qui a accès* : **Tout le monde**
                </li>
                <li>Cliquez sur **Déployer** (et validez les autorisations d'accès).</li>
                <li>Copiez l'**URL de l'application Web** et collez-la ci-dessus.</li>
            </ol>
            
            <button class="primary" style="background:var(--text-secondary)" onclick="this.closest('.modal-backdrop').remove()">Fermer</button>
        </div>
    `;
    document.body.appendChild(modal);
};

window.copyAppsScriptCode = () => {
    const copyText = document.getElementById("apps-script-code-box");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    showAlert("Code copié dans le presse-papiers ! Collez-le dans Apps Script.");
};

window.useCurrentLocation = () => {
    if (!navigator.geolocation) {
        showAlert("La géolocalisation n'est pas supportée par votre navigateur.");
        return;
    }
    const originInput = document.getElementById('t-origin');
    originInput.value = "Recherche... 📡";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const locString = `${lat},${lng}`;
            originInput.value = locString;
            updateTransport('origin', locString);
        },
        (error) => {
            showAlert("Impossible d'obtenir votre position. Vérifiez vos permissions de géolocalisation dans le navigateur.");
            originInput.value = state.transport.origin;
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
};

window.searchBikeParking = (type) => {
    const dest = state.transport.destination || "Tokyo";
    if (type === 'jmpsa') {
        window.open('https://www.jmpsa.or.jp/society/parking/', '_blank');
    } else if (type === 'spark') {
        window.open(`https://www.s-park.jp/map?q=${encodeURIComponent(dest)}`, '_blank');
    } else if (type === 'google') {
        window.open(`https://www.google.com/maps/search/バイク駐車場+${encodeURIComponent(dest)}`, '_blank');
    }
};

window.saveCurrentParking = () => {
    const dest = state.transport.destination;
    const rate = state.transport.motoParkingRate;

    if (!dest && !rate) {
        showAlert("Remplissez une destination et un prix de parking d'abord.");
        return;
    }

    const name = prompt("Nom du spot pour " + (dest || "cette adresse") + " ?", "Parking " + (dest || ""));
    if (!name) return;

    const newParking = { id: Date.now().toString(), name, rate };
    state.parkings.push(newParking);
    localStorage.setItem('omni_parkings', JSON.stringify(state.parkings));

    showAlert("Spot de parking sauvegardé dans vos favoris !");
    render();
};

window.loadSavedParking = (id) => {
    if (!id) return;
    const p = state.parkings.find(x => x.id === id);
    if (p) {
        updateTransport('motoParkingRate', p.rate);
    }
};

window.calculateRoute = async () => {
    const apiKey = state.googleApiKey || window.GOOGLE_API_KEY;
    if (!apiKey) {
        showAlert("Veuillez d'abord ajouter votre clé Google Maps API dans les paramètres ou le fichier config.js.");
        window.switchView('settings');
        return;
    }

    const origin = state.transport.origin;
    const dest = state.transport.destination;

    if (!origin || !dest) {
        showAlert("Veuillez remplir le départ et l'arrivée.");
        return;
    }

    document.getElementById('route-loading').style.display = 'block';

    const loadGoogleMaps = () => {
        return new Promise((resolve, reject) => {
            if (window.google && window.google.maps && window.google.maps.DirectionsService) {
                resolve();
                return;
            }
            window.__googleMapsCallback = () => {
                resolve();
            };
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=__googleMapsCallback`;
            script.async = true;
            script.defer = true;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };

    try {
        await loadGoogleMaps();
        const directionsService = new google.maps.DirectionsService();

        // 1. Get Driving distance (Moto) without tolls
        directionsService.route(
            { origin: origin, destination: dest, travelMode: 'DRIVING', avoidTolls: true },
            (response, status) => {
                if (status === 'OK') {
                    const leg = response.routes[0].legs[0];
                    state.transport.motoDistance = parseFloat((leg.distance.value / 1000).toFixed(1));
                    saveState();
                    render();
                } else {
                    console.error("Driving route error:", status);
                }
            }
        );

        // 2. Get Transit info (Train)
        directionsService.route(
            {
                origin: origin,
                destination: dest,
                travelMode: 'TRANSIT',
                transitOptions: {
                    departureTime: new Date()
                }
            },
            (response, status) => {
                if (status === 'OK') {
                    const route = response.routes[0];
                    const leg = route.legs[0];

                    if (route.fare) {
                        state.transport.trainPrice = route.fare.value;
                    }

                    state.transport.trainDuration = Math.round(leg.duration.value / 60);

                    const transitSteps = leg.steps.filter(s => s.travel_mode === 'TRANSIT');
                    state.transport.trainChanges = Math.max(0, transitSteps.length - 1);

                    saveState();
                    render();
                } else if (status === 'ZERO_RESULTS') {
                    console.log("Transit non supporté dans cette région (ex: Japon).");
                    setTimeout(() => showAlert("Itinéraire Moto calculé avec succès. ⚠️ Note: Google Maps bloque l'accès aux données des trains au Japon via son API, le prix du train doit être saisi manuellement."), 500);
                } else if (status === 'REQUEST_DENIED') {
                    showAlert("Erreur : l'API Directions n'est pas activée sur Google Cloud, ou facturation non configurée.");
                } else {
                    showAlert("Erreur Google Maps (Train) : " + status);
                }
            }
        );

    } catch (err) {
        console.error("Google Maps API Error:", err);
        showAlert("Erreur API Google. Ouvrez la console pour plus de détails (F12).");
    } finally {
        const loader = document.getElementById('route-loading');
        if (loader) loader.style.display = 'none';
    }
};

window.switchView = (view) => {
    if (!view) return; // Prevent switching to undefined

    if (view === 'scanner') {
        startCameraScanner();
        return;
    }

    state.view = view;
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    render();
};

window.addProduct = () => {
    const name = document.getElementById('p-name').value;
    const unit = document.getElementById('p-unit').value;
    const comment = document.getElementById('p-comment').value;
    const initPrice = parseFloat(document.getElementById('p-init-price').value);

    if (!name) return;

    const productId = Date.now().toString();
    state.products.push({ id: productId, name, unit, comment });

    if (!isNaN(initPrice)) {
        // If a price was scanned/entered, add it to the first store by default
        if (state.stores.length > 0) {
            const storeId = state.stores[0].id;
            state.prices.push({
                productId,
                storeId,
                price: initPrice,
                qty: 1,
                unitPrice: initPrice
            });
        }
    }

    saveState();
    document.querySelector('.modal-backdrop').remove();
    render();
};


window.savePrice = (productId, storeId) => {
    const price = parseFloat(document.getElementById('f-price').value);
    const qty = parseFloat(document.getElementById('f-qty').value) || 1;
    if (isNaN(price)) return;

    const unitPrice = price / qty;
    const existing = state.prices.findIndex(p => p.productId === productId && p.storeId === storeId);
    if (existing > -1) {
        state.prices[existing] = { productId, storeId, price, qty, unitPrice };
    } else {
        state.prices.push({ productId, storeId, price, qty, unitPrice });
    }
    saveState();
    document.querySelector('.modal-backdrop').remove();
    render();
};

window.addStore = () => {
    const input = document.getElementById('new-store-name');
    if (!input.value) return;
    state.stores.push({ id: Date.now().toString(), name: input.value });
    saveState();
    input.value = '';
    render();
};

window.removeStore = (id) => {
    state.stores = state.stores.filter(s => s.id !== id);
    state.prices = state.prices.filter(p => p.storeId !== id);
    saveState();
    render();
};

window.removeProduct = (id) => {
    showConfirm("Supprimer ce produit et tous ses prix enregistrés ?", () => {
        state.products = state.products.filter(p => p.id !== id);
        state.prices = state.prices.filter(p => p.productId !== id);
        state.shoppingList = state.shoppingList.filter(item => item.productId !== id);
        saveState();
        render();
    });
};


window.addToList = () => {
    const productId = document.getElementById('sl-product').value;
    const note = document.getElementById('sl-note').value;
    state.shoppingList.push({ productId, note, checked: false });
    saveState();
    document.querySelector('.modal-backdrop').remove();
    render();
};

window.quickAddToList = (productId) => {
    state.shoppingList.push({ productId, note: 'Ajout rapide', checked: false });
    saveState();
    showAlert("Produit ajouté à la liste !");
    render();
};

window.toggleItem = (index) => {
    state.shoppingList[index].checked = !state.shoppingList[index].checked;
    saveState();
    render();
};

window.removeFromList = (index) => {
    state.shoppingList.splice(index, 1);
    saveState();
    render();
};

window.clearAllData = () => {
    showConfirm("Voulez-vous vraiment TOUT effacer ?", () => {
        localStorage.clear();
        location.reload();
    });
};

window.resetToDefaults = () => {
    showConfirm("Voulez-vous restaurer la liste par défaut ?", () => {
        localStorage.removeItem('omni_stores');
        localStorage.removeItem('omni_products');
        localStorage.removeItem('omni_prices');
        location.reload();
    });
};


// --- Scanner & OCR ---
let cameraStream = null;

window.startCameraScanner = async (targetInputId, storeId) => {
    // targetInputId can be 'f-price' (from price modal), 'p-init-price' (from new product), or undefined (global)

    const scannerOverlay = document.createElement('div');
    scannerOverlay.className = 'scanner-overlay';
    scannerOverlay.innerHTML = `
        <video id="scanner-video" autoplay playsinline></video>
        <div class="scanner-guide"></div>
        <div id="scanner-result-overlay" class="scanner-result-card" style="display:none">
            <h4 style="margin-bottom:10px; color:var(--text-primary)">Résultat du Scan</h4>
            <div style="display:flex; gap:15px; margin-bottom:15px; align-items:center">
                <canvas id="ocr-debug-canvas" style="width:100px; height:40px; border-radius:8px; border:1px solid var(--glass-border); background:#000"></canvas>
                <div style="flex:1">
                    <div style="font-size:10px; color:var(--text-secondary); text-transform:uppercase">Prix possible</div>
                    <div style="font-size:24px; font-weight:700; color:var(--success)" id="detected-val">-- ¥</div>
                </div>
            </div>
            <div style="margin-bottom:15px">
                <div style="font-size:10px; color:var(--text-secondary); text-transform:uppercase">Texte brut détecté :</div>
                <div id="raw-ocr-text" style="font-size:12px; font-family:monospace; color:var(--text-primary); background:rgba(0,0,0,0.05); padding:8px; border-radius:8px; max-height:60px; overflow-y:auto">--</div>
            </div>
            <div class="flex gap-2">
                <button class="primary" id="accept-ocr" style="flex:1">Utiliser</button>
                <button class="primary" style="background:var(--text-secondary); flex:1" onclick="document.getElementById('scanner-result-overlay').style.display='none'; document.getElementById('capture-btn').disabled=false">Réessayer</button>
            </div>
        </div>
        <button class="close-scanner" onclick="stopCameraScanner()">×</button>
        <div class="scanner-controls">
            <button class="capture-btn" id="capture-btn"></button>
        </div>
        <div id="ocr-status" style="position:absolute; top:80px; width:100%; text-align:center; color:white; background:rgba(0,0,0,0.5); padding:10px; display:none">
            Analyse en cours...
        </div>
    `;
    document.body.appendChild(scannerOverlay);

    const video = document.getElementById('scanner-video');
    const captureBtn = document.getElementById('capture-btn');
    const ocrStatus = document.getElementById('ocr-status');
    const resultOverlay = document.getElementById('scanner-result-overlay');
    const detectedVal = document.getElementById('detected-val');
    const rawOcrText = document.getElementById('raw-ocr-text');
    const debugCanvas = document.getElementById('ocr-debug-canvas');
    const acceptBtn = document.getElementById('accept-ocr');

    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } }
        });
        video.srcObject = cameraStream;
    } catch (err) {
        console.error("Camera access error:", err);
        showAlert("Erreur d'accès à la caméra. Vérifiez les permissions.");
        stopCameraScanner();
        return;
    }

    captureBtn.onclick = async () => {
        captureBtn.disabled = true;
        ocrStatus.style.display = 'block';

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0);

        // Crop center area for better accuracy
        const cropW = canvas.width * 0.6;
        const cropH = canvas.height * 0.2;
        const cropX = (canvas.width - cropW) / 2;
        const cropY = (canvas.height - cropH) / 2;

        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = cropW;
        cropCanvas.height = cropH;
        cropCanvas.getContext('2d').drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

        // Show preview in debug canvas
        debugCanvas.width = cropW;
        debugCanvas.height = cropH;
        debugCanvas.getContext('2d').drawImage(cropCanvas, 0, 0);

        try {
            const { data: { text } } = await Tesseract.recognize(cropCanvas, 'eng', {
                logger: m => console.log(m)
            });

            console.log("OCR Result:", text);
            rawOcrText.innerText = text || "Aucun texte détecté";

            // Find price patterns (numbers with ¥ or just numbers)
            const prices = text.match(/\d+([.,]\d+)?/g);
            if (prices && prices.length > 0) {
                // Find the largest number (usually the price)
                const mainPrice = Math.max(...prices.map(p => parseFloat(p.replace(',', '.'))));
                detectedVal.innerText = mainPrice + " ¥";

                resultOverlay.style.display = 'block';
                acceptBtn.onclick = () => {
                    if (targetInputId) {
                        const input = document.getElementById(targetInputId);
                        if (input) input.value = mainPrice;
                    }
                    stopCameraScanner();
                };
            } else {
                showAlert("Aucun prix détecté. Essayez de vous rapprocher de l'étiquette.");
                captureBtn.disabled = false;
            }
        } catch (err) {
            console.error("OCR Error:", err);
            showAlert("Erreur lors de l'analyse de l'image.");
            captureBtn.disabled = false;
        } finally {
            ocrStatus.style.display = 'none';
        }
    };
};

window.stopCameraScanner = () => {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    const overlay = document.querySelector('.scanner-overlay');
    if (overlay) overlay.remove();
};

// Initialisation des événements de navigation
const initNav = () => {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.onclick = () => {
            const view = btn.dataset.view;
            if (view) {
                switchView(view);
            }
        };
    });
};

// Auto-fix: force reload if data is outdated (less than 7 stores or less prices than expected)
if (state.stores.length < 7 || state.prices.length < 50) {
    console.log("Forcing data reset to initial defaults...");
    state.products = [...initialData.products];
    state.stores = [...initialData.stores];
    state.prices = [...initialData.prices];
    saveState();
}

const resetToDefaults = () => {
    if(confirm("Voulez-vous restaurer les 28 produits et les 7 magasins par défaut ? (Ceci effacera vos modifications personnelles)")) {
        state.products = [...initialData.products];
        state.stores = [...initialData.stores];
        state.prices = [...initialData.prices];
        saveState();
        location.reload();
    }
};

// Initial render & nav
initNav();
render();

// Auto-sync on startup if URL is set
if (state.sheetSyncUrl) {
    syncPull();
}
