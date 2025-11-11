import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/games/games.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'games/:id', component: GameComponent },
  { path: '**', redirectTo: '' }
];
