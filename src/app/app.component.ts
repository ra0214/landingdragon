import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './component/head/head.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { CardsComponent } from './component/cards/cards.component';
import { CarruselComponent } from './component/carrusel/carrusel.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, PrincipalComponent, CardsComponent, CarruselComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingpage';
}
