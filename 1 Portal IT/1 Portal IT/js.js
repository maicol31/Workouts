let crear = function (elemento, tipo, nombre) {
    let creador = document.createElement(elemento);
    creador.setAttribute(tipo, nombre);
    return creador;
};

let contenedor = crear("div", "class", "contenedor");
document.body.append(contenedor);

let superior = crear("div", "class", "superior");
contenedor.append(superior);




let contmitad = crear("div","class","contmitad");
contenedor.append(contmitad);


let izquierda = crear("div","class","izquierda");
contmitad.append(izquierda);

let img = crear("img","src","images/Imageners-teamviewer-2.jpg")
izquierda.append(img)

let derecha = crear("div", "class", "derecha");
contmitad.append(derecha);


let ayuda = crear("div","class","ayuda");
ayuda.innerText ="Ayuda remota"
derecha.append(ayuda);

let form = crear("form","class","form");
derecha.append(form);

let crearin = function(tipo,place,id,nombre,max){
    let input = crear("input","type",tipo)
    input.placeholder = place;
    input.id = id;
    input.name = nombre;
    input.maxLength = max;
    input.required;
    return input;

}



let nombre = crearin("text","Nombre y apellido", "nombre","nombre",20);
form.append(nombre);

let NIT = crearin("number","NIT o nombre de la empresa", "nit","nit",20);
form.append(NIT);

let descripcion = crearin("text","Breve descripcion del incoveniente", "descripcion","descripcion",50);
form.append(descripcion);

let telefono = crearin("number","Telefono o celular", "telefono","telefono",10);
form.append(telefono);

let correo = crearin("email","Correo electronico", "correo","correo",50);
form.append(correo);

let validacion = Array.from(document.querySelectorAll("input"));
validacion.map ((input) => {
    
    input.addEventListener("keyup", () => {
        
        let validacion_numeros = new RegExp('([0-9])');
        if(input.id == "telefono"){
            if (input.value =="") {
                input.style.border = "2px solid red";
                
            } else {
                input.style.border = "2px solid red";
                if(validacion_numeros.test(input.value)){
                     input.style.border = "2px solid green";
                    
                    console.log(input);
                }
            }
        }
    })

    input.addEventListener("keyup", () => {
        
        let validacion_nombre = new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
        if(input.id == "nombre"){
            if (input.value =="") {
                input.style.border = "2px solid red";
                
            } else {
                input.style.border = "2px solid red";
                if(validacion_nombre.test(input.value)){
                     input.style.border = "2px solid green";
                    
                    console.log(input);
                }
            }
        }
        let validacion_correo = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,);
        if(input.id == "correo"){
            if (input.value =="") {
                input.style.border = "2px solid red";
                
            } else {
                input.style.border = "2px solid red";
                if(validacion_correo.test(input.value)){
                     input.style.border = "2px solid green";
                    
                    console.log(input);
                }
            }
        }
        let validacion_apellido = new RegExp('([0-9])');
        if(input.id == "nit"){
            if (input.value =="") {
                input.style.border = "2px solid red";
                
            } else {
                input.style.border = "2px solid red";
                if(validacion_apellido.test(input.value)){
                     input.style.border = "2px solid green";
                    
                    console.log(input);
                }
            }
        }
        let validacion_descripcion = new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
        if(input.id == "descripcion"){
            if (input.value =="") {
                input.style.border = "2px solid red";
                
            } else {
                input.style.border = "2px solid red";
                if(validacion_descripcion.test(input.value)){
                     input.style.border = "2px solid green";
                    
                    console.log(input);
                }
            }
        }
        
    })

})
let conttexto = crear("div","class","conttexto")
derecha.append(conttexto);

let texto = crear("div","class","texto");

let checkbox = crear("input","type","checkbox");
checkbox.id = "check";

let terminos = crear("span","class","terminos");
terminos.innerHTML =  'Al enviar este formulario, autorizo  el servicio de software TeamViewer para realizar el acceso remoto,autorizo realizar cambiosen el equipo los cuales incluyen puntos de restauracion del sistema operativo,manifiesto que conozco la <bl>politica de proteccion de datos</bl> "autorizo de manera voluntaria, previa,expresa e inequivoca a SINCOSOFT S.A.S, para tratar mis datos personales ycaracter sensible (encaso de ser necesaria su recoleccion, de acuerdo con las politicas de tratamiento de datos personalesde la empresa y para los fines relacionados con su objeto social y especial para fines legales, contractuales y comerciales de SINCOSOFT S.A.S. De igual manera, acepto los <bl>"terminos condiciones"</bl> establecidos por SINCOSOFT S.A.S';
texto.append(checkbox,terminos);
conttexto.append(texto);

let contbtn = crear("div","class","contbtn")
conttexto.append(contbtn)

let btn = crear("button","class","button")
btn.innerText ="Solicitar sesión";
contbtn.append(btn);

let continferior = crear ("footer","class","continferior");
continferior.innerHTML ="PBX:(571) 5 190 343 - Cr. 12#79-50-Bogota, D.C, Colombia - Copyright 2016. SINCOSOFT S.A.S Todos los derechos reservados"
contenedor.append(continferior);
