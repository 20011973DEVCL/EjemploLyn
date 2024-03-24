import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutAuthComponent } from './components/layout-auth/layout-auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [AuthComponent, LayoutAuthComponent, FormLoginComponent];

@NgModule({
  declarations: [...COMPONENTS],
  providers: [],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
