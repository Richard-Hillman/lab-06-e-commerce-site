import { renderTableRow } from './kart.utilities.js';
import { cartArray, kittens } from '../products/data.js';
import { calcTotal } from '../utils.js';
import { getFromLocalStorage, CART } from '../products/kitty-render.js'

const table = document.querySelector('tbody');
const orderButton = document.querySelector('button')

const cart = getFromLocalStorage(CART) || [];

for (let i = 0; i < cartArray.length; i++) {
    const kitty = cartArray[i];
    
    if (kittens.quantity >= 0) {
        const tr =renderTableRow(kitten);
        table.appendChild(tr);
    }
}

const totalCell = document.querySelector('.grandTotal');
const total = calcTotal(cartArray, kittens);

totalCell.textContent = `total: ${total}`;

orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    // localStorage.removeItem(CART);
    // localStorage.clear();
    window.location.href = '/';
});

// 


// const table = document.querySelector('tbody');
// for (let i = 0; i < cartArray.length; i++) {
//     const kitty = cartArray[i];
    
//     const tr = renderTableRow(kitty);
//     table.appendChild(tr);
// }