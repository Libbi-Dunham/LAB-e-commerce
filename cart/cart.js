import { movies } from '../data/movies.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const moviesData = findById(cartItem.id, movies);

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = moviesData.name;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = moviesData.price;
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty * moviesData.price;

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    tbody.appendChild(tr);
}