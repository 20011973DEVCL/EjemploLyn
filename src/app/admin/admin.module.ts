import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TableDataComponent } from './components/table-data/table-data.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';

const COMPONENTS = [
  DashboardComponent,
  LayoutAdminComponent,
  TableDataComponent,
  AdminHeaderComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
