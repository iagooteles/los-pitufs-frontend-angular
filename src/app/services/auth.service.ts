import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../core/models/auth-response.model'; 
import { LoginDTO } from '../core/models/login-dto.model';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:8080';

  user = signal<User | null>(null);

  constructor(private http: HttpClient) {}

  login(loginDTO: LoginDTO): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, loginDTO).pipe(
      tap((res) => this.user.set(res.user))
    );
  }

  logout() {
    this.user.set(null);
  }

  isLoggedIn(): boolean {
    return this.user() !== null;
  }
}
