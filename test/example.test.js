import { renderMovies } from '../render.js';
import { movies } from '../data/movies.js';
import { findById, addItem, getCart } from '../utils.js';

const test = QUnit.test;

test('renderMovies needs to return an html snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="movies-card"><h2>The Avengers</h2><img src="../assets/avengers.jpg"><h3>Review of movie: 5</h3><h3>Price of movie: $3</h3></div>`;
    const avengers = movies[0];

    const actual = renderMovies(avengers).outerHTML;

    expect.equal(actual, expected);
});

test('renderMovies needs to return an html snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="movies-card"><h2>Star Wars</h2><img src="../assets/starwars.jpg"><h3>Review of movie: 2</h3><h3>Price of movie: $5</h3></div>`;
    const starwars = movies[1];

    const actual = renderMovies(starwars).outerHTML;

    expect.equal(actual, expected);
});

test('renderMovies needs to return an html snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="movies-card"><h2>Jurassic Park</h2><img src="../assets/jurassic.jpg"><h3>Review of movie: 4</h3><h3>Price of movie: $2</h3></div>`;
    const jurassicpark = movies[2];

    const actual = renderMovies(jurassicpark).outerHTML;

    expect.equal(actual, expected);
});

test('renderMovies needs to return an html snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="movies-card"><h2>Pirates of the Caribbean</h2><img src="../assets/pirates.jpg"><h3>Review of movie: 3</h3><h3>Price of movie: $6</h3></div>`;
    const pirates = movies[3];

    const actual = renderMovies(pirates).outerHTML;

    expect.equal(actual, expected);
});

test('renderMovies needs to return an html snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="movies-card"><h2>Avatar</h2><img src="../assets/avatar.jpg"><h3>Review of movie: 5</h3><h3>Price of movie: $7</h3></div>`;
    const avatar = movies[4];

    const actual = renderMovies(avatar).outerHTML;

    expect.equal(actual, expected);
});

test('findById should return the item matching the ID', (expect) =>{
    const expected = {
        id: '1',
        name: 'The Avengers',
        img: '../assets/avengers.jpg',
        reviews: 5,
        price: 3.00
    };

    const actual = findById('1', movies);
    expect.deepEqual(actual, expected);
});

test('getCart should return the cart if it exisits', (expect)=>{
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '2', qty: 3 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    const cart = getCart();
    expect.deepEqual(cart, fakeCart);
});

test('getCart should return an empty array if the cart does not exist', (expect)=>{
    localStorage.removeItem('CART');
    const cart = getCart();
    expect.deepEqual(cart, []);

});

test('addItem should add the quantity if the item in cart', (expect)=>{
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '2', qty: 3 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    addItem('1');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 3 },
        { id: '2', qty: 3 }
    ];
    expect.deepEqual(cart, expected);
});

test('addItem should add an item if its not already there', (expect) =>{
    localStorage.removeItem('CART');
    const expected = [{ id: '1', qty: 1 }];
    addItem('1');
    const cart = getCart();
    expect.deepEqual(cart, expected);
});




