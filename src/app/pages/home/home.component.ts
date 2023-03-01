import { Component } from '@angular/core'

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomePageComponent {
    activeIndex = 0

    images = [
        '../../../assets/images/img1.jpg',
        '../../../assets/images/img2.jpg',
        '../../../assets/images/img3.jpeg',
    ]

    constructor() {}

    ngOnInit() {
        setInterval(() => {
            this.activeIndex++
            if (this.activeIndex >= this.images.length) {
                this.activeIndex = 0
            }
        }, 10000)
    }
}
