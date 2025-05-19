import { expect, test } from 'vitest'
import { bubbleSort, getNameLevel, getNamePosition } from '../src/utils.js'

test('Test bubble sort', () => {
  let arrSort = [9, 13, 19, 38, 250]
  //Expected output: [9, 13, 19, 38, 250]
  expect(bubbleSort(arrSort)).toEqual([9, 13, 19, 38, 250])
})

test('Test get name positon', () => {
  expect(getNamePosition(1)).toBe('Barista')
  expect(getNamePosition(2)).toBe('Server')
  expect(getNamePosition(3)).toBe('Leader')
})

test('Test get name employee', () => {
  expect(getNameLevel(1)).toBe('Intern')
  expect(getNameLevel(2)).toBe('Junior')
  expect(getNameLevel(3)).toBe('Middle')
})
