import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCard, USER_CARDS } from './user-carousel.data'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-carousel.component.html'
})
export class UserCarouselComponent {
  userCards: UserCard[] = USER_CARDS;
  index = 0;

  next() {
    if (this.index + 6 < this.userCards.length) this.index += 6;
  }

  prev() {
    if (this.index > 0) this.index -= 6;
  }

  get visible() {
    return this.userCards.slice(this.index, this.index + 6);
  }
}
