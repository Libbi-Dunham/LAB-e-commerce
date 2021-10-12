import { renderMovies } from './render.js';
import { movies } from '../data/movies.js';

const productList = document.getElementById('movies-list');

for (let movie of movies){
    const moviesCard = renderMovies(movie);
    productList.append(moviesCard);
}
