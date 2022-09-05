function solution(inputArray, k) {
    return inputArray.filter((element, index) => {
        return (index + 1) % k !== 0;
    });
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test extractEachKth

// alternative solution