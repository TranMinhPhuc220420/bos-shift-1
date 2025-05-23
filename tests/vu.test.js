import { expect, test } from 'vitest'
import { getNameBranch } from '../src/utils.js';

test('getNameBranch returns correct name for branch', () => {


  expect(getNameBranch('1')).toBe('SaiGon');
  expect(getNameBranch('2')).toBe('HaNoi');
});