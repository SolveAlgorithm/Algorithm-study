function solution(n) {
    var list = [];

    function isPrime(n){
        if (n == 2)
            return true;

        for (let i = 2; i < n; i++){
            if (n%i == 0){
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= n; i++){
        if ((isPrime(i))&&(n%i == 0)){
            list.push(i);
            n = n/i;
        }
    }

    return list;
}
