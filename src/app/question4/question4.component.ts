import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  show = false;
  message = 'If you fail to prepare then prepare to fail.';
  constructor() { }

  ngOnInit(): void {
  }

}