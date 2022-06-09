import { entries, keys } from 'webpackRules'

// Задание 1
export type OriginalTeam = {
  size: number
  name: string
  league: string
}

export type ExpectedTeam = {
  name: string
  league: string
  roster: number
}

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const objectEntries = Object.entries(originalTeam)
  const expectedTeam = objectEntries.reduce((obj, entries, i) => {
    const [key, value] = entries
    if (key !== 'size') {
      obj = { ...obj, [key]: value }
    }
    if (i === objectEntries.length - 1) {
      obj = { ...obj, name: 'New York Badgers', roster: 25 }
    }
    return obj
  }, {} as ExpectedTeam)

  return expectedTeam
}

// Задание 2
type originalArray = readonly number[]
type SomeArray = Array<number | string>

export const originalArrayToExpectedArray = (
  originalArray: originalArray
): SomeArray => {
  return ['two', ...originalArray.slice(2), 5]
}

// Задание 3

export type Team = {
  name: string
  captain: {
    name: string
    age: number
  }
}

export const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
  return { ...originalTeam, captain: { ...originalTeam.captain, age: 28 } }
}
