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
   

    let tipoRiesgo = {
        codigo,
        descripcion,
        valor_min
       
    }
    if(localStorage.getItem("TR") === null){
        let TR = []
        TR.push(tipoRiesgo)
        localStorage.setItem("TR",JSON.stringify(TR))
    }else{
        let TR = JSON.parse(localStorage.getItem("TR"))
        TR.push(tipoRiesgo)
        localStorage.setItem("TR",JSON.stringify(TR))
    }
    document.getElementById("formulario").reset();
    console.log("TR guardados");
    e.preventDefault();

    location.reload()
}

function pintar(){
    let mostrar = JSON.parse(localStorage.getItem("TR"))
    document.getElementById("tbody").innerHTML = ""
    for(let i = 0; i < mostrar.length; i++){
       let codigo = mostrar[i].codigo
       let descripcion = mostrar[i].descripcion
       let valor_min = mostrar[i].valor_min
       
        
    
       document.getElementById("tbody").innerHTML +=
       `<tr>
            <td>${codigo}</td>
            <td>${descripcion}</td>
            <td>${valor_min}</td>

            <td><button onclick="editar('${codigo}')" class="btneditar"></button>
            <button onclick="eliminar('${codigo}')" class="btneliminar"></button></td>
        </tr>`
    }
    
    
}
function editar(codigo){
    let TR = JSON.parse(localStorage.getItem("TR"));
    for (let i = 0; i<TR.length; i++) {
    if (TR[i].codigo === codigo) {
        document.getElementById("body").innerHTML =`

        <form action="" id="formulario">
                            <div class="barraazul">
                                <span>Evaluacion de riesgos</span>
                            </div>
                            <label for="">codigo</label>
                            <input type="text" class="codigo" id="newcodigo" placeholder='${TR[i].codigo}'>
                            
                            <label for="">descripcion</label>
                            <input type="text" class="descripcion" id="newdescripcion" placeholder='${TR[i].descripcion}'>
                            
                            <label for="">Interno</label>
                            <input type="text" class="valor-minimo" id="newvalor-minimo" placeholder='${TR[i].valor_min}'>
                            
                            
                            
                            
                            
                            <button onclick="actualizar('${i}')" class="guardar">guardar</button>
                            
                        </form>
    `
    }
    
    }
    
}
function actualizar(i){

  let TR = JSON.parse(localStorage.getItem("TR"));
  TR[i].codigo = document.getElementById("newcodigo").value;
  TR[i].descripcion = document.getElementById("newdescripcion").value;
  TR[i].valor_min = document.getElementById("newvalor-minimo").value;
    localStorage.setItem("TR",JSON.stringify(TR));
    
    location.reload()
}
function eliminar(codigo){
    let TR = JSON.parse(localStorage.getItem("TR"));
    for (let i=0; i<TR.length; i++) {
        if (TR[i].codigo === codigo) {
         TR.splice(i,1);   
        }
    }
    localStorage.setItem("TR",JSON.stringify(TR));
    pintar();
}
pintar();



