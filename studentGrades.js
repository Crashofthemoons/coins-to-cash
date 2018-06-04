const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
} 

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 91) {
        grades.A += 1
    } else if (scores[i] > 80 && scores[i] < 91) {
        grades.B += 1
    } else if (scores[i] > 70 && scores[i] < 81) {
        grades.C += 1
    } else {
        grades.D += 1
    }
    
}


// Use console.info() to output the following criteria to the browser console.

// How many of each grade? Accomplish this with a for..in loop.
console.log(grades)

// What is the lowest score? Sort the array and find out.
const lowToHigh = () => {
    scores.sort(function(a, b){return a - b});
}
lowToHigh()
console.log(scores)
console.log(scores[0])
// What is the highest score?
console.log(scores[13])
// Which grade had the most students achieve it? Use an if statement, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
let currentGradeCount = 0
let currentGrade
for (let key in grades) {
    if (currentGradeCount < grades[key])  {
        currentGradeCount = grades[key]
        currentGrade = key
    }
    
}

console.log(currentGrade)
// Which grade had the fewest students achieve it?
let currentGradeCount1 = 14
let currentGrade1
for (let key in grades) {
    if (currentGradeCount1 > grades[key]) {
        currentGradeCount1 = grades[key]
        currentGrade1 = key
    }
}
console.log(currentGrade1)