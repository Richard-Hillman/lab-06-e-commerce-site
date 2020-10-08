// --------------------------------------------------------------------------------


export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];   
        if (item.id === someId) {
            return item;
        }
    }
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