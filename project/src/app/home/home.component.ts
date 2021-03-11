import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `{{ date }},{{menu}}`

})
export class HomeComponent implements OnInit {
  display: boolean = false;
  display_order: boolean = false;
  display_danger: boolean = false;
  display_confirm: boolean = false;
  display_bill :boolean = false;
  display_receipt:boolean = false;

  num: number = 1;
  temp_num: any;
  table: any;
  tableCode: any;
  selectedTable: any;
  date: any;
  date_data:any;
  menu: any;
  menu_lsit: any
  manage_order: any;
  nTable: any = 1;
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
  bill_id:any;

  constructor(private http: HttpClient) {
    setInterval(() => {
      this.date = new Date().toLocaleString('th-TH', {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
      })
    }, 1000);
    this.showTable(1);
  }

  async ngOnInit() {
    this.table = await this.http.get('http://localhost/Web-Developer/web-service/table').toPromise();
    this.menu_lsit = await this.http.get('http://localhost/Web-Developer/web-service/menu').toPromise();

  }
  async showTable(table_num: any) {
    this.sum_total = 0;
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
      if (i.tableID == this.nTable && i.menuID == 3 || i.menuID == 4) {
        this.set = true;
        this.buff = false;
      } else if (i.tableID == this.nTable && i.menuID == 5 || i.menuID == 6) {
        this.set = false;
        this.buff = true;
      }
    }
    console.log('set ' + this.set);
    console.log('buff ' + this.buff)
  }

  showDialog(menuID: any) {
    this.menuID = this.menu_lsit[menuID].ID;
    if (this.set) {
      if (this.menuID == 5 || this.menuID == 6) {
        this.display_danger = true;
      } else {
        this.display = true;
      }
    } else if (this.buff) {
      if (this.menuID == 1 || this.menuID == 2 || this.menuID == 3 || this.menuID == 4) {
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
      for (let a of this.manage_order) {
        if (a.menuID == this.menuID) {
          this.amount = a.amount;
        }
      }

      this.menu = this.menu_lsit[menuID].menuName + " (" + this.menu_lsit[menuID].menuPrice + ") บาท";
      if (this.display) {
        this.num = 1;
        this.temp_num = this.num;
      }
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

  async save() {
    let isUpdate: boolean = false;
    console.log(this.amount);
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
        let json = { menuID: this.menuID, tableID: this.nTable, amount: this.temp_num, total: total_sum };
        await this.http.post('http://localhost/Web-Developer/web-service/order', JSON.stringify(json)).toPromise();
        this.showTable(this.nTable);
        this.display = false;
        console.log('insert to order');
      } else {
        this.setUpdateAmount();
      }

    }
    this.display = false;
  }

  showOrderDialog(menuID: any, amount: any, tableID: any) {
    this.amount = amount;
    this.menuID = menuID;
    this.tableID = tableID;
    this.display_order = true;
    console.log(menuID);
    this.menu = this.menu_lsit[menuID - 1].menuName + " (" + this.menu_lsit[menuID - 1].menuPrice + ") บาท";
    this.temp_num = this.manage_order.amount;
    console.log("amount" + amount);
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
      await this.http.post('http://localhost/Web-Developer/web-service/order/' + this.menuID + "/" + this.nTable, JSON.stringify(json)).toPromise();
      this.showTable(this.nTable);
      this.display_order = false;
      console.log('in')
    }
    this.display_order = false;
  }

  setClose() {
    this.display_danger = false;
    this.display_bill = false;
    this.display_receipt = false;
  }

  showDialogDelete(){
    this.display_confirm = true;
  }

  showDialogBill(){
    this.display_bill = true;
  }

  showDialogRceipt(){
    this.display_receipt = true;
  }

  async setDelete(){
    console.log('menu id : '+this.menuID);
    console.log('table id :'+this.nTable);
    await this.http.get('http://localhost/Web-Developer/web-service/order/' + this.menuID + "/" + this.nTable).toPromise();
    this.showTable(this.nTable);
    this.display_confirm = false;
    this.display_order = false;
  }

  async setBill(){
    let id:any;
    this.display_bill = false;
    this.display_receipt = true;
    this.date_data = this.date+" น.";
    console.log(this.menuID);
    console.log(this.nTable);
    console.log(this.date_data);
    console.log(this.manage_order);
    let json = { tableID: this.nTable, date: this.date_data,data:this.manage_order};
    await this.http.post('http://localhost/Web-Developer/web-service/receipt', JSON.stringify(json)).toPromise();
    // id = await this.http.get('http://localhost/Web-Developer/web-service/receipt').toPromise();
    // for(let i of id){
    //   this.bill_id = i;
    // }
    // console.log(this.bill_id);
  }
}
