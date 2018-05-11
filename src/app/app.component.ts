// import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
// import {ApiService} from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  // constructor(private sv: ApiService) {}

  ngOnInit() {

    // this.sv.getAllfeed()
    //  .subscribe(data => console.log(data));

  }
}
