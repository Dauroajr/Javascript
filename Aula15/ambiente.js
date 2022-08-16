
let num = [5, 8, 2, 9, 3]
console.log(`Este vetor é o ${num}.`);
num.push(7) // insere o valor '7' no final do array
num[6] = 6 // insere o valor '6' naposição 6 (index 6) do array
num.sort();
console.log(`Agora, o vetor é o ${num}.`);
console.log(`O vetor tem ${num.length} posições.`);

for (let pos = 0; pos<num.length; pos++) {
    console.log(num[pos]);
}
