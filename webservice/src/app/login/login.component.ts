import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private http: HttpClient, private router : Router)  { }

  ngOnInit(): void {
  }

  login() {
    console.log('login');
    let json = {email :this.email,password:this.password};
    this.http.post('http://202.28.34.250/webdev/login',JSON.stringify(json))
      .subscribe((reponse:any) => {
        if(reponse){
          console.log('Login Done');
          this.router.navigateByUrl('/member/'+this.email);
        }
      }, error => {
        console.log('Fail');
      });

  }
}
