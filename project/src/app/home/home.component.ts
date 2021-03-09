import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `{{ date }},{{menu}}`

})
export class HomeComponent implements OnInit {
  num:number = 1;
  temp_num:any;
  table: any;
  tableCode: any;
  selectedTable: any;
  display: boolean = false;
  date: any;
  data = { "menu": ["เครื่องดื่มไม่อั้น (30 บาท)", "ไอศครีมไม่อั้น (50 บาท)", "ชุดเล็กอิ่มคุ้ม (59 บาท)", "ชุดใหญ่อิ่มแน่น (129 บาท)", "บุฟเฟต์เด็ก (109 บาท)", "บุฟเฟต์ผู้ใหญ่ (159 บาท)"] };
  menu: any;

  constructor(private http: HttpClient) {

    //date time
    setInterval(() => {
      this.date = new Date().toLocaleString('th-TH', {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
      })
    }, 1000);
    //table

    console.log("table");
    let re = this.http.get('http://localhost/Web-Developer/web-service/table')
      .subscribe((reponse:any) => {
        this.table = reponse;
       console.log(reponse);
      }, error => {
        console.log('Fail');
      });
  }

  ngOnInit(): void {
  }


  showDialog(name: any) {
    this.display = true;
    console.log(name);
    this.menu = name;
   
    if(this.display){
      this.num =1;
      this.temp_num = this.num;
    }
  }

  setAdd() {
    this.num +=1;
    this.temp_num = this.num;
  }

  setMinus() {
    if(this.num!=1){
      this.num-=1;
      this.temp_num = this.num;
    }
  }

  save(){
    console.log(this.temp_num);
    this.display = false;
  }
}
