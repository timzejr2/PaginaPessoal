import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  posts!: Post[];
  postService: PostService;

  constructor (postService: PostService){
    this.postService = postService
  }

  ngOnInit(): void {
    this.postService.getAllProjects().subscribe(((data) => {
      this.posts = data
    }))
  }
}
