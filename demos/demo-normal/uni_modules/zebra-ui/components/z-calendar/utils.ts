import { createNamespace } from '../../libs/utils'

const [name, bem, t] = createNamespace('calendar')

export { name, bem, t }

export const formatMonthTitle = (date: Date) => {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  return `${date.getFullYear()}年${date.getMonth() + 1}月`
}

export function compareMonth(date1: Date, date2: Date) {
  if (!(date1 instanceof Date)) {
    date1 = new Date(date1)
  }
  if (!(date2 instanceof Date)) {
    date2 = new Date(date2)
  }
  const year1 = date1.getFullYear()
  const year2 = date2.getFullYear()

  if (year1 === year2) {
    const month1 = date1.getMonth()
    const month2 = date2.getMonth()
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1
  }

  return year1 > year2 ? 1 : -1
}

export function compareDay(day1: Date, day2: Date) {
  if (!(day1 instanceof Date)) {
    day1 = new Date(day1)
  }
  if (!(day2 instanceof Date)) {
    day2 = new Date(day2)
  }
  const compareMonthResult = compareMonth(day1, day2)

  if (compareMonthResult === 0) {
    const date1 = day1.getDate()
    const date2 = day2.getDate()
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1
  }

  return compareMonthResult
}

export const cloneDate = (date: Date) => new Date(date)

export const cloneDates = (dates: Date | Date[]) =>
  Array.isArray(dates) ? dates.map(cloneDate) : cloneDate(dates)

export function getDayByOffset(date: Date, offset: number) {
  const cloned = cloneDate(date)
  cloned.setDate(cloned.getDate() + offset)
  return cloned
}

export const getPrevDay = (date: Date) => getDayByOffset(date, -1)
export const getNextDay = (date: Date) => getDayByOffset(date, 1)
export const getToday = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

export function calcDateNum(date: [Date, Date]) {
  const day1 = date[0].getTime()
  const day2 = date[1].getTime()
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1
}
