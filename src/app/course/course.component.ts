import { Component} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 301234,
    price: 190.95,
    releaseDate: new Date(2016,3,1),
    someString: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio odio, ullamcorper vel consequat vel, convallis vitae erat. Ut pharetra finibus nibh, ut consequat sem bibendum vel"
  }

}
