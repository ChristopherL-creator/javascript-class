//  creo classe studente, prima lettera maiuscola;
class Student{ 

//  funzione che andrà a costruire Studente; nelle tonde ci metto proprietà che deve avere Studente; non è 
//  consigliato mettere proprietà che dovranno essere cambiate;
    constructor(name, surname, yob, gender, gradeArray){ 
//  defnisco proprietà, a cui associo quelle dichiarate nel consturctor;
        this.name = name; 
        this.surname = surname; 
        this.yob = yob; 
        this.gender = gender; 
        this.gradeArray = gradeArray;
    } 

//  funzione di classe;
    calculateGradeMean(student) {
    
        let sum = 0; 
//  "this" sostituisce la classe Student;
        for (let i = 0; i < this.gradeArray.length; i++) {
            const grade = this.gradeArray[i]; 
            sum = sum + grade; 
        } 
    
        const mean = sum / this.gradeArray.length; 
    
        return mean;
    } 

    calculateAge(){ 
//  Date indica la data corrente; come classe esiste già in Javascript, per cui ci vuole "new";
        const now = new Date(); 
        const year = now.getFullYear(); 
        const age = year - this.yob; 
        return age;
    } 

// trasforma proprietà studente in stringa leggibile;
    toString(){  

        const genere = this.gender === 'f' ? 'femmina' : 'maschio';
    
        const studentString = 'Nome: ' + this.name + '\n' + 
                              'Cognome: ' + this.surname + '\n' + 
                              'Età: ' + genere + '\n' + 
                              'Genere: ' + this.gender + '\n'+ 
                              'Media: ' + this.calculateGradeMean(); 

        return studentString;
    }
} 

