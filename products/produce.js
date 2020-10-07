import { kittens } from './data.js';
import { renderKittens } from './kitty-render.js';


const ul = document.getElementById('lisps');

for (let i = 0; i < kittens.length; i++) {
    const item = kittens[i];
    const li = renderKittens(item);


    ul.appendChild(li);
}