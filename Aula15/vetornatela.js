let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/* console.log(valores);
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);
 */

for (pos = 0; pos < valores.length; pos++) {
    console.log(`A ${ pos + 1 }ª posição tem o valor ${ valores[pos] }`);

}
console.log(' ');
// ou também pode-se escrever:

/* for (let pos in valores) {
    console.log(`A ${ pos }ª posição tem o valor ${ valores[pos] }`);
} */ /* esta sintaxe só vale para arrays e objetos */
console.log(valores.indexOf(4))
console.log(valores.indexOf(5))
