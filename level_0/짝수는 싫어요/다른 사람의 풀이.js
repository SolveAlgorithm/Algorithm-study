const solution = (n) => 
Array
    .from({ length: n }, (_, i) => i + 1)
    .filter(i => i % 2 !== 0)