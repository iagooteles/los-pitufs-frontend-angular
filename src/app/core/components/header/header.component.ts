import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from '../../../features/auth/login-modal/login-modal.component';
import { RegisterModalComponent } from '../../../features/auth/register-modal/register-modal.component';
import { AuthService } from '../../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginModalComponent, RegisterModalComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showRegister = false;
  showLogin = false;

  constructor(public authService: AuthService) {}

  openRegister() { this.showRegister = true; }
  closeRegister() { this.showRegister = false; }

  openLogin() { this.showLogin = true; }
  closeLogin() { this.showLogin = false; }

  logout() {
    this.authService.logout();
  }
}
