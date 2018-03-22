/**
* Step 3
* Decorators are not known to the file by default. 
* So, we need to import Component from package'@angular/core'.
* By default, angular ships with large no of packages and core packages provides us with core functionality
* Component is in curly braces coz the package where import from has too many parts which can be imported
*/
import { Component } from '@angular/core';

/**
* Step 2: 
* Decorators converts typical typescript class to the angular component.
* We pass a Javascript object(one in {} braces) for configuration.
* This info acts as a meta-data which lets angular know what to do with this class.
* Just make sure you add a unique text for selector. Typically use app-<any logical name>. 
*/

@Component({
  selector: 'app-header',  //Wierd html tags by which we can use this component into another component.     
  templateUrl: './header.component.html', //relative path to component template i.e HTML file
  styleUrls: ['./header.component.css'] //relative path to component style i.e CSS file
})

/**
* Step 1: 
* Component is just Typescript class which can be exported 
* Preceding class name with an export keyword.
* Naming Convention of component: Component Name followed by the description.
* 
*/
 export class HeaderComponent {
 }

