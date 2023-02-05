import { Component, Input, OnInit } from '@angular/core';
import { PostItem } from 'src/app/models/post-item';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-webgl',
  templateUrl: './webgl.component.html',
  styleUrls: ['./webgl.component.css']
})
export class WebglComponent {
  @Input()
  postItem!: PostItem

  trustedUrl!: SafeResourceUrl
  dangerousUrl!: SafeUrl
  modelAdress!: string

  constructor (private sanitizer: DomSanitizer)
  {

  }

  ngOnInit(){
    this.modelAdress = "https://proud-tree-0cf801e10.1.azurestaticapps.net?id=" + this.postItem.adress

    this.dangerousUrl = this.sanitizer.bypassSecurityTrustUrl(this.modelAdress)
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.modelAdress!)
  }
}
