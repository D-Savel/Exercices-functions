//Fonction qui retourne le plus grand nombre d'un tableau
//array corespond à un tableau de nombre de forme [nb, nb1, nb3, ...]

const biggest = (array) => {
  let number = 0
  for (const elem of array) {
    elem > number ? number = elem : ''
  }
  return number
}

//Fonction qui classe les nombres d'un tableau dans l'ordre croissant en retournant un nouveau tableau
//array corespond à un tableau de nombre de forme [nb, nb1, nb3, ...]
const sortAscend = (array) => {
  return array.sort()
}

const makeUnique = (array) => {
  return new Set([1, 2, 1, 3, 2, 4, 5, 7, 5, 1])
}


console.log(`le plus grand nombre du tableau [99, 100, 101, 1] est ${biggest([99, 100, 101, 1])}\n`)

let sorted = sortAscend([99, 100, 101, 1])
console.log("Voici le tableau [99, 100, 101, 1] dans l'ordre croissant :")
console.log(sorted)
console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))
