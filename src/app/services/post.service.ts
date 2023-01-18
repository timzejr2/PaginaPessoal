import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Post } from '../models/post';
import { PostItem } from '../models/post-item';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = 'https://localhost:7005/';

  constructor(private http: HttpClient) { }

  getAllPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.url + "Post/get_posts")
  }

  getAllProjects():Observable<Post[]> {
    return this.http.get<Post[]>(this.url + "Post/get_projects")
  }

  getPost(id: string):Observable<Post> {
    return this.http.get<Post>(this.url + "Post/get_post/" + id)
  }

  getPostItens(id: string):Observable<PostItem[]> {
    return this.http.get<PostItem[]>(this.url + "Post/get_post_itens/" + id)
  }
}
