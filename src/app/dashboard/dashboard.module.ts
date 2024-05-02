import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleFirstComponent } from './main/article-first/article-first.component';
import { DashboardRoutingModule } from './dashboard.routing.module';



@NgModule({
  declarations: [
    MainComponent,
    NewsComponent,
    ContactComponent,
    DashboardComponent,
    ArticleFirstComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
