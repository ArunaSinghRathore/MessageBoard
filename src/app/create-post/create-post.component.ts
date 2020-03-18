import { Component, OnInit, Output } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { PostService } from "../post-service.service";
import { PostCreate } from '../models/post-create';

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"]
})


export class CreatePostComponent implements OnInit {
  /* Constructor recieves object of Material Dialog Component */
  constructor(
    public createPostDialog: MatDialogRef<CreatePostComponent>,
    private postService: PostService
  ) {}

  public newPost = new PostCreate();
  
  ngOnInit() {
   
  }
  /*Form Submit event to call post service to create new post */
  onSubmit(): void {
    this.postService.createNewPost(this.newPost)
      .subscribe(x => {this.createPostDialog.close(); });
  }

  onNoClick(): void {
    this.createPostDialog.close();
  }
}
