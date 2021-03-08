import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `{{ date }}`
})
export class HomeComponent implements OnInit {
  public table: any;
  public selectedTable:any;
  public date: Date;

  constructor() {
    //date time
    setInterval(() => {
      this.date = new Date()
    }, 1000);
    //table
    this.table = [
      { name: 'โต๊ะ 1', code: 1 },
      { name: 'โต๊ะ 2', code: 2 },
      { name: 'โต๊ะ 3', code: 3 },
      { name: 'โต๊ะ 4', code: 4 }
    ];
    this.selectedTable = this.table.name;
  }

  ngOnInit(): void {
  }

}
