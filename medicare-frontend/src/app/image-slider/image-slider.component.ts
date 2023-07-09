import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  title= 'image-slider';

  imageSize: any = {
    width: 200, height: 200, space: 3
  }

  imageObject: Array<object> = [
    {
      image: 'https://pics.walgreens.com/prodimg/168632/900.jpg',
      thumbImage: 'https://pics.walgreens.com/prodimg/168632/900.jpg',
      alt: 'Aspirin',
      //title: 'Image 1'
    }, {
      image: 'https://www.walgreens.com/images/drug/0159762305102.jpg',
      thumbImage: 'https://www.walgreens.com/images/drug/0159762305102.jpg',
      //title: 'Image 2',
      alt: 'Azithromycin'
    }, {
      image: 'https://pics.walgreens.com/prodimg/615937/900.jpg',
      thumbImage: 'https://pics.walgreens.com/prodimg/615937/900.jpg',
      //title: 'Image 3',
      alt: 'Ibuprofen'
    }, {
      image: 'https://pics.walgreens.com/prodimg/400425/900.jpg',
      thumbImage: 'https://pics.walgreens.com/prodimg/400425/900.jpg',
      //title: 'Image 4',
      alt: 'Omeprazole'
    }, {
      image: 'https://pics.walgreens.com/prodimg/584676/900.jpg',
      thumbImage: 'https://pics.walgreens.com/prodimg/584676/900.jpg',
      //title: 'Image 5',
      alt: 'Naproxen'
    }, {
      image: 'https://www.walgreens.com/images/drug/0163323064810.jpg',
      thumbImage: 'https://www.walgreens.com/images/drug/0163323064810.jpg',
      //title: 'Image 6',
      alt: 'Amlodipine'
    }
];
}
