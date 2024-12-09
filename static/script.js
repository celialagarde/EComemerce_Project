// Liste des produits simulée côté client
const products = [
    { id: 1, name: "Produit 1", price: 2300 },
    { id: 2, name: "Produit 2", price: 4800 }
];


const productList = document.getElementById('product-list');


// Affichage dynamique des produits
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${(product.price / 100).toFixed(2)} €</p>
            <button onclick="buyProduct(${product.id})">Acheter</button>
    `;
    productList.appendChild(productDiv);
});




function buyProduct(productId) {
    console.log(`Produit sélectionné : ${productId}`);
}
