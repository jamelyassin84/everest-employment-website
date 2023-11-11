import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavbarComponent} from 'app/components/common/navbar/navbar.component'
import {FooterComponent} from 'app/components/common/footer/footer.component'
import {ContactUsComponent} from 'app/components/common/contact-us/contact-us.component'
import {AboutSection1Component} from './about-section1/about-section1.component'
import {AboutSection2Component} from './about-section2/about-section2.component'
import {AboutSection3Component} from './about-section3/about-section3.component'

@Component({
    selector: 'about',
    standalone: true,
    imports: [
        CommonModule,

        NavbarComponent,
        FooterComponent,
        ContactUsComponent,

        AboutSection1Component,
        AboutSection2Component,
        AboutSection3Component,
    ],
    templateUrl: './about.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
