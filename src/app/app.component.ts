import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ng-mod-demo';

  constructor() {}

  ngOnInit() {
    console.log('App init');
  }
}
