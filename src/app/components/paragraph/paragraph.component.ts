import { Component, Input } from '@angular/core';
import { PostItem } from 'src/app/models/post-item';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {
  @Input()
  postItem!: PostItem
}
