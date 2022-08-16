
function add() {
    let num = document.getElementById('num');
    let lst = document.getElementById('list');
} if (num.value.length == 0 || num.value.length < 1 || num.value.length > 100) {
    window.alert('Digite um número válido!')
} else {
    let n = Number(num.value);
    let c = 1;
    lst.innerHTML = '';
    while (1 <= n <= 100) {
        let item = document.createElement('option')
        item.text =`${c}`
        lst.appendChild(item)
    }
}
