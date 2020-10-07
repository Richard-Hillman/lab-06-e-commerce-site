import { kittens } from './products/data.js';

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];   
        if (item.id === someId) {
            return item;
        }
    }
}

export function calcTotal(cartArray) {
    let accumulator = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const actualItem = findById(kittens, item.id);
        const subTotal = actualItem.price * item.quantity;
        accumulator = accumulator + subTotal;
    }
    return accumulator;

}

