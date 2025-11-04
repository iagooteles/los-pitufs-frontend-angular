import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('los-pitufs-frontend-angular');
}
