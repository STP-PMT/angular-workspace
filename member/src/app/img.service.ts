import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get<any>('assets/Images/img.json')
    .toPromise()
    .then(data => { return data; });
  }
}
