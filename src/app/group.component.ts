import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styles: [`* { font-family: Lato; }`]
})
export class GroupComponent implements OnInit {
  @Input() group: string;
  @Output() validated =  new EventEmitter<boolean>()

  numberofinputs: number;
  keeperSelector;
  batsmanSelector;
  allRounderSelector;
  bowlerSelector;

  

  ngOnInit(){
    this.keeperSelector = document.querySelector('#Keeper');
    this.batsmanSelector = document.querySelector('#Batsman');
    this.allRounderSelector = document.querySelector('#All-Rounder');
    this.bowlerSelector = document.querySelector('#Bowler');
    console.log(this.keeperSelector, this.batsmanSelector, this.allRounderSelector, this.bowlerSelector);
  }

 

  gettrigger(n) {
    this.numberofinputs = n;
    // if(this.bowlerSelector && this.bowlerSelector.value){
        this.validateInputs();
    //}
   
    
  }

  validateInputs() {
    console.log("came");
    if(this.keeperSelector.value && this.batsmanSelector.value && this.allRounderSelector.value && this.bowlerSelector.value) {
        this.validated.emit(true);
    }
  }
}
