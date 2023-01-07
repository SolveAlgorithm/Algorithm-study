function solution(num_list, n) {
    const result = []
    for(let i = 0 ; i < num_list.length;) {
        const Nlist = []
        for(let j=0; j<n; j++){
            Nlist.push(num_list[i])
            i++
        }
        result.push(Nlist)
    }
    return result
}