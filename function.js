function somar() {

    var kg = document.getElementById('peso')
    var cm = document.getElementById('altura')
    var result = document.getElementById('resultado')
    var result2 = document.getElementById('resultado2')

    var kg = Number(peso.value)
    var cm = Number(altura.value)
    var soma = parseInt(kg / (cm * cm))
    result.innerHTML = "IMC: " + soma

    if(soma < 18){
        result2.innerHTML = "IMC BAIXO"
        result2.style.color = "yellow"
    }
    if(soma > 25){
        result2.innerHTML = "IMC ALTO"
        result2.style.color = "red"
    }
    if(soma >= 18 && soma <= 25){
        result2.innerHTML = "IMC NORMAL"
        result2.style.color = "#09a730"
    }

    if(kg == "" && cm == ""){
        result.innerHTML = "Informe um valor"
    }
    if(kg == "" || cm == ""){
        result.innerHTML = "Informe um valor"
        result2.innerHTML = ""
    }
}

var button = document.getElementById('card');

button.addEventListener("click", function(){

    var info = document.getElementById('information');

    if(info.style.display === "block"){
        info.style.display = "none"
    }
    else{
        info.style.display = "block"
    }
})