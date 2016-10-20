import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.css',
    '../shared/shared-animators.css']
})
export class CardDemoComponent implements OnInit {
  public visibleSubtitle:boolean;
  constructor() {
    this.visibleSubtitle = false;

  }

  ngOnInit() {
    setTimeout(()=>this.visibleSubtitle = true, 400)
  }

}
