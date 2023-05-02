import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  links = [
    { label: 'Home', path: '' },
    { label: 'Produtos', path: '/produtos' },
  ];

  images = [
    '../../../assets/images/img1.jpg',
    '../../../assets/images/img2.jpg',
    '../../../assets/images/img3.jpeg',
  ];
}
