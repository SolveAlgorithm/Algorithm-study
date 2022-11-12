function solution(numbers, direction) {
    const arr = [...numbers]
    if(direction === 'right'){        
        arr.unshift(Number(arr.slice(-1).join("")) )
        arr.pop()
    }else{
        arr.push(Number(arr.slice(0,1).join("")) )
        arr.shift()
    }


    return arr;
}
