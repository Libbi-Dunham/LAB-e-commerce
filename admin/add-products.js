import { addProduct } from '../utils.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = new FormData(form);
    const newMovies = {
        id: data.get('id'),
        name: data.get('name'),
        img: data.get('img'),
        reviews: data.get('reviews'),
        price: Number(data.get('price'))
    
    };
    console.log(newMovies);
    addProduct(newMovies);
    alert('Movie Rented!');
    form.reset();

});