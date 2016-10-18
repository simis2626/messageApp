import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{


  menuVis:boolean = false;

  toggleMenu(){
    this.menuVis = !this.menuVis;
  }

  ngAfterViewInit(){

  }




  title = 'app works!';
}
