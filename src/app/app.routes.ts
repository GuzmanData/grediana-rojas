import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from './components/about-me/about-me.component';


const ROUTES: Routes = [
    // { path: 'home', component: HomeComponent },
    // { path: 'heroes-app',  redirectTo: 'home' },
    // { path: 'about', component: AboutComponent },
    // { path: 'heroes', component: HeroesComponent },
    // { path: 'heroe/:id', component: HeroeComponent },
    // { path: 'buscar/:termino', component: BuscadorHeroesComponent },
    { path: 'aboutMe', component: AboutMeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);

