import { expect, test } from 'vitest'
import { formatCurrency } from '../src/utils.js'

test('formats 1000000 to VND currency', () => {
  expect(formatCurrency(1000000)).toBe('1.000.000 ₫')
})
