/*let nbElement = 0
let reverse = True
let Char = ''
*/

//Fonction qui a pour paramètre (nbElement, 'char', 'reverse')
//Affiche dans le terminal le caractère contenu dans la variable char en formant une pyramide de base nbElement : nbElement nombre impair
//et inverse l'orientation de la pyramide si l'argument reverse est renseigné
showPyramid = (nbElement, char, reverse) => {
  if (!reverse === true) {
    for (i = 1; i <= nbElement; i += 2) {
      console.log(`${' '.repeat((nbElement - i) / 2)} ${char.repeat(i)} ${' '.repeat((nbElement - i) / 2)}`)
    }
  } else {
    for (i = nbElement; i > 0; i -= 2) {
      console.log(`${' '.repeat((nbElement - i) / 2)} ${char.repeat(i)} ${' '.repeat((nbElement - i) / 2)}`)
    }
  }
}

showPyramid(7, '$', 'reverse')//Affiche pyramide inversée de caractète $ avec base de 7 éléments

showPyramid(11, '@')//Affiche pyramide de caractète @ avec base de 11 éléments
