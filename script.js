function findMax(arr) {
    // Caso base: Si el arreglo tiene un solo elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid); // Primer mitad del arreglo
    const right = arr.slice(mid);   // Segunda mitad del arreglo

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos de ambas mitades
    return Math.max(leftMax, rightMax);
}

function showMax() {
    const numbers = [3, 8, 2, 10, 5, 7];
    const max = findMax(numbers);
    document.getElementById('resultado').innerText = `El número máximo en el arreglo es: ${max}`;
}
