import { datos } from "./datos.js"

let crear = function (elemento, tipo, nombre) {
      let creador = document.createElement(elemento);
      creador.setAttribute(tipo, nombre);
      return creador;
};


let contenedor = crear("div", "class", "contenedor");
document.body.append(contenedor);

let componente = function (imagen, tx1, tx2, num1, num2, num3) {


      let tarjeta = crear("div", "class", "tarjeta");
      contenedor.append(tarjeta);

      let contFoto = crear("div", "class", "contFoto");
      tarjeta.append(contFoto);

      let imagen1 = crear("img", "src", imagen);
      contFoto.append(imagen1);

      let nombre = crear("div", "class", "nombre");
      nombre.innerText = tx1;
      tarjeta.append(nombre);

      let desempeño = crear("div", "class", "desempeño");
      desempeño.innerText = tx2;
      tarjeta.append(desempeño);

      let contredes = crear("div", "class", "contredes");
      tarjeta.append(contredes);

      let facebook = crear("img", "src", "img/akar-icons_facebook-fill.svg")
      contredes.append(facebook);

      let instagram = crear("img", "src", "img/ant-design_instagram-filled.svg")
      contredes.append(instagram);

      let twitter = crear("img", "src", "img/twiter.svg")
      contredes.append(twitter);

      let github = crear("img", "src", "img/akar-icons_github-fill.svg")
      contredes.append(github);

      let follow = crear("button", "class", "followbtn");
      follow.innerText = "Follow"
      tarjeta.append(follow);

      let contfollow = crear("div", "class", "contfollow");
      tarjeta.append(contfollow);


      let followers = crear("div", "class", "followerscont");
      contfollow.append(followers);

      let following = crear("div", "class", "followerscont");
      contfollow.append(following);

      let photos = crear("div", "class", "followerscont");
      contfollow.append(photos);

      let followersNum = crear("div", "class", "numero");
      followersNum.innerText = num1;
      followers.append(followersNum);

      let followingNum = crear("div", "class", "numero");
      followingNum.innerText = num2;
      following.append(followingNum);

      let photosNum = crear("div", "class", "numero");
      photosNum.innerText = num3;
      photos.append(photosNum);

      let followersText = crear("div", "class", "text");
      followersText.innerText = "Followers"
      followers.append(followersText);


      let followingText = crear("div", "class", "text");
      followingText.innerText = "Following"
      following.append(followingText);


      let photosText = crear("div", "class", "text");
      photosText.innerText = "Photos"
      photos.append(photosText);
}
/* const tarjeta1 = componente("img/1.svg", "Victor Cortes", "Programador y diseñador web", "100k", "20k", "62k");
const tarjeta2 = componente("img/2.svg", "James Alfonso", "Junior Frontenbd Developer", "90k", "50k", "70k");
const tarjeta3 = componente("img/3.svg", "Sandra Rodriguez", "Full Stack Enginner", "200k", "80k", "30k");
 */
window.onload = function () {
      fetch('datos.JSON')
            .then(response => response.json())
            .then(data =>{
                  console.log(data);
                  data.forEach(dato => {
                       var img = dato.imagen;
                       var tx1 = dato.nombre ;
                       var tx2 = dato.Especialidad;
                       var num1 = dato.followers;
                       var num2 = dato.following;
                       var num3 = dato.photos;
                       componente(img,tx1,tx2,num1,num2,num3);
                  });
            });
}

