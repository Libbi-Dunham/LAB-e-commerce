import { renderMovies } from './render.js';
// import { movies } from './data/movies.js';
import { addItem, getProducts } from './utils.js';

const productList = document.getElementById('movies-list');

const movies = getProducts();
for (let movie of movies){
    const moviesCard = renderMovies(movie);
    productList.append(moviesCard);
}

const rentButtons = document.querySelectorAll('.rent-button');
for (let rentBtn of rentButtons){
    rentBtn.addEventListener('click', ()=>{
        addItem(rentBtn.id);
    });
}
