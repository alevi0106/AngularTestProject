import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {

  counter = 0;
  interval : any;
  @Input()
  channel = "";

  constructor() { 
    console.log("Child constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child Onchanges is called");
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log("Child Destroy");
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    console.log("Child Init");
    this.interval = setInterval(()=>{
      this.counter += 1;
      // console.log(this.counter);
    }, 1000);
  }

}
