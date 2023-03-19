function gradingStudents(grades) {
    // Write your code here
   for(let i =0;i<grades.length;i++){
      let gradeDifference=grades[i] % 5
   
        if(grades[i]<38){
            console.log(grades[i],"line7") 
        }
        else if(grades[i]>=38 && grades[i]<=40){
            grades[i]=40
            console.log(grades[i],"line10") 
        }
        else if(gradeDifference <3 ){
            console.log(grades[i],"line13") 
        }
        else if(gradeDifference>=3){
            console.log(grades[i]+ 5-gradeDifference,"line16") 
        }

   }


}

console.log(gradingStudents([67,43,38,33]),"line24")