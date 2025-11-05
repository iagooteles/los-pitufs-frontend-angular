import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './core/components/games-carousel/carousel.component';
import { UserCarouselComponent } from './core/components/user-carousel/user-carousel.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { GameOfWeekComponent } from './core/components/game-of-week/game-of-week.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CarouselComponent, GameOfWeekComponent, UserCarouselComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('los-pitufs-frontend-angular');
}
