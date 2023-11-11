import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'
import {EVEREST_EMPLOYMENT_SERVICES} from 'app/_core/constants/services'

@Component({
    selector: 'our-service-section1',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './our-service-section1.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurServiceSection1Component {
    readonly OUR_SERVICES = EVEREST_EMPLOYMENT_SERVICES
}
