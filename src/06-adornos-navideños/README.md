# Reto 6: Creando adornos navideños

## Problema

Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

```js
const cube = createCube(3)

  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
```

Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: /, \, \_ y (espacio en blanco).

Otros ejemplos de cubos:

```js
const cubeOfOne = createCube(1)

/\_\
\/_/
```

```js
const cubeOfTwo = createCube(2)

 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
```

**A tener en cuenta:**

- Fíjate bien en los espacios en blanco que hay en el cubo.
- El cubo tiene que ser simétrico.
- Asegúrate de usar los símbolos correctos.
- Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.

## Mi Solución

```js
function createCube(size) {
  let piecesTriangle = '/\\', piecesInvertedTriangle = '\\/'
  let piecesUpperNoTriangle = '_\\', piecesBottomNoTriangle = '_\/'

  const buildIncrementalCube = (numSpaces, numFigure, type, final) => {
    if (type == 'U')
       return `${' '.repeat(numSpaces-1)}${piecesTriangle.repeat(numFigure)}${piecesUpperNoTriangle.repeat(size)}\n`

    return final ? `${' '.repeat(numSpaces)}${piecesInvertedTriangle.repeat(numFigure)}${piecesBottomNoTriangle.repeat(size)}` :
                   `${' '.repeat(numSpaces)}${piecesInvertedTriangle.repeat(numFigure)}${piecesBottomNoTriangle.repeat(size)}\n`
  }

  const drawUpperPartCube = () => {
    let firstHalfCube = ''
    let numPartsTriangle = 1

    for (let i = size; i > 0; i--) {
      firstHalfCube += buildIncrementalCube(i, numPartsTriangle, 'U')
      numPartsTriangle++
    }

    return {firstHalfCube,numPartsTriangle}
  }

  const drawBottomPartCube = (upperPartCube, numInvertedTriangle) => {
    let secondHalfCube = upperPartCube
    let final = true
    for (let i = 0; i < size; i++) {
      i == size-1 ? secondHalfCube += buildIncrementalCube(i, numInvertedTriangle, 'B', final) : 
                    secondHalfCube += buildIncrementalCube(i, numInvertedTriangle, 'B')
      numInvertedTriangle--
    }

    return secondHalfCube
  }

  const {firstHalfCube, numPartsTriangle:numInvertedTriangle} = drawUpperPartCube()
  const finalCube = drawBottomPartCube(firstHalfCube,numInvertedTriangle-1)

  return finalCube
}

console.log(createCube(10));
//          /\_\_\_\_\_\_\_\_\_\_\
//         /\/\_\_\_\_\_\_\_\_\_\_\
//        /\/\/\_\_\_\_\_\_\_\_\_\_\
//       /\/\/\/\_\_\_\_\_\_\_\_\_\_\
//      /\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
//     /\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
//    /\/\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
//   /\/\/\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
//  /\/\/\/\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
// /\/\/\/\/\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
// \/\/\/\/\/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//  \/\/\/\/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//   \/\/\/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//    \/\/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//     \/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//      \/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//       \/\/\/\/_/_/_/_/_/_/_/_/_/_/
//        \/\/\/_/_/_/_/_/_/_/_/_/_/
//         \/\/_/_/_/_/_/_/_/_/_/_/
//          \/_/_/_/_/_/_/_/_/_/_/

console.log(createCube(3));
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/

console.log(createCube(1));
// /\_\
// \/_/

console.log(createCube(2));
//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/
```