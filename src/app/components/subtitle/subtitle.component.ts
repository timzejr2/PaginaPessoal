import { Component, Input } from '@angular/core';
import { PostItem } from 'src/app/models/post-item';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent {
  @Input()
  postItem!: PostItem
}
