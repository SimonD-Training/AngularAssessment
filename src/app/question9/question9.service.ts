import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class Question9Service {

  AArticle: articleInterface = {
    src: '',
    title: 'The Extremes of Good and Evil',
    content: '',
    fullcontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet efficitur lacus ac posuere. Vestibulum non neque euismod, fringilla sapien in, interdum augue. Etiam in est justo. In efficitur feugiat augue, vitae elementum tortor. Donec bibendum lobortis turpis, quis sollicitudin risus dignissim vitae. Mauris mattis fermentum lorem non facilisis. Cras placerat facilisis est, sit amet luctus libero ultrices eget. Donec quis tellus quis nulla dapibus gravida vitae in ipsum. Curabitur metus tellus, consectetur sit amet tempor et, porttitor ut urna. Pellentesque vel massa in velit feugiat pellentesque. Nullam convallis elit vel massa tempor, eget interdum dolor auctor. Donec ac tincidunt justo. Donec in nulla tempus, mollis lacus ac, ultricies arcu. Integer vel eros nec tellus finibus eleifend. Fusce quis libero condimentum, fermentum enim eu, suscipit dolor.',
    author: 'Cicero',
    date: '45 .BCE'
  };
  constructor() { }
}
