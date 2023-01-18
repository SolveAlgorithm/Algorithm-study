function solution(spell, dic) {
    spell = spell.sort().join("") 
    const arr = dic.map(i => i.split("").sort().join("")).filter(j => j === spell)
    return arr.length ? 1 : 2 
}