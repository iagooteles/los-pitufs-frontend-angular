import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from '../../../features/auth/login-modal/login-modal.component';
import { RegisterModalComponent } from '../../../features/auth/register-modal/register-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginModalComponent, RegisterModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showRegister = false;

  openRegister() {
    this.showRegister = true;
  }

  closeRegister() {
    this.showRegister = false;
  }

  openLogin() {
    alert('Login ainda não implementado 😎');
  }
}
