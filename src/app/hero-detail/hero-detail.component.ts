import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

  hero?:Hero;
  constructor(private _heroService : HeroService, private _route: ActivatedRoute, private _location:Location ){}

  ngOnInit(): void {
    this.getHero();
  }
  getHero() {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._heroService.getHero(id).subscribe(hero=> this.hero = hero );

  }

 
  

}