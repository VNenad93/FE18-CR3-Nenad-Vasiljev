import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
