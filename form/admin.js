import { getImpoundedKittens } from '../utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form); 
    const title = data.get('title');
    const brand = data.get('brand');
    const preview = data.get('preview');
    const description = data.get('description');
    const price = data.get('price');
    const id = data.get('id');

    const newKitten = {
        title: title,
        brand: brand,
        preview: preview,
        description: description,
        price: Number(price),
        id: id, 
    };

    const localStorageKittens = getImpoundedKittens();

    localStorageKittens.push(newKitten);

    const stringyLocalKitten = JSON.stringify(localStorageKittens);
    localStorage.setItem('PRODUCTS', stringyLocalKitten);
})