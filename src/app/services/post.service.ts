import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { PostItem } from '../models/post-item';
import { catchError, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class PostService {
  //private url = 'https://apigatewayvalentim.azurewebsites.net/'
  private posts: Post[] = [];

  constructor(private http: HttpClient) { }


  /*getAllPosts():Post[] {
    return this.mockPosts;
  }

  getAllProjects():Post[] {
    return this.mockPosts;
  }

  getPost(id: string) {
    const post = this.mockPosts.find((post: Post) => post.id === id);
    return post;
  }

  getPostItens(id: string) {
    const post = this.mockProjects.find((post: Post) => post.id === id);
    return post;
  }*/

  /*getAllPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.url + "gateway/get_posts")
  }
  
  getAllProjects():Observable<Post[]> {
    return this.http.get<Post[]>(this.url + "gateway/get_projects")
  }

  getPost(id: string):Observable<Post> {
    return this.http.get<Post>(this.url + "gateway/get_post/" + id)
  }

  getPostItens(id: string):Observable<PostItem[]> {
    return this.http.get<PostItem[]>(this.url + "gateway/get_post_itens/" + id)
  }*/

  getAllPosts(): Observable<Post[]> {
    const jsonUrl = 'https://postsimages.blob.core.windows.net/posts/posts.json';
    return this.http.get<Post[]>(jsonUrl)
    .pipe(
      map(posts => posts.filter(post => !post.isAProject))
    );
  }
  
  getAllProjects():Observable<Post[]> {
    const jsonUrl = 'https://postsimages.blob.core.windows.net/posts/posts.json';
    return this.http.get<Post[]>(jsonUrl)
    .pipe(
      map(posts => posts.filter(post => post.isAProject))
    );
  }

  getPost(id: string): Observable<Post | null> {
    const jsonUrl = 'https://postsimages.blob.core.windows.net/posts/posts.json';
    return this.http.get<Post[]>(jsonUrl)
    .pipe(
      map(posts => posts.find(post => post.id === id) || null)
    );
  }

  getPostItens(id: string):Observable<PostItem[] | null> {
    const jsonUrl = 'https://postsimages.blob.core.windows.net/posts/posts.json';
    return this.http.get<Post[]>(jsonUrl)
      .pipe(
        map(posts => {
          const selectedPost = posts.find(post => post.id === id);
          return selectedPost && selectedPost.PostItens
            ? selectedPost.PostItens
            : null;
        })
    );
  }
}
