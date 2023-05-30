import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styles: [`* { font-family: Lato; }`]
})
export class GroupComponent implements OnInit {
  @Input() group: string;
  @Output() validated =  new EventEmitter<any[]>();

  numberofinputs: number;
  keeperSelector;
  batsmanSelector;
  allRounderSelector;
  bowlerSelector;
  arr = [];

  flag =0;

  constructor(){

  }
  

  ngOnInit(){
    
  }

 

  gettrigger(event) {
    this.numberofinputs = event.target.value;
  }

  pushChange(name, group) {
    if(!name){
      return;
    }
    this.flag++;
    let entry = {name: name, group: group};
    this.arr.push(entry);
    if(this.flag == this.numberofinputs){
      this.validated.emit(this.arr);
    }
   
  }
}
