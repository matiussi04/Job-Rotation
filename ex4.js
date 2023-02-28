const dados = [
  { estado: 'SP', valor: 67836.43 },
  { estado: 'RJ', valor: 36678.66 },
  { estado: 'MG', valor: 29229.88 },
  { estado: 'ES', valor: 27165.48 },
  { estado: 'OUTROS', valor: 19849.53 }
];

function getTotal(dados) {
  let total = 0;

  for (let i = 0; i < dados.length; i++) {
    total += dados[i].valor;
  }

  return total;
}

function calculateStatePercentageInMonthlyTotal(value, dados) {
  const total = getTotal(dados);

  return (value * 100) / total;
}

for (let i = 0; i < dados.length; i++) {
  console.log(
    `Estado: ${
      dados[i].estado
    }, Porcentagem: ${calculateStatePercentageInMonthlyTotal(
      dados[i].valor,
      dados
    )}`
  );
}
