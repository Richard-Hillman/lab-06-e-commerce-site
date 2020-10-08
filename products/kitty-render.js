import { findById } from '../utils';


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
    
    button.addEventListener('click', () => {
        const cart = getFromLocalStorage('CART') || [];  

        const itemInCart = findById(cart, kitten.id);

        if (itemInCart === undefined) {

            const newCartItem = {
                id: kitten.id,
                quantity: 1
            };

            cart.push(newCartItem);
        } else {
            itemInCart.quantity++;
        }

        setInLocalStorage('CART', cart);
    });
    
    li.appendChild(button);

    return li;

}    
    
export function getFromLocalStorage(key) {
    const retrievedKey = localStorage.getItem(key);
    return JSON.parse(retrievedKey);
}
    
   
export function setInLocalStorage(key, value) {
    const stringifiedItem = JSON.stringify(value);
    localStorage.setItem(key, stringifiedItem);   
}
    

