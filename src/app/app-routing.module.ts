import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { NewsComponent } from './dashboard/news/news.component';
import { ContactComponent } from './dashboard/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
