import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab0901';
  cars = [
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
  car;
  brand:string;
  model:string;
  year:number;
  input:any;
  constructor() {
     this.car = JSON.stringify(this.cars[0]);
     this.brand = this.cars[0].brand;
     this.model = this.cars[0].model;
     this.year =this.cars[0].year;
    // for(let car of this.cars){
    //   if(car.prince > 300000){
    //     console.log("Value: "+JSON.stringify(car));
    //   }else{
    //     console.log("Price too low");
    //   }
     
    // }
    
  }
  show(){
    if(this.input == 2){
      console.log(this.cars[this.input]);
    }
   
  }
}
