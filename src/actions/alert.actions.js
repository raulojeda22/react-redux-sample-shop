import { alertConstants } from '../constants';
import { toast } from 'react-toastify';

/**
 * Configura el toaster
 */
toast.configure({
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500
});

export const alertActions = {
    success,
    error,
    clear
};

/**
 * Mostra el missatge argumentat en un toaster positiu
 *
 * @param {string} message
 */
function success(message) {
    toast.success(message);
    return { type: alertConstants.SUCCESS, message };
}

/**
 * Mostra el missatge argumentat en un toaster negatiu
 *
 * @param {string} message
 */
function error(message) {
    toast.error(message);
    return { type: alertConstants.ERROR, message };
}

/**
 * S'utilitzaria per a netejar les alertes
 */
function clear() {
    return { type: alertConstants.CLEAR };
}