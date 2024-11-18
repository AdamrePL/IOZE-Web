import { Routes } from '@angular/router';
import { KadraComponent } from './pages/kadra/kadra.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'aktualnosci', component: NewsComponent},
    {path: 'news', component: NewsComponent},
    {path: 'kadra', component: KadraComponent},
    {path: 'staff', component: KadraComponent}
];
