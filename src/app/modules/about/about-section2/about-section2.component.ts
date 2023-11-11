import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AWARDS} from 'app/_core/constants/award'

@Component({
    selector: 'about-section2',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about-section2.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection2Component {
    readonly AWARDS = AWARDS
}
