
let contenedor = document.createElement("div");
function crearmain(){
contenedor.setAttribute("class" , "contenedor");
document.body.append(contenedor);
}
crearmain();

function crearE(elemento, att, valor ){
     let crear = document.createElement(elemento);
     crear.setAttribute(att, valor);
     return crear;
}

let imagen =  crearE("div", "class","imagen");
contenedor.append(imagen);

let contenedort =crearE( "div","class" , "contenedort");
contenedor.append(contenedort);

let texto = crearE("p", "class" , "texto");
texto.innerText="Shift the overall look and feel by adding thesewonderful touches to furniture in your home";
contenedort.append(texto);

let texto2 = crearE("h2", "class", "texto2");
texto2.innerText="Ever been in room and feit like something was missing? perhaps it felt slightly bare and uninviting I’ve got some simple tips to help you make any room feel complete";
contenedort.append(texto2);

let barrainf = crearE("div", "class" , "barrainf");
contenedort.append(barrainf);

let img = crearE("img", "class" , "logo");
img.src = "./images/avatar-michelle.jpg"
barrainf.append(img);

let connombre = crearE("div", "class" , "connombre");
barrainf.append(connombre);

let michelle = crearE("div", "class" , "michelle");
michelle.innerText="Michelle  Appleton";
connombre.append(michelle);

let fecha = crearE("div", "class" , "fecha");
fecha.innerText="28 Jun 2020";
connombre.append(fecha);

let compartir = crearE("div", "class" , "compartir")
barrainf.append(compartir);

let compartir2 = crearE("img", "id" , "botonc")
compartir2.src = "./images/Group 2.svg";
barrainf.append(compartir2);


let redes = document.createElement("img");
redes.src = "./images/barra.svg";
compartir.append(redes);

let redes2 = crearE("img","class" , "redes2")
redes2.src = "./images/movil.svg";
compartir.append(redes2);

function hover(){
    compartir2.src = "./images/Group 1.svg";
    redes.style.display = "block"; 
}

function hover2(){
    compartir2.src = "./images/Group 2.svg";
    redes.style.display = "none"; 
}
compartir2.addEventListener("mouseenter", ()=>{hover()});
compartir2.addEventListener("mouseleave", ()=>{hover2()});
