import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, User } from '../../services/user.service';
import { FollowService } from '../../services/follow.service';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

interface Follower {
  id: number;
  username: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  userData?: User;
  userId!: number;
  loggedUserId: number | null = null;
  isFollowing = false;
  followersCount = 0;
  followingCount = 0;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private followService: FollowService
  ) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const storedId = localStorage.getItem('userId');
      this.loggedUserId = storedId ? Number(storedId) : null;
    }

    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      this.loadProfile();
    });
  }

  loadProfile() {
    this.loading = true;

  forkJoin({
    user: this.userService.getById(this.userId),
    followers: this.followService.getFollowers(this.userId),
    following: this.followService.getFollowing(this.userId),
  }).subscribe({
    next: ({ user, followers, following }) => {
      this.userData = user;
      this.followersCount = followers.length;
      this.followingCount = following.length;

      this.isFollowing = this.loggedUserId != null
        ? followers.some(f => f.id === this.loggedUserId)
        : false;

      this.loading = false;
    },
    error: (err) => {
      console.error('Erro ao carregar perfil:', err);
      this.loading = false;
    }
  });

  }

  toggleFollow() {
    if (this.loggedUserId == null) {
      alert('Você precisa estar logado para seguir usuários!');
      return;
    }

    if (this.isFollowing) {
      this.followService.unfollowUser(this.loggedUserId, this.userId).subscribe({
        next: () => {
          this.isFollowing = false;
          this.followersCount = Math.max(0, this.followersCount - 1);
        },
        error: (err) => console.error('Erro ao deixar de seguir:', err),
      });
    } else {
      this.followService.followUser(this.loggedUserId, this.userId).subscribe({
        next: () => {
          console.log('Follow enviado com sucesso');
          this.isFollowing = true;
          this.followersCount++;
          this.loadProfile();
        },
        error: (err) => console.error('Erro ao seguir usuário:', err),
      });
    }
  }
}


// TODO: verificar a atualização que não está indo ao dar follow! 