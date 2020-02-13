import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  number1 = 1;
  number2 = 10;
  result: number = this.number1 + this.number2;
  nombre = 'James Montealegre';

  constructor() { }

  ngOnInit(): void {
  }

}
