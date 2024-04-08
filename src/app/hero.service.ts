import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';




@Injectable({
  providedIn: 'root',
})



export class HeroService {
  constructor(private messageService: MessageService) { }

  getHero (id: number): Observable<Hero>{
  const hero = HEROES.find (h => h.id == id)!;
  this.messageService.add("Hola ${id}");
  return of (hero);
}

/*getHero (name: string) : Observable<Hero>{
  const names = HEROES.find (h => h.name == name)!;
  this.messageService.add("Hola ${id}");
  return of (hero);
}*/


getHeroes(): Observable<Hero []> {
  const heroes = of(HEROES);
  this.messageService.add('The HeroService Fetched the Heroes');
  return heroes;
}
}
