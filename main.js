const MOEDAS = { DOLAR: "1", EURO: "2" }
let botao = document.getElementById("botao")
let select = document.getElementById("select-Moedas")

async function ConverterMoedas() {/*Essa funçao converte a moeda de BRL para EUR/*/

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let ValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("InputMoedas")
    let InputReal = document.getElementById("InputReal")

    if (select.value === MOEDAS.DOLAR) {
        let ValorDolar = ValorReais / dolar
        inputMoedas.innerHTML = ValorDolar.toLocaleString("en-US", { style: 'currency', currency: 'USD' })
    }
    if (select.value === MOEDAS.EURO) {
        let ValorEmEuros = ValorReais / euro
        inputMoedas.innerHTML = ValorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }
    InputReal.innerHTML = ValorReais.toLocaleString('pt-br', { style: 'currency', currency: "BRL" })
}

function TrocaDeMoeda() { /*Essa funçao troca a bandeira da moeda DOLAR para EURO ou vice versa*/

    let TextoMoedas = document.getElementById("TextoMoedas")
    let BandeiraMoedas = document.getElementById("BandeiraMoedas")

    if (select.value === MOEDAS.DOLAR) {
        TextoMoedas.innerHTML = "Dolar $"
        BandeiraMoedas.src = "./IMG/EUA.png"
    }
    if (select.value === MOEDAS.EURO) {
        TextoMoedas.innerHTML = "Euro €"
        BandeiraMoedas.src = "./IMG/EURO.png"
    }
    ConverterMoedas()
}
botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", TrocaDeMoeda)




