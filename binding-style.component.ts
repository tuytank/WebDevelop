import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style',
  imports: [],
  templateUrl: './binding-style.component.html',
  styleUrl: './binding-style.component.css'
})
export class BindingStyleComponent {
  public isError: boolean = false;

  public textStyle = {
    color: 'darkorange',
    fontSize: '26px',
    textTransform: 'uppercase' // Tự động in hoa toàn bộ chữ
  };
}
