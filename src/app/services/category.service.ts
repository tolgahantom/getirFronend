import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [
    {
      id: 3,
      title: 'Su & İçecek',
      image:
        'http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg',
      isActiveHome: true,
    },
    {
      id: 1,
      title: 'Et, Tavuk & Balık',
      image:
        'https://cdn-image.getir.com/market/category/2cdae419-3f21-4408-bdb4-1c745ad25018.png',
      isActiveHome: false,
    },
    {
      id: 4,
      title: 'Meyve & Sebze',
      image:
        'http://cdn.getir.com/cat/5928113e616cab00041ec6de_1619242870968_1619242871055.jpeg',
      isActiveHome: true,
    },
    {
      id: 2,
      title: 'Süt Ürünleri',
      image:
        'https://cdn-image.getir.com/market/category/dc761a5c-e285-4b1f-91a8-eecb7e24ecb9.png',
      isActiveHome: true,
    },
    {
      id: 5,
      title: 'Fırından',
      image:
        'http://cdn.getir.com/cat/566eeb85f9facb0f00b1cb16_1619242817768_1619242817849.jpeg',
      isActiveHome: true,
    },
    {
      id: 6,
      title: 'Temel Gıda',
      image:
        'http://cdn.getir.com/cat/56dfcfba86004203000a870d_1619242834654_1619242834734.jpeg',
      isActiveHome: true,
    },
    {
      id: 7,
      title: 'Atıştırmalık',
      image:
        'http://cdn.getir.com/cat/56dfe03cf82055030022cdc0_1619242841966_1619242842053.jpeg',
      isActiveHome: true,
    },
    {
      id: 8,
      title: 'Dondurma',
      image:
        'http://cdn.getir.com/cat/55bca8484dcda90c00e3aa80_1619242741382_1619242741482.jpeg',
      isActiveHome: true,
    },
    {
      id: 9,
      title: 'Yiyecek',
      image:
        'http://cdn.getir.com/cat/551430043427d5010a3a5c5d_1619242660025_1619242660107.jpeg',
      isActiveHome: true,
    },
    {
      id: 10,
      title: 'Süt & Kahvaltı',
      image:
        'http://cdn.getir.com/cat/56dfed05ab747f03008d9379_1619242850313_1619242850394.jpeg',
      isActiveHome: true,
    },
    {
      id: 11,
      title: 'Fit & Form',
      image:
        'http://cdn.getir.com/cat/57e2996551f3ee030027e28b_1619242858559_1619242858642.jpeg',
      isActiveHome: true,
    },
    {
      id: 12,
      title: 'Kişisel Bakım',
      image:
        'http://cdn.getir.com/cat/551430043427d5010a3a5c5c_1619242651249_1619242651335.jpeg',
      isActiveHome: true,
    },
    {
      id: 13,
      title: 'Ev Bakım',
      image:
        'http://cdn.getir.com/cat/55449fdf02632e11003c2da8_1619242719523_1619242719602.jpeg',
      isActiveHome: true,
    },
    {
      id: 14,
      title: 'Ev & Yaşam',
      image:
        'http://cdn.getir.com/cat/5b06b056b883b700044e3e4c_1619242916956_1619242917048.jpeg',
      isActiveHome: true,
    },
    {
      id: 15,
      title: 'Teknoloji',
      image:
        'http://cdn.getir.com/cat/551430043427d5010a3a5c62_1619242697597_1619242697702.jpeg',
      isActiveHome: true,
    },
    {
      id: 16,
      title: 'Evcil Hayvan',
      image:
        'http://cdn.getir.com/cat/551430043427d5010a3a5c63_1619242711604_1619242711687.jpeg',
      isActiveHome: true,
    },
    {
      id: 17,
      title: 'Bebek',
      image:
        'http://cdn.getir.com/cat/551430043427d5010a3a5c5b_1619242620186_1619242620271.jpeg',
      isActiveHome: true,
    },
    {
      id: 18,
      title: 'Cinsel Sağlık',
      image:
        'http://cdn.getir.com/cat/559c07b093be370c0063dd29_1619242727735_1619242727816.jpeg',
      isActiveHome: true,
    },
    {
      id: 19,
      title: 'Giyim',
      image:
        'http://cdn.getir.com/cat/551430043427d5010a3a5c5f_1619242679723_1619242679822.jpeg',
      isActiveHome: true,
    },
  ];

  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }
}
