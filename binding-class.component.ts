import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-class',
  imports: [CommonModule],
  templateUrl: './binding-class.component.html',
  styleUrl: './binding-class.component.css'
})
export class BindingClassComponent {
  public success: string = "text-success";
  public error: string = "text-error";
  public primary: string = "text-primary";
  public normal: string = "text-normal";

  public multiClass = {
    "text-primary": true,
    "text-normal": true,
    "text-error": true
  };

  // Định nghĩa class mới "text-complexity"
  public complexity: string = "text-complexity";
}
