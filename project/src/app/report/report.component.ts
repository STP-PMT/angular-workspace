import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  date: any;
  constructor() {
    //date time
    setInterval(() => {
      this.date = new Date()
    }, 1000);
  }

  ngOnInit(): void {
  }

}
