import { Routes } from '@angular/router';
import { StaffComponent } from './pages/staff/staff.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'aktualnosci', component: NewsComponent},
    {path: 'news', component: NewsComponent},
    {path: 'kadra', component: StaffComponent},
    {path: 'staff', component: StaffComponent}
];
