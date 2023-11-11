import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'
import {SOCIALS} from 'app/_core/constants/socials'

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    readonly SOCIALS = SOCIALS

    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
}
