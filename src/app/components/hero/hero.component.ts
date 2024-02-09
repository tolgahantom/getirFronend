import { Component } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  isFocused: boolean = false;

  countries: Country[] = [
    { nameCode: 'TR', phoneCode: '+90', flagCode: 'flagTR' },
    { nameCode: 'UK', phoneCode: '+44', flagCode: 'flagUK' },
    { nameCode: 'US', phoneCode: '+1', flagCode: 'flagUS' },
    { nameCode: 'DE', phoneCode: '+49', flagCode: 'flagDE' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onInputFocus() {
    this.isFocused = true;
  }

  onInputBlur() {
    this.isFocused = false;
  }
}
