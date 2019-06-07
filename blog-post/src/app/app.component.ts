import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  title = 'blog-post';
  inputText: string;
  response: any;
  UserName: string;
  constructor(private httpget: HttpServiceService)
  {  
 
  }

  ngOnInit()
  {
    
  }

  Search()
  {
      this.httpget.search(this.UserName)
      .subscribe((response)=> { 
        this.response= JSON.stringify(response);
       console.log(this.response);
      });
    }
  }
