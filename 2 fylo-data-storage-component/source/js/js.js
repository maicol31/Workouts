let crear = function (elemento, identificador, atributo){
    let funcion = document.createElement(elemento);
    funcion.setAttribute( identificador, atributo);
    return funcion;
}

let contenedorM = crear("div", "class", "contenedorM");
document.body.append(contenedorM);

let izquierda = crear("div", "class", "izquierda");
contenedorM.append(izquierda);

let derecha = crear("div", "class", "derecha");
contenedorM.append(derecha);

let conticons = crear("div", "class" , "conticons");
izquierda.append(conticons);

let fylo = crear("div", "class", "fylo");
conticons.append(fylo);

let imgf = crear("img", "src", "images/logo.svg");
fylo.append(imgf);

let iconos= crear("div", "class", "iconos");
conticons.append(iconos);

let docbtn = crear("img", "src", "images/docBtn.svg");
iconos.append(docbtn);

let folderBtn = crear("img", "src", "images/folderBtn.svg");
iconos.append(folderBtn);

let uploadBtn = crear("img", "src", "images/uploadBtn.svg");
iconos.append(uploadBtn);


function hoverdoc(){
    docbtn.src = "images/DocA.svg";
}
function hoverdocA(){
    docbtn.src = "images/docBtn.svg";
}

docbtn.addEventListener("mouseenter",hoverdoc);
docbtn.addEventListener("mouseleave",hoverdocA);


function hoverfol(){
    folderBtn.src = "images/FolderA.svg";
}
function hoverfolA(){
    folderBtn.src = "images/folderBtn.svg";
}

folderBtn.addEventListener("mouseenter",hoverfol);
folderBtn.addEventListener("mouseleave",hoverfolA);


function hoverupl(){
    uploadBtn.src = "images/uploadA.svg";
}
function hoveruplA(){
    uploadBtn.src = "images/uploadBtn.svg";
}
uploadBtn.addEventListener("mouseenter",hoverupl);
uploadBtn.addEventListener("mouseleave",hoveruplA);

let contenedor = crear("div", "class", "contenedor");
derecha.append(contenedor);

let you = crear("div", "class", "you");
contenedor.append(you);

let youtext = crear("h2", "class", "youtext");
youtext.innerText="You´ve used 815 GB of your storage";
you.append(youtext);

let contbarra = crear("div", "class", "contbarra");
contenedor.append(contbarra);

let fondobarra = crear("div", "class", "fondobarra");
contbarra.append(fondobarra);

let progresobarra = crear("div", "class", "progresobarra");
fondobarra.append(progresobarra);

let gb = crear("div", "class", "gb");
contenedor.append(gb);

let gb0 = crear("h3", "class", "gb0");
gb0.innerText="0 GB";
gb.append(gb0);

let gb1000 = crear("h3", "class", "gb1000");
gb1000.innerText="1000 GB";
gb.append(gb1000);

let circulo = crear("div","class", "circulo");
progresobarra.append(circulo);