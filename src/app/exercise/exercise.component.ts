import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Articles: Article[] = [
    {
      title: "Chicken Back",
      author: "Chicken Gravy",
      date: "3/31/2022",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper, felis sit amet auctor ultricies, erat lectus mattis mi, sit amet tincidunt diam lacus non massa. Ut pulvinar auctor rhoncus. Nulla ultricies, ex sit amet scelerisque pretium, neque lorem tempus tellus, sed ultrices odio lacus ac urna. Sed porta euismod auctor. Suspendisse consequat venenatis lorem eget molestie. Sed eget felis eget ante cursus congue. Vivamus ante velit, tincidunt id dolor a, dapibus bibendum lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi lectus odio, fringilla id velit sed, euismod dignissim ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nAenean semper placerat quam sed porttitor. Sed vel urna sit amet ante fringilla scelerisque ac eget nunc. Proin luctus euismod elit quis dapibus. Sed vitae elit sed elit pretium fermentum in sed diam. Vestibulum lobortis nibh eu sem facilisis commodo. Curabitur mollis, tortor nec tincidunt sagittis, enim enim interdum ante, a condimentum mauris ipsum vel massa. In sollicitudin id nulla et imperdiet."
    },
    {
      title: "Chicken Back",
      author: "Chicken Gravy",
      date: "3/31/2022",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper, felis sit amet auctor ultricies, erat lectus mattis mi, sit amet tincidunt diam lacus non massa. Ut pulvinar auctor rhoncus. Nulla ultricies, ex sit amet scelerisque pretium, neque lorem tempus tellus, sed ultrices odio lacus ac urna. Sed porta euismod auctor. Suspendisse consequat venenatis lorem eget molestie. Sed eget felis eget ante cursus congue. Vivamus ante velit, tincidunt id dolor a, dapibus bibendum lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi lectus odio, fringilla id velit sed, euismod dignissim ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nAenean semper placerat quam sed porttitor. Sed vel urna sit amet ante fringilla scelerisque ac eget nunc. Proin luctus euismod elit quis dapibus. Sed vitae elit sed elit pretium fermentum in sed diam. Vestibulum lobortis nibh eu sem facilisis commodo. Curabitur mollis, tortor nec tincidunt sagittis, enim enim interdum ante, a condimentum mauris ipsum vel massa. In sollicitudin id nulla et imperdiet."
    },
    {
      title: "Chicken Back",
      author: "Chicken Gravy",
      date: "3/31/2022",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper, felis sit amet auctor ultricies, erat lectus mattis mi, sit amet tincidunt diam lacus non massa. Ut pulvinar auctor rhoncus. Nulla ultricies, ex sit amet scelerisque pretium, neque lorem tempus tellus, sed ultrices odio lacus ac urna. Sed porta euismod auctor. Suspendisse consequat venenatis lorem eget molestie. Sed eget felis eget ante cursus congue. Vivamus ante velit, tincidunt id dolor a, dapibus bibendum lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi lectus odio, fringilla id velit sed, euismod dignissim ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nAenean semper placerat quam sed porttitor. Sed vel urna sit amet ante fringilla scelerisque ac eget nunc. Proin luctus euismod elit quis dapibus. Sed vitae elit sed elit pretium fermentum in sed diam. Vestibulum lobortis nibh eu sem facilisis commodo. Curabitur mollis, tortor nec tincidunt sagittis, enim enim interdum ante, a condimentum mauris ipsum vel massa. In sollicitudin id nulla et imperdiet."
    }
  ];
}

interface Article{
  title: string,
  author: string,
  date: string,
  body: string
}