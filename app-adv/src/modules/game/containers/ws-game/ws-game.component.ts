import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WsGameService } from '../../services/ws-game.sevice';
import { Message } from 'src/app/utils/interfaces';
import { fromEvent } from 'rxjs';
import { MatCardAvatar } from '@angular/material';
import { ViewState } from '@angular/core/src/view';

@Component({
  selector: 'app-ws-game',
  templateUrl: './ws-game.component.html',
  styleUrls: ['./ws-game.component.scss'],
  providers: [
    WsGameService
  ]
})
export class WsGameComponent implements OnInit {
  ws: WebSocket;

  @ViewChild('avatar') avatar;

  views = new Map();

  constructor(private wsService: WsGameService, private container: ViewContainerRef) { }

  ngOnInit() {
    this.wsService.getUser().subscribe((resp) => {
      if (resp.username) {
        this.init(resp);
      }
    }
    );
  }

  init(resp: any): any {
    this.ws = this.wsService.connect();
    this.ws.onopen = (message) => {
      fromEvent(document.body, 'mousemove').subscribe(({ clientX, clientY }: MouseEvent) => {

        const obj: Message = { clientX, clientY };
        this.ws.send(JSON.stringify(obj));
      })

      this.ws.onmessage = this.updateAvatar.bind(this);
    }
  }

  updateAvatar( { data }: MessageEvent) {

    const parsedData = JSON.parse(data);
      if (this.views.get(parsedData.username)){
        this.views.get(parsedData.username).context.$implicit = parsedData;
      } else {
        const view = this.container.createEmbeddedView(this.avatar, {$implicit: parsedData});
        this.views.set(parsedData.username, view);
      }
  }


}
