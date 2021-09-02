const etiquetaA = document.querySelectorAll("a");
const resaltar = document.createElement("span");
resaltar.classList.add("highlight");
document.body.appendChild(resaltar);

for (let i = 0; i < etiquetaA.length; i++) {
    etiquetaA[i].addEventListener("mouseenter", function (){
        const medidas = this.getBoundingClientRect();
        const cordenadas = {
            width: medidas.width,
            height: medidas.height,
            top: medidas.top + window.scrollY,
            left: medidas.left + window.scrollX,

        };

        resaltar.style.width = `${cordenadas.width}px`;
        resaltar.style.height = `${cordenadas.height}px`;
        resaltar.style.transform = `translate(${cordenadas.left}px, ${cordenadas.top}px)`;
    });
}
