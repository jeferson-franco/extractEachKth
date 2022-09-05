const solution = require('./extractEachKth.js');

test('test 1', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([1, 2, 4, 5, 7, 8, 10]);
});

test('test 2', () => {
    expect(solution([1, 1, 1, 1, 1], 1)).toEqual([]);
});

test('test 3', () => {
    expect(solution([1, 2, 1, 2, 1, 2, 1, 2], 2)).toEqual([1, 1, 1, 1]);
});

test('test 4', () => {
    expect(solution([1, 2, 1, 2, 1, 2, 1, 2], 10)).toEqual([1, 2, 1, 2, 1, 2, 1, 2]);
});

test('test 5', () => {
    expect(solution([2, 4, 6, 8, 10], 2)).toEqual([2, 6, 10]);
});
