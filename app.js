// Añade este código al final del archivo app.js

// Obtiene los elementos input y textarea
let texuserInput = document.getElementById('texuser');
let textAreaOutput = document.getElementById('text-area');

// Añade un evento de escucha al input
texuserInput.addEventListener('input', (event) => {
  // Obtiene el valor del input
  let inputValue = event.target.value;

  // Actulizar el valor del textarea
  textAreaOutput.value = inputValue;
});

function encrypto(texuser) {
  
    
  }
    
