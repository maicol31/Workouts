let contenedor = document.createElement("div");
contenedor.setAttribute("class" , "contenedor");
document.body.append(contenedor);

let imagen = document.createElement("div");
imagen.setAttribute("class" , "imagen");
contenedor.append(imagen);

let contenedort = document.createElement("div");
contenedort.setAttribute("class" , "contenedort");
contenedor.append(contenedort);

let texto = document.createElement("h2"); 
texto.setAttribute("class" , "texto");
texto.innerText="Shift the overall look and feel by adding thesewonderful touches to furniture in your home";
contenedort.append(texto);

let texto2 = document.createElement("h2");
texto2.setAttribute("class", "texto2");
texto2.innerText="Ever been in room and feit like something was missing? perhaps it felt slightly bare and uninviting I’ve got some simple tips to help you make any room feel complete"
contenedort.append(texto2);