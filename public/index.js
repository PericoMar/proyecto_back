// index.js
// Esperar a que el DOM (árbol de objetos del documento) esté completamente cargado
console.log("CONECTADO")
// Obtener todos los botones con la clase "boton-producto"
const botonesProducto = document.querySelector(".boton-producto");
console.log({botonesProducto})
boton.addEventListener("click", () => {
// Obtener el nombre del producto en función del índice del botón
const nombreProducto = `Producto ${index + 1}`;

// Mostrar un mensaje en la consola cuando se hace clic en el botón
console.log(`Click en el ${nombreProducto}`);
})
  