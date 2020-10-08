import { renderTableRow } from './kart.utilities.js';
import { cartArray, kittens } from '../products/data.js';
import { calcTotal } from '../utils.js';

const table = document.querySelector('tbody');
for (let i = 0; i < cartArray.length; i++) {
    const kitty = cartArray[i];
    
    const tr = renderTableRow(kitty);
    table.appendChild(tr);
}

const totalCell = document.querySelector('.grandTotal');
const total = calcTotal(cartArray, kittens);

totalCell.textContent = `total: ${total}`;

