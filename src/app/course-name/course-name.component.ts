import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent {
  categories = [
    {id:1,name:"Development"},
    {id:2,name:"Art"},
    {id:3,name:"Languages"},
  ]
  constructor() { }

  
}
