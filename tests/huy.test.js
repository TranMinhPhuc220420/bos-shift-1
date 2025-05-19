import { expect, test } from 'vitest'
import { bubbleSort, getNamePosition } from '../src/utils.js'

test('Test bubble sort', () => {
  let arrSort = [9, 13, 19, 38, 250]
  //Expected output: [9, 13, 19, 38, 250]
  expect(bubbleSort(arrSort)).toEqual([9, 13, 19, 38, 250])
})