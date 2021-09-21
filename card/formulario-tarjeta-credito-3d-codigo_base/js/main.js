let tarjeta = document.querySelector('#tarjeta');
let  botonAbrir = document.querySelector('#abrir');
let formulario = document.querySelector('#formulario');
let numeroTarjeta = document.querySelector('#tarjeta .numero');
let nombreTarjeta = document.querySelector('#tarjeta .nombre');
let firma = document.querySelector('#tarjeta .firma p')
let mesEx = document.querySelector('#tarjeta .mes');
let AñoEx = document.querySelector('#tarjeta .año');
let ccv = document.querySelector('#tarjeta .ccv');




//rotar tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// para abrir formulario
botonAbrir.addEventListener('click', () => {
    botonAbrir.classList.toggle('active');
    formulario.classList.toggle('active');
});

//rellenar
for(let i = 1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectmes.appendChild(opcion);

}

//año
const añoActual = new Date().getFullYear();
for(let i = añoActual; i <= añoActual + 10; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectaño.appendChild(opcion);
}

//numero tarjeta

formulario.inputNumero.addEventListener('keyup' , (e) => {
let valorinput = e.target.value;
formulario.inputNumero.value = valorinput
.replace(/\s/g ,'')
.replace(/\D/g, '')
.replace(/([0-9]{4})/g, '$1 ')
.trim(); //elimina el ultimo espacio


numeroTarjeta.textContent = valorinput;

if(valorinput == ''){
    numeroTarjeta.textContent = '**** **** **** ****'
}

})

//nombre tarjeta

formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput =e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '')
    nombreTarjeta.textContent =valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'SIN NOMBRE'
    }
})

//smes

formulario.selectmes.addEventListener('change', (e) =>{
      mesEx.textContent = e.target.value;
})

//sAño

formulario.selectaño.addEventListener('change', (e) =>{
    AñoEx.textContent = e.target.value;
})
//sCCV

formulario.inputccv.addEventListener('keyup', (e) =>{
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }

    formulario.inputccv.value = formulario.inputccv.value
    .replace(/\s/g ,'')
    .replace(/\D/g, '')

    ccv.textContent = formulario.inputccv.value;
});
