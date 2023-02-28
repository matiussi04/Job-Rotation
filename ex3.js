const dados = require('./dados.json');

for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor === 0) {
    dados.splice(i, 1);
    i--;
  }
}

function minValue(dados = []) {
  let min = dados[0];

  for (let i = 0; i < dados.length; i++) {
    if (min.valor > dados[i].valor) {
      min = dados[i];
    }
  }

  return min;
}

function maxValue(dados = []) {
  let max = dados[0];

  for (let i = 0; i < dados.length; i++) {
    if (max.valor < dados[i].valor) {
      max = dados[i];
    }
  }

  return max;
}

function getNumberDaysAboveMonthlyAverageRevenue(dados) {
  const media = getMedia(dados);
  let days = 0;

  for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor > media) {
      days++;
    }
  }

  return days;
}

function getMedia(dados) {
  let soma = 0;

  for (let i = 0; i < dados.length; i++) {
    soma += dados[i].valor;
  }

  return soma / dados.length;
}

console.log(
  `Dia com o menor faturamento: ${minValue(dados).dia}, valor: ${
    minValue(dados).valor
  }`
);
console.log(
  `Dia com o maior faturamento: ${maxValue(dados).dia}, valor: ${
    maxValue(dados).valor
  }`
);
console.log(
  `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${getNumberDaysAboveMonthlyAverageRevenue(
    dados
  )}`
);
