import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-component/header/header.component';
import { CampaingsComponent } from './components/campaings/campaings.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryComponent } from './components/category/category.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { FooterMenuComponent } from './main-component/footer-menu/footer-menu.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HomeComponent } from './pages/home/home.component';
import { YemekComponent } from './pages/yemek/yemek.component';
import { YemekVideosComponent } from './components/yemek-videos/yemek-videos.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CookingComponent } from './components/cooking/cooking.component';
import { BuyukComponent } from './pages/buyuk/buyuk.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CampaingsComponent,
    HeroComponent,
    CategoryComponent,
    CardsComponent,
    FooterComponent,
    FooterMenuComponent,
    HomeComponent,
    YemekComponent,
    YemekVideosComponent,
    CookingComponent,
    BuyukComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    MatSelectCountryModule.forRoot('de'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
