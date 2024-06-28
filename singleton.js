// Singleton - garantir que uma classe tenha apenas uma instância, 
// enquanto provê um ponto de acesso global para essa instância

class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.data = "Singleton Data";
    }

    getData() {
        return this.data;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2);  // true
console.log(singleton1.getData());       // "Singleton Data"
