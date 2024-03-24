import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.scss',
})
export class TableDataComponent {
  @Input() keys: string[] = [];
  @Input() data: any[] = [];
}
