function solution(a, b) {
    b /= min(a,b);
    while (b % 2 === 0) b = b / 2; 
    while (b % 5 === 0) b = b / 5; 
    return b === 1 ? 1 : 2;
  }
  
  const min = (n1, n2) => {
      while (n2 > 0) {
        let temp = n2;
        n2 = n1 % n2;
        n1 = temp;
      }
      return n1;
  };