export function renderMovies(movies){
    const moviesCard = document.createElement('div');
    moviesCard.classList.add('movies-card');
    
    const moviesHeader = document.createElement('h2');
    moviesHeader.textContent = movies.name;

    const img = document.createElement('img');
    img.src = movies.img;

    moviesCard.append(moviesHeader, img);
    return moviesCard;
}