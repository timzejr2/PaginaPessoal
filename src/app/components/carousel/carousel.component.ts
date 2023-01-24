import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ['https://postsimages.blob.core.windows.net/images/4d0ba369-5975-480c-918c-a8fc8e52237b-Blog.png', 'https://postsimages.blob.core.windows.net/images/7f186a84-2888-4811-b234-06cf1e33c9e7-Projetos.png']

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 5000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
  }
}
