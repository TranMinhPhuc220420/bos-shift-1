import { describe, test, expect } from 'vitest';
import { getNameBranch } from '../src/utils.js';

describe('getNameBranch', () => {
  test('returns correct branch name', () => {
    expect(getNameBranch(1)).toBe("SaiGon Pearl");
    expect(getNameBranch("2")).toBe("TOH");
  });

  test('returns null for unknown branch', () => {
    expect(getNameBranch(999)).toBe(null);
  });
});
