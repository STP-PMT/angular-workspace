import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-member1',
  templateUrl: './member1.component.html',
  styleUrls: ['./member1.component.css']
})
export class Member1Component implements OnInit {
  idx;
  constructor(private router : Router,public data:DataService) { }

  ngOnInit(): void {
  }
  goto(){
    this.data.cars = [
      {
        brand: "Toyota",
        model: "vios",
        year: 2012,
        prince: 260000
      },
      {
        brand: "BMW",
        model: "vios",
        year: 2019,
        prince: 560000
      },
      {
        brand: "Audi",
        model: "vios",
        year: 2019,
        prince: 560000
      },
      {
        brand: "Alfa",
        model: "vios",
        year: 2019,
        prince: 560000
      }, {
        brand: "Chevrolet",
        model: "vios",
        year: 2019,
        prince: 560000
      }
  
    ];
    this.router.navigateByUrl("/member2/"+this.idx);
  }

}
