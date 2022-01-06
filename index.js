
class Cat {
    constuctor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`;
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`;
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        if (sex === this.sex) {
            return `It\'s me! ${this.name}, the parrot!`;
        } else {
            return `${this.name} says squak!`;
        }
    }
}

let cat = new Cat("Shasha", "female")
let dog = new Dog("Ruifo", "male")
let bird = new Bird("Pablo", "male")
let bird2 = new Bird("Mable", "female")

cat.speak();
dog.speak();
bird.speak();
bird2.speak();
