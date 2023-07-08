import { setIfDefined } from './setIfDefined';

describe('setIfDefined', () => {

  it('nothing happens when source has no properties', () => {
    const target = {};
    const source = {};
    setIfDefined(target, source);
    expect(Object.keys(target)).toHaveLength(0);
    expect(Object.keys(source)).toHaveLength(0);
  });
  
  it('nothing happens when source has properties with value of undefined', () => {
    const target = {};
    const source = { first: undefined, second: undefined };
    setIfDefined(target, source);
    expect(Object.keys(target)).toHaveLength(0);
    expect(Object.keys(source)).toHaveLength(2);
  });

  it('properties that are not undefined are written to target', () => {
    const target: { [key: string]: any } = {};
    const source = { first: null, second: 1, third: undefined };
    setIfDefined(target, source);
    expect(Object.keys(target)).toHaveLength(2);
    expect(Object.keys(source)).toHaveLength(3);
    expect(target.first).toBe(null);
    expect(target.second).toBe(1);
  });

  it('target does not lose its properties', () => {
    const target: { [key: string]: any } = { original: 'x' };
    const source = { first: null, second: 1, third: undefined };
    setIfDefined(target, source);
    expect(Object.keys(target)).toHaveLength(3);
    expect(Object.keys(source)).toHaveLength(3);
    expect(target.original).toBe('x');
    expect(target.first).toBe(null);
    expect(target.second).toBe(1);
  });
  
});