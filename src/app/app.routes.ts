import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EducationComponent } from './components/education/education.component';


const ROUTES: Routes = [
    // { path: 'home', component: HomeComponent },
    // { path: 'heroes-app',  redirectTo: 'home' },
    // { path: 'about', component: AboutComponent },
    // { path: 'heroes', component: HeroesComponent },
    // { path: 'heroe/:id', component: HeroeComponent },
    // { path: 'buscar/:termino', component: BuscadorHeroesComponent },
    { path: 'formation', component: EducationComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'aboutMe', component: AboutMeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'aboutMe' }

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);

