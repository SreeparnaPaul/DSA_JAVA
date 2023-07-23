function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount=0;
    let orangeCount =0;
    for(let i =0; i<apples.length;i++){
        apples[i]=apples[i]+a
    }
   
    for(let j =0; j<oranges.length;j++){
        oranges[j]=oranges[j]+b
    }
    for (let k =0;k<apples.length;k++){
        if(apples[k]>=s && apples[k]<=t){
            appleCount=appleCount+1;
        }
    }
     for (let l =0;l<oranges.length;l++){
        if(oranges[l]>=s && oranges[l]<=t){
            orangeCount=orangeCount+1;
        }
    }
    console.log(appleCount);
    console.log(orangeCount);
}
countApplesAndOranges(8,11,4,5,[-8,4,5],[-4,-6,5])