import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finger';

  url ='https://jsonplaceholder.typicode.com/users'; //https://jsonplaceholder.typicode.com/users <URL 
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => { //método get data
      console.log(data);

      // faltando linkar com o ngFor HTML
    });
  
  }
}
