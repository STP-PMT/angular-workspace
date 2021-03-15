import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  date: any;

  receipt_list:any;
  selected_receipt:any;
  receipt_order:any;
  receipt_sum:any;
  receipt_length:any;
  constructor(private http: HttpClient) {
    //date time
    setInterval(() => {
      this.date = new Date().toLocaleString('th-TH', {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
      })
    }, 1000);
  }

 async ngOnInit() {
  this.receipt_list = await this.http.get('http://localhost/Web-Developer/web-service/receipt').toPromise();
  this.receipt_length = this.receipt_list.length;
  }

  setDate(date:any){
    let date_data:any = new Date(date).toLocaleString('th-TH', {
      year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    })
    return date_data +' น.';
  }


  async showTable(ID: any) {
    this.receipt_order = await this.http.get('http://localhost/Web-Developer/web-service/receipt/' + ID).toPromise();
    this.receipt_sum =await this.http.get('http://localhost/Web-Developer/web-service/receiptsum/' + ID).toPromise();
  }

}
