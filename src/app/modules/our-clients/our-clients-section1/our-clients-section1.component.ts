import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'
import {OUR_PARTNERS} from 'app/_core/constants/our-partner'

@Component({
    selector: 'our-clients-section1',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './our-clients-section1.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurClientsSection1Component {
    readonly OUR_PARTNERS = OUR_PARTNERS

    currentPartner = OUR_PARTNERS[1]
}
