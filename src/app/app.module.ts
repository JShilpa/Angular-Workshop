/**
 * By default, Decorators, Components are not know to modules.
 * So, we have to import them
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { StringInterpolationExComponent } from './string-interpolation-ex/string-interpolation-ex.component';
import { PropertyBindingExComponent } from './property-binding-ex/property-binding-ex.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DataService } from './data.service'
import {LoggingService} from './logging.service'
import { AppRoutingModule } from './app-routing.module';

/**
* But Angular cannot use this class directly as module. 
* So, we use this NgModule Decorator which consumes a Javascript object
*/

@NgModule({
  declarations: [   // This is a place where we register our newly created components
    AppComponent,      
    HeaderComponent, 
    SubHeaderComponent, StringInterpolationExComponent, PropertyBindingExComponent, EventBindingComponent, TwoWayBindingComponent
   
   ],
  imports: [
    BrowserModule,
    FormsModule,
     AppRoutingModule  //We can import other external modules here
  ],
  providers: [LoggingService, DataService],    // Services created for the app will be registered here
  bootstrap: [AppComponent] //we had a look at this when we studied main.ts.
  							//This array bootstrap call AppComponent on index.html on app start-up
})


/**
* Step 1: App Module is just another Typescript class like component with export keyword
*/
export class AppModule { }




