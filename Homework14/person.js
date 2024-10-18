// 1)Создайте класс Person со свойствами firstName, lastName и age. Добавьте статическое свойство oldestPerson, которое хранит самый старый экземпляр Person, созданный на данный момент. Добавьте статический метод compareAge, который принимает два экземпляра Person и возвращает разницу в их возрасте.

class Person {

    static oldestPerson = null;
   

 constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.oldest()
 }

oldest () {
    if(Person.oldestPerson === null || this.age > Person.oldestPerson.age){
        Person.oldestPerson = this;
    }
}


     static comprageAge(person1, person2){
        return person1.age - person2.age;
     } 

    }


    
const person1 = new Person("Masha", "Simonova", 26);
const person2 = new Person("Kurbava", "Vaiyan", 35);
const person3 = new Person("Patrik", "Vosnik", 55);
const person4 = new Person("Miroslav", "Savchyk", 68);

console.log(Person);


console.log(`Самый старый человек: ${Person.oldestPerson.firstName} ${Person.oldestPerson.lastName}, возраст: ${Person.oldestPerson.age}`);


console.log(`Разница в возрасте между Masha и Kurbava: ${Person.comprageAge(person1, person2)} лет`);
console.log(`Разница в возрасте между Patrik и Miroslav: ${Person.comprageAge(person3, person4)} лет`);
