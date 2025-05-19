import { expect, test } from 'vitest'
import { getNameLevel } from '../src/utils.js';

test('getNameLevel', () => {


  expect(getNameLevel('1')).toBe('Intern');
  expect(getNameLevel('2')).toBe('Junior');
  expect(getNameLevel('3')).toBe('Middle');
});