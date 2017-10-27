import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  canSave = true;
 @Input() isClicked: boolean = true;

  onClick(){
    this.isClicked = !this.isClicked;

  }

}
