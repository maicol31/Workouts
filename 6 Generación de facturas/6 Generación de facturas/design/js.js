
let select = document.getElementById("select")
function crearSelect(abre,desc){
    let opcion = document.createElement("option")
     opcion.value=abre 
    opcion.innerHTML = abre + ' - ' + desc;
    select.append(opcion);
}
function mostrarMoneda(){
    fetch('moneda.JSON')
    .then(response => response.json())
    .then(data =>{
        data.forEach(dato => {
            let abre = dato.abreviatura;
            let desc = dato.descripcion;
            crearSelect(abre,desc)
        });
    })
}
mostrarMoneda();

let selectmodelo = document.getElementById("selectmodelo")
function crearSelect2(nom){
    let opcion2 = document.createElement("option")
    opcion2.innerHTML = nom;
    selectmodelo.append(opcion2)
}

function ModeloNFiltro(){
    fetch('modeloN.JSON')
    .then(response =>response.json())
    .then(data =>{
        data.forEach(dato=> {
            let nom = dato.nombre;
            crearSelect2(nom);
        })
    })
}
ModeloNFiltro();

let botoncultar = document.querySelector(".consultar")

let mano = document.querySelector(".mano")
let contBtnConsultar = document.querySelector(".contBtnConsultar")
let mitad = document.querySelector(".mitad")
let contenedorInputsAbajo = document.querySelector(".contenedorInputsAbajo")
let tabla = document.querySelector(".tabla")
let fechain = document.querySelector(".fechain")
let fechafin = document.querySelector(".contFechaI")
let ocultarf= document.querySelector(".contFechaF ")
let fechaid = document.getElementById("fechain");
let fechafinid = document.getElementById("fechafin");
let facturacion = document.getElementById("facturacion");
let clienteid = document.getElementById("cliente");
let modeloid = document.getElementById("selectmodelo");
let contFlotante = document.querySelector(".contFlotante")
let generar =document.getElementById("btnConsultar")
let contenedorSpanyInput = document.querySelector(".contenedorSpanyInput")
let facturaFiltro = []
fetch('facturaFiltro.JSON')
.then(response => response.json())
.then(data => facturaFiltro.push(...data))

botoncultar.addEventListener("click" ,()=>{
    document.querySelector(".loader-container").classList.remove("cargaO")
    setTimeout(loader,500)
    if (fechafinid.value < fechaid.value){
        alert("La fecha final no puede ser menor que la inicial")
    }else{

        mano.classList.add("ocultar")
        contBtnConsultar.classList.toggle("ocultar")
        contenedorInputsAbajo.classList.toggle("ocultar");
        fechain.classList.toggle("ocultar")
        fechafin.classList.toggle("ocultar")
        ocultarf.classList.toggle("ocultar")
        
        let contImputs = document.querySelector(".contImputs")
        contImputs.style.height="100px"
        
        let contInputsFechas = document.querySelector(".contInputsFechas")
        contInputsFechas.style.width="99%"
    
        contInputsFechas.innerHTML+=`  
        
        <div class="contFechaI"> 
        <div class="logoFecha">
        <img src="iconos facturas/iconos facturas/calendario.svg" alt="">
        </div>
        <div class="contenedorFechayInput ">
        <div class="contSpanFechaI ocultarf">
        <span>Fecha Inicial</span>
        </div>
       <span>${fechaid.value}</span>
       
       </div>
       
       </div>
       
       <div class="contFechaI"> 
       <div class="logoFecha">
       <img src="iconos facturas/iconos facturas/calendario.svg" alt="">
</div>
<div class="contenedorFechayInput ">
<div class="contSpanFechaI ocultarf">
<span>Fecha Final</span>
</div>
<span>${fechafinid.value}</span>

</div>

</div>

<div class="contFechaI"> 
<div class="logoFecha">
<img src="iconos facturas/iconos facturas/icono moneda.svg">
</div>
<div class="contenedorFechayInput ">
<div class="contSpanFechaI ocultarf">
<span>Moneda</span>
</div>
<span>${select.value}</span>
    </div>
        </div>  

<button class="btnFiltrar" id="btnFiltrar"> 
<img src="iconos facturas/iconos facturas/icono filtrar.svg">
<span>Filtrar</span>
</button>

<button class="btnConsultar" id="btnConsultar"> 
<span>Generar</span>
</button>

`
btnConsultar=document.getElementById("btnConsultar")
btnConsultar.disabled=true;
let btnFiltrar = document.getElementById("btnFiltrar")
btnFiltrar.addEventListener("click", ()=>{
    location.reload();
})
tabla.innerHTML+=`
<thead>
<th>Ver</th>
<th>Codigo de registro</th>
<th>Fecha registro</th>
<th>clienteIdentificacion</th>
<th>clienteCodigo</th>
<th>clienteNombre</th>
<th>descripcionOrdenFacturacion</th>
<th>modeloNegocio</th>
<th>formaPago</th>
<th>fechaVencimiento</th>
<th>valorTotalACobrar</th>
<th>valorAnticipo</th>
<th>asociarAnticipo</th>
<th><img src="iconos facturas/iconos facturas/icono no seleccionado.svg"></th>
</thead>
`  
facturaFiltro.forEach(element => {
    if (facturacion.value == element.codigoOrdenDeFacturacion || fechaid.value == element.fechaRegistro || fechafinid.value==element.fechaVencimiento|| clienteid.value==element.clienteNombre|| modeloid.value==element.modeloNegocio){
        
        tabla.innerHTML+=`
        <tr>
        <td id=""><div class="archivos"><img src="./iconos facturas/iconos facturas/icono adobe verde.svg" alt="">
        <img src="./iconos facturas/iconos facturas/icono documento verde.svg" alt=""></div></td>
        <td>${element.codigoOrdenDeFacturacion}</td>
        <td>${element.fechaRegistro}</td>
        <td>${element.clienteIdentificacion}</td>
        <td>${element.clienteCodigo}</td>
        <td>${element.clienteNombre}</td>
        <td>${element.descripcionOrdenFacturacion}</td>
        
        <td>${element.modeloNegocio}</td>
        <td><select id="guardarselect" onChange="validarcheck()"><option value="0">Dias</option><option value=${element.codigoOrdenDeFacturacion}>15</option><option value=${element.codigoOrdenDeFacturacion}>${element.formaPago} </option></select></td>
        <td>${element.fechaVencimiento}</td>
        <td>${element.valorTotalACobrar}</td>
        <td>${element.valorAnticipo}</td>
        <td>${element.asociarAnticipo}</td>
        <td id="imagencheck"><img src="iconos facturas/iconos facturas/icono no seleccionado.svg"></td>
        
        </tr>
        `
        guardartd = document.querySelectorAll("#imagencheck");
        guardarselect = document.querySelectorAll("#guardarselect");
        btnConsultar.addEventListener("click",()=>{
            contFlotante.style.display="flex";
            contFlotante.innerHTML=`
            <div class="flotante">
            <div class="barraazul">
            <span class="ODF">Órdenes de facturación procesadas</span>
            <button id="reload" onClick="reload()"><h2>X</h2></button>
            </div>
            <table id="tabla2">
            <thead>
            <th>Orden de facturacion</th>
                <th>Tipo de documento</th>
                <th>Factura</th>
                <th>Valor</th>
                <th>Ver</th>
                </thead>
                <tbody id="tbody"></tbody>
                </table>
                </div>
                `
                let tbody = document.getElementById("tbody")
                facturaFiltro.forEach(element=>{
                    
                    if (facturacion.value == element.codigoOrdenDeFacturacion || fechaid.value == element.fechaRegistro || fechafinid.value==element.fechaVencimiento|| clienteid.value==element.clienteNombre|| modeloid.value==element.modeloNegocio){
                        fetch("modeloN.JSON")
                        .then(response => response.json())
                        .then(data =>{
                            data.forEach(dato =>{
                                for (let i = 0; i <guardarselect.length; i++) {
                                    
                                    if (element.codigoOrdenDeFacturacion === dato.codigoOrdenDeFacturacion && guardarselect[i].value == element.codigoOrdenDeFacturacion){
                                        tbody.innerHTML+=`
                                        <tr>
                                        
                                        <td>${element.codigoOrdenDeFacturacion}</td>
                                        <td>${dato.tipoDocumentoFacturaDiaria}</td>
                                        <td>${dato.prefijo}</td>
                                        <td>${select.value}$${element.valorTotalACobrar}</td>
                                        <td><img src="iconos facturas/iconos facturas/icono adobe azul.svg">
                                        <img src="iconos facturas/iconos facturas/icono documento azul.svg">
                                        </td>
                                        
                                        </tr>
                                        `
                                    }
                                    
                                }
                            })
                        })
                    }
                })
            })
        }
    });
    
}
})

let guardartd;
let guardarselect;
let btnConsultar;

function reload(){
    location.reload();
}

function validarcheck(){
    for (let i = 0; i < guardarselect.length; i++) {
       if (guardarselect[i].value!="0") {
           guardartd[i].innerHTML=`<img src="iconos facturas/iconos facturas/icono seleccionado.svg">`
            btnConsultar.disabled=false;
            btnConsultar.style.background="#355882"
       }else{guardartd[i].innerHTML=`<img src="iconos facturas/iconos facturas/icono no seleccionado.svg">`}
    }
}

facturacion.addEventListener('keyup' , (e) => {
    let valorinputfa = e.target.value;
facturacion.value = valorinputfa
    .replace(/\s/g ,'')
    .replace(/\D/g, '')
    .trim(); //elimina el ultimo espacio
    
    })

    clienteid.addEventListener('keyup' , (e) => {
        let valorinputcli = e.target.value;
        clienteid.value = valorinputcli.  replace(/[0-9]/g, '')
        .trim(); //elimina el ultimo espacio
        
        })
 function loader(){
     document.querySelector(".loader-container").classList.add("cargaO")
 }       


    