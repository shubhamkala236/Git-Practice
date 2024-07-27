import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent,data: { breadcrumb: 'Home' },children:[
    { path: '', component: DynamicComponent,data: { breadcrumb: 'Detail' }},
    { path: '**', component: DynamicComponent}
  ]},
];
