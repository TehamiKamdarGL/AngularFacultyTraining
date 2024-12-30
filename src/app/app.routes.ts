import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {path:'contact',component:ContactComponent},
    {path:'products', component:ProductsComponent},
    {path:'search', component:SearchComponent}
];
