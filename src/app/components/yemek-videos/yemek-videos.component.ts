import { Country } from '@angular-material-extensions/select-country';
import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-yemek-videos',
  templateUrl: './yemek-videos.component.html',
  styleUrl: './yemek-videos.component.scss',
})
export class YemekVideosComponent {
  isFocused: boolean = false;
  isModalOpen: boolean = false;
  modalRef?: BsModalRef;

  videoAdress: string[] = [
    'https://cdn.getiryemek.com/banner/1_hamburger.mp4',
    'https://cdn.getiryemek.com/banner/2_doner.mp4',
    'https://cdn.getiryemek.com/banner/3_pide.mp4',
    'https://cdn.getiryemek.com/banner/4_pizza.mp4',
    'https://cdn.getiryemek.com/banner/5_kunefe.mp4',
  ];

  countries = [
    { name: 'TURKEY', code: 'TR', phone: '+90' },
    { name: 'UNITED STATES of AMERICA', code: 'USA', phone: '+1' },
    { name: 'GERMANY', code: 'DE', phone: '+50' },
    { name: 'ITALY', code: 'IT', phone: '+7' },
    { name: 'INDIAN', code: 'IN', phone: '+15' },
  ];

  activeCountry: Country = this.countries[0];
  activeVideo: string = this.videoAdress[0];
  currentIndex = 0;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.videoAdress.length;
      this.activeVideo = this.videoAdress[this.currentIndex];
    }, 5000);
  }

  onInputFocus() {
    this.isFocused = true;
  }

  onInputBlur() {
    this.isFocused = false;
  }

  changeActiveCountry(country: Country) {
    this.activeCountry = country;
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
