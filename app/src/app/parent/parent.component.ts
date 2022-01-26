import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class ParentComponent implements OnInit {

  isChild = true;
  channelName = 'Vaibhav';
  fullName = '';
  item = '';
  constructor() { 
    console.log("Parent constructor");
  }

  ngOnInit(): void {
    console.log("Parent Init");
  }

  displayChild(){
    this.isChild = !this.isChild;
  }

  getChildItem(newItem: string):void{
    this.item = newItem;
    console.log(this.item);
  }
}
