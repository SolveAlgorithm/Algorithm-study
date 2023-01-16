function solution(my_string) {
    let a = my_string.trim().split(' ')
    let answer = +a[0]
    a.map((i,index) => {
    if(i === "+"){
         answer += Number(a[index+1])
    }else if(i === "-") {
        answer -= Number(a[index+1])
    }
    })
   return answer
}