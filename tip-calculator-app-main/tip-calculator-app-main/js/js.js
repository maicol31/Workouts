

let crear = function (elemento, tipo, nombre) {
  let creador = document.createElement(elemento);
  creador.setAttribute(tipo, nombre);
  return creador;
};

let contenedor = crear("div", "class", "contenedor");
document.body.append(contenedor);

let izquierda = crear("div", "class", "izquierda");
contenedor.append(izquierda);

let derecha = crear("div", "class", "derecha");
contenedor.append(derecha);

let superior = crear("div", "class", "superior");
izquierda.append(superior);

let crearin = function (clase, tipo, ph) {
  let creador2 = document.createElement("input");
  creador2.setAttribute("class", clase);
  creador2.type = tipo;
  creador2.placeholder = ph;
  return creador2;
};

let textbill = crear("div", "class", "textbill");
superior.append(textbill);

let bill = crearin("bill", "text", "$");
bill.setAttribute("id", "idbill");
superior.append(bill);

let texto = crear("p", "class", "texto");
texto.innerText = "Bill";
textbill.append(texto);

let mitad = crear("div", "class", "mitad");
izquierda.append(mitad);

let selectip = crear("div", "class", "selectip");
mitad.append(selectip);

let textselect = crear("p", "class", "textselect");
textselect.innerText = "Select Tip %";
selectip.append(textselect);

let contbotones1 = crear("div", "class", "contbotones1");
mitad.append(contbotones1);

let boton1 = crear("button", "type", "submit");
boton1.innerHTML = "5%";
contbotones1.append(boton1);

let boton2 = crear("button", "type", "submit");
boton2.innerHTML = "10%";
contbotones1.append(boton2);

let boton3 = crear("button", "type", "submit");
boton3.innerHTML = "15%";
contbotones1.append(boton3);

let contbotones2 = crear("div", "class", "contbotones1");
mitad.append(contbotones2);

let boton4 = crear("button", "type", "submit");
boton4.innerHTML = "25%";
contbotones2.append(boton4);

let boton5 = crear("button", "type", "submit");
boton5.innerHTML = "50%";
contbotones2.append(boton5);

let customer = crearin("customer", "text", "customer");
customer.setAttribute("id", "customer");
contbotones2.append(customer);

let contenedorcolor = crear("div", "class", "contenedorcolor");
derecha.append(contenedorcolor);

let inferior = crear("div", "class", "inferior");
izquierda.append(inferior);

let textperson = crear("div", "class", "textperson");
textperson.innerText = "Number of people";
inferior.append(textperson);

let inpersona = crearin("inpersona", "number", "");
inpersona.setAttribute("id", "idpersona");
inferior.append(inpersona);

let contenedortotal = crear("div", "class", "contenedortotal");
contenedorcolor.append(contenedortotal);

let contnumeros = crear("div", "class", "contnumeros");
contenedortotal.append(contnumeros);

let contboton = crear("div", "class", "contboton");
contenedortotal.append(contboton);

let reset = crear("button", "class", "reset");
reset.innerText = "Reset";
contboton.append(reset);

let conTipAmount = crear("div", "class", "conTipAmount");
contnumeros.append(conTipAmount);

let total = crear("div", "class", "conTipAmount");
contnumeros.append(total);

let contntexto = crear("div", "class", "contntexto");
conTipAmount.append(contntexto);

let contntexto2 = crear("div", "class", "contntexto");
total.append(contntexto2);

let textip = crear("div", "class", "textip");
textip.innerText = "Tip Amoun";
contntexto.append(textip);

let totaltex = crear("div", "class", "textip");
totaltex.innerText = "Total";
contntexto2.append(totaltex);

let person = crear("div", "class", "person");
person.innerText = "/person";
contntexto.append(person);

let person2 = crear("div", "class", "person");
person2.innerText = "/person";
contntexto2.append(person2);

let numtip = crear("div", "class", "numtip");
numtip.setAttribute("id", "numtip1");
numtip.innerText = "$0.00";
conTipAmount.append(numtip);

let numerototal = crear("div", "class", "numtip");
numerototal.setAttribute("id", "numtotal");
numerototal.innerText = "$0.00";
total.append(numerototal);

function captura_porcen() {
  let porcenBill = document.querySelector("#idbill").value;
  let porcenpersonaT = document.querySelector("#idpersona").value;
  let billporcentaje = porcenBill * porcentaje;
  let porcentajeCd = Math.round(billporcentaje / porcenpersonaT);
  numtip.innerHTML = "$" + porcentajeCd;
  let divpersona = porcenBill / porcenpersonaT;
  let total = Math.round(divpersona + porcentajeCd);
  numerototal.innerHTML = "$" + total;
}
let porcentaje;

boton1.onclick = function () {
  porcentaje = 0.05;
  captura_porcen();
};

boton2.onclick = function () {
  porcentaje = 0.1;
  captura_porcen();
};

boton3.onclick = function () {
  porcentaje = 0.15;
  captura_porcen();
};

boton4.onclick = function () {
  porcentaje = 0.2;
  captura_porcen();
};

boton5.onclick = function () {
  porcentaje = 0.25;
  captura_porcen();
};

customer.addEventListener("keyup", () => {
  let valor = customer.value;
  porcentaje = valor / 100;
  captura_porcen();
});

reset.onclick = function(){
    document.getElementById("idbill").value = "";
    document.getElementById("idpersona").value = "";
    document.getElementById("customer").value = "";
    numtip.innerHTML = "$0.00";
    numerototal.innerHTML = "$0.00";
    
}