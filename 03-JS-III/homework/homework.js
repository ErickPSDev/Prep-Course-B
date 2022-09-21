// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acumulador = 0
    for (var i = 1; i < 11; i++){
      acumulador += i;
    }
    return acumulador;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  // inicializar el arreglo que recibira los numeros pares
  var pares = [];
  //metodo para recorrer cada elemento del array, inicializando en 0.
  for (var i = 0; i < array.length; i++){
    if(array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  // resultados recibira el array nuevo de array.map con el array con valores que entregue el parametro valor.
  var resultados = array.map(function(valor){ // array.map tiene una function con el parametro valor, que es quien recibe el resultado de la function en ete caso valor ** 2
    return valor ** 2 // retorna el cuadrado de cara elemento del array, este sera almacenado en resultados.
  })
  return resultados; // retorna resultados,es decir el array coon los numeros al cuadrado.
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var acumulador = null;// inicializa acumulador en 0 o null, este llevara la suma de cara iteracion
  for (var i = 0; i < array.length; i++){ //metodo para recorrer cara elemento del array, hasta que sea mayor que el numero de indices del array, iniciando desde el index 0, una vez se cumple index suma 1 para continuar la iteración.
    acumulador += array[i]; //acumulador tendra el valor actual + el valor del index del array.
  }
  return acumulador;// retorna valor de acumulador, es decir la suma de todos los elementos, al finalizar el ciclo for.
  
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length; // retorna una cadena de caracteres representado el array y sus elementos por la propiedad .length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
