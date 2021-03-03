let string = 'string'
let number = 9

const DefineType = (variableName) => {
  return typeof variableName
}

let showType = DefineType(string)
console.log(showType)//Resultat attendu string
showType = DefineType(number)
console.log(showType)//Resultat attendu number
