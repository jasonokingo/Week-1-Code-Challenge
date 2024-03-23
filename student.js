// Create a function to ensure the Score only allows values between 1-100
function scoreLimit(score){
    if( score >= 0 && score <=100 ) {
        return studentsScore(score);
    } else { return "Ivalid Score value";
    }
}

// Create a function that will give us the grades according to the score
function studentsScore(score) {
    if(score > 79) {
        return "Grade A";
    } else if(score <= 79 && score >= 60) {
        return "Grade B";
    } else if(score <= 59 && score >= 50) {
        return "Grade C";
    } else if(score <= 49 && score >= 40) {
        return "Grade D";
    } else {return "Grade E";
    }
}

// Input score of the student in the (score) to get grade
console.log(scoreLimit(70));