import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Question9Service } from './question9.service';

interface articleJsonInterface {
  [key: string]: articleInterface[]
}

interface articleInterface {
  src: string,
  title: string,
  content: string,
  fullcontent: string,
  author: string,
  date: string
}

@Component({
  selector: 'app-question9',
  templateUrl: './question9.component.html',
  styleUrls: ['./question9.component.css']
})
export class Question9Component implements OnInit {

  articles: articleInterface[] = [];
  constructor(private http: HttpClient, private q9: Question9Service) {

  }

  ngOnInit(): void {
    let obj: articleJsonInterface;
    this.http.get("assets/articles.json", { responseType: "json" }).subscribe((data) => {
      obj = JSON.parse(JSON.stringify(data));
      obj["list"].forEach((element) => {
        this.articles.push(element);
      });
    });
  }

  activate(a: articleInterface){
    this.q9.AArticle = a;
  }

}