import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CampaingsComponent } from './components/campaings/campaings.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryComponent } from './components/category/category.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
