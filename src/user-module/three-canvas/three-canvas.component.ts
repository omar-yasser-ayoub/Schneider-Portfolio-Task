import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-canvas',
  templateUrl: './three-canvas.component.html',
  styleUrls: ['./three-canvas.component.css']
})
export class ThreeCanvasComponent implements OnInit, AfterViewInit {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private clock!: THREE.Clock;
  private particles!: THREE.Points;
  private radius: number = 5; 
  private material: THREE.PointsMaterial = new THREE.PointsMaterial({
    size: 0.01,
    color: 0x7F7F7F,
    sizeAttenuation: true // Changed to true for better performance with size
  });
  private geometry: THREE.BufferGeometry = new THREE.BufferGeometry();
  private vertices: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initThreeJS();
    this.generateParticles();
    this.animate();
    window.addEventListener('resize', this.onWindowResize, false);
  }

  private initThreeJS(): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xE6E6E6);
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setAnimationLoop(this.animate);
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.margin = '0';
    this.renderer.domElement.style.zIndex = '-1';
    document.body.appendChild(this.renderer.domElement);

    this.camera.position.set(4, 2, 5);
    this.clock = new THREE.Clock();
  }

  private generateParticles(): void {
    const particleCount = 5000; // Reduced number of particles
    for (let i = 0; i < particleCount; i++) {
      const theta: number = Math.random() * Math.PI * 2;
      const phi: number = Math.acos((Math.random() * 2) - 1);
      const radius: number = this.radius;
      const x: number = radius * Math.sin(phi) * Math.cos(theta);
      const y: number = radius * Math.sin(phi) * Math.sin(theta);
      const z: number = radius * Math.cos(phi);
      this.vertices.push(x, y, z);
    }
    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.vertices, 3));
    this.particles = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.particles);
  }

  private animate = (): void => {
    const elapsedTime = this.clock.getElapsedTime();
    const rotationDelta = elapsedTime * 0.1;
    if (this.particles) {
      this.particles.rotation.x = rotationDelta;
      this.particles.rotation.y = rotationDelta;
    }

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize = (): void => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
