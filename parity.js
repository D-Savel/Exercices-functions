//Fonction qui prend pour argument un nombre(number) er retourne true s'il est impair
const isOdd = (number) => {
  if (number % 2 !== 0) {
    return true
  } else {
    return false
  }
}
console.log(`la fonction isOdd(5) retourne ${isOdd(5)}`)

const isEven = (number) => {
  if (isOdd(number) === false) {
    return true
  } else {
    return false
  }
}

console.log(`la fonction isEven(5) retourne ${isEven(5)}`)