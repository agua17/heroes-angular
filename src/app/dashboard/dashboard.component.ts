import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
i: any;
guardarHeroe(arg0: Hero,arg1: string) {
throw new Error('Method not implemented.');
}
  heroes: Hero[] = [
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' }
  ];

  constructor( private _heroService: HeroService) {}

  ngOnInit(): void {
    //this.getHeroes();
  }
  cambio:number | null = null;
  getHeroes( heroes:Hero, nuevoNombre:String) {
   
    if(nuevoNombre.trim()=== ''){
      alert('El nombre no puede estar vacio');
      return;
    }
   this.cambio = null;
  }

 

}
