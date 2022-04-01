import { Component, OnInit } from '@angular/core';
import { Question9Service } from './question9.service';

@Component({
  selector: 'app-question9-b',
  templateUrl: './question9-b.component.html',
  styleUrls: ['./question9.component.css']
})
export class Question9BComponent implements OnInit {

  constructor(public q9: Question9Service) { }

  ngOnInit(): void {
  }

}