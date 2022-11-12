function solution(cipher, code) {
    return Array.from(cipher).filter((item,index) => (index+1)%code === 0).join('')
}