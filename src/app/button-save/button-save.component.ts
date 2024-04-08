import { Component, OnInit,Input,Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button-save',
  templateUrl: './button-save.component.html',
  styleUrls: ['./button-save.component.css']
})
export class ButtonSaveComponent implements OnInit {
 constructor(private _location: Location){}

 ngOnInit(): void {
   
 }

 saveHeroes(){
  //this._location.save();
 }
}
