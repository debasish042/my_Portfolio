import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent {
  title = 'ng-carousel-demo';

  images = [
    {
      title: 'Coding',
      subtitle: 'I am deeply in love with coding,Where creativity meets Logic.',
      src: 'assets/slide1.png',
    },
    {
      title: 'Spring',
      subtitle: 'With my knowledge in spring, I find beauty how it empowers developers.',
      src: 'assets/slide2.png',
    },
    {
      title: 'Angular',
      subtitle: "This page is on Angular!  I'm currently learning Angular!",
      src: 'assets/slide3.png',
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
