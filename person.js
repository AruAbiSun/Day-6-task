class Person{
    constructor(personName, personPlace, personJob, personQualification, personExperience) {
        this.name = personName;
        this.place = personPlace;
        this.job = personJob;
        this.qualification = personQualification;
        this.experience = personExperience;
        
    }
}
const Person1 = new Person("Aruna", "Tirunelveli", "IT", "Engineer", "2 years")
console.log(Person1)