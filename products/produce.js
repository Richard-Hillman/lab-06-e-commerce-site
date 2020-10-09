import { getImpoundedKittens } from '../utils.js';
import { renderKittens } from './kitty-render.js';

const impoundedKittens = getImpoundedKittens();


const ul = document.getElementById('lisps');
for (let i = 0; i < impoundedKittens.length; i++) {
    const item = impoundedKittens[i];
    const li = renderKittens(item);

    ul.appendChild(li);
}