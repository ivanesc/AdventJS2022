export function distributeGifts(packOfGifts, reindeers) {
  let weightGifts = 0, weightReindeers = 0
  packOfGifts.map(gift => {
    if (gift.length > 0) {
      weightGifts += gift.length
    }
  })

  reindeers.map(reindeer => {
    if (reindeer.length > 0) {
      weightReindeers += reindeer.length
    }
  })

  return Math.floor((weightReindeers*2)/weightGifts)
}