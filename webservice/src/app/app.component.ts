import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webservice';
  constructor(private http: HttpClient) { }
  listuser() {
    console.log("ok");
    let request = this.http.get('http://202.28.34.250/webdev/user')
      .subscribe(reponse => {
        console.log('Response: ' + JSON.stringify(reponse));
      }, error => {
        console.log('Error: ' + JSON.stringify(error));
      });
    console.log("continue");
    request.unsubscribe();
    console.log("next");
  }
}
