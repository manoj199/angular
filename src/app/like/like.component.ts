import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() likesCount : number;
  @Input() isLiked    : boolean;

  onClick(){
    this.likesCount += (this.isLiked) ? -1 : +1;
    this.isLiked = !this.isLiked; 
  }

}
