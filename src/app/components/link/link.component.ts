import { Component, Input } from '@angular/core';
import { PostItem } from 'src/app/models/post-item';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input()
  postItem!: PostItem
}
