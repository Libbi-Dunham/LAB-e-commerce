export function renderLineItems(cartItem, moviesData) {

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

    return tr;
}
