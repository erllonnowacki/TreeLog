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

    constructor() {}

    ngOnInit(): void {}
}
