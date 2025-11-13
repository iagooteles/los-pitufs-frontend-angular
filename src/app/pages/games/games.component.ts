import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameService, Game } from '../../services/games.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GameComponent implements OnInit {
  gameData?: Game;
  loading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params) => this.gameService.getById(+params['id'])))
      .subscribe({
        next: (game) => {
          this.gameData = game;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao carregar jogo:', err);
          this.errorMessage = 'Erro ao carregar este jogo 😞';
          this.loading = false;
          this.cdr.detectChanges();
        },
      });
  }
}
