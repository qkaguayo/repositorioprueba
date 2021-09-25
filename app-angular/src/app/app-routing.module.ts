
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProductoComponent} from './general/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';

//referencias a los componentes
const app_routes: Routes = [
    { path: '', component:HomeComponent },
    { path: 'producto', component:ProductoComponent },
    { path: 'categoria', component:CategoriaComponent }

];


//decorador: no olvidar importarlo
@NgModule({
    imports:[RouterModule.forRoot(app_routes)] ,
})
export class AppRoutingModule { }