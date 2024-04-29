import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { YemekComponent } from './pages/yemek/yemek.component';
import { BuyukComponent } from './pages/buyuk/buyuk.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'yemek', component: YemekComponent },
  { path: 'buyuk', component: BuyukComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
