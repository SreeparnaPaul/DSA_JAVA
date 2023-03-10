function plusMinus(arr) {
    // Write your code here
    let arrLength=arr.length;
    let countPositive =0;
    let countNegative = 0;
    let countZero = 0;
    for(let i =0;i<arrLength;i++){
        if(arr[i]>0){
            countPositive=countPositive+1;
        }else if(arr[i]<0){
            countNegative= countNegative +1;
        }else {
            countZero=countZero+1;
        }
       
    }
     
     let PositiveOccurance= countPositive/arrLength;
     let NegativeOccurance = countNegative/arrLength;
     let ZeroOccurance = countZero / arrLength;
     let result= PositiveOccurance.toFixed(6) + "\n" +NegativeOccurance.toFixed(6) + "\n"+ZeroOccurance.toFixed(6);
    return result;
}
console.log(plusMinus([9,-8,0,7,-3]))