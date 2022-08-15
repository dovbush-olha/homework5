//task1
function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

//task2
const audiQ8 = {
  weight: 2890,
  maxSpeed: 245,
  transmission: "8-st tiptronic",
  fuel: "diesel",
  exhaustRate: "EU6",
};

function showProps(obj) {
  return Object.keys(obj), Object.values(obj);
}

//showProps(audiQ8);

//task3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(middleName) {
    this.middleName = middleName;
    return super.showFullName() + " " + this.middleName;
  }
  showCourse() {
    const course = new Date().getFullYear() - this.year;
    return course;
  }
}

//task4
const workersList = [];

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    workersList.push(this);
  }

  #experience = 1.2;

  get experience() {
    return this.#experience;
  }

  set experience(value) {
    this.#experience = value;
  }

  showSalary() {
    return this.dayRate * this.workingDays;
  }

  showSalaryWithExperience() {
    return this.#experience * this.dayRate * this.workingDays;
  }

  sortWorkersBySalary(workersArray) {
    const sortedWorkers = workersArray.sort((a, b) => {
      a.showSalary() - b.showSalary();
    });
    return sortedWorkers.map((worker) => {
      return worker.fullName + ":" + worker.showSalary();
    });
  }
}

const worker1 = new Worker("John Jonson", 20, 23);
//console.log(worker1.showSalary());
//console.log(worker1.experience);
//console.log(worker1.showSalaryWithExperience());
//worker1.experience = 1.5;
//console.log(worker1.experience);
//console.log(worker1.showSalaryWithExperience());

const worker2 = new Worker("Tom Tomson", 48, 22);
const worker3 = new Worker("Andy Arden", 29, 23);
//console.log(worker3.sortWorkersBySalary(workersList));

//task5
class GeometricFigure {
  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(side, height) {
    super();
    this.side = side;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.side * this.height;
  }
}

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }

  getArea() {
    return Math.PI * this.r ** 2;
  }
}

function handleFigures(figures) {
  return figures.reduce((accumulator, currentFigure) => {
    if (currentFigure instanceof GeometricFigure) {
      console.log(
        `Geometric figure: ${currentFigure.toString()} - area: ${currentFigure.getArea()}`
      );
      return accumulator + currentFigure.getArea();
    }
  }, 0);
}

//console.log(handleFigures([new Triangle(4, 5), new Square(7), new Circle(5)]));
