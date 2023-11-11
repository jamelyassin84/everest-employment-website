import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavbarComponent} from 'app/components/common/navbar/navbar.component'
import {FooterComponent} from 'app/components/common/footer/footer.component'
import {ContactUsComponent} from 'app/components/common/contact-us/contact-us.component'
import {OurClientsSection1Component} from './our-clients-section1/our-clients-section1.component'
import {OurClientsSection2Component} from './our-clients-section2/our-clients-section2.component'

@Component({
    selector: 'our-clients',
    standalone: true,
    imports: [
        CommonModule,

        NavbarComponent,
        FooterComponent,
        ContactUsComponent,

        OurClientsSection1Component,
        OurClientsSection2Component,
    ],
    templateUrl: './our-clients.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurClientsComponent {}
