import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { StringInterpolationExComponent } from './string-interpolation-ex/string-interpolation-ex.component';
import { PropertyBindingExComponent } from './property-binding-ex/property-binding-ex.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const appRoutes: Routes = [
{ path: '', component: HeaderComponent },
{ path: 'strings', component: StringInterpolationExComponent },
{ path: 'property', component: PropertyBindingExComponent },
{ path: 'event', component: EventBindingComponent },
{ path: 'two-way', component: TwoWayBindingComponent },
{ path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [

  RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
