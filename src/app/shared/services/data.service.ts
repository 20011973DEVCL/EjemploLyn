import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private myData = [
    { id: '1', value: 'demo 1' },
    { id: '2', value: 'demo 2' },
    { id: '3', value: 'demo 3' },
  ];

  constructor() {}

  getHeaders() {
    return Object.keys(this.myData[0]);
  }

  getData() {
    return this.myData;
  }
}
