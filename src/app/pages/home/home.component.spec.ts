import { HomePageComponent } from './home.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'

describe('ProdutoComponent', () => {
    let component: HomePageComponent
    let fixture: ComponentFixture<HomePageComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomePageComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(HomePageComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
