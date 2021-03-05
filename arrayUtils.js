//Fonction qui retourne le plus grand nombre d'un tableau
//array corespond à un tableau de nombre de forme [nb, nb1, nb3, ...]

const biggest = (array) => {
  let number = array[0]
  for (const elem of array) {
    elem > number ? number = elem : ''
  }
  return number
}

//Fonction qui classe les nombres d'un tableau dans l'ordre croissant en retournant un nouveau tableau
//array corespond à un tableau de nombre de forme [nb, nb1, nb3, ...]
const sortAscend = (array) => {
  return array.sort((a, b) => a - b)
}

console.log(`le plus grand nombre du tableau [99, 100, 101, 1] est ${biggest([99, 100, 101, 1])}`)


console.log("\nVoici le tableau [99, 100, 101, 1] dans l'ordre croissant :")
console.log(sortAscend([99, 100, 101, 1]))

const makeUnique = (array) => {
  let newarray = []
  for (const elem of array) {
    !newarray.includes(elem) ? newarray.push(elem) : ''
  }
  return newarray
}

console.log("\nVoici le tableau [1, 2, 8, 3, 8, 4, 5, 5, 5, 1] sans doublon triés dans l'ordre croissant :")
console.log(sortAscend(makeUnique([1, 2, 8, 3, 8, 4, 5, 5, 5, 1])))
