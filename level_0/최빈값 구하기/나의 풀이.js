function solution(array) {
    const newObject = array.reduce((acc, cur) => {
        acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
    }, {});

    const maxnum =  Object.keys(newObject).reduce((acc,cur) =>
        newObject[acc] > newObject[cur] ? acc : newObject[acc] === newObject[cur] ? -1 : cur
    )
    return Number(maxnum);
}