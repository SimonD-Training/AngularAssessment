import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.css']
})
export class Question7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  give(e: Event, form: NgForm, control: string){
    form.controls[control]?.setValue((e.target as HTMLInputElement).value);
  }

}
