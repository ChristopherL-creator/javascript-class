class Athlete{ 

    constructor(name, surname, yob, gender, sport, palmares, isRetired){ 

        this.name = name; 
        this.surname = surname; 
        this.yob = yob; 
        this.gender = gender; 
        this.sport = sport; 
        this.palmares = palmares; 
        this.isRetired = isRetired;
    }
     
    getAge(){ 
        const now = new Date(); 
        const year = now.getFullYear(); 
        const age = year - this.yob; 
        return age;
    } 

    bestResult(athlete){ 

        let selectedElement = 0;
                
        for (const point of this.palmares) {
                    
            if (selectedElement < point) {
            selectedElement = point;
            }
        } 
            
        return selectedElement;
    } 

    toString(){ 
        
        const gender = this.gender === 'f' ? 'female' : 'male'; 
        const retired = this.isRetired ==='y' ? 'Yes': 'No';
    
        const athleteString = 'Name: ' + this.name + '\n' + 
                              'Surname: ' + this.surname + '\n' + 
                              'Age: ' + this.getAge() + '\n' + 
                              'Gender: ' + gender + '\n'+  
                              'Sport: ' + this.sport + '\n' + 
                              'Best score: ' + this.bestResult() + '\n' + 
                              'Retired: ' + retired;
        return athleteString;
    }

}