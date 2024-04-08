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
  

  constructor(private _heroService: HeroService, private _messageService: MessageService, private _postService : PostService) { }

  
  ngOnInit() {
    this._postService.searchHeroes().subscribe( (resp: any) => {
      this.heroes = resp;
      
    });
  }

  onSelect(hero: Hero2): void {
    this.selectedHero = hero;
    this._messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
   /* this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);*/
  }
}