import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories: Category[] = [];
  cardListFromHomePage: any[] = [];
  isHomeAttribute: boolean = false;
  slides: any[] = [
    {
      image:
        'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg',
    },
    {
      image:
        'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg',
    },
    {
      image:
        'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg',
    },
    {
      image:
        'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg',
    },
  ];

  constructor(private categoryService: CategoryService) {
    this.cardListFromHomePage = [
      {
        image:
          'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg',
        title: 'Her siparişine bir kampanya',
        desc: 'Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin.',
      },
      {
        image:
          'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg',
        title: 'Dakikalar içinde kapında',
        desc: 'Getir’le siparişin dakikalar içinde kapına gelir.',
      },
      {
        image:
          'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg',
        title: 'Binlerce çeşit mutluluk',
        desc: 'Getir’de binlerce çeşit arasından seçimini yapabilirsin.',
      },
    ];
    this.categories = this.categoryService
      .getCategories()
      .filter((c) => c.isActiveHome);
  }
}
