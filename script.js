const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

async function convertValues() {
  const inputCurrencyValue = parseFloat(
    document.querySelector(".input-currency").value
  );
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  if (isNaN(inputCurrencyValue)) {
    alert("Por favor, insira um valor válido.");
    return;
  }

  console.log(currencySelect.value);

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL"
  ).then((response) => response.json());
  console.log(data);

  const dolar = data.USDBRL.high;
  const euro = data.EURBRL.high;
  const libra = data.GBPBRL.high;
  const bitcoin = data.BTCBRL.high;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolar);
  } else if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euro);
  } else if (currencySelect.value === "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libra);
  } else if (currencySelect.value === "bitcoin") {
    const btc = inputCurrencyValue / bitcoin;
    currencyValueConverted.innerHTML = `${btc.toFixed(8)} BTC`;
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/dolar.png";
  } else if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  } else if (currencySelect.value === "libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "./assets/libra-1.png";
  } else if (currencySelect.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin-1.png";
  }
}

// Adiciona os ouvintes de eventos
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
