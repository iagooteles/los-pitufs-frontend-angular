import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User, UserService } from '../../../services/user.service';

export interface UserCard {
  id: number;
  image: string;
  nickname: string;
}

@Component({
  selector: 'app-user-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-carousel.component.html',
})
export class UserCarouselComponent implements OnInit {
  userCards: UserCard[] = [];
  index = 0;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.userService.getAll().subscribe({
      next: (users: User[]) => {
        this.userCards = users.map((user) => ({
          id: user.id!,
          nickname: user.username,
          image: user.profilePictureUrl || 'https://i.pravatar.cc/150?img=1',
        }));

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao carregar usuários', err);
        this.cdr.detectChanges();
      },
    });
  }

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
