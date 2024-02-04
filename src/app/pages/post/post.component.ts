import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  postService!: PostService;
  post!: Post;

  private id: string | null= "0";

  constructor(postService: PostService, private route: ActivatedRoute)
  {
    this.postService = postService;
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
        this.id = value.get("id")
      )

      this.postService.getPost(this.id!).subscribe(((data) => {
        if (data !== null) {
          this.post = data;
        } else {

        }
      }))
  }

}
