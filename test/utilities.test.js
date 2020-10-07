// IMPORT MODULES under test here:
// import { example } from '../example.js';

// IMPORTS------------------------------------------------------------------------------------------------------
import { renderKittens } from '../products/kitty-render.js';
// import { findById, calcTotal } from '../utils.js';
// import { kittens, cartArray } from '../products/data.js';
import { findById, calcTotal } from '../utils.js';
import { kittens } from '../products/data.js';



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


// CALCTOTAL TEST ----------------------------------------------------------------------------------------------------------------------------
test('Write a function that returns value of quantity times item price aka line price', (expect) => {
    //Arranimport { findById, calcTotal } from '../utils.js';
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
    
    
    // Set up your arguments and expectations
    const expected = 639;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = calcTotal(cartArray, kittens); 
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
    
});

// END CALCLINEITEM TEST -----------------------------------------------------------------------------------------------------------------------


// RENDER TABLE TDD

// import { renderTableRow } from '../shopping-cart/kart.utilities.js';


// test('should take in a kitten and return a tr element with appropriate contents', (expect) => {
//     const cartItem = {
//         cerealNumber: 'mask1',
//         quantity: 3,
//     };


//     const expected = '<tr><td>Cat Mask</td><td>PAWDYMOUTH</td><td>93.00</td><td>1</td><td>93.00</td></tr>';

//     const actual = renderTableRow(cartItem);

//     expect.equal(actual.outerHTML, expected);

// });

// End Render TAble TDD------------------------------------------------------------------------------------------------------------