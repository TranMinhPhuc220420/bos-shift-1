import { expect, test } from 'vitest'
import { bubbleSort } from '../src/utils.js'

test('Test bubble sort', () => {
  let arrSort = [5, 125, 6, 37, 23]

  expect(bubbleSort(arrSort)).toEqual([5, 6, 23, 37, 125])
})
