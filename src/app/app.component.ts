import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ChartApp';
  data: any[] = [];

  constructor(public service: ChartService) { }

  ngOnInit() {
    this.service.getData().subscribe((res: any) => {
      this.data = res.message;
    }, err => {
      console.log(err);
    });
  }


}