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
  //inyectamos los servicios guardado los valores en campos privados dentro del constructor
  constructor(private heroService : HeroService, private route: ActivatedRoute, private location:Location ){}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id= Number (this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }

}
