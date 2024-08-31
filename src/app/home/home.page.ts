import { NgStyle } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicSlides, IonContent, IonFooter, IonToolbar, IonButton, IonText } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonToolbar, IonFooter, IonContent, NgStyle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomePage {

  onboardingScreens = [
    { image: '1.jpg' },
    { image: '2.jpg' },
    { image: '3.jpg' },
  ];
  swiperModules = [IonicSlides];

  constructor() {}
}
