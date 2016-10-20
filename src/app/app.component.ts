import {Component, AfterViewInit, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './shared/shared-animators.css']
})
export class AppComponent implements OnInit{

  visibleSubtitle:boolean;
  menuVis:boolean = false;
  constructor(){
    this.visibleSubtitle = false;
  }
  toggleMenu(){
    this.menuVis = !this.menuVis;
  }


  ngOnInit(){
    setTimeout(()=>this.visibleSubtitle = true, 300);
  }




  title = 'app works!';
}
