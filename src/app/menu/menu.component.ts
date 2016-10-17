import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.menuVisible = false;
  }

  @Input() menuVisible:boolean = false;

  toggleMenu(){
    this.menuVisible = !this.menuVisible;
  }



}
