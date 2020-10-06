import { kitten } from './data.js';
import { renderKittens } from './kitty-render.js';


const ul = document.getElementById('lisps');

for (let i = 0; i < kitten.length; i++) {
    const item = kitten[i];
    const li = renderKittens(item);


    ul.appendChild(li);
}