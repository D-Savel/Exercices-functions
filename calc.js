const add = (nb1, nb2) => {
  return nb1 + nb2
}

const sub = (nb1, nb2) => {
  return nb1 - nb2
}

const smul = (nb1, nb2) => {
  return nb1 * nb2
}

const div = (nb1, nb2) => {
  return nb1 / nb2
}

const calc = (nb1, nb2, operator) => {
  switch (operator) {
    case '+':
      return add(nb1, nb2)
      break;
    case '-':
      return sub(nb1, nb2)
      break;
    case 'x':
      return mul(nb1, nb2)
      break;
    case '/':
      return div(nb1, nb2)
      break;
  }
}

console.log(calc(10, 2, '/'))
