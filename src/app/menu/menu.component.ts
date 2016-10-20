import {Component, OnInit, EventEmitter} from '@angular/core';
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
    this.menuVisible=false;

  }

  ngOnInit() {
    this.menuVisible = false;
  }
  @Output() menuToggled = new EventEmitter();
  @Input() menuVisible:boolean;

  toggleMenu(){
    this.menuVisible = !this.menuVisible;
    this.menuToggled.emit();
  }



}
