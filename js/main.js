function verificar() {
    const data = new Date()
    const anoAtual = data.getFullYear()
    const formularioAno = document.querySelector('#ano')
    const resposta = document.querySelector('#resposta')

    if (formularioAno.value.length == 0 || formularioAno.value > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        const sexo = document.getElementsByName('sexo')
        let idade = anoAtual - formularioAno.value
        let genero = ''

        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'foto-bebe-homem.png')
            } else if (idade < 13) {
                //criança
                img.setAttribute('src', 'foto-crianca-homem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-homem.png')
            }

        }else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'foto-bebe-mulher.png')
            } else if (idade < 13) {
                //criança
                img.setAttribute('src', 'foto-crianca-mulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-mulher.png')
            }
        }
        resposta.style.color = 'red'
        resposta.style.fontWeight = 'bold'
        resposta.innerHTML = `${genero} com ${idade} anos`
        resposta.appendChild(img)
        img.style.width = '150px'
    }

    
}