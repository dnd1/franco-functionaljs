function countWords(inputWords){
    const reducer = (acc, curr) => {
        if (!acc[curr]){
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }
    return inputWords.reduce(reducer, {});
}

module.exports = countWords