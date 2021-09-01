
let crear = function (elemento, tipo, nombre) {
    let creador = document.createElement(elemento);
    creador.setAttribute(tipo, nombre);
    return creador;
  };

  let contenedor = crear("div","class","contenedor")
  document.body.append(contenedor);

  let contreloj = crear("div","class","contreloj")
  contenedor.append(contreloj);

  let min = crear("div","class","min")
  min.innerText="00";
  contreloj.append(min);

  let dosp = crear("div","class","dosp");
  dosp.innerText=":"
  contreloj.append(dosp);

  let seg = crear("div","class","seg")
  seg.innerText="00";
  contreloj.append(seg);

  let contbotones = crear("div","class","contbotones")
  contenedor.append(contbotones);

  let button5 = crear("button");
  button5.innerText="5:00";
  contbotones.append(button5);

  let button15 = crear("button");
  button15.innerText="15:00";
  contbotones.append(button15);

  let button30 = crear("button");
  button30.innerText="30:00";
  contbotones.append(button30);

  let crearin = function (clase, tipo, ph) {
    let creador2 = document.createElement("input");
    creador2.setAttribute("class", clase);
    creador2.type = tipo;
    creador2.placeholder = ph;
    return creador2;
  };

  let customer = crearin("customer","text","Custom")
  contbotones.append(customer);
  

 

