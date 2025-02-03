import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

class Quadratic {
  constructor(public a: number, public b: number, public c: number) {}

  findSolution(): string {
    if (this.a === 0) {
      return this.b === 0
        ? this.c === 0
          ? "Phương trình có vô số nghiệm"
          : "Phương trình vô nghiệm"
        : `Nghiệm x = ${-this.c / this.b}`;
    }

    let delta = this.b * this.b - 4 * this.a * this.c;
    if (delta < 0) {
      return "Phương trình vô nghiệm";
    } else if (delta === 0) {
      return `Phương trình có nghiệm kép x = ${-this.b / (2 * this.a)}`;
    } else {
      let x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
      let x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
      return `Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    }
  }
}

@Component({
  selector: 'app-quadratic-equation',
  imports: [FormsModule],
  templateUrl: './quadratic-equation.component.html',
  styleUrl: './quadratic-equation.component.css'
})
export class QuadraticEquationComponent {
  public a: number = 0;
  public b: number = 0;
  public c: number = 0;
  public result: string = '';

  solveEquation() {
    let equation = new Quadratic(this.a, this.b, this.c);
    this.result = equation.findSolution();
  }

  clearFields() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.result = '';
  }
}
