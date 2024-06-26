import { Component } from '@angular/core';

@Component({
  selector: 'app-yemek',
  templateUrl: './yemek.component.html',
  styleUrl: './yemek.component.scss',
})
export class YemekComponent {
  cardListFromYemekPage: any[] = [];

  constructor() {
    this.cardListFromYemekPage = [
      {
        image:
          'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg',
        title: 'Binlerce restorandan yemeğinizi görerek seçin!',
        desc: '',
      },
      {
        image:
          'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg',
        title:
          'Haftanın her günü bulabileceğin yüzlerce kampanya ile indirimli fiyatlardan yararlan!',
        desc: '',
      },
      {
        image:
          'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg',
        title:
          'Kredi kartı, kapıda ya da yemek kartları ile hızlı ve güvenli ödeme yap!',
        desc: '',
      },
    ];
  }
}
