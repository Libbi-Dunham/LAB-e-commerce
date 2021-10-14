import { renderMovies } from './render.js';
import { movies } from './data/movies.js';
import { addItem } from './utils.js';

const productList = document.getElementById('movies-list');

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
