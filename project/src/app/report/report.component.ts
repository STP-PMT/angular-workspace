import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  paginate(event){
    //  event.first = 
        event.rows = 8;
        // event.page = 
        // event.pageCount = 
  }

  async showTable(ID: any) {
    this.receipt_order = await this.http.get('http://localhost/Web-Developer/web-service/receipt/' + ID).toPromise();
    this.receipt_sum =await this.http.get('http://localhost/Web-Developer/web-service/receiptsum/' + ID).toPromise();
  }

}
