let cart = JSON.parse(localStorage.getItem('cart'));
let ducks = JSON.parse(localStorage.getItem('ducks'));
if (!cart) {
    localStorage.setItem('cart',JSON.stringify({}));
    cart = {};
}
export const cartService = {
    get,
    add,
    remove,
    order
};

function get() {
    return Promise.resolve(cart);
}

function add(duckId) {
    if (cart[duckId] == null) {
        cart[duckId] = ducks.filter(duck => {
            return duck.id === parseInt(duckId);
        })[0];
        cart[duckId].total = 1;
    } else {
        cart[duckId].total++;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return Promise.resolve(duckId);
}

function remove(duckId) {
    if (cart[duckId] !== null && cart[duckId].total !== 0) {
        cart[duckId].total--;
        if (cart[duckId].total === 0) {
            delete cart[duckId];
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return Promise.resolve(duckId);
}

function order(name, address, cardNumber) {
    cart = {};
    localStorage.setItem('cart', JSON.stringify(cart));
    return Promise.resolve({name, address, cardNumber});
}