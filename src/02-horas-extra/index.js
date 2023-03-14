export function countHours(year, holidays) {
  
  let workDays = []

  holidays.forEach(day => {
    let date = new Date(year, day.split("/")[0]-1, day.split("/")[1])
    
    if (date.getDay() >= 1 && date.getDay() <= 5) {
      workDays.push(day)
    }
  })

  return workDays.length * 2
}