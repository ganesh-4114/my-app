import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dgf',
  templateUrl: './dgf.component.html',
  styleUrls: ['./dgf.component.css']
})
export class DgfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = "Steve";

  greet(): void {
      console.log("Hello " + this.name);
  };

}
