import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from '../../constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate([constants.routes.login]);
  }
}
