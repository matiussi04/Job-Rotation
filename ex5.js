const entrada = 'String de teste';
let saida = '';

for (let i = 0; i < entrada.length; i++) {
  saida += entrada[entrada.length - 1 - i];
}

console.log(saida);
