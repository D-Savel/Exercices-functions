const for_Each = (array, fction) => {
  let newArray = []
  for (const elem of array) {
    newArray.push(fction(elem))
  }
  return newArray
}

fction = (elem) => '<' + (elem).toString() + '>'

console.log(for_Each([1, 'r', 15, 'Name'], fction))
console.log(for_Each([1, 'r', 15, 'Name'], (elem) => typeof (elem) === 'number' ? elem : NaN))
