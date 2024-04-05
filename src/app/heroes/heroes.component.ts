import { Component, OnInit } from '@angular/core';

import { Hero, Hero2 } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero2 | undefined;

  heroes: Hero2[] | undefined;
  

  constructor(private heroService: HeroService, private messageService: MessageService, private postService : PostService) { }

  
  ngOnInit() {
    this.postService.searchHeroes().subscribe( (resp: any) => {
      this.heroes = resp;
      console.log (resp);
      
    });

    //this.getHeroes()
  }

  onSelect(hero: Hero2): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
   /* this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);*/
  }
}