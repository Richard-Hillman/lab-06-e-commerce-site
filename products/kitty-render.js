/* 
title: 'CAT MASK',
brand: 'PAWDDYMOUTH',
previewImage: '../assets/kittenmask.jpg',
description: 'Is your cat a pawddy mouth? Shut em up NOW! Buy the kitty face stopper now! WARNING: Product does not significantly quiet cat and may cause noiser cat as unintended side effect.',
price: 93.00,
idValue: 'a1',
*/

export function renderKittens(kitten) {

    const li = document.createElement('li');
    
    li.classList.add('kitten');
    
    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = kitten.title;
    li.appendChild(title);


    const brand = document.createElement('p');
    brand.classList.add('brand');
    brand.textContent = kitten.brand;
    li.appendChild(brand);


    const previewImage = document.createElement('img');
    previewImage.classList.add('preview-image');
    previewImage.src = `${kitten.previewImage}`;
    li.appendChild(previewImage);

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = kitten.description;
    li.appendChild(description);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = kitten.price;
    li.appendChild(price);


    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    li.appendChild(button);

    

    return li;

}