import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainComponent } from "./main/main.component";
import { NewsComponent } from "./news/news.component";
import { ContactComponent } from "./contact/contact.component";

export const routes: Routes = [
    {
        path: '',
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
            }
        ]
    },
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }