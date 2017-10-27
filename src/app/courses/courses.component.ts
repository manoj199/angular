import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = "List of Courses";
  colSpan = 2;
  courses;
  isActive = true;
  email;

  constructor(service:CoursesService){
    this.courses = service.getCourses();
  }

  onSave($event){
    $event.stopPropagation();
    console.log("On Save Clicked", $event);
  }
  
  onKeyUp(){
    console.log(this.email);
  }
}
