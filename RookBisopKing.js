// Sachin is learning to play chess. He has already learned how to move a king, a rook and a bishop.
// Let us remind you the rules of moving chess pieces. A chessboard is 64 square fields organized into an 8 × 8 table.
// A field is represented by a pair of integers (r, c) — the number of the row and the number of the column (in a classical game the columns are traditionally indexed by letters). Each chess piece takes up exactly one field. To make a move is to move a chess piece, the pieces move by the following rules:
// i. A rook moves any number of fields horizontally or vertically.
// ii. A bishop moves any number of fields diagonally.
// iii. A king moves one field in any direction — horizontally, vertically or diagonally.
// Sachin is thinking about the following problem: what minimum number of moves is needed for each of these pieces to move from field (r1, c1) to field (r2, c2)? At that, we assume that there are no more pieces besides this one on the board. Help him solve this problem.

let input="1 2 1 5"
let [r1,c1,r2,c2]=input.trim().split(" ").map(Number)
    console.log(checkRook(r1,c1,r2,c2),checkBisop(r1,c1,r2,c2),checkKing(r1,c1,r2,c2))

function checkRook(r1,c1,r2,c2){
    let diff1=Math.abs(r1-r2)
    let diff2=Math.abs(c1-c2)
    if(diff1>0&&diff2>0)
    return 2
    else
    return 1
}

function checkBisop(r1,c1,r2,c2){
    let diff1=Math.abs(r1-r2)
    let diff2=Math.abs(c1-c2)
    if(diff1==diff2)
    return 1
    if(diff1%2==0 &&diff2%2==0)
    return 2
    else
    return 0
}
function checkKing(r1,c1,r2,c2){
    let diff1=Math.abs(r1-r2)
    let diff2=Math.abs(c1-c2)
    return Math.max(diff1,diff2)
}