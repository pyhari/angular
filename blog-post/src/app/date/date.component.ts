import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  dateMessage: String; 
  firstNumber: number;
  constructor() { 
    
  }

  ngOnInit() {
    setInterval(()=> 
    {
      this.dateMessage=new Date().toLocaleString();
    },1000);

    setInterval(()=> 
    {
      this.firstNumber=new Date().getMilliseconds();
    },1000);


  }

  addTwonumbers(secondNumber: number)
  {
    return this.firstNumber +secondNumber;
  }

}
