import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-carsi',
  templateUrl: './carsi.component.html',
  styleUrl: './carsi.component.scss',
})
export class CarsiComponent {
  cardListFromYemekPage: any[] = [];
  categories: Category[] = [];
  slides: any[] = [
    {
      image:
        'https://cdn.getir.com/getirweb_images/common/hero_posters/locals_2.jpeg',
    },
  ];

  constructor(private categoryService: CategoryService) {
    this.cardListFromYemekPage = [
      {
        image:
          'https://cdn.getir.com/getirweb-images/common/illustration/intro-locals-delivery.png',
        title:
          'İhtiyacın olan ürünler, gramajı, lezzeti ve tazeliği tam istediğin şekilde çarşıdan kapına ulaşır!',
        desc: '',
      },
      {
        image:
          'https://cdn.getir.com/getirweb-images/common/illustration/intro-locals-all-types.png',
        title:
          'GetirÇarşı ile manavdan, kasaba, marketten, pet shopa 100 binlerce ürün sipariş edebilirsin!',
        desc: '',
      },
      {
        image:
          'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg',
        title:
          'Siparişin Getir güvencesi ile dakikalar içerisinde teslim edilir!',
        desc: '',
      },
    ];

    this.categories = this.categoryService.getCategoriesForCarsi();
  }
}
