import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
})
export class BlogCardComponent implements OnInit {
  @Input()
  blogPosts!: Post;

  @Input()
  Id: string = "0";

  constructor() {}

  ngOnInit(): void {
      
  }
}
