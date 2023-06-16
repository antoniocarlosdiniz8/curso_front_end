function clicar() {
    var n1 = document.getElementById('isoma')
    var n2 = document.getElementById('isoma1')

    var soma = parseFloat(n1) + parseFloat(n2)

    var resul = document.getElementById('mostrar')


    resul.innerHTML = Number(soma)



}