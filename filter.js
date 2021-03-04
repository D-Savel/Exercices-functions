const _filter = (array, fction) => {
  let newArray = []
  for (const elem of array) {
    fction(elem) ? newArray.push(elem) : ''
  }
  return newArray
}

let filterResult = _filter(['Maison', 'Voiture', 'Clé', 'Stylo'], word => word.length > 5)
console.log(filterResult)
console.log('############')
fction = elem => typeof elem === 'number'
filterResult = _filter(['Maison', 9, 'Voiture', 'Clé', 48, 'Stylo'], fction)
console.log(filterResult)