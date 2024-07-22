import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../user-module/Home/Home.component';
import { InfoComponent } from '../user-module/Info/Info.component';
import { ProjectsComponent } from '../user-module/Projects/Projects.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'info', component: InfoComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
