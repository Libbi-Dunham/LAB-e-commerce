import { movies } from '../data/movies.js';
import { cart } from '../data/cart-data.js';
import { calculatorOrderTotal, findById } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const moviesData = findById(cartItem.id, movies);
    const tr = renderLineItems(cartItem, moviesData);
    tbody.appendChild(tr);
}
const orderTotal = calculatorOrderTotal(cart, movies);
const tdOrdertotal = document.getElementById('total');
tdOrdertotal.textContent = (orderTotal);
