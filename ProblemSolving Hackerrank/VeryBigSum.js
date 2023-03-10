function aVeryBigSum(ar) {
    // Write your code here
    let bigSum =0
    // console.log(ar)
    for (let n =0;n<ar.length;n++){
        bigSum+=ar[n]
    }
   return bigSum;
}

console.log(aVeryBigSum([1000000001,1000000002, 1000000003, 1000000004, 1000000005]),"line11")