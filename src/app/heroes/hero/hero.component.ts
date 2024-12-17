import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return ` ${this.name} - ${this.age} `;
  }

  changeHero():void{
    this.name = 'Spider-man'
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.age = 45;
    this.name = 'Ironman'
  }
  

}
 