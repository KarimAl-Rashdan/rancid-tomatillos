const getUrl = (endpoint) => {
  return fetch(` https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}`)
  .then((response) => response.json())
}

const getData = () => {
  return Promise.all([getUrl("movies")])
}

export { getData }