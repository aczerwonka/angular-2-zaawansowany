import { Component, OnInit } from '@angular/core';
import { WsGameService } from '../../services/ws-game.sevice';
import { Message } from 'src/app/utils/interfaces';
import { fromEvent } from 'rxjs';

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

  constructor(private wsService: WsGameService) { }

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

      this.ws.onmessage = this.updateAvatar;
    }
  }

  updateAvatar (this: WebSocket, {data}: MessageEvent) {
    const d = JSON.parse(data);
    console.log(d);
  }


}
