/*Section 4 review. This calc will calculate a student's grade, both percentage wise
and letter wise. This will take in 2 arguments.
 1) Students score and 2) Total (max) possible score. So if you entered 15 for the students 
 score and the max score is 20, the score results in a 75%. Sample message that should
 print- "You got a C (75%)." Range of scores: 
 A: 90-100  B: 80-89  C: 70-79 D: 60-69 F: 0-59*/

 /* let studentResult = function (studentScore, maxScore = 20) {
     let percentGrade = (studentScore / maxScore) * 100 /*Review: Order of operations is 
     multiplication, followed by division. In this case, we want to divide first, so 
     you put parenthesis on your division operation.
     let letterGrade = ' '

     if (percentGrade >= 90) {
      return `You got an A (${percentGrade}%).`
     }
     /*Before you write a long if/else statement, test your first if statement and make 
     sure you can call it properly.
     else if (percentGrade >= 80) {
      return `You got a B (${percentGrade}%).`
     }
     else if (percentGrade >= 70) {
       return `You got a C (${percentGrade}%).`
     }
     else if (percentGrade >= 60) {
      return `You got a D (${percentGrade}%).`
     }
     else {
       return `You got an F (${percentGrade}%)`
     } */

     /*While this code will get the desired result, it is lengthy and you're repeating 
     a lot of return statements. Here's an alt solution you could try below. This code 
     is shorter and easier to maintain:*/
     let studentResult = function (studentScore, maxScore = 20) {
       let percent = (studentScore/maxScore)* 100
       let letterGrade = ''

       if (percent >= 90) {
         letterGrade = 'A'
       }
       else if (percent >= 80) {
         letterGrade = 'B'
      }
       else if (percent >= 70) {
         letterGrade = 'C'
       }
       else if (percent >= 60) {
         letterGrade = 'D'
       }
       else {
         letterGrade = 'F'
       }
       return `You got a ${letterGrade} (${percent}%).`
     } /*Make sure you're closing your functions with } after you're done telling the function
     what to do. Otherwise, you get an "unreachable code" error when calling the function
     below.*/

    let finalGrade = studentResult(13)
     console.log(finalGrade)
 
