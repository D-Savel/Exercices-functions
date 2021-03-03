const count = (min, max, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(`${i}`)
  }
}

count(1, 10, 2) //Résultat attendu 1,3,5,7,9