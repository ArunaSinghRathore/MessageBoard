import { Injectable } from "@angular/core";
import { PostRead } from './models/post-read';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PostCreate } from './models/post-create';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}
  public newPost=new PostCreate();
  
  public getAllPosts(pageNumber: number, pageSize: number): Observable<Array<PostRead>> {
    return this.http.get<Array<PostRead>>("http://messageboardapi.azurewebsites.net/MessageBoard" + "?PageIndex=" + pageNumber + "&PageSize=" + pageSize);  
    
  }
  public createNewPost(newPost: PostCreate): Observable<boolean> {
    var response = this.http.post<boolean>("http://messageboardapi.azurewebsites.net/MessageBoard", newPost);
    return response;    
  }
}
