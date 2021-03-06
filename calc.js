const add = (nb1, nb2) => {
  return nb1 + nb2
}

const sub = (nb1, nb2) => {
  return nb1 - nb2
}

const mul = (nb1, nb2) => {
  return nb1 * nb2
}

const div = (nb1, nb2) => {
  return nb1 / nb2
}

const calc = (operator, nb1, nb2) => {
  switch (operator) {
    case '+':
      return add(nb1, nb2)
    case '-':
      return sub(nb1, nb2)
    case 'x':
      return mul(nb1, nb2)
    case '/':
      return div(nb1, nb2)
    default:
      return 'opérateur non connu'
  }
}

console.log(calc('-', 10, 2,))
console.log(calc('+', 10, 2,))
console.log(calc('x', 10, 2,))
console.log(calc('%', 10, 2,))
