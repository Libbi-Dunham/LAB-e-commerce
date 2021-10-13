export function renderMovies(movies){
    const moviesCard = document.createElement('div');
    moviesCard.classList.add('movies-card');
    
    const moviesHeader = document.createElement('h2');
    moviesHeader.textContent = movies.name;

    const moviesReviews = document.createElement('h3');
    moviesReviews.textContent = `Review of movie: ${movies.reviews}`;

    const moviesPrice = document.createElement('h3');
    moviesPrice.textContent = `Price of movie: $${movies.price}`;

    const rentButton = document.createElement('button');
    rentButton.textContent = 'Rent';
    rentButton.id = movies.id;
    rentButton.classList.add('rent-button');

    const img = document.createElement('img');
    img.src = movies.img;

    moviesCard.append(moviesHeader, img, moviesReviews, moviesPrice, rentButton);
    return moviesCard;
}