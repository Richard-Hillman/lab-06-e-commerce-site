
import { kittens } from '../products/data.js';
import { findById } from '../utils.js';
import { calcLineSub } from '../utils.js';

// Render Table Function----------------------------------------------------

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');
    

    // texting item where I want it to go 
    
    // er need the name and price
    // the name of the price of the kitten item live in the source of truth 
    // we should use our findByIf function to get the data from source of truth 
    
    const kittenData = findById(kittens, cartItem.id);
    const title = kittenData.title;

    const price = (kittenData.price).toFixed(2);
    const total = calcLineSub(cartItem.quantity, kittenData.price);
    const subTotal = total.toFixed(2);
    // data is an object that has tittle brand imade description price total 
    
    tdTitle.textContent = title;
    tdPrice.textContent = `$${price}`;
    tdQuantity.textContent = cartItem.quantity;
    tdTotal.textContent = `$${subTotal}`;
    
    tr.append(tdTitle, tdPrice, tdQuantity, tdTotal);

    
    return tr;
}
// issue=========================================================================================================
// const subTotal = calcLineSub(cartItem.quantity, cartItem.price); 

    // needs to be function
  
//================================================================================================================


    // appending everything to table
    
    //  returning table
   
    
    // END Render TABLE FUNCTION--------------------------------------------------------------------------
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