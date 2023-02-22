const min = (n1, n2) => {
    while (n2 > 0) {
      let temp = n2;
      n2 = n1 % n2;
      n1 = temp;
    }
    return n1;
  };
  
  const max = (n1, n2) => (n1 * n2) / min(n1, n2);
  
  const solution = (arr) => {
    let answer = 1;
    for (let i = 0; i < arr.length; i++) {
      answer = max(answer, arr[i]);
    }
    return answer;
  };