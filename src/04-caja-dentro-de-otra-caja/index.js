export function fitsInOneBox(boxes) {

  let resultPacked = []

  const checkPackaging = ((box, i, arr) => {

    const isMenorBox = ((measures, boxToCompare) => {
      let isMenor = false
      for (const key of measures) {
        isMenor = box[key] < boxToCompare[key]
        if (!isMenor) break
      }
  
      return isMenor
    })
  
    const isMayorBox = ((measures, boxToCompare) => {
      let isMayor = false
      for (const key of measures) {
        isMayor = box[key] > boxToCompare[key]
        if (!isMayor) break
      }

      return isMayor
    })

    const checkContinuePack = ((min,max) => {
      let allowPack = false
      let isIntermediateBox = false

      if (isMenorBox(measures, arr[min]) || isMayorBox(measures, arr[max])) {
        isMenorBox(measures, box) ? resultPacked = [i,min] : resultPacked = [max,i]
        allowPack = true
      }
      if (!allowPack) {
        for (const key of measures) {
          isIntermediateBox = arr[min][key] < box[key] && box[key] < arr[max][key]
          if (!isIntermediateBox) break
        }
      }
      if (isIntermediateBox)
        allowPack = true
      return allowPack
    }) 

    let allowPack = false
    let iBox = 0
    let measures = Object.keys(box)

    if (resultPacked.length == 0) {
      while(iBox <= arr.length-1) {
        if (iBox != i) {
          if (isMenorBox(measures, arr[iBox]) || isMayorBox(measures, arr[iBox])) {
            isMenorBox(measures, arr[iBox]) ? resultPacked = [i,iBox] : resultPacked = [iBox,i]
            allowPack = true
            break
          }
          else {
            iBox++
          }
        }
        else {
          iBox++
        }
      }
    } 
    else {
      if (resultPacked.some(n => n == i)) {
        allowPack = true
      }
      else {
        allowPack = checkContinuePack(resultPacked[0],resultPacked[1])
      }
    }

    return allowPack
  })

  return boxes.every(checkPackaging)
}