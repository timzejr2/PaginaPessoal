import { Component, Input, OnInit } from '@angular/core';
import { PostItem } from 'src/app/models/post-item';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input()
  postItem!: PostItem



  constructor (private sanitizer: DomSanitizer)
  {

  }

  ngOnInit(){
    //this.dangerousUrl = this.sanitizer.bypassSecurityTrustUrl(this.postItem.adress!)
    this.postItem.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.postItem.adress!)
  }
  
}
