import { Component, OnInit } from '@angular/core';
import { User } from '../address-card/user-model';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  private name: String;
  private age: number;
  private user: User;
  constructor() {
      this.user = new User();
    this.user.name = "Harikumar R";
    this.user.title ="Software Architect";
    this.user.address="102342 Lark Ave ON Canada";
    this.user.phones=["603-259-7899","458-359-7897"];


   }

  ngOnInit() {
    this.name="Welcome to Angular!";
  }

}
