function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const fAno = document.getElementById('txtano');
    const res = document.querySelector('div#res');

    if (fAno.value.length == 0 || Number(fAno.value) < 1900 || Number(fAno.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        const fSex = document.getElementsByName('sex');
        const idade = ano - Number(fAno.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto'); 

        if (fSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-menino.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.png');
            } else {
                img.setAttribute('src', 'idoso-homem.png');
            }

        } else if (fSex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-menina.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.png');
            } else {
                img.setAttribute('src', 'idosa-mulher.png');
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`;
        res.appendChild(img);
    }
}