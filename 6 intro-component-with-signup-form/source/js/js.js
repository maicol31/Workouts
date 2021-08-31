
const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

    pass: /^.{4,12}$/, // 4 a 12 digitos.

};

/* const campos = {
    validar:false,
    valapellido:false , 
    valemail: false,
    valpass:false
} */


let crear = function(elemento, tipo, nombre){
let creador = document.createElement(elemento);
creador.setAttribute(tipo, nombre);
return creador;
}


let main = crear("main" ,"class", "contenedor");
document.body.append(main);

let izquierda = crear("div", "class", "izquierda");
main.append(izquierda);

let p = crear("p", "class","titulo");
p.innerText="Learn to code by watching others";
izquierda.append(p);

let ab = crear("div","class","ab");
izquierda.append(ab);

let h6 = crear("h6");
h6.innerText="See how experienced developers solve problems in real-time. watching scripted tutorials is great, but understanding how developers think isinvaluable"
ab.append(h6);

let derecha = crear("div","class","derecha");
main.append(derecha);

 let morado = crear("div","class","morado");
 derecha.append(morado);

 let tx = crear("p","class","tx");
 tx.innerHTML="<strong> Try it free 7 days </strong>then $20/mo. thereafter";
 morado.append(tx);

 let form = crear("form","id","form");
 derecha.append(form);


 let formulario = function(clase, tipo,ph){
     let creador = document.createElement("input");
     creador.setAttribute("class", clase);
     creador.type=tipo;
     creador.placeholder = ph;
     creador.required;
     return creador;

 }

    let validar = crear("div", "id", "validar");/*cambiar id */
    let conterror = crear("div", "class", "conterror");/*no se cambia */
    validar.append(conterror);
    form.append(validar);
    let imagen = crear("img","class", "imagen");/*no se cambia */
    imagen.src="images/icon-error.svg";
    conterror.append(imagen);

    let msg = crear("p","class", "msg");/*no se cambia */
    msg.innerText="First Name cannot by empty";
    validar.append(msg);


    let valapellido = crear("div", "id", "valapellido");
    let errorapellido = crear("div", "class", "conterror");
    valapellido.append(errorapellido);
    form.append(valapellido);
    let imagenapellido = crear("img","class", "imagen");
    imagenapellido.src="images/icon-error.svg";
    errorapellido.append(imagenapellido); 

    let msgapellido = crear("p","class", "msg");
    msgapellido.innerText="Last Name cannot by empty";
    valapellido.append(msgapellido); 




    let valemail = crear("div", "id","valemail");
    let erroremail = crear("div", "class","conterror");
    valemail.append(erroremail);
    form.append(valemail);
    let imagenemail = crear("img","class", "imagen");
    imagenemail.src="images/icon-error.svg";
    erroremail.append(imagenemail);

    let msgemail = crear("p","class","msg");
    msgemail.innerText="Looks like this is not an email";
    valemail.append(msgemail);


    let valpass = crear("div","id","valpass");
    let errorpass = crear("div", "class", "conterror");
    valpass.append(errorpass);
    form.append(valpass);
    let imagenpass = crear("img", "class", "imagen");
    imagenpass.src="images/icon-error.svg";
    errorpass.append(imagenpass);

    let msgpass = crear("p","class","msg");
    msgpass.innerText="Password cannot by empty";
    valpass.append(msgpass);



 let nombre = formulario("nombre medida", "text","First Name", "nomb");
 conterror.append(nombre);

 let apellido = formulario("apellido medida", "text","Last Name", "apell");
 errorapellido.append(apellido);

 let email = formulario("email medida", "email","Email Address","ema");
 erroremail.append(email);

 let pass = formulario("pass medida", "password","password", "contr");
 errorpass.append(pass);

 let boton = crear("button", "type", "submit");
 boton.innerHTML="CLAIM YOUR FREE TRIAL";
 form.append(boton);

 let by = crear("p","class","by");
 by.innerHTML="By clicking the button. you aro agreeing to our <red> Terms and Services</red>";
form.append(by);


/*guada el formulario dentro  de la variable formid */
let formid = document.getElementById("form");
let tinputs = document.querySelectorAll("#form input");



let validarformulario = (e) =>{
    /*llama los name de cada input */
    switch(e.target.name){
        case "nomb":
        if (expresiones.nombre.test(e.target.value))
    {
             document.getElementById("validar").classList.remove("validar_incorrecto"); 
             //ampos[validar]=true;
    }
        else{
            document.getElementById("validar").classList.add("validar_incorrecto");
            //campos[validar]=false;
    }
       break

        case "apell": 
        if (expresiones.apellido.test(e.target.value))
        {
                 document.getElementById("valapellido").classList.remove("validar_incorrecto");
                 //campos[valapellido]=true;
        }
            else{
                document.getElementById("valapellido").classList.add("validar_incorrecto");
               //campos[valapellido]=false;

        }
           break

        case "ema":
        if(expresiones.email.test(e.target.value))
        
        
        {  
            document.getElementById("valemail").classList.remove("validar_incorrecto");
            //campos[valemail]=true;
            
        }

            else{
                document.getElementById("valemail").classList.add("validar_incorrecto");
                ///campos[valemail]=false;

            }
            break

        case "contr":
        if(expresiones.pass.test(e.target.value))
        {
            document.getElementById("valpass").classList.remove("validar_incorrecto");
            ///campos[valpass]=true;

        }
        
        else{
            document.getElementById("valpass").classList.add("validar_incorrecto");
            //campos[valpass]=false;

        }
        break

        
        
    }
    };
        /* recorrecada uno de los inputs */
    tinputs.forEach(
        (input) =>{
            input.addEventListener("keyup", validarformulario);
            input.addEventListener("blur", validarformulario);
        }
    );

    formid.addEventListener(
            "submit", (e)=>{
               
                
                    formid.reset();
                        
            }
    );




