import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input()
  projectPosts!: Post

  @Input()
  Id: string = "0";
}
