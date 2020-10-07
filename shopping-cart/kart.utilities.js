
import { kittens } from '../products/data.js';
import { findById } from '../utils.js';
import { cartArray } from './kart-data.js';


// const cartItem = {
// id: ''
// quantity: 3


// TOTAL FUnction-----------------------------------------------------------


// const totalCell = document.getElementById('total'); 

// const total = cartTotal(cartArray);
// totalCell.textContent = `Total: $${total}`;

// function cartTotal(cartArray) {
//     let accumulator = 0;
//     for (const item of cartArray) {
//         const trueItem = findById(cartArray, item.cerealNumber);
//         const subtotal = trueItem.price * item.quantity;
//         accumulator = accumulator + subtotal;
//     }
// }

// End TOTAL FUNCTION-------------------------------------------------------

// Render Table Function----------------------------------------------------

// export function renderTableRow(cartItem) {
//     const tr = document.createElement('tr');
//     const tdTitle = document.createElement('td');
//     const tdPrice = document.createElement('td');
//     const tdQuantity = document.createElement('td');
//     const tdTotal = document.createElement('td');




        // texting item where I want it to go 
// tdQuantity.textContent = cartItem.quantity;

        // er need the name and price
        // the name of the price of the kitten item live in the source of truth 
        // we should use our findByIf function to get the data from source of truth 

// const kittenData = findById(kittens, cartItem.id);

        // data is an object that has tittle brand imade description price total 

// const price = kittenData.price;
// const title = kittenData.title;

// tdPrice.textContent = `$${price}`;
// tdTitle.textContent = title;


        // needs to be function
// tdTotal.textContent = `$${price * cartItem.quantity}`;


        // appending everything to table
// tr.append(tdTitle, tdPrice, tdQuantity, tdTotal);


         // returning table
// return tr;

// END Render TABLE FUNCTION--------------------------------------------------------------------------
}