function ordenarDecrescenteRecursivo(lista) {
  if (lista.length <= 1) {
    return lista;
  }

  const pivot = lista[0];
  const menores = [];
  const maiores = [];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > pivot) {
      maiores.push(lista[i]);
    } else {
      menores.push(lista[i]);
    }
  }

  return ordenarDecrescenteRecursivo(maiores).concat(
    pivot,
    ordenarDecrescenteRecursivo(menores)
  );
}

// Lista original
let lista = [5, 2, 8, 1, 7];

// Chamar a função recursiva para ordenar do maior para o menor
const listaOrdenada = ordenarDecrescenteRecursivo(lista);

// A lista agora está ordenada do maior para o menor
console.log(listaOrdenada);
