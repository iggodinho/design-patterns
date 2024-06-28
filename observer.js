// Observer - definir um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos 
// que aconteçam com o objeto que eles estão observando

class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

class Observer {
    update(message) {
        console.log(message);
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Hello Observers!");
