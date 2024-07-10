const decodificado = document.getElementById("decodificar");
const textarea = document.getElementById("texto_decode");
const btnEncriptar = document.getElementById("encriptar_btn");
const btnDesencriptar = document.getElementById("desencriptar_btn");

function encriptar(msg){
    let newMsg=msg.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    console.log(newMsg);
    return newMsg;
}

function desencriptar(msg){
    let newMsg=msg.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('ufat', 'u').replaceAll('imes', 'i').replaceAll('ober', 'o');
    console.log(newMsg);
    return newMsg;
}

function mostrarResultado(modo){
    if(textarea.value!=="")
        {
            decodificado.innerHTML=`
            <div class="textoD" id="textoD">
                <p>${modo==="encriptar" ? encriptar(textarea.value) : desencriptar(textarea.value)}</p>
            </div>
            <button class="copiar" id="copiar">Copiar</button>`;
            
            
            const texto = document.getElementById("textoD").innerText;
            const btnCopiar = document.getElementById("copiar");
            
            const copiarContenido = async () => {
                try {
                await navigator.clipboard.writeText(texto);
                } catch (err) {
                console.error('Error al copiar: ', err);
                }
            }
    
            btnCopiar.addEventListener("click", e => {
                copiarContenido();
                document.querySelector('.notification_copy').classList.toggle('inactive');
                setTimeout(()=> document.querySelector('.notification_copy').classList.toggle('inactive'), 2000)
            })
        }
}

btnEncriptar.addEventListener('click', e => {
    mostrarResultado('encriptar');
});

btnDesencriptar.addEventListener('click', e => {
    mostrarResultado('desencriptar');
})
  
  function validarCaracteres(texto) {
    const regex = /[0-9\u0300-\u036f\u1E00-\u1EFF\u2000-\u303F\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF\äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/;
    return regex.test(texto);
  }
  
  // Uso de la función
  textarea.addEventListener('keydown', e => {
    if (validarCaracteres(e.key)) {
      e.preventDefault();
    }
  });
