import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  expr = `“Take up one idea. Make that one
  idea your life; dream of it; think of it; live on that idea. Let the brain, the body,
  muscles, nerves, every part of your body be full of that idea, and just leave every
  other idea alone. This is the way to success, and this is the way great spiritual
  giants are produced.” – Swami Vivekananda.`;
  constructor() { }

  ngOnInit(): void {
  }

}