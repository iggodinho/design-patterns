// Chain of Responsability - passar pedidos por uma corrente de handlers. 
// Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente.

class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class ConcreteHandler1 extends Handler {
    handle(request) {
        if (request === "request1") {
            return `Handled by ConcreteHandler1`;
        }
        return super.handle(request);
    }
}

class ConcreteHandler2 extends Handler {
    handle(request) {
        if (request === "request2") {
            return `Handled by ConcreteHandler2`;
        }
        return super.handle(request);
    }
}

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();

handler1.setNext(handler2);

console.log(handler1.handle("request1")); // Handled by ConcreteHandler1
console.log(handler1.handle("request2")); // Handled by ConcreteHandler2
console.log(handler1.handle("request3")); // null
