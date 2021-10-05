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
   

    let probabilidades = {
        codigo,
        descripcion,
        valor_min
       
    }
    if(localStorage.getItem("proba") === null){
        let proba = []
        proba.push(probabilidades)
        localStorage.setItem("proba",JSON.stringify(proba))
    }else{
        let proba = JSON.parse(localStorage.getItem("proba"))
        proba.push(probabilidades)
        localStorage.setItem("proba",JSON.stringify(proba))
    }
    document.getElementById("formulario").reset();
    console.log("proba guardados");
    e.preventDefault();

    location.reload()
}

function pintar(){
    let mostrar = JSON.parse(localStorage.getItem("proba"))
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
    let proba = JSON.parse(localStorage.getItem("proba"));
    for (let i = 0; i<proba.length; i++) {
    if (proba[i].codigo === codigo) {
        document.getElementById("body").innerHTML =`

        <form action="" id="formulario">
        <div class="barraazul">
            <span>PROBABILIDADES</span>
        </div>
        <label for="">codigo</label>
        <input type="text" class="codigo" id="newcodigo" placeholder='${proba[i].codigo}'>
        
        <label for="">descripcion</label>
        <input type="text" class="descripcion" id="newdescripcion" placeholder='${proba[i].descripcion}'>
        
        <label for="">valor</label>
        <input type="text" class="valor-minimo" id="newvalor-minimo" placeholder='${proba[i].valor_min}'>
        
        
        
        
        <button onclick="actualizar('${i}')" class="guardar">guardar</button>
        
    </form>
        
    `
    }
    
    }
    
}
function actualizar(i){

  let proba = JSON.parse(localStorage.getItem("proba"));
  proba[i].codigo = document.getElementById("newcodigo").value;
  proba[i].descripcion = document.getElementById("newdescripcion").value;
  proba[i].valor_min = document.getElementById("newvalor-minimo").value;
    localStorage.setItem("proba",JSON.stringify(proba));
    
    location.reload()
}
function eliminar(codigo){
    let proba = JSON.parse(localStorage.getItem("proba"));
    for (let i=0; i<proba.length; i++) {
        if (proba[i].codigo === codigo) {
         proba.splice(i,1);   
        }
    }
    localStorage.setItem("proba",JSON.stringify(proba));
    pintar();
}
pintar();



