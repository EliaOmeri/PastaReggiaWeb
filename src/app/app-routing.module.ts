import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'products', component: ProductsComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent}

];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ],
  declarations: []
  })
export class AppRoutingModule { }
