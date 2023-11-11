import {ChangeDetectionStrategy, Component, signal} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NAVBAR_NAVIGATION} from 'app/_core/navigations/navbar-navigation'
import {NavigationEnd, Router, RouterModule} from '@angular/router'
import {filter, tap} from 'rxjs'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'

@Component({
    selector: 'navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    constructor(private readonly _router: Router) {
        this._router.events
            .pipe(
                takeUntilDestroyed(),
                filter((e) => e instanceof NavigationEnd),
                tap(() => {
                    this.NAVBAR_NAVIGATION.forEach((nav) => {
                        if (this._router.url.includes(nav.link)) {
                            this.currentNavigation.set(nav)
                        }
                    })
                }),
            )
            .subscribe()
    }

    readonly NAVBAR_NAVIGATION = NAVBAR_NAVIGATION

    currentNavigation = signal(undefined)
}
