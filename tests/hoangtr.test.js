import { expect, test } from 'vitest'
import { formatCurrency } from '../src/utils.js'
import { getNameLevel } from '../src/utils.js'

test('formats 1000000 to VND currency', () => {
  expect(formatCurrency(1000000)).toBe('1.000.000 ₫')
})

test('returns "Intern" for level 1', () => {
  expect(getNameLevel(1)).toBe('Intern')
})

test('returns "Junior" for level 2', () => {
  expect(getNameLevel(2)).toBe('Junior')
})

test('returns "Middle" for level 3', () => {
  expect(getNameLevel(3)).toBe('Middle')
})

test('returns null for an unknown level', () => {
  expect(getNameLevel(99)).toBe(null)
})