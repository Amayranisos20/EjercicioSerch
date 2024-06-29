const arrayUno = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = arrayUno.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

const initialValueDos = 1;
const productWithInitial = arrayUno.reduce(
    (accumulator, currentValue) => accumulator*currentValue, initialValueDos,
);


console.log(`La suma es ${sumWithInitial}.`);
console.log(`El producto es ${productWithInitial}.`);