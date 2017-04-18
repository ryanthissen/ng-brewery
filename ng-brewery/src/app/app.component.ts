import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Welcome to Angular Brewery!';
  link = 'http://the-ipa-api.herokuapp.com/ipa-api/search?name=';
  http: Http;
  results = [];

  constructor(http: Http) {
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
    const apiLink = this.link + searchTerm.value;

    this.http.request(apiLink)
      .subscribe((res: Response) => {
        this.results = res.json();
        console.log('this is results: ', this.results);
      });
  }
};
