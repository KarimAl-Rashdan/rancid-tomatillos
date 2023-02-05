const getUrl = async (endpoint) => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}`)
  return await response.json()
}

const getData = () => {
  return Promise.all([getUrl("movies")])
}

export { getData }