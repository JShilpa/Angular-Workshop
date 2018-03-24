import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation-ex',
  templateUrl: './string-interpolation-ex.component.html',
  styleUrls: ['./string-interpolation-ex.component.css']
})
export class StringInterpolationExComponent{

  constructor() { }

  name: string = 'Jane Doe';
  age: number = 60;

  getName() {
  	return this.name
  }

  

}
