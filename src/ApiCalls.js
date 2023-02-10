const getUrl = (endpoint) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}`)
  .then((response) => response.json())
}

const getData = (id) => {
  if(id === undefined) {
    return Promise.all([getUrl("movies")])
  } else {
    console.log("detaulfetch is firing")
    console.log("fetch id", id)
    return Promise.all([getUrl(`movies/${id}`)])

  }
}

export { getData }