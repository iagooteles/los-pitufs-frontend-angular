import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserCarouselComponent } from '../../core/components/user-carousel/user-carousel.component';
import { GameOfWeekComponent } from '../../core/components/game-of-week/game-of-week.component';
import { CarouselComponent } from '../../core/components/games-carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, GameOfWeekComponent, UserCarouselComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
