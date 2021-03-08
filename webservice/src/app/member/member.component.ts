import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  email;
  fullname;
  allproducts;
  constructor(private router: ActivatedRoute, private http: HttpClient) {
    this.email = router.snapshot.params['email'];
    console.log(this.email);

  }

  async ngOnInit() {
    let response: any = await this.getUser();
    console.log(response);
    this.fullname = response.firstName +" "+ response.lastName;
    this.http.get('http://202.28.34.250/webdev/product')
      .subscribe((data:any) => {
        if(data){
          console.log(data);
          this.allproducts = data;
        }
      }, error => {
        console.log('Fail');
      });
  }

  async getUser() {
    let response: any = this.http.get('http://202.28.34.250/webdev/user/' + this.email).toPromise();
    return response;
  }

}
