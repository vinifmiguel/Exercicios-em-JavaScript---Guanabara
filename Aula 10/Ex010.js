const botao = document.querySelector('#btnSomar')
        botao.addEventListener('click', somar)

        function somar() {
            const tn1 = document.querySelector('input#txtn1')
            const tn2 = document.querySelector('input#txtn2')
            const res = document.querySelector('#res')

            const n1 = Number(tn1.value)
            const n2 = Number(tn2.value)
            const soma = n1 + n2

            res.innerHTML = `O valor de ${n1} com a soma de ${n2} é: ${soma}`

        }