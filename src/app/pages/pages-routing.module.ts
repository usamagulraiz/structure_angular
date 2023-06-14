import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from '../gurads/auth.guard';
import { InnerGuard } from '../gurads/inner.guard';

const routes: Routes = [
  // { path: '', redirectTo: '/pages/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, canActivate: [InnerGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [InnerGuard] },
  { path: 'about', component: AboutComponent, canActivate: [InnerGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
