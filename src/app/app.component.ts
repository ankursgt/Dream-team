import { Component, OnInit, AfterViewInit } from '@angular/core';

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

  

  ngOnInit(){

    // for(var i in this.groupofchat){
    //   this.totalchats += this.groupofchat[i];
    //  }
  }

  requiredContainer(event){
    this.hideRequired = event;
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


