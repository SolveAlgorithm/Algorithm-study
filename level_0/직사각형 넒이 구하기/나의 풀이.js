function solution(dots) {
    const arr = dots.sort()
    const a = arr[0]
    const b = arr[3]
    return Math.abs((a[0]-b[0]) * (a[1]-b[1]))
}