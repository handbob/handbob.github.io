import { test, expect } from 'vitest'
import { sum } from '../test/sum'

test('sum of 10 equals 55', () => {
    expect(55).to.equals(sum(10));
});
