import {HomeSection5Component} from './home-section5/home-section5.component'
import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavbarComponent} from 'app/components/common/navbar/navbar.component'
import {FooterComponent} from 'app/components/common/footer/footer.component'
import {ContactUsComponent} from 'app/components/common/contact-us/contact-us.component'
import {HomeSection1Component} from './home-section1/home-section1.component'
import {HomeSection2Component} from './home-section2/home-section2.component'
import {HomeSection3Component} from './home-section3/home-section3.component'
import {HomeSection4Component} from './home-section4/home-section4.component'

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        NavbarComponent,
        FooterComponent,
        ContactUsComponent,
        HomeSection1Component,
        HomeSection2Component,
        HomeSection3Component,
        HomeSection4Component,
        HomeSection5Component,
    ],
})
export class HomeComponent {}
