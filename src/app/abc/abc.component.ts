import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {
  public text: string = "Hello";
  public caption: string = "Click Me!";
  public text1: number = Date.now();
  randomNums: number[] = [3, 6, 7, 8, 1, 122, 44, 67, 790];

  ngOnInit(): void {
  }

  getCurrentTime(): any {
    return this.text1;
  }

  onClick() {
    alert('hello');
  }
}
