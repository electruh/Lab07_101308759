import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HeroesComponent} from "./heroes/heroes.component";
import {NgModel} from "@angular/forms";
import {HEROES} from "./mock-heroes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent,RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab07_101308759';
}
