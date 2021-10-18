export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function calculatorOrderTotal(cart, movies) {
    let orderTotal = 0;
    for (let item of cart){
        const movie = findById(item.id, movies);
        orderTotal = orderTotal + movie.price * item.qty;
    }
    return orderTotal;
}

export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart; 
}

export function addItem(id){
    const cart = getCart();
    console.log(cart);
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

import { movies } from './data/movies.js';


export function getProducts(){
    let lsProducts = localStorage.getItem('PRODUCTS');
    const products = JSON.parse(lsProducts);

    if (!products){
        const moviesString = JSON.stringify(movies);
        localStorage.setItem('PRODUCTS', moviesString);
    }
    return products || movies;
}