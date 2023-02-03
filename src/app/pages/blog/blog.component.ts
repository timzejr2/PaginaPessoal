import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts!: Post[];
  postService: PostService;

  constructor (postService: PostService){
    this.postService = postService
  }

  ngOnInit(): void {
      this.postService.getAllPosts().subscribe(((data) => {
        this.posts = data
      }))
  }
}
