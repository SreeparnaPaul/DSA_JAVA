function diagonalDifference(arr) {

    let firstDiagonal=0;
    let secondDiagonal =0;
    for (let i =0; i<arr?.length; i++){
        for (let j =0; j < arr?.length; j++){
            if(i == j){
               firstDiagonal = firstDiagonal + arr[i][j];
            }
            if (i + j == arr?.length -1){
                secondDiagonal = secondDiagonal +arr[i][j];
            }
        }
    }
    let result = Math.abs(firstDiagonal-secondDiagonal);
    console.log(result);

}
diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 19]]);