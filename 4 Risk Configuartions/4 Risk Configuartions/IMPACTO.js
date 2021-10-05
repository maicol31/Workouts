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
   

    let impacto = {
        codigo,
        descripcion,
        valor_min
       
    }
    if(localStorage.getItem("datosImpac") === null){
        let datosImpac = []
        datosImpac.push(impacto)
        localStorage.setItem("datosImpac",JSON.stringify(datosImpac))
    }else{
        let datosImpac = JSON.parse(localStorage.getItem("datosImpac"))
        datosImpac.push(impacto)
        localStorage.setItem("datosImpac",JSON.stringify(datosImpac))
    }
    document.getElementById("formulario").reset();
    console.log("datosImpac guardados");
    e.preventDefault();

    location.reload()
}

function pintar(){
    let mostrar = JSON.parse(localStorage.getItem("datosImpac"))
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
    let datosImpac = JSON.parse(localStorage.getItem("datosImpac"));
    for (let i = 0; i<datosImpac.length; i++) {
    if (datosImpac[i].codigo === codigo) {
        document.getElementById("body").innerHTML =`

        <form action="" id="formulario">
                            <div class="barraazul">
                                <span>IMPACTO</span>
                            </div>
                            <label for="">codigo</label>
                            <input type="text" class="codigo" id="newcodigo" placeholder='${datosImpac[i].codigo}'>
                            
                            <label for="">descripcion</label>
                            <input type="text" class="descripcion" id="newdescripcion"placeholder='${datosImpac[i].descripcion}'>
                            
                            <label for="">valor</label>
                            <input type="text" class="valor-minimo" id="newvalor-minimo"placeholder='${datosImpac[i].valor_min}'> 
                            
                            <button onclick="actualizar('${i}')" class="guardar">guardar</button>

                            
                        </form>
        
    `
    }
    
    }
    
}
function actualizar(i){

  let datosImpac = JSON.parse(localStorage.getItem("datosImpac"));
  datosImpac[i].codigo = document.getElementById("newcodigo").value;
  datosImpac[i].descripcion = document.getElementById("newdescripcion").value;
  datosImpac[i].valor_min = document.getElementById("newvalor-minimo").value;
    localStorage.setItem("datosImpac",JSON.stringify(datosImpac));
    
    location.reload()
}
function eliminar(codigo){
    let datosImpac = JSON.parse(localStorage.getItem("datosImpac"));
    for (let i=0; i<datosImpac.length; i++) {
        if (datosImpac[i].codigo === codigo) {
         datosImpac.splice(i,1);   
        }
    }
    localStorage.setItem("datosImpac",JSON.stringify(datosImpac));
    pintar();
}
pintar();



