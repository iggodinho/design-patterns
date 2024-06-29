// Interface Componente
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    showDetails() {
        console.log(`${this.name}: ${this.salary}`);
    }
}

// Classe Folha - funcionário individual.
class Individual extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
}

// Classe Composite - pode ter sub-elementos
class Department extends Employee {
    constructor(name) {
        super(name, 0); // Dpt não possui salário próprio, depende dos membros
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    removeEmployee(employee) {
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
    }

    getSalary() {
        let totalSalary = 0;
        for (let employee of this.employees) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }

    showDetails() {
        console.log(`${this.name}:`);
        for (let employee of this.employees) {
            employee.showDetails();
        }
    }
}


const intern = new Individual("Estagiário", 2000);
const assistant = new Individual("Assistente", 3000);
const analyst = new Individual("Analista", 5000);
const coordinator = new Individual("Coordenador", 8000);
const manager = new Individual("Gerente", 12000);

const dataCenterTeam = new Department("Time de Data Center");
dataCenterTeam.addEmployee(intern);
dataCenterTeam.addEmployee(assistant);
dataCenterTeam.addEmployee(analyst);
dataCenterTeam.addEmployee(coordinator);
dataCenterTeam.addEmployee(manager);

const infrastructureSector = new Department("Setor de Infraestrutura");
infrastructureSector.addEmployee(dataCenterTeam);

const itDepartment = new Department("Departamento de TI");
itDepartment.addEmployee(infrastructureSector);

const boardOfDirectors = new Department("Board de Diretores");
const cto = new Employee("CTO", 25000); // Diretor de Tecnologia
const cfo = new Employee("CFO", 25000); // Diretor Financeiro
boardOfDirectors.addEmployee(cto);
boardOfDirectors.addEmployee(cfo);
boardOfDirectors.addEmployee(itDepartment);

console.log("Salário total do Time de Data Center:", dataCenterTeam.getSalary());
console.log("Salário total do Setor de Infraestrutura:", infrastructureSector.getSalary());
console.log("Salário total do Departamento de TI:", itDepartment.getSalary());
console.log("Salário total do Board de Diretores:", boardOfDirectors.getSalary());

console.log("\nDetalhes:");
boardOfDirectors.showDetails();
