import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ThreeCanvasComponent } from './three-canvas/three-canvas.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { InfoComponent } from './Info/Info.component';
import { ProjectsComponent } from './Projects/Projects.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule
  ],
  declarations: [NavbarComponent, ThreeCanvasComponent, HomeComponent, InfoComponent, ProjectsComponent],
  exports: [NavbarComponent, ThreeCanvasComponent, HomeComponent, InfoComponent, ProjectsComponent]
})
export class UserModule { }
