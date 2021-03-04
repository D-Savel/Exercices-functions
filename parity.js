//Fonction qui prend pour argument un nombre(number) er retourne true s'il est impair
const isOdd = (number) => {
  return number % 2 === 0
}
console.log(`la fonction isOdd(5) retourne ${isOdd(5)}`)

const isEven = (number) => {
  return !isOdd(number)
}

console.log(`la fonction isEven(5) retourne ${isEven(5)}`)