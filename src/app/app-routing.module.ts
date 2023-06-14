import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gurads/auth.guard';
import { InnerGuard } from './gurads/inner.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/login-signup/login-signup.module').then(
        (e) => e.LoginSignupModule
      ),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('../app/pages/pages.module').then((e) => e.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
