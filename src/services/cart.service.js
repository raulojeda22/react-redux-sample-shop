import { ducks } from '../helpers';
let cart = JSON.parse(localStorage.getItem('cart'));

export const cartService = {
    get,
    add,
    remove
};

function get() {
    return Promise.resolve(cart);
}

function add(duck) {
    console.log(add);
}

function remove(add) {
    console.log(add);
}