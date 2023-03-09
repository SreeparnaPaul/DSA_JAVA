function compareTriplets(a, b) {
   
    let countA=0;
    let countB=0;
    let resultingArray=[countA,countB];
    for(let i=0;i<a.length;i++){
            if(a[i]>b[i]){
                resultingArray=[countA+1,countB];
                countA=countA+1;
            }else if(a[i]<b[i]){
                resultingArray=[countA,countB+1];
                countB=countB +1;
            }
     }
    
    return resultingArray; 
}

console.log(compareTriplets([5,9,6,2],[12,8,1,2]),"line27")