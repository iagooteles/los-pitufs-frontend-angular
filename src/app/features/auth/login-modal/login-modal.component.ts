import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { LoginDTO } from '../../../core/models/login-dto.model';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

  email = '';
  password = '';
  isSubmitting = false;

  private authService = inject(AuthService);

  onSubmit() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }

    this.isSubmitting = true;

    const loginDTO: LoginDTO = { email: this.email, password: this.password };

    this.authService.login(loginDTO).subscribe({
      next: (res) => {
        
        console.log('Resposta do login:', res); // <-- aqui, log completo
        console.log('Usuário logado:', res.user); // <-- só o user
        console.log('Token JWT::', res.token);    // <-- só o token

        alert(`Bem-vindo, ${res.user.username}!`);
        localStorage.setItem('token', res.token);
        this.isSubmitting = false;
        this.close.emit();
      },
      error: (err) => {
        console.error(err);
        alert('Email ou senha incorretos.');
        this.isSubmitting = false;
      }
    });
  }
}
