import { Component } from '@angular/core';
import { constants } from '../../constants/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {
  homeRoute = constants.routes.home;
}
