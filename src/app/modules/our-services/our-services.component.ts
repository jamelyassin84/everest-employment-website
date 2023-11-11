import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavbarComponent} from 'app/components/common/navbar/navbar.component'
import {FooterComponent} from 'app/components/common/footer/footer.component'
import {ContactUsComponent} from 'app/components/common/contact-us/contact-us.component'
import {OurServiceSection1Component} from './our-service-section1/our-service-section1.component'

@Component({
    selector: 'our-services',
    standalone: true,
    imports: [
        CommonModule,

        NavbarComponent,
        FooterComponent,
        ContactUsComponent,

        OurServiceSection1Component,
    ],
    templateUrl: './our-services.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurServicesComponent {}
