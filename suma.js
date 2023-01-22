<script>
	var boton1 = document.querySelector("button1")

	function sumar{
		

	}

	// Obtener referencia a los elementos del DOM
var inputText = document.getElementById("inputText");
var encryptButton = document.getElementById("encryptButton");
var decryptButton = document.getElementById("decryptButton");
var resultInput = document.getElementById("resultInput");
var copyButton = document.getElementById("copyButton");

// Agregar eventos click a los botones
encryptButton.addEventListener("click", encryptText);
decryptButton.addEventListener("click", decryptText);
copyButton.addEventListener("click", copyResult);

// Función para encriptar el texto
function encryptText() {
  var text = inputText.value;
  // Aqui puedes utilizar algún algoritmo de encriptación
  // por ejemplo, la sustitución de letras
  var encryptedText = text.split('').map(function(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }).join('');
  resultInput.value = encryptedText;
}

// Función para desencriptar el texto
function decryptText() {
  var text = inputText.value;
  // Aqui puedes utilizar algún algoritmo de desencriptación
  // que sea el inverso del utilizado para encriptar
  var decryptedText = text.split('').map(function(char) {
    return String.fromCharCode(char.charCodeAt(0) - 1);
  }).join('');
  resultInput.value = decryptedText;
}

// Función para copiar el resultado al portapapeles
function copyResult() {
  resultInput.select();
