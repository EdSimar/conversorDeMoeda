let inputReal = document.getElementById("valReal")
let coinEstrang = document.getElementsByName("valEstrang")

let convert = document.getElementById("butConvert")
let clean = document.getElementById("butClean")

let warning = document.getElementById("result")

//cotação do dia 01/08/2022
let valDolar = 5.19
let valEuro = 5.33
let valLibra = 6.36
let valBitcoins = 119726.13
let valReal = 0

let otherCount = ""
let coinConvert = 0

//função de validação do número digitado e da exibição da mensagem com o valor convertido
function messageWarning(coinConvert){
    isNaN(valReal) ? valReal = 0 : ""
    warning.textContent = "O valor " + valReal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + " convertido em " + otherCount + " é: " + coinConvert + "."
}

//verifica se foi digitado um valor válido no input
//caso tenha digitado um valor inválido:
function disabledBtnConvert(){
    if(inputReal.value == 0 || inputReal.value == "" || inputReal.value == null){
        convert.setAttribute("disabled", "disabled")
        convert.style.background = "rgb(101, 109, 99)"
        warning.textContent = "Digite um valor válido"
    }
}

//caso tenha digitado um valor válido:
function ableBtnConvert(){
    if(inputReal.value > 0){
        convert.removeAttribute("disabled")
        convert.style.background = "rgb(27, 153, 2)"
    }
}

//verificar marcação do botão radio
convert.addEventListener("click", function(){
    valReal = parseFloat(inputReal.value)

    for(let i = 0; i < coinEstrang.length; i++){
        if(coinEstrang[i].checked){
            otherCount = coinEstrang[i].value
        }
    }

//conversão das moedas
    switch(otherCount){
        case "Dólar":
            coinConvert = valReal / valDolar
            messageWarning(coinConvert.toLocaleString("en-US", {style: "currency", currency: "USD"}))
        break
        case "Euro":
            coinConvert = valReal / valEuro
            messageWarning(coinConvert.toLocaleString("de-DE", {style: "currency", currency: "EUR"}))
        break
        case "Libra":
            coinConvert = valReal / valLibra
            messageWarning(coinConvert.toLocaleString("en-GB", {style: "currency", currency: "GBP"}))
        break
        case "Bitcoins":
            coinConvert = valReal / valBitcoins
            messageWarning(parseFloat(coinConvert).toFixed(5))
        break
        default:
            warning.textContent = "Escolha uma moeda a ser convertida"
    }
    isNaN(coinConvert) ? coinConvert = 0 : ""
})

//resetar
clean.addEventListener("click", function(){
    inputReal.value = ""
    inputReal.focus()
    warning.textContent = "Digite o valor e selecione a moeda que deseja converter"
    coinEstrang[0].checked = false
    coinEstrang[1].checked = false
    coinEstrang[2].checked = false
    coinEstrang[3].checked = false
})