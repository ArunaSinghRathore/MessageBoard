import { Injectable } from "@angular/core";
import { PostRead } from './models/post-read';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PostCreate } from './models/post-create';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ListPostRead } from './models/list-post-read';



@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}
  public newPost=new PostCreate();
  
  public getAllPosts(pageNumber: number, pageSize: number): Observable<ListPostRead> {
    console.log(environment.baseUrl);
    return this.http.get<ListPostRead>(environment.baseUrl + "?PageIndex=" + pageNumber + "&PageSize=" + pageSize);  
    
  }
  public createNewPost(newPost: PostCreate): Observable<boolean> {
    var response = this.http.post<boolean>(environment.baseUrl, newPost);
    return response;    
  }
}
