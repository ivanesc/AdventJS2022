export function createCube(size) {
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

console.log(createCube(2))