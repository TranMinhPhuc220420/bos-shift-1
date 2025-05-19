import { expect, test } from 'vitest'
import { getNameBranch } from '../src/utils.js';

test('getNameBranch returns correct name for branch', () => {


  expect(getNameBranch('1')).toBe('SaiGon Pearl');
  expect(getNameBranch('2')).toBe('TOH');
});