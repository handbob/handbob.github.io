import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide } from './math'

describe('math.js', () => {

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(add(1, 2)).toBe(3);
      expect(add(-1, -1)).toBe(-2);
    });

    it('should return a number when adding zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(0, 5)).toBe(-5);
    });

    it('should return a number when subtracting zero', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-2, 3)).toBe(-6);
    });

    it('should return zero when multiplying by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(-6, 3)).toBe(-2);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });
});
