import { describe, test, expect } from 'vitest';
import { getNamePosition } from '../src/utils.js';

describe('getNamePosition', () => {
  test('returns correct position name', () => {
    expect(getNamePosition(1)).toBe("Barista");
    expect(getNamePosition("2")).toBe("Server");
    expect(getNamePosition("3")).toBe("Leader");
  });

  test('returns null for unknown position', () => {
    expect(getNamePosition(999)).toBe(null);
  });
});