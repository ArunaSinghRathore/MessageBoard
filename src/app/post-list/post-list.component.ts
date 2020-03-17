import { Component, OnInit, Output, ViewChild } from "@angular/core";
import { PostRead } from "../models/post-read";
import { PostService } from "../post-service.service";
import { MatDialog, PageEvent, MatPaginator } from "@angular/material";
import { CreatePostComponent } from "../create-post/create-post.component";
import { DatePipePipe } from "../pipes/date-pipe.pipe";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import * as signalR from "@aspnet/signalr";
import { PostCreate } from "../models/post-create";
import { AlertifyService } from "../alertify.service";
import { NotificationService } from "../Notification.service";
import { environment } from "src/environments/environment";
import { ListPostRead } from '../models/list-post-read';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts = new ListPostRead();
  
  private _hubConnection: HubConnection;
  private pageIndex: number = 0;
  private pageSize: number = 10;
  public pagerLength : number = 150;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private postService: PostService,
    public alertify: AlertifyService,
    public matDialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.populateAllPosts();
    this.buildConnection();
    this.listenToChange();
  }

  public buildConnection(): void {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:5001/Message", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();
    this._hubConnection
      .start()
      .then(() => console.log("Connection Started"))
      .catch(() =>
        console.log("Some error occoured while refreshing the list!")
      );
  }

  public listenToChange(): void {
    this._hubConnection.on("sendToClient", newPost => {
      console.log("Message is sent");

      if (this.pageIndex == 0) {
        this.populateAllPosts();
      } else {
        this.paginator.firstPage();
      }

      this.alertify.success(newPost.name + " just posted a message!");
    });
  }

  public populateAllPosts(event?: PageEvent) {
    if (!(event == null || event == undefined)) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
    }
    this.postService.getAllPosts(this.pageIndex, this.pageSize).subscribe(x => {
      console.log(x);
      this.posts = x;
      this.pagerLength = x.pagesCount;
    });
  }

  public openCreatePostDialog(): void {
    this.matDialog
      .open(CreatePostComponent, {
        width: environment.width,
        height: environment.height
      })
      .afterClosed()
      .subscribe(() => {
        console.log("window close");
      });
  }
}
