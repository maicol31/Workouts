import{ bancos } from "./datosBanco.js";
import{ cuentas} from "./cuentas.js"
import{ moneda }from "./moneda.js"

let selectBan = document.querySelector("#selectBan");
for (let i = 0; i < bancos.length; i++) {
    console.log(bancos[i]);
    selectBan.innerHTML +='<option>'+bancos[i]+'</option>'; 
}
let cuentasb = document.querySelector("#cuentas");
for (let i = 0; i < cuentas.length; i++) {
    console.log(cuentas[i]);
    cuentasb.innerHTML +='<option>'+cuentas[i]+'</option>'; 
}

let selectCue = document.querySelector("#selectmon");
for (let i = 0; i < moneda.length; i++) {
    console.log(moneda[i]);
    selectCue.innerHTML +='<option>'+moneda[i]+'</option>'; 
}
function fechaa() {
    
    let Afecha =  new Date();
    let año = Afecha.getFullYear();
    let mes = Afecha.getMonth() + 1;
    let dia = Afecha.getDate();
    let hora = Afecha.getHours();
    let minutos = Afecha.getMinutes();
    let segundos = Afecha.getSeconds();
    document.getElementById("fechaA").innerHTML = "Fecha: " + dia + "/" + mes + "/" + año + " " +hora+ ":" +minutos+":" + segundos;
}
setInterval(fechaa,1000);

let ocultar = document.querySelector("#switch");
let inoputOcultar = document.querySelector(".inoputOcultar");
let labelocultar = document.querySelector("#AA");
ocultar.addEventListener('click',() =>{
    inoputOcultar.classList.toggle('ocultarInput');
    labelocultar.classList.toggle('ocultarInput');
});

let opcionArchivo = document.getElementById("file")
function validarArchivo() { 
    let archivo = document.querySelector('input[type="file"]');
    if (archivo.value == 0 || archivo.value == "") {        
        opcionArchivo.classList.add("error");
        console.log("seleccione una archivo");

    } else {
        opcionArchivo.classList.remove("error");
        console.log("ya selecciono una archivo");
        archivo.addEventListener("click");
    }
  
}
opcionArchivo.addEventListener("click",validarArchivo);
opcionArchivo.addEventListener("change",validarArchivo);

