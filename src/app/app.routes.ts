import {Routes} from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },

    {
        path: 'home',
        loadComponent: () =>
            import('app/modules/home/home.component').then(
                (m) => m.HomeComponent,
            ),
    },

    {
        path: 'about',
        loadComponent: () =>
            import('app/modules/about/about.component').then(
                (m) => m.AboutComponent,
            ),
    },
    {
        path: 'our-clients',
        loadComponent: () =>
            import('app/modules/our-clients/our-clients.component').then(
                (m) => m.OurClientsComponent,
            ),
    },

    {
        path: 'our-services',
        loadComponent: () =>
            import('app/modules/our-services/our-services.component').then(
                (m) => m.OurServicesComponent,
            ),
    },
]
