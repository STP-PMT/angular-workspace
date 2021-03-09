import { Component, OnInit } from '@angular/core';

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

  constructor() {

    //date time
    setInterval(() => {
      this.date = new Date().toLocaleString('th-TH', {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
      })
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
