import axios from "axios";

const baseUrl = "http://localhost:4000/api";

export async function savePark(parque) {
  try {
    const formData = new FormData();

    formData.append("nombre", parque.nombre);
    formData.append("descripcion", parque.descripcion);
    formData.append("imagen", parque.image);
    formData.append("direccion", parque.direccion);
    formData.append("latitud", parque.latitud);
    formData.append("longitud", parque.longitud);
    formData.append("fechaDecreto", parque.fechaDecreto);
    formData.append("superficieTerrestre", parque.superficieTerrestre);
    formData.append("superficieMarina", parque.superficieMarina);

    let response = axios
      .post(`${baseUrl}/addparques`, {
        parque: parque,
      })
      .catch(function (error) {
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
  try {
    const formData = new FormData();

    formData.append("nombre", cartaruta.nombre);
    formData.append("descripcion", cartaruta.descripcion);
    formData.append("parqueId", cartaruta.parqueId);

    let response = axios
      .post(`${baseUrl}/addcartaruta/`, {
        cartaruta: cartaruta,
      })
      .catch(function (error) {
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
    let response = axios
      .delete(`${baseUrl}/deleteparque/${parkId}`, {
        id: parkId,
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  } catch (event) {
    console.log(event);
  }

  //window.location.reload(false);
}

export async function updateFauna(fauna) {
  try {
    let response = axios
      .put(`${baseUrl}/editFauna/${fauna.id}`, {
        id: fauna.id,
        nombre: fauna.nombre,
        imagen: fauna.imagen,
        titulo: fauna.titulo,
        descripcion: fauna.descripcion,
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  } catch (event) {
    console.log(event);
  }
}

export async function updatePark(park) {
  try {
    let response = axios
      .put(`${baseUrl}/editParque/${park.id}`, {
        id: park.id,
        nombre: park.nombre,
        descripcion: park.descripcion,
        imagen: park.imagen,
        direccion: park.direccion,
        latitud: park.latitud,
        longitud: park.longitud,
        fechaDecreto: park.fechaDecreto,
        superficieTerrestre: park.superficieTerrestre,
        superficieMarina: park.superficieMarina,
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  } catch (event) {
    console.log(event);
  }
}

export async function updateFlora(flora) {
  try {
    let response = axios
      .put(`${baseUrl}/editFlora/${flora.id}`, {
        id: flora.id,
        nombre: flora.nombre,
        imagen: flora.imagen,
        titulo: flora.titulo,
        descripcion: flora.descripcion,
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  } catch (event) {
    console.log(event);
  }
}

export async function saveHorario(horario) {
  try {
    const formData = new FormData();

    formData.append("dias", horario.dias);
    formData.append("horaAbrir", horario.horaAbrir);
    formData.append("horaCerrar", horario.horaCerrar);
    formData.append("parqueId", horario.parqueId);

    let response = axios
      .post(`${baseUrl}/addhorario/`, {
        horario: horario,
      })
      .catch(function (error) {
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

export async function deleteHorario(horarioId) {
  try {
    let response = axios
      .delete(`${baseUrl}/deletehorario/${horarioId}`, {
        id: horarioId,
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  } catch (event) {
    console.log(event);
  }
}

export async function deleteAnuncio(anuncioId) {
  try {
    let response = axios
      .delete(`${baseUrl}/deleteanuncio/${anuncioId}`, {
        id: anuncioId,
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  } catch (event) {
    console.log(event);
  }
}

export async function saveFauna(fauna) {
  try {
    const formData = new FormData();

    formData.append("nombre", fauna.nombre);
    formData.append("descripcion", fauna.descripcion);
    formData.append("imagen", fauna.image);
    /*let response = await axios.post("http://localhost:4000/api/addparques", {
      parkData,
    });*/

    let response = axios
      .post(`${baseUrl}/addfauna`, {
        fauna: fauna,
      })
      .catch(function (error) {
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

export async function saveFlora(flora) {
  try {
    const formData = new FormData();

    formData.append("nombre", flora.nombre);
    formData.append("descripcion", flora.descripcion);
    formData.append("imagen", flora.image);
    /*let response = await axios.post("http://localhost:4000/api/addparques", {
      parkData,
    });*/

    let response = axios
      .post(`${baseUrl}/addflora`, {
        flora: flora,
      })
      .catch(function (error) {
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

export async function saveAnuncio(anuncio) {
  try {
    const formData = new FormData();

    formData.append("descripcion", anuncio.descripcion);
    formData.append("parqueId", anuncio.parqueId);

    let response = axios
      .post(`${baseUrl}/addanuncio/`, {
        anuncio: anuncio,
      })
      .catch(function (error) {
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

export async function saveFloraPark(floraPark) {

  try {
    let response = axios
      .post(`${baseUrl}/addFloraPark`, {
        floraId: floraPark.floraId,
        parqueId: floraPark.parqueId
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  } catch (event) {
    console.log(event);
  }
}

export async function saveFaunaPark(faunaPark) {

  try {
    let response = axios
      .post(`${baseUrl}/addFaunaPark`, {
        faunaId: faunaPark.faunaId,
        parqueId: faunaPark.parqueId
      })
      .catch(function (error) {
        console.log(error);
      });

    return response;
  } catch (event) {
    console.log(event);
  }
}