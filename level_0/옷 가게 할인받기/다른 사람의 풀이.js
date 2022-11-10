function solution(price) {
    let arr_discount = [[500000, 0.2], [300000, 0.1], [100000, 0.05]]

    for(let i = 0 ; i < arr_discount.length ; i++)
        if(arr_discount[i][0] <= price) return Math.trunc(price * (1-arr_discount[i][1]))        

    return price
}