import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-buyuk',
  templateUrl: './buyuk.component.html',
  styleUrl: './buyuk.component.scss',
})
export class BuyukComponent {
  categories: Category[] = [];
  cardListFromHomePage: any[] = [];
  slides: any[] = [
    {
      image:
        'https://media.cnn.com/api/v1/images/stellar/prod/211006114703-best-meal-delivery-service-freshly.jpg?q=w_1601,h_900,x_0,y_0,c_fill',
    },
    {
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjirT6Cl8IIRwG3AjckSKYY_O6sYSuERlM14lOAeKlSTbb0JFCBQT_S3vSbltrWWNBvGXMLCXHjLW58aU-jAQqJRdeBryLLZp0D4GeGKg0jlzOSXHqWT1OjycHcvj7BxgoUNnL_uYACCts/s1600/IMG_20121222_204302.jpg',
    },
    {
      image:
        'https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg',
    },
    {
      image:
        'https://www.tastingtable.com/img/gallery/30-types-of-pasta-and-when-you-should-be-using-them/intro-1659010210.jpg',
    },
  ];

  constructor(private categoryService: CategoryService) {
    this.cardListFromHomePage = [
      {
        image:
          'https://getir.com/_next/static/images/intro-market-basket-8ca56a5e5a21b80ccb71403d77df83d8.svg',
        title: 'Binlerce çeşit',
        desc: 'Kasaptan manava, ev bakım ürünlerinden kişisel bakım ürünlerine binlerce çeşidi kolayca bulabilirsin.',
      },
      {
        image:
          'https://getir.com/_next/static/images/intro-market-delivery-86c4407609c24bbdf92feb222d7baca0.svg',
        title: 'Uygun fiyatlı ürünler',
        desc: 'GetirBüyük’te binlerce ürünü uygun fiyata sipariş verirsin.',
      },
      {
        image:
          'https://getir.com/_next/static/images/intro-market-fee-586c3e4c701b44396ac99828259e9d7f.svg',
        title: 'Kapına Teslimat',
        desc: 'Siparişlerin kapına kadar gelir.',
      },
    ];

    this.categories = this.categoryService.getCategories();
  }
}
