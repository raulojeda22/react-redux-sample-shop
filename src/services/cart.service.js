import { ducks } from '../helpers';
let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    localStorage.setItem('cart',JSON.stringify({}));
    cart = {};
}
export const cartService = {
    get,
    add,
    remove
};

function get() {
    return Promise.resolve(cart);
}

function add(duckId) {
    console.log(duckId);
    if (cart[duckId] == null) {
        cart[duckId] = 1;
    } else {
        cart[duckId]++;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return Promise.resolve(duckId);
}

function remove(add) {
    console.log(add);
}