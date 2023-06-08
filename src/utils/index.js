
/**
 * This function calculates total price of a new order;
 * @param {Array} products cartProducts: Array of Objects 
 * @returns {number} Total price
 */

export const totalPrice = (products) => {

    let suma = 0;

    products.forEach((product) => { suma += product.price });

    return suma;

}

