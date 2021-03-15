import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `{{ date }},{{menu}},{{date_data|date :YYYY-MM-DD HH:MI:SS}}`

})
export class HomeComponent implements OnInit {
  display: boolean = false;
  display_order: boolean = false;
  display_danger: boolean = false;
  display_confirm: boolean = false;
  display_bill: boolean = false;
  display_receipt: boolean = false;

  num: number = 1;
  temp_num: any;
  table: any;
  selectedTable: any;
  date: any;
  date_data: any;
  menu: any;
  menu_lsit: any
  manage_order: any;
  table_num: any = 1;
  order: any;
  selected_order: any;
  btn: boolean = false;
  sum_total: any;
  isChange: any = false;

  set: boolean = false;
  buff: boolean = false;

  menuID: any;
  tableID: any;
  amount: any;
  bill_id: any;

  text: any = "เพิ่มรายการ";

  constructor(private http: HttpClient) {
    setInterval(() => {
      this.date = new Date().toLocaleString('th-TH', {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
      })
    });
    this.showTable(1);
  }

  async ngOnInit() {
    this.table = await this.http.get('http://localhost/Web-Developer/web-service/table').toPromise();
    this.menu_lsit = await this.http.get('http://localhost/Web-Developer/web-service/menu').toPromise();
    
  }
  async showTable(table_num: any) {
    this.set = false;
    this.buff = false;
    this.sum_total = 0;
    this.manage_order = await this.http.get('http://localhost/Web-Developer/web-service/order/' + table_num).toPromise();
    this.table_num = table_num;
    this.order = this.manage_order;
    if (this.manage_order.length != 0) {
      this.btn = true;
    } else {
      this.btn = false;
    }
    for (let i of this.manage_order) {
      this.sum_total += i.total;
      if (i.groups == "set") {
        this.set = true;
        this.buff = false;
      } else if (i.groups == "buff") {
        this.set = false;
        this.buff = true;
      }
    }
    console.log('set ' + this.set);
    console.log('buff ' + this.buff)
  }

  showDialog(menuID: any) {
    let groups: any;
    this.menuID = this.menu_lsit[menuID].ID;
    groups = this.menu_lsit[menuID].groups;
    this.num = 1;
    this.text = "เพิ่มรายการ";
    for (let a of this.manage_order) {
      if (a.menuID == this.menuID) {
        this.amount = a.amount;
        this.num = this.amount;
        this.text = "ปรับปรุ่งรายการ";
      }
    }
    if (this.set) {
      if (groups == "buff") {
        this.display_danger = true;
      } else {
        this.display = true;
      }
    } else if (this.buff) {
      if (groups == "set") {
        this.display_danger = true;
      } else {
        this.display = true;
      }
    } else {
      this.display = true;
    }
    if (this.display) {
      console.log("insert menu id: " + this.menuID);
      console.log(this.manage_order);
      this.menu = this.menu_lsit[menuID].menuName + " (" + this.menu_lsit[menuID].menuPrice + ") บาท";
      if (this.display) {
        // this.num = 1;
        this.temp_num = this.num;
      }
    }
    
  }

  setPlus() {
    this.num += 1;
    this.temp_num = this.num;
  }

  setMinus() {
    if (this.num != 1) {
      this.num -= 1;
      this.temp_num = this.num;
    }
  }

  async save() {
    let isUpdate: boolean = false;
    console.log("amount : " + this.amount);
    console.log("temp_num : " + this.temp_num);
    this.amount =0;
    for (let a of this.manage_order) {
      if (a.menuID == this.menuID) {
        this.amount = a.amount;
      }
    }
    if (this.temp_num != this.amount) {
      let total_sum: any = 0;
      for (let i of this.menu_lsit) {
        if (i.ID == this.menuID) {
          total_sum = i.menuPrice * this.temp_num;
        }
      }
      for (let o of this.manage_order) {
        if (o.menuID == this.menuID) {
          isUpdate = true;
        }
      }
      if (!isUpdate) {
        let json = { menuID: this.menuID, tableID: this.table_num, amount: this.temp_num, total: total_sum };
        await this.http.post('http://localhost/Web-Developer/web-service/order', JSON.stringify(json)).toPromise();
        this.showTable(this.table_num);
        this.display = false;
        console.log('insert to order');
      } else {
        this.setUpdateAmount();
      }
    }
    this.display = false;
  }

  showOrderDialog(menuID: any, amount: any, tableID: any) {
    this.menuID = menuID;
    this.tableID = tableID;
    this.display_order = true;
    this.menu = this.menu_lsit[menuID - 1].menuName + " (" + this.menu_lsit[menuID - 1].menuPrice + ") บาท";
    this.temp_num = this.manage_order.amount;
    this.temp_num = amount;
    this.num = amount;
  }

  async setUpdateAmount() {
    if (this.temp_num != this.amount) {
      let total_sum: any;
      for (let i of this.menu_lsit) {
        if (i.ID == this.menuID) {
          total_sum = i.menuPrice * this.temp_num;
        }
      }
      let json = { amount: this.temp_num, total: total_sum };
      await this.http.post('http://localhost/Web-Developer/web-service/order/' + this.menuID + "/" + this.table_num, JSON.stringify(json)).toPromise();
      this.showTable(this.table_num);
      this.display_order = false;
    }
    this.display_order = false;
  }

  setClose() {
    this.display_confirm = false;
    this.display_danger = false;
    this.display_bill = false;
    this.display_receipt = false;
    this.showTable(this.table_num);
  }

  showDialogDelete() {
    this.display_confirm = true;
  }

  showDialogBill() {
    this.display_bill = true;
  }

  showDialogRceipt() {
    this.display_receipt = true;
  }

  async setDelete() {
    console.log('delete menu id : ' + this.menuID);
    console.log('delete table id :' + this.table_num);
    await this.http.get('http://localhost/Web-Developer/web-service/order/' + this.menuID + "/" + this.table_num).toPromise();
    this.showTable(this.table_num);
    this.display_confirm = false;
    this.display_order = false;
  }

  async setBill() {
    let id: any = 0;
    this.display_bill = false;
    this.display_receipt = true;
    this.date_data = formatDate(new Date(), 'YYYY-MM-dd hh:mm:ss', 'en_US');
    console.log(this.date_data);
    let json = { tableID: this.table_num, date: this.date_data,data:this.manage_order,sum:this.sum_total};
    await this.http.post('http://localhost/Web-Developer/web-service/receipt', JSON.stringify(json)).toPromise();
    id = await this.http.get('http://localhost/Web-Developer/web-service/receiptmax').toPromise();
    this.bill_id = id;
    await this.http.get('http://localhost/Web-Developer/web-service/manage/' + this.table_num).toPromise();
  }
}
