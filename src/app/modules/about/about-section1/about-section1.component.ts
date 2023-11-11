import {EMPLOYMENT_SERVICES} from 'app/_core/constants/about-services'
import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'

@Component({
    selector: 'about-section1',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './about-section1.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection1Component {
    readonly ABOUT_SERVICES = EMPLOYMENT_SERVICES
}
