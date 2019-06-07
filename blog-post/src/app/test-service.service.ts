import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  priintToConsole(arg)
  {
    console.log(arg)
  }
}
