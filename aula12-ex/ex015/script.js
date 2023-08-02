function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO: Verifique os dados inseridos e tente novamente.')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var genero = 'null'
        var img = document.createElement('img') //criando um espaço de img no js ao inves do HTML
        img.setAttribute('id', 'foto') //definindo o ID da imagem
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 23) {
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultohomem.png')
            } else {
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 23) {
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultomulher.png')
            } else {
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //adicionar a imagem abaixo do restante
    }
}