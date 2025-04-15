import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent  implements OnInit {
  @Input() chat: any
  @Input() current_user_id

  constructor() { }

  ngOnInit() {}

}
