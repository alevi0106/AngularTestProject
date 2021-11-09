import { Component, Input, Output, OnChanges, OnDestroy, OnInit, SimpleChanges, EventEmitter, NgModule } from '@angular/core';

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

  @Output() 
  newItemEvent = new EventEmitter<string>();

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

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  buttonClick($event: Event){  
    $event.stopPropagation();
    console.log("Save button is clicked!", $event);  
  } 

  divClick(){
    console.log("Div CLick");
  }
}
