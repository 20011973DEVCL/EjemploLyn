import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  keys: string[] = [];
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.keys = this.dataService.getHeaders();
    this.data = this.dataService.getData();
    console.log({ keys: this.keys, data: this.data });
  }
}
