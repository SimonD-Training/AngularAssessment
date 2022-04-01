import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { Question8Component } from './question8/question8.component';
import { Question9Component } from './question9/question9.component';
import { FormsModule } from '@angular/forms';
import { SideScrollDirective } from './side-scroll.directive';
import { Question9BComponent } from './question9/question9-b.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question6Component,
    Question7Component,
    Question8Component,
    Question9Component,
    SideScrollDirective,
    Question9BComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
