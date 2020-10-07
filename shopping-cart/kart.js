import { renderTableRow } from './kart.utilities.js';
import { cartArray, kittens } from '../products/data.js';
import { calcTotal } from '../utils.js';

const table = document.querySelector('tbody');
for (let i = 0; i < cartArray; i++) {
    const kittens = cartArray[i];
        
    const tr = renderTableRow(kittens);
    table.appendChild(tr);
}

const total = calcTotal(cartArray, kittens);
const totalCell = document.querySelector('.grandTotal');

totalCell.textContent = `total: ${total}`;

