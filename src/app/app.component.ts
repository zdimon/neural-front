
import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';
import { SocketService } from './socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 
 constructor(private socketService: SocketService) {

  this.socketService.chat$.subscribe((v) => {
    console.log(v);
  });

  this.socketService.notifications$.subscribe((v) => {
    console.log(v);
  });

 }


   sendChat() {
     this.socketService.sendMessage({
       action: 'chat',
       data: 'blabla'
     });
   }


   sendNotify() {
    this.socketService.sendMessage({
      action: 'notify',
      data: 'Warrning!!!!'
    });
  }


}
