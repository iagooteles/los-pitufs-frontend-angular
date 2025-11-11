import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameService, Game } from '../../services/games.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GameComponent implements OnInit {
  gameData?: Game;
  gameId!: number;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gameId = +params['id'];
      this.loadGame();
    });
  }

  loadGame() {
    this.loading = true;

    this.gameService.getById(this.gameId).subscribe({
      next: (game) => {
        this.gameData = game;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar jogo:', err);
        this.loading = false;
      },
    });
  }
}
