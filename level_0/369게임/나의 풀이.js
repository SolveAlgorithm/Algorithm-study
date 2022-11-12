function solution(order) {
    return Array.from(order.toString()).filter(i => +i%3 === 0 && +i !== 0).length
}