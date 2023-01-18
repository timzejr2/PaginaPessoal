import { Component, Input } from '@angular/core';
import { PostItem } from 'src/app/models/post-item';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  @Input()
  postItem!: PostItem

  //imageAdress: string = "../../../assets/Images/angular_banner.png"
  //imageDescription: string = "Logo do Angular em dezembro de 2022"
}
