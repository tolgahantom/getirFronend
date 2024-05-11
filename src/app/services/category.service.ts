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

  categoriesForCarsi: Category[] = [
    {
      id: 1,
      title: 'Deprem Yardimi',
      image: 'https://cdn.getircarsi.com/19668259d480075884f4ec59e44e73a5.png',
      isActiveHome: true,
    },
    {
      id: 2,
      title: 'Su',
      image: 'https://cdn.getircarsi.com/5afe83799bc86556599ee9ec74663c8c.jpg',
      isActiveHome: true,
    },
    {
      id: 3,
      title: 'Kahveci',
      image: 'https://cdn.getircarsi.com/a971cf8d2661b1f6370a376d4be9ef96.png',
      isActiveHome: true,
    },
    {
      id: 4,
      title: 'Hediye',
      image: 'https://cdn.getircarsi.com/51e10392d7cc15975b6281771caa11a2.png',
      isActiveHome: true,
    },
    {
      id: 5,
      title: 'Kuaför',
      image: 'https://cdn.getircarsi.com/19bf26a4b6f2bc1fca4e15754afd97a9.jpg',
      isActiveHome: true,
    },
    {
      id: 7,
      title: 'Anne & Çocuk',
      image: 'https://cdn.getircarsi.com/554fcbd74ec94eef7b6d535dc9c85106.png',
      isActiveHome: true,
    },
    {
      id: 8,
      title: 'Market',
      image: 'https://cdn.getircarsi.com/72ac6c0686ff6f568888c7c5718ee660.png',
      isActiveHome: true,
    },
    {
      id: 9,
      title: 'Manav',
      image: 'https://cdn.getircarsi.com/29735ed48d43ae4443ff8d629703b79b.jpeg',
      isActiveHome: true,
    },
    {
      id: 10,
      title: 'Kasap',
      image: 'https://cdn.getircarsi.com/198d969f26b3d12c481bf06ca4a07fba.png',
      isActiveHome: true,
    },
    {
      id: 11,
      title: 'Semt Pazarı',
      image: 'https://cdn.getircarsi.com/eff95eb62d676caef4e930c5fd15f919.jpg',
      isActiveHome: true,
    },
    {
      id: 12,
      title: 'Pet Shop',
      image: 'https://cdn.getircarsi.com/bc940fef889d68f52693c163811bbce0.png',
      isActiveHome: true,
    },
    {
      id: 13,
      title: 'Şarküteri',
      image: 'https://cdn.getircarsi.com/d2a3196a65e05409d74d319e8fc29b05.png',
      isActiveHome: true,
    },
    {
      id: 14,
      title: 'Kuru Yemişçi',
      image: 'https://cdn.getircarsi.com/9770ccff4d133b317ef2eead0c8ee772.png',
      isActiveHome: true,
    },
    {
      id: 15,
      title: 'Aktar',
      image: 'https://cdn.getircarsi.com/2aa40564ba424f559cd085fc6fdc89a9.png',
      isActiveHome: true,
    },
    {
      id: 16,
      title: 'Çiçekçi',
      image: 'https://cdn.getircarsi.com/8db6bc8a272de0d8979392259106689a.jpg',
      isActiveHome: true,
    },
    {
      id: 17,
      title: 'Yufkacı',
      image: 'https://cdn.getircarsi.com/4f357a8cb70f59d6f2bf67a6e51b18f3.png',
      isActiveHome: true,
    },
    {
      id: 18,
      title: 'Balıkçı',
      image: 'https://cdn.getircarsi.com/c5210628ce96a822b8fa41d6e735e11d.png',
      isActiveHome: true,
    },
    {
      id: 19,
      title: 'Turşucu',
      image: 'https://cdn.getircarsi.com/c08a1ef2521512c87e3479f7f38fe617.jpeg',
      isActiveHome: true,
    },
    {
      id: 20,
      title: 'Kahveci & Çikolatacı',
      image: 'https://cdn.getircarsi.com/2e30cc4ab865e039b16651182062055a.png',
      isActiveHome: true,
    },
    {
      id: 21,
      title: 'Kırtasiye',
      image: 'https://cdn.getircarsi.com/5738bc99c87b6399d60192b19f5ac3b0.jpeg',
      isActiveHome: true,
    },
    {
      id: 22,
      title: 'Kozmetik',
      image: 'https://cdn.getircarsi.com/8c4a5fcede57d01737806845701a475f.jpg',
      isActiveHome: true,
    },
    {
      id: 23,
      title: 'Elektronik',
      image: 'https://cdn.getircarsi.com/53124b1a144c5821f5c1105b99edda2b.png',
      isActiveHome: true,
    },
    {
      id: 24,
      title: 'Giyim',
      image: 'https://cdn.getircarsi.com/2bb253b5aced44ca756fdc49a0ec6b46.png',
      isActiveHome: true,
    },
    {
      id: 25,
      title: 'Bebek',
      image: 'https://cdn.getircarsi.com/9782679ae8fa4c087191080edf5feef8.jpg',
      isActiveHome: true,
    },
    {
      id: 26,
      title: 'Ev, Yaşam & Dekorasyon',
      image: 'https://cdn.getircarsi.com/450c79c00833eac4e7b72bf5a862686f.jpg',
      isActiveHome: true,
    },
    {
      id: 27,
      title: 'Hobi',
      image: 'https://cdn.getircarsi.com/416adf9f1327f31c79307d65805e369f.jpg',
      isActiveHome: true,
    },
    {
      id: 28,
      title: 'AVM',
      image: 'https://cdn.getircarsi.com/57835084721abb3ce4beb3ba7d0b6675.png',
      isActiveHome: true,
    },
  ];

  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoriesForCarsi(): Category[] {
    return this.categoriesForCarsi;
  }
}
