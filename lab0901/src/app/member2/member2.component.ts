import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-member2',
  templateUrl: './member2.component.html',
  styleUrls: ['./member2.component.css']
})
export class Member2Component implements OnInit {
  i;
  constructor(public data: DataService, private router: ActivatedRoute) {
    let idx = router.snapshot.params["index"];
    this.i = idx;
    console.log(data.cars[idx].brand);
  }

  ngOnInit(): void {
  }

  showCar() {

  }

}
