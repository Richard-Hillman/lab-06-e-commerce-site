// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderKittens } from '../products/kitty-render.js';

const test = QUnit.test;

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