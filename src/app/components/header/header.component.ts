import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    links = [
        { label: 'Home', path: '' },
        { label: 'Produtos', path: '/produtos' },
    ]

    images = [
        '../../../assets/images/img1.jpg',
        '../../../assets/images/img2.jpg',
        '../../../assets/images/img3.jpeg',
    ]

    constructor() {}

    ngOnInit() {
        // setInterval(() => {
        //     this.activeIndex++
        //     if (this.activeIndex >= this.images.length) {
        //         this.activeIndex = 0
        //     }
        // }, 10000)
    }
}
