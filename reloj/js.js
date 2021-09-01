
const crear = function (elemento, tipo, nombre) {
    const creador = document.createElement(elemento);
    creador.setAttribute(tipo, nombre);
    return creador;
  };

  const reloj = crear("div","class","reloj");
  document.body.append(reloj);

  const adentro = crear("div","class","adentro")
  reloj.append(adentro);

  const min = crear("div","class","manecilla min")
  adentro.append(min);

  const seg = crear("div","class","manecilla seg")
  adentro.append(seg);

  const hr = crear("div","class","manecilla hr")
  adentro.append(hr);

  const circulo = crear("div", "class", "circulo");
  adentro.append(circulo);

  function setday(){
      const now = new Date();

      const segundos = now.getSeconds();
      const seggrados = ((segundos / 60)* 360) +90;
      seg.style.transform = `rotate(${seggrados}deg)`;

      const minutos = now.getMinutes();
      const mingrados = ((minutos / 60)* 360)+((segundos / 60)* 6) +90;
      min.style.transform = `rotate(${mingrados}deg)`;

      const hora =now.getHours();;
      const horagrados = ((hora / 12 )*360) +((minutos / 60)*30) +90;
      hr.style.transform = `rotate(${horagrados}deg)`;

  }



  setInterval(setday,1000);
  setday();