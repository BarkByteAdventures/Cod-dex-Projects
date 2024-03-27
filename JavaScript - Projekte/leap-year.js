//Checkpoint Project - Leap Year Checker 

//Just telling Leap Years from 2000 to 3000

 for (let i = 2000; i <= 3000; i++){
    if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0 || i % 100 == 0 && i % 400 == 0){
        console.log(i + " is a leap year");  
    }

}

// Telling Years that are Leap Years and that are not

for (let i = 2000; i <= 3000; i++){
     if (i % 4 == 0) {
         if (i % 100 == 0) {
             if (i % 400 == 0) {
                 console.log(i + " is a leap year");
             }
             else {
                 console.log(i + " is not a leap year");
             }
         }
         else {
             console.log(i + " is a leap year");
         }
     }
     else {
         console.log(i + " is not a leap year");
     }
 }
