import { test, expect } from 'vitest'
import { sum } from '../scripts/sum'

test('sum of N numbers', () => {
    expect(sum(10)).to.equals(55);
});
