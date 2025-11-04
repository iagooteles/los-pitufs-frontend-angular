import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './core/components/games-carousel/carousel.component';
import { UserCarouselComponent } from './core/components/user-carousel/user-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CarouselComponent, UserCarouselComponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('los-pitufs-frontend-angular');
}
