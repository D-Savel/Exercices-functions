//Fonction qui inverse l'ordre des lettres d'une string qui prend pour argument 'string'
const reverseStr = (string) => {
  let reverse = string
    .split('')
    .reverse()
    .join('')
  return reverse
}

const isPalindrome = (string) => {
  let reverse = string
    .split('')
    .reverse()
    .join('')
  if (reverse === string) {
    return true
  } else {
    return false
  }
}

console.log(`pour le mot bonjour la fonction reverseStr retourne ${reverseStr('bonjour!')}`)
console.log(`pour le mot bonjour la fonction isPalindrome retourne ${isPalindrome('bonjour')}`)
console.log(`pour le mot kayak la fonction isPalindrome retourne ${isPalindrome('kayak')}`)
