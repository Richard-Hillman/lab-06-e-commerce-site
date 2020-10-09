// IMPORT MODULES under test here:
// import { example } from '../example.js';

// IMPORTS------------------------------------------------------------------------------------------------------
import { renderKittens } from '../products/kitty-render.js';
import { findById, addKitten } from '../utils.js';
import { kittens } from '../products/data.js';
import { calcTotal, calcLineSub, getImpoundedKittens } from '../utils.js';
import { renderTableRow } from '../shopping-cart/kart.utilities.js';
import { PRODUCTS } from '../constants.js';

// const localStorageKittens = getImpoundedKittens();

// --------------------------------------------------------------------------------------------------

const test = QUnit.test;

// renderKittens Test---------------------------------------------------------------------------------------------------

test('Should take in a kitten and return appropriate attire', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const kitten = {  
        title: 'CAT MASK',
        brand: 'PAWDDYMOUTH',
        previewImage: '../assets/kittenmask.jpg',
        description: 'Is your cat a pawddy mouth? Shut em up NOW! Buy the kitty face stopper now! WARNING: Product does not significantly quiet cat and may cause noiser cat as unintended side effect.',
        price: '$93.00',
        idValue: 'Add to cart', 
    };
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    
    const expected = '<li class="kitten"><p class="title">CAT MASK</p><p class="brand">PAWDDYMOUTH</p><img class="preview-image" src="../assets/kittenmask.jpg"><p class="description">Is your cat a pawddy mouth? Shut em up NOW! Buy the kitty face stopper now! WARNING: Product does not significantly quiet cat and may cause noiser cat as unintended side effect.</p><p class="price">$93.00</p><button>Add to cart</button></li>';
    
    const actual = renderKittens(kitten);
    
    expect.equal(actual.outerHTML, expected);

});
// END renderKittens test -------------------------------------------------------------------------------------------------------


// FINDBYID FUNCTION test

test('go through an array and return the cerealNumber of my findById function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected =
            {  
                title: 'CAT MASK',
                brand: 'PAWDDYMOUTH',
                previewImage: '../assets/kittenmask.jpg',
                description: 'Is your cat a pawddy mouth? Shut em up NOW! Buy the kitty face stopper now! WARNING: Product does not significantly quiet cat and may cause noiser cat as unintended side effect.',
                price: 93.00,
                id: 'mask1',
            };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(kittens, expected.id);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

// END OF FINDBYID-----------------------------------------------------------------------------------------------------------------------------



// CALCLINESUB TEST ----------------------------------------------------------------------------

test('calculate the amount of a line item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const price = 10;
    const quantity = 2; 
    const expected = 20; 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineSub(quantity, price);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);

});

// ------------------------------------------------------------------------------------------------

// CALTOTAL TEST-----------------------------------------------------------------------------------



// CALCTOTAL TEST ----------------------------------------------------------------------------------------------------------------------------


test('Write a function that returns value of quantity times item price aka line price', (expect) => {

    const cartArray = [
        {
            id: 'mask1',
            quantity: 1, 
        },
        {
            id: 'bag1',
            quantity: 1,
        },
        {
            id: 'net1',
            quantity: 1,
        },
        {
            id: 'mitten1',
            quantity: 1,
        },
        {
            id: 'bunny1',
            quantity: 1,
        },
    ];
    



    const actual = calcTotal(cartArray, kittens);
    
    const expected = 639;

    
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    
   
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
    
});

// END CALCLINEITEM TEST -----------------------------------------------------------------------------------------------------------------------


// RENDER TABLE TDD------------------------------------------------------------------------------------


test('should take in a kitten and return a tr element with appropriate contents', (expect) => {
    
    const cartItem = {
        id: 'mask1',
        quantity: 1, 
    };

    const expected = '<tr><td>CAT MASK</td><td>$93.00</td><td>1</td><td>$93.00</td></tr>';

    const actual = renderTableRow(cartItem);

    expect.equal(actual.outerHTML, expected);

    
});

// End Render TAble TDD------------------------------------------------------------------------------------------------------------

// NEW RENDER TABLE TEST------------------------------------------------------------------------------

test('addKitten should take in a product object and add it to local storage(returning nothing)', (expect) => {
    
    const newKitten = {
        id: 'mask1',
        quantity: 1 
    };
    const expectation = [
        {  
            title: 'CAT MASK',
            brand: 'PAWDDYMOUTH',
            previewImage: '../assets/kittenmask.jpg',
            description: 'Is your cat a pawddy mouth? Shut em up NOW! Buy the kitty face stopper now! WARNING: Product does not significantly quiet cat and may cause noiser cat as unintended side effect.',
            price: 93,
            id: 'mask1',
        }, 
    
        {  
            title: 'CAT BAG',
            brand: 'PAWSIONALY FUN',
            previewImage: '../assets/kitten.jpg',
            description: 'Does your cat look like garbage? Put them in a bag! (Fully breathable bag) WARNING: DO not put cat head in bag.',
            price: 47,
            id: 'bag1',
        },
    
        {  
            title: 'KITTEN MITS 49000',
            brand: 'PAWTACULAR',
            previewImage: '../assets/kittenmit3.jpg',
            description: 'Your cat has claws and paws! Put SOME MITTENS ON THEM OR get PAWNCHED',
            price: 85,
            id: 'mitten1',
        },
        {  
            title: 'CAT NET',
            brand: 'PAWNGERIE',
            previewImage: '../assets/kittensink.jpg',
            description: 'Is your cat getting ready for a night in heat. Get them in our sexy cat net and give them a bath!',
            price: 411,
            id: 'net1',
        }, 
    
        {  
            title: 'CAT BUNNY',
            brand: 'PAWBUN',
            previewImage: '../assets/catbunny.jpg',
            description: 'Don\'t like you\'re cat? turn them into a bunny!',
            price: 3,
            id: 'bunny1',
        },

        {
            id: 'mask1',
            quantity: 1 
        }
    ];
    
    // const expected localStorageBefore = localStorage.getItem('kittens');

    addKitten(newKitten);

    const localStorageAfter = JSON.parse(localStorage.getItem(PRODUCTS));

    expect.deepEqual(expectation, localStorageAfter);

    
});