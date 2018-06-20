const getFact = (collection) => {
  const randomIndex = Math.floor(Math.random() * Math.floor(collection.length))
  return collection[randomIndex];
}

module.exports = {
  getFact
}
