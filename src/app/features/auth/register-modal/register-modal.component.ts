import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() openLoginModal = new EventEmitter<void>();

  user: User = {
    email: '',
    password: '',
    username: '',
    bio: '',
    country: ''
  };

  isSubmitting = false;

  constructor(private userService: UserService) {}

  onSubmit() {
    if (!this.user.email || !this.user.password || !this.user.username) {
      alert('Preencha os campos obrigatórios!');
      return;
    }

    this.isSubmitting = true;

    this.userService.create(this.user).subscribe({
      next: (res) => {
        alert(`Usuário ${res.username} criado com sucesso!`);
        this.isSubmitting = false;
        this.close.emit();
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao registrar usuário.');
        this.isSubmitting = false;
      }
    });
  }

  onClose() {
    this.close.emit();
  }

  openLogin() {
    this.close.emit();
    this.openLoginModal.emit();
  }
}
