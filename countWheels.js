const NBWHEELS_MONOCYCLE = 1
const NBWHEELS_MOTO = 2
const NBWHEELS_VOITURE = 4
const NBWHEELS_LIMOUSINE = 6

const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
  return nb_monocycle * NBWHEELS_MONOCYCLE + nb_moto * NBWHEELS_MOTO + nb_voiture * NBWHEELS_VOITURE + nb_limousine * NBWHEELS_LIMOUSINE
}

console.log(countWheels(10, 20, 7, 2) === 90)
console.log(countWheels(2, 3, 4, 5))
