function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        /* res.innerHTML = `Idade calculada: ${idade}` */
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/crianca_masc.png')
                /* img.style.textAlign = 'center'
                img.style.justifyItems = 'center' */
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem_masc.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto_masc.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso_masc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/crianca_fem.png')
                /* img.style.textAlign = 'center'
                img.style.justifyItems = 'center' */
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem_fem.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto_fem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idosa_fem.png')
            }

        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${ genero } com ${ idade } anos.`;
        res.appendChild(img)

    }
}
