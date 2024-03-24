import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'admin',
        canActivate: [authGuard], // private routes
        canActivateChild: [authGuard], // private routes
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },

  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
