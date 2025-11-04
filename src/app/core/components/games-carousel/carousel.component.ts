import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GAME_CARDS } from './game-cards.data';

interface GameCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})

export class CarouselComponent {
  gameCards: GameCard[] = GAME_CARDS;

  index = 0;

  next() {
    if (this.index + 4 < this.gameCards.length) this.index += 4;
  }

  prev() {
    if (this.index > 0) this.index -= 4;
  }

  get visible() {
    return this.gameCards.slice(this.index, this.index + 4);
  }
}
