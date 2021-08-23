let contenedor = document.createElement("div");
contenedor.setAttribute("class" , "contenedor");
document.body.append(contenedor);

let imagen = document.createElement("div");
imagen.setAttribute("class" , "imagen");
contenedor.append(imagen);

let contenedort = document.createElement("div");
contenedort.setAttribute("class" , "contenedort");
contenedor.append(contenedort);

let texto = document.createElement("p"); 
texto.setAttribute("class" , "texto");
texto.innerText="Shift the overall look and feel by adding thesewonderful touches to furniture in your home";
contenedort.append(texto);

let texto2 = document.createElement("h2");
texto2.setAttribute("class", "texto2");
texto2.innerText="Ever been in room and feit like something was missing? perhaps it felt slightly bare and uninviting I’ve got some simple tips to help you make any room feel complete";
contenedort.append(texto2);

let barrainf = document.createElement("div");
barrainf.setAttribute("class" , "barrainf");
contenedort.append(barrainf);

let img = document.createElement("img");
img.setAttribute("class" , "logo");
img.src = "./images/avatar-michelle.jpg"
barrainf.append(img);

let connombre = document.createElement("div");
connombre.setAttribute("class" , "connombre");
barrainf.append(connombre);

let michelle = document.createElement("h3");
michelle.setAttribute("class" , "michelle");
michelle.innerText="Michelle  Appleton";
connombre.append(michelle);

let fecha = document.createElement("h4");
fecha.setAttribute("class" , "fecha");
fecha.innerText="28 Jun 2020";
connombre.append(fecha);

let compartir = document.createElement("div");
compartir.setAttribute("class" , "compartir")
barrainf.append(compartir);

let compartir2 = document.createElement("img");
compartir2.src = "./images/Group 2.svg";
compartir2.setAttribute("id" , "botonc")
barrainf.append(compartir2);


let redes = document.createElement("img");
redes.src = "./images/barra.svg";
compartir.append(redes);

let redes2 = document.createElement("img");
redes2.src = "./images/movil.svg";
redes2.setAttribute("class" , "redes2");
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
