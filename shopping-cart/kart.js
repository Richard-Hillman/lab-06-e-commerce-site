import { renderTableRow } from './kart.utilities.js';
import { kittens } from '../products/data.js';
import { calcTotal } from '../utils.js';
import { getFromLocalStorage } from '../products/kitty-render.js';

const table = document.querySelector('tbody');
const orderButton = document.querySelector('button');
const cart = getFromLocalStorage('CART') || [];

for (let i = 0; i < cart.length; i++) {
    const kitty = cart[i];
    const tr = renderTableRow(kitty);
    table.appendChild(tr);
}

const totalCell = document.querySelector('.grandTotal');
const total = calcTotal(cart, kittens);

totalCell.textContent = `total: ${total}`;

orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    // localStorage.removeItem(CART);
    // localStorage.clear();
    window.location.href = '/';
});

// 

