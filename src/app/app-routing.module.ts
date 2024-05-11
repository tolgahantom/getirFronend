import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { YemekComponent } from './pages/yemek/yemek.component';
import { BuyukComponent } from './pages/buyuk/buyuk.component';
import { CarsiComponent } from './pages/carsi/carsi.component';
import { SuComponent } from './pages/su/su.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'yemek', component: YemekComponent },
  { path: 'buyuk', component: BuyukComponent },
  { path: 'su', component: SuComponent },
  { path: 'carsi', component: CarsiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
