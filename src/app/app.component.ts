import { Component, OnInit, AfterViewInit } from '@angular/core';
import { generateTeams } from './logic';
import { testallPlayers, testtopPlayers } from './testdata';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  numberofinputs: number;

  groupofchat = {'Family':2,'Office':1,'Bakchodi':45};

  numberofchats = Object.keys(this.groupofchat).length;

  totalchats: number =0;

  teamGroup = ['Keeper', 'Batsman', 'All-Rounder', 'Bowler'];

  hideRequired = true;

  noOfGroupResponse = 0;

  showButton = false;

  allPlayers = [];
  topPlayers = [];
  allTeams = [];


  

  ngOnInit(){
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    })
    
  }

  submit() {
    // this.allPlayers = testallPlayers;
    // this.topPlayers = testtopPlayers;
    this.allTeams = generateTeams(this.allPlayers, this.topPlayers);
  }

  clear() {
    this.allTeams = [];
  }

  requiredContainer(event){
    this.noOfGroupResponse++;
   event.forEach(element => {
    this.allPlayers.push(element);
   })
  }

  pushTopChange(value: string) {
    const top =  value.replace(" ", "").split(",");

    this.topPlayers = this.allPlayers.filter(a =>
        Object.keys(a).some(p => top.includes(a[p])));

    this.showButton = this.topPlayers.length ? true : false;
  }

messageMapping:
      {[k: string]: string} = {'=0': 'No New Messages', '=1': 'message from '+this.numberofchats+' chats', 'other': '# messages from '+this.numberofchats+' chats'};

      sortoption = '';
  productsList = [
    { productName: 'Samsung J7', price: 18000 },
    { productName: 'Apple iPhone 6S', price: 60000 },
    { productName: 'Lenovo K5 Note', price: 10000 },
    { productName: 'Nokia 6', price: 15000 },
    { productName: 'Vivo V5 Plus', price: 26000 }
  ];
}


