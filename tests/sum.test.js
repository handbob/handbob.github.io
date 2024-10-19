import { test, expect } from 'vitest'

const sum = (n) => {
    let s = 0;
    for (let i = 0; i <= n; i++)
        s += i;
    return s;
};

test('sum of N numbers', () => {
    expect(sum(10)).to.equals(55);
});
