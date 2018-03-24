import { Component} from '@angular/core';

@Component({
  selector: 'app-property-binding-ex',
  templateUrl: './property-binding-ex.component.html',
  styleUrls: ['./property-binding-ex.component.css']
})
export class PropertyBindingExComponent{
	locked: boolean = true;

	//Constructor method is called first when this component is used by Angular
  constructor() { 
  setTimeout(() => {this.locked = false;}, 3000)
  }

  

}
