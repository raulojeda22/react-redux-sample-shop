import { ducks } from '../helpers';

export const duckService = {
    list
};

function list() {
    return Promise.resolve(ducks);
}
