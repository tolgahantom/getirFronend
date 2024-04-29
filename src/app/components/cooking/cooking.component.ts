import { Component } from '@angular/core';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrl: './cooking.component.scss',
})
export class CookingComponent {
  itemsPerSlide = 8;
  singleSlideOffset = true;

  slides = [
    {
      text: 'Kahvaltı',
      image: 'https://cdn.getiryemek.com/cuisines/1713898297377_1024x1024.jpeg',
    },
    {
      text: 'Kebap',
      image: 'https://cdn.getiryemek.com/cuisines/1713898313355_1024x1024.jpeg',
    },
    {
      text: 'Köfte',
      image: 'https://cdn.getiryemek.com/cuisines/1713898320748_1024x1024.jpeg',
    },
    {
      text: 'Pasta & Tatlı',
      image: 'https://cdn.getiryemek.com/cuisines/1713898344183_1024x1024.jpeg',
    },
    {
      text: 'Pizza',
      image: 'https://cdn.getiryemek.com/cuisines/1713898373780_1024x1024.jpeg',
    },
    {
      text: 'Sokak Lezzetleri',
      image: 'https://cdn.getiryemek.com/cuisines/1713898395238_1024x1024.jpeg',
    },
    {
      text: 'Börek',
      image: 'https://cdn.getiryemek.com/cuisines/1713898214208_1024x1024.jpeg',
    },
    {
      text: 'Deniz Ürünleri',
      image: 'https://cdn.getiryemek.com/cuisines/1713898239998_1024x1024.jpeg',
    },
    {
      text: 'Burger',
      image: 'https://cdn.getiryemek.com/cuisines/1713898221252_1024x1024.jpeg',
    },
    {
      text: 'Döner',
      image: 'https://cdn.getiryemek.com/cuisines/1713898257959_1024x1024.jpeg',
    },
    {
      text: 'Dünya Mutfağı',
      image: 'https://cdn.getiryemek.com/cuisines/1713898265370_1024x1024.jpeg',
    },
    {
      text: 'Ev Yemekleri',
      image: 'https://cdn.getiryemek.com/cuisines/1713898283324_1024x1024.jpeg',
    },
  ];
}
