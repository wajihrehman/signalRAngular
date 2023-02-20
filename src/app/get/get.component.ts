import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr'

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {

  ifData: boolean = false;
  signalData: any;
  private _hubConnection!: HubConnection;
  constructor() { }

  ngOnInit(): void {
    this._hubConnection = new HubConnectionBuilder().withUrl('https://localhost:44387/firstHub').build();
    this._hubConnection.start()
      .then(() =>
        console.log("Connection started"))
      .catch((err) => {
        console.log("Connection Failed")
      })

    this._hubConnection.on('BroadcastMessage', (message) => {
      debugger;
      this.signalData = message;
      this.ifData = true;
    })
  }



}
