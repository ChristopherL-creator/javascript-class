//          richiamo classe Student, e tra parentesi ci metto il valore desiderato per ogni proprietà dichiarata 
//          nel contructor;

// const grades = [10, 7, 4, 9, 10]; 

// const student2 = new Student('Mirco', 'Faro', '1993', 'm', grades); 
// console.log(student2); 
// console.log(student2, student2.calculateGradeMean()); 
// console.log('età Mirco: ', student2.calculateAge()); 
// console.log(student2.toString());

// const student3 = new Student('paolo', 'x', '1999', 'm', [1, 2, 10]); 
// console.log(student3); 
// console.log(student3, student3.calculateGradeMean()); 
// console.log('età paolo: ', student3.calculateAge()); 
// console.log(student3.toString()); 

const athlete1 = new Athlete('mattia', 'drago', '1980', 'm', 'atletica', [3, 5, 7, 2, 10], 'y')
console.log(athlete1); 
console.log('Age: ', athlete1.getAge()); 
console.log(athlete1.toString()); 
console.log(athlete1.bestResult()); 

const athlete2 = new Athlete('Lucia', 'Prese', '1995', 'f', 'Softball', [6, 4, 9, 1, 5], 'n')
console.log(athlete2); 
console.log('Age: ', athlete2.getAge()); 
console.log(athlete2.toString()); 
console.log(athlete2.bestResult());