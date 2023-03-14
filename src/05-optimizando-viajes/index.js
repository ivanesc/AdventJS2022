export function getMaxGifts(giftsCities, maxGifts, maxCities) {
  
  const compareNumbers = ((a, b) => {
    return b - a;
  })

  if (giftsCities.length && maxGifts >= 1 && maxCities >= 1) {

    let max = 0, resultTmp = 0, numCities = 0
    let maxGiftsReached = false
    let numFinalMaxGifts = []

    let orderedCitiesByGifts = giftsCities.sort(compareNumbers)

    for (let i=0; i < orderedCitiesByGifts.length; i++) {
      let memCorrectResults = []
      let lastCorrectCheck
    
      if (!maxGiftsReached) {
        if (numCities < 1 && orderedCitiesByGifts[i] > maxGifts)
            continue
        numCities = 1
        max = orderedCitiesByGifts[i]
      
        for (let j=i+1; j < orderedCitiesByGifts.length && numCities < maxCities; j++) {
          resultTmp = max + orderedCitiesByGifts[j]
        
          if (resultTmp < maxGifts) {
            max += orderedCitiesByGifts[j]
            numCities++
            lastCorrectCheck = j
            memCorrectResults.push[max]
          } 

          if (resultTmp == maxGifts) {
            max = resultTmp
            maxGiftsReached = true
            break
          }

          if (numCities < maxCities && j == orderedCitiesByGifts.length - 1) {
            numFinalMaxGifts.push(max)
            lastCorrectCheck && (j = lastCorrectCheck)
            memCorrectResults.pop()
            max = memCorrectResults.length ? memCorrectResults[length-1] : orderedCitiesByGifts[i]
            numCities--
          }
        }
        numFinalMaxGifts.push(max)
      }
    }
    return numFinalMaxGifts.length ? numFinalMaxGifts.sort(compareNumbers).shift() : 0
  }
}