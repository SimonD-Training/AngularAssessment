import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question9BComponent } from './question9/question9-b.component';
import { Question9Component } from './question9/question9.component';

const routes: Routes = [
  {path: "q9", component: Question9BComponent},
  {path: "**", component: Question9Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }