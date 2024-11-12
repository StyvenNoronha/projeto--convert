//Cotação de moedas do dia
const USD = 5.76;
const EUR = 6.11;
const GBP = 7.38;

//Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result")

//Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  //Manipulando o input amount para receber somente números
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");
});

//Captando o evento de submit (enviar) no formulário
form.onsubmit = (e) => {
  e.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

//Função que vai converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    //Atualizando o conteúdo da moeda selecionada
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;

    //exibe o resultado total
    let total = price * amount
    if(isNaN(total)){
      return alert("Por favor, digite o valor correto para converter")
    }
    result.textContent = `${formatCurrencyBRL(total).replace("R$"," ")} Reais`

    //Aplica a classe que exibe o footer
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);

    //Remove a classe que exibe o footer
    footer.classList.remove("show-result");

    alert("deu ruim. Volta amanhã meio dia");
  }
}

//formata a moeda em Real Brasileiro
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR",{
    style:"currency",
    currency:"BRL"
  })
}
