import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  images: string[] = [
    './assets/dragon.jpg',
    './assets/peleadores.webp',
    './assets/personajes.webp',
    './assets/gohan.jpg',
    './assets/picolovsgoku.jpg',
    './assets/minigoku.webp'
  ];

  currentIndex: number = 0;

  prevImage() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  } 
}
