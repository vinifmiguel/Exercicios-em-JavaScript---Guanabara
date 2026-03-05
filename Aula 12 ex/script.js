function carregar() {

    const msg = document.querySelector('#msg');
    const img = document.querySelector('#foto img');

    const data = new Date();
    const hora = data.getHours();


    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        img.src = "manhã.png"
        document.body.style.backgroundColor = "#e2cd9f";

    } else if (hora >= 12 && hora <= 18) {
        img.src = "tarde.png"
        document.body.style.backgroundColor = "#b9846f";

    } else {
        img.src = "noite.png"
        document.body.style.backgroundColor = "#515154";
    }

}