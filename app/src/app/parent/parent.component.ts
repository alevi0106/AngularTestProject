import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isChild = true;
  channelName = 'Vaibhav';
  constructor() { 
    console.log("Parent constructor");
  }

  ngOnInit(): void {
    console.log("Parent Init");
  }

  displayChild(){
    this.isChild = !this.isChild;
  }
}
