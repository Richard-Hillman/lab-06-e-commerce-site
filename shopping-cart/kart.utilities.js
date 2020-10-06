
import { kitten as kittenArray } from '../products/data.js';

function findById(someArray, someId) {
    for(let i=0; i < someArray.length; i++) {
        const item = someArray[i];   
        if (item.id === someId) {
        return item;
        };
    };
};



// const cartItem = {
// id: ''
// quantity: 3
export function renderTableRow() {
        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        const tdBrand = document.createElement('td');
        const tdPreview = document.createElement('td');
        const tdDescription = document.createElement('td');
        const tdPrice = document.createElement('td');
        const tdIdValue = document.createElement('td');

};

const total = cartTotal(cart);

totalCell.textCont =`Total: $${total}`;


function cartTotal(cartArray) {

    let accumulator = 0;


    for (const item of cartArray) {
        const trueItem = findById(data.item.id);

        const subtotal = trueItem.price * item.quantity;

        accumulator = accumulator + subtotal;
    }
}

tdQuantity.textContent = cartItem.quantity;

// er need the name and price
// the name of the price of the kitten item live in the source of truth 
// we should use our findByIf function to get the data from source of truth 

const.data = findById(kittenArray, cartItem.id);

// data is an object that has tittle brand imade description price total 

const price = data.price;
const title = data.tdTitle;

tdPrice.textContent = `$${price}`;
tdName.textContent = title;
toTotal.textContent= `$${price * cartItem.quantity}`;

tr.append(tdTitle, tdBrand, tdPreview, tdDescription, tdPrice, tdIdValue);

return tr;