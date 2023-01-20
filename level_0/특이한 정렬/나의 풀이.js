function solution(numlist, n) {
    const subList = numlist.map((i) => i-n)
    for(let i=0;i<numlist.length;i++){
        for(let j=0;j<numlist.length;j++){
            if(Math.abs(subList[j]) >= Math.abs(subList[j+1])){
                if(subList[j] < subList[j+1] || Math.abs(subList[j]) > Math.abs(subList[j+1])){
                    let tmp = subList[j+1];
                    subList[j+1] = subList[j];
                    subList[j] = tmp
                }
            }
        }
    }
    return subList.map((i) => i+n);
}