import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-event',
  imports: [FormsModule],
  templateUrl: './binding-event.component.html',
  styleUrl: './binding-event.component.css'
})
export class BindingEventComponent {
  public a: number = 0;
  public b: number = 0;
  public result: string = '';

  onClick(event: any) {
    alert(event.pointerId);
  }

  onSubmit(value: string) {
    alert(value);
  }

  add() {
    this.result = `Tổng: ${this.a + this.b}`;
  }

  subtract() {
    this.result = `Hiệu: ${this.a - this.b}`;
  }

  multiply() {
    this.result = `Tích: ${this.a * this.b}`;
  }

  divide() {
    if (this.b === 0) {
      this.result = 'Lỗi: Không thể chia cho 0!';
    } else {
      this.result = `Thương: ${this.a / this.b}`;
    }
  }

  clear() {
    this.a = 0;
    this.b = 0;
    this.result = '';
  }
}
