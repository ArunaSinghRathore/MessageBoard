import { Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import * as signalR from "@aspnet/signalr";
import { PostRead } from "./models/post-read";
import { AlertifyService } from "./alertify.service";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(public alertify: AlertifyService) {}
  private _hubConnection: HubConnection;
  public newPost = new PostRead();
 

  public buildConnection(): void {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(environment.signalRUrl, {
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

}
