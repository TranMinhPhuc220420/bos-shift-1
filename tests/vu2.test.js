import { expect, test } from 'vitest'
import { getNameLevel } from '../src/utils.js';

test('getNameLevel', () => {


  expect(getNameLevel('1')).toBe('INTERN');
  expect(getNameLevel('2')).toBe('JUNIOR');
  expect(getNameLevel('3')).toBe('MIDDLE');
});