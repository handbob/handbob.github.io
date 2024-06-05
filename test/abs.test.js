import { test, expect } from 'vitest'
import { abs } from '../test/abs'

test('absolute value of -10 is 10', () => {
    expect(10).toBe(abs(-10))
});
