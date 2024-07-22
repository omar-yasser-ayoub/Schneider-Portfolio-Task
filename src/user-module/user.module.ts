import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ThreeCanvasComponent } from './three-canvas/three-canvas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule
  ],
  declarations: [NavbarComponent, ThreeCanvasComponent],
  exports: [NavbarComponent, ThreeCanvasComponent]
})
export class UserModule { }
