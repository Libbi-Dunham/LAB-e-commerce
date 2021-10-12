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
