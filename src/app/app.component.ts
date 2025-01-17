import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  title = 'Homes';
  flash = 'Flash Message';
  isLogged: boolean = this.authService.isConnected();

  isActive(url: string): boolean {
    return this.router.url === url;
  }
  logoff(): void {
    this.isLogged = false;
    this.authService.logout();
    window.location.reload();
  }
}
