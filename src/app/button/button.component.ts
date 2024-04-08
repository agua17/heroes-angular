import { Component,Input,Output,OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor( private _location : Location) {}

  ngOnInit(): void {}

  onClick(){
    this._location.back();
  }



}
