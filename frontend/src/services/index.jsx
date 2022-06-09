import axios from "axios";
const baseUrl = "http://localhost:4000/api";

export async function savePark(parque) {
  console.log("ORE: ", parque);
  try {
    const formData = new FormData();
    console.log(parque);

    formData.append("nombre", parque.nombre);
    formData.append("descripcion", parque.descripcion);
    formData.append("imagen", parque.image.name);
    formData.append("direccion", parque.direccion);
    formData.append("latitud", parque.latitud);
    formData.append("longitud", parque.longitud);
    formData.append("fechaDecreto", parque.fechaDecreto);
    formData.append("superficieTerrestre", parque.superficieTerrestre);
    formData.append("superficieMarina", parque.superficieMarina);

    /*let response = await axios.post("http://localhost:4000/api/addparques", {
      parkData,
    });*/

    let response = axios
      .post("http://localhost:4000/api/addparques", {
        parque: parque,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    /*const response = await axios({
      url: `${baseUrl}"/addparques/`,
      method: "POST",
      data: parkData,
    });*/
    return response;
  } catch (event) {
    console.log(event);
  }
}

export async function saveCart(cartaruta) {
  console.log("ORE: ", cartaruta);
  try {
    const formData = new FormData();
    console.log(cartaruta.parqueid);

    formData.append("nombre", cartaruta.nombre);
    formData.append("descripcion", cartaruta.descripcion);
    formData.append("parqueId", cartaruta.parqueId);

    let response = axios
      .post("http://localhost:4000/api/addcartaruta/", {
        cartaruta: cartaruta,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    //const response = await axios({
    //url: `${baseUrl}"/addparques/`,
    //method: "POST",
    //data: parkData,
    //});
    return response;
  } catch (event) {
    console.log(event);
  }
}

export async function deletePark(parkId) {
  try {
    console.log("ID: ", parkId);
    let response = axios
      .delete(`${baseUrl}/deleteparque/${parkId}`, {
        id: parkId,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    return response;
  } catch (event) {
    console.log(event);
  }
}

export async function updatePark(parkId) {
  try {
    console.log("ID: ", parkId);
    let response = axios;
    /*  .delete(`${baseUrl}/deleteparque/${parkId}`, {
        id: parkId,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
      */

    return response;
  } catch (event) {
    console.log(event);
  }
}
