import { kittens as hardCats } from './products/data.js';
import { PRODUCTS } from './constants.js';
import { setInLocalStorage } from './products/kitty-render.js';

// --------------------------------------------------------------------------------


export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];   
        if (item.id === someId) {
            return item;
        }
    }
}


// ---------------------------------------------------------------------------------


export function getImpoundedKittens() {

    let localStorageKittens = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageKittens) {
        const stringyKittens = JSON.stringify(hardCats);
        localStorage.setItem(PRODUCTS, stringyKittens);
        localStorageKittens = hardCats;
    }

    return localStorageKittens;

}


// ------------------------------------------------------------------------------------


export function calcLineSub(quantity, price) {
    return quantity * price;
}


// ------------------------------------------------------------------------------------


export function calcTotal(cartArray, item) {
    let cartTotal = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const lineItem = cartArray[i];
        const cartItem = findById(item, lineItem.id);
        const lineTotal = calcLineSub(lineItem.quantity, cartItem.price);
        cartTotal += lineTotal;
    }
    return cartTotal;
}


// ---------------------------------------------------------------------------------

export function addKitten(myKitten) {
// get kitten array from data
    const productArray = getImpoundedKittens(PRODUCTS);
// push new kitten into array
    productArray.push(myKitten);
// save the kitten in product array 
    setInLocalStorage(PRODUCTS, productArray);

}

