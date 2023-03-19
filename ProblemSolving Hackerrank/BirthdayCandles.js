function birthdayCakeCandles(candles) {
    let count=0
    let maxHeight= Math.max(...candles)
    for(let i=0;i<candles.length;i++){
        if(candles[i]==maxHeight){
           count=count+1; 
        }
    }
    return count
}

console.log(birthdayCakeCandles([7,8,9,9,9]));