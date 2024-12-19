import { Routes } from '@angular/router';
import { HolaComponent } from './example/hola/hola.component';
import { AdiosComponent } from './example/adios/adios.component';

export const routes: Routes = [
    {path:'', component:HolaComponent},
    {path:'adios', component:AdiosComponent}
];
