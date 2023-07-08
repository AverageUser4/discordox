import { mapFontSize } from "./mapFontSize";

describe('mapFontSize', () => {

  it('returns "inherit" for undefined', () => {
    expect(mapFontSize(undefined)).toBe('inherit');
  });

  it('returns correct value for 0', () => {
    expect(mapFontSize(0)).toBe('var(--font-size-0)');
  });

  it('returns correct value for positive numbers', () => {
    expect(mapFontSize(1)).toBe('var(--font-size-up-1)');
    expect(mapFontSize(2)).toBe('var(--font-size-up-2)');
    expect(mapFontSize(100)).toBe('var(--font-size-up-100)');
  });

  it('returns correct value for negative numbers', () => {
    expect(mapFontSize(-1)).toBe('var(--font-size-down-1)');
    expect(mapFontSize(-2)).toBe('var(--font-size-down-2)');
    expect(mapFontSize(-100)).toBe('var(--font-size-down-100)');
  });

});