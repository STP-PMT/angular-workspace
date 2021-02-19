import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'helloworld';
  value: string;
  value1: string;
  value2: string;
  items: MenuItem[];
  list1: any[];
  list2: any[];

  activeItem: MenuItem;
  

  ngOnInit() {
    this.list1 = //initialize list 1
    this.list2 = //initialize list 2
    this.items = [
      { label: 'หน้าแรก', icon: 'pi pi-fw pi-home' },
      { label: 'ประเภท', icon: 'pi pi-fw pi-book' },
      { label: 'แก้ไข', icon: 'pi pi-fw pi-pencil' },
      { label: 'คู่มือ', icon: 'pi pi-fw pi-file' },
      { label: 'ตั้งค่า', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.items[0];
  }
  
}


