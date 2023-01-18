function solution(keyinput, board) {    
    const MaxX = Math.abs(Math.floor(board[0]/2));
    const MaxY = Math.abs(Math.floor(board[1]/2));
    let x = 0;
    let y = 0;
    keyinput.forEach((i) => {
        switch(i){
            case "left": x--; break;
            case "right": x++; break;
            case "down": y--; break;
            case "up": y++; break;
        }
        if(Math.abs(x) > MaxX){
            x = x > 0 ? MaxX : MaxX * -1;
         }
        if(Math.abs(y) > MaxY){
            y = y > 0 ? MaxY : MaxY * -1;
        }
    })
    return [x,y];
}