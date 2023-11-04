function countWords(message) {
  // Convertir el mensaje a minúsculas para que no distinga entre mayúsculas y minúsculas.
  message = message.toLowerCase();

  // Dividir el mensaje en palabras.
  const words = message.split(/\s+/);

  // Crear un objeto para almacenar las ocurrencias de cada palabra.
  const wordCount = {};

  // Inicializar un array para mantener un registro del orden de aparición de las palabras.
  const wordOrder = [];

  // Recorrer las palabras en el mensaje.
  words.forEach((word) => {
    if (!wordCount[word]) {
      // Si es la primera vez que aparece la palabra, añadirla al array de orden de aparición.
      wordOrder.push(word);
    }

    // Incrementar el contador de la palabra en el objeto.
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  // Crear una cadena de texto formateada con las palabras y sus ocurrencias.
  const result = wordOrder.map((word) => `${word}${wordCount[word]}`).join('');

  return result;
}

// Ejemplo de uso:
const message = 'gato perro perro coche Gato peRRo sol';
const result = countWords(message);
console.log(result); // Esto imprimirá: "gato2perro3coche1sol1"
