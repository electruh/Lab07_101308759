import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';
import {HEROES} from '../mock-heroes';
import { NgFor } from '@angular/common';
import {RemoveDashesPipe} from "../remove-dashes.pipe";
import {InputFormatDirective} from "../input-format.directive";

// import { RemoveSpacesPipe } from '../remove-spaces.pipe';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe, RemoveDashesPipe, InputFormatDirective

  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
