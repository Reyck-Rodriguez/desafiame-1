const input = document.getElementById("texto");
const codificarBoton = document.getElementById("codificar");
const resultadoInput = document.getElementById("resultado");
const imagenEspera = document.getElementById("muñeco-espera");
const textoEspera = document.querySelectorAll("#texto-espera, #texto-espera-2");
const decodificarBoton = document.getElementById("descodificar");

codificarBoton.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto !== "" && esTextoValido(texto)) { 
     const codificado = codificarTexto(texto); 
     mostrarResultado(codificado);
  } else {   
 alert("Por favor, ingrese solo letras minúsculas sin símbolos.");
  
}
});

decodificarBoton.addEventListener("click", () => { 
 const textoCodificado = input.value.trim(); 
 if (textoCodificado !== " " && esTextoValido(textoCodificado)) {  
  const descodificado = decodificarTexto(textoCodificado);    mostrarResultado(descodificado);  
} else { 
   alert("Por favor, ingrese solo letras minúsculas sin símbolos.");  }});

function mostrarResultado(resultado) {
  if (resultado) {
    resultadoInput.innerHTML = `
   
        <textarea id="texto-codificado" class="input2" readonly >${resultado}</textarea>
            <button id="copiar" class="boton3">Copiar</button>

    
        `;

    const copiarBoton = document.getElementById("copiar");
    copiarBoton.addEventListener("click", () => {
      navigator.clipboard
        .writeText(resultado)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch((err) => console.error("Error al copiar el texto: ", err));
    });

    imagenEspera.style.display = "none";
    textoEspera.forEach((el) => (el.style.display = "none"));
  } else {
    resultadoInput.innerHTML = "";
    imagenEspera.style.display = "block";
    textoEspera.forEach((el) => (el.style.display = "block"));
  }
}

function codificarTexto(texto) {
  const vocales = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  const palabras = texto.split(" ");
  const codificadas = palabras.map((palabra) =>
    palabra
      .split("")
      .map((char) => vocales[char] || char)
      .join("")
  );

  return codificadas.join(" ");
}


function decodificarTexto(textoCodificado) {
  const vocales = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  for (let codificar in vocales) {
    textoCodificado = textoCodificado.replaceAll(codificar, vocales[codificar]);
  }
  return textoCodificado;
}

function esTextoValido(texto) {
  return /^[a-z\s]+$/i.test(texto);
}