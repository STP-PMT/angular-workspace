import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `{{ date }},{{menu}}`

})
export class HomeComponent implements OnInit {
  num: number = 1;
  temp_num: any;
  table: any;
  tableCode: any;
  selectedTable: any;
  display: boolean = false;
  display_order: boolean = false;
  date: any;
  menu: any;
  menu_lsit: any
  manage_order: any;
  nTable: any = 1;
  order: any;
  selected_order: any;
  btn: boolean = false;
  sum_total: any;

  constructor(private http: HttpClient) {

    //date time
    setInterval(() => {
      this.date = new Date().toLocaleString('th-TH', {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
      })
    }, 1000);
    //table

    this.showTable(1);
    
  }

  async ngOnInit() {
    this.table = await this.http.get('http://localhost/Web-Developer/web-service/table').toPromise();
    this.menu_lsit = await this.http.get('http://localhost/Web-Developer/web-service/menu').toPromise();

  }
  async showTable(table_num: any) {
    this.sum_total = 0;
    console.log("table" + table_num);
    this.manage_order = await this.http.get('http://localhost/Web-Developer/web-service/order/' + table_num).toPromise();
    this.nTable = table_num;
    this.order = this.manage_order;
    if (this.manage_order.length != 0) {
      this.btn = true;
    } else {
      this.btn = false;
    }

    for (let i of this.manage_order) {
      this.sum_total += i.total;
    }
  }

  showDialog(name: any) {
    this.display = true;
    console.log(name);
    this.menu = this.menu_lsit[name].menuName + " (" + this.menu_lsit[name].menuPrice + ") บาท";

    if (this.display) {
      this.num = 1;
      this.temp_num = this.num;
    }
  }

  setAdd() {
    this.num += 1;
    this.temp_num = this.num;
  }

  setMinus() {
    if (this.num != 1) {
      this.num -= 1;
      this.temp_num = this.num;
    }
  }

  save() {
    console.log(this.temp_num);
    this.display = false;
  }

  showOrderDialog(menuID: any) {
    this.display_order = true;
    console.log(menuID);
    this.menu = this.menu_lsit[menuID - 1].menuName + " (" + this.menu_lsit[menuID - 1].menuPrice + ") บาท";
  }
}
