import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { BindingPropertyComponent } from "./binding-property/binding-property.component";
import { BindingStyleComponent } from './binding-style/binding-style.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BindingStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
