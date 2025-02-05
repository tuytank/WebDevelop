import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { BindingPropertyComponent } from "./binding-property/binding-property.component";
import { BindingStyleComponent } from './binding-style/binding-style.component';
import { BindingClassComponent } from './binding-class/binding-class.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { BindingTwoWayComponent } from './binding-two-way/binding-two-way.component';
import { QuadraticEquationComponent } from './quadratic-equation/quadratic-equation.component';
import { LunarYearComponent } from './lunar-year/lunar-year.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LunarYearComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
