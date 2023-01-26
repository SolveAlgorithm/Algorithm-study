function solution(left, right) {
    let sum = 0;
    let cnt = 0;
    for(i=left;i<=right;i++){
        for(let j=1;j<=i;j++){
            if (i % j === 0) {
                cnt++;
            }
        }
    cnt%2 === 0 ? sum+=i : sum-=i;
    cnt = 0;
    }
    return sum;
}

//js 내장함수 많이 써보기
function solution(left, right) {
    const arr = Array.from({length:right-left+1}, (_,i) => i+left);
    const answer = [];
    let cnt = 0;
    for(i=left;i<=right;i++){
        for(let j=1;j<=i;j++){
            if (i % j === 0) {
                cnt++
            }
        }
    answer.push(cnt);
    cnt = 0;
    }
    return answer.reduce((acc,cur,index) => cur%2=== 0 ? acc+=arr[index] : acc-=arr[index],0)
}