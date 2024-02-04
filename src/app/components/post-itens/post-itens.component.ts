import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from 'src/app/models/enum/item-type';
import { PostItem } from 'src/app/models/post-item';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post-itens',
  templateUrl: './post-itens.component.html',
  styleUrls: ['./post-itens.component.css']
})
export class PostItensComponent implements OnInit {
  postService!: PostService

  @Input()
  postItens!: PostItem[]

  @Input()
  postId: string = "0"

  @Input()
  itemType!: ItemType

  

  constructor(postService: PostService)
  {
    this.postService = postService;
  }

  ngOnInit(): void {
    this.postService.getPostItens(this.postId!).subscribe((data: PostItem[] | null) => {
      if (data !== null) {
        this.postItens = data;
        console.log(this.postItens);
      } else {
        
      }
    });
  }
}
