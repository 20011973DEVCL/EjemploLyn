import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { constants } from '../../../constants/constants';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss',
})
export class AdminHeaderComponent {
  @Input() title: string = 'Dashboard';

  constructor(private router: Router, private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate([constants.routes.home]);
  }
}
