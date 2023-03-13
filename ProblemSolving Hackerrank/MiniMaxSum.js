function miniMaxSum(arr) {
    // Write your code here
   
        let sum1 = arr[0]+arr[1]+arr[2]+arr[3];
        let sum2 = arr[1]+arr[2]+arr[3]+arr[4];
        let sum3 = arr[0]+arr[2]+arr[3]+arr[4];
        let sum4 = arr[0]+arr[1]+arr[3]+arr[4];
        let sum5 = arr[0]+arr[1]+arr[2]+arr[4];
    
        let minSum = Math.min(sum1, sum2, sum3, sum4, sum5);
        let maxSum = Math.max(sum1, sum2, sum3, sum4, sum5);
    
        // Print the smallest and largest sums
        process.stdout.write(minSum + "\t" + maxSum);
    

}
miniMaxSum([396285104, 573261094, 759641832 ,819230764 ,364801279])