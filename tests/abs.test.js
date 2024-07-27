import { test, expect } from 'vitest'
import { abs } from '../scripts/abs'

test('absolute value of number', () => {
    expect(abs(-10)).toBe(10)
});
