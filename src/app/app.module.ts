import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ErrorComponent } from './pages/error/error.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutMainComponent } from './components/layout-main/layout-main.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthService } from './services/auth.service';

const COMPONENTS = [
  AppComponent,
  ErrorComponent,
  LayoutMainComponent,
  HomeComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    AdminModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
