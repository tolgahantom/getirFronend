import { Component } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  isFocused: boolean = false;
  isModalOpen: boolean = false;

  countries = [
    { name: 'TURKEY', code: 'TR', phone: '+90' },
    { name: 'UNITED STATES of AMERICA', code: 'USA', phone: '+1' },
    { name: 'GERMANY', code: 'DE', phone: '+50' },
    { name: 'ITALY', code: 'IT', phone: '+7' },
    { name: 'INDIAN', code: 'IN', phone: '+15' },
  ];

  activeCountry: Country = this.countries[0];

  constructor() {}

  ngOnInit(): void {}

  onInputFocus() {
    this.isFocused = true;
  }

  onInputBlur() {
    this.isFocused = false;
  }

  changeActiveCountry(country: Country) {
    this.activeCountry = country;
  }
}
