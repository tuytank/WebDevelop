import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property',
  imports: [],
  template: `
  <div>
    <label [for]="nameid">Name:</label>
    <input [id]="nameid" [value]="name" />
  </div>
  <div>
    <label [for]="emailid">Email:</label>
    <input [id]="emailid" [value]="email" [disabled]="isDisabled" />
  </div>
`,
  templateUrl: './binding-property.component.html',
  styleUrl: './binding-property.component.css'
})
export class BindingPropertyComponent {
  public name: string = "Trần Duy Thanh";
  public email: string = "thanhtd@uel.edu.vn";
  public nameid: string = "nameid";
  public emailid: string = "emailid";
  public isDisabled: boolean = false;
}
