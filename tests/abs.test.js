import { test, expect } from 'vitest'

const abs = (n) => {
    if (n < 0)
        return n * -1;
    return n;
};

test('absolute value of number', () => {
    expect(abs(-10)).to.equals(10);
});
