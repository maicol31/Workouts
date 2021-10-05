
document.getElementById("formulario"),addEventListener("submit",crear);
let botonnuevo = document.querySelector("#nuevo");
let mostrarform = document.querySelector(".ocultar");


botonnuevo.addEventListener("click",() =>{
    mostrarform.classList.add("mostrar");
   
})

function crear(e){
    codigo = document.getElementById("codigo").value
    descripcion = document.getElementById("descripcion").value
    valor_min = document.getElementById("valor-minimo").value
    valor_max = document.getElementById("valor-maximo").value

    let objeto = {
        codigo,
        descripcion,
        valor_min,
        valor_max
    }
    if(localStorage.getItem("datos") === null){
        let datos = []
        datos.push(objeto)
        localStorage.setItem("datos",JSON.stringify(datos))
    }else{
        let datos = JSON.parse(localStorage.getItem("datos"))
        datos.push(objeto)
        localStorage.setItem("datos",JSON.stringify(datos))
    }
    document.getElementById("formulario").reset();
    console.log("datos guardados");
    e.preventDefault();

    location.reload()
}

function pintar(){
    let mostrar = JSON.parse(localStorage.getItem("datos"))
    document.getElementById("tbody").innerHTML = ""
    for(let i = 0; i < mostrar.length; i++){
       let codigo = mostrar[i].codigo
       let descripcion = mostrar[i].descripcion
       let valor_min = mostrar[i].valor_min
       let valor_max = mostrar[i].valor_max
        
    
       document.getElementById("tbody").innerHTML +=
       `<tr>
            <td>${codigo}</td>
            <td>${descripcion}</td>
            <td>${valor_min}</td>
            <td>${valor_max}</td>
            <td><button onclick="editar('${codigo}')" class="btneditar"></button>
            <button onclick="eliminar('${codigo}')" class="btneliminar"></button></td>
        </tr>`
    }
    
    
}
function editar(codigo){
    let datos = JSON.parse(localStorage.getItem("datos"));
    for (let i = 0; i<datos.length; i++) {
    if (datos[i].codigo === codigo) {
        document.getElementById("body").innerHTML =`

        <form action="" id="formulario" >
        <div class="barraazul">
            <span>Evaluacion de riesgos</span>
        </div>
        <label for="">codigo</label>
        <input type="text" class="codigo" id="newcodigo" placeholder='${datos[i].codigo}'> 

        <label for="">descripcion</label>
        <input type="text" class="descripcion" id="newdescripcion" placeholder='${datos[i].descripcion}'> 

        <label for="">valor minimo</label>
        <input type="text" class="valor-minimo" id="newvalor-minimo" placeholder='${datos[i].valor_min}'> 

        <label for="">valor maximo</label>
        <input type="text" class="valor-maximo" id="newvalor-maximo" placeholder='${datos[i].valor_max}'> 

        <button onclick="actualizar('${i}')" class="guardar">guardar</button>

    </form>
        
    `
    }
    
    }
    
}
function actualizar(i){

  let datos = JSON.parse(localStorage.getItem("datos"));
  datos[i].codigo = document.getElementById("newcodigo").value;
  datos[i].descripcion = document.getElementById("newdescripcion").value;
  datos[i].valor_min = document.getElementById("newvalor-minimo").value;
  datos[i].valor_max = document.getElementById("newvalor-maximo").value;
    localStorage.setItem("datos",JSON.stringify(datos));
    
    location.reload()
}
function eliminar(codigo){
    let datos = JSON.parse(localStorage.getItem("datos"));
    for (let i=0; i<datos.length; i++) {
        if (datos[i].codigo === codigo) {
         datos.splice(i,1);   
        }
    }
    localStorage.setItem("datos",JSON.stringify(datos));
    pintar();
}
pintar();



