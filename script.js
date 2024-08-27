const textArea = document.querySelector(".form__input");
const mensaje = document.querySelector(".result__text");  // Selecciona el elemento adecuado para mostrar el resultado
const btnEncriptarElement = document.querySelector('.form__btn[value="Encriptar"]');
const btnDesencriptarElement = document.querySelector('.form__btn[value="Desencriptar"]');
const imgMuneco = document.querySelector(".result__img");  // Selecciona la imagen del muñeco
const btnCopiar = document.querySelector(".form__btn--secundary.hidden");  // Selecciona el botón de copiar, incluyendo la clase "hidden"
const tituloResultado = document.querySelector(".result__title"); // Selecciona el título "Ningún mensaje fue encontrado"

// Función para ocultar la imagen, ocultar el título y mostrar el botón de copiar
function mostrarResultado() {
    imgMuneco.style.display = "none";  // Oculta la imagen del muñeco
    tituloResultado.style.display = "none"; // Oculta el título "Ningún mensaje fue encontrado"
    btnCopiar.classList.remove("hidden");  // Muestra el botón de copiar
}

// Función para reiniciar todo a su estado inicial
function reiniciarEstado() {
    imgMuneco.style.display = "";  // Muestra la imagen del muñeco
    tituloResultado.style.display = ""; // Muestra el título "Ningún mensaje fue encontrado"
    mensaje.textContent = "";  // Limpia el texto del resultado
    textArea.value = "";  // Limpia el área de texto
    btnCopiar.classList.add("hidden");  // Oculta el botón de copiar
}

// Encriptar
btnEncriptarElement.addEventListener('click', (event) => {
    event.preventDefault();  // Evitar recargar la página
    const textoEncriptado = encriptar(textArea.value);
    mensaje.textContent = textoEncriptado;  // Mostrar el resultado
    textArea.value = "";
    mostrarResultado();  // Llamar a la función para ocultar la imagen, el título y mostrar el botón
});

// Desencriptar
btnDesencriptarElement.addEventListener('click', (event) => {
    event.preventDefault();  // Evitar recargar la página
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.textContent = textoDesencriptado;  // Mostrar el resultado
    textArea.value = "";
    mostrarResultado();  // Llamar a la función para ocultar la imagen, el título y mostrar el botón
});

// Función para copiar el texto encriptado o desencriptado
btnCopiar.addEventListener('click', () => {
    const textoACopiar = mensaje.textContent;  // Obtiene el texto a copiar
    navigator.clipboard.writeText(textoACopiar)  // Copia el texto al portapapeles
        .then(() => {
            reiniciarEstado();  // Reinicia todo a su estado inicial después de copiar
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);  // Muestra un mensaje de error en caso de fallo
        });
});

// Función para encriptar el texto
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Función para desencriptar el texto
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}