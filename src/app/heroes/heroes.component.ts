import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
add(arg0: string) {
throw new Error('Method not implemented.');
}
delete(_t10: Hero) {
throw new Error('Method not implemented.');
}

  selectedHero: Hero | undefined;

  heroes: Hero[] | undefined;

  constructor(private heroService: HeroService, private messageService: MessageService, private postService : PostService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}